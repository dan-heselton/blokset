import { test } from "node:test";
import assert from "node:assert/strict";
import { loadConfig, loadFrameworks, loadComponents } from "../src/core/config.js";
import { motionOf, renderGallery } from "../src/gallery/template.js";
import { animationPrompt } from "../src/generators/motion-prompt.js";
import { assignReleases } from "../src/gallery/releases.js";

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
  assert.ok(byId["work-08"].includes("tabs"));
  assert.ok(byId["carousel-01"].includes("carousel"));
  assert.ok(byId["filter-01"].includes("filter"));
  assert.ok(byId["careers-07"].includes("filter"));
  assert.ok(byId["careers-07"].includes("hover-reveal"));
  assert.ok(byId["careers-08"].includes("filter"));
  assert.ok(byId["careers-08"].includes("tilt"));
  assert.ok(byId["careers-09"].includes("accordion"));
  assert.ok(byId["careers-10"].includes("accordion"));
  assert.ok(byId["careers-11"].includes("deck"));
  assert.ok(byId["careers-13"].includes("accordion"));
  assert.ok(byId["careers-14"].includes("tabs"));
  assert.ok(byId["careers-16"].includes("flip"));
  assert.ok(byId["features-31"].includes("spotlight"));
  assert.ok(byId["features-35"].includes("expand"));
  assert.ok(byId["gallery-08"].includes("lightbox"));
  assert.ok(byId["features-37"].includes("swap"));
  assert.ok(byId["stats-08"].includes("meters"));
  assert.ok(byId["hero-18"].includes("cycle"));
  assert.ok(byId["gallery-11"].includes("filmstrip"));
  assert.ok(byId["hero-21"].includes("char-stagger"));
  assert.ok(byId["hero-21"].includes("parallax"));
  assert.ok(byId["hero-23"].includes("depth"));
  assert.ok(byId["hero-25"].includes("pointer"));
  assert.ok(byId["hero-25"].includes("line-reveal"));
  assert.ok(byId["statement-01"].includes("text-fill"));
  assert.ok(byId["statement-03"].includes("line-reveal"));
  assert.ok(byId["cta-11"].includes("scramble"));
  assert.ok(byId["cta-12"].includes("text-scrub"));
  assert.ok(byId["cta-12"].includes("fit-text"));
  assert.ok(byId["gallery-14"].includes("depth"));
  assert.ok(byId["features-40"].includes("expand-media"));
  assert.ok(byId["features-40"].includes("zoom"));
  assert.ok(byId["logos-05"].includes("velocity"));
  assert.ok(byId["testimonial-11"].includes("marquee"));
  assert.ok(byId["team-03"].includes("hover-reveal"));
  assert.ok(byId["nav-01"].includes("menu"));
  assert.ok(byId["nav-02"].includes("menu"));
  assert.ok(byId["nav-04"].includes("dropdown"));
  assert.ok(byId["nav-05"].includes("dropdown"));
  assert.ok(byId["nav-06"].includes("swap"));
  assert.ok(byId["timeline-03"].includes("progress"));
  assert.ok(byId["timeline-05"].includes("horizontal-scroll"));
  assert.ok(byId["timeline-06"].includes("slider"));
  assert.ok(byId["carousel-02"].includes("slider"));
  assert.ok(byId["carousel-03"].includes("slider"));
  assert.ok(byId["features-44"].includes("zoom"));
  assert.ok(byId["services-01"].includes("hover-reveal"));
  assert.ok(byId["team-06"].includes("horizontal-scroll"));
  assert.ok(byId["hero-26"].includes("split-word"));
  assert.ok(byId["hero-27"].includes("scroll-steps"));
  assert.ok(byId["features-45"].includes("columns"));
  assert.ok(byId["features-46"].includes("deck"));
  assert.ok(byId["features-47"].includes("lens"));
  assert.ok(byId["features-48"].includes("accordion"));
  assert.ok(byId["features-49"].includes("scroll-steps"));
  assert.ok(byId["features-50"].includes("accordion"));
  assert.ok(byId["features-51"].includes("flip"));
  assert.ok(byId["features-52"].includes("read"));
  for (const tags of Object.values(byId)) assert.equal(tags.includes("entrance"), false);
});

