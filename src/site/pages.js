// Marketing pages. The sections are real component specs with this product's copy.
// Chrome classes stay prefixed g- so they never collide with component classes.
import { resolveComponent } from "../core/resolve.js";
import { generateHtml } from "../generators/code.js";
import { escapeHtml } from "../generators/markup.js";
import { posthogSnippet } from "./analytics.js";
import { FREE_IDS } from "./free.js";
import { SHOT_IDS } from "./shots.js";
import {
  SITE_URL,
  compareSeo,
  homeSeo,
  jsonLd,
  pricingSeo,
  siteHead,
} from "./seo.js";
import { MOCK_IDS, MOCKS, getMock } from "./mocks.js";

// Public waitlist home: trail hero, signup, product-use proof, bento, process, footer.
const HOME_IDS = ["hero-14", "bento-02", "process-03", "footer-04"];
const PRICING_IDS = ["pricing-06", "logos-05", "faq-04", "footer-04"];
const COMPARE_IDS = ["hero-14", "faq-04", "cta-12", "footer-04"];
const LOGIN_IDS = ["footer-04"];

/** Specs whose CSS the marketing pages need. */
export const MARKETING_IDS = [...new Set([...HOME_IDS, ...PRICING_IDS, ...COMPARE_IDS, ...LOGIN_IDS, ...MOCK_IDS])];

const esc = escapeHtml;

function section(specs, ctx, id, values, selection = {}) {
  const spec = specs.find((item) => item.id === id);
  if (!spec) throw new Error(`Marketing page uses ${id}, which is not in the catalog`);
  return generateHtml(spec, ctx, resolveComponent(spec, ctx), { values, selection });
}

/** A screenshot of a catalog section, from src/site/shots/. */
function shot(specs, id, frame) {
  const spec = specs.find((item) => item.id === id);
  if (!spec) throw new Error(`Home page shows ${id}, which is not in the catalog`);
  return { src: `./shots/${id}-${frame}.jpg`, alt: `Screenshot of the ${spec.name} section` };
}

/** Product-in-use photography from src/site/media/ (Webflow / Figma crops). */
function media(file, alt) {
  return { src: `./media/${file}?v=5`, alt };
}

// Marketing type stack: Inter Tight (display) + Inter (body) + JetBrains Mono (labels).
// No Newsreader — serif stays in the catalog, not on waitlist/pricing/compare chrome.
const FONTS = "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap";

