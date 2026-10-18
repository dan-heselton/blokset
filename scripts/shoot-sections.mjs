// Screenshots catalog sections for the marketing home page. Writes a desktop frame
// (4:3) and a phone frame (4:5) per section to src/site/shots/ as JPEG.
//
//   node scripts/shoot-sections.mjs hero-46 bento-14 ...
//   node scripts/shoot-sections.mjs            (re-shoots the set the home page uses)
import { execFileSync } from "node:child_process";
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { ROOT, createContext, loadComponents, loadConfig, loadFrameworks } from "../src/core/config.js";
import { sharedCss } from "../src/core/css.js";
import { resolveComponent } from "../src/core/resolve.js";
import { componentCss, generateHtml } from "../src/generators/code.js";
import { SHOT_IDS } from "../src/site/shots.js";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const FONTS = "https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500&family=Geist:wght@400;500;600;700&family=Inter+Tight:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&family=Newsreader:ital,opsz,wght@0,6..72,500;1,6..72,560&display=swap";
const FRAMES = [
  { name: "wide", width: 1440, height: 1080, scale: 1, resize: 1200 },
  { name: "phone", width: 500, height: 625, scale: 2, resize: 720 },
];

const ids = process.argv.slice(2).length ? process.argv.slice(2) : SHOT_IDS;
const config = await loadConfig();
const frameworks = await loadFrameworks();
const ctx = createContext(config, frameworks[config.framework]);
const shared = sharedCss(ctx);
const specs = await loadComponents(ids);
const out = join(ROOT, "src/site/shots");
const work = join(tmpdir(), "blokset-shots");
mkdirSync(out, { recursive: true });
mkdirSync(work, { recursive: true });

for (const id of ids) {
  const spec = specs.find((item) => item.id === id);
  if (!spec) throw new Error(`No spec ${id}`);
  const resolved = resolveComponent(spec, ctx);
  const css = [shared["tokens.css"], shared["utilities.css"], shared["buttons.css"], componentCss(spec, resolved, ctx)].join("\n");
  const canvas = spec.tree?.style?.base?.["background-color"] || "#ffffff";
  const page = `<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="${FONTS}"><style>${css}
*,*::before,*::after{box-sizing:border-box}html,body{margin:0;background:${canvas}}
body{font-family:Inter,system-ui,sans-serif;-webkit-font-smoothing:antialiased}
[data-blok-enter],[data-blok-split],[data-blok-reveal]{opacity:1 !important;transform:none !important;clip-path:none !important}
[data-blok-trail-item],[data-blok-hover-media],[data-blok-lightbox-dialog]{display:none !important}</style></head>
<body>${generateHtml(spec, ctx, resolved)}
<script>const bg=getComputedStyle(document.body.firstElementChild).backgroundColor;if(bg&&bg!=="rgba(0, 0, 0, 0)")document.documentElement.style.background=document.body.style.background=bg;</script></body></html>`;
  const file = join(work, `${id}.html`);
  writeFileSync(file, page);
  for (const frame of FRAMES) {
    const png = join(work, `${id}-${frame.name}.png`);
    const args = [
      "--headless=new", "--disable-gpu", "--hide-scrollbars", "--virtual-time-budget=8000",
      `--force-device-scale-factor=${frame.scale}`, `--window-size=${frame.width},${frame.height}`,
      `--screenshot=${png}`, `file://${file}`,
    ];
    for (let attempt = 1; ; attempt += 1) {
      try {
        execFileSync(CHROME, args, { stdio: "ignore", timeout: 60000 });
        break;
      } catch (error) {
        if (attempt === 3) throw error;
      }
    }
    const jpg = join(out, `${id}-${frame.name}.jpg`);
    execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "74", "-Z", String(frame.resize), png, "--out", jpg], { stdio: "ignore" });
  }
  console.log(`✓ ${id}`);
}
rmSync(work, { recursive: true, force: true });
