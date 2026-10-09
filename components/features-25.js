// Centered intro and a four-up text grid. No images.
import { themeVariant, themeBase } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  eyebrow: { color: "muted" },
  heading: { color: "fg" },
  description: { color: "muted" },
  "item-text": { color: "muted" },
  item: { "border-top-color": "line" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "features-25",
  prefix: "features25",
  name: "Features / Text Grid",
  category: "features",
  description: "A centered intro and a four-column text grid. No images, just the points.",

  props: {
    ...headerProps({
      eyebrow: "Principles",
      heading: "How we decide",
      description: "Four rules we use when a page starts to collect extras it does not need.",
    }),
    features: {
      type: "list",
      fields: { title: "text", text: "text" },
      default: [
        { title: "One job per page", text: "If a page is trying to do three things, it is three pages, or it is unclear." },
        { title: "Words before decoration", text: "The sentence has to work in plain type. Motion comes after that." },
        { title: "Editors first", text: "If the person publishing cannot find the field, the component is wrong." },
        { title: "Stop on time", text: "A finished smaller site beats a large one that is still in review." },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
    columns: {
      label: "Columns",
      default: "four",
      options: {
        four: null,
        two: { styles: { grid: { base: { "grid-template-columns": "1fr" }, lg: { "grid-template-columns": "1fr 1fr" } } } },
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
        style: { base: { display: "flex", "flex-direction": "column", "align-items": "stretch", "row-gap": "2.5rem" }, lg: { "row-gap": "3.5rem" } },
        children: [
          header({ t, layout: "center" }),
          {
            tag: "div", key: "grid", repeat: "features",
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "grid-column-gap": "1.5rem", "grid-row-gap": "0rem" },
              md: { "grid-template-columns": "1fr 1fr", "grid-column-gap": "2rem", "grid-row-gap": "0rem" },
              lg: { "grid-template-columns": "1fr 1fr 1fr 1fr", "grid-column-gap": "2rem", "grid-row-gap": "0rem" },
            },
            children: [
              {
                tag: "div", key: "item",
                style: { base: { "padding-top": "1.25rem", "border-top-width": "1px", "border-top-style": "solid", ...t("item") } },
                children: [
                  { tag: "h3", key: "item-title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0.6rem", "font-family": "token(font-display)", "font-size": "1.35rem", "line-height": "1.2", "font-weight": "600", "letter-spacing": "-0.02em" } } },
                  { tag: "p", key: "item-text", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.55", ...t("item-text") } } },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
