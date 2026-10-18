import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { transform } from "@astrojs/compiler";
import { ROOT, loadConfig, loadFrameworks, loadComponents, createContext } from "../src/core/config.js";
import { validateSpec } from "../src/core/validate.js";
import { resolveComponent, allSelections, selectionKey } from "../src/core/resolve.js";
import { componentCss, generateReact, generateAstro, generateHtml, generateVanilla } from "../src/generators/code.js";
import { generateWebflow } from "../src/generators/webflow.js";
import { WEBFLOW_PROPERTY_ORDER } from "../src/core/webflow-order.js";
import { snapshotFromExport, variablesFromExport, bindTokenVariables } from "../src/sync.js";
import { componentManifest, variablesManifest } from "../src/generators/webflow-manifest.js";
import { webflowFooterCode, WEBFLOW_CUSTOM_CODE_LIMIT } from "../src/runtime/build-runtime.js";
import { renderMarkup } from "../src/generators/markup.js";

const config = await loadConfig();
const frameworks = await loadFrameworks();
const specs = await loadComponents();

test("every spec is valid", () => {
  for (const s of specs) assert.deepEqual(validateSpec(s), [], s.id);
});

test("validator catches common mistakes", () => {
  const bad = {
    id: "x", prefix: "x", name: "X", category: "x", description: "", props: { title: { type: "text", default: "" } },
    tree: { role: "section", children: [
      { tag: "div", key: "a", style: { base: { padding: "1rem" }, md: { color: "red" } } },
      { tag: "h2", key: "b", bind: "missing" },
    ] },
  };
  const errors = validateSpec(bad).join("\n");
  assert.match(errors, /longhand/);
  assert.match(errors, /missing from base/);
  assert.match(errors, /unknown prop "missing"/);
});

for (const fw of Object.values(frameworks)) {
  const ctx = createContext(config, fw);
  for (const spec of specs) {
    test(`${fw.name} / ${spec.id}: all targets generate`, async () => {
      const r = resolveComponent(spec, ctx);
      assert.match(generateReact(spec, ctx, r), /export function/);
      assert.match(generateHtml(spec, ctx, r), /<section/);
      const mod = await import(`data:text/javascript,${encodeURIComponent(generateVanilla(spec, ctx, r))}`);
      assert.match(mod.render(), /<section/);
      const astro = await transform(generateAstro(spec, ctx, r), { filename: `${spec.id}.astro` });
      assert.deepEqual(astro.diagnostics.filter((d) => d.severity === 1), []);
    });

    test(`${fw.name} / ${spec.id}: Webflow payload is consistent`, () => {
      const { payload } = generateWebflow(spec, ctx);
      const nodeIds = new Set(payload.nodes.map((n) => n._id));
      const styleIds = new Set(payload.styles.map((s) => s._id));
      assert.equal(payload.nodes[0].tag, "section", "root node first");
      for (const n of payload.nodes) {
        for (const c of n.children || []) assert.ok(nodeIds.has(c), `missing child ${c}`);
        for (const c of n.classes || []) assert.ok(styleIds.has(c), `missing class ${c}`);
      }
      for (const s of payload.styles) for (const c of s.children) assert.ok(styleIds.has(c), `missing combo ${c}`);
      assert.ok(!JSON.stringify(payload).includes("token("), "unresolved token");
      const referenced = new Set();
      for (const n of payload.nodes) {
        if (n.type === "Image" && n.data?.attr?.src) {
          referenced.add(n.data.attr.src);
          const asset = payload.assets.find((item) => item._id === n.data.img.id);
          assert.equal(asset?.cdnUrl, n.data.attr.src, `${spec.id} image asset`);
        }
        for (const attr of n.data?.xattr || []) {
          if (attr.name === "data-blok-src" && attr.value) referenced.add(attr.value);
        }
      }
      assert.deepEqual(payload.assets.map((item) => item.cdnUrl).sort(), [...referenced].sort(), `${spec.id} assets`);
    });
  }
}

test("project config: custom button chains become nested combos", () => {
  const custom = { ...config, classes: { button: { base: "btn", variants: { "secondary-alt": ["is-secondary", "is-alternate"] } } } };
  const ctx = createContext(custom, frameworks["client-first"]);
  const hero = specs.find((s) => s.id === "hero-05");
  assert.match(generateHtml(hero, ctx), /class="btn is-secondary is-alternate"/);
  const { payload } = generateWebflow(hero, ctx);
  const byName = Object.fromEntries(payload.styles.map((s) => [s.name, s]));
  assert.ok(byName["is-secondary"].children.includes(byName["is-alternate"]._id));
  assert.equal(byName["is-alternate"].comb, "&");
});