const CHROME = `
  :root {
    color-scheme: light;
    --g-bg: #fbfaf7; --g-panel: #ffffff; --g-fg: #141414; --g-muted: #5c5a54; --g-line: #e7e3da;
    --g-accent: #141414; --g-accent-fg: #ffffff; --g-chip: #f1eee6; --g-mark: #ff5b2e; --g-thumb: #cfcabe;
    --g-font-display: "Inter Tight", system-ui, sans-serif;
    --g-font-body: Inter, system-ui, sans-serif;
    --g-font-mono: "JetBrains Mono", ui-monospace, monospace;
  }
  *, *::before, *::after { box-sizing: border-box; }
  [hidden] { display: none !important; }
  html { scroll-behavior: smooth; scrollbar-color: var(--g-thumb) transparent; }
  body { margin: 0; background: var(--g-bg); color: var(--g-fg); font-family: var(--g-font-body); font-size: 16px; line-height: 1.5; -webkit-font-smoothing: antialiased; }
  ::selection { background: var(--g-fg); color: var(--g-bg); }
  img { max-width: 100%; }
  .g-skip { position: absolute; left: 12px; top: -40px; z-index: 300; background: var(--g-fg); color: var(--g-bg); padding: 8px 12px; border-radius: 8px; font-weight: 600; text-decoration: none; }
  .g-skip:focus { top: 12px; }
  .g-sticky { position: sticky; top: 0; z-index: 100; background: var(--g-bg); border-bottom: 1px solid var(--g-line); }
  .g-top { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 16px; padding: 12px 20px; }
  .g-logo { display: flex; align-items: center; gap: 10px; color: inherit; text-decoration: none; font-family: var(--g-font-display); font-weight: 700; font-size: 17px; letter-spacing: -0.02em; }
  .g-logo:focus-visible, .g-site-nav a:focus-visible, .g-start:focus-visible, .g-entry button:focus-visible {
    outline: 2px solid var(--g-fg); outline-offset: 3px;
  }
  .g-logo-mark { width: 22px; height: 22px; border-radius: 6px; background: var(--g-fg); position: relative; flex: none; }
  .g-logo-mark::after { content: ""; position: absolute; inset: 6px; border-radius: 2px; background: var(--g-mark); }
  .g-site-nav { display: flex; flex-wrap: wrap; align-items: center; gap: 4px 14px; margin-right: auto; }
  .g-site-nav a { color: var(--g-fg); text-decoration: none; font-size: 14px; font-weight: 500; }
  .g-site-nav a[aria-current="page"] { text-decoration: underline; text-underline-offset: 4px; }
  .g-site-nav a:hover { text-decoration: underline; text-underline-offset: 4px; }
  .g-start { display: inline-flex; align-items: center; background: var(--g-accent); color: var(--g-accent-fg); border: 1px solid var(--g-accent); border-radius: 8px; padding: 8px 12px; font: 600 13px/1 var(--g-font-body); text-decoration: none; }
  .g-start:hover { opacity: 0.9; }
  .g-sr { position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }
  .g-library { scroll-margin-top: 4.5rem; padding: 6rem 20px; background: var(--g-mark); color: var(--g-fg); text-align: center; }
  .g-library-inner { max-width: 40rem; margin: 0 auto; }
  .g-library h2 { margin: 0 0 1rem; font-family: var(--g-font-display); font-size: clamp(2.75rem, 8vw, 5.5rem); font-weight: 600; letter-spacing: -0.045em; line-height: 0.92; }
  .g-library p { margin: 0 auto 2.25rem; max-width: 30rem; font-size: 1.0625rem; line-height: 1.55; }
  .g-library form { display: flex; flex-direction: column; align-items: center; gap: 14px; }
  .g-plans { display: flex; justify-content: center; gap: 8px; margin: 0; padding: 0; border: 0; }
  .g-plan { position: relative; display: inline-flex; align-items: baseline; gap: 6px; padding: 10px 14px; border: 1.5px solid var(--g-fg); border-radius: 999px; font-size: 14px; white-space: nowrap; cursor: pointer; transition: background-color 0.2s, color 0.2s; }
  .g-plan input { position: absolute; opacity: 0; inset: 0; margin: 0; cursor: pointer; }
  .g-plan strong { font-weight: 600; }
  .g-plan:has(input:checked) { background: var(--g-fg); color: var(--g-mark); }
  .g-plan:has(input:focus-visible) { outline: 2px solid var(--g-fg); outline-offset: 3px; }
  .g-entry { display: flex; flex-wrap: wrap; gap: 6px; width: min(100%, 30rem); padding: 6px; background: var(--g-bg); border-radius: 14px; box-shadow: 0 1px 0 rgba(20, 20, 20, 0.12), 0 12px 32px -12px rgba(20, 20, 20, 0.35); }
  .g-entry:focus-within { outline: 2px solid var(--g-fg); outline-offset: 3px; }
  .g-entry input { flex: 1 1 12rem; min-width: 0; height: 48px; padding: 0 12px; border: 0; background: transparent; color: var(--g-fg); font: 400 16px/1 var(--g-font-body); caret-color: var(--g-fg); }
  .g-entry input:focus { outline: none; }
  .g-entry input::placeholder { color: var(--g-muted); }
  .g-entry button { flex: 1 0 auto; height: 48px; padding: 0 22px; border: 0; border-radius: 10px; background: var(--g-fg); color: var(--g-bg); font: 600 15px/1 var(--g-font-body); cursor: pointer; }
  .g-entry button:hover { opacity: 0.88; }
  .g-entry button:disabled { opacity: 0.5; cursor: progress; }
  .g-status { min-height: 1.5em; margin: 18px 0 0; font-size: 16px; font-weight: 600; }
  .g-mocks { padding: 4rem 20px 5rem; max-width: 52rem; margin: 0 auto; }
  .g-mocks h1 { margin: 0 0 0.75rem; font-family: var(--g-font-display); font-size: clamp(2rem, 5vw, 3rem); font-weight: 600; letter-spacing: -0.03em; line-height: 1.05; }
  .g-mocks > p { margin: 0 0 2rem; color: var(--g-muted); font-size: 1.0625rem; line-height: 1.55; max-width: 36rem; }
  .g-mock-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 12px; }
  .g-mock-list a { display: block; padding: 1.1rem 1.25rem; border: 1px solid var(--g-line); border-radius: 14px; background: var(--g-panel); color: inherit; text-decoration: none; }
  .g-mock-list a:hover { border-color: var(--g-fg); }
  .g-mock-list strong { display: block; font-family: var(--g-font-display); font-size: 1.0625rem; letter-spacing: -0.02em; }
  .g-mock-list span { display: block; margin-top: 0.35rem; color: var(--g-muted); font-size: 0.9375rem; line-height: 1.45; }
  .g-login { padding: 5rem 20px 6rem; max-width: 24rem; margin: 0 auto; }
  .g-login h1 { margin: 0 0 0.75rem; font-family: var(--g-font-display); font-size: clamp(1.75rem, 4vw, 2.25rem); font-weight: 600; letter-spacing: -0.03em; }
  .g-login > p { margin: 0 0 1.75rem; color: var(--g-muted); font-size: 1rem; line-height: 1.55; }
  .g-login form { display: flex; flex-direction: column; gap: 12px; }
  .g-login label { display: flex; flex-direction: column; gap: 6px; font-size: 13px; font-weight: 600; }
  .g-login input { height: 48px; padding: 0 12px; border: 1px solid var(--g-line); border-radius: 10px; background: var(--g-panel); color: var(--g-fg); font: 400 16px/1 var(--g-font-body); }
  .g-login input:focus { outline: 2px solid var(--g-fg); outline-offset: 2px; }
  .g-login button { height: 48px; border: 0; border-radius: 10px; background: var(--g-fg); color: var(--g-bg); font: 600 15px/1 var(--g-font-body); cursor: pointer; }
  .g-login button:disabled { opacity: 0.5; cursor: progress; }
  .g-login .g-status { margin-top: 0.5rem; }
  .g-login-invite { display: none; flex-direction: column; gap: 12px; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--g-line); }
  .g-login-invite.is-open { display: flex; }
  .g-admin { padding: 3.5rem 20px 5rem; max-width: 52rem; margin: 0 auto; }
  .g-admin h1 { margin: 0 0 0.35rem; font-family: var(--g-font-display); font-size: clamp(1.75rem, 4vw, 2.25rem); font-weight: 600; letter-spacing: -0.03em; }
  .g-admin .g-admin-lead { margin: 0 0 1.75rem; color: var(--g-muted); font-size: 1rem; line-height: 1.55; }
  .g-admin-add { display: flex; flex-wrap: wrap; gap: 8px; margin: 0 0 1.75rem; padding: 14px; border: 1px solid var(--g-line); border-radius: 14px; background: var(--g-panel); }
  .g-admin-add input { flex: 1 1 14rem; min-width: 0; height: 44px; padding: 0 12px; border: 1px solid var(--g-line); border-radius: 10px; background: var(--g-bg); color: var(--g-fg); font: 400 15px/1 var(--g-font-body); }
  .g-admin-add button, .g-admin-row button { height: 44px; padding: 0 16px; border: 0; border-radius: 10px; background: var(--g-fg); color: var(--g-bg); font: 600 14px/1 var(--g-font-body); cursor: pointer; }
  .g-admin-add button:disabled, .g-admin-row button:disabled { opacity: 0.5; cursor: progress; }
  .g-admin-row button.g-admin-secondary { background: var(--g-chip); color: var(--g-fg); border: 1px solid var(--g-line); }
  .g-admin-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
  .g-admin-row { display: grid; gap: 10px 14px; padding: 1rem 1.1rem; border: 1px solid var(--g-line); border-radius: 14px; background: var(--g-panel); }
  @media (min-width: 640px) {
    .g-admin-row { grid-template-columns: 1fr auto; align-items: center; }
  }
  .g-admin-meta { display: flex; flex-wrap: wrap; gap: 8px 12px; align-items: baseline; }
  .g-admin-meta strong { font-size: 0.975rem; letter-spacing: -0.01em; }
  .g-admin-chip { display: inline-flex; align-items: center; padding: 3px 8px; border-radius: 999px; background: var(--g-chip); font-size: 11px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; }
  .g-admin-chip[data-status="waitlist"] { background: #fff1e8; color: #9a3412; }
  .g-admin-chip[data-status="invited"] { background: #eef2ff; color: #3730a3; }
  .g-admin-chip[data-status="active"] { background: #ecfdf3; color: #166534; }
  .g-admin-chip[data-admin] { background: var(--g-fg); color: var(--g-bg); }
  .g-admin-sub { margin: 0.35rem 0 0; color: var(--g-muted); font-size: 0.875rem; line-height: 1.4; word-break: break-all; }
  .g-admin-actions { display: flex; flex-wrap: wrap; gap: 8px; }
  .g-admin-empty { margin: 0; color: var(--g-muted); }
  /* Product screenshots — shown as screenshots, never stuffed into photo slots with cover. */
  .g-proof { padding: 4.5rem 20px 5rem; background: var(--g-bg); border-bottom: 1px solid var(--g-line); }
  .g-proof-inner { max-width: 64rem; margin: 0 auto; }
  .g-proof-head { max-width: 36rem; margin: 0 0 2.5rem; }
  .g-proof-head h2 { margin: 0 0 0.75rem; font-family: var(--g-font-display); font-size: clamp(2rem, 5vw, 3rem); font-weight: 600; letter-spacing: -0.04em; line-height: 1.05; }
  .g-proof-head p { margin: 0; color: var(--g-muted); font-size: 1.0625rem; line-height: 1.55; }
  .g-proof-grid { display: grid; gap: 1.75rem; }
  @media (min-width: 800px) {
    .g-proof-grid { grid-template-columns: 1fr 1fr; gap: 1.5rem; align-items: start; }
    .g-proof-card:nth-child(2) { margin-top: 3.5rem; }
  }
  .g-proof-card { margin: 0; padding: 0; border: 1px solid var(--g-line); border-radius: 16px; background: var(--g-panel); overflow: hidden; }
  .g-proof-card figcaption { padding: 1rem 1.15rem 1.15rem; }
  .g-proof-card figcaption strong { display: block; font-family: var(--g-font-display); font-size: 1.125rem; font-weight: 600; letter-spacing: -0.02em; margin: 0 0 0.35rem; }
  .g-proof-card figcaption span { display: block; color: var(--g-muted); font-size: 0.9375rem; line-height: 1.45; }
  .g-proof-shot { display: block; width: 100%; height: auto; vertical-align: top; background: #ece9e1; }
  .g-proof-head, .g-proof-card { opacity: 0; transform: translate3d(0, 2.25rem, 0); }
  .g-proof.is-in .g-proof-head, .g-proof.is-in .g-proof-card { opacity: 1; transform: none; transition: opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1); }
  .g-proof.is-in .g-proof-card:nth-child(1) { transition-delay: 0.1s; }
  .g-proof.is-in .g-proof-card:nth-child(2) { transition-delay: 0.24s; }
  .g-pitch { padding: 4.5rem 20px; background: var(--g-bg); border-bottom: 1px solid var(--g-line); }
  .g-pitch-inner { max-width: 40rem; margin: 0 auto; }
  .g-pitch h2 { margin: 0 0 0.75rem; font-family: var(--g-font-display); font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 600; letter-spacing: -0.03em; line-height: 1.1; }
  .g-pitch p { margin: 0 0 1rem; color: var(--g-muted); font-size: 1.0625rem; line-height: 1.55; }
  .g-pitch p:last-child { margin-bottom: 0; }
  .g-pitch-support { color: var(--g-fg) !important; font-weight: 500; }
  .g-close { padding: 5rem 20px; background: var(--g-mark); color: var(--g-fg); text-align: center; }
  .g-close-inner { max-width: 36rem; margin: 0 auto; }
  .g-close h2 { margin: 0 0 0.75rem; font-family: var(--g-font-display); font-size: clamp(1.75rem, 5vw, 2.75rem); font-weight: 600; letter-spacing: -0.035em; line-height: 1.05; }
  .g-close p { margin: 0 auto 1.75rem; max-width: 28rem; font-size: 1.0625rem; line-height: 1.55; }
  .g-close-cta { display: inline-flex; align-items: center; height: 48px; padding: 0 22px; border-radius: 10px; background: var(--g-fg); color: var(--g-bg); font: 600 15px/1 var(--g-font-body); text-decoration: none; }
  .g-close-cta:hover { opacity: 0.9; }
  .g-compare { padding: 4rem 20px 5rem; background: var(--g-bg); border-bottom: 1px solid var(--g-line); }
  .g-compare-inner { max-width: 68rem; margin: 0 auto; }
  .g-compare h2 { margin: 0 0 0.75rem; font-family: var(--g-font-display); font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 600; letter-spacing: -0.03em; line-height: 1.1; }
  .g-compare > .g-compare-inner > p { margin: 0 0 2rem; max-width: 40rem; color: var(--g-muted); font-size: 1.0625rem; line-height: 1.55; }
  .g-compare-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; border: 1px solid var(--g-line); border-radius: 14px; background: var(--g-panel); }
  .g-compare-table { width: 100%; min-width: 44rem; border-collapse: collapse; font-size: 14px; }
  .g-compare-table th, .g-compare-table td { padding: 14px 16px; text-align: left; border-bottom: 1px solid var(--g-line); vertical-align: top; }
  .g-compare-table th { font-family: var(--g-font-display); font-weight: 600; font-size: 13px; letter-spacing: -0.01em; background: var(--g-chip); }
  .g-compare-table th:first-child, .g-compare-table td:first-child { position: sticky; left: 0; z-index: 1; background: var(--g-panel); font-weight: 600; min-width: 9.5rem; }
  .g-compare-table th:first-child { background: var(--g-chip); }
  .g-compare-table th[data-blokset], .g-compare-table td[data-blokset] { background: #fff7f2; }
  .g-compare-table th[data-blokset] { background: #ffe8dc; }
  .g-compare-table tr:last-child td { border-bottom: 0; }
  .g-compare-table td { color: var(--g-muted); line-height: 1.45; }
  .g-compare-table td[data-blokset] { color: var(--g-fg); font-weight: 500; }
  .g-compare-note { margin: 1.25rem 0 0; max-width: 40rem; color: var(--g-muted); font-size: 0.9375rem; line-height: 1.5; }
  @media (min-width: 560px) {
    .g-plan { gap: 8px; padding: 11px 18px; font-size: 15px; }
    .g-entry button { flex: 0 0 auto; }
  }
  @media (max-width: 720px) {
    .g-top { display: grid; grid-template-columns: 1fr auto; grid-template-areas: "logo start" "nav nav"; align-items: center; gap: 10px 12px; padding: 12px 16px; }
    .g-logo { grid-area: logo; margin-right: 0; }
    .g-start { grid-area: start; }
    .g-site-nav { grid-area: nav; margin-right: 0; gap: 14px; }
  }
  @media (min-width: 800px) {
    .g-top, .g-library, .g-compare, .g-proof, .g-pitch, .g-close { padding-left: 28px; padding-right: 28px; }
  }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    .g-proof-head, .g-proof-card { opacity: 1 !important; transform: none !important; }
  }
`;

