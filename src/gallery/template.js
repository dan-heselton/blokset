// Gallery: a catalog you can search and filter, then open for the live preview and copy actions.
// Chrome classes are prefixed "g-" so they never collide with component classes.
import { readFileSync } from "node:fs";
import { camel } from "../core/resolve.js";
import { pascal } from "../generators/code.js";
import { animationPrompt } from "../generators/motion-prompt.js";
import { BUTTON_ROLES } from "./button-classes.js";
import { assignReleases } from "./releases.js";
import { FREE_IDS } from "../site/free.js";

const buttonRuntime = readFileSync(new URL("./button-classes.js", import.meta.url), "utf8").replace(/^export /gm, "");
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const jsonForScript = (v) => JSON.stringify(v).replace(/</g, "\\u003c");

/** Behaviours that actually differ between specs. Entrance is on every component, so it is not a filter. */
const MOTION_DEFS = [
  { id: "reveal", label: "Reveal", test: (spec) => !!spec.motion?.reveal },
  { id: "parallax", label: "Parallax", test: (spec) => spec.motion?.scroll?.preset === "parallax" },
  { id: "count-up", label: "Count-up", test: (_spec, has) => has("data-blok-count") },
  { id: "marquee", label: "Marquee", test: (_spec, has) => has("data-blok-marquee") },
  { id: "scroll-highlight", label: "Scroll highlight", test: (_spec, _has, is) => is("data-blok-split", "words") },
  { id: "word-rise", label: "Word rise", test: (_spec, _has, is) => is("data-blok-split", "rise") },
  { id: "char-stagger", label: "Character stagger", test: (_spec, _has, is) => is("data-blok-split", "chars") },
  { id: "line-reveal", label: "Line reveal", test: (_spec, _has, is) => is("data-blok-split", "lines") },
  { id: "text-fill", label: "Text fill", test: (_spec, _has, is) => is("data-blok-split", "fill") },
  { id: "text-scrub", label: "Text scrub", test: (_spec, _has, is) => is("data-blok-split", "scrub") },
  { id: "scramble", label: "Scramble", test: (_spec, has) => has("data-blok-scramble") },
  { id: "depth", label: "Depth", test: (_spec, has) => has("data-blok-depth") },
  { id: "pointer", label: "Pointer parallax", test: (_spec, has) => has("data-blok-pointer") },
  { id: "zoom", label: "Zoom", test: (_spec, _has, is) => is("data-blok-scroll", "zoom") },
  { id: "expand-media", label: "Expand media", test: (_spec, has) => has("data-blok-expand-media") },
  { id: "velocity", label: "Velocity", test: (_spec, has) => has("data-blok-velocity") },
  { id: "clip-reveal", label: "Clip reveal", test: (_spec, has) => has("data-blok-reveal") },
  { id: "image-trail", label: "Image trail", test: (_spec, has) => has("data-blok-trail") },
  { id: "stack", label: "Stack", test: (_spec, has) => has("data-blok-stack") },
  { id: "horizontal-scroll", label: "Horizontal scroll", test: (_spec, has) => has("data-blok-hscroll") },
  { id: "accordion", label: "Accordion", test: (_spec, has) => has("data-blok-accordion") },
  { id: "billing-toggle", label: "Billing toggle", test: (_spec, has) => has("data-blok-billing") },
  { id: "compare", label: "Compare", test: (_spec, has) => has("data-blok-compare") },
  { id: "progress", label: "Progress", test: (_spec, has) => has("data-blok-progress") },
  { id: "fit-text", label: "Fit text", test: (_spec, has) => has("data-blok-fit") },
  { id: "hover-reveal", label: "Hover reveal", test: (_spec, has) => has("data-blok-hover-reveal") },
  { id: "tabs", label: "Tabs", test: (_spec, has) => has("data-blok-tabs") },
  { id: "carousel", label: "Carousel", test: (_spec, has) => has("data-blok-carousel") },
  { id: "filter", label: "Filter", test: (_spec, has) => has("data-blok-filter") },
  { id: "spotlight", label: "Spotlight", test: (_spec, has) => has("data-blok-spotlight") },
  { id: "expand", label: "Expand", test: (_spec, has) => has("data-blok-expand") },
  { id: "lightbox", label: "Lightbox", test: (_spec, has) => has("data-blok-lightbox") },
  { id: "swap", label: "Hover swap", test: (_spec, has) => has("data-blok-swap") },
  { id: "meters", label: "Meters", test: (_spec, has) => has("data-blok-meters") },
  { id: "cycle", label: "Rotating line", test: (_spec, has) => has("data-blok-cycle") },
  { id: "filmstrip", label: "Filmstrip", test: (_spec, has) => has("data-blok-scrub") },
  { id: "menu", label: "Menu", test: (_spec, has) => has("data-blok-menu") },
  { id: "dropdown", label: "Dropdown", test: (_spec, has) => has("data-blok-drops") },
  { id: "peek", label: "Card peek", test: (_spec, has) => has("data-blok-peek") },
  { id: "slider", label: "Slider", test: (_spec, has) => has("data-blok-slider") },
  { id: "split-word", label: "Split word", test: (_spec, has) => has("data-blok-open") },
  { id: "scroll-steps", label: "Scroll steps", test: (_spec, has) => has("data-blok-steps") },
  { id: "columns", label: "Columns", test: (_spec, has) => has("data-blok-columns") },
  { id: "deck", label: "Deck", test: (_spec, has) => has("data-blok-deck") },
  { id: "lens", label: "Lens", test: (_spec, has) => has("data-blok-lens") },
  { id: "flip", label: "Flip", test: (_spec, has) => has("data-blok-flip") },
  { id: "read", label: "Read", test: (_spec, has) => has("data-blok-read") },
  { id: "tilt", label: "Tilt", test: (_spec, has) => has("data-blok-tilt") },
  { id: "grow", label: "Grow", test: (_spec, has) => has("data-blok-grow") },
];

const OUTPUTS = [
  { id: "webflow", label: "Webflow" },
  { id: "figma", label: "Figma" },
  { id: "react", label: "React" },
  { id: "astro", label: "Astro" },
  { id: "html", label: "HTML" },
  { id: "vanilla", label: "Vanilla JS" },
];

const CODE_TABS = [
  { id: "usage", label: "Usage" },
  { id: "react", label: "React" },
  { id: "astro", label: "Astro" },
  { id: "html", label: "HTML" },
  { id: "css", label: "CSS" },
  { id: "vanilla", label: "Vanilla JS" },
  { id: "props", label: "Props" },
];

function walk(node, fn) {
  if (!node || typeof node !== "object") return;
  fn(node);
  for (const child of node.children || []) walk(child, fn);
}

/** @param {import("../types").ComponentSpec} spec */
export function motionOf(spec) {
  const attrs = [];
  walk(spec.tree, (node) => node.attrs && attrs.push(node.attrs));
  const has = (name) => attrs.some((a) => Object.prototype.hasOwnProperty.call(a, name));
  const is = (name, value) => attrs.some((a) => a[name] === value);
  return MOTION_DEFS.filter((def) => def.test(spec, has, is)).map(({ id, label }) => ({ id, label }));
}

