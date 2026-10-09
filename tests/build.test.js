import { test } from "node:test";
import assert from "node:assert/strict";
import { transform } from "@astrojs/compiler";
import { loadConfig, loadFrameworks, loadComponents, createContext } from "../src/core/config.js";
import { validateSpec } from "../src/core/validate.js";
import { resolveComponent, allSelections, selectionKey } from "../src/core/resolve.js";
import { componentCss, generateReact, generateAstro, generateHtml, generateVanilla } from "../src/generators/code.js";
import { generateWebflow } from "../src/generators/webflow.js";
import { componentManifest, variablesManifest } from "../src/generators/webflow-manifest.js";
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
  assert.equal(variables.collection, "Forge");
  assert.equal(variables.variables.find((item) => item.name === "ink").type, "Color");
  assert.equal(variables.variables.find((item) => item.name === "ink-2").value, "#22211f");
  assert.equal(variables.variables.find((item) => item.name === "radius").type, "Size");
  assert.equal(variables.variables.find((item) => item.name === "font-display").type, "FontFamily");
});

test("project config: styles: none keeps class names but drops button CSS", () => {
  const custom = { ...config, classes: { button: { styles: "none" } } };
  const ctx = createContext(custom, frameworks["client-first"]);
  const r = resolveComponent(specs.find((s) => s.id === "hero-05"), ctx);
  assert.ok(!r.rules.some((x) => x.kind.startsWith("button")));
});
