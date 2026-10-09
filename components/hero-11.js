// Kinetic split hero: an oversized headline whose words rise out of a mask, beside a tall image that
// wipes in from the bottom. Image side, theme and caption are all switchable.
import { themeVariant, themeBase, radius, mono } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  eyebrow: { color: "muted" },
  description: { color: "muted" },
  meta: { color: "muted", "border-top-color": "line" },
  caption: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-11",
  prefix: "hero11",
  name: "Hero / Kinetic Split",
  category: "hero",
  description: "Oversized headline whose words rise out of a mask, beside a tall image that wipes in. Image left or right, three themes.",

  props: {
    showEyebrow: { type: "boolean", default: true },
    eyebrow: { type: "text", default: "Design & build studio — Est. 2014" },
    heading: { type: "text", default: "Websites with a pulse" },
    description: {
      type: "text",
      default: "Strategy, identity and Webflow builds for small businesses and community organizations that want to look as good as they are.",
    },
    showButtons: { type: "boolean", default: true },
    buttons: {
      type: "buttons", max: 2,
      default: [
        { title: "See our work", href: "#", variant: "dark" },
        { title: "Get in touch", href: "#", variant: "secondary" },
      ],
    },
    showMeta: { type: "boolean", default: true, description: "Small detail row under the buttons" },
    metaLeft: { type: "text", default: "Available Q1 2027" },
    metaRight: { type: "text", default: "Scroll ↓" },
    showImage: { type: "boolean", default: true },
    image: {
      type: "image", priority: true,
      default: { src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1400&q=80", alt: "Sunlit studio with plants and a long table" },
    },
    showCaption: { type: "boolean", default: true },
    caption: { type: "text", default: "Fig. 01 — Studio, Cape Ann" },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
    imageSide: {
      label: "Image side",
      default: "image-right",
      options: {
        "image-right": null,
        "image-left": { styles: { component: { base: { "flex-direction": "column" }, lg: { "flex-direction": "row-reverse" } } } },
      },
    },
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.1, targets: ["eyebrow", "description", "actions", "meta"] },
  },

  tree: {
    role: "section",
    style: { base: { position: "relative", overflow: "hidden", ...t("section") } },
    children: [
      shell({
        tag: "div", key: "component",
        style: {
          base: { display: "flex", "flex-direction": "column", "align-items": "stretch", "row-gap": "3rem", "column-gap": "0rem" },
          lg: { "flex-direction": "row", "align-items": "stretch", "row-gap": "0rem", "column-gap": "4rem" },
        },
        children: [
          {
            tag: "div", key: "content",
            style: {
              base: { display: "flex", "flex-direction": "column", "justify-content": "flex-end", "flex-grow": "1", "flex-basis": "0%", "padding-top": "0rem" },
              lg: { "padding-top": "4rem" },
            },
            children: [
              { tag: "div", key: "eyebrow", bind: "eyebrow", if: "showEyebrow", style: { base: { ...mono(), "margin-bottom": "1.5rem", ...t("eyebrow") } } },
              {
                tag: "h1", key: "heading", bind: "heading", attrs: { "data-blok-split": "rise" },
                style: {
                  base: { "margin-top": "0", "margin-bottom": "1.5rem", "font-family": "token(font-display)", "font-size": "3.75rem", "line-height": "0.92", "font-weight": "600", "letter-spacing": "-0.05em" },
                  md: { "font-size": "6rem" },
                  lg: { "font-size": "7.5rem", "margin-bottom": "2rem" },
                },
              },
              { tag: "p", key: "description", bind: "description", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "30rem", "font-size": "1.125rem", "line-height": "1.6", ...t("description") } } },
              { tag: "div", key: "actions", repeat: "buttons", if: "showButtons", style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "0.75rem", "row-gap": "0.75rem", "margin-top": "2rem" } } },
              {
                tag: "div", key: "meta", if: "showMeta",
                style: {
                  base: { display: "flex", "justify-content": "space-between", "margin-top": "3rem", "padding-top": "1rem", "border-top-width": "1px", "border-top-style": "solid", ...mono(), ...t("meta") },
                  lg: { "margin-top": "4rem" },
                },
                children: [
                  { tag: "div", key: "meta-left", bind: "metaLeft" },
                  { tag: "div", key: "meta-right", bind: "metaRight" },
                ],
              },
            ],
          },
          {
            tag: "div", key: "media", if: "showImage",
            style: { base: { width: "100%", "flex-shrink": "0" }, lg: { width: "42%" } },
            children: [
              {
                tag: "div", key: "image-wrap", attrs: { "data-blok-reveal": "clip" },
                style: { base: { overflow: "hidden", "aspect-ratio": "4 / 5", ...radius("token(radius-card)") }, lg: { "aspect-ratio": "3 / 4" } },
                children: [{ tag: "img", key: "image", bind: "image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } }],
              },
              { tag: "div", key: "caption", bind: "caption", if: "showCaption", style: { base: { ...mono(), "margin-top": "0.875rem", ...t("caption") } } },
            ],
          },
        ],
      }),
    ],
  },
};
