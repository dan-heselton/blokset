// Three short lines rise out of masks beside a label that stays put while you scroll.
import { mono, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  label: { color: "muted" },
  line: { color: "fg" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "statement-03",
  prefix: "statement3",
  name: "Statement / Line Reveal",
  category: "statement",
  description: "Three short paragraphs rise line by line, next to a label that sticks as you scroll.",

  props: {
    label: { type: "text", default: "How we work" },
    lines: {
      type: "list",
      fields: { text: "text" },
      default: [
        { text: "The brief is a page, not a deck. If it does not fit, the project is not ready." },
        { text: "Design happens in the browser. A frame is a sketch, not the thing we ship." },
        { text: "Motion is quiet on purpose. It explains the page, then gets out of the way." },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: {
          base: { display: "grid", "grid-template-columns": "1fr", "align-items": "start", "grid-column-gap": "1.5rem", "grid-row-gap": "2rem" },
          lg: { "grid-template-columns": "14rem 1fr", "grid-column-gap": "3rem" },
        },
        children: [
          {
            tag: "h2", key: "label", bind: "label",
            style: { base: { position: "sticky", top: "1.5rem", "margin-top": "0", "margin-bottom": "0", ...mono(), "letter-spacing": "0.08em", ...t("label") } },
          },
          {
            tag: "div", key: "lines", repeat: "lines",
            style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2rem" }, lg: { "row-gap": "3rem" } },
            children: [
              {
                tag: "p", key: "line", bind: "item.text", attrs: { "data-blok-split": "lines" },
                style: {
                  base: { "margin-top": "0", "margin-bottom": "0", "max-width": "18em", "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1.25", "font-weight": "500", "letter-spacing": "-0.03em", ...t("line") },
                  md: { "font-size": "2.35rem" },
                  lg: { "font-size": "3rem" },
                },
              },
            ],
          },
        ],
      }),
    ],
  },
};
