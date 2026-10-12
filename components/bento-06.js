// A tile that rotates words, beside photographs that wipe in.
import { inset0, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  "cycle-card": { "background-color": "panel", color: "fg" },
  kicker: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });

function photo(key, imageKey, prop) {
  return {
    tag: "div", key, attrs: { "data-blok-reveal": "clip" },
    style: { base: { position: "relative", overflow: "hidden", "min-height": "14rem", ...radius("token(radius-card)") }, lg: { "min-height": "16rem" } },
    children: [{ tag: "img", key: imageKey, bind: prop, style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } } }],
  };
}

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "bento-06",
  prefix: "bento06",
  name: "Bento / Cycle",
  category: "bento",
  description: "One tile cycles a short list of words. The photographs beside it wipe up into place. Reduced motion keeps the first word and shows the pictures immediately.",

  props: {
    ...headerProps({ eyebrow: "A rotating line", heading: "The word changes. The pictures stay.", description: "Four ways to finish the sentence. The photographs wipe in once." }),
    kicker: { type: "text", default: "Websites that feel" },
    word: { type: "text", default: "handmade" },
    words: {
      type: "list",
      fields: { word: "text" },
      default: [{ word: "handmade" }, { word: "quiet" }, { word: "specific" }, { word: "finished" }],
    },
    imageA: { type: "image", default: shot("1519710164239-da123dc03ef4", "A wooden chair in a pale room") },
    imageB: { type: "image", default: shot("1469474968028-56623f02e42e", "A sunlit ridge and a valley of pines") },
    imageC: { type: "image", default: shot("1501594907352-04cda38ebc29", "A low pier and still harbor water") },
    imageD: { type: "image", default: shot("1500382017468-9049fed747ef", "A gold field under a wide sky") },
  },

  variants: { theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }) },
  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" } },
        children: [
          header({ t, layout: "split" }),
          {
            tag: "div", key: "grid",
            style: {
              base: { display: "grid", "grid-template-columns": "minmax(0, 1fr)", "column-gap": "1rem", "row-gap": "1rem" },
              md: { "grid-template-columns": "repeat(2, minmax(0, 1fr))" },
              lg: { "grid-template-columns": "repeat(3, minmax(0, 1fr))" },
            },
            children: [
              {
                tag: "div", key: "cycle-card", attrs: { "data-blok-cycle": "" },
                style: {
                  base: { display: "flex", "flex-direction": "column", "justify-content": "flex-end", "min-height": "18rem", "grid-column-start": "span 1", "grid-column-end": "span 1", ...radius("token(radius-card)"), "padding-top": "1.5rem", "padding-right": "1.5rem", "padding-bottom": "1.5rem", "padding-left": "1.5rem", ...t("cycle-card") },
                  md: { "grid-column-start": "span 2", "grid-column-end": "span 2" },
                  lg: { "grid-column-start": "span 2", "grid-column-end": "span 2", "min-height": "22rem" },
                },
                children: [
                  { tag: "div", key: "kicker", bind: "kicker", style: { base: { "margin-bottom": "0.75rem", "font-size": "1.15rem", "line-height": "1.3", ...t("kicker") } } },
                  {
                    tag: "h3", key: "current", bind: "word", attrs: { "data-blok-cycle-current": "" },
                    style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "3rem", "line-height": "0.95", "font-weight": "600", "letter-spacing": "-0.04em" }, lg: { "font-size": "4.5rem" } },
                  },
                  {
                    tag: "div", key: "words", repeat: "words", attrs: { hidden: "" },
                    children: [{ tag: "div", key: "cycle-word", bind: "item.word", attrs: { "data-blok-cycle-word": "" } }],
                  },
                ],
              },
              photo("clip-a", "image-a", "imageA"),
              photo("clip-b", "image-b", "imageB"),
              photo("clip-c", "image-c", "imageC"),
              photo("clip-d", "image-d", "imageD"),
            ],
          },
        ],
      }),
    ],
  },
};
