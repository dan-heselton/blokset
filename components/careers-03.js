// Benefits as a grid of titles and a sentence. No amounts.
import { themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  benefit: { "background-color": "panel" },
  "benefit-text": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "careers-03",
  prefix: "careers3",
  name: "Careers / Benefits",
  category: "careers",
  description: "A list of benefits. Each one is a title and a sentence. One column on a phone, two on a tablet, three on a desktop.",

  props: {
    ...headerProps({
      eyebrow: "Working here",
      heading: "What comes with the job",
      description: "The same list for every role. We add a line when something changes, and we take one off when it stops being true.",
    }),
    benefits: {
      type: "list",
      fields: { title: "text", text: "text" },
      default: [
        { title: "Time off", text: "Four weeks in the year, and the studio closes the week after Christmas." },
        { title: "The room", text: "A desk in Rockport if you want one. The light faces north." },
        { title: "Tools", text: "The software the work needs. We buy it before you start." },
        { title: "Health", text: "A plan for you, and one for the people you cover." },
        { title: "The trial", text: "The first piece of work is paid, and short enough to judge." },
        { title: "Hours", text: "The studio day is nine to five. Evenings stay yours." },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] },
    reveal: { preset: "fade-up", targets: ["benefit"] },
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
            tag: "div", key: "grid", repeat: "benefits",
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "grid-column-gap": "1rem", "grid-row-gap": "1rem" },
              md: { "grid-template-columns": "1fr 1fr", "grid-column-gap": "1.25rem", "grid-row-gap": "1.25rem" },
              lg: { "grid-template-columns": "1fr 1fr 1fr", "grid-column-gap": "1.25rem", "grid-row-gap": "1.25rem" },
            },
            children: [{
              tag: "div", key: "benefit",
              style: {
                base: { display: "flex", "flex-direction": "column", "row-gap": "0.65rem", "padding-top": "1.5rem", "padding-right": "1.25rem", "padding-bottom": "1.5rem", "padding-left": "1.25rem", ...t("benefit") },
              },
              children: [
                {
                  tag: "h3", key: "benefit-title", bind: "item.title",
                  style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.35rem", "line-height": "1.2", "font-weight": "600", "letter-spacing": "-0.02em" } },
                },
                { tag: "p", key: "benefit-text", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.55", ...t("benefit-text") } } },
              ],
            }],
          },
        ],
      }),
    ],
  },
};