/** Public waitlist chrome has no links into gated pages. App chrome is for signed-in routes. */
function chrome(current, { app = false } = {}) {
  const link = (href, id, label) =>
    `<a href="${href}"${current === id ? ` aria-current="page"` : ""}>${label}</a>`;
  const nav = app
    ? `<nav class="g-site-nav" aria-label="Site">
    ${link("/", "home", "Home")}
    ${link("/gallery", "gallery", "Gallery")}
    ${link("/compare", "compare", "Compare")}
    ${link("/pricing", "pricing", "Pricing")}
  </nav>`
    : "";
  return `<a class="g-skip" href="#content">Skip to content</a>
<div class="g-sticky">
<header class="g-top">
  <a class="g-logo" href="/"><span class="g-logo-mark" aria-hidden="true"></span>Blokset</a>
  ${nav}
  <a class="g-start" href="/login">Sign in</a>
</header>
</div>`;
}

/** Minimal footer for the public waitlist. No gated links, no extra CTAs. */
const waitlistFooter = {
  showLogo: false,
  showButtons: false,
  tagline: "Your next section, in your class system and your format.",
  buttons: [],
  showColumns: false,
  column1Title: "",
  column1Links: [],
  column2Title: "",
  column2Links: [],
  column3Title: "",
  column3Links: [],
  showWordmark: true,
  wordmark: "Blokset",
  showLegal: true,
  copyright: "© 2026 Blokset",
  legalLinks: [],
};

