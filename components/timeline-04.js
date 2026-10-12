// A large year, a short chapter that rises line by line, and a photograph beside it.
import { radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  year: { color: "fg" },
  chapter: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "timeline-04",
  prefix: "timeline4",
  name: "Timeline / Chapters",
  category: "timeline",
  description: "Each year is set large, with a short chapter that rises line by line and a photograph beside it.",

  props: {
    ...headerProps({
      eyebrow: "Chapters",
      heading: "Four years that stuck",
      description: "Not a full history. The moments we still mention when someone new joins.",
    }),
    chapters: {
      type: "list",
      fields: { year: "text", text: "text", image: "image" },
      default: [
        { year: "2014", text: "The first invoice was a bakery site, built after the shop closed for the night.", image: photo("1517248135467-4c7edcad34c4", "Bakery interior with warm light") },
        { year: "2018", text: "We stopped taking every brief. The ones we kept were the ones we could explain in a page.", image: photo("1497366216548-37526070297c", "A long office corridor with desks") },
        { year: "2022", text: "The harbor studio fit four people and a table long enough to pin a whole site on.", image: photo("1501594907352-04cda38ebc29", "A bridge over blue water") },
        { year: "2026", text: "The library started as a folder of components we were tired of redrawing.", image: photo("1486406146926-c627a92ad1ab", "Glass facade of a modern building") },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "3rem" }, lg: { "row-gap": "4.5rem" } },
        children: [
          header({ t, layout: "stack" }),
          {
            tag: "div", key: "chapters", repeat: "chapters",
            style: { base: { display: "flex", "flex-direction": "column", "row-gap": "3.5rem" }, lg: { "row-gap": "5rem" } },
            children: [{
              tag: "div", key: "chapter-row",
              style: {
                base: { display: "grid", "grid-template-columns": "1fr", "align-items": "start", "grid-column-gap": "0rem", "grid-row-gap": "1rem" },
                lg: { "grid-template-columns": "9rem 1fr 18rem", "align-items": "center", "grid-column-gap": "2.5rem", "grid-row-gap": "0rem" },
              },
              children: [
                { tag: "div", key: "year", bind: "item.year", style: { base: { "font-family": "token(font-display)", "font-size": "3rem", "line-height": "0.9", "font-weight": "600", "letter-spacing": "-0.05em", ...t("year") }, lg: { "font-size": "4.25rem" } } },
                { tag: "p", key: "chapter", bind: "item.text", attrs: { "data-blok-split": "lines" }, style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "28rem", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.25", "font-weight": "500", "letter-spacing": "-0.02em", ...t("chapter") }, lg: { "font-size": "1.85rem" } } },
                { tag: "img", key: "chapter-image", bind: "item.image", style: { base: { display: "block", width: "100%", "aspect-ratio": "4 / 3", "object-fit": "cover", ...radius("token(radius-card)") } } },
              ],
            }],
          },
        ],
      }),
    ],
  },
};
