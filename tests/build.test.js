import { test } from "node:test";
import assert from "node:assert/strict";
import { transform } from "@astrojs/compiler";
import { loadConfig, loadFrameworks, loadComponents, createContext } from "../src/core/config.js";
import { validateSpec } from "../src/core/validate.js";
import { resolveComponent } from "../src/core/resolve.js";
import { generateReact, generateAstro, generateHtml, generateVanilla } from "../src/generators/code.js";
import { generateWebflow } from "../src/generators/webflow.js";

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

test("project config: styles: none keeps class names but drops button CSS", () => {
  const custom = { ...config, classes: { button: { styles: "none" } } };
  const ctx = createContext(custom, frameworks["client-first"]);
  const r = resolveComponent(specs.find((s) => s.id === "hero-05"), ctx);
  assert.ok(!r.rules.some((x) => x.kind.startsWith("button")));
});
