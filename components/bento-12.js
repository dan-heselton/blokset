// Four cards. Each holds a title, a line, and a photograph.
import { inset0, pad, radius, shapeVariant, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  heading: { color: "fg" },
  description: { color: "muted" },
  card: { "background-color": "panel", color: "fg" },
  "card-text": { color: "muted" },
};
const t = (key) => themeBase("dark", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1200&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "bento-12",
  prefix: "bento12",
  name: "Bento / Drill",
  category: "bento",
  description: "Four cards in a two-by-two grid. Each has a title, a line, and a photograph in place of a diagram.",

  props: {
    heading: { type: "text", default: "Four ways we check the work" },
    showDescription: { type: "boolean", default: true, description: "Show the line under the headline." },
    description: { type: "text", default: "A pass on the words, the photographs, the CMS, and the day it goes live." },
    cards: {
      type: "list",
      fields: { title: "text", text: "text", image: "image" },
      default: [
        { title: "The words", text: "Read aloud, once, before anyone else sees the page.", image: shot("1497366216548-37526070297c", "A bright studio with a long desk") },
        { title: "The pictures", text: "Named, cropped, and light enough to ship.", image: shot("1519710164239-da123dc03ef4", "A wooden chair in a pale room") },
        { title: "The staff", text: "They edit it on a Friday, without us in the room.", image: shot("1501594907352-04cda38ebc29", "A low pier and still harbor water") },
        { title: "The launch", text: "Redirects, a checklist, and a person who stays.", image: shot("1469474968028-56623f02e42e", "A sunlit ridge and a valley of pines") },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "dark", options: ["light", "dark", "accent"], map: THEME }),
    shape: shapeVariant(["card", "shot"]),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["heading", "description"] } },

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
              base: { "margin-top": "0", "margin-bottom": "0", "max-width": "16ch", "font-family": "token(font-display)", "font-size": "2.25rem", "line-height": "1.05", "font-weight": "600", "letter-spacing": "-0.03em", ...t("heading") },
              lg: { "font-size": "3rem" },
            },
          },
          {
            tag: "p", key: "description", bind: "description", if: "showDescription",
            style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "32rem", "font-size": "1.05rem", "line-height": "1.55", ...t("description") } },
          },
          {
            tag: "div", key: "grid", repeat: "cards",
            style: {
              base: { display: "grid", "grid-template-columns": "minmax(0, 1fr)", "column-gap": "1rem", "row-gap": "1rem" },
              md: { "grid-template-columns": "repeat(2, minmax(0, 1fr))" },
            },
            children: [{
              tag: "div", key: "card",
              style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.85rem", "min-height": "16rem", ...radius("token(radius-card)"), ...pad("1.15rem"), ...t("card") } },
              children: [
                { tag: "h3", key: "card-title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.35rem", "line-height": "1.1", "font-weight": "600" } } },
                { tag: "p", key: "card-text", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.45", ...t("card-text") } } },
                {
                  tag: "div", key: "shot",
                  style: { base: { position: "relative", overflow: "hidden", width: "100%", height: "8rem", "margin-top": "auto", ...radius("token(radius-card)") } },
                  children: [{ tag: "img", key: "card-image", bind: "item.image", style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } } }],
                },
              ],
            }],
          },
        ],
      }),
    ],
  },
};