/** Footer for gated pages after sign-in. */
const footerValues = {
  showLogo: false,
  showButtons: true,
  tagline: "One spec. The stack the project already uses.",
  buttons: [
    { title: "Open gallery", href: "/gallery", variant: "primary" },
    { title: "Pricing", href: "/pricing", variant: "secondary-alt" },
  ],
  showColumns: true,
  column1Title: "Product",
  column1Links: [
    { label: "Gallery", href: "/gallery" },
    { label: "Compare", href: "/compare" },
    { label: "Pricing", href: "/pricing" },
  ],
  column2Title: "Class systems",
  column2Links: [
    { label: "Client-First", href: "/gallery?framework=client-first" },
    { label: "BEM", href: "/gallery?framework=bem" },
    { label: "Flowkit", href: "/gallery?framework=flowkit" },
  ],
  column3Title: "Outputs",
  column3Links: [
    { label: "Webflow", href: "/gallery?output=webflow" },
    { label: "Figma", href: "/gallery?output=figma" },
    { label: "React", href: "/gallery?output=react" },
  ],
  showWordmark: true,
  wordmark: "Blokset",
  showLegal: true,
  copyright: "© 2026 Blokset",
  legalLinks: [],
};

const FORM_SCRIPT = `<script>
(function () {
  var form = document.querySelector("form[name=library]");
  if (!form) return;
  var status = document.getElementById("library-status");
  var button = form.querySelector("button[type=submit]");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    button.disabled = true;
    status.textContent = "Sending…";
    var body = new URLSearchParams(new FormData(form)).toString();
    fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body
    }).then(function (res) {
      if (!res.ok) throw new Error(String(res.status));
      form.hidden = true;
      status.textContent = "You're on the waitlist. We'll email you when an invite is available.";
    }).catch(function () {
      button.disabled = false;
      status.textContent = "That didn't go through. Check the address and try again.";
    });
  });
})();
</script>`;

/** Email-only waitlist form for the public launch page and mocks. */
function waitlistForm() {
  return `<section class="g-library" id="library" aria-labelledby="library-title">
  <div class="g-library-inner">
    <h2 id="library-title">Join the waitlist</h2>
    <p>Leave an email for sections in your class system and your format. Currently invite-only. We'll email you when access is available.</p>
    <form name="library" method="POST" action="/api/waitlist">
      <input type="hidden" name="form-name" value="library">
      <p hidden>
        <label>Leave this empty <input name="bot-field" tabindex="-1" autocomplete="off"></label>
      </p>
      <div class="g-entry">
        <label class="g-sr" for="library-email">Email</label>
        <input id="library-email" type="email" name="email" required autocomplete="email" inputmode="email" placeholder="you@studio.com">
        <button type="submit">Join the waitlist</button>
      </div>
    </form>
    <p class="g-status" id="library-status" role="status"></p>
  </div>
</section>
${FORM_SCRIPT}`;
}

/** Screenshots shown as screenshots — natural size, no cover crop into photo slots. */
function proofSection() {
  const webflow = media("webflow-paste.jpg", "Blokset Features / Bento section pasted in Webflow Designer");
  const figma = media("figma-spec.jpg", "Blokset sections laid out in Figma");
  return `<section class="g-proof" aria-labelledby="proof-title">
  <div class="g-proof-inner">
    <div class="g-proof-head">
      <h2 id="proof-title">Paste into Webflow. Open in Figma.</h2>
      <p>Same section in the tool you’re already working in. Your classes. Your format.</p>
    </div>
    <div class="g-proof-grid">
      <figure class="g-proof-card">
        <img class="g-proof-shot" src="${esc(webflow.src)}" alt="${esc(webflow.alt)}" width="1024" height="941" loading="lazy" decoding="async">
        <figcaption>
          <strong>In Webflow</strong>
          <span>Paste lands on the class names the project already has.</span>
        </figcaption>
      </figure>
      <figure class="g-proof-card">
        <img class="g-proof-shot" src="${esc(figma.src)}" alt="${esc(figma.alt)}" width="1022" height="1024" loading="lazy" decoding="async">
        <figcaption>
          <strong>In Figma</strong>
          <span>The same design from one shared spec — open the counterpart without rebuilding.</span>
        </figcaption>
      </figure>
    </div>
  </div>
</section>`;
}

const PROOF_SCRIPT = `<script>
(function () {
  var section = document.querySelector(".g-proof");
  if (!section) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    section.classList.add("is-in");
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      section.classList.add("is-in");
      io.disconnect();
    });
  }, { threshold: 0.2, rootMargin: "0px 0px -6% 0px" });
  io.observe(section);
})();
</script>`;

function competitivePitch() {
  return `<section class="g-pitch" aria-labelledby="pitch-title">
  <div class="g-pitch-inner">
    <h2 id="pitch-title">Already have a component library?</h2>
    <p>Your next project might use a different class system. Your next client might need a different stack. Blokset gives you the same section across those choices.</p>
    <p class="g-pitch-support">Client-First for one build. BEM for another. Webflow today. Astro on the next project.</p>
  </div>
</section>`;
}

function closingCta() {
  return `<section class="g-close" aria-labelledby="close-title">
  <div class="g-close-inner">
    <h2 id="close-title">Keep your workflow. Find your next section.</h2>
    <p>Join the waitlist for sections in your classes and your format.</p>
    <a class="g-close-cta" href="#library">Join the waitlist</a>
  </div>
</section>`;
}

