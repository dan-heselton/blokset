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
  assert.ok(byId["tabs-01"].includes("tabs"));
  assert.ok(byId["carousel-01"].includes("carousel"));
  assert.ok(byId["filter-01"].includes("filter"));
  assert.ok(byId["features-31"].includes("spotlight"));
  assert.ok(byId["features-35"].includes("expand"));
  assert.ok(byId["gallery-08"].includes("lightbox"));
  assert.ok(byId["features-37"].includes("swap"));
  assert.ok(byId["stats-08"].includes("meters"));
  assert.ok(byId["hero-18"].includes("cycle"));
  assert.ok(byId["gallery-11"].includes("filmstrip"));
  for (const tags of Object.values(byId)) assert.equal(tags.includes("entrance"), false);
});

test("catalog can be searched and filtered, and specimens do not run motion", () => {
  const html = renderGallery({
    specs,
    config,
    frameworks: config.frameworks.map((name) => ({ name, label: frameworks[name].label })),
    previewCss: "/* preview */",
    previews: Object.fromEntries(specs.map((spec) => [spec.id, `<section data-blok-enter="fade-up"><p>${spec.id}</p></section>`])),
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
  assert.match(catalog, /class="g-specimen-frame"/);
  assert.match(catalog, /width="1200"/);
  assert.match(catalog, /height="720"/);
  assert.match(catalog, /href="\.\/preview\.css"/);
  assert.match(html, /data-tab="usage"/);
  assert.match(html, /data-tab="props"/);
  assert.match(html, /"group":"theme"/);
  assert.match(html, /\[light\]/);
  assert.match(catalog, /Class system and output change what you copy/);
  assert.doesNotMatch(catalog, /data-blok-/);
  for (const spec of specs) {
    assert.match(catalog, new RegExp(`data-id="${spec.id}"`));
    assert.match(catalog, new RegExp(`&lt;p&gt;${spec.id}&lt;/p&gt;`));
    assert.match(templates, new RegExp(`id="tpl-${spec.id}"`));
  }
  assert.match(templates, /data-blok-enter="fade-up"/);
});
