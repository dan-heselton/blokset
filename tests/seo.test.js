import { test } from "node:test";
import assert from "node:assert/strict";
import { absoluteUrl, robotsTxt, siteHead, sitemapXml, SITEMAP_PATHS } from "../src/site/seo.js";

test("site head includes canonical and social tags", () => {
  const head = siteHead({
    title: "Example",
    description: "Desc",
    path: "/gallery",
  });
  assert.match(head, /<title>Example<\/title>/);
  assert.match(head, /rel="canonical" href="https:\/\/blokset\.dev\/gallery"/);
  assert.match(head, /property="og:image" content="https:\/\/blokset\.dev\/shots\/hero-46-wide\.jpg"/);
  assert.match(head, /name="twitter:card" content="summary_large_image"/);
});

test("robots and sitemap cover the marketing routes", () => {
  assert.deepEqual(SITEMAP_PATHS, ["/", "/gallery", "/pricing", "/compare"]);
  assert.match(robotsTxt(), /Sitemap: https:\/\/blokset\.dev\/sitemap\.xml/);
  const map = sitemapXml();
  for (const path of SITEMAP_PATHS) {
    assert.match(map, new RegExp(`<loc>${absoluteUrl(path).replace(/\./g, "\\.")}</loc>`));
  }
});
