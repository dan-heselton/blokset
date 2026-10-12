// Label and value pairs for one product. No prices.
import { mono, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  list: { "border-bottom-color": "line" },
  row: { "border-top-color": "line" },
  label: { color: "muted" },
  value: { color: "fg" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "specs-01",
  prefix: "specs1",
  name: "Specs / Sheet",
  category: "specs",
  description: "Label and value pairs for one product. Material, finish, and size. No prices.",

  props: {
    ...headerProps({
      eyebrow: "Field chair",
      heading: "What it is made of",
      description: "The facts we put on the product page. Add a row when a detail is worth naming.",
    }),
    specs: {
      type: "list",
      fields: { label: "text", value: "text" },
      default: [
        { label: "Frame", value: "Ash, steam-bent" },
        { label: "Seat", value: "Paper cord, hand woven" },
        { label: "Finish", value: "Oil, wiped back" },
        { label: "Made", value: "Rockport, one at a time" },
        { label: "Seat height", value: "46 cm" },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] },
    reveal: { preset: "fade-up", targets: ["row"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" }, lg: { "row-gap": "3.5rem" } },
        children: [
          header({ t }),
          {
            tag: "div", key: "list", repeat: "specs",
            style: { base: { "border-bottom-width": "1px", "border-bottom-style": "solid", ...t("list") } },
            children: [{
              tag: "div", key: "row",
              style: {
                base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "column-gap": "2rem", "row-gap": "0.25rem", "padding-top": "1.1rem", "padding-bottom": "1.1rem", "border-top-width": "1px", "border-top-style": "solid", ...t("row") },
                md: { "flex-direction": "row", "align-items": "baseline", "column-gap": "2rem" },
              },
              children: [
                { tag: "div", key: "label", bind: "item.label", style: { base: { width: "9rem", "flex-shrink": "0", ...mono(), ...t("label") } } },
                { tag: "div", key: "value", bind: "item.value", style: { base: { "font-size": "1.125rem", "line-height": "1.4", ...t("value") } } },
              ],
            }],
          },
        ],
      }),
    ],
  },
};
