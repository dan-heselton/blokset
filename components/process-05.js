// Three steps. The card under the pointer shows its photograph.
import { radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  heading: { color: "fg" },
  card: { "background-color": "panel", color: "fg" },
  plate: { "background-color": "panel", color: "fg" },
};
const t = (key) => themeBase("dark", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1200&q=80`, alt });
const inset = { top: "0", right: "0", bottom: "0", left: "0" };

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "process-05",
  prefix: "process5",
  name: "Process / Video cards",
  category: "process",
  description: "Three steps in a row. The first photograph starts visible. Moving the pointer fades that photograph out and the next one in.",

  props: {
    heading: { type: "text", default: "How we start" },
    steps: {
      type: "list",
      fields: { number: "text", title: "text", note: "text", image: "image" },
      default: [
        { number: "01", title: "Intro call", note: "A short conversation about the work, the timeline, and what should stay out of the way.", image: photo("1497366216548-37526070297c", "A bright studio with a long desk") },
        { number: "02", title: "Proposal & fit", note: "A written plan with the sections, the motion, and the parts we will not build.", image: photo("1517248135467-4c7edcad34c4", "A restaurant interior with warm light") },
        { number: "03", title: "Start working", note: "The first sections go up. You can change the copy without opening the file.", image: photo("1469474968028-56623f02e42e", "A ridge and a pale road through dry hills") },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "dark", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["heading"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2rem" } },
        children: [
          {
            tag: "h2", key: "heading", bind: "heading",
            style: {
              base: { "margin-top": "0", "margin-bottom": "0", "max-width": "16rem", "font-family": "token(font-serif)", "font-size": "2.75rem", "line-height": "1", "font-weight": "500", "letter-spacing": "-0.03em", ...t("heading") },
              lg: { "max-width": "24rem", "font-size": "3.75rem" },
            },
          },
          {
            tag: "div", key: "row", repeat: "steps", attrs: { "data-blok-peek": "" },
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "row-gap": "0.75rem", "column-gap": "0rem" },
              lg: { "grid-template-columns": "repeat(3, minmax(0, 1fr))", "column-gap": "0.75rem", "row-gap": "0rem" },
            },
            children: [{
              tag: "div", key: "card", attrs: { "data-blok-peek-card": "" },
              style: {
                base: {
                  position: "relative", display: "flex", "flex-direction": "column", "justify-content": "flex-end",
                  overflow: "hidden", "min-height": "22rem", cursor: "pointer", ...radius("token(radius-card)"), ...t("card"),
                },
              },
              children: [
                {
                  tag: "div", key: "media", attrs: { "data-blok-peek-media": "" },
                  style: { base: { position: "absolute", ...inset, "z-index": "0", opacity: "0" } },
                  children: [{
                    tag: "img", key: "photo", bind: "item.image",
                    style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } },
                  }],
                },
                {
                  tag: "div", key: "plate",
                  style: {
                    base: {
                      position: "relative", "z-index": "1", display: "flex", "flex-direction": "column", "row-gap": "0.65rem",
                      "margin-top": "0", "margin-right": "0.85rem", "margin-bottom": "0.85rem", "margin-left": "0.85rem",
                      "padding-top": "1.1rem", "padding-right": "1.1rem", "padding-bottom": "1.1rem", "padding-left": "1.1rem",
                      ...radius("token(radius)"), ...t("plate"),
                    },
                  },
                  children: [
                    { tag: "div", key: "number", bind: "item.number", style: { base: { "font-family": "token(font-mono)", "font-size": "0.75rem", "line-height": "1", "letter-spacing": "0.08em" } } },
                    { tag: "h3", key: "title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.15", "font-weight": "600", "letter-spacing": "-0.03em" } } },
                    { tag: "p", key: "note", bind: "item.note", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "0.9375rem", "line-height": "1.5", opacity: "0.85" } } },
                  ],
                },
              ],
            }],
          },
        ],
      }),
    ],
  },
};
