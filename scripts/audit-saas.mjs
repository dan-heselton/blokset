// Flags structural misses in the Harborline SaaS ports: tables without table
// layout, accordion rows whose answer is missing, prompt handlers with no
// data-blok hook, and optional screenshot diffs against the reference PNGs.
//
//   node scripts/audit-saas.mjs
//   node scripts/audit-saas.mjs --visual
//   node scripts/audit-saas.mjs --visual --only=trust-02,trust-03
import { execFileSync } from "node:child_process";
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { createContext, loadComponents, loadConfig, loadFrameworks } from "../src/core/config.js";
import { resolveComponent } from "../src/core/resolve.js";
import { componentCss, generateHtml } from "../src/generators/code.js";
import { motionGlobal } from "../src/runtime/build-runtime.js";

const HANDOFF = "/Users/hireclixmac/Downloads/blokset-handoff";
const IDS = [
  "hero-57", "hero-58", "hero-59", "hero-60", "hero-61", "hero-62",
  "integrations-01", "integrations-02", "integrations-03",
  "features-63", "features-64", "features-65", "features-66", "compare-02", "features-67",
  "bento-21", "bento-22", "bento-23",
  "cases-01", "cases-02", "cases-03",
  "onboard-01", "onboard-02", "onboard-03",
  "import-01", "import-02", "import-03",
  "stats-11", "stats-12", "stats-13",
  "pricing-07", "pricing-08", "pricing-09", "pricing-10", "pricing-11", "pricing-12",
  "testimonial-12", "testimonial-13", "testimonial-14",
  "templates-01", "templates-02", "templates-03",
  "dev-01", "dev-02", "dev-03",
  "trust-01", "trust-02", "trust-03",
  "changelog-01", "changelog-02", "changelog-03",
  "faq-07", "faq-08", "faq-09",
  "cta-15", "cta-16", "cta-17",
  "footer-05", "footer-06", "footer-07",
];
const ACCORDION = new Set(["trust-02", "faq-07", "faq-08", "pricing-10", "changelog-01", "footer-07"]);
const HOOKS = {
  next: ["data-blok-slider", "data-blok-panel-next", "data-blok-carousel"],
  prev: ["data-blok-slider", "data-blok-panel-prev", "data-blok-carousel"],
  toggle: ["data-blok-switch", "data-blok-acc-trigger", "data-blok-choice", "data-blok-billing"],
  pick: ["data-blok-panel-go", "data-blok-choice", "data-blok-filter", "data-blok-slider-dot"],
  dec: ["data-blok-step"],
  inc: ["data-blok-step"],
  flip: ["data-blok-flip"],
  flipAll: ["data-blok-flip"],
  setSeats: ["data-blok-range"],
  setJobs: ["data-blok-range"],
  setMins: ["data-blok-range"],
  setRate: ["data-blok-range"],
  setPos: ["data-blok-range", "data-blok-compare"],
  showAfter: ["data-blok-compare-set"],
  showBefore: ["data-blok-compare-set"],
  reset: ["data-blok-reset"],
  copy: ["data-blok-copy"],
};
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

function walk(node, visit) {
  if (!node || typeof node !== "object") return;
  visit(node);
  for (const child of node.children || []) walk(child, visit);
}

function attrsOf(spec) {
  const found = new Set();
  walk(spec.tree, (node) => {
    for (const key of Object.keys(node.attrs || {})) if (key.startsWith("data-blok-")) found.add(key);
    const display = node.style?.base?.display;
    if (display) found.add(`display:${display}`);
  });
  return found;
}

