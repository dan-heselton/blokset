// Orchestrates builds: every framework × target into dist/, plus the gallery.
import { mkdirSync, writeFileSync, rmSync, copyFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { ROOT, loadConfig, loadFrameworks, loadComponents, createContext } from "./core/config.js";
import { resolveComponent, usesRuntime, allSelections, selectionKey } from "./core/resolve.js";
import { sharedCss } from "./core/css.js";
import { generateReact, generateAstro, generateHtml, generateVanilla, componentCss, pascal } from "./generators/code.js";
import { generateWebflow } from "./generators/webflow.js";
import { componentManifest, variablesManifest } from "./generators/webflow-manifest.js";
import { motionEsm, motionDts, motionGlobal, webflowFooterCode, gsapCdnTags } from "./runtime/build-runtime.js";
import { renderGallery } from "./gallery/template.js";

const SHARED_INDEX = `@import "./tokens.css";\n@import "./utilities.css";\n@import "./buttons.css";\n`;

function shared(ctx, { esm }) {
  const css = sharedCss(ctx);
  const files = Object.fromEntries(Object.entries(css).map(([k, v]) => [`forge-shared/${k}`, v]));
  files["forge-shared/index.css"] = SHARED_INDEX;
  if (esm) {
    files["forge-shared/motion.js"] = motionEsm();
    files["forge-shared/motion.d.ts"] = motionDts();
  } else {
    files["forge-shared/motion.global.js"] = motionGlobal();
  }
  return files;
}

const demoPage = (title, head, body) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>*,*::before,*::after{box-sizing:border-box}body{margin:0;font-family:Inter,system-ui,sans-serif;-webkit-font-smoothing:antialiased}img{max-width:100%}</style>
<link rel="stylesheet" href="./forge-shared/index.css">
${head}
</head>
<body>
${body}
${gsapCdnTags()}
<script src="./forge-shared/motion.global.js"></script>
</body>
</html>
`;

/** Files for one target, keyed by path relative to the target folder. */
export function targetFiles(specs, ctx, target) {
  const files = {};
  const resolved = new Map(specs.map((s) => [s.id, resolveComponent(s, ctx)]));
  const css = (s) => componentCss(s, resolved.get(s.id), ctx);

  if (target === "react" || target === "astro") {
    Object.assign(files, shared(ctx, { esm: true }));
    for (const s of specs) {
      const r = resolved.get(s.id);
      files[`${pascal(s.id)}.${target === "react" ? "tsx" : "astro"}`] = target === "react" ? generateReact(s, ctx, r) : generateAstro(s, ctx, r);
      files[`${s.id}.css`] = css(s);
    }
  }
  if (target === "html") {
    Object.assign(files, shared(ctx, { esm: false }));
    for (const s of specs) {
      files[`${s.id}.html`] = generateHtml(s, ctx, resolved.get(s.id));
      files[`${s.id}.css`] = css(s);
    }
    files["index.html"] = demoPage(
      "Component Forge — HTML",
      specs.map((s) => `<link rel="stylesheet" href="./${s.id}.css">`).join("\n"),
      specs.map((s) => files[`${s.id}.html`]).join("\n")
    );
  }
  if (target === "vanilla") {
    Object.assign(files, shared(ctx, { esm: false }));
    for (const s of specs) {
      files[`${s.id}.js`] = generateVanilla(s, ctx, resolved.get(s.id));
      files[`${s.id}.css`] = css(s);
    }
    files["index.html"] = demoPage(
      "Component Forge — Vanilla JS",
      specs.map((s) => `<link rel="stylesheet" href="./${s.id}.css">`).join("\n"),
      `<main id="app"></main>
<script type="module">
${specs.map((s, i) => `import { mount as mount${i} } from "./${s.id}.js";`).join("\n")}
${specs.map((_, i) => `mount${i}("#app");`).join("\n")}
</script>`
    );
  }
  if (target === "webflow") {
    for (const s of specs) {
      const resolvedSpec = resolved.get(s.id);
      files[`${s.id}.json`] = JSON.stringify(generateWebflow(s, ctx, resolvedSpec), null, 2);
      files[`${s.id}.component.json`] = JSON.stringify(componentManifest(s, ctx, resolvedSpec), null, 2);
    }
    files["variables.json"] = JSON.stringify(variablesManifest(ctx), null, 2);
    if (specs.some(usesRuntime)) files["footer-code.html"] = webflowFooterCode();
  }
  return files;
}

/** Static preview per variant combination, plus a Webflow payload for every framework. */
function variantAssets(specs, config, frameworks) {
  const previewCtx = createContext(config, frameworks[config.framework]);
  const contexts = Object.fromEntries(config.frameworks.map((name) => [name, createContext(config, frameworks[name])]));
  const previews = {};
  const webflow = {};
  for (const spec of specs) {
    const previewResolved = resolveComponent(spec, previewCtx);
    const resolved = Object.fromEntries(config.frameworks.map((name) => [name, resolveComponent(spec, contexts[name])]));
    previews[spec.id] = {};
    webflow[spec.id] = Object.fromEntries(config.frameworks.map((name) => [name, {}]));
    for (const selection of allSelections(spec)) {
      const key = selectionKey(selection) || "default";
      previews[spec.id][key] = generateHtml(spec, previewCtx, previewResolved, { selection });
      for (const name of config.frameworks) {
        webflow[spec.id][name][key] = JSON.stringify(generateWebflow(spec, contexts[name], resolved[name], { selection }));
      }
    }
  }
  return { previews, webflow };
}

export function writeFiles(dir, files) {
  for (const [rel, content] of Object.entries(files)) {
    const path = join(dir, rel);
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, content);
  }
}

export async function buildProject({ dev = false, out = join(ROOT, "dist"), log = console.log } = {}) {
  const config = await loadConfig();
  const frameworks = await loadFrameworks();
  const specs = await loadComponents();
  rmSync(out, { recursive: true, force: true });

  const outputs = {}; // id → framework → target → text
  for (const name of config.frameworks) {
    const fw = frameworks[name];
    if (!fw) throw new Error(`Unknown framework "${name}". Available: ${Object.keys(frameworks).join(", ")}`);
    const ctx = createContext(config, fw);
    for (const target of config.targets) {
      writeFiles(join(out, name, target), targetFiles(specs, ctx, target));
    }
    for (const s of specs) {
      const r = resolveComponent(s, ctx);
      outputs[s.id] ??= {};
      outputs[s.id][name] = {
        webflow: JSON.stringify(generateWebflow(s, ctx, r)),
        react: generateReact(s, ctx, r),
        astro: generateAstro(s, ctx, r),
        html: generateHtml(s, ctx, r),
        css: componentCss(s, r, ctx),
        vanilla: generateVanilla(s, ctx, r),
      };
    }
    log(`✓ ${name.padEnd(14)} ${config.targets.join(", ")}`);
  }

  // Gallery previews the default framework.
  const ctx = createContext(config, frameworks[config.framework]);
  const shared = sharedCss(ctx);
  const galleryDir = join(out, "gallery");
  const variants = variantAssets(specs, config, frameworks);
  writeFiles(galleryDir, {
    "index.html": renderGallery({
      specs,
      config,
      frameworks: config.frameworks.map((n) => ({ name: n, label: frameworks[n].label })),
      previewCss: [shared["tokens.css"], shared["utilities.css"], shared["buttons.css"], ...specs.map((s) => componentCss(s, resolveComponent(s, ctx), ctx))].join("\n"),
      previews: Object.fromEntries(specs.map((s) => [s.id, generateHtml(s, ctx)])),
      outputs,
      variantPreviews: variants.previews,
      variantWebflow: variants.webflow,
      footerCode: webflowFooterCode(),
      dev,
    }),
    "motion.global.js": motionGlobal(),
  });
  mkdirSync(join(galleryDir, "vendor"), { recursive: true });
  for (const f of ["gsap.min.js", "ScrollTrigger.min.js"]) copyFileSync(join(ROOT, "node_modules/gsap/dist", f), join(galleryDir, "vendor", f));
  // Single-file copy with scripts inlined, for sharing without a server.
  const { readFileSync } = await import("node:fs");
  const inline = (f) => `<script>${readFileSync(join(galleryDir, f), "utf8").replace(/<\/script/gi, "<\\/script")}</script>`;
  const standalone = readFileSync(join(galleryDir, "index.html"), "utf8")
    .replace('<script src="./vendor/gsap.min.js"></script>', () => inline("vendor/gsap.min.js"))
    .replace('<script src="./vendor/ScrollTrigger.min.js"></script>', () => inline("vendor/ScrollTrigger.min.js"))
    .replace('<script src="./motion.global.js"></script>', () => inline("motion.global.js"));
  writeFileSync(join(galleryDir, "standalone.html"), standalone);
  log(`✓ gallery        ${specs.length} components → dist/gallery/index.html (+ standalone.html)`);
  return { config, specs };
}
