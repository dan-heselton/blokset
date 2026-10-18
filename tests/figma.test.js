import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { loadConfig, loadFrameworks, loadComponents, createContext } from "../src/core/config.js";
import { resolveComponent } from "../src/core/resolve.js";
import { validateSpec } from "../src/core/validate.js";
import { generateFigma, variablesDoc, buttonDoc, figmaPointer } from "../src/generators/figma.js";
import { UNSUPPORTED_PROPS, cssToFigma, parseGridTemplate, figmaVariantWarning, FIGMA_BREAKPOINTS } from "../src/core/figma-style.js";

const config = await loadConfig();
const frameworks = await loadFrameworks();
const specs = await loadComponents();
const ctx = createContext(config, frameworks["client-first"]);

function find(node, key) {
  if (!node) return null;
  if (node.key === key) return node;
  for (const child of node.children || []) {
    const found = find(child, key);
    if (found) return found;
  }
  return null;
}

test("every spec becomes a Figma document", () => {
  for (const spec of specs) {
    const doc = generateFigma(spec, ctx, resolveComponent(spec, ctx));
    assert.equal(doc.blokset, 1, spec.id);
    assert.ok(doc.hash, spec.id);
    assert.ok(doc.components[0].variants.length >= FIGMA_BREAKPOINTS.length, spec.id);
    for (const prop of doc.dropped) {
      assert.ok(UNSUPPORTED_PROPS.has(prop), `${spec.id} dropped ${prop}`);
    }
    assert.equal(figmaVariantWarning(spec), null, spec.id);
    assert.equal(JSON.stringify(doc).includes("token("), false, spec.id);
  }
});

test("hero-05 has breakpoint and layout variants, not a theme axis", () => {
  const spec = specs.find((item) => item.id === "hero-05");
  const doc = generateFigma(spec, ctx, resolveComponent(spec, ctx));
  const main = doc.components[0];
  assert.equal(main.variants.length, 36);
  assert.deepEqual(main.variantProperties.map((axis) => axis.name), ["Breakpoint", "Alignment", "Overlay", "Height"]);
  const names = main.properties.map((prop) => `${prop.name}:${prop.type}`);
  assert.ok(names.includes("heading:TEXT"));
  assert.ok(names.includes("showEyebrow:BOOLEAN"));
  assert.equal(names.some((name) => name.startsWith("theme")), false);
  const desktop = main.variants.find((variant) => variant.properties.Breakpoint === "Desktop" && variant.properties.Height === "Screen");
  assert.equal(find(desktop.tree, "heading").style.text.fontSize, 84);
  assert.equal(find(desktop.tree, "section").style.width, 1440);
  const notched = generateFigma(specs.find((item) => item.id === "hero-31"), ctx, resolveComponent(specs.find((item) => item.id === "hero-31"), ctx));
  const notchedDesktop = notched.components[0].variants.find((variant) => variant.properties.Breakpoint === "Desktop");
  assert.equal(find(notchedDesktop.tree, "gutter").style.layoutMode, "VERTICAL");
  assert.equal(find(notchedDesktop.tree, "image").style.layoutSizingVertical, "FILL");
  assert.ok(find(notchedDesktop.tree, "component").style.height > 400);
  const mobile = main.variants.find((variant) => variant.properties.Breakpoint === "Mobile");
  assert.equal(find(mobile.tree, "section").style.width, 390);
});

test("theme groups bind semantic variables instead of becoming variants", () => {
  const spec = specs.find((item) => item.id === "features-09");
  const doc = generateFigma(spec, ctx, resolveComponent(spec, ctx));
  const main = doc.components[0];
  assert.equal(main.variants.length, 6);
  assert.equal(main.variantProperties.some((axis) => axis.name === "Color theme"), false);
  const desktop = main.variants.find((variant) => variant.properties.Breakpoint === "Desktop" && variant.properties.Columns === "Three");
  assert.deepEqual(find(desktop.tree, "heading").style.text.color, { theme: "fg" });
  assert.deepEqual(find(desktop.tree, "grid").style.grid.columns, [
    { type: "FLEX", weight: 1 },
    { type: "FLEX", weight: 1 },
    { type: "FLEX", weight: 1 },
  ]);
  const card = doc.components.find((component) => component.id === "features-09/card");
  assert.ok(card);
  assert.ok(card.properties.some((prop) => prop.name === "title" && prop.type === "TEXT"));
  const instance = find(desktop.tree, "grid").children[0];
  assert.equal(instance.componentId, "features-09/card");
  assert.equal(instance.variant.Breakpoint, "Desktop");
  assert.equal(instance.overrides.image.src.includes("images.unsplash.com"), true);
});

