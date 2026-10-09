// A hero line that rotates through a list of phrases. Reduced motion keeps the first phrase.
import { themeVariant, themeBase, mono } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  eyebrow: { color: "muted" },
  heading: { color: "fg" },
  description: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-18",
  prefix: "hero18",
  name: "Hero / Rotating Line",
  category: "hero",
  description: "One headline that cycles through a short list of phrases. Reduced motion keeps the first line.",

  props: {
    showEyebrow: { type: "boolean", default: true },
    eyebrow: { type: "text", default: "Studio — Est. 2014" },
    word: { type: "text", default: "Websites that feel handmade." },
    showDescription: { type: "boolean", default: true },
    description: { type: "text", default: "Strategy, identity, and Webflow builds for small businesses and community organizations." },
    showButtons: { type: "boolean", default: true },
    buttons: {
      type: "buttons",
      max: 2,
      default: [
        { title: "See the work", href: "#", variant: "dark" },
        { title: "Start a project", href: "#", variant: "secondary" },
      ],
    },
    words: {
      type: "list",
      fields: { word: "text" },
      default: [
        { word: "Websites that feel handmade." },
        { word: "Websites that feel sharp." },
        { word: "Websites that feel calm." },
        { word: "Websites that feel alive." },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] } },

  tree: {
    role: "section",
    style: { base: { ...t("section") } },
    children: [
      shell({
        tag: "div", key: "component", attrs: { "data-blok-cycle": "" },
        style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "1.5rem", "max-width": "56rem" } },
        children: [
          { tag: "div", key: "eyebrow", bind: "eyebrow", if: "showEyebrow", style: { base: { ...mono(), ...t("eyebrow") } } },
          {
            tag: "h1", key: "heading", bind: "word", attrs: { "data-blok-cycle-current": "" },
            style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "3rem", "line-height": "0.98", "font-weight": "600", "letter-spacing": "-0.04em", ...t("heading") }, md: { "font-size": "4.5rem" }, lg: { "font-size": "6rem" } },
          },
          {
            tag: "div", key: "words", repeat: "words", attrs: { hidden: "" },
            children: [
              { tag: "div", key: "cycle-word", bind: "item.word", attrs: { "data-blok-cycle-word": "" } },
            ],
          },
          { tag: "p", key: "description", bind: "description", if: "showDescription", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "32rem", "font-size": "1.125rem", "line-height": "1.6", ...t("description") } } },
          { tag: "div", key: "actions", repeat: "buttons", if: "showButtons" },
        ],
      }, { size: "large" }),
    ],
  },
};
