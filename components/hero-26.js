// One oversized word, set twice. Scrolling pulls the halves apart and a photograph fills the gap.
import { themeBase, themeVariant } from "./_lib/themes.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  "half-left": { "background-color": "bg" },
  "half-right": { "background-color": "bg" },
  "word-left": { color: "fg" },
  "word-right": { color: "fg" },
};
const t = (key) => themeBase("light", THEME[key]);

const word = {
  "margin-top": "0", "margin-bottom": "0", width: "auto",
  "font-family": "token(font-display)", "font-weight": "600", "line-height": "0.85", "letter-spacing": "-0.05em",
};

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-26",
  prefix: "hero26",
  name: "Hero / Split word",
  category: "hero",
  description: "One oversized word, set twice so it reads as a single line. Scrolling pulls the halves apart and a photograph fills the gap. On a phone the word sits above the photo.",

  props: {
    heading: { type: "text", default: "Making" },
    image: { type: "image", priority: true, default: { src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=2000&q=80", alt: "A sunlit room with a wooden chair and a pale wall" } },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  tree: {
    role: "section",
    attrs: { "data-blok-open": "" },
    style: {
      base: { position: "relative", overflow: "hidden", "min-height": "0px", ...t("section") },
      lg: { "min-height": "100svh" },
    },
    children: [{
      tag: "div", key: "stage", attrs: { "data-blok-open-stage": "" },
      style: {
        base: { position: "relative", display: "flex", "flex-direction": "column", overflow: "hidden", width: "100%", "min-height": "0px" },
        lg: { display: "block", "min-height": "100svh" },
      },
      children: [
        half("left", false),
        half("right", true),
        {
          tag: "div", key: "media",
          style: {
            base: { position: "relative", top: "auto", right: "auto", bottom: "auto", left: "auto", "z-index": "1", width: "100%", height: "auto", overflow: "hidden", "aspect-ratio": "4 / 5" },
            lg: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", height: "100%", "aspect-ratio": "auto" },
          },
          children: [{
            tag: "img", key: "photo", bind: "image",
            style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } },
          }],
        },
      ],
    }],
  },
};

function half(side, hidden) {
  const key = side === "left" ? "half-left" : "half-right";
  const wordKey = side === "left" ? "word-left" : "word-right";
  return {
    tag: "div", key, attrs: { "data-blok-open-half": "" },
    style: {
      base: {
        position: "relative", top: "auto", right: "auto", bottom: "auto", left: "auto",
        "z-index": "2", display: hidden ? "none" : "block", overflow: "visible", width: "100%", height: "auto",
        "padding-top": hidden ? "0rem" : "3rem", "padding-right": hidden ? "0rem" : "1.25rem",
        "padding-bottom": hidden ? "0rem" : "1.25rem", "padding-left": hidden ? "0rem" : "1.25rem",
        ...t(key),
      },
      lg: {
        position: "absolute", top: "0", right: side === "right" ? "0" : "auto", bottom: "0", left: side === "left" ? "0" : "auto",
        display: "block", overflow: "hidden", width: "50%",
        "padding-top": "0rem", "padding-right": "0rem", "padding-bottom": "0rem", "padding-left": "0rem",
      },
    },
    children: [{
      tag: side === "left" ? "h1" : "div",
      key: wordKey,
      bind: "heading",
      decorative: hidden,
      attrs: { "data-blok-open-word": "" },
      style: {
        base: {
          ...word, ...t(wordKey),
          position: "relative", top: "auto", right: "auto", left: "auto",
          "font-size": "3.5rem", "white-space": "normal", transform: "none",
        },
        lg: {
          position: "absolute", top: "50%", left: side === "left" ? "0" : "auto", right: side === "right" ? "0" : "auto",
          "font-size": "18vw", "white-space": "nowrap", transform: "translateY(-50%)",
        },
      },
    }],
  };
}