/** Pricing page form keeps plan radios. */
function libraryForm() {
  return `<section class="g-library" id="library" aria-labelledby="library-title">
  <div class="g-library-inner">
    <h2 id="library-title">Get the full library</h2>
    <p>Billing is not open yet. Join the list and the full library opens for you when it is. Solo is also $192 a year.</p>
    <form name="library" method="POST" action="/api/waitlist">
      <input type="hidden" name="form-name" value="library">
      <p hidden>
        <label>Leave this empty <input name="bot-field" tabindex="-1" autocomplete="off"></label>
      </p>
      <fieldset class="g-plans">
        <legend class="g-sr">Plan</legend>
        <label class="g-plan"><input type="radio" name="plan" value="Solo" checked><strong>Solo</strong> $24 a month</label>
        <label class="g-plan"><input type="radio" name="plan" value="Studio"><strong>Studio</strong> $49 a month</label>
      </fieldset>
      <div class="g-entry">
        <label class="g-sr" for="pricing-library-email">Email</label>
        <input id="pricing-library-email" type="email" name="email" required autocomplete="email" inputmode="email" placeholder="you@studio.com">
        <button type="submit">Join the list</button>
      </div>
    </form>
    <p class="g-status" id="library-status" role="status"></p>
  </div>
</section>
${FORM_SCRIPT}`;
}

function home(specs, ctx) {
  const total = specs.length;
  const hero = section(specs, ctx, "hero-14", {
    showEyebrow: false,
    heading: "Your next section. On your terms.",
    showDescription: true,
    description: "Pick a hero, pricing section, or footer. Get the same design in Webflow, Figma, or code, using your project’s class system: Client-First, BEM, or Flowkit. Built for the site you’re already building.",
    showButtons: true,
    buttons: [
      { title: "Join the waitlist", href: "#library", variant: "primary" },
      { title: "Explore the sections", href: "#sections", variant: "secondary-alt" },
    ],
    showHint: true,
    hint: "Move around. Real section previews from the set.",
    trail: SHOT_IDS.map((id) => ({ image: shot(specs, id, "wide") })),
  }, { theme: "dark", typeSize: "large" });
  const tiles = section(specs, ctx, "bento-02", {
    showEyebrow: false,
    heading: "Sections that move",
    description: "Marquees, trails, and tilts from the library. Real previews of what’s inside once you’re invited.",
    railLabel: "Ships as",
    copyTitle: "Your class system",
    copyText: "Client-First, BEM, or Flowkit. Pick the convention the project already follows.",
    note: "One shared spec. Same design in every output.",
    placeTitle: "Your format",
    placeText: "Webflow paste, Figma, React, Astro, HTML, or vanilla.",
    still: shot(specs, SHOT_IDS[4], "wide"),
    words: ["Client-First", "BEM", "Flowkit", "Webflow", "Figma", "React", "Astro"].map((label) => ({ label })),
    photos: SHOT_IDS.slice(1, 7).map((id) => ({ image: shot(specs, id, "wide") })),
  });
  const steps = section(specs, ctx, "process-03", {
    showEyebrow: false,
    heading: "What happens next",
    showDescription: true,
    description: "Join the waitlist. Access stays invite-only until you’re approved.",
    showNumbers: true,
    showImages: true,
    steps: [
      { title: "Join the waitlist", text: "Leave an email. That puts you on the list; it doesn’t open the gallery yet.", image: shot(specs, SHOT_IDS[0], "wide") },
      { title: "Receive an invite", text: "When you’re approved, we send a link so you can set a password and sign in.", image: shot(specs, SHOT_IDS[1], "wide") },
      { title: "Sign in", text: "Use your email and password to open the library.", image: shot(specs, SHOT_IDS[2], "wide") },
      { title: "Choose and ship", text: "Pick a section, your class system, and your output. Then take it into the project you’re building.", image: shot(specs, "hero-63", "wide") },
    ],
  }, { theme: "dark" });
  const footer = section(specs, ctx, "footer-04", waitlistFooter);
  const seo = homeSeo(total);
  return {
    ...seo,
    current: "home",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Blokset",
        url: SITE_URL,
        description: seo.description,
      },
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Blokset",
        applicationCategory: "DesignApplication",
        operatingSystem: "Web",
        url: SITE_URL,
        description: seo.description,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Waitlist for the Blokset component library",
        },
      },
    ],
    body: [
      hero,
      waitlistForm(),
      proofSection(),
      `<div id="sections">${tiles}</div>`,
      competitivePitch(),
      steps,
      closingCta(),
      footer,
    ].join("\n"),
    scripts: PROOF_SCRIPT,
  };
}

function pricing(specs, ctx) {
  const plans = section(specs, ctx, "pricing-06", {
    showEyebrow: false,
    heading: "Free to paste. Paid for the library.",
    description: "Commercial client work is included. Reselling the library as a kit is not.",
    showToggle: false,
    showSaveBadge: false,
    showFeaturedLabel: true,
    featuredLabel: "Full catalog",
    plan1Name: "Free",
    plan1Price: "$0",
    plan1Period: "",
    plan1Description: "Enough to paste a real section and see the classes.",
    plan1Features: [
      { text: "20 sections" },
      { text: "Client-First" },
      { text: "Webflow paste" },
      { text: "Every card visible in the gallery" },
    ],
    plan1Buttons: [{ title: "Start free", href: "/gallery", variant: "secondary" }],
    plan2Name: "Solo",
    plan2Price: "$24",
    plan2Period: "/ month",
    plan2Description: "$192 a year. The full catalog and every output.",
    plan2Features: [
      { text: `All ${specs.length} sections` },
      { text: "Client-First, BEM, and Flowkit" },
      { text: "Class Sync" },
      { text: "Figma kit" },
      { text: "React, Astro, HTML, and vanilla" },
    ],
    plan2Buttons: [{ title: "Join the list", href: "#library", variant: "primary" }],
    plan3Name: "Studio",
    plan3Price: "$49",
    plan3Period: "/ month",
    plan3Description: "The Solo library for a few seats.",
    plan3Features: [
      { text: "Everything in Solo" },
      { text: "A few seats" },
      { text: "One bill for the studio" },
      { text: "Commercial client work" },
    ],
    plan3Buttons: [{ title: "Join the list", href: "#library", variant: "secondary" }],
  }, { theme: "dark", featuredStyle: "accent-plan" });
  const opens = section(specs, ctx, "logos-05", {
    heading: "What the $24 opens",
    words: [`${specs.length} sections`, "Client-First", "BEM", "Flowkit", "Class Sync", "Figma kit", "React", "Astro"].map((text) => ({ text })),
  });
  const faq = section(specs, ctx, "faq-04", {
    showEyebrow: false,
    heading: "Before you paste",
    showDescription: true,
    description: "The prices above are the ones billing will use.",
    showContact: false,
    showButtons: false,
    questions: [
      { question: "Can I use this on client work?", answer: "Yes. Commercial use in client projects is included." },
      { question: "Can I resell the sections?", answer: "No. Redistributing the library as someone else's kit is not included." },
      { question: "When do I pay?", answer: "Billing is not open yet. Join the list and the full library opens for you when it is." },
      { question: "What can I copy today?", answer: "Twenty sections, in Client-First, with the Webflow paste. The gallery labels them Free. The other cards stay visible." },
      { question: "Does the paste keep my classes?", answer: "Class Sync pastes onto classes the site already has. A button class named button stays button." },
      { question: "How is Blokset different from Relume or Flowbase?", answer: "Relume and Flowbase are strong Webflow kits. Blokset adds Class Sync so pastes reuse the classes you already have, plus Figma and code from the same spec. See the full matchup on /compare." },
    ],
  });
  const footer = section(specs, ctx, "footer-04", footerValues);
  const seo = pricingSeo();
  const faqEntities = [
    { question: "Can I use this on client work?", answer: "Yes. Commercial use in client projects is included." },
    { question: "Can I resell the sections?", answer: "No. Redistributing the library as someone else's kit is not included." },
    { question: "When do I pay?", answer: "Billing is not open yet. Join the list and the full library opens for you when it is." },
    { question: "What can I copy today?", answer: "Twenty sections, in Client-First, with the Webflow paste. The gallery labels them Free. The other cards stay visible." },
    { question: "Does the paste keep my classes?", answer: "Class Sync pastes onto classes the site already has. A button class named button stays button." },
    { question: "How is Blokset different from Relume or Flowbase?", answer: "Relume and Flowbase are strong Webflow kits. Blokset adds Class Sync so pastes reuse the classes you already have, plus Figma and code from the same spec." },
  ];
  return {
    ...seo,
    current: "pricing",
    jsonLd: [{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqEntities.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    }],
    body: `${plans}\n${opens}\n${faq}\n${libraryForm()}\n${footer}`,
  };
}

