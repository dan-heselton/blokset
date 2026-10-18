// Light Westway frame with concave side bites, lime badge, and a portrait — copy clears the cutouts.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  frame: { "background-color": "panel", color: "fg" },
  "cutout-left": { "background-color": "bg" },
  "cutout-right": { "background-color": "bg" },
  heading: { color: "fg" },
  tagline: { color: "muted" },
  wordmark: { color: "fg" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });
const pill = {
  "border-top-left-radius": "999px", "border-top-right-radius": "999px",
  "border-bottom-right-radius": "999px", "border-bottom-left-radius": "999px",
};
const LIME = "#c8f542";

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-65",
  prefix: "hero65",
  name: "Hero / Side cutouts",
  category: "hero",
  description: "A cream rounded frame with decorative side bite cutouts (page-colored notches), a lime badge, a large headline inset from the bites, and a portrait.",

  props: {
    showWordmark: { type: "boolean", default: true },
    wordmark: { type: "text", default: "Westway" },
    showTagline: { type: "boolean", default: true },
    tagline: { type: "text", default: "Ocean and air freight, supply chain solutions, end-to-end delivery control." },
    showBadge: { type: "boolean", default: true },
    badge: { type: "text", default: "Global logistics" },
    heading: { type: "text", default: "Logistics that Move Your Business." },
    showImage: { type: "boolean", default: true },
    image: { type: "image", priority: true, default: photo("1581091226825-a6a2a5aee158", "Worker in a hard hat holding a radio") },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["badge", "heading"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { position: "relative" } },
        children: [
          {
            tag: "div", key: "frame",
            style: {
              base: {
                position: "relative", overflow: "hidden",
                display: "grid", "grid-template-columns": "1fr", "align-items": "end",
                "row-gap": "2rem", "column-gap": "0rem",
                "padding-top": "1.75rem", "padding-right": "1.75rem", "padding-bottom": "1.75rem", "padding-left": "1.75rem",
                "min-height": "24rem", ...radius("2rem"), ...t("frame"),
              },
              lg: {
                "grid-template-columns": "1.1fr 0.9fr", "column-gap": "2.5rem", "row-gap": "0rem",
                "padding-top": "2.5rem", "padding-right": "3.5rem", "padding-bottom": "2.5rem", "padding-left": "3.5rem",
                "min-height": "32rem",
                "border-top-left-radius": "2.5rem", "border-top-right-radius": "2.5rem",
                "border-bottom-right-radius": "2.5rem", "border-bottom-left-radius": "2.5rem",
              },
            },
            children: [
              {
                tag: "div", key: "cutout-left", decorative: true,
                style: {
                  base: {
                    display: "none", position: "absolute", top: "50%", left: "0", width: "4.5rem", height: "9rem",
                    "margin-top": "-4.5rem", "margin-left": "-2.25rem", ...pill, ...t("cutout-left"), "z-index": "3",
                  },
                  lg: { display: "block" },
                },
              },
              {
                tag: "div", key: "cutout-right", decorative: true,
                style: {
                  base: {
                    display: "none", position: "absolute", top: "50%", right: "0", width: "4.5rem", height: "9rem",
                    "margin-top": "-4.5rem", "margin-right": "-2.25rem", ...pill, ...t("cutout-right"), "z-index": "3",
                  },
                  lg: { display: "block" },
                },
              },
              {
                tag: "div", key: "copy",
                style: {
                  base: {
                    position: "relative", "z-index": "2", display: "flex", "flex-direction": "column",
                    "justify-content": "space-between", "row-gap": "3rem", "min-height": "100%",
                    "padding-left": "0rem", "padding-right": "0rem",
                  },
                  lg: { "padding-left": "1.25rem", "padding-right": "0.5rem" },
                },
                children: [
                  {
                    tag: "div", key: "top",
                    style: { base: { display: "flex", "flex-wrap": "wrap", "justify-content": "space-between", "align-items": "flex-start", "column-gap": "1.5rem", "row-gap": "0.75rem" } },
                    children: [
                      { tag: "div", key: "wordmark", bind: "wordmark", if: "showWordmark", style: { base: { "font-family": "token(font-display)", "font-size": "1.25rem", "font-weight": "700", ...t("wordmark") } } },
                      { tag: "p", key: "tagline", bind: "tagline", if: "showTagline", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "22rem", "font-size": "0.8125rem", "line-height": "1.5", ...t("tagline") } } },
                    ],
                  },
                  {
                    tag: "div", key: "lead",
                    style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "1rem" } },
                    children: [
                      {
                        tag: "div", key: "badge", bind: "badge", if: "showBadge",
                        style: {
                          base: {
                            ...mono(), "text-transform": "uppercase", "letter-spacing": "0.06em",
                            "padding-top": "0.4rem", "padding-right": "0.85rem", "padding-bottom": "0.4rem", "padding-left": "0.85rem",
                            "background-color": LIME, color: "token(ink)", ...pill,
                          },
                        },
                      },
                      {
                        tag: "h1", key: "heading", bind: "heading",
                        style: {
                          base: { "margin-top": "0", "margin-bottom": "0", "max-width": "12ch", "font-family": "token(font-display)", "font-size": "2.75rem", "line-height": "1.02", "font-weight": "700", "letter-spacing": "-0.03em", "text-wrap": "balance", ...t("heading") },
                          md: { "font-size": "3.75rem" },
                          lg: { "font-size": "4.5rem" },
                        },
                      },
                    ],
                  },
                ],
              },
              {
                tag: "div", key: "media", if: "showImage",
                style: {
                  base: {
                    position: "relative", "z-index": "2", width: "100%", overflow: "hidden",
                    "aspect-ratio": "4 / 5", height: "auto", "min-height": "0rem", ...radius("1.5rem"),
                  },
                  lg: { "aspect-ratio": "auto", height: "100%", "min-height": "28rem" },
                },
                children: [{
                  tag: "img", key: "image", bind: "image",
                  style: {
                    base: {
                      display: "block", width: "100%", height: "100%", "object-fit": "cover", "object-position": "center top",
                    },
                  },
                }],
              },
            ],
          },
        ],
      }),
    ],
  },
};