test("grid templates used by specs are buildable, and a theme group needs themeVariant", () => {
  for (const value of ["1fr 1fr", "repeat(3, minmax(0, 1fr))", "1.3fr 1fr 1fr 1fr", "9rem 1fr 18rem", "auto 1fr auto"]) {
    assert.ok(parseGridTemplate(value), value);
  }
  assert.equal(parseGridTemplate("subgrid"), null);
  const broken = {
    id: "x", prefix: "x", name: "X", category: "x", description: "",
    props: {},
    variants: { theme: { default: "light", options: { light: null } } },
    tree: { role: "section", children: [] },
  };
  assert.match(validateSpec(broken).join("\n"), /themeVariant/);
  assert.ok(figmaVariantWarning({
    id: "big",
    variants: {
      a: { options: { a: 0, b: 0, c: 0, d: 0 } },
      b: { options: { a: 0, b: 0, c: 0, d: 0 } },
      c: { options: { a: 0, b: 0, c: 0, d: 0 } },
    },
  }));
});

test("css maps onto auto-layout, grid, and absolute frames", () => {
  const flex = cssToFigma({
    display: "flex",
    "flex-direction": "column",
    "row-gap": "1rem",
    "padding-top": "4rem",
    "align-items": "center",
    "max-width": "40rem",
  }, { viewport: FIGMA_BREAKPOINTS[2], parent: 1440 });
  assert.equal(flex.style.layoutMode, "VERTICAL");
  assert.equal(flex.style.itemSpacing, 16);
  assert.equal(flex.style.padding.top, 64);
  assert.equal(flex.style.maxWidth, 640);
  assert.deepEqual(flex.dropped, []);

  const hero = cssToFigma({
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    "min-height": "calc(100svh - 8rem)",
  }, { viewport: { width: 1440, height: 900 }, parent: 1440 });
  assert.equal(hero.style.layoutPositioning, "ABSOLUTE");
  assert.deepEqual(hero.style.constraints, { horizontal: "STRETCH", vertical: "STRETCH" });
  assert.equal(hero.style.minHeight, 772);

  const sticky = cssToFigma({ position: "sticky", top: "0" }, { viewport: { width: 390, height: 844 }, parent: 390 });
  assert.ok(sticky.dropped.includes("position"));

  const desktop = cssToFigma({
    "font-size": "clamp(42px, 6.4vw, 84px)",
    "padding-top": "clamp(56px, 8vw, 104px)",
  }, { viewport: { width: 1440, height: 900 }, parent: 1440 });
  assert.equal(desktop.style.text.fontSize, 84);
  assert.equal(desktop.style.padding.top, 104);
  assert.deepEqual(desktop.dropped, []);
  const mobile = cssToFigma({ "font-size": "clamp(42px, 6.4vw, 84px)" }, { viewport: { width: 390, height: 844 }, parent: 390 });
  assert.equal(mobile.style.text.fontSize, 42);
  assert.equal(parseGridTemplate("minmax(220px, 1.6fr) repeat(3, minmax(0, 1fr))").length, 4);
});

test("variables cover primitives, theme modes, and layout", () => {
  const doc = variablesDoc(ctx);
  assert.deepEqual(doc.collections.map((collection) => collection.name), ["Blokset/Primitives", "Blokset/Theme", "Blokset/Layout"]);
  const theme = doc.collections[1];
  assert.deepEqual(theme.modes, ["Light", "Dark", "Accent"]);
  const bg = theme.variables.find((variable) => variable.name === "bg");
  assert.deepEqual(bg.alias, { Light: "surface", Dark: "ink", Accent: "accent" });
  assert.equal(buttonDoc(ctx).variants.length, 4);
  assert.equal(figmaPointer(specs[0], "client-first").includes(specs[0].id), true);
});

test("layer names follow the framework", () => {
  const spec = specs.find((item) => item.id === "hero-05");
  const client = generateFigma(spec, ctx, resolveComponent(spec, ctx));
  const bem = generateFigma(spec, createContext(config, frameworks.bem), resolveComponent(spec, createContext(config, frameworks.bem)));
  const clientHeading = find(client.components[0].variants[0].tree, "heading").name;
  const bemHeading = find(bem.components[0].variants[0].tree, "heading").name;
  assert.equal(clientHeading, "hero05_heading");
  assert.equal(bemHeading, "hero05__heading");
});

test("the Figma plugin runtime stays free of imports", () => {
  const source = readFileSync(new URL("../src/figma-runtime/builder.js", import.meta.url), "utf8");
  assert.equal(/^\s*import\s/m.test(source), false);
  assert.equal(/^\s*export\s/m.test(source), false);
  assert.match(source, /combineAsVariants/);
  assert.match(source, /addComponentProperty/);
  assert.match(source, /Blokset \/ Cover/);
});