function optionLabel(option, opt) {
  if (opt?.label) return opt.label;
  return option.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function shownDefault(prop) {
  if (prop.type === "image") return prop.default?.alt || prop.default?.src || "";
  if (prop.type === "buttons") return prop.default.map((button) => button.title).join(", ");
  if (prop.type === "list") return `${prop.default.length} items`;
  if (prop.type === "boolean") return String(prop.default);
  return String(prop.default ?? "");
}

function propTypeName(prop) {
  if (prop.type === "list") return `list of ${Object.keys(prop.fields).join(", ")}`;
  return prop.type;
}

/** Plain-text table of content props and variant groups. The default option is in brackets. */
function propsTable(spec) {
  const rows = [["Prop", "Type", "Default", "Description"]];
  for (const [name, prop] of Object.entries(spec.props)) {
    rows.push([name, propTypeName(prop), shownDefault(prop), prop.description || ""]);
  }
  for (const [group, def] of Object.entries(spec.variants || {})) {
    rows.push([group, Object.keys(def.options).join(" | "), `[${def.default}]`, def.label || ""]);
  }
  const widths = rows[0].map((_, index) => Math.max(...rows.map((row) => row[index].length)));
  return rows.map((row) => row.map((cell, index) => cell.padEnd(widths[index])).join("  ")).join("\n");
}

const TYPE_ORDER = [
  "hero", "nav", "features", "bento", "stats", "pricing", "testimonial", "logos", "faq", "cta", "footer",
  "gallery", "posts", "process", "tabs", "timeline", "compare", "team", "contact", "careers", "services",
  "about", "statement", "work", "press", "banner", "carousel", "filter", "offgrid",
  "integrations", "cases", "onboard", "import", "templates", "dev", "trust", "changelog",
];

function categoryLabel(category) {
  if (category === "cta") return "CTA";
  if (category === "offgrid") return "Off-grid";
  if (category === "faq") return "FAQ";
  if (category === "dev") return "Developers";
  return category.charAt(0).toUpperCase() + category.slice(1);
}

function collectionLabel(id) {
  if (id === "saas") return "SaaS";
  return id.charAt(0).toUpperCase() + id.slice(1);
}

const COLLECTION_ORDER = ["marketing", "saas"];

function categoryRank(category) {
  const index = TYPE_ORDER.indexOf(category);
  return index === -1 ? TYPE_ORDER.length : index;
}

function sortWithinCollection(a, b) {
  const byType = categoryRank(a.category) - categoryRank(b.category);
  if (byType) return byType;
  return a.id.localeCompare(b.id);
}

/** Continuous grids by collection (Marketing, then SaaS). Category is a filter only. */
function groupCatalog(items) {
  const groups = new Map();
  for (const item of items) {
    const id = item.collection || "marketing";
    if (!groups.has(id)) groups.set(id, []);
    groups.get(id).push(item);
  }
  for (const list of groups.values()) list.sort(sortWithinCollection);
  const ordered = [];
  for (const id of COLLECTION_ORDER) if (groups.has(id)) ordered.push([id, groups.get(id)]);
  for (const [id, list] of groups) if (!COLLECTION_ORDER.includes(id)) ordered.push([id, list]);
  return ordered;
}

/** Specimen crops show the resting layout. Motion stays on the opened preview. */
function stripBlokAttrs(html) {
  return String(html).replace(/\sdata-blok-[a-z0-9-]+(?:=(?:"[^"]*"|'[^']*'))?/gi, "");
}

/** Fixed iframe viewport so 100svh and desktop media queries follow the card, not the monitor. */
const SPECIMEN_WIDTH = 1200;
const SPECIMEN_HEIGHT = 720;

/** Full specimen document. Written to dist/gallery/specimens/<id>.html (CSS is one level up). */
export function specimenDocument(html) {
  return `<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500&family=Geist:wght@400;500;600;700&family=Inter+Tight:wght@500;600;700&family=Newsreader:ital,opsz,wght@1,6..72,560&display=swap"><link rel="stylesheet" href="../preview.css"><style>*,*::before,*::after{box-sizing:border-box}html,body{margin:0;width:${SPECIMEN_WIDTH}px;height:${SPECIMEN_HEIGHT}px;overflow:hidden;background:#fff}</style></head><body>${stripBlokAttrs(html)}</body></html>`;
}

export function renderGallery({ specs, config, frameworks, previewCss, previews, outputs, variantPreviews, variantWebflow, footerCode, buttons, dev }) {
  const catalog = specs.map((spec) => {
    const motion = motionOf(spec);
    return {
      id: spec.id,
      name: spec.name,
      description: spec.description,
      category: spec.category,
      categoryLabel: categoryLabel(spec.category),
      collection: spec.collection || "marketing",
      motion,
    };
  });
  const categories = [];
  for (const item of catalog) {
    if (!categories.some((c) => c.id === item.category)) categories.push({ id: item.category, label: item.categoryLabel });
  }
  const motions = MOTION_DEFS.filter((def) => catalog.some((item) => item.motion.some((m) => m.id === def.id))).map(({ id, label }) => ({ id, label }));
  const collections = [
    { id: "marketing", label: "Marketing" },
    { id: "saas", label: "SaaS" },
  ];
  for (const item of catalog) {
    if (!collections.some((entry) => entry.id === item.collection)) collections.push({ id: item.collection, label: collectionLabel(item.collection) });
  }
  const releases = assignReleases(catalog.map((item) => item.id));
  const releaseOf = new Map();
  for (const release of releases) for (const id of release.ids) if (!releaseOf.has(id)) releaseOf.set(id, release.id);
  const outputsAvailable = OUTPUTS.filter((o) => config.targets.includes(o.id));
  const previewFramework = frameworks.find((f) => f.name === config.framework) || frameworks[0];
  // Component CSS is written to preview.css. Copy payloads ship as ./data/<id>.json.
  void previewCss;
  void outputs;
  void variantWebflow;

  const free = new Set(FREE_IDS);
  const chips = (group, items) =>
    [`<button type="button" class="g-chip" data-filter="${group}" data-value="" aria-pressed="true">All</button>`]
      .concat(items.map((item) => `<button type="button" class="g-chip" data-filter="${group}" data-value="${esc(item.id)}" aria-pressed="false">${esc(item.label)}</button>`))
      .join("");

  const card = (item) => `
      <article class="g-card" data-id="${esc(item.id)}" data-category="${esc(item.category)}" data-collection="${esc(item.collection)}" data-motion="${esc(item.motion.map((m) => m.id).join(" "))}"${releaseOf.has(item.id) ? ` data-release="${esc(releaseOf.get(item.id))}"` : ""} data-search="${esc([item.name, item.id, item.description, item.category, item.categoryLabel, item.collection, ...item.motion.flatMap((m) => [m.id, m.label])].join(" ").toLowerCase())}">
        <a class="g-card-open" href="#${esc(item.id)}" aria-label="Open ${esc(item.name)}">
          <div class="g-specimen" aria-hidden="true"><iframe class="g-specimen-frame" width="${SPECIMEN_WIDTH}" height="${SPECIMEN_HEIGHT}" tabindex="-1" scrolling="no" loading="lazy" title="" src="./specimens/${esc(item.id)}.html"></iframe></div>
          <div class="g-card-meta">
            <h2>${esc(item.name)}</h2>
            <span class="g-free${free.has(item.id) ? "" : " g-free-paid"}">${free.has(item.id) ? "Free" : "Full library"}</span>
            <span class="g-id">${esc(item.id)}</span>
            <p class="g-desc">${esc(item.description)}</p>
            ${item.motion.length ? `<ul class="g-tags">${item.motion.map((m) => `<li class="g-tag">${esc(m.label)}</li>`).join("")}</ul>` : ""}
            <span class="g-btn g-open">Open</span>
          </div>
        </a>
      </article>`;

  const groups = groupCatalog(catalog).map(([id, items]) => `
    <section class="g-group" data-collection="${esc(id)}">
      <h2 class="g-group-title">${esc(collectionLabel(id))}</h2>
      <div class="g-grid">${items.map(card).join("\n")}</div>
    </section>`).join("\n");

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Blokset</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500&family=Geist:wght@400;500;600;700&family=Inter+Tight:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&family=Newsreader:ital,opsz,wght@0,6..72,500;1,6..72,560&display=swap" rel="stylesheet">
<style>
  :root {
    color-scheme: light;
    --g-bg: #fbfaf7; --g-panel: #ffffff; --g-fg: #141414; --g-muted: #6b6963; --g-line: #e7e3da;
    --g-accent: #141414; --g-accent-fg: #ffffff; --g-code-bg: #141414; --g-code-fg: #ece9e1; --g-chip: #f1eee6;
    --g-thumb: #cfcabe;
  }
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) {
      color-scheme: dark;
      --g-bg: #0f0f0e; --g-panel: #171716; --g-fg: #f1eee6; --g-muted: #9c998f; --g-line: #2a2926;
      --g-accent: #f1eee6; --g-accent-fg: #141414; --g-code-bg: #0b0b0a; --g-code-fg: #e6e2d8; --g-chip: #222120;
      --g-thumb: #3a3934;
    }
  }
  :root[data-theme="dark"] {
    color-scheme: dark;
    --g-bg: #0f0f0e; --g-panel: #171716; --g-fg: #f1eee6; --g-muted: #9c998f; --g-line: #2a2926;
    --g-accent: #f1eee6; --g-accent-fg: #141414; --g-code-bg: #0b0b0a; --g-code-fg: #e6e2d8; --g-chip: #222120;
    --g-thumb: #3a3934;
  }
  *, *::before, *::after { box-sizing: border-box; }
  [hidden] { display: none !important; }
  html { scroll-behavior: smooth; scrollbar-color: var(--g-thumb) transparent; }
  body { margin: 0; background: var(--g-bg); color: var(--g-fg); font-family: Inter, system-ui, sans-serif; font-size: 14px; line-height: 1.5; -webkit-font-smoothing: antialiased; }
  ::selection { background: var(--g-fg); color: var(--g-bg); }
  img { max-width: 100%; }
  .g-skip { position: absolute; left: 12px; top: -40px; z-index: 300; background: var(--g-fg); color: var(--g-bg); padding: 8px 12px; border-radius: 8px; font-weight: 600; text-decoration: none; }
  .g-skip:focus { top: 12px; }
  .g-sticky { position: sticky; top: 0; z-index: 100; background: var(--g-bg); border-bottom: 1px solid var(--g-line); }
  .g-top { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 12px; padding: 8px 16px; }
  .g-logo { display: flex; align-items: center; gap: 10px; align-self: center; color: inherit; text-decoration: none; font-family: "Inter Tight", sans-serif; font-weight: 700; font-size: 17px; letter-spacing: -0.02em; }
  .g-logo:focus-visible { outline: 2px solid var(--g-fg); outline-offset: 3px; border-radius: 6px; }
  .g-logo-mark { width: 22px; height: 22px; border-radius: 6px; background: var(--g-fg); position: relative; }
  .g-logo-mark::after { content: ""; position: absolute; inset: 6px; border-radius: 2px; background: #ff5b2e; }
  .g-search, .g-field { display: flex; flex-direction: column; gap: 4px; min-width: 0; font-size: 12px; font-weight: 600; color: var(--g-muted); }
  .g-top .g-search, .g-top .g-field { flex-direction: row; align-items: center; gap: 6px; white-space: nowrap; }
  .g-search { flex: 1 1 220px; max-width: 420px; }
  .g-search input, .g-select {
    font: inherit; font-size: 13px; font-weight: 400; color: var(--g-fg); background: var(--g-panel);
    border: 1px solid var(--g-line); border-radius: 8px; padding: 5px 8px; caret-color: var(--g-fg); width: 100%;
  }
  .g-top .g-search input, .g-top .g-select { width: auto; flex: 1 1 120px; min-width: 0; }
  .g-select { padding-right: 28px; max-width: 100%; }
  .g-field { flex: 0 1 180px; }
  .g-top .g-field { flex: 0 1 auto; }
  .g-buttons { position: relative; align-self: center; }
  .g-buttons-panel {
    position: absolute; z-index: 40; top: calc(100% + 8px); right: 0; width: min(420px, calc(100vw - 32px));
    background: var(--g-panel); border: 1px solid var(--g-line); border-radius: 12px; padding: 12px;
    box-shadow: 0 12px 40px rgba(20, 20, 20, 0.12);
  }
  .g-buttons-row { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; margin-bottom: 8px; }
  .g-buttons-label { flex: 0 0 88px; font-size: 12px; font-weight: 600; color: var(--g-muted); }
  .g-pills { display: flex; flex-wrap: wrap; gap: 4px; }
  .g-pill { display: inline-flex; align-items: center; gap: 2px; background: var(--g-chip, var(--g-line)); border-radius: 999px; padding: 3px 4px 3px 8px; font-family: "JetBrains Mono", ui-monospace, monospace; font-size: 12px; font-weight: 500; }
  .g-pill button { border: 0; background: transparent; color: inherit; cursor: pointer; font: inherit; line-height: 1; padding: 0 4px; }
  .g-pill-input { flex: 1 1 96px; min-width: 96px; font: inherit; font-size: 13px; font-weight: 400; color: var(--g-fg); background: var(--g-panel); border: 1px solid var(--g-line); border-radius: 8px; padding: 6px 8px; }
  .g-buttons-styles { display: flex; align-items: center; gap: 8px; margin-top: 4px; font-size: 13px; font-weight: 600; color: var(--g-fg); }
  .g-buttons-note { margin: 6px 0 0; color: var(--g-muted); font-size: 12px; font-weight: 400; }
  .g-search input:focus-visible, .g-select:focus-visible, .g-chip:focus-visible, .g-btn:focus-visible, .g-tab:focus-visible, .g-back:focus-visible, .g-card-open:focus-visible {
    outline: 2px solid var(--g-fg); outline-offset: 2px;
  }
  .g-filters {
    display: flex; flex-direction: column; align-items: stretch;
    gap: 8px; padding: 8px 16px 10px;
  }
  #g-clear { align-self: flex-start; }
  .g-filter { display: flex; flex-wrap: nowrap; align-items: center; gap: 8px; min-width: 0; overflow-x: auto; scrollbar-width: none; }
  .g-filter.is-overflowing {
    -webkit-mask-image: linear-gradient(to right, #000 calc(100% - 28px), transparent);
    mask-image: linear-gradient(to right, #000 calc(100% - 28px), transparent);
  }
  .g-filter::-webkit-scrollbar { display: none; }
  .g-filter-label { flex: none; font-size: 11px; font-weight: 600; color: var(--g-muted); margin-right: 4px; }
  .g-filter-wrap { flex-wrap: wrap; overflow: visible; }
  .g-filter-tools { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 10px; }
  .g-menu { position: relative; }
  .g-menu-panel {
    position: absolute; z-index: 40; top: calc(100% + 8px); left: 0; width: min(560px, calc(100vw - 32px));
    background: var(--g-panel); border: 1px solid var(--g-line); border-radius: 12px; padding: 12px;
    box-shadow: 0 12px 40px rgba(20, 20, 20, 0.12);
  }
  .g-picked { display: flex; flex-wrap: wrap; gap: 6px; }
  .g-picked:empty { display: none; }
  .g-chip, .g-btn, .g-back {
    font: inherit; font-size: 13px; font-weight: 600; color: var(--g-fg); background: transparent;
    border: 1px solid var(--g-line); border-radius: 999px; padding: 6px 10px; cursor: pointer; text-decoration: none;
  }
  .g-chip:hover, .g-btn:hover, .g-back:hover { background: var(--g-chip); }
  .g-chip { flex: none; font-size: 12px; padding: 4px 10px; }
  .g-chip[aria-pressed="true"] { background: var(--g-fg); color: var(--g-bg); border-color: var(--g-fg); }
  .g-page-head { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 12px; }
  .g-page-head h1, .g-detail-title h1 { margin: 0; font-family: "Inter Tight", sans-serif; font-size: 22px; font-weight: 600; letter-spacing: -0.03em; line-height: 1.15; color: var(--g-fg); }
  .g-page-head h1 { font-size: 15px; }
  .g-count { margin: 0; font-size: 12px; font-variant-numeric: tabular-nums; color: var(--g-muted); font-weight: 500; }
  .g-scope-note { margin: 0; min-width: 0; color: var(--g-muted); font-size: 12px; font-weight: 400; line-height: 1.35; }
  .g-scope-note a { color: inherit; }
  .g-groups { display: flex; flex-direction: column; gap: 28px; padding: 8px 0 28px; }
  .g-group-title { margin: 0; padding: 0 16px; font-family: "Inter Tight", sans-serif; font-size: 13px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; color: var(--g-muted); }
  .g-grid { display: grid; grid-template-columns: 1fr; gap: 16px; padding: 12px 16px 0; }
  .g-card { min-width: 0; border: 1px solid var(--g-line); border-radius: 14px; background: var(--g-panel); overflow: hidden; }
  .g-card-open { display: flex; flex-direction: column; height: 100%; color: inherit; text-decoration: none; border-radius: 14px; }
  .g-card-open:hover .g-open, .g-card-open:focus-visible .g-open { background: var(--g-chip); }
  .g-specimen { position: relative; aspect-ratio: 1200 / 720; overflow: hidden; background: var(--g-thumb); border-bottom: 1px solid var(--g-line); container-type: inline-size; }
  .g-specimen-frame { position: absolute; top: 0; left: 0; width: 1200px; height: 720px; border: 0; background: #fff; transform-origin: top left; transform: scale(calc(100cqw / 1200px)); pointer-events: none; }
  .g-card-meta { display: flex; flex-direction: column; align-items: flex-start; gap: 6px; padding: 14px 16px 16px; }
  .g-card-meta h2 { margin: 0; font-family: "Inter Tight", sans-serif; font-size: 16px; font-weight: 600; letter-spacing: -0.02em; line-height: 1.25; }
  .g-free { font: 600 11px/1 "Inter Tight", sans-serif; letter-spacing: 0.01em; background: #ff5b2e; color: #141414; border-radius: 999px; padding: 4px 7px; }
  .g-free-paid { background: var(--g-chip); color: var(--g-fg); }
  .g-site-nav { display: flex; flex-wrap: wrap; align-items: center; gap: 4px 12px; margin-right: auto; }
  .g-site-nav a { color: inherit; text-decoration: none; font-size: 13px; font-weight: 500; }
  .g-site-nav a[aria-current="page"] { text-decoration: underline; text-underline-offset: 3px; }
  .g-site-nav a:hover { text-decoration: underline; text-underline-offset: 3px; }
  .g-site-nav a:focus-visible { outline: 2px solid var(--g-fg); outline-offset: 3px; border-radius: 4px; }
  .g-id { font: 500 12px/1 "JetBrains Mono", ui-monospace, monospace; color: var(--g-muted); }
  .g-desc { margin: 0; color: var(--g-muted); font-size: 13px; line-height: 1.45; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .g-tags { display: flex; flex-wrap: wrap; gap: 6px; margin: 2px 0 0; padding: 0; list-style: none; }
  .g-tag { font: 500 11px/1 "JetBrains Mono", ui-monospace, monospace; color: var(--g-fg); background: var(--g-chip); border-radius: 999px; padding: 4px 7px; }
  .g-open { margin-top: 8px; }
  .g-empty { padding: 8px 16px 40px; max-width: 42rem; }
  .g-empty p { margin: 0 0 12px; color: var(--g-muted); }
  .g-detail-top { display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 12px; padding: 12px 16px 14px; }
  .g-detail-title { display: flex; flex-wrap: wrap; align-items: baseline; gap: 8px 10px; min-width: 0; }
  .g-back { display: inline-flex; align-items: center; gap: 6px; border-radius: 8px; }
  .g-back svg { display: block; }
  .g-variants { display: flex; flex-wrap: wrap; gap: 8px 10px; flex: 1 1 240px; }
  .g-variants .g-field { flex: 1 1 120px; max-width: 180px; }
  .g-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
  .g-btn { border-radius: 8px; padding: 8px 12px; }
  .g-btn.is-primary { background: var(--g-accent); color: var(--g-accent-fg); border-color: var(--g-accent); }
  .g-btn.is-primary:hover { background: var(--g-accent); color: var(--g-accent-fg); opacity: 0.9; }
  .g-status { font-size: 12px; color: var(--g-muted); min-height: 1em; }
  .g-preview-note { margin: 0; padding: 0 16px 12px; color: var(--g-muted); font-size: 13px; }
  .g-code { display: none; border-top: 1px solid var(--g-line); border-bottom: 1px solid var(--g-line); background: var(--g-code-bg); }
  .g-code.is-open { display: block; }
  .g-tabs { display: flex; gap: 4px; padding: 10px 12px 0; overflow-x: auto; }
  .g-tab { font: 500 12px/1 "JetBrains Mono", ui-monospace, monospace; padding: 8px 10px; border: 0; border-radius: 6px 6px 0 0; background: transparent; color: #9c998f; cursor: pointer; white-space: nowrap; }
  .g-tab[aria-selected="true"] { background: #232220; color: var(--g-code-fg); }
  .g-code-body { position: relative; }
  .g-code pre { margin: 0; max-height: 420px; overflow: auto; padding: 16px; background: #232220; color: var(--g-code-fg); font: 12.5px/1.6 "JetBrains Mono", ui-monospace, monospace; tab-size: 2; scrollbar-color: #3a3934 transparent; }
  .g-copy-code { position: absolute; top: 10px; right: 14px; font: 600 12px/1 Inter, sans-serif; padding: 7px 10px; border-radius: 6px; border: 1px solid #3a3936; background: #141414; color: #ece9e1; cursor: pointer; }
  .g-copy-code:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }
  .g-preview { background: #fff; }
  .g-help { margin: 20px 16px 32px; padding: 18px 20px; border: 1px dashed var(--g-line); border-radius: 14px; color: var(--g-muted); font-size: 14px; line-height: 1.6; max-width: 68ch; }
  .g-help h2 { margin: 0 0 6px; color: var(--g-fg); font-size: 15px; font-weight: 600; }
  .g-help + .g-help { margin-top: 0; }
  .g-animate-text { margin: 12px 0 0; white-space: pre-wrap; font: inherit; color: var(--g-fg); }
  .g-toast { position: fixed; left: 50%; bottom: 20px; transform: translate(-50%, 12px); opacity: 0; transition: opacity .2s ease, transform .2s ease; z-index: 200;
             background: var(--g-fg); color: var(--g-bg); padding: 10px 14px; border-radius: 10px; font-size: 13px; font-weight: 500; pointer-events: none; }
  .g-toast.is-on { opacity: 1; transform: translate(-50%, 0); }
  @media (min-width: 800px) {
    .g-top, .g-filters, .g-detail-top { padding-left: 24px; padding-right: 24px; }
    .g-groups { padding-bottom: 36px; }
    .g-group-title { padding-left: 24px; padding-right: 24px; }
    .g-grid { grid-template-columns: 1fr 1fr; gap: 18px; padding: 14px 24px 0; }
    .g-preview-note, .g-help { margin-left: 24px; margin-right: 24px; }
    .g-preview-note { padding-left: 0; padding-right: 0; }
  }
  @media (min-width: 1200px) {
    .g-grid { grid-template-columns: 1fr 1fr 1fr; }
  }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    .g-toast { transition: none; }
  }
</style>
<link rel="stylesheet" href="./preview.css">
</head>
<body>
<a class="g-skip" href="#g-grid">Skip to components</a>
<div class="g-sticky">
<header class="g-top">
  <a class="g-logo" href="/" id="g-home"><span class="g-logo-mark" aria-hidden="true"></span>Blokset</a>
  <nav class="g-site-nav" aria-label="Site">
    <a href="/">Home</a>
    <a href="/gallery" aria-current="page">Gallery</a>
    <a href="/pricing">Pricing</a>
  </nav>
  <label class="g-search">Search
    <input id="g-search" type="search" name="q" placeholder="Name, id, or description" autocomplete="off" enterkeyhint="search">
  </label>
  <label class="g-field">Class system
    <select class="g-select" id="g-framework">
      ${frameworks.map((f) => `<option value="${esc(f.name)}"${f.name === config.framework ? " selected" : ""}>${esc(f.label)}</option>`).join("")}
    </select>
  </label>
  <label class="g-field">Output
    <select class="g-select" id="g-output">
      ${outputsAvailable.map((o) => `<option value="${esc(o.id)}"${o.id === "webflow" ? " selected" : ""}>${esc(o.label)}</option>`).join("")}
    </select>
  </label>
  <div class="g-buttons">
    <button type="button" class="g-btn" id="g-buttons-open" aria-expanded="false" aria-controls="g-buttons-panel">Buttons</button>
    <div class="g-buttons-panel" id="g-buttons-panel" hidden>
      ${BUTTON_ROLES.map((role) => `<div class="g-buttons-row" data-role="${esc(role.id)}">
        <span class="g-buttons-label">${esc(role.label)}</span>
        <div class="g-pills" data-pills></div>
        <input class="g-pill-input" aria-label="Add ${esc(role.label)} class" placeholder="Add class" autocomplete="off" spellcheck="false">
      </div>`).join("")}
      <label class="g-buttons-styles"><input type="checkbox" id="g-buttons-styles" checked> Blokset styles</label>
      <p class="g-buttons-note">Off when this project already styles these classes.</p>
    </div>
  </div>
</header>
<div class="g-filters" id="g-filters">
  <div class="g-page-head">
    <h1>Components</h1>
    <p class="g-count" id="g-count" aria-live="polite"></p>
    <p class="g-scope-note">Free sections copy today. The full library is <a href="/pricing#library">on the list</a>.</p>
  </div>
  <div class="g-filter" role="group" aria-labelledby="g-release-label">
    <span class="g-filter-label" id="g-release-label">Release</span>
    ${chips("release", [...releases].reverse().map(({ id, label }) => ({ id, label })))}
  </div>
  <div class="g-filter" role="group" aria-labelledby="g-collection-label">
    <span class="g-filter-label" id="g-collection-label">Collection</span>
    ${chips("collection", collections)}
  </div>
  <div class="g-filter-tools">
    <div class="g-menu">
      <button type="button" class="g-btn" id="g-category-open" aria-expanded="false" aria-controls="g-category-panel">Category</button>
      <div class="g-menu-panel" id="g-category-panel" hidden>
        <div class="g-filter g-filter-wrap" role="group" aria-label="Category">${chips("category", categories)}</div>
      </div>
    </div>
    <div class="g-picked" id="g-category-picked"></div>
    <div class="g-menu">
      <button type="button" class="g-btn" id="g-motion-open" aria-expanded="false" aria-controls="g-motion-panel">Motion</button>
      <div class="g-menu-panel" id="g-motion-panel" hidden>
        <div class="g-filter g-filter-wrap" role="group" aria-label="Motion">${chips("motion", motions)}</div>
      </div>
    </div>
    <div class="g-picked" id="g-motion-picked"></div>
  </div>
  <button type="button" class="g-btn" id="g-clear" hidden>Clear search and filters</button>
  <p class="g-scope-note">Class system and output change what you copy. They do not hide components, because every component ships to every output.</p>
</div>
<div class="g-detail-top" id="g-detail-top" hidden>
  <a class="g-back" href="./" id="g-back">
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 3 5 8l5 5"/></svg>
    All components
  </a>
  <div class="g-detail-title">
    <h1 id="g-detail-heading"></h1>
    <span class="g-id" id="g-detail-id"></span>
  </div>
  <div class="g-variants" id="g-variants"></div>
  <div class="g-actions">
    <span class="g-status" id="g-status" aria-live="polite"></span>
    <button type="button" class="g-btn" id="g-code-btn" aria-expanded="false" aria-controls="g-code">Code</button>
    <button type="button" class="g-btn is-primary" id="g-copy-primary">Copy to Webflow</button>
  </div>
</div>
</div>
<main>
  <div id="g-catalog">
    <div class="g-groups" id="g-groups">
      ${groups}
    </div>
    <div class="g-empty" id="g-empty" hidden>
      <p>No components match. Clear the search, or the release, collection, category, and motion filters.</p>
      <button type="button" class="g-btn" id="g-empty-clear">Clear search and filters</button>
    </div>
  </div>
  <div id="g-detail" hidden>
    <p class="g-preview-note" id="g-preview-note"></p>
    <div class="g-code" id="g-code">
      <div class="g-tabs" role="tablist" aria-label="Code output">
        ${CODE_TABS.map((t, i) => `<button type="button" class="g-tab" role="tab" id="g-tab-${t.id}" aria-selected="${i === 0}" aria-controls="g-code-view" data-tab="${t.id}">${t.label}</button>`).join("")}
      </div>
      <div class="g-code-body" id="g-code-view" role="tabpanel"><pre><code id="g-code-text"></code></pre><button type="button" class="g-copy-code" id="g-copy-code">Copy</button></div>
    </div>
    <div class="g-preview" id="g-detail-preview"></div>
    <div class="g-help">
      <h2>Motion in Webflow</h2>
      Components with motion share one runtime. Paste this once into Site settings → Custom code → Footer. Delete any older footer snippet first.
      <div style="margin-top:10px"><button type="button" class="g-btn" id="g-copy-footer">Copy footer code</button></div>
    </div>
    <div class="g-help" id="g-animate">
      <h2>Animation prompt</h2>
      For this component only. Paste it into Webflow or another builder to recreate the motion on a section that is already laid out.
      <pre class="g-animate-text" id="g-animate-text"></pre>
      <div style="margin-top:10px"><button type="button" class="g-btn" id="g-copy-animate">Copy animation prompt</button></div>
    </div>
  </div>
</main>
${catalog.map((item) => `<template id="tpl-${esc(item.id)}">${previews[item.id] || ""}</template>`).join("")}
${Object.entries(variantPreviews || {}).flatMap(([id, byKey]) => Object.entries(byKey).map(([key, html]) => `<template data-preview-for="${esc(id)}" data-selection="${esc(key)}">${html}</template>`)).join("")}
<div class="g-toast" id="g-toast" role="status"></div>
<script type="application/json" id="g-data">${jsonForScript({
    // Per-component copy payloads live in ./data/<id>.json (keeps this page under host file-size limits).
    outputs: {},
    webflow: {},
    footerCode,
    defaultFramework: config.framework,
    previewFramework: previewFramework.name,
    previewFrameworkLabel: previewFramework.label,
    outputLabels: Object.fromEntries(outputsAvailable.map((o) => [o.id, o.label])),
    components: Object.fromEntries(specs.map((spec) => [spec.id, {
      name: spec.name,
      pascal: pascal(spec.id),
      propsText: propsTable(spec),
      animationPrompt: animationPrompt(spec),
      variants: Object.entries(spec.variants || {}).map(([group, def]) => ({
        group,
        ident: camel(group),
        label: def.label || group,
        default: def.default,
        options: Object.entries(def.options).map(([value, opt]) => ({ value, label: optionLabel(value, opt) })),
      })),
    }])),
    buttons: buttons || {
      previewFramework: config.framework,
      roles: BUTTON_ROLES,
      chains: {},
      shipStyles: true,
      synced: {},
      preview: { base: "", variants: {} },
    },
  })}</script>
<script>
${buttonRuntime}
</script>
<script>
(function () {
  var data = JSON.parse(document.getElementById("g-data").textContent);
  data.outputs = data.outputs || {};
  data.webflow = data.webflow || {};
  var payloadCache = {};
  function ensurePayload(id) {
    if (!id) return Promise.resolve(null);
    if (data.outputs[id]) return Promise.resolve(data.outputs[id]);
    if (payloadCache[id]) return payloadCache[id];
    payloadCache[id] = fetch("./data/" + encodeURIComponent(id) + ".json")
      .then(function (res) {
        if (!res.ok) throw new Error("Failed to load " + id);
        return res.json();
      })
      .then(function (payload) {
        data.outputs[id] = payload.outputs || {};
        data.webflow[id] = payload.webflow || {};
        return payload;
      })
      .catch(function (err) {
        delete payloadCache[id];
        throw err;
      });
    return payloadCache[id];
  }
  var search = document.getElementById("g-search");
  var framework = document.getElementById("g-framework");
  var output = document.getElementById("g-output");
  var catalog = document.getElementById("g-catalog");
  var detail = document.getElementById("g-detail");
  var filters = document.getElementById("g-filters");
  var detailTop = document.getElementById("g-detail-top");
  var preview = document.getElementById("g-detail-preview");
  var codePanel = document.getElementById("g-code");
  var codeBtn = document.getElementById("g-code-btn");
  var codeText = document.getElementById("g-code-text");
  var countEl = document.getElementById("g-count");
  var empty = document.getElementById("g-empty");
  var clearBtn = document.getElementById("g-clear");
  var statusEl = document.getElementById("g-status");
  var noteEl = document.getElementById("g-preview-note");
  var copyPrimary = document.getElementById("g-copy-primary");
  var toastEl = document.getElementById("g-toast");
  var total = document.querySelectorAll(".g-card").length;
  var currentId = null;
  var activeTab = "usage";
  var toastTimer;
  var quote = String.fromCharCode(34);
  var newline = String.fromCharCode(10);
  var buttonsOpen = document.getElementById("g-buttons-open");
  var buttonsPanel = document.getElementById("g-buttons-panel");
  var buttonsStyles = document.getElementById("g-buttons-styles");
  var buttonState = {};
  try { buttonState = JSON.parse(sessionStorage.getItem("blokset-buttons") || "{}"); } catch (err) { buttonState = {}; }

  function cloneChains(chains) {
    var next = {};
    (data.buttons.roles || []).forEach(function (role) {
      next[role.id] = (chains && chains[role.id] ? chains[role.id] : []).slice();
    });
    return next;
  }
  function defaultsFor(fw) {
    return { chains: cloneChains(data.buttons.chains[fw]), shipStyles: data.buttons.shipStyles !== false };
  }
  function ensureButtons() {
    var fw = framework.value;
    if (!buttonState[fw]) buttonState[fw] = defaultsFor(fw);
    return buttonState[fw];
  }
  function buttonOptions() {
    var current = ensureButtons();
    return {
      from: data.buttons.chains[framework.value] || {},
      to: current.chains,
      shipStyles: current.shipStyles !== false,
      synced: (data.buttons.synced && data.buttons.synced[framework.value]) || [],
    };
  }
  function presentBundle(bundle) {
    if (!bundle || !data.buttons) return bundle;
    return applyButtonClasses(bundle, buttonOptions());
  }
  function presentWebflow(payload) {
    if (!payload || !data.buttons) return payload;
    return rewriteWebflow(payload, buttonOptions());
  }
  function applyPreviewStyles() {
    if (!data.buttons || !data.buttons.preview) return;
    var from = data.buttons.chains[data.buttons.previewFramework] || {};
    var to = ensureButtons().chains;
    rewritePreviewClasses(preview, from, to);
    var style = document.getElementById("g-button-preview");
    if (!style) {
      style = document.createElement("style");
      style.id = "g-button-preview";
      document.head.appendChild(style);
    }
    style.textContent = previewButtonCss(data.buttons.preview, to);
  }
  function renderButtonPanel() {
    var current = ensureButtons();
    (data.buttons.roles || []).forEach(function (role) {
      var row = document.querySelector('.g-buttons-row[data-role="' + role.id + '"]');
      if (!row) return;
      var host = row.querySelector("[data-pills]");
      host.replaceChildren();
      (current.chains[role.id] || []).forEach(function (name, index) {
        var pill = document.createElement("span");
        pill.className = "g-pill";
        pill.appendChild(document.createTextNode(name));
        var remove = document.createElement("button");
        remove.type = "button";
        remove.setAttribute("aria-label", "Remove " + name);
        remove.textContent = "×";
        remove.addEventListener("click", function () {
          if (current.chains[role.id].length < 2) return;
          current.chains[role.id].splice(index, 1);
          commitButtons();
        });
        pill.appendChild(remove);
        host.appendChild(pill);
      });
    });
    buttonsStyles.checked = current.shipStyles !== false;
  }
  function commitButtons() {
    sessionStorage.setItem("blokset-buttons", JSON.stringify(buttonState));
    renderButtonPanel();
    if (currentId) {
      mountPreview();
      if (codePanel.classList.contains("is-open")) renderCode();
    }
  }
  function addButtonClass(role, raw) {
    var name = String(raw || "").trim().replace(/[^A-Za-z0-9_-]/g, "");
    if (!/^[A-Za-z_][A-Za-z0-9_-]*$/.test(name)) return;
    ensureButtons().chains[role].push(name);
    commitButtons();
  }
  buttonsOpen.addEventListener("click", function () {
    var open = buttonsPanel.hidden;
    buttonsPanel.hidden = !open;
    buttonsOpen.setAttribute("aria-expanded", open ? "true" : "false");
  });
  document.addEventListener("click", function (e) {
    if (!buttonsPanel.hidden && !e.target.closest(".g-buttons")) {
      buttonsPanel.hidden = true;
      buttonsOpen.setAttribute("aria-expanded", "false");
    }
  });
  buttonsPanel.addEventListener("keydown", function (e) {
    var input = e.target.closest(".g-pill-input");
    if (!input) return;
    var role = input.closest(".g-buttons-row").dataset.role;
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addButtonClass(role, input.value.replace(/,/g, ""));
      input.value = "";
    } else if (e.key === "Backspace" && !input.value) {
      var chain = ensureButtons().chains[role];
      if (chain.length < 2) return;
      chain.pop();
      commitButtons();
    }
  });
  buttonsStyles.addEventListener("change", function () {
    ensureButtons().shipStyles = buttonsStyles.checked;
    sessionStorage.setItem("blokset-buttons", JSON.stringify(buttonState));
    if (codePanel.classList.contains("is-open")) renderCode();
  });

  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("is-on"); }, 2200);
  }
  function selected(group) {
    return Array.prototype.map.call(
      document.querySelectorAll('[data-filter="' + group + '"][aria-pressed="true"]'),
      function (btn) { return btn.dataset.value; }
    ).filter(Boolean);
  }
  function setPressed(group, values) {
    document.querySelectorAll('[data-filter="' + group + '"]').forEach(function (btn) {
      var on = btn.dataset.value === "" ? values.length === 0 : values.indexOf(btn.dataset.value) !== -1;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }
  function known(group, values) {
    return values.filter(function (value) {
      return document.querySelector('[data-filter="' + group + '"][data-value="' + CSS.escape(value) + '"]');
    });
  }
  function filtered() {
    return !!(search.value.trim() || selected("release").length || selected("collection").length || selected("category").length || selected("motion").length);
  }
  function apply() {
    var q = search.value.trim().toLowerCase();
    var release = selected("release");
    var collections = selected("collection");
    var cats = selected("category");
    var motions = selected("motion");
    var shown = 0;
    document.querySelectorAll(".g-card").forEach(function (card) {
      var ok = !q || card.dataset.search.indexOf(q) !== -1;
      if (ok && release.length && release.indexOf(card.dataset.release || "") === -1) ok = false;
      if (ok && collections.length && collections.indexOf(card.dataset.collection || "marketing") === -1) ok = false;
      if (ok && cats.length && cats.indexOf(card.dataset.category) === -1) ok = false;
      if (ok && motions.length) {
        var tags = (card.dataset.motion || "").split(" ").filter(Boolean);
        if (!motions.some(function (m) { return tags.indexOf(m) !== -1; })) ok = false;
      }
      card.hidden = !ok;
      if (ok) shown++;
    });
    document.querySelectorAll(".g-group").forEach(function (group) {
      group.hidden = !group.querySelector(".g-card:not([hidden])");
    });
    var isFiltered = filtered();
    countEl.textContent = !isFiltered
      ? total + (total === 1 ? " component" : " components")
      : (shown === 0 ? "No components" : shown + " of " + total);
    empty.hidden = shown !== 0;
    clearBtn.hidden = !isFiltered;
    renderPicked();
  }
  function renderPicked() {
    [["category", "g-category-picked"], ["motion", "g-motion-picked"]].forEach(function (pair) {
      var host = document.getElementById(pair[1]);
      host.replaceChildren();
      selected(pair[0]).forEach(function (value) {
        var source = document.querySelector('[data-filter="' + pair[0] + '"][data-value="' + CSS.escape(value) + '"]');
        var chip = document.createElement("button");
        chip.type = "button";
        chip.className = "g-chip";
        chip.textContent = (source ? source.textContent : value) + " ×";
        chip.setAttribute("aria-label", "Remove " + (source ? source.textContent : value));
        chip.addEventListener("click", function () {
          setPressed(pair[0], selected(pair[0]).filter(function (item) { return item !== value; }));
          apply();
          writeUrl(currentId, false);
        });
        host.appendChild(chip);
      });
    });
  }
  function urlFor(id) {
    var params = new URLSearchParams();
    if (search.value.trim()) params.set("q", search.value.trim());
    var release = selected("release");
    var collections = selected("collection");
    var cats = selected("category");
    var motions = selected("motion");
    if (release.length) params.set("release", release.join(","));
    if (collections.length) params.set("collection", collections.join(","));
    if (cats.length) params.set("category", cats.join(","));
    if (motions.length) params.set("motion", motions.join(","));
    if (framework.value !== data.defaultFramework) params.set("framework", framework.value);
    if (output.value !== "webflow") params.set("output", output.value);
    var qs = params.toString();
    return location.pathname + (qs ? "?" + qs : "") + (id ? "#" + id : "");
  }
  function writeUrl(id, push) {
    var next = urlFor(id);
    if (next === location.pathname + location.search + location.hash) return;
    history[push ? "pushState" : "replaceState"](null, "", next);
  }
  function teardownPreview() {
    if (window.ScrollTrigger) {
      window.ScrollTrigger.getAll().forEach(function (st) {
        if (st.trigger && preview.contains(st.trigger)) st.kill();
      });
    }
    if (window.gsap) window.gsap.killTweensOf(preview.querySelectorAll("*"));
    preview.replaceChildren();
  }
  function syncPrimary() {
    var label = data.outputLabels[output.value] || output.value;
    copyPrimary.textContent = output.value === "webflow" ? "Copy to Webflow" : output.value === "figma" ? "Copy for Figma" : "Copy " + label;
    if (output.value !== "webflow" && output.value !== "figma" && output.value !== "css" && activeTab !== "usage" && activeTab !== "props") activeTab = output.value;
    document.querySelectorAll(".g-tab").forEach(function (tab) {
      tab.setAttribute("aria-selected", tab.dataset.tab === activeTab ? "true" : "false");
    });
  }
  function syncNote() {
    var picked = framework.options[framework.selectedIndex].text;
    noteEl.textContent = picked === data.previewFrameworkLabel
      ? "Preview and copy use " + data.previewFrameworkLabel + "."
      : "Preview uses " + data.previewFrameworkLabel + ". Copy uses " + picked + ".";
  }
  function currentSelectionKey() {
    var spec = data.components[currentId];
    if (!spec || !spec.variants || !spec.variants.length) return "default";
    return spec.variants.map(function (group) {
      var select = document.querySelector("[data-variant=" + quote + group.group + quote + "]");
      return group.group + "=" + (select ? select.value : group.default);
    }).join("|");
  }
  function renderVariantSelects() {
    var host = document.getElementById("g-variants");
    host.replaceChildren();
    var spec = data.components[currentId];
    (spec.variants || []).forEach(function (group) {
      var label = document.createElement("label");
      label.className = "g-field";
      label.appendChild(document.createTextNode(group.label));
      var select = document.createElement("select");
      select.className = "g-select";
      select.setAttribute("data-variant", group.group);
      select.setAttribute("aria-label", group.label);
      group.options.forEach(function (option) {
        var el = document.createElement("option");
        el.value = option.value;
        el.textContent = option.label;
        if (option.value === group.default) el.selected = true;
        select.appendChild(el);
      });
      select.addEventListener("change", function () {
        mountPreview();
        if (codePanel.classList.contains("is-open")) renderCode();
      });
      label.appendChild(select);
      host.appendChild(label);
    });
  }
  function mountPreview() {
    var key = currentSelectionKey();
    var tpl = document.querySelector("[data-preview-for=" + quote + currentId + quote + "][data-selection=" + quote + key + quote + "]");
    if (!tpl) tpl = document.getElementById("tpl-" + currentId);
    teardownPreview();
    if (tpl) preview.appendChild(tpl.content.cloneNode(true));
    applyPreviewStyles();
    if (window.Blokset) window.Blokset.init(preview);
  }
  function usageText() {
    var spec = data.components[currentId];
    if (!spec) return "";
    var attrs = [];
    var fields = [];
    (spec.variants || []).forEach(function (group) {
      var select = document.querySelector("[data-variant=" + quote + group.group + quote + "]");
      var value = select ? select.value : group.default;
      if (value === group.default) return;
      attrs.push(group.ident + "=" + quote + value + quote);
      fields.push(group.ident + ": " + quote + value + quote);
    });
    var jsx = "<" + spec.pascal + (attrs.length ? " " + attrs.join(" ") : "") + " />";
    var mount = "mount(" + quote + "#" + currentId + quote + (fields.length ? ", { " + fields.join(", ") + " }" : "") + ");";
    return jsx + newline + newline + mount;
  }
  function codeForTab() {
    if (!currentId) return "";
    if (activeTab === "usage") return usageText();
    if (activeTab === "props") return (data.components[currentId] && data.components[currentId].propsText) || "";
    var bundle = presentBundle(currentBundle());
    return bundle ? (bundle[activeTab] || "") : "";
  }
  function renderCode() {
    if (!currentId) return;
    ensurePayload(currentId).then(function () {
      if (currentId) codeText.textContent = codeForTab();
    }).catch(function () {
      codeText.textContent = "Could not load code for this component.";
    });
  }
  function showDetail(id, push) {
    var spec = data.components[id];
    var tpl = document.getElementById("tpl-" + id);
    if (!spec || !tpl) return;
    currentId = id;
    catalog.hidden = true;
    filters.hidden = true;
    detail.hidden = false;
    detailTop.hidden = false;
    document.getElementById("g-animate-text").textContent = spec.animationPrompt || "";
    document.getElementById("g-detail-heading").textContent = spec.name;
    document.getElementById("g-detail-id").textContent = id;
    document.title = spec.name + " — Blokset";
    statusEl.textContent = "";
    codePanel.classList.remove("is-open");
    codeBtn.setAttribute("aria-expanded", "false");
    renderVariantSelects();
    mountPreview();
    syncPrimary();
    syncNote();
    writeUrl(id, push);
    window.scrollTo(0, 0);
    document.getElementById("g-back").focus();
    ensurePayload(id).catch(function () {
      toast("Could not load copy payloads for " + id);
    });
  }
  function showCatalog(push) {
    var returnId = currentId;
    teardownPreview();
    currentId = null;
    detail.hidden = true;
    detailTop.hidden = true;
    catalog.hidden = false;
    filters.hidden = false;
    document.title = "Blokset";
    writeUrl(null, push);
    var backTo = returnId && document.querySelector('.g-card[data-id="' + CSS.escape(returnId) + '"] .g-card-open');
    if (backTo) backTo.focus();
  }
  function clearFind() {
    search.value = "";
    setPressed("release", []);
    setPressed("collection", []);
    setPressed("category", []);
    setPressed("motion", []);
    apply();
    if (currentId) showCatalog(false);
    else writeUrl(null, false);
  }
  function readUrl() {
    var params = new URLSearchParams(location.search);
    search.value = params.get("q") || "";
    setPressed("release", known("release", (params.get("release") || "").split(",").filter(Boolean)));
    setPressed("collection", known("collection", (params.get("collection") || "").split(",").filter(Boolean)));
    setPressed("category", known("category", (params.get("category") || "").split(",").filter(Boolean)));
    setPressed("motion", known("motion", (params.get("motion") || "").split(",").filter(Boolean)));
    var fw = params.get("framework");
    if (fw && Array.prototype.some.call(framework.options, function (o) { return o.value === fw; })) framework.value = fw;
    var out = params.get("output");
    if (out && data.outputLabels[out]) output.value = out;
    syncPrimary();
    syncNote();
    apply();
    var id = location.hash.replace(/^#/, "");
    if (id && data.components[id]) {
      if (currentId !== id) showDetail(id, false);
    } else if (currentId) {
      showCatalog(false);
    }
  }

  document.getElementById("g-home").addEventListener("click", function (e) {
    e.preventDefault();
    var wasOpen = !!currentId;
    clearFind();
    if (wasOpen && !currentId) writeUrl(null, true);
  });
  search.addEventListener("input", function () {
    if (currentId) showCatalog(false);
    apply();
    writeUrl(null, false);
  });
  filters.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-filter]");
    if (!btn) return;
    var group = btn.dataset.filter;
    if (btn.dataset.value === "") setPressed(group, []);
    else {
      var values = selected(group);
      var index = values.indexOf(btn.dataset.value);
      if (index === -1) values.push(btn.dataset.value);
      else values.splice(index, 1);
      setPressed(group, values);
    }
    apply();
    writeUrl(currentId, false);
  });
  var menus = [
    { open: document.getElementById("g-category-open"), panel: document.getElementById("g-category-panel") },
    { open: document.getElementById("g-motion-open"), panel: document.getElementById("g-motion-panel") },
  ];
  function closeMenus(except) {
    menus.forEach(function (menu) {
      if (menu === except) return;
      menu.panel.hidden = true;
      menu.open.setAttribute("aria-expanded", "false");
    });
  }
  menus.forEach(function (menu) {
    menu.open.addEventListener("click", function () {
      var open = menu.panel.hidden;
      closeMenus(menu);
      menu.panel.hidden = !open;
      menu.open.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
  document.addEventListener("click", function (e) {
    if (e.target.closest(".g-menu")) return;
    closeMenus();
  });
  clearBtn.addEventListener("click", clearFind);
  document.getElementById("g-empty-clear").addEventListener("click", clearFind);
  catalog.addEventListener("click", function (e) {
    var link = e.target.closest("a.g-card-open");
    if (!link) return;
    e.preventDefault();
    showDetail(link.closest(".g-card").dataset.id, true);
  });
  document.getElementById("g-back").addEventListener("click", function (e) {
    e.preventDefault();
    showCatalog(true);
  });
  framework.addEventListener("change", function () {
    syncNote();
    syncPrimary();
    renderButtonPanel();
    if (currentId) mountPreview();
    if (codePanel.classList.contains("is-open")) renderCode();
    writeUrl(currentId, false);
    toast("Copy now uses " + framework.options[framework.selectedIndex].text);
  });
  output.addEventListener("change", function () {
    syncPrimary();
    if (codePanel.classList.contains("is-open")) renderCode();
    writeUrl(currentId, false);
  });
  codeBtn.addEventListener("click", function () {
    var open = !codePanel.classList.contains("is-open");
    codePanel.classList.toggle("is-open", open);
    codeBtn.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) renderCode();
  });
  document.querySelector(".g-tabs").addEventListener("click", function (e) {
    var tab = e.target.closest(".g-tab");
    if (!tab) return;
    activeTab = tab.dataset.tab;
    document.querySelectorAll(".g-tab").forEach(function (item) {
      item.setAttribute("aria-selected", item === tab ? "true" : "false");
    });
    renderCode();
  });
  function currentBundle() {
    return currentId && data.outputs[currentId] && data.outputs[currentId][framework.value];
  }
  function copyWith(mime, text) {
    var handler = function (e) {
      e.clipboardData.setData(mime, text);
      if (mime !== "text/plain") e.clipboardData.setData("text/plain", text);
      e.preventDefault();
    };
    document.addEventListener("copy", handler);
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (err) { ok = false; }
    document.removeEventListener("copy", handler);
    return ok;
  }
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(function () { return true; }, function () { return copyWith("text/plain", text); });
    }
    return Promise.resolve(copyWith("text/plain", text));
  }
  copyPrimary.addEventListener("click", function () {
    if (!currentId) return;
    var label = data.outputLabels[output.value] || output.value;
    if (output.value === "figma") {
      var spec = data.components[currentId];
      var selection = {};
      (spec.variants || []).forEach(function (group) {
        var select = document.querySelector("[data-variant=" + quote + group.group + quote + "]");
        selection[group.group] = select ? select.value : group.default;
      });
      var figmaPayload = JSON.stringify({ blokset: currentId, framework: framework.value, selection: selection }, null, 2);
      copyText(figmaPayload).then(function (ok) {
        statusEl.textContent = ok ? "Figma copied" : "";
        toast(ok ? "Copied for Figma. Paste it into the Blokset plugin." : "Copy was blocked");
      });
      return;
    }
    ensurePayload(currentId).then(function () {
      var bundle = currentBundle();
      if (!bundle) {
        toast("Copy payload missing for this component");
        return;
      }
      if (output.value === "webflow") {
        var key = currentSelectionKey();
        var table = data.webflow && data.webflow[currentId] && data.webflow[currentId][framework.value];
        var payload = presentWebflow((table && table[key]) || bundle.webflow);
        var ok = copyWith("application/json", payload);
        statusEl.textContent = ok ? label + " copied" : "";
        toast(ok ? "Copied (" + framework.options[framework.selectedIndex].text + "). Paste into the Webflow Designer." : "Copy was blocked. Open this page in a normal browser tab.");
        return;
      }
      copyText(presentBundle(bundle)[output.value] || "").then(function (copied) {
        statusEl.textContent = copied ? label + " copied" : "";
        toast(copied ? label + " copied" : "Copy was blocked");
      });
    }).catch(function () {
      toast("Could not load copy payloads");
    });
  });
  document.getElementById("g-copy-code").addEventListener("click", function () {
    if (!currentId) return;
    ensurePayload(currentId).then(function () {
      copyText(codeForTab()).then(function (ok) { toast(ok ? "Code copied" : "Copy was blocked"); });
    }).catch(function () {
      toast("Could not load code");
    });
  });
  document.getElementById("g-copy-footer").addEventListener("click", function () {
    copyText(data.footerCode).then(function (ok) { toast(ok ? "Footer code copied" : "Copy was blocked"); });
  });
  document.getElementById("g-copy-animate").addEventListener("click", function () {
    var spec = data.components[currentId];
    copyText(spec && spec.animationPrompt || "").then(function (ok) { toast(ok ? "Animation prompt copied" : "Copy was blocked"); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menus.some(function (menu) { return !menu.panel.hidden; })) {
      closeMenus();
      return;
    }
    if (e.key === "Escape" && !buttonsPanel.hidden) {
      buttonsPanel.hidden = true;
      buttonsOpen.setAttribute("aria-expanded", "false");
      buttonsOpen.focus();
      return;
    }
    if (e.key !== "Escape" || !currentId) return;
    if (codePanel.classList.contains("is-open")) {
      codePanel.classList.remove("is-open");
      codeBtn.setAttribute("aria-expanded", "false");
      codeBtn.focus();
      return;
    }
    showCatalog(true);
  });
  window.addEventListener("popstate", function () {
    readUrl();
    renderButtonPanel();
    if (currentId) mountPreview();
  });
  function markFilterOverflow() {
    var rows = filters.querySelectorAll(".g-filter:not(.g-filter-wrap)");
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      var more = row.scrollWidth - row.clientWidth - row.scrollLeft > 1;
      row.classList.toggle("is-overflowing", more);
    }
  }
  var filterRows = filters.querySelectorAll(".g-filter");
  for (var fi = 0; fi < filterRows.length; fi++) filterRows[fi].addEventListener("scroll", markFilterOverflow);
  window.addEventListener("resize", markFilterOverflow);
  if (document.fonts) document.fonts.ready.then(markFilterOverflow);
  window.addEventListener("load", markFilterOverflow);
  renderButtonPanel();
  readUrl();
  markFilterOverflow();
})();
</script>
<script src="./vendor/gsap.min.js"></script>
<script src="./vendor/ScrollTrigger.min.js"></script>
<script src="./motion.global.js"></script>
${dev ? `<script>new EventSource("/__reload").onmessage = function () { location.reload(); };</script>` : ""}
</body>
</html>
`;
}
