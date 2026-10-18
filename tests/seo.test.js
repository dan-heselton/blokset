import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { ROOT } from "../src/core/config.js";
import { absoluteUrl, robotsTxt, siteHead, sitemapXml, SITEMAP_PATHS, webManifest } from "../src/site/seo.js";

test("site head includes canonical, social tags, and icons", () => {
  const head = siteHead({
    title: "Example",
    description: "Desc",
    path: "/gallery",
  });
  assert.match(head, /<title>Example<\/title>/);
  assert.match(head, /rel="canonical" href="https:\/\/blokset\.dev\/gallery"/);
  assert.match(head, /property="og:image" content="https:\/\/blokset\.dev\/shots\/hero-46-wide\.jpg"/);
  assert.match(head, /name="twitter:card" content="summary_large_image"/);
  assert.match(head, /rel="icon" href="https:\/\/blokset\.dev\/favicon\.svg"/);
  assert.match(head, /rel="apple-touch-icon" href="https:\/\/blokset\.dev\/apple-touch-icon\.png"/);
  assert.match(head, /rel="manifest" href="https:\/\/blokset\.dev\/site\.webmanifest"/);
});

test("robots and sitemap cover the marketing routes", () => {
  assert.deepEqual(SITEMAP_PATHS, ["/", "/gallery", "/pricing", "/compare"]);
  assert.match(robotsTxt(), /Sitemap: https:\/\/blokset\.dev\/sitemap\.xml/);
  const map = sitemapXml();
  for (const path of SITEMAP_PATHS) {
    assert.match(map, new RegExp(`<loc>${absoluteUrl(path).replace(/\./g, "\\.")}</loc>`));
  }
});

test("brand icons and web manifest exist", () => {
  for (const name of ["favicon.svg", "favicon.ico", "apple-touch-icon.png", "icon-192.png", "icon-512.png"]) {
    assert.ok(existsSync(join(ROOT, "src/site/brand", name)), name);
  }
  assert.match(webManifest(), /"short_name": "Blokset"/);
  assert.match(webManifest(), /icon-512\.png/);
});
