// Lime accent frame with large side cutouts on a dark page, centered impact stats.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  "cutout-left": { "background-color": "bg" },
  "cutout-right": { "background-color": "bg" },
};
const page = (key) => themeBase("dark", THEME[key]);
const pill = {
  "border-top-left-radius": "999px", "border-top-right-radius": "999px",
  "border-bottom-right-radius": "999px", "border-bottom-left-radius": "999px",
};
const LIME = "#c8f542";

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "stats-14",
  prefix: "stats14",
  name: "Stats / Cutout impact",
  category: "stats",
  description: "A lime frame with large concave side cutouts on a dark page, a badge, Performance Results headline, and three counted figures.",

  props: {
    showBadge: { type: "boolean", default: true },
    badge: { type: "text", default: "OUR IMPACT" },
    heading: { type: "text", default: "Performance Results" },
    showDescription: { type: "boolean", default: true },
    description: {
      type: "text",
      default: "Measured across ocean and air lanes in the last twelve months. Numbers update when routes close, not when a deck goes out.",
    },
    stats: {
      type: "list",
      fields: { value: "text", label: "text" },
      default: [
        { value: "20%", label: "Faster Transit" },
        { value: "85%", label: "On-Time Deliveries" },
        { value: "43%", label: "Route Efficiency" },
      ],
    },
  },

  variants: {
    theme: themeVariant({
      default: "dark",
      options: ["dark", "light"],
      map: {
        section: THEME.section,
        "cutout-left": THEME["cutout-left"],
        "cutout-right": THEME["cutout-right"],
      },
    }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["badge", "heading", "description", "stat"] } },

  tree: {
    role: "section",
    style: { base: page("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { position: "relative" } },
        children: [{
          tag: "div", key: "frame",
          style: {
            base: {
              position: "relative", overflow: "hidden",
              display: "flex", "flex-direction": "column", "align-items": "center", "row-gap": "2.25rem",
              "padding-top": "2.5rem", "padding-right": "1.5rem", "padding-bottom": "2.5rem", "padding-left": "1.5rem",
              "text-align": "center", "background-color": LIME, color: "token(ink)", ...radius("1.75rem"),
            },
            lg: {
              "padding-top": "3.25rem", "padding-right": "3.5rem", "padding-bottom": "3.25rem", "padding-left": "3.5rem",
              "border-top-left-radius": "2.25rem", "border-top-right-radius": "2.25rem",
              "border-bottom-right-radius": "2.25rem", "border-bottom-left-radius": "2.25rem",
            },
          },
          children: [
            {
              tag: "div", key: "cutout-left", decorative: true,
              style: {
                base: {
                  display: "none", position: "absolute", top: "50%", left: "0", width: "5.5rem", height: "11rem",
                  "margin-top": "-5.5rem", "margin-left": "-2.75rem", ...pill, ...page("cutout-left"), "z-index": "3",
                },
                lg: { display: "block" },
              },
            },
            {
              tag: "div", key: "cutout-right", decorative: true,
              style: {
                base: {
                  display: "none", position: "absolute", top: "50%", right: "0", width: "5.5rem", height: "11rem",
                  "margin-top": "-5.5rem", "margin-right": "-2.75rem", ...pill, ...page("cutout-right"), "z-index": "3",
                },
                lg: { display: "block" },
              },
            },
            {
              tag: "div", key: "lead",
              style: {
                base: {
                  position: "relative", "z-index": "2",
                  display: "flex", "flex-direction": "column", "align-items": "center", "row-gap": "1rem", "max-width": "40rem",
                },
              },
              children: [
                {
                  tag: "div", key: "badge", bind: "badge", if: "showBadge",
                  style: {
                    base: {
                      ...mono(), "text-transform": "uppercase", "letter-spacing": "0.08em",
                      "padding-top": "0.4rem", "padding-right": "0.85rem", "padding-bottom": "0.4rem", "padding-left": "0.85rem",
                      "background-color": "token(ink)", color: LIME, ...pill,
                    },
                  },
                },
                {
                  tag: "h2", key: "heading", bind: "heading",
                  style: {
                    base: {
                      "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)",
                      "font-size": "2.5rem", "line-height": "1.02", "font-weight": "700", "letter-spacing": "-0.03em", color: "token(ink)",
                    },
                    md: { "font-size": "3.25rem" },
                    lg: { "font-size": "3.75rem" },
                  },
                },
                {
                  tag: "p", key: "description", bind: "description", if: "showDescription",
                  style: {
                    base: {
                      "margin-top": "0", "margin-bottom": "0", "max-width": "34rem",
                      "font-size": "1rem", "line-height": "1.6", color: "token(ink)", opacity: "0.72",
                    },
                  },
                },
              ],
            },
            {
              tag: "div", key: "stats", repeat: "stats",
              style: {
                base: {
                  position: "relative", "z-index": "2", width: "100%",
                  display: "grid", "grid-template-columns": "1fr", "grid-column-gap": "1.5rem", "grid-row-gap": "1.75rem",
                },
                md: { "grid-template-columns": "repeat(3, minmax(0, 1fr))" },
              },
              children: [{
                tag: "div", key: "stat",
                style: { base: { display: "flex", "flex-direction": "column", "align-items": "center", "row-gap": "0.4rem" } },
                children: [
                  {
                    tag: "div", key: "stat-value", bind: "item.value", attrs: { "data-blok-count": "" },
                    style: {
                      base: {
                        "font-family": "token(font-display)", "font-size": "3rem", "line-height": "0.95",
                        "font-weight": "700", "letter-spacing": "-0.04em", color: "token(ink)",
                      },
                      lg: { "font-size": "3.75rem" },
                    },
                  },
                  {
                    tag: "div", key: "stat-label", bind: "item.label",
                    style: { base: { "font-size": "0.9375rem", "line-height": "1.4", color: "token(ink)", opacity: "0.7" } },
                  },
                ],
              }],
            },
          ],
        }],
      }),
    ],
  },
};
