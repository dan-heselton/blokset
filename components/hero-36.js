// A photograph with a tab cut into the bottom edge, then a statement that fills as you scroll.
import { themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  tab: { "background-color": "bg" },
  "phrase-1": { color: "fg" },
  "phrase-2": { color: "glyph" },
  "phrase-3": { color: "fg" },
  "phrase-4": { color: "glyph" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=2000&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-36",
  prefix: "hero36",
  name: "Hero / Tabbed photo",
  category: "hero",
  description: "A full-bleed photograph with a rounded bottom and a center tab, then a large statement whose phrases fill in as you scroll. Accent phrases alternate with the body color.",

  props: {
    heading: { type: "text", default: "Moving work, across the water." },
    showDescription: { type: "boolean", default: true, description: "Show the line on the photograph." },
    description: { type: "text", default: "Files, photographs, and the launch. They leave on the day we wrote down." },
    showButtons: { type: "boolean", default: true, description: "Show the action on the photograph." },
    buttons: {
      type: "buttons",
      max: 1,
      default: [{ title: "Book a start", href: "#", variant: "primary" }],
    },
    showStatement: { type: "boolean", default: true, description: "Show the statement under the photograph." },
    phrase1: { type: "text", default: "Named work" },
    phrase2: { type: "text", default: "for clients" },
    phrase3: { type: "text", default: "we can name," },
    phrase4: { type: "text", default: "across the harbor." },
    image: {
      type: "image",
      priority: true,
      description: "Photograph with a tab cut into the bottom edge.",
      default: shot("1578575437130-527eed3abbec", "A container ship on open water"),
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
    height: {
      label: "Height",
      default: "screen",
      options: {
        screen: null,
        auto: { label: "Auto", styles: { stage: { base: { "min-height": "24rem" }, lg: { "min-height": "24rem" } } } },
      },
    },
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["heading", "description", "actions"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      {
        tag: "div", key: "stage",
        style: {
          base: { position: "relative", overflow: "hidden", display: "flex", "align-items": "flex-end", "min-height": "28rem", "border-bottom-right-radius": "1.75rem", "border-bottom-left-radius": "1.75rem", "border-top-left-radius": "0px", "border-top-right-radius": "0px" },
          lg: { "min-height": "78vh" },
        },
        children: [
          {
            tag: "img", key: "image", bind: "image",
            style: { base: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", width: "100%", height: "100%", "object-fit": "cover" } },
          },
          {
            tag: "div", key: "shade", decorative: true,
            style: { base: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", "background-image": "linear-gradient(to top, token(shade-strong) 0%, token(shade-clear) 55%)" } },
          },
          shell({
            tag: "div", key: "component",
            style: { base: { position: "relative", "z-index": "1", "max-width": "40rem", "padding-bottom": "1.5rem" }, lg: { "padding-bottom": "2.5rem" } },
            children: [
              {
                tag: "h1", key: "heading", bind: "heading",
                style: {
                  base: { "margin-top": "0", "margin-bottom": "0", color: "token(text-inverse)", "font-family": "token(font-display)", "font-size": "3rem", "line-height": "0.98", "font-weight": "600", "letter-spacing": "-0.04em" },
                  md: { "font-size": "4.25rem" },
                  lg: { "font-size": "5.25rem" },
                },
              },
              {
                tag: "p", key: "description", bind: "description", if: "showDescription",
                style: { base: { "margin-top": "1rem", "margin-bottom": "0", "max-width": "32rem", color: "token(surface-muted)", "font-size": "1.05rem", "line-height": "1.55" } },
              },
              {
                tag: "div", key: "actions", repeat: "buttons", if: "showButtons",
                style: { base: { display: "flex", "margin-top": "1.25rem" } },
              },
            ],
          }, { size: "medium" }),
          {
            tag: "div", key: "tab", decorative: true,
            style: {
              base: { position: "absolute", right: "0", bottom: "0", left: "0", top: "auto", "z-index": "2", width: "7rem", height: "1.35rem", "margin-left": "auto", "margin-right": "auto", "border-top-left-radius": "1rem", "border-top-right-radius": "1rem", "border-bottom-right-radius": "0px", "border-bottom-left-radius": "0px", ...t("tab") },
            },
          },
        ],
      },
      {
        tag: "div", key: "statement", if: "showStatement",
        children: [
          shell({
            tag: "h2", key: "line",
            style: {
              base: { display: "flex", "flex-wrap": "wrap", "justify-content": "center", "column-gap": "0.45rem", "row-gap": "0.2rem", "margin-top": "0", "margin-bottom": "0", "text-align": "center", "font-family": "token(font-display)", "font-size": "2rem", "line-height": "1.15", "font-weight": "600", "letter-spacing": "-0.03em" },
              md: { "font-size": "2.75rem" },
              lg: { "font-size": "3.5rem" },
            },
            children: [
              { tag: "div", key: "phrase-1", bind: "phrase1", attrs: { "data-blok-split": "fill" }, style: { base: { display: "inline", ...t("phrase-1") } } },
              { tag: "div", key: "phrase-2", bind: "phrase2", attrs: { "data-blok-split": "fill" }, style: { base: { display: "inline", ...t("phrase-2") } } },
              { tag: "div", key: "phrase-3", bind: "phrase3", attrs: { "data-blok-split": "fill" }, style: { base: { display: "inline", ...t("phrase-3") } } },
              { tag: "div", key: "phrase-4", bind: "phrase4", attrs: { "data-blok-split": "fill" }, style: { base: { display: "inline", ...t("phrase-4") } } },
            ],
          }, { size: "medium" }),
        ],
      },
    ],
  },
};