test("each component has its own animation prompt", () => {
  const stack = animationPrompt(specs.find((spec) => spec.id === "process-03"));
  assert.match(stack, /Animate only "Process \/ Stacking Cards" \(process-03\)/);
  assert.match(stack, /scale the card underneath from 1 to 0\.94/);
  assert.match(stack, /Opacity stays 1/);
  assert.equal(stack.includes("Marquee"), false);
  const features = animationPrompt(specs.find((spec) => spec.id === "features-03"));
  assert.match(features, /features-03/);
  assert.equal(features.includes("process-03"), false);
  assert.match(features, /"card"/);
  const html = renderGallery({
    specs: specs.filter((spec) => spec.id === "process-03"),
    config,
    frameworks: config.frameworks.map((name) => ({ name, label: frameworks[name].label })),
    previewCss: "",
    previews: { "process-03": "<section></section>" },
    outputs: {},
    footerCode: "FOOT",
    dev: false,
  });
  assert.match(html, /id="g-copy-animate"/);
  assert.match(html, /id="g-animate-text"/);
  assert.equal(html.includes('data-tab="animate"'), false);
  assert.match(html, /scale the card underneath from 1 to 0\.94/);
  assert.equal(html.includes("logos-02"), false);
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
  assert.match(catalog, /href="\/pricing#library"/);
  assert.match(catalog, /aria-current="page">Gallery/);
  const cardOf = (id) => catalog.split(`<article class="g-card" data-id="${id}"`)[1].split("<article")[0];
  const heroCard = cardOf("hero-18");
  assert.match(heroCard, /class="g-free"/);
  assert.equal(heroCard.includes("g-free-paid"), false);
  assert.match(cardOf("careers-16"), /g-free-paid/);
  assert.match(catalog, /data-filter="category"/);
  assert.match(catalog, /data-filter="motion"/);
  assert.match(catalog, /data-filter="release"/);
  assert.match(catalog, /data-filter="collection"/);
  assert.match(catalog, />Marketing</);
  assert.match(catalog, />SaaS</);
  assert.match(catalog, /class="g-group-title"/);
  assert.match(catalog, /<section class="g-group" data-collection="marketing">/);
  assert.match(catalog, /<section class="g-group" data-collection="saas">/);
  assert.match(catalog, /<h2 class="g-group-title">Marketing<\/h2>/);
  assert.match(catalog, /<h2 class="g-group-title">SaaS<\/h2>/);
  assert.doesNotMatch(catalog, /<section class="g-group" data-category=/);
  assert.match(catalog, /data-collection="marketing"/);
  assert.match(catalog, /data-collection="saas"/);
  assert.match(catalog, />Release 10</);
  assert.match(catalog, />Release 9</);
  assert.match(catalog, />Release 8</);
  assert.match(catalog, />Release 7</);
  assert.match(catalog, />Release 1</);
  assert.doesNotMatch(catalog, />Unpushed</);
  assert.doesNotMatch(catalog, />Oct 8</);
  assert.match(catalog, /id="g-category-open"/);
  assert.match(catalog, /id="g-category-panel"/);
  assert.match(catalog, /id="g-motion-open"/);
  assert.match(catalog, /id="g-motion-panel"/);
  const releases = assignReleases(specs.map((spec) => spec.id));
  const releaseOf = new Map();
  for (const release of releases) for (const id of release.ids) if (!releaseOf.has(id)) releaseOf.set(id, release.id);
  assert.equal(releaseOf.get("hero-05"), "1");
  assert.equal(releaseOf.get("hero-45"), "7");
  assert.equal(releaseOf.get("hero-46"), "7");
  assert.equal(releaseOf.get("nav-07"), "8");
  assert.equal(releaseOf.get("hero-57"), "9");
  assert.equal(releaseOf.get("hero-63"), "10");
  assert.equal(releases.length, 10);
  for (const spec of specs) {
    const card = catalog.match(new RegExp(`<article class="g-card" data-id="${spec.id}"[^>]*>`));
    assert.ok(card, spec.id);
    const release = releaseOf.get(spec.id);
    if (release) assert.match(card[0], new RegExp(`data-release="${release}"`));
    else assert.doesNotMatch(card[0], /data-release=/);
  }
  assert.match(catalog, /id="g-framework"/);
  assert.match(catalog, /id="g-output"/);
  assert.match(catalog, /id="g-buttons-open"/);
  assert.match(catalog, /id="g-buttons-panel"/);
  assert.match(catalog, /Primary/);
  assert.match(catalog, /Dark/);
  assert.match(catalog, /Secondary/);
  assert.match(catalog, /On inverse/);
  assert.match(catalog, /Blokset styles/);
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
  assert.doesNotMatch(catalog, /srcdoc=/);
  for (const spec of specs) {
    assert.match(catalog, new RegExp(`data-id="${spec.id}"`));
    assert.match(catalog, new RegExp(`src="\\./specimens/${spec.id}\\.html"`));
    assert.match(templates, new RegExp(`id="tpl-${spec.id}"`));
  }
  assert.match(templates, /data-blok-enter="fade-up"/);
});
