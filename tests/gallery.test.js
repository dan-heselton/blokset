import { test } from "node:test";
import assert from "node:assert/strict";
import { loadConfig, loadFrameworks, loadComponents } from "../src/core/config.js";
import { motionOf, renderGallery } from "../src/gallery/template.js";

const config = await loadConfig();
const frameworks = await loadFrameworks();
const specs = await loadComponents();

test("motion tags follow the spec, and entrance is not a filter", () => {
  const byId = Object.fromEntries(specs.map((spec) => [spec.id, motionOf(spec).map((tag) => tag.id)]));
  assert.deepEqual(byId["hero-05"], ["parallax"]);
  assert.ok(byId["features-12"].includes("reveal"));
  assert.ok(byId["features-20"].includes("count-up"));
  assert.ok(byId["stats-04"].includes("count-up"));
  assert.ok(byId["work-02"].includes("hover-reveal"));
  assert.ok(byId["testimonial-07"].includes("scroll-highlight"));
  assert.ok(byId["cta-08"].includes("marquee"));
  for (const tags of Object.values(byId)) assert.equal(tags.includes("entrance"), false);
});

test("catalog can be searched and filtered, and specimens do not run motion", () => {
  const html = renderGallery({
    specs,
    config,
    frameworks: config.frameworks.map((name) => ({ name, label: frameworks[name].label })),
    previewCss: "/* preview */",
    previews: Object.fromEntries(specs.map((spec) => [spec.id, `<section data-forge-enter="fade-up"><p>${spec.id}</p></section>`])),
    outputs: {},
    footerCode: "FOOT",
    dev: false,
  });
  const parts = html.split("<template");
  const catalog = parts[0];
  const templates = parts.slice(1).join("<template");
  assert.match(catalog, /id="g-search"/);
  assert.match(catalog, /data-filter="category"/);
  assert.match(catalog, /data-filter="motion"/);
  assert.match(catalog, /id="g-framework"/);
  assert.match(catalog, /id="g-output"/);
  assert.match(catalog, /id="g-variants"/);
  assert.match(html, /data-tab="usage"/);
  assert.match(html, /data-tab="props"/);
  assert.match(html, /"group":"theme"/);
  assert.match(html, /\[light\]/);
  assert.match(catalog, /Class system and output change what you copy/);
  assert.doesNotMatch(catalog, /data-forge-/);
  for (const spec of specs) {
    assert.match(catalog, new RegExp(`data-id="${spec.id}"`));
    assert.match(templates, new RegExp(`id="tpl-${spec.id}"`));
  }
  assert.match(templates, /data-forge-enter="fade-up"/);
});
