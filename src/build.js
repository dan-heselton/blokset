// Orchestrates builds: every framework × target into dist/, plus the gallery.
import { mkdirSync, writeFileSync, rmSync, copyFileSync, readdirSync, readFileSync as readSource } from "node:fs";
import { join, dirname } from "node:path";
import { ROOT, loadConfig, loadFrameworks, loadComponents, createContext } from "./core/config.js";
import { resolveComponent, usesRuntime, allSelections, selectionKey, resolveButtons } from "./core/resolve.js";
import { button as buttonPrimitive } from "./core/primitives.js";
import { BUTTON_ROLES } from "./gallery/button-classes.js";
import { sharedCss } from "./core/css.js";
import { generateReact, generateAstro, generateHtml, generateVanilla, componentCss, pascal } from "./generators/code.js";
import { generateWebflow } from "./generators/webflow.js";
import { generateFigma, variablesDoc, buttonDoc, figmaCatalog, figmaPointer, fontsOf } from "./generators/figma.js";
import { loadDemoImages } from "./generators/image-meta.js";
import { reuseCounts } from "./sync.js";
import { componentManifest, variablesManifest } from "./generators/webflow-manifest.js";
import { motionEsm, motionDts, motionGlobal, webflowFooterCode, gsapCdnTags } from "./runtime/build-runtime.js";
import { renderGallery, specimenDocument } from "./gallery/template.js";
import { MARKETING_IDS, renderMarketing } from "./site/pages.js";

const SHARED_INDEX = `@import "./tokens.css";\n@import "./utilities.css";\n@import "./buttons.css";\n`;