test("project config: tokens can map onto project CSS variables", () => {
  const custom = { ...config, tokens: { ink: { value: "#000", css: "var(--color-ink)" } } };
  const ctx = createContext(custom, frameworks["client-first"]);
  const spec = specs.find((s) => s.id === "work-02");
  const r = resolveComponent(spec, ctx);
  const css = r.rules.map((x) => JSON.stringify(x.style)).join("");
  assert.ok(css.includes("token(ink)"));
  assert.ok(ctx.tokens.css("token(ink)") === "var(--color-ink)");
  assert.equal(ctx.tokens.webflow("token(ink)"), "#000");
  assert.ok(JSON.stringify(generateWebflow(spec, ctx)).includes("#000"));
});

test("variants: combo classes, selections, and typed props", async () => {
  const spec = {
    id: "box", prefix: "box", name: "Box", category: "x", description: "",
    props: {
      heading: { type: "text", default: "Hi", description: "The heading" },
      buttons: { type: "buttons", default: [{ title: "Go", href: "#", variant: "primary" }] },
    },
    variants: {
      theme: {
        label: "Color theme",
        default: "light",
        palette: { default: "light", options: ["light", "dark", "accent"], map: {} },
        options: {
          light: null,
          dark: {
            label: "Dark",
            styles: {
              section: { base: { "background-color": "token(ink)" } },
              heading: { base: { color: "token(surface)" }, md: { color: "token(surface)" } },
            },
            buttons: { primary: "dark" },
          },
          accent: { styles: { heading: { base: { color: "token(ink)" } } } },
        },
      },
      align: {
        label: "Alignment",
        default: "left",
        options: {
          left: null,
          center: { styles: { heading: { base: { "text-align": "center" } } } },
        },
      },
    },
    tree: {
      role: "section", key: "section",
      style: { base: { "background-color": "token(surface)" } },
      children: [
        { tag: "h2", key: "heading", bind: "heading", style: { base: { color: "token(ink)" }, md: { color: "token(ink)" } } },
        { tag: "div", key: "actions", repeat: "buttons" },
      ],
    },
  };
  assert.deepEqual(validateSpec(spec), []);
  assert.equal(allSelections(spec).length, 6);
  assert.equal(selectionKey({ theme: "dark", align: "left" }), "theme=dark|align=left");
  const dup = { ...spec, variants: { ...spec.variants, tone: { default: "dark", options: { dark: null } } } };
  assert.match(validateSpec(dup).join("\n"), /used more than once/);

  const ctx = createContext(config, frameworks["client-first"]);
  const resolved = resolveComponent(spec, ctx);
  const css = componentCss(spec, resolved, ctx);
  assert.match(css, /\.box_heading\.is-dark/);
  assert.match(css, /\.section_box\.is-dark/);
  assert.doesNotMatch(generateHtml(spec, ctx, resolved), /is-dark/);
  assert.match(generateHtml(spec, ctx, resolved, { selection: { theme: "dark", align: "center" } }), /class="section_box is-dark"/);
  assert.match(generateHtml(spec, ctx, resolved, { selection: { theme: "dark", align: "center" } }), /class="box_heading is-dark is-center"/);
  const react = generateReact(spec, ctx, resolved);
  assert.match(react, /theme: "light" \| "dark" \| "accent";/);
  assert.match(react, /The heading/);
  assert.match(react, /className=\{\["section_box" \+ mod\("section"\), className\]/);
  assert.match(react, /mod\("heading"\)/);
  const vanilla = generateVanilla(spec, ctx, resolved);
  const mod = await import(`data:text/javascript,${encodeURIComponent(vanilla)}`);
  assert.match(mod.render({ theme: "dark" }), /section_box is-dark/);
  assert.match(mod.render({ theme: "dark" }), /button is-dark/);
  const bem = resolveComponent(spec, createContext(config, frameworks.bem));
  assert.ok(bem.rules.some((rule) => rule.classes.join(".") === "box__heading.box__heading--dark"));
  const flow = resolveComponent(spec, createContext(config, frameworks.flowkit));
  assert.ok(flow.rules.some((rule) => rule.classes.at(-1) === "on-inverse"));
  const { payload } = generateWebflow(spec, ctx, resolved, { selection: { theme: "dark", align: "center" } });
  const byId = Object.fromEntries(payload.styles.map((style) => [style._id, style]));
  const heading = payload.nodes.find((node) => node.tag === "h2");
  const chain = heading.classes.map((id) => byId[id].name);
  assert.deepEqual(chain, ["box_heading", "is-dark", "is-center"]);
  assert.match(byId[heading.classes[1]].styleLess, /color:/);
  assert.match(byId[heading.classes[2]].styleLess, /text-align: center/);
});

test("boolean if: validator, static omission, and dynamic wrappers", () => {
  const spec = {
    id: "toggle", prefix: "toggle", name: "Toggle", category: "x", description: "",
    props: {
      show: { type: "boolean", default: false },
      hide: { type: "boolean", default: true },
      label: { type: "text", default: "Hi" },
      items: { type: "list", fields: { title: "text" }, default: [{ title: "One" }] },
    },
    tree: {
      role: "section",
      children: [
        { tag: "p", key: "label", bind: "label", if: "show" },
        { tag: "p", key: "other", bind: "label", if: "!hide" },
        {
          tag: "div", key: "list", repeat: "items",
          children: [{ tag: "div", key: "item", children: [{ tag: "p", key: "item-title", bind: "item.title", if: "show" }] }],
        },
      ],
    },
  };
  assert.deepEqual(validateSpec(spec), []);
  const onRoot = { ...spec, tree: { ...spec.tree, if: "show" } };
  assert.match(validateSpec(onRoot).join("\n"), /section root/);
  const onTemplate = {
    ...spec,
    tree: { role: "section", children: [{ tag: "div", key: "list", repeat: "items", children: [{ tag: "p", key: "item", bind: "item.title", if: "show" }] }] },
  };
  assert.match(validateSpec(onTemplate).join("\n"), /item template/);
  const badIf = { ...spec, tree: { role: "section", children: [{ tag: "p", key: "label", bind: "label", if: "label" }] } };
  assert.match(validateSpec(badIf).join("\n"), /boolean prop/);

  const ctx = createContext(config, frameworks["client-first"]);
  const resolved = resolveComponent(spec, ctx);
  assert.doesNotMatch(generateHtml(spec, ctx, resolved), />Hi</);
  assert.match(renderMarkup(spec, resolved, "static", 0, { values: { show: true, hide: false, label: "Hi", items: spec.props.items.default } }), />Hi</);
  assert.match(generateReact(spec, ctx, resolved), /\{show && \(/);
  assert.match(generateReact(spec, ctx, resolved), /\{!hide && \(/);
  assert.match(generateVanilla(spec, ctx, resolved), /\$\{show \? `/);
  assert.equal(JSON.stringify(generateWebflow(spec, ctx, resolved)).includes("Hi"), false);
  assert.equal(JSON.stringify(generateWebflow(spec, ctx, resolved, { values: { show: true, hide: true, label: "Hi", items: [] } })).includes("Hi"), true);
});

test("theme helper: palettes, base styles, and button remaps agree", async () => {
  const { PALETTES, themeBase, themeVariant, radius, pad, border, inset0, mono } = await import("../components/_lib/themes.js");
  assert.equal(PALETTES.light.bg, "surface");
  assert.equal(PALETTES.dark.card, "ink-2");
  assert.equal(PALETTES.accent.muted, "ink-soft");
  assert.deepEqual(themeBase("dark", { "background-color": "bg", color: "fg" }), {
    "background-color": "token(ink)",
    color: "token(surface)",
  });
  const group = themeVariant({
    default: "light",
    options: ["light", "dark", "accent"],
    map: { section: { "background-color": "bg" }, heading: { color: "fg" } },
  });
  assert.equal(group.options.light, null);
  assert.equal(group.options.dark.styles.section.base["background-color"], "token(ink)");
  assert.deepEqual(group.options.dark.buttons, { dark: "primary", secondary: "secondary-alt" });
  assert.deepEqual(group.options.accent.buttons, { primary: "dark", "secondary-alt": "secondary" });
  assert.equal(radius()["border-top-left-radius"], "token(radius)");
  assert.equal(pad("1rem")["padding-bottom"], "1rem");
  assert.equal(border()["border-top-color"], "token(line)");
  assert.equal(inset0.top, "0");
  assert.equal(mono("token(ink-muted)")["font-family"], "token(font-mono)");
});

test("webflow manifest covers every prop and variant option", () => {
  const ctx = createContext(config, frameworks["client-first"]);
  for (const spec of specs) {
    const manifest = componentManifest(spec, ctx);
    const covered = new Set([...manifest.props.map((prop) => prop.prop), ...manifest.unsupported.map((prop) => prop.prop)]);
    for (const name of Object.keys(spec.props)) assert.ok(covered.has(name), `${spec.id} ${name}`);
    for (const item of manifest.unsupported) assert.match(item.note, /CMS Collection List/);
    for (const [group, def] of Object.entries(spec.variants || {})) {
      for (const option of Object.keys(def.options)) {
        assert.ok(manifest.variants.some((entry) => entry.group === group && entry.option === option), `${spec.id} ${group}=${option}`);
      }
    }
  }
  const spec = specs.find((item) => item.id === "features-12");
  const manifest = componentManifest(spec, ctx);
  const covered = new Set([...manifest.props.map((prop) => prop.prop), ...manifest.unsupported.map((prop) => prop.prop)]);
  for (const name of Object.keys(spec.props)) assert.ok(covered.has(name), name);
  assert.ok(manifest.unsupported.some((item) => item.prop === "features" && /CMS Collection List/.test(item.note)));
  for (const [group, def] of Object.entries(spec.variants)) {
    for (const option of Object.keys(def.options)) {
      assert.ok(manifest.variants.some((item) => item.group === group && item.option === option), `${group}=${option}`);
    }
  }
  const dark = manifest.variants.find((item) => item.group === "theme" && item.option === "dark");
  assert.equal(dark.styles.find((style) => style.breakpoint_id === "main" && style.style_name.startsWith("section_")).properties["background-color"], "#141414");
  const show = manifest.props.find((prop) => prop.name === "showEyebrow");
  assert.equal(show.type, "boolean");
  assert.equal(show.trueLabel, "Show");
  assert.equal(show.falseLabel, "Hide");
  assert.ok(manifest.props.some((prop) => prop.prop === "image" && prop.type === "image"));
  assert.ok(manifest.props.some((prop) => prop.prop === "image" && prop.type === "altText"));
  assert.ok(manifest.props.some((prop) => prop.prop === "buttons" && prop.type === "textContent"));
  assert.ok(manifest.props.some((prop) => prop.prop === "buttons" && prop.type === "link"));
  assert.equal(manifest.props.find((prop) => prop.name === "showButtons").label, "Show Buttons");
  const variables = variablesManifest(ctx);
  assert.equal(variables.collection, "Blokset");
  assert.equal(variables.variables.find((item) => item.name === "ink").type, "Color");
  assert.equal(variables.variables.find((item) => item.name === "ink-2").value, "#22211f");
  assert.equal(variables.variables.find((item) => item.name === "radius").type, "Size");
  assert.equal(variables.variables.find((item) => item.name === "font-display").type, "FontFamily");
});

test("webflow styleLess follows Webflow property order and omits unmapped fonts", () => {
  const rank = new Map(WEBFLOW_PROPERTY_ORDER.map((name, index) => [name, index]));
  const follows = (styleLess) => {
    const names = [...String(styleLess).matchAll(/(^| )([a-z-]+):/g)].map((match) => match[2]);
    let last = -1;
    let unknown = false;
    for (const name of names) {
      if (!rank.has(name)) {
        unknown = true;
        continue;
      }
      if (unknown || rank.get(name) < last) return false;
      last = rank.get(name);
    }
    return true;
  };
  const ctx = createContext(config, frameworks["client-first"]);
  for (const spec of specs) {
    const { payload } = generateWebflow(spec, ctx);
    for (const style of payload.styles) {
      assert.equal(follows(style.styleLess), true, `${spec.id} ${style.name}`);
      for (const variant of Object.values(style.variants || {})) assert.equal(follows(variant.styleLess), true, `${spec.id} ${style.name} breakpoint`);
      assert.equal(style.styleLess.includes("font-family"), false);
      for (const variant of Object.values(style.variants || {})) assert.equal(variant.styleLess.includes("font-family"), false);
    }
  }
  const mapped = createContext({ ...config, webflow: { fonts: { "font-display": "Inter Tight" } } }, frameworks["client-first"]);
  const hero = specs.find((spec) => spec.id === "hero-05");
  const pasted = JSON.stringify(generateWebflow(hero, mapped));
  assert.match(pasted, /font-family: Inter Tight;/);
  assert.match(componentCss(hero, resolveComponent(hero, mapped), mapped), /var\(--blok-font-display\)/);
  const hidden = generateWebflow(specs.find((spec) => spec.id === "features-12"), ctx).payload;
  assert.equal(hidden.styles.some((style) => style.name === "features12_image"), false);
  const heroPaste = generateWebflow(hero, ctx).payload;
  assert.equal(heroPaste.styles.some((style) => style.name === "hero05_eyebrow"), false);
});

test("class sync pastes the snapshot styleLess, including variable refs", () => {
  const exported = {
    result: [
      {
        selector: ".section_features12",
        properties: [
          { property_name: "display", property_value: "block" },
          { property_name: "background-color", property_value: { id: "variable-ink" } },
          { property_name: "color", property_value: "#ffffff" },
        ],
        breakpoints: { medium: { "padding-top": "2rem" }, tiny: { "padding-top": "1rem" } },
      },
    ],
  };
  const snapshot = snapshotFromExport(exported, { site: "example" });
  assert.equal(snapshot.count, 1);
  assert.equal(snapshot.site, "example");
  const expectedMain = "display: block; background-color: @var_variable-ink; color: #ffffff;";
  const ctx = createContext({
    ...config,
    tokens: { ink: { value: "#000", webflow: "should-not-replace-snapshot" } },
    webflow: { styles: snapshot.styles },
  }, frameworks["client-first"]);
  const { payload } = generateWebflow(specs.find((spec) => spec.id === "features-12"), ctx);
  const section = payload.styles.find((style) => style.name === "section_features12");
  assert.equal(section.styleLess, expectedMain);
  assert.equal(section.variants.medium.styleLess, "padding-top: 2rem;");
  assert.equal(section.variants.tiny.styleLess, "padding-top: 1rem;");
  const heading = payload.styles.find((style) => style.name === "features12_heading");
  assert.match(heading.styleLess, /color: @var_should-not-replace-snapshot;/);
});

test("mapped webflow tokens paste variable refs and unmapped tokens stay literal", () => {
  const ctx = createContext({
    ...config,
    tokens: {
      ink: { value: "#111111", webflow: "variable-ink" },
      "font-display": { value: "'Inter Tight', system-ui, sans-serif", webflow: "variable-font" },
    },
    webflow: { fonts: { "font-display": "Inter Tight" } },
  }, frameworks["client-first"]);
  const features = generateWebflow(specs.find((spec) => spec.id === "features-12"), ctx).payload;
  const heading = features.styles.find((style) => style.name === "features12_heading");
  assert.match(heading.styleLess, /color: @var_variable-ink;/);
  assert.match(heading.styleLess, /font-family: @var_variable-font;/);
  const quote = generateWebflow(specs.find((spec) => spec.id === "testimonial-07"), ctx).payload;
  const section = quote.styles.find((style) => style.name.startsWith("section_"));
  assert.match(section.styleLess, /background-color: #ff5b2e;/);
  const shade = generateWebflow(specs.find((spec) => spec.id === "features-20"), ctx).payload;
  const gradient = shade.styles.find((style) => style.name === "features20_feature-shade");
  assert.match(gradient.styleLess, /rgba\(20, 20, 20, 0\.88\)/);
  const hero = specs.find((spec) => spec.id === "hero-05");
  const subtle = generateWebflow(hero, ctx, undefined, { selection: { overlay: "subtle" } }).payload;
  const overlay = subtle.styles.find((style) => style.name === "hero05_overlay");
  const combo = subtle.styles.find((style) => overlay.children.includes(style._id) && style.name === "is-subtle");
  assert.match(combo.styleLess, /background-color: rgba\(0, 0, 0, 0\.28\);/);
});

test("variable exports resolve token names to destination ids", async () => {
  const variables = variablesFromExport({
    result: [{ name: "Text Primary", id: "var-ink", type: "Color" }, { selector: ".button", properties: [] }],
  });
  assert.deepEqual(variables, { "Text Primary": { id: "var-ink", type: "Color" } });
  assert.deepEqual(bindTokenVariables({ ink: { value: "#111", webflow: "Text Primary" } }, variables).ink.webflow, "var-ink");
  assert.deepEqual(bindTokenVariables({ ink: { value: "#111", webflow: "var-ink" } }, variables).ink.webflow, "var-ink");
  assert.throws(() => bindTokenVariables({ ink: { value: "#111", webflow: "Missing" } }, variables), /Missing/);
  const combined = snapshotFromExport({
    styles: [{ name: "button", properties: [{ property_name: "display", property_value: "block" }] }],
    variables: [{ name: "Heading", id: "var-font", type: "FontFamily" }],
  }, {
    variables: [{ name: "Text Primary", id: "var-ink", type: "Color" }],
  });
  assert.equal(combined.variables["Text Primary"].id, "var-ink");
  assert.equal(combined.variables.Heading.id, "var-font");
  assert.equal(combined.count, 1);

  const dir = mkdtempSync(join(ROOT, ".tmp-blok-sync-"));
  try {
    writeFileSync(join(dir, "snapshot.json"), JSON.stringify({
      styles: {},
      variables: [{ name: "Text Primary", id: "var-ink", type: "Color" }],
    }));
    writeFileSync(join(dir, "blokset.config.js"), `export default {
      framework: "client-first",
      targets: ["webflow"],
      tokens: { ink: { value: "#111", css: "var(--color-text)", webflow: "Text Primary" } },
      webflow: { snapshot: "./snapshot.json" },
    };\n`);
    const loaded = await loadConfig(join(dir, "blokset.config.js"));
    assert.equal(loaded.tokens.ink.webflow, "var-ink");
    const ctx = createContext(loaded, frameworks["client-first"]);
    assert.equal(ctx.tokens.webflow("token(ink)").id, "var-ink");
    assert.equal(ctx.tokens.css("token(ink)"), "var(--color-text)");
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test("every variant combination renders and its Webflow payload has no dangling class ids", () => {
  const ctx = createContext(config, frameworks["client-first"]);
  for (const spec of specs) {
    const resolved = resolveComponent(spec, ctx);
    for (const selection of allSelections(spec)) {
      const key = selectionKey(selection) || "default";
      assert.match(generateHtml(spec, ctx, resolved, { selection }), /<section/, key);
      const { payload } = generateWebflow(spec, ctx, resolved, { selection });
      const nodeIds = new Set(payload.nodes.map((node) => node._id));
      const styleIds = new Set(payload.styles.map((style) => style._id));
      for (const node of payload.nodes) {
        for (const child of node.children || []) assert.ok(nodeIds.has(child), `${spec.id} ${key}`);
        for (const classId of node.classes || []) assert.ok(styleIds.has(classId), `${spec.id} ${key}`);
      }
    }
  }
});

test("toggles: all-on markup is longer than all-off", () => {
  const ctx = createContext(config, frameworks["client-first"]);
  for (const spec of specs) {
    const names = Object.entries(spec.props).filter(([, prop]) => prop.type === "boolean").map(([name]) => name);
    if (!names.length) continue;
    const resolved = resolveComponent(spec, ctx);
    const on = renderMarkup(spec, resolved, "static", 0, { values: Object.fromEntries(names.map((name) => [name, true])) });
    const off = renderMarkup(spec, resolved, "static", 0, { values: Object.fromEntries(names.map((name) => [name, false])) });
    assert.ok(on.length > off.length, spec.id);
  }
});

test("vanilla render and react types honor variants and toggles", async () => {
  const ctx = createContext(config, frameworks["client-first"]);
  const spec = specs.find((item) => item.id === "features-12");
  const resolved = resolveComponent(spec, ctx);
  const mod = await import(`data:text/javascript,${encodeURIComponent(generateVanilla(spec, ctx, resolved))}`);
  assert.match(mod.render({ theme: "dark" }), /section_features12 is-dark/);
  assert.doesNotMatch(mod.render({ showEyebrow: false }), /features12_eyebrow/);
  assert.match(generateReact(spec, ctx, resolved), /theme: "light" \| "dark" \| "accent";/);
});

test("webflow paste ships one asset per demo image", () => {
  const ctx = createContext(config, frameworks["client-first"]);
  const features = generateWebflow(specs.find((spec) => spec.id === "features-07"), ctx).payload;
  const photo = features.nodes.find((node) => node.type === "Image");
  const asset = features.assets.find((item) => item._id === photo.data.img.id);
  assert.equal(asset.cdnUrl, photo.data.attr.src);
  assert.equal(asset.s3Url, photo.data.attr.src);
  assert.equal(asset.mimeType, "image/jpeg");
  assert.equal(asset.origFileName, "photo-1497366216548-37526070297c.jpg");
  assert.equal(asset.alt, photo.data.attr.alt);
  assert.equal("width" in asset, false);
  assert.equal(generateWebflow(specs.find((spec) => spec.id === "features-07"), ctx).payload.assets[0]._id, asset._id);

  const nav = generateWebflow(specs.find((spec) => spec.id === "nav-06"), ctx).payload;
  const figure = nav.nodes.find((node) => node.type === "Image");
  const swap = nav.nodes.flatMap((node) => node.data?.xattr || []).filter((attr) => attr.name === "data-blok-src").map((attr) => attr.value);
  assert.equal(swap.length, 4);
  assert.ok(swap.includes(figure.data.attr.src));
  assert.equal(nav.assets.length, new Set(swap).size);
  assert.equal(nav.assets.filter((item) => item.cdnUrl === figure.data.attr.src).length, 1);
  assert.equal(nav.assets.find((item) => item.cdnUrl === figure.data.attr.src)._id, figure.data.img.id);

  const logos = generateWebflow(specs.find((spec) => spec.id === "logos-02"), ctx).payload;
  const mark = logos.assets.find((item) => item.cdnUrl.includes("text=Northwind"));
  assert.equal(mark.mimeType, "image/png");
  assert.equal(mark.origFileName, "Northwind.png");

  const statement = generateWebflow(specs.find((spec) => spec.id === "statement-01"), ctx).payload;
  assert.deepEqual(statement.assets, []);
});

test("webflow paste keeps measured size and dimensions for a demo image", () => {
  const ctx = createContext(config, frameworks["client-first"]);
  const spec = specs.find((item) => item.id === "features-07");
  const url = spec.props.image.default.src;
  ctx.demoImages = new Map([[url, { width: 1200, height: 800, fileSize: 34567, fileHash: "abc123", mimeType: "image/jpeg" }]]);
  const photo = generateWebflow(spec, ctx).payload.nodes.find((node) => node.type === "Image");
  const asset = generateWebflow(spec, ctx).payload.assets.find((item) => item._id === photo.data.img.id);
  assert.equal(asset.cdnUrl, url);
  assert.equal(asset.s3Url, url);
  assert.equal(asset.thumbUrl, url);
  assert.equal(asset.width, 1200);
  assert.equal(asset.height, 800);
  assert.equal(asset.fileSize, 34567);
  assert.equal(asset.fileHash, "abc123");
  assert.equal(asset.mimeType, "image/jpeg");
});

test("new components keep their runtime attributes in static HTML", () => {
  const ctx = createContext(config, frameworks["client-first"]);
  const expect = {
    "testimonial-09": ["data-blok-count"],
    "testimonial-11": ["data-blok-marquee", 'data-blok-direction="reverse"'],
    "team-03": ["data-blok-hover-reveal", "data-blok-hover-row", "data-blok-hover-media"],
    "hero-21": ['data-blok-split="chars"', 'data-blok-scroll="parallax"'],
    "hero-23": ['data-blok-depth="0.45"', 'data-blok-depth="-0.32"'],
    "hero-25": ["data-blok-pointer", "data-blok-pointer-layer", 'data-blok-split="lines"'],
    "statement-01": ['data-blok-split="fill"'],
    "statement-03": ['data-blok-split="lines"'],
    "cta-11": ["data-blok-scramble"],
    "cta-12": ["data-blok-fit", 'data-blok-split="scrub"'],
    "gallery-14": ['data-blok-depth="-0.4"'],
    "features-40": ["data-blok-expand-media", 'data-blok-scroll="zoom"'],
    "logos-05": ["data-blok-velocity", 'data-blok-split="chars"'],
    "contact-01": ["mailto:hello@studio.co", "tel:+19785550148"],
    "nav-01": ["data-blok-menu", "data-blok-menu-toggle", "data-blok-menu-panel"],
    "nav-02": ['data-blok-menu="overlay"', "data-blok-menu-open", "data-blok-menu-close"],
    "nav-03": ["data-blok-menu-toggle"],
    "nav-04": ["data-blok-drops", "data-blok-drop-trigger", "data-blok-drop-panel"],
    "nav-05": ['data-blok-drop="mega"', "data-blok-drop-panel"],
    "nav-06": ["data-blok-swap=\"reveal\"", "data-blok-swap-row", "data-blok-swap-figure"],
    "timeline-03": ["data-blok-progress", "data-blok-sides", "data-blok-side"],
    "timeline-04": ["data-blok-split=\"lines\""],
    "timeline-05": ["data-blok-hscroll", "data-blok-hscroll-track"],
    "timeline-06": ["data-blok-slider", "data-blok-slider-card", "data-blok-slider-next"],
    "carousel-02": ["data-blok-slider-track", "data-blok-slider-prev", "data-blok-slider-count"],
    "carousel-03": ["data-blok-slider-card"],
    "features-44": ["data-blok-scroll=\"zoom\""],
    "hero-26": ["data-blok-open", "data-blok-open-half", "data-blok-open-word"],
    "hero-27": ["data-blok-steps", "data-blok-steps-still"],
    "features-45": ["data-blok-columns", "data-blok-columns-item", "data-blok-columns-media"],
    "features-46": ["data-blok-deck", "data-blok-deck-card"],
    "features-47": ["data-blok-lens", "data-blok-lens-reveal"],
    "features-48": ["data-blok-accordion", "data-blok-acc-panel"],
    "features-49": ["data-blok-steps-trigger", "data-blok-steps-still"],
    "features-50": ["data-blok-accordion", "data-blok-acc-item"],
    "features-51": ["data-blok-flip", "data-blok-flip-front", "data-blok-flip-back"],
    "features-52": ["data-blok-read", "data-blok-read-line"],
    "work-08": ["data-blok-tabs", "data-blok-tab", "data-blok-tab-panel"],
    "careers-07": ["data-blok-filter", "data-blok-filter-chip", "data-blok-filter-card", "data-blok-hover-reveal", "data-blok-hover-media"],
    "careers-08": ["data-blok-filter", "data-blok-filter-chip", "data-blok-filter-card", "data-blok-tilt"],
    "careers-09": ["data-blok-accordion", "data-blok-acc-trigger"],
    "careers-11": ["data-blok-deck", "data-blok-deck-card"],
    "careers-13": ["data-blok-accordion", "data-blok-acc-panel"],
    "careers-14": ["data-blok-tabs", "data-blok-tab", "data-blok-tab-panel"],
    "careers-16": ["data-blok-flip", "data-blok-flip-front", "data-blok-flip-back"],
    "services-01": ["data-blok-hover-reveal", "data-blok-hover-row", "data-blok-hover-media"],
    "team-06": ["data-blok-hscroll", "data-blok-hscroll-track"],
    "nav-07": ["data-blok-drops", "data-blok-drop-panel", 'data-blok-drop="level"', "data-blok-drop-mark"],
    "nav-08": ["data-blok-drops", "data-blok-drop-panel", 'data-blok-drop="level"'],
    "nav-09": ["data-blok-drops", "data-blok-drop-panel", 'data-blok-drop="level"'],
    "hero-52": ["data-blok-cycle", "data-blok-cycle-word", "data-blok-count"],
    "hero-53": ["data-blok-pointer", "data-blok-pointer-layer"],
    "hero-54": ["data-blok-marquee"],
    "hero-56": ["data-blok-count", "data-blok-marquee"],
    "features-61": ["data-blok-count"],
    "features-62": ["data-blok-pointer", "data-blok-pointer-layer"],
    "tabs-03": ["data-blok-columns", "data-blok-columns-item", "data-blok-columns-media"],
    "stats-10": ["data-blok-count"],
    "process-05": ["data-blok-peek", "data-blok-peek-card", "data-blok-peek-media"],
    "about-01": ["data-blok-lightbox", "data-blok-lightbox-item", "data-blok-lightbox-dialog"],
    "gallery-15": ["data-blok-marquee"],
    "process-06": ['data-blok-guide="curve"', "data-blok-guide-tab", "data-blok-guide-panel", "data-blok-guide-hotspot", "data-blok-guide-node"],
    "process-07": ['data-blok-guide="elbow"', "data-blok-guide-tab", "data-blok-guide-panel", "data-blok-guide-hotspot", "data-blok-guide-node"],
    "process-08": ['data-blok-guide="step"', "data-blok-guide-tab", "data-blok-guide-panel", "data-blok-guide-hotspot", "data-blok-guide-node"],
    "nav-10": ["data-blok-drops", "data-blok-drop-panel", "data-blok-drop-mark", "data-blok-drop-label"],
    "work-09": ["data-blok-sheet", "data-blok-sheet-item", "data-blok-sheet-panel", "data-blok-sheet-dialog", "data-blok-sheet-mount"],
    "work-10": ["data-blok-modes", "data-blok-mode", "data-blok-modes-panel"],
    "carousel-04": ["data-blok-curve", "data-blok-slide", "data-blok-curve-prev", "data-blok-curve-next"],
  };
  for (const [id, needles] of Object.entries(expect)) {
    const spec = specs.find((item) => item.id === id);
    assert.ok(spec, id);
    const html = generateHtml(spec, ctx);
    for (const needle of needles) assert.ok(html.includes(needle), `${id} missing ${needle}`);
  }
});

test("motion runtime handles every attribute named in its header", () => {
  const src = readFileSync(new URL("../src/runtime/motion-core.js", import.meta.url), "utf8");
  const header = src.slice(0, src.indexOf("function createBloksetMotion"));
  const body = src.slice(header.length);
  const attrs = [...new Set([...header.matchAll(/data-blok-[a-z0-9-]+/g)].map((match) => match[0]))];
  assert.ok(attrs.length >= 40);
  for (const attr of attrs) {
    const rest = attr.slice("data-blok-".length);
    const dataset = "blok" + rest.replace(/(^|-)([a-z0-9])/g, (_, _dash, char) => char.toUpperCase());
    assert.ok(body.includes(attr) || body.includes(dataset), attr);
  }
});

test("Webflow footer code fits the 50,000 character custom code limit", () => {
  const footer = webflowFooterCode();
  assert.ok(footer.length <= WEBFLOW_CUSTOM_CODE_LIMIT, `${footer.length} characters`);
  assert.ok(footer.length < 49800, `${footer.length} characters leaves little room before the limit`);
  const script = footer.match(/<script>\n([\s\S]*)\n<\/script>/)[1];
  new Function(script);
  assert.match(script, /createBloksetMotion/);
  assert.match(script, /data-blok-stack/);
  assert.match(script, /opacity:\s*1/);
  assert.equal(script.includes("Behaviours are opt-in"), false);
  assert.equal(footer.includes("MOTION_URL"), false);
});

test("project config: styles: none keeps class names but drops button CSS", () => {
  const custom = { ...config, classes: { button: { styles: "none" } } };
  const ctx = createContext(custom, frameworks["client-first"]);
  const r = resolveComponent(specs.find((s) => s.id === "hero-05"), ctx);
  assert.ok(!r.rules.some((x) => x.kind.startsWith("button")));
});
