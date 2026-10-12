// Three columns, each starting lower than the one before it.
import { radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  "note-a": { color: "muted" },
  "note-b": { color: "muted" },
  "note-c": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1000&q=80`, alt });

function column(key, titleProp, noteProp, imageProp, speed, drop) {
  return {
    tag: "div", key, attrs: { "data-blok-depth": speed },
    style: { base: { "margin-top": "0rem" }, lg: { "margin-top": drop } },
    children: [
      {
        tag: "div", key: `${key}-frame`,
        style: { base: { overflow: "hidden", "margin-bottom": "1rem", ...radius("token(radius-card)") } },
        children: [{ tag: "img", key: `${key}-image`, bind: imageProp, style: { base: { display: "block", width: "100%", height: "16rem", "object-fit": "cover" }, lg: { height: "22rem" } } }],
      },
      { tag: "h3", key: `${key}-title`, bind: titleProp, style: { base: { "margin-top": "0", "margin-bottom": "0.4rem", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.1", "font-weight": "600" } } },
      { tag: "p", key: `note-${key.slice(-1)}`, bind: noteProp, style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.5", ...t(`note-${key.slice(-1)}`) } } },
    ],
  };
}

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "offgrid-04",
  prefix: "offgrid04",
  name: "Off-grid / Staggered columns",
  category: "offgrid",
  description: "Three columns. On a wide screen each one starts lower than the last, and each scrolls at its own speed.",

  props: {
    ...headerProps({ eyebrow: "Down the page", heading: "They do not start on the same line", description: "Chair, field, harbor. Each a step lower." }),
    titleA: { type: "text", default: "The chair" },
    noteA: { type: "text", default: "The first thing you see from the door." },
    titleB: { type: "text", default: "The field" },
    noteB: { type: "text", default: "Late light, and the road back to town." },
    titleC: { type: "text", default: "The harbor" },
    noteC: { type: "text", default: "Where the street ends." },
    imageA: { type: "image", default: shot("1519710164239-da123dc03ef4", "A wooden chair in a pale room") },
    imageB: { type: "image", default: shot("1500382017468-9049fed747ef", "A gold field under a wide sky") },
    imageC: { type: "image", default: shot("1501594907352-04cda38ebc29", "A low pier and still harbor water") },
  },

  variants: { theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }) },
  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" } },
        children: [
          header({ t, layout: "split" }),
          {
            tag: "div", key: "grid",
            style: {
              base: { display: "grid", "grid-template-columns": "minmax(0, 1fr)", "column-gap": "1.5rem", "row-gap": "2.5rem" },
              md: { "grid-template-columns": "repeat(3, minmax(0, 1fr))", "row-gap": "1.5rem" },
            },
            children: [
              column("col-a", "titleA", "noteA", "imageA", "0.2", "0rem"),
              column("col-b", "titleB", "noteB", "imageB", "-0.16", "4rem"),
              column("col-c", "titleC", "noteC", "imageC", "0.28", "8rem"),
            ],
          },
        ],
      }),
    ],
  },
};