function shared(ctx, { esm }) {
  const css = sharedCss(ctx);
  const files = Object.fromEntries(Object.entries(css).map(([k, v]) => [`blokset/${k}`, v]));
  files["blokset/index.css"] = SHARED_INDEX;
  if (esm) {
    files["blokset/motion.js"] = motionEsm();
    files["blokset/motion.d.ts"] = motionDts();
  } else {
    files["blokset/motion.global.js"] = motionGlobal();
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
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,500;1,6..72,560&display=swap" rel="stylesheet">
<style>*,*::before,*::after{box-sizing:border-box}body{margin:0;font-family:Inter,system-ui,sans-serif;-webkit-font-smoothing:antialiased}img{max-width:100%}</style>
<link rel="stylesheet" href="./blokset/index.css">
${head}
</head>
<body>
${body}
${gsapCdnTags()}
<script src="./blokset/motion.global.js"></script>
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
      "Blokset — HTML",
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
      "Blokset — Vanilla JS",
      specs.map((s) => `<link rel="stylesheet" href="./${s.id}.css">`).join("\n"),
      `<main id="app"></main>
<script type="module">
${specs.map((s, i) => `import { mount as mount${i} } from "./${s.id}.js";`).join("\n")}
${specs.map((_, i) => `mount${i}("#app");`).join("\n")}
</script>`
    );
  }
  if (target === "figma") {
    for (const s of specs) {
      files[`${s.id}.json`] = JSON.stringify(generateFigma(s, ctx, resolved.get(s.id)));
    }
    files["variables.json"] = JSON.stringify({ variables: variablesDoc(ctx), button: buttonDoc(ctx), fonts: fontsOf(ctx) }, null, 2);
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

const cssBody = (style, tokens) =>
  Object.entries(style?.base || {}).map(([key, value]) => `  ${key}: ${tokens.css(value)};`).join("\n");

/** Button chains, synced chain keys, and preview declarations for the gallery panel. */
function buttonGalleryData(config, frameworks) {
  const chains = {};
  const synced = {};
  const snapshot = config.webflow?.styles || {};
  let shipStyles = true;
  let preview = { base: "", variants: {} };
  for (const name of config.frameworks) {
    const ctx = createContext(config, frameworks[name]);
    const buttons = resolveButtons(ctx);
    chains[name] = buttons.chains;
    const keys = Object.values(buttons.chains).flatMap((chain) => chain.map((_, index) => chain.slice(0, index + 1).join(".")));
    synced[name] = [...new Set(keys.filter((key) => snapshot[key]))];
    if (name === config.framework) {
      shipStyles = buttons.styles !== "none";
      preview = {
        base: cssBody(buttonPrimitive.base, ctx.tokens),
        variants: Object.fromEntries(
          Object.entries(buttonPrimitive.variants)
            .filter(([, style]) => style)
            .map(([role, style]) => [role, cssBody(style, ctx.tokens)])
        ),
      };
    }
  }
  return { previewFramework: config.framework, roles: BUTTON_ROLES, chains, shipStyles, synced, preview };
}

/** Static preview per variant combination, plus a Webflow payload for every framework. */
function variantAssets(specs, config, frameworks, demoImages) {
  const previewCtx = createContext(config, frameworks[config.framework]);
  const contexts = Object.fromEntries(config.frameworks.map((name) => {
    const ctx = createContext(config, frameworks[name]);
    ctx.demoImages = demoImages;
    return [name, ctx];
  }));
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

export async function buildProject({ dev = false, out = join(ROOT, "dist"), log = console.log, configPath } = {}) {
  const config = await loadConfig(configPath);
  const frameworks = await loadFrameworks();
  const specs = await loadComponents();
  const demoImages = await loadDemoImages(specs, { log });
  rmSync(out, { recursive: true, force: true });

  const outputs = {}; // id → framework → target → text
  for (const name of config.frameworks) {
    const fw = frameworks[name];
    if (!fw) throw new Error(`Unknown framework "${name}". Available: ${Object.keys(frameworks).join(", ")}`);
    const ctx = createContext(config, fw);
    ctx.demoImages = demoImages;
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
        figma: figmaPointer(s, name),
      };
    }
    if (config.webflow?.styles) {
      for (const spec of specs) {
        const { reused, fresh } = reuseCounts(generateWebflow(spec, ctx).payload, config.webflow.styles);
        log(`  ${spec.id.padEnd(16)} reused ${reused} / new ${fresh}`);
      }
    }
    log(`✓ ${name.padEnd(14)} ${config.targets.join(", ")}`);
  }

  // Gallery previews the default framework.
  const ctx = createContext(config, frameworks[config.framework]);
  ctx.demoImages = demoImages;
  const shared = sharedCss(ctx);
  const galleryDir = join(out, "gallery");
  const variants = variantAssets(specs, config, frameworks, demoImages);
  const sheet = (list) => [shared["tokens.css"], shared["utilities.css"], shared["buttons.css"], ...list.map((s) => componentCss(s, resolveComponent(s, ctx), ctx))].join("\n");
  const previewCss = sheet(specs);
  const siteSpecs = specs.filter((spec) => MARKETING_IDS.includes(spec.id));
  const marketing = { specs, ctx, dev };
  const previews = Object.fromEntries(specs.map((s) => [s.id, generateHtml(s, ctx)]));
  writeFiles(galleryDir, {
    "preview.css": previewCss,
    "site.css": sheet(siteSpecs),
    "index.html": renderMarketing({ ...marketing, page: "home" }),
    "pricing.html": renderMarketing({ ...marketing, page: "pricing" }),
    "gallery.html": renderGallery({
      specs,
      config,
      frameworks: config.frameworks.map((n) => ({ name: n, label: frameworks[n].label })),
      previewCss,
      previews,
      outputs,
      variantPreviews: variants.previews,
      variantWebflow: variants.webflow,
      footerCode: webflowFooterCode(),
      buttons: buttonGalleryData(config, frameworks),
      dev,
    }),
    "motion.global.js": motionGlobal(),
    // No _redirects: Cloudflare Pages already serves gallery.html at /gallery
    // (and strips .html). Rewrites here cause ERR_TOO_MANY_REDIRECTS.
    // Netlify pretty URLs live in netlify.toml; local `blokset dev` uses ROUTES.
  });
  // Specimens + copy payloads are separate files so gallery.html stays under Cloudflare Pages' 25 MiB limit.
  const specimensDir = join(galleryDir, "specimens");
  const dataDir = join(galleryDir, "data");
  mkdirSync(specimensDir, { recursive: true });
  mkdirSync(dataDir, { recursive: true });
  for (const spec of specs) {
    writeFileSync(join(specimensDir, `${spec.id}.html`), specimenDocument(previews[spec.id] || ""));
    writeFileSync(join(dataDir, `${spec.id}.json`), JSON.stringify({
      outputs: outputs[spec.id] || {},
      webflow: variants.webflow[spec.id] || {},
    }));
  }
  mkdirSync(join(galleryDir, "vendor"), { recursive: true });
  for (const f of ["gsap.min.js", "ScrollTrigger.min.js"]) copyFileSync(join(ROOT, "node_modules/gsap/dist", f), join(galleryDir, "vendor", f));
  for (const dir of ["shots", "marks", "art"]) {
    mkdirSync(join(galleryDir, dir), { recursive: true });
    for (const f of readdirSync(join(ROOT, "src/site", dir))) copyFileSync(join(ROOT, "src/site", dir, f), join(galleryDir, dir, f));
  }
  writeFiles(join(out, "figma"), {
    "index.json": JSON.stringify(figmaCatalog(specs, config, frameworks), null, 2),
  });
  const pluginDir = join(ROOT, "figma-plugin");
  mkdirSync(pluginDir, { recursive: true });
  writeFileSync(join(pluginDir, "code.js"), readSource(join(ROOT, "src/figma-runtime/builder.js"), "utf8"));
  log(`✓ gallery        ${specs.length} components → dist/gallery/ (home, pricing, gallery)`);
  log(`✓ figma          ${specs.length} components → dist/<framework>/figma/`);
  return { config, specs };
}
