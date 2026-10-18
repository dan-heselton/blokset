import { test } from "node:test";
import assert from "node:assert/strict";
import { loadConfig, loadFrameworks, loadComponents, createContext } from "../src/core/config.js";
import { resolveComponent } from "../src/core/resolve.js";
import { generateReact, generateAstro, generateHtml, generateVanilla } from "../src/generators/code.js";
import { generateWebflow } from "../src/generators/webflow.js";
import { applyButtonClasses, previewButtonCss } from "../src/gallery/button-classes.js";

const config = await loadConfig();
const frameworks = await loadFrameworks();
const specs = await loadComponents();
const spec = specs.find((item) => item.id === "hero-05");
const ctx = createContext(config, frameworks["client-first"]);
const resolved = resolveComponent(spec, ctx);
const from = resolved.buttonChains;
const bundle = {
  react: generateReact(spec, ctx, resolved),
  astro: generateAstro(spec, ctx, resolved),
  vanilla: generateVanilla(spec, ctx, resolved),
  html: generateHtml(spec, ctx, resolved),
  css: "/* component */",
  webflow: JSON.stringify(generateWebflow(spec, ctx, resolved)),
};

const renamed = {
  ...from,
  primary: ["btn", "is-custom"],
  dark: ["button-link"],
};

function buttonNodes(serialized) {
  const payload = JSON.parse(serialized).payload;
  const styles = new Map(payload.styles.map((style) => [style._id, style]));
  return payload.nodes
    .filter((node) => node.data?.button)
    .map((node) => ({
      chain: node.classes.map((id) => styles.get(id).name),
      styles: node.classes.map((id) => styles.get(id)),
    }));
}

test("renamed chains, including one that does not start with button, rewrite every code output", () => {
  const next = applyButtonClasses(bundle, { from, to: renamed, shipStyles: true, synced: [] });
  for (const source of [next.react, next.astro, next.vanilla]) {
    assert.match(source, /"primary": "btn is-custom"/);
    assert.match(source, /"dark": "button-link"/);
    assert.match(source, /"secondary-alt": "button is-secondary-alt"/);
  }
  assert.match(next.html, /class="btn is-custom"/);
  assert.match(next.html, /class="button is-secondary-alt"/);
  assert.equal(next.css, bundle.css);
  const nodes = buttonNodes(next.webflow);
  assert.ok(nodes.some((node) => node.chain.join(" ") === "btn is-custom"));
  assert.ok(nodes.some((node) => node.chain.join(" ") === "button is-secondary-alt"));
  const custom = nodes.find((node) => node.chain.join(" ") === "btn is-custom");
  assert.match(custom.styles[0].styleLess, /inline-flex/);
  assert.equal(custom.styles[0].comb, "");
  assert.equal(custom.styles[1].name, "is-custom");
  assert.equal(custom.styles[1].comb, "&");
});

test("Blokset styles off clears button styleLess unless that chain was synced", () => {
  const cleared = applyButtonClasses(bundle, { from, to: renamed, shipStyles: false, synced: [] });
  const custom = buttonNodes(cleared.webflow).find((node) => node.chain.join(" ") === "btn is-custom");
  assert.equal(custom.styles[0].styleLess, "");
  assert.deepEqual(custom.styles[0].variants, {});
  const alt = buttonNodes(cleared.webflow).find((node) => node.chain[0] === "button" && node.chain.length > 1);
  assert.equal(alt.styles[0].styleLess, "");

  const kept = applyButtonClasses(bundle, { from, to: renamed, shipStyles: false, synced: ["button"] });
  const keptBase = buttonNodes(kept.webflow).find((node) => node.chain[0] === "button");
  assert.match(keptBase.styles[0].styleLess, /inline-flex/);
  const keptCustom = buttonNodes(kept.webflow).find((node) => node.chain[0] === "btn");
  assert.match(keptCustom.styles[0].styleLess, /inline-flex/);
});

test("preview css keeps button styling on the edited class names", () => {
  const css = previewButtonCss(
    {
      base: "  display: inline-flex;\n  background-color: #ffffff;",
      variants: { dark: "  background-color: #141414;", "secondary-alt": "  color: #ffffff;" },
    },
    { ...from, primary: ["btn", "is-custom"] }
  );
  assert.match(css, /\.btn \{[^}]*display: inline-flex/);
  assert.match(css, /\.button \{[^}]*display: inline-flex/);
  assert.match(css, /\.button\.is-secondary-alt \{[^}]*color: #ffffff/);
  assert.doesNotMatch(css, /\.btn\.is-custom/);
});
