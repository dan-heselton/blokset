// Marketing pages. The sections are real component specs with this product's copy.
// Chrome classes stay prefixed g- so they never collide with component classes.
import { resolveComponent } from "../core/resolve.js";
import { generateHtml } from "../generators/code.js";
import { escapeHtml } from "../generators/markup.js";
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

const HOME_IDS = ["hero-14", "gallery-05", "logos-02", "features-46", "process-03", "cta-12", "footer-04"];
const OUTPUTS = [["webflow", "Webflow"], ["figma", "Figma"], ["react", "React"], ["astro", "Astro"], ["html", "HTML"], ["javascript", "Vanilla JS"]];
const PRICING_IDS = ["pricing-06", "logos-05", "faq-04", "footer-04"];
const COMPARE_IDS = ["hero-14", "features-46", "faq-04", "cta-12", "footer-04"];

/** Specs whose CSS the marketing pages need. */
export const MARKETING_IDS = [...new Set([...HOME_IDS, ...PRICING_IDS, ...COMPARE_IDS])];

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

/** A drawing from src/site/art/. */
const art = (name, alt) => ({ src: `./art/${name}.svg`, alt });

const FONTS = "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&family=Newsreader:ital,opsz,wght@0,6..72,500;1,6..72,560&display=swap";

const CHROME = `
  :root {
    color-scheme: light;
    --g-bg: #fbfaf7; --g-panel: #ffffff; --g-fg: #141414; --g-muted: #5c5a54; --g-line: #e7e3da;
    --g-accent: #141414; --g-accent-fg: #ffffff; --g-chip: #f1eee6; --g-mark: #ff5b2e; --g-thumb: #cfcabe;
  }
  *, *::before, *::after { box-sizing: border-box; }
  [hidden] { display: none !important; }
  html { scroll-behavior: smooth; scrollbar-color: var(--g-thumb) transparent; }
  body { margin: 0; background: var(--g-bg); color: var(--g-fg); font-family: Inter, system-ui, sans-serif; font-size: 16px; line-height: 1.5; -webkit-font-smoothing: antialiased; }
  ::selection { background: var(--g-fg); color: var(--g-bg); }
  img { max-width: 100%; }
  .g-skip { position: absolute; left: 12px; top: -40px; z-index: 300; background: var(--g-fg); color: var(--g-bg); padding: 8px 12px; border-radius: 8px; font-weight: 600; text-decoration: none; }
  .g-skip:focus { top: 12px; }
  .g-sticky { position: sticky; top: 0; z-index: 100; background: var(--g-bg); border-bottom: 1px solid var(--g-line); }
  .g-top { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 16px; padding: 12px 20px; }
  .g-logo { display: flex; align-items: center; gap: 10px; color: inherit; text-decoration: none; font-family: "Inter Tight", sans-serif; font-weight: 700; font-size: 17px; letter-spacing: -0.02em; }
  .g-logo:focus-visible, .g-site-nav a:focus-visible, .g-start:focus-visible, .g-entry button:focus-visible {
    outline: 2px solid var(--g-fg); outline-offset: 3px;
  }
  .g-logo-mark { width: 22px; height: 22px; border-radius: 6px; background: var(--g-fg); position: relative; flex: none; }
  .g-logo-mark::after { content: ""; position: absolute; inset: 6px; border-radius: 2px; background: var(--g-mark); }
  .g-site-nav { display: flex; flex-wrap: wrap; align-items: center; gap: 4px 14px; margin-right: auto; }
  .g-site-nav a { color: var(--g-fg); text-decoration: none; font-size: 14px; font-weight: 500; }
  .g-site-nav a[aria-current="page"] { text-decoration: underline; text-underline-offset: 4px; }
  .g-site-nav a:hover { text-decoration: underline; text-underline-offset: 4px; }
  .g-start { display: inline-flex; align-items: center; background: var(--g-accent); color: var(--g-accent-fg); border: 1px solid var(--g-accent); border-radius: 8px; padding: 8px 12px; font: 600 13px/1 Inter, system-ui, sans-serif; text-decoration: none; }
  .g-start:hover { opacity: 0.9; }
  .g-sr { position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }
  .g-library { scroll-margin-top: 4.5rem; padding: 6rem 20px; background: var(--g-mark); color: var(--g-fg); text-align: center; }
  .g-library-inner { max-width: 40rem; margin: 0 auto; }
  .g-library h2 { margin: 0 0 1rem; font-family: "Inter Tight", sans-serif; font-size: clamp(2.75rem, 8vw, 5.5rem); font-weight: 600; letter-spacing: -0.045em; line-height: 0.92; }
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
  .g-entry input { flex: 1 1 12rem; min-width: 0; height: 48px; padding: 0 12px; border: 0; background: transparent; color: var(--g-fg); font: 400 16px/1 Inter, system-ui, sans-serif; caret-color: var(--g-fg); }
  .g-entry input:focus { outline: none; }
  .g-entry input::placeholder { color: var(--g-muted); }
  .g-entry button { flex: 1 0 auto; height: 48px; padding: 0 22px; border: 0; border-radius: 10px; background: var(--g-fg); color: var(--g-bg); font: 600 15px/1 Inter, system-ui, sans-serif; cursor: pointer; }
  .g-entry button:hover { opacity: 0.88; }
  .g-entry button:disabled { opacity: 0.5; cursor: progress; }
  .g-status { min-height: 1.5em; margin: 18px 0 0; font-size: 16px; font-weight: 600; }
  .g-compare { padding: 4rem 20px 5rem; background: var(--g-bg); border-bottom: 1px solid var(--g-line); }
  .g-compare-inner { max-width: 68rem; margin: 0 auto; }
  .g-compare h2 { margin: 0 0 0.75rem; font-family: "Inter Tight", sans-serif; font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 600; letter-spacing: -0.03em; line-height: 1.1; }
  .g-compare > .g-compare-inner > p { margin: 0 0 2rem; max-width: 40rem; color: var(--g-muted); font-size: 1.0625rem; line-height: 1.55; }
  .g-compare-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; border: 1px solid var(--g-line); border-radius: 14px; background: var(--g-panel); }
  .g-compare-table { width: 100%; min-width: 44rem; border-collapse: collapse; font-size: 14px; }
  .g-compare-table th, .g-compare-table td { padding: 14px 16px; text-align: left; border-bottom: 1px solid var(--g-line); vertical-align: top; }
  .g-compare-table th { font-family: "Inter Tight", sans-serif; font-weight: 600; font-size: 13px; letter-spacing: -0.01em; background: var(--g-chip); }
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
    .g-top, .g-library, .g-compare { padding-left: 28px; padding-right: 28px; }
  }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
  }
`;