const COMPARE_ROWS = [
  ["Paste into Webflow", "Yes", "Yes", "Yes", "Yes"],
  ["Keeps existing class names (Class Sync)", "Yes", "No — kit classes", "No — kit classes", "No — kit classes"],
  ["Client-First, BEM, and Flowkit", "Yes", "Client-First style", "Varies by kit", "Varies by kit"],
  ["Figma from the same spec", "Yes", "Separate / limited", "Limited", "Limited"],
  ["React, Astro, HTML, vanilla JS", "Yes", "No", "No", "No"],
  ["Full gallery visible before you pay", "Yes", "Browse / gated mix", "Browse / gated mix", "Browse / gated mix"],
  ["Free sections you can paste today", `${FREE_IDS.length}`, "Trial / plan dependent", "Plan dependent", "Plan dependent"],
  ["Built for sites that already have a class system", "Yes", "Opinionated kit system", "Opinionated kit system", "Opinionated kit system"],
];

function compareMatrix() {
  const head = ["Capability", "Blokset", "Relume Library", "Flowbase", "BRIX Templates"];
  const headRow = head.map((label, i) => `<th${i === 1 ? " data-blokset" : ""} scope="col">${esc(label)}</th>`).join("");
  const bodyRows = COMPARE_ROWS.map((row) => {
    const cells = row.map((cell, i) => {
      if (i === 0) return `<th scope="row">${esc(cell)}</th>`;
      return `<td${i === 1 ? " data-blokset" : ""}>${esc(cell)}</td>`;
    }).join("");
    return `<tr>${cells}</tr>`;
  }).join("\n");
  return `<section class="g-compare" id="matrix" aria-labelledby="compare-matrix-title">
  <div class="g-compare-inner">
    <h2 id="compare-matrix-title">Side by side</h2>
    <p>Same job: ship polished Webflow sections faster. The difference is what happens to the classes you already named, and whether Figma and code come from the same source.</p>
    <div class="g-compare-scroll">
      <table class="g-compare-table">
        <thead><tr>${headRow}</tr></thead>
        <tbody>
${bodyRows}
        </tbody>
      </table>
    </div>
    <p class="g-compare-note">Relume, Flowbase, and BRIX are excellent Webflow-native kits. Blokset is for teams who need the paste to land on their existing naming—and who want Figma and code without rebuilding the section.</p>
  </div>
</section>`;
}

function compare(specs, ctx) {
  const hero = section(specs, ctx, "hero-14", {
    showEyebrow: false,
    heading: "Same job as Relume. Different paste.",
    showDescription: true,
    description: "If you are comparing Relume Library, Flowbase, or BRIX Templates, start here. Blokset ships Webflow sections that reuse the classes your site already has—plus Figma and code from the same spec.",
    showButtons: true,
    buttons: [
      { title: "Open the gallery", href: "/gallery", variant: "primary" },
      { title: "See pricing", href: "/pricing", variant: "secondary-alt" },
    ],
    showHint: true,
    hint: "Scroll for the matrix. Fair rows, not a teardown.",
    trail: SHOT_IDS.map((id) => ({ image: shot(specs, id, "phone") })),
  }, { theme: "dark", typeSize: "large" });
  const compareFaqs = [
    { question: "Is Blokset a Relume alternative?", answer: "For Webflow section libraries, yes—people compare them. Relume is strong for sitemap-to-build workflows and a large Client-First style library. Blokset focuses on Class Sync, multi-framework class names, and shipping Figma plus code from the same spec." },
    { question: "How does Blokset compare to Flowbase?", answer: "Flowbase is a large Webflow UI kit with many polished sections. Blokset is smaller today but shows every card in the gallery, lets you paste free sections now, and keeps your existing class names when you paste." },
    { question: "How does Blokset compare to BRIX Templates?", answer: "BRIX is a well-known Webflow-native component and template library. Choose BRIX when you want that kit’s look and structure. Choose Blokset when the site already has a class system you refuse to rename—or when you need Figma and code as well." },
    { question: "Can I switch from Relume or Flowbase?", answer: "Yes. Browse the gallery, paste a free section into a Client-First project, and see whether Class Sync matches how you already name buttons and wrappers. Join the list on pricing when you want the full library." },
  ];
  const faq = section(specs, ctx, "faq-04", {
    showEyebrow: false,
    heading: "Straight answers",
    showDescription: true,
    description: "No scorecards. Just the questions teams ask when they already know Relume, Flowbase, or BRIX.",
    showContact: false,
    showButtons: false,
    questions: compareFaqs,
  });
  const cta = section(specs, ctx, "cta-12", {
    showEyebrow: false,
    wordmark: "Blokset",
    showNote: true,
    note: "Paste a free section. Keep the classes you already trust.",
    showButtons: true,
    buttons: [{ title: "Start free", href: "/gallery", variant: "dark" }],
  });
  const footer = section(specs, ctx, "footer-04", footerValues);
  const seo = compareSeo();
  return {
    ...seo,
    current: "compare",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: seo.title,
        url: `${SITE_URL}/compare`,
        description: seo.description,
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: compareFaqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
    body: [hero, compareMatrix(), faq, cta, footer].join("\n"),
  };
}

