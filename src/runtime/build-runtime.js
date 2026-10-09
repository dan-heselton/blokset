// Wraps motion-core.js into the ESM and global builds.
import { readFileSync } from "node:fs";

const core = readFileSync(new URL("./motion-core.js", import.meta.url), "utf8");
const GSAP_CDN = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5";

export const motionEsm = () => `// Blokset motion runtime (ESM). Requires: npm i gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

${core}
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

export const motionGlobal = () => `/* Blokset motion runtime (global). Load GSAP + ScrollTrigger first. Exposes window.Blokset. */
(function () {
${core}
  var blokset = createBloksetMotion(window.gsap, window.ScrollTrigger);
  window.Blokset = blokset;
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { blokset.init(); });
  else blokset.init();
})();
`;

/** Paste into Webflow → Site settings → Custom code → Footer (or page settings). */
export const webflowFooterCode = () => `<!-- Blokset motion: paste into Site settings → Custom code → Footer code -->
<script src="${GSAP_CDN}/gsap.min.js"></script>
<script src="${GSAP_CDN}/ScrollTrigger.min.js"></script>
<script>
${motionGlobal()}</script>
`;

export const gsapCdnTags = () =>
  `<script src="${GSAP_CDN}/gsap.min.js"></script>\n<script src="${GSAP_CDN}/ScrollTrigger.min.js"></script>`;
