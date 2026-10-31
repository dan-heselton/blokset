import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { ROOT, loadConfig, loadFrameworks, loadComponents, createContext } from "../src/core/config.js";
import { renderMarketing, MARKETING_IDS, MOCKS, renderMocksIndex, renderMockPage } from "../src/site/pages.js";
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

test("home is trail, form, bento, stacking cards, footer with human copy", () => {
  const html = renderMarketing({ specs, ctx, page: "home" });
  assert.match(html, /<title>Blokset — Your next section, in your class system<\/title>/);
  assert.match(html, /rel="canonical" href="https:\/\/blokset\.dev\/"/);
  assert.match(html, /Your next section\. On your terms\./);
  assert.match(html, /class system: Client-First, BEM, or Flowkit/);
  assert.match(html, /Built for the site you’re already building/);
  assert.match(html, /Join the waitlist/);
  assert.match(html, /Explore the sections/);
  assert.match(html, /href="#library"/);
  assert.match(html, /href="#sections"/);
  assert.match(html, /class="g-proof"/);
  assert.match(html, /Paste into Webflow\. Open in Figma\./);
  assert.match(html, /In Webflow/);
  assert.match(html, /In Figma/);
  assert.match(html, /media\/webflow-paste\.jpg/);
  assert.match(html, /media\/figma-spec\.jpg/);
  assert.equal(html.includes("features40"), false);
  assert.equal(html.includes("features7"), false);
  assert.equal(html.includes("data-blok-expand-media"), false);
  assert.equal(html.includes("hero33"), false);
  assert.equal(html.includes("hero34"), false);
  assert.equal(html.includes("g-diff"), false);
  assert.equal(html.includes("data-blok-curve"), false);
  assert.equal(html.includes("carousel4"), false);
  assert.equal(html.includes("data-blok-columns"), false);
  assert.equal(html.includes("data-blok-tabs"), false);
  assert.equal(html.includes("data-blok-peek"), false);
  assert.equal(html.includes("services1"), false);
  assert.equal(html.includes("tabs3"), false);
  assert.equal(html.includes("features12"), false);
  assert.equal(html.includes("features3"), false);
  assert.equal(html.includes("Newsreader"), false);
  assert.match(html, /Already have a component library\?/);
  assert.match(html, /Sections that move/);
  assert.match(html, /What happens next/);
  assert.match(html, /Receive an invite/);
  assert.match(html, /Choose and ship/);
  assert.match(html, /Keep your workflow\. Find your next section\./);
  assert.match(html, /name="library"/);
  assert.match(html, /action="\/api\/waitlist"/);
  assert.match(html, /Currently invite-only/);
  assert.match(html, /bento02|bento-02|data-blok-marquee/);
  assert.match(html, /data-blok-stack|process03|process-03/);
  assert.match(html, new RegExp(`shots/${SHOT_IDS[0]}-wide\\.jpg`));
  assert.equal(html.includes("images.unsplash.com"), false);
  assert.match(html, /href="\/login"/);
  assert.match(html, /"@type":"SoftwareApplication"/);
  assert.equal(html.includes("That's the whole pitch"), false);
  assert.equal(html.includes("No runaround"), false);
  assert.equal(html.includes("No slide deck"), false);
  assert.equal(html.includes("$24"), false);
  assert.equal(html.includes("$49"), false);
  assert.equal(html.includes('href="/gallery"'), false);
  assert.equal(html.includes('href="/compare"'), false);
  assert.equal(html.includes('href="/pricing"'), false);
  assert.equal(html.includes("features46"), false);
  assert.equal(html.includes("Most popular"), false);
  assert.equal(html.includes("hello@studio.co"), false);
});

test("home trail uses wide frames of cut-out and notched heroes", () => {
  const html = renderMarketing({ specs, ctx, page: "home" });
  assert.match(html, /Real section previews from the set/);
  for (const id of SHOT_IDS) {
    assert.ok(ids.has(id), id);
    assert.ok(existsSync(join(ROOT, "src/site/shots", `${id}-wide.jpg`)), `${id}-wide.jpg`);
    assert.match(html, new RegExp(`shots/${id}-wide\\.jpg`));
  }
});