/**
 * @param {{ title: string, description: string, path: string, current: string, body: string, jsonLd?: unknown[], scripts?: string, assetBase?: string, robots?: string, appChrome?: boolean, dev?: boolean }} opts
 */
function documentShell({ title, description, path, current, body, jsonLd: ld = [], scripts = "", assetBase = "./", robots, appChrome = false, dev = false }) {
  const head = siteHead({ title, description, path });
  const robotsMeta = robots ? head.replace('content="index,follow"', `content="${robots}"`) : head;
  const ldTags = ld.map(jsonLd).join("\n");
  const base = assetBase.endsWith("/") ? assetBase : `${assetBase}/`;
  return `<!doctype html>
<html lang="en">
<head>
${robotsMeta}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="${FONTS}" rel="stylesheet">
<style>${CHROME}</style>
<link rel="stylesheet" href="${base}site.css">
${ldTags}
${posthogSnippet()}
</head>
<body>
${chrome(current, { app: appChrome })}
<main id="content">
${body}
</main>
<script src="${base}vendor/gsap.min.js"></script>
<script src="${base}vendor/ScrollTrigger.min.js"></script>
<script src="${base}motion.global.js"></script>
${scripts}
${dev ? `<script>new EventSource("/__reload").onmessage = function () { location.reload(); };</script>` : ""}
</body>
</html>
`;
}

function login(specs, ctx) {
  const footer = section(specs, ctx, "footer-04", waitlistFooter);
  const scripts = `<script>
(function () {
  var form = document.getElementById("login-form");
  var invite = document.getElementById("invite-form");
  var status = document.getElementById("login-status");
  var emailInput = document.getElementById("login-email");
  var passwordInput = document.getElementById("login-password");
  var invitePassword = document.getElementById("invite-password");
  var params = new URLSearchParams(location.search);
  var inviteToken = params.get("invite") || "";
  var next = params.get("next") || "/gallery";

  function setStatus(text, ok) {
    status.textContent = text;
    status.style.color = ok ? "var(--g-fg)" : "#b42318";
  }

  function goNext(session) {
    if (session && session.admin && (!params.get("next") || next === "/gallery")) {
      location.href = "/admin";
      return;
    }
    location.href = next.charAt(0) === "/" ? next : "/gallery";
  }

  async function boot() {
    try {
      var session = await fetch("/api/session", { credentials: "same-origin" }).then(function (r) { return r.json(); });
      if (session && session.email) {
        setStatus("Signed in as " + session.email + ". Opening…", true);
        goNext(session);
        return;
      }
    } catch (e) {}
    if (inviteToken) {
      invite.classList.add("is-open");
      form.hidden = true;
      setStatus("Set a password to accept your invite.", true);
    }
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    var button = form.querySelector("button");
    button.disabled = true;
    setStatus("Signing in…", true);
    try {
      var res = await fetch("/api/login", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailInput.value.trim(), password: passwordInput.value })
      });
      var data = await res.json().catch(function () { return {}; });
      if (!res.ok) {
        button.disabled = false;
        setStatus(data.error || "Sign-in failed. Try again.", false);
        return;
      }
      goNext(data);
    } catch (e) {
      button.disabled = false;
      setStatus("Sign-in failed. Try again.", false);
    }
  });

  invite.addEventListener("submit", async function (event) {
    event.preventDefault();
    if (!inviteToken) return;
    var button = invite.querySelector("button");
    button.disabled = true;
    setStatus("Saving password…", true);
    try {
      var res = await fetch("/api/invite/accept", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: inviteToken, password: invitePassword.value })
      });
      var data = await res.json().catch(function () { return {}; });
      if (!res.ok) {
        button.disabled = false;
        setStatus(data.error || "Could not accept the invite.", false);
        return;
      }
      goNext(data);
    } catch (e) {
      button.disabled = false;
      setStatus("Could not accept the invite.", false);
    }
  });

  document.getElementById("login-signout").addEventListener("click", async function () {
    await fetch("/api/logout", { method: "POST", credentials: "same-origin" });
    if (window.posthog) posthog.reset();
    setStatus("Signed out.", true);
  });

  boot();
})();
</script>`;
  return {
    title: "Sign in — Blokset",
    description: "Sign in to open the Blokset gallery, compare page, and pricing.",
    path: "/login",
    current: "login",
    body: `<section class="g-login" aria-labelledby="login-title">
  <h1 id="login-title">Sign in</h1>
  <p>The gallery, compare page, and pricing are invite-only. Join the list on the home page, then sign in after we approve you.</p>
  <form id="login-form">
    <label>Email <input id="login-email" type="email" name="email" required autocomplete="email" inputmode="email"></label>
    <label>Password <input id="login-password" type="password" name="password" required autocomplete="current-password"></label>
    <button type="submit">Sign in</button>
  </form>
  <form id="invite-form" class="g-login-invite">
    <p>You were invited. Choose a password to finish setup.</p>
    <label>New password <input id="invite-password" type="password" name="password" required autocomplete="new-password" minlength="8"></label>
    <button type="submit">Accept invite</button>
  </form>
  <p class="g-status" id="login-status" role="status"></p>
  <p><a href="/#library">Join the waitlist</a> · <button type="button" id="login-signout" style="all:unset;cursor:pointer;text-decoration:underline;font:inherit">Sign out</button></p>
</section>
${footer}`,
    scripts,
  };
}

