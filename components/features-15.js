// Spec-sheet pairs: a label and a value, in a two-column grid on larger screens.
import { themeVariant, themeBase, mono } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  eyebrow: { color: "muted" },
  description: { color: "muted" },
  label: { color: "muted" },
  item: { "border-top-color": "line" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "features-15",
  prefix: "features15",
  name: "Features / Detail Grid",
  category: "features",
  description: "Label and value pairs, laid out like a spec sheet. One column on a phone, two after that.",

  props: {
    ...headerProps({
      eyebrow: "Engagement",
      heading: "The details, in one place",
      description: "The facts people ask for before a proposal. Edit any line without touching the layout.",
    }),
    details: {
      type: "list",
      fields: { label: "text", value: "text" },
      default: [
        { label: "Typical length", value: "6–10 weeks" },
        { label: "Team", value: "One designer, one developer" },
        { label: "Platform", value: "Webflow or Astro" },
        { label: "Meetings", value: "Weekly, 45 minutes" },
        { label: "Revisions", value: "Two rounds per stage" },
        { label: "Handoff", value: "Training call and a written guide" },
        { label: "Care plan", value: "Optional, month to month" },
        { label: "Starting budget", value: "From $8,000" },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
    columns: {
      label: "Columns",
      default: "two",
      options: {
        two: null,
        one: { styles: { grid: { base: { "grid-template-columns": "1fr" }, md: { "grid-template-columns": "1fr" } } } },
      },
    },
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
            tag: "div", key: "grid", repeat: "details",
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "grid-column-gap": "2rem", "grid-row-gap": "0rem" },
              md: { "grid-template-columns": "1fr 1fr", "grid-column-gap": "3rem", "grid-row-gap": "0rem" },
            },
            children: [
              {
                tag: "div", key: "item",
                style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.35rem", "padding-top": "1rem", "padding-bottom": "1rem", "border-top-width": "1px", "border-top-style": "solid", ...t("item") } },
                children: [
                  { tag: "div", key: "label", bind: "item.label", style: { base: { ...mono(), ...t("label") } } },
                  { tag: "div", key: "value", bind: "item.value", style: { base: { "font-family": "token(font-display)", "font-size": "1.35rem", "line-height": "1.25", "font-weight": "600", "letter-spacing": "-0.02em" }, lg: { "font-size": "1.5rem" } } },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
