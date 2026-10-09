// A static comparison: one label column and three value columns. Not a billing toggle.
import { themeVariant, themeBase, mono } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  eyebrow: { color: "muted" },
  description: { color: "muted" },
  "col-blank": { color: "muted" },
  row: { "border-top-color": "line" },
  "cell-b": { "background-color": "panel" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "features-18",
  prefix: "features18",
  name: "Features / Comparison",
  category: "features",
  description: "A comparison grid: a row label and three columns. The middle column stays highlighted.",

  props: {
    ...headerProps({
      eyebrow: "Fit",
      heading: "Which engagement matches the work",
      description: "A plain grid. No toggle, no calculator — just the differences side by side.",
    }),
    colA: { type: "text", default: "Refresh" },
    colB: { type: "text", default: "New site" },
    colC: { type: "text", default: "Care" },
    rows: {
      type: "list",
      fields: { label: "text", a: "text", b: "text", c: "text" },
      default: [
        { label: "Length", a: "3–5 weeks", b: "6–10 weeks", c: "Monthly" },
        { label: "Design", a: "Existing system", b: "New system", c: "Small updates" },
        { label: "Pages", a: "Up to 8", b: "Up to 20", c: "As needed" },
        { label: "CMS training", a: "One hour", b: "Included", c: "On request" },
        { label: "Motion", a: "Light", b: "Included", c: "Fixes only" },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" }, lg: { "row-gap": "3.5rem" } },
        children: [
          header({ t, layout: "split" }),
          {
            tag: "div", key: "table",
            style: { base: { overflow: "auto" } },
            children: [
              {
                tag: "div", key: "sheet",
                style: { base: { "min-width": "40rem" } },
                children: [
                  {
                    tag: "div", key: "cols",
                    style: { base: { display: "grid", "grid-template-columns": "1.3fr 1fr 1fr 1fr", "grid-column-gap": "1rem", "padding-bottom": "0.75rem" } },
                    children: [
                      { tag: "div", key: "col-blank", text: "Compare", style: { base: { ...mono(), ...t("col-blank") } } },
                      { tag: "div", key: "col-a", bind: "colA", style: { base: { ...mono(), "padding-top": "0.85rem", "padding-bottom": "0.85rem", "padding-left": "0.75rem", "padding-right": "0.75rem" } } },
                      { tag: "div", key: "col-b", bind: "colB", style: { base: { ...mono(), "padding-top": "0.85rem", "padding-bottom": "0.85rem", "padding-left": "0.75rem", "padding-right": "0.75rem", ...t("cell-b") } } },
                      { tag: "div", key: "col-c", bind: "colC", style: { base: { ...mono(), "padding-top": "0.85rem", "padding-bottom": "0.85rem", "padding-left": "0.75rem", "padding-right": "0.75rem" } } },
                    ],
                  },
                  {
                    tag: "div", key: "rows", repeat: "rows",
                    children: [
                      {
                        tag: "div", key: "row",
                        style: { base: { display: "grid", "grid-template-columns": "1.3fr 1fr 1fr 1fr", "grid-column-gap": "1rem", "align-items": "center", "border-top-width": "1px", "border-top-style": "solid", ...t("row") } },
                        children: [
                          { tag: "div", key: "cell-label", bind: "item.label", style: { base: { "font-weight": "600", "padding-top": "0.9rem", "padding-bottom": "0.9rem" } } },
                          { tag: "div", key: "cell-a", bind: "item.a", style: { base: { "padding-top": "0.9rem", "padding-bottom": "0.9rem", "padding-left": "0.75rem", "padding-right": "0.75rem" } } },
                          { tag: "div", key: "cell-b", bind: "item.b", style: { base: { "padding-top": "0.9rem", "padding-bottom": "0.9rem", "padding-left": "0.75rem", "padding-right": "0.75rem", ...t("cell-b") } } },
                          { tag: "div", key: "cell-c", bind: "item.c", style: { base: { "padding-top": "0.9rem", "padding-bottom": "0.9rem", "padding-left": "0.75rem", "padding-right": "0.75rem" } } },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
