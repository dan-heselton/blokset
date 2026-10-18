// Wraps motion-core.js into the ESM and global builds.
import { readFileSync } from "node:fs";

const core = readFileSync(new URL("./motion-core.js", import.meta.url), "utf8");
const GSAP_CDN = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5";

// The Webflow footer limit cannot hold every behaviour. Gallery, React, and Astro keep
// the full runtime; the footer build strips saas:* and paste-omit:* blocks.
function coreSource(saas = true) {
  if (saas) return core;
  return core
    .replace(/\/\* saas:start \*\/[\s\S]*?\/\* saas:end \*\//g, "")
    .replace(/\/\* paste-omit:start \*\/[\s\S]*?\/\* paste-omit:end \*\//g, "");
}

export const motionEsm = () => `// Blokset motion runtime (ESM). Requires: npm i gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

${coreSource()}
const blokset = createBloksetMotion(gsap, ScrollTrigger);

/** Initialise behaviours inside \`root\` (defaults to the whole document). Safe to call repeatedly. */
export function initMotion(root) {
  blokset.init(root);
}

if (typeof window !== "undefined") {
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => blokset.init());
  else blokset.init();
}
`;

export const motionDts = () => `export declare function initMotion(root?: Element | Document): void;\n`;

export const motionGlobal = (saas = true) => `/* Blokset motion runtime (global). Load GSAP + ScrollTrigger first. Exposes window.Blokset. */
(function () {
${coreSource(saas)}
  var blokset = createBloksetMotion(window.gsap, window.ScrollTrigger);
  window.Blokset = blokset;
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { blokset.init(); });
  else blokset.init();
})();
`;

/** Webflow Site settings → Custom code rejects anything over this many characters. */
export const WEBFLOW_CUSTOM_CODE_LIMIT = 50000;

// Comments and spare whitespace, not the behaviour. Strings and template literals stay intact.
function compactJs(source) {
  let out = "";
  let i = 0;
  const quote = (q) => {
    out += q;
    i += 1;
    while (i < source.length) {
      const ch = source[i];
      out += ch;
      i += 1;
      if (ch === "\\") {
        if (i < source.length) { out += source[i]; i += 1; }
        continue;
      }
      if (ch === q) return;
    }
  };
  while (i < source.length) {
    const ch = source[i];
    const next = source[i + 1];
    if (ch === "/" && next === "/") {
      i += 2;
      while (i < source.length && source[i] !== "\n") i += 1;
      continue;
    }
    if (ch === "/" && next === "*") {
      i += 2;
      while (i < source.length && !(source[i] === "*" && source[i + 1] === "/")) i += 1;
      i += 2;
      continue;
    }
    if (ch === "'" || ch === '"' || ch === "`") { quote(ch); continue; }
    out += ch;
    i += 1;
  }
  const lines = out.split("\n").map((line) => line.replace(/[ \t]+/g, " ").trim()).filter(Boolean);
  let packed = "";
  for (const line of lines) {
    if (!packed) packed = line;
    else packed += /[;{},]$/.test(packed) ? line : "\n" + line;
  }
  // Drop spaces beside punctuation, but leave string and template contents alone.
  let tight = "";
  let j = 0;
  const copyString = (q) => {
    tight += q;
    j += 1;
    while (j < packed.length) {
      const ch = packed[j];
      tight += ch;
      j += 1;
      if (ch === "\\") {
        if (j < packed.length) { tight += packed[j]; j += 1; }
        continue;
      }
      if (ch === q) return;
    }
  };
  while (j < packed.length) {
    const ch = packed[j];
    if (ch === "'" || ch === '"' || ch === "`") { copyString(ch); continue; }
    let code = "";
    while (j < packed.length && packed[j] !== "'" && packed[j] !== '"' && packed[j] !== "`") {
      code += packed[j];
      j += 1;
    }
    tight += code.replace(/[ \t]*([{}(),;:=])[ \t]*/g, "$1");
  }
  return tight;
}

/** Paste into Webflow → Site settings → Custom code → Footer (or page settings). */
export const webflowFooterCode = () => {
  const html = `<!-- Blokset motion: paste into Site settings → Custom code → Footer code. One snippet for every component. -->
<script src="${GSAP_CDN}/gsap.min.js"></script>
<script src="${GSAP_CDN}/ScrollTrigger.min.js"></script>
<script>
${compactJs(motionGlobal(false))}
</script>
`;
  if (html.length > WEBFLOW_CUSTOM_CODE_LIMIT) {
    throw new Error(`Webflow footer code is ${html.length} characters. Site settings custom code allows ${WEBFLOW_CUSTOM_CODE_LIMIT}.`);
  }
  return html;
};

export const gsapCdnTags = () =>
  `<script src="${GSAP_CDN}/gsap.min.js"></script>\n<script src="${GSAP_CDN}/ScrollTrigger.min.js"></script>`;