test("pricing lists the three plans and the library form", () => {
  const html = renderMarketing({ specs, ctx, page: "pricing" });
  assert.match(html, /<title>Pricing — Blokset Webflow component library<\/title>/);
  assert.match(html, /rel="canonical" href="https:\/\/blokset\.dev\/pricing"/);
  assert.match(html, /Free to paste\. Paid for the library\./);
  assert.match(html, />Free</);
  assert.match(html, />Solo</);
  assert.match(html, />Studio</);
  assert.match(html, /\$24/);
  assert.match(html, /\$192 a year/);
  assert.match(html, /\$49/);
  assert.match(html, /name="library"/);
  assert.match(html, /action="\/api\/waitlist"/);
  assert.match(html, /name="bot-field"/);
  assert.match(html, /id="library"/);
  assert.match(html, /Billing is not open yet/);
  assert.match(html, /Redistributing the library/);
  assert.match(html, /How is Blokset different from Relume or Flowbase/);
  assert.match(html, /Class Sync/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.match(html, /href="\/gallery"/);
  assert.equal(html.includes("Most popular"), false);
});

test("compare page stacks Blokset against Relume, Flowbase, and BRIX without the card deck", () => {
  const html = renderMarketing({ specs, ctx, page: "compare" });
  assert.match(html, /<title>Blokset vs Relume, Flowbase, and BRIX — Webflow components<\/title>/);
  assert.match(html, /rel="canonical" href="https:\/\/blokset\.dev\/compare"/);
  assert.match(html, /Same job as Relume\. Different paste\./);
  assert.match(html, /Relume Library/);
  assert.match(html, /Flowbase/);
  assert.match(html, /BRIX Templates/);
  assert.match(html, /Class Sync/);
  assert.match(html, /id="matrix"/);
  assert.match(html, /Is Blokset a Relume alternative/);
  assert.match(html, /aria-current="page">Compare/);
  assert.match(html, /href="\/gallery"/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.equal(html.includes("What changes when you paste"), false);
  assert.equal(html.includes("features46"), false);
});

test("login page uses invite API and session endpoints", () => {
  const html = renderMarketing({ specs, ctx, page: "login" });
  assert.match(html, /<title>Sign in — Blokset<\/title>/);
  assert.match(html, /rel="canonical" href="https:\/\/blokset\.dev\/login"/);
  assert.match(html, /id="login-form"/);
  assert.match(html, /\/api\/invite\/accept/);
  assert.match(html, /\/api\/login/);
  assert.match(html, /Join the waitlist/);
  assert.equal(html.includes("@netlify/identity"), false);
  assert.equal(html.includes('href="/gallery"'), false);
});

test("admin dash lists people and invite controls", () => {
  const html = renderMarketing({ specs, ctx, page: "admin" });
  assert.match(html, /<title>Admin — Blokset<\/title>/);
  assert.match(html, /noindex/);
  assert.match(html, /id="admin-list"/);
  assert.match(html, /\/api\/admin\/people/);
  assert.match(html, /\/api\/admin\/invite/);
  assert.match(html, /Approve/);
});

test("seven waitlist mocks render without the Class Sync deck", () => {
  assert.equal(MOCKS.length, 7);
  const index = renderMocksIndex();
  assert.match(index, /Waitlist mocks/);
  assert.match(index, /noindex/);
  for (const mock of MOCKS) {
    assert.match(index, new RegExp(`/mocks/${mock.id}`));
    const html = renderMockPage({ specs, ctx, id: mock.id });
    assert.ok(html, mock.id);
    assert.match(html, /name="library"/);
    assert.match(html, /action="\/api\/waitlist"/);
    assert.equal(html.includes("What changes when you paste"), false);
    assert.equal(html.includes("features46"), false);
  }
});