function admin(specs, ctx) {
  const footer = section(specs, ctx, "footer-04", waitlistFooter);
  const scripts = `<script>
(function () {
  var list = document.getElementById("admin-list");
  var empty = document.getElementById("admin-empty");
  var status = document.getElementById("admin-status");
  var who = document.getElementById("admin-who");
  var form = document.getElementById("admin-add");
  var emailInput = document.getElementById("admin-email");

  function setStatus(text, ok) {
    status.textContent = text || "";
    status.style.color = ok === false ? "#b42318" : "var(--g-fg)";
  }

  function when(iso) {
    if (!iso) return "";
    try { return new Date(iso).toLocaleString(); } catch (e) { return iso; }
  }

  function label(person) {
    if (person.status === "waitlist") return "Waitlist";
    if (person.status === "invited") return "Invited";
    return "Active";
  }

  async function invite(email, button) {
    if (button) button.disabled = true;
    setStatus("Creating invite…", true);
    try {
      var res = await fetch("/api/admin/invite", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email })
      });
      var data = await res.json().catch(function () { return {}; });
      if (!res.ok) {
        setStatus(data.error || "Invite failed.", false);
        if (button) button.disabled = false;
        return null;
      }
      if (data.inviteUrl && navigator.clipboard && navigator.clipboard.writeText) {
        try { await navigator.clipboard.writeText(data.inviteUrl); } catch (e) {}
      }
      setStatus("Invite ready for " + data.email + ". Link copied when possible.", true);
      await load();
      return data;
    } catch (e) {
      setStatus("Invite failed.", false);
      if (button) button.disabled = false;
      return null;
    }
  }

  function row(person) {
    var li = document.createElement("li");
    li.className = "g-admin-row";
    var meta = document.createElement("div");
    var line = document.createElement("div");
    line.className = "g-admin-meta";
    var strong = document.createElement("strong");
    strong.textContent = person.email;
    line.appendChild(strong);
    var chip = document.createElement("span");
    chip.className = "g-admin-chip";
    chip.dataset.status = person.status;
    chip.textContent = label(person);
    line.appendChild(chip);
    if (person.admin) {
      var adminChip = document.createElement("span");
      adminChip.className = "g-admin-chip";
      adminChip.dataset.admin = "true";
      adminChip.textContent = "Admin";
      line.appendChild(adminChip);
    }
    if (person.plan) {
      var plan = document.createElement("span");
      plan.className = "g-admin-chip";
      plan.textContent = person.plan;
      line.appendChild(plan);
    }
    meta.appendChild(line);
    var sub = document.createElement("p");
    sub.className = "g-admin-sub";
    if (person.status === "waitlist") sub.textContent = "Joined " + when(person.waitlistedAt);
    else if (person.status === "invited") sub.textContent = (person.inviteUrl || "Invite pending") + (person.invitedAt ? " · " + when(person.invitedAt) : "");
    else sub.textContent = "Active since " + when(person.userAt);
    meta.appendChild(sub);
    li.appendChild(meta);

    var actions = document.createElement("div");
    actions.className = "g-admin-actions";
    if (person.status === "waitlist" || person.status === "invited") {
      var approve = document.createElement("button");
      approve.type = "button";
      approve.textContent = person.status === "invited" ? "Re-invite" : "Approve";
      approve.addEventListener("click", function () { invite(person.email, approve); });
      actions.appendChild(approve);
    }
    if (person.status === "invited" && person.inviteUrl) {
      var copy = document.createElement("button");
      copy.type = "button";
      copy.className = "g-admin-secondary";
      copy.textContent = "Copy link";
      copy.addEventListener("click", async function () {
        try {
          await navigator.clipboard.writeText(person.inviteUrl);
          setStatus("Invite link copied.", true);
        } catch (e) {
          setStatus(person.inviteUrl, true);
        }
      });
      actions.appendChild(copy);
    }
    if (actions.childNodes.length) li.appendChild(actions);
    return li;
  }

  async function load() {
    setStatus("Loading…", true);
    try {
      var res = await fetch("/api/admin/people", { credentials: "same-origin" });
      if (res.status === 401) {
        location.href = "/login?next=%2Fadmin";
        return;
      }
      var data = await res.json();
      if (!res.ok) {
        setStatus(data.error || "Could not load people.", false);
        return;
      }
      who.textContent = "Signed in as " + data.admin;
      list.innerHTML = "";
      (data.people || []).forEach(function (person) { list.appendChild(row(person)); });
      empty.hidden = (data.people || []).length > 0;
      setStatus("", true);
    } catch (e) {
      setStatus("Could not load people.", false);
    }
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    var email = emailInput.value.trim();
    if (!email) return;
    var button = form.querySelector("button");
    var data = await invite(email, button);
    if (data) {
      emailInput.value = "";
      button.disabled = false;
    }
  });

  load();
})();
</script>`;
  return {
    title: "Admin — Blokset",
    description: "Approve waitlist signups and invite people into the library.",
    path: "/admin",
    current: "admin",
    robots: "noindex,nofollow",
    body: `<section class="g-admin" aria-labelledby="admin-title">
  <h1 id="admin-title">People</h1>
  <p class="g-admin-lead" id="admin-who">Loading…</p>
  <form id="admin-add" class="g-admin-add">
    <label class="g-sr" for="admin-email">Email to invite</label>
    <input id="admin-email" type="email" name="email" required autocomplete="email" inputmode="email" placeholder="someone@studio.com">
    <button type="submit">Invite</button>
  </form>
  <p class="g-status" id="admin-status" role="status"></p>
  <p class="g-admin-empty" id="admin-empty" hidden>No one on the list yet.</p>
  <ul class="g-admin-list" id="admin-list"></ul>
</section>
${footer}`,
    scripts,
  };
}

function mocksIndex() {
  const items = MOCKS.map((mock) =>
    `<li><a href="/mocks/${esc(mock.id)}"><strong>${esc(mock.title)}</strong><span>${esc(mock.blurb)}</span></a></li>`
  ).join("\n");
  return {
    title: "Waitlist mocks — Blokset",
    description: "Seven interactive waitlist page compositions for Blokset pre-launch.",
    path: "/mocks",
    current: "home",
    robots: "noindex,nofollow",
    body: `<section class="g-mocks">
  <h1>Waitlist mocks</h1>
  <p>Exploration pages. The public home is the Trail composition: hero, signup, footer. None of these use the Class Sync card deck.</p>
  <ol class="g-mock-list">
${items}
  </ol>
</section>`,
  };
}

function mockPage(specs, ctx, id) {
  const mock = getMock(id);
  if (!mock) return null;
  const footer = section(specs, ctx, "footer-04", waitlistFooter);
  return {
    title: `${mock.title} mock — Blokset`,
    description: mock.blurb,
    path: `/mocks/${mock.id}`,
    current: "home",
    robots: "noindex,nofollow",
    body: mock.body(specs, ctx, waitlistForm(), footer),
  };
}

/** @param {{ specs: import("../types").ComponentSpec[], ctx: import("../types").BuildContext, page: "home" | "pricing" | "compare" | "login" | "admin", dev?: boolean }} opts */
export function renderMarketing({ specs, ctx, page, dev = false }) {
  const view = page === "pricing" ? pricing(specs, ctx)
    : page === "compare" ? compare(specs, ctx)
    : page === "login" ? login(specs, ctx)
    : page === "admin" ? admin(specs, ctx)
    : home(specs, ctx);
  const appChrome = page === "pricing" || page === "compare";
  return documentShell({ ...view, jsonLd: view.jsonLd || [], scripts: view.scripts || "", assetBase: "./", appChrome, robots: view.robots, dev });
}

/** Dev-only mock index. */
export function renderMocksIndex({ dev = false } = {}) {
  return documentShell({ ...mocksIndex(), assetBase: "../", scripts: "", dev });
}

/** Dev-only mock page. */
export function renderMockPage({ specs, ctx, id, dev = false }) {
  const view = mockPage(specs, ctx, id);
  if (!view) return null;
  return documentShell({ ...view, assetBase: "../", scripts: "", dev });
}

export { MOCKS, getMock };
