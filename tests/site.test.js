import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { ROOT, loadConfig, loadFrameworks, loadComponents, createContext } from "../src/core/config.js";
import { renderMarketing, MARKETING_IDS } from "../src/site/pages.js";
import { FREE_IDS } from "../src/site/free.js";
import { SHOT_IDS } from "../src/site/shots.js";

const config = await loadConfig();
const frameworks = await loadFrameworks();
const specs = await loadComponents();
const ctx = createContext(config, frameworks[config.framework]);
const ids = new Set(specs.map((spec) => spec.id));

test("the free set is twenty real sections", () => {
  assert.equal(FREE_IDS.length, 20);
  assert.equal(new Set(FREE_IDS).size, 20);
  for (const id of FREE_IDS) assert.ok(ids.has(id), id);
  for (const id of MARKETING_IDS) assert.ok(ids.has(id), id);
});

test("home states the product and links into the gallery", () => {
  const html = renderMarketing({ specs, ctx, page: "home" });
  assert.match(html, /<title>Blokset<\/title>/);
  assert.match(html, /Paste the section\. Keep your classes\./);
  assert.match(html, /The same section in Webflow, Figma, and code, on the classes the site already has\./);
  assert.match(html, /A button named button stays button\./);
  assert.match(html, /href="\/gallery"/);
  assert.match(html, /href="\/pricing"/);
  assert.match(html, /blokset add hero-05 --target react/);
  assert.match(html, /20 sections copy free/);
  assert.match(html, new RegExp(`${specs.length} in the gallery`));
  assert.match(html, /The same section\./);
  assert.match(html, /Same button\. The class the site already has\./);
  assert.match(html, /Webflow does not get to name it button 2\./);
  assert.equal(html.includes("One button, three class systems"), false);
  assert.equal(html.includes("Most popular"), false);
  assert.equal(html.includes("hello@studio.co"), false);
});

test("home artwork exists for the output marks and the class cards", () => {
  const html = renderMarketing({ specs, ctx, page: "home" });
  for (const [dir, names] of [
    ["marks", ["webflow", "figma", "react", "astro", "html", "javascript"]],
    ["art", ["client-first", "bem", "class-sync"]],
  ]) {
    for (const name of names) {
      assert.ok(existsSync(join(ROOT, "src/site", dir, `${name}.svg`)), `${dir}/${name}.svg`);
      assert.match(html, new RegExp(`\\./${dir}/${name}\\.svg`));
    }
  }
});

test("home screenshots exist and open their section in the gallery", () => {
  const html = renderMarketing({ specs, ctx, page: "home" });
  for (const id of SHOT_IDS) {
    assert.ok(ids.has(id), id);
    for (const frame of ["wide", "phone"]) {
      assert.ok(existsSync(join(ROOT, "src/site/shots", `${id}-${frame}.jpg`)), `${id}-${frame}.jpg`);
    }
    assert.match(html, new RegExp(`href="/gallery#${id}"`));
  }
});

test("pricing lists the three plans and the library form", () => {
  const html = renderMarketing({ specs, ctx, page: "pricing" });
  assert.match(html, /Free to paste\. Paid for the library\./);
  assert.match(html, />Free</);
  assert.match(html, />Solo</);
  assert.match(html, />Studio</);
  assert.match(html, /\$24/);
  assert.match(html, /\$192 a year/);
  assert.match(html, /\$49/);
  assert.match(html, /name="library"/);
  assert.match(html, /data-netlify="true"/);
  assert.match(html, /name="bot-field"/);
  assert.match(html, /id="library"/);
  assert.match(html, /Billing is not open yet/);
  assert.match(html, /Redistributing the library/);
  assert.equal(html.includes("Most popular"), false);
});