function handlersOf(markdown) {
  const match = markdown.match(/handlers:\s*`([^`]+)`/);
  if (!match) return [];
  return match[1].split(",").map((item) => item.trim()).filter(Boolean);
}

const args = process.argv.slice(2);
const visual = args.includes("--visual");
const only = (args.find((arg) => arg.startsWith("--only=")) || "").slice("--only=".length).split(",").filter(Boolean);
const sources = readdirSync(join(HANDOFF, "source")).filter((name) => name.endsWith(".dc.html")).sort();
const prompts = readdirSync(join(HANDOFF, "prompts")).filter((name) => name.endsWith(".md")).sort();
const config = await loadConfig();
const frameworks = await loadFrameworks();
const framework = frameworks["client-first"];
if (!framework) throw new Error(`No client-first framework. Loaded: ${Object.keys(frameworks).join(", ") || "(none)"}`);
const ctx = createContext(config, framework);
const specs = new Map((await loadComponents(IDS)).map((spec) => [spec.id, spec]));
const errors = [];
const notes = [];

for (let i = 0; i < IDS.length; i += 1) {
  const id = IDS[i];
  if (only.length && !only.includes(id)) continue;
  const spec = specs.get(id);
  const source = readFileSync(join(HANDOFF, "source", sources[i]), "utf8");
  const prompt = readFileSync(join(HANDOFF, "prompts", prompts[i]), "utf8");
  if (!spec) {
    errors.push(`${id}: spec missing`);
    continue;
  }
  const attrs = attrsOf(spec);
  if (source.includes("<table") && !attrs.has("display:table")) errors.push(`${id}: source has a table but the spec has no display:table`);
  if (ACCORDION.has(id)) {
    const triggers = (JSON.stringify(spec.tree).match(/data-blok-acc-trigger/g) || []).length;
    const panels = (JSON.stringify(spec.tree).match(/data-blok-acc-panel/g) || []).length;
    if (!attrs.has("data-blok-accordion")) errors.push(`${id}: accordion root missing`);
    if (!triggers || triggers !== panels) errors.push(`${id}: accordion triggers ${triggers}, panels ${panels}`);
  }
  for (const handler of handlersOf(prompt)) {
    const name = handler.split(".").pop();
    const hooks = HOOKS[name] || HOOKS[handler];
    if (!hooks) {
      notes.push(`${id}: handler ${handler} has no mapped data-blok hook`);
      continue;
    }
    if (!hooks.some((hook) => attrs.has(hook))) notes.push(`${id}: handler ${handler} has no ${hooks.join(" / ")} hook`);
  }
}

if (visual) {
  const out = join(tmpdir(), "saas-audit");
  mkdirSync(out, { recursive: true });
  for (const id of IDS) {
    if (only.length && !only.includes(id)) continue;
    const spec = specs.get(id);
    if (!spec) continue;
    const resolved = resolveComponent(spec, ctx);
    const css = `${ctx.tokens.rootCss()}\n${componentCss(spec, resolved, ctx)}\n[data-blok-enter]{opacity:1 !important;transform:none !important}`;
    const html = generateHtml(spec, ctx, resolved);
    const canvas = spec.tree?.style?.base?.["background-color"] || "#FFFFFF";
    const page = `<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap"><style>html,body{margin:0;background:${canvas}}*,*::before,*::after{box-sizing:border-box}${css}</style></head><body>${html}<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script><script>${motionGlobal(true)}</script></body></html>`;
    const file = join(out, `${id}.html`);
    writeFileSync(file, page);
    for (const width of [1440, 390]) {
      const shot = join(out, `${id}-${width}.png`);
      const refName = sources[IDS.indexOf(id)].replace(/\.dc\.html$/, `-${width}.png`);
      const ref = join(HANDOFF, "reference", refName);
      try {
        execFileSync(CHROME, ["--headless=new", "--disable-gpu", "--hide-scrollbars", `--window-size=${width},900`, `--screenshot=${shot}`, `file://${file}`], { timeout: 30000 });
        const diff = pixelDiff(shot, ref, width);
        const line = `${id} @${width}: ${diff.percent}% pixels differ`;
        if (diff.percent > 18) errors.push(line);
        else notes.push(line);
      } catch (error) {
        notes.push(`${id} @${width}: screenshot skipped (${error.message.split("\n")[0]})`);
      }
    }
  }
}

function pixelDiff(shot, ref, width) {
  const dir = dirname(shot);
  const a = join(dir, "a.bmp");
  const b = join(dir, "b.bmp");
  execFileSync("sips", ["-s", "format", "bmp", "-z", "800", String(width), shot, "--out", a], { stdio: "ignore" });
  execFileSync("sips", ["-s", "format", "bmp", "-z", "800", String(width), ref, "--out", b], { stdio: "ignore" });
  const left = readFileSync(a);
  const right = readFileSync(b);
  const start = 54;
  const length = Math.min(left.length, right.length) - start;
  let hot = 0;
  let samples = 0;
  for (let i = start; i + 2 < start + length; i += 12) {
    const delta = Math.abs(left[i] - right[i]) + Math.abs(left[i + 1] - right[i + 1]) + Math.abs(left[i + 2] - right[i + 2]);
    if (delta > 80) hot += 1;
    samples += 1;
  }
  return { percent: samples ? Math.round((hot / samples) * 100) : 0 };
}

console.log(`SaaS audit: ${errors.length} error${errors.length === 1 ? "" : "s"}, ${notes.length} note${notes.length === 1 ? "" : "s"}`);
for (const line of errors) console.log(`  error  ${line}`);
for (const line of notes) console.log(`  note   ${line}`);
if (errors.length) process.exit(1);
