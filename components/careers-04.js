// How a hire proceeds. A numbered stack, not the sticky process cards.
import { mono, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  step: { "border-top-color": "line" },
  list: { "border-bottom-color": "line" },
  index: { color: "muted" },
  "step-text": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "careers-04",
  prefix: "careers4",
  name: "Careers / Path",
  category: "careers",
  description: "A numbered list of how a hire goes. Write, talk, try, then decide. A quiet stack.",

  props: {
    ...headerProps({
      eyebrow: "Hiring",
      heading: "How a hire goes",
      description: "Four steps. You always know which one you are on, and what happens next.",
    }),
    steps: {
      type: "list",
      fields: { title: "text", text: "text" },
      default: [
        { title: "Write", text: "A note about work you have shipped. A link to the project is enough." },
        { title: "Talk", text: "One conversation with the person you would sit next to." },
        { title: "Try", text: "A paid piece of the real work, scoped to a few days." },
        { title: "Decide", text: "We say yes or no within a week of that trial." },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] },
    reveal: { preset: "fade-up", targets: ["step"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" }, lg: { "row-gap": "3.5rem" } },
        children: [
          header({ t, layout: "stack" }),
          {
            tag: "div", key: "list", repeat: "steps",
            style: { base: { "border-bottom-width": "1px", "border-bottom-style": "solid", ...t("list") } },
            children: [{
              tag: "div", key: "step",
              style: {
                base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "column-gap": "1.5rem", "row-gap": "0.65rem", "padding-top": "1.35rem", "padding-bottom": "1.35rem", "border-top-width": "1px", "border-top-style": "solid", ...t("step") },
                md: { "flex-direction": "row", "align-items": "baseline" },
              },
              children: [
                { tag: "div", key: "index", bind: "@index", style: { base: { width: "2.5rem", "flex-shrink": "0", ...mono(), ...t("index") } } },
                {
                  tag: "h3", key: "step-title", bind: "item.title",
                  style: {
                    base: { width: "100%", "flex-shrink": "0", "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1.1", "font-weight": "600", "letter-spacing": "-0.03em" },
                    md: { width: "10rem", "flex-shrink": "0", "font-size": "2rem" },
                  },
                },
                { tag: "p", key: "step-text", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "36rem", "font-size": "1.0625rem", "line-height": "1.55", ...t("step-text") } } },
              ],
            }],
          },
        ],
      }),
    ],
  },
};