function chrome(current) {
  const link = (href, id, label) =>
    `<a href="${href}"${current === id ? ` aria-current="page"` : ""}>${label}</a>`;
  return `<a class="g-skip" href="#content">Skip to content</a>
<div class="g-sticky">
<header class="g-top">
  <a class="g-logo" href="/"><span class="g-logo-mark" aria-hidden="true"></span>Blokset</a>
  <nav class="g-site-nav" aria-label="Site">
    ${link("/", "home", "Home")}
    ${link("/gallery", "gallery", "Gallery")}
    ${link("/compare", "compare", "Compare")}
    ${link("/pricing", "pricing", "Pricing")}
  </nav>
  <a class="g-start" href="/gallery">Start free</a>
</header>
</div>`;
}

const footerValues = {
  showLogo: false,
  showButtons: true,
  tagline: "One spec. The stack the project already uses.",
  buttons: [
    { title: "Start free", href: "/gallery", variant: "primary" },
    { title: "Join the list", href: "/pricing#library", variant: "secondary-alt" },
  ],
  showColumns: true,
  column1Title: "Product",
  column1Links: [
    { label: "Gallery", href: "/gallery" },
    { label: "Compare", href: "/compare" },
    { label: "Pricing", href: "/pricing" },
    { label: "Free sections", href: "/gallery" },
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

function libraryForm() {
  return `<section class="g-library" id="library" aria-labelledby="library-title">
  <div class="g-library-inner">
    <h2 id="library-title">Get the full library</h2>
    <p>Billing is not open yet. Join the list and the full library opens for you when it is. Solo is also $192 a year.</p>
    <form name="library" method="POST" action="/pricing#library" data-netlify="true" netlify-honeypot="bot-field">
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
        <label class="g-sr" for="library-email">Email</label>
        <input id="library-email" type="email" name="email" required autocomplete="email" inputmode="email" placeholder="you@studio.com">
        <button type="submit">Join the list</button>
      </div>
    </form>
    <p class="g-status" id="library-status" role="status"></p>
  </div>
</section>
<script>
(function () {
  var form = document.querySelector("form[name=library]");
  if (!form) return;
  var status = document.getElementById("library-status");
  var button = form.querySelector("button");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    button.disabled = true;
    status.textContent = "Sending…";
    var body = new URLSearchParams(new FormData(form)).toString();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body
    }).then(function (res) {
      if (!res.ok) throw new Error(String(res.status));
      form.hidden = true;
      status.textContent = "You're on the list. We'll write when billing opens.";
    }).catch(function () {
      button.disabled = false;
      status.textContent = "That didn't send. Check the email and try again.";
    });
  });
})();
</script>`;
}

function home(specs, ctx) {
  const total = specs.length;
  const hero = section(specs, ctx, "hero-14", {
    showEyebrow: false,
    heading: "Paste the section. Keep your classes.",
    showDescription: true,
    description: "The same section in Webflow, Figma, and code, on the classes the site already has. Built for teams comparing Relume, Flowbase, BRIX, and other Webflow component kits. A button named button stays button.",
    showButtons: true,
    buttons: [
      { title: "Start free", href: "/gallery", variant: "primary" },
      { title: "Compare libraries", href: "/compare", variant: "secondary-alt" },
    ],
    showHint: true,
    hint: "Move the cursor. Every frame is a section from the gallery.",
    trail: SHOT_IDS.map((id) => ({ image: shot(specs, id, "phone") })),
  }, { theme: "dark", typeSize: "large" });
  const strip = section(specs, ctx, "gallery-05", {
    showEyebrow: false,
    heading: `Ten of the ${total}`,
    showDescription: true,
    description: "Rendered from the same specs you copy. Open a frame to see its props, variants, and every output.",
    showCaptions: true,
    showCounter: false,
    showWordmark: true,
    wordmark: "The same section.",
    frames: SHOT_IDS.map((id) => {
      const spec = specs.find((item) => item.id === id);
      return { title: spec?.name ?? id, meta: "", href: `/gallery#${id}`, image: shot(specs, id, "wide") };
    }),
  }, { theme: "dark", frameShape: "landscape" });
  const outputs = section(specs, ctx, "logos-02", {
    showLabel: true,
    label: "One spec. Six outputs.",
    logosTop: OUTPUTS.map(([file, name]) => ({ logo: { src: `./marks/${file}.svg`, alt: name } })),
    showSecondRow: false,
  });
  const classes = section(specs, ctx, "features-46", {
    showEyebrow: false,
    heading: "Same button. The class the site already has.",
    showDescription: true,
    description: "One button spec, pasted three ways. Click the card to see the next one.",
    cards: [
      { title: "Client-First", note: "button is-primary. The names a Finsweet site already uses.", image: art("client-first", "A Webflow selector with the classes button and is-primary") },
      { title: "BEM", note: "button button--primary. Block and modifier, the way a code team writes it.", image: art("bem", "A Webflow selector with the classes button and button--primary") },
      { title: "Class Sync", note: "The site already has a class named button, so the paste uses it. Webflow does not get to name it button 2.", image: art("class-sync", "A Webflow selector reusing the class button instead of creating button 2") },
    ],
  });
  const steps = section(specs, ctx, "process-03", {
    showEyebrow: false,
    heading: "Pick it. Paste it.",
    showDescription: true,
    description: "One section from the gallery, three places it can land.",
    showNumbers: false,
    showImages: true,
    steps: [
      { title: "Pick a section", text: `Every card in the gallery is visible. ${FREE_IDS.length} sections copy free, in Client-First, with the Webflow paste.`, image: shot(specs, "hero-57", "wide") },
      { title: "Paste in Webflow", text: "Copy to Webflow in a normal Chrome tab, then paste in the Designer. One footer snippet runs the motion.", image: shot(specs, "bento-14", "wide") },
      { title: "Or build it in Figma", text: "Copy for Figma, then paste into the Blokset plugin. It builds the component in the open file.", image: shot(specs, "pricing-09", "wide") },
      { title: "Or add it as code", text: "blokset add hero-05 --target react. Typed props, the same motion, the class names the project already uses.", image: shot(specs, "trust-03", "wide") },
    ],
  }, { theme: "dark" });
  const cta = section(specs, ctx, "cta-12", {
    showEyebrow: false,
    wordmark: "Blokset",
    showNote: true,
    note: `${FREE_IDS.length} sections copy free. ${total} in the gallery.`,
    showButtons: true,
    buttons: [{ title: "Start free", href: "/gallery", variant: "dark" }],
  });
  const footer = section(specs, ctx, "footer-04", { ...footerValues, showWordmark: false });
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
          description: `${FREE_IDS.length} sections copy free`,
        },
      },
    ],
    body: [hero, outputs, strip, classes, steps, cta, footer].join("\n"),
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
  const points = section(specs, ctx, "features-46", {
    showEyebrow: false,
    heading: "What changes when you paste",
    showDescription: true,
    description: "Three things Relume-style kits usually do not try to solve at once.",
    cards: [
      { title: "Class Sync", note: "If the site already has button, the paste uses button. Webflow does not invent button 2.", image: art("class-sync", "A Webflow selector reusing the class button instead of creating button 2") },
      { title: "Six outputs", note: "Webflow, Figma, React, Astro, HTML, and vanilla from one component spec.", image: art("client-first", "A Webflow selector with the classes button and is-primary") },
      { title: "Your class system", note: "Client-First, BEM, or Flowkit—pick the naming the project already runs.", image: art("bem", "A Webflow selector with the classes button and button--primary") },
    ],
  });
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
    body: [hero, compareMatrix(), points, faq, cta, footer].join("\n"),
  };
}

/** @param {{ specs: import("../types").ComponentSpec[], ctx: import("../types").BuildContext, page: "home" | "pricing" | "compare", dev?: boolean }} opts */
export function renderMarketing({ specs, ctx, page, dev = false }) {
  const view = page === "pricing" ? pricing(specs, ctx) : page === "compare" ? compare(specs, ctx) : home(specs, ctx);
  const ld = (view.jsonLd || []).map(jsonLd).join("\n");
  return `<!doctype html>
<html lang="en">
<head>
${siteHead({ title: view.title, description: view.description, path: view.path })}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="${FONTS}" rel="stylesheet">
<style>${CHROME}</style>
<link rel="stylesheet" href="./site.css">
${ld}
</head>
<body>
${chrome(view.current)}
<main id="content">
${view.body}
</main>
<script src="./vendor/gsap.min.js"></script>
<script src="./vendor/ScrollTrigger.min.js"></script>
<script src="./motion.global.js"></script>
${dev ? `<script>new EventSource("/__reload").onmessage = function () { location.reload(); };</script>` : ""}
</body>
</html>
`;
}
