// A narrow reading column. Each chapter is a heading, a paragraph, and an optional photograph.
import { radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  text: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "editorial-01",
  prefix: "editorial1",
  name: "Essay / Figures",
  category: "editorial",
  description: "A narrow reading column. Each list item is a heading, a paragraph, and an optional photograph.",

  props: {
    ...headerProps({
      eyebrow: "Studio note",
      heading: "How a page gets written",
      description: "The order we use when the copy is still a pile of notes.",
    }),
    showImages: { type: "boolean", default: true, description: "Show the photograph under each chapter." },
    chapters: {
      type: "list",
      fields: { title: "text", text: "text", image: "image" },
      default: [
        { title: "Start with the sentence", text: "One line that says who the page is for. If that line is fuzzy, the rest of the page will be too.", image: photo("1519710164239-da123dc03ef4", "A quiet room with a chair by the window") },
        { title: "Then the proof", text: "A photograph, a material, or a date. Something a reader can check, not a claim they have to trust.", image: photo("1497366216548-37526070297c", "Notes and a lamp on a studio desk") },
        { title: "Leave a way out", text: "The last line is the next step: a visit, a sample, or a question. The page should end there.", image: photo("1500530855697-b586d89ba3ee", "A path through green hills") },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] },
    reveal: { preset: "fade-up", targets: ["chapter"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "align-items": "center", "row-gap": "3rem" } },
        children: [
          header({ t, layout: "stack" }),
          {
            tag: "div", key: "column", repeat: "chapters",
            style: { base: { display: "flex", "flex-direction": "column", "row-gap": "3.5rem", width: "100%", "max-width": "40rem" } },
            children: [{
              tag: "div", key: "chapter",
              style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1rem" } },
              children: [
                {
                  tag: "h3", key: "chapter-title", bind: "item.title",
                  style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1.15", "font-weight": "600", "letter-spacing": "-0.03em" } },
                },
                { tag: "p", key: "text", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1.125rem", "line-height": "1.65", ...t("text") } } },
                {
                  tag: "img", key: "figure", bind: "item.image", if: "showImages",
                  style: { base: { display: "block", width: "100%", "aspect-ratio": "16 / 10", "object-fit": "cover", "margin-top": "0.5rem", ...radius("token(radius-card)") } },
                },
              ],
            }],
          },
        ],
      }),
    ],
  },
};
