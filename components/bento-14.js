// A dense mosaic: notes, three photographs, and the figures we can point at.
import { inset0, pad, radius, shapeVariant, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  note: { "background-color": "panel", color: "fg" },
  wide: { "background-color": "panel", color: "fg" },
  "wide-text": { color: "muted" },
  figure: { "background-color": "card" },
  statement: { "background-color": "panel", color: "fg" },
  count: { "background-color": "panel", color: "fg" },
  "count-label": { color: "muted" },
  line: { "background-color": "panel", color: "fg" },
  "line-text": { color: "muted" },
  caption: { "background-color": "panel", color: "fg" },
  "caption-text": { color: "muted" },
};
const t = (key) => themeBase("dark", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });
const span = (n) => ({ "grid-column-start": `span ${n}`, "grid-column-end": `span ${n}` });

function photo(key, bind) {
  return {
    tag: "div", key,
    style: {
      base: { position: "relative", overflow: "hidden", "min-height": "12rem", "grid-row-start": "auto", "grid-row-end": "auto", ...span(1), ...radius("token(radius-card)") },
    },
    children: [{ tag: "img", key: `${key}-image`, bind, style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } } }],
  };
}

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "bento-14",
  prefix: "bento14",
  name: "Bento / Mosaic",
  category: "bento",
  description: "A dense board: three photographs, a note, a caption, a wide line, a large figure, and two smaller counts.",

  props: {
    note: { type: "text", default: "On the bench this week. Halyard, second pass." },
    image: { type: "image", default: shot("1519710164239-da123dc03ef4", "A wooden chair in a pale room") },
    imageB: { type: "image", default: shot("1501594907352-04cda38ebc29", "A low pier and still harbor water") },
    imageC: { type: "image", default: shot("1497366216548-37526070297c", "A bright studio with a long desk") },
    captionTitle: { type: "text", default: "Tidewater" },
    captionText: { type: "text", default: "The photographs from Friday. Named, cropped, ready to ship." },
    wideTitle: { type: "text", default: "The page, named." },
    wideText: { type: "text", default: "North Shore Arts. The staff can edit it." },
    figureValue: { type: "text", default: "48" },
    figureLabel: { type: "text", default: "Shipped" },
    statement: { type: "text", default: "A sentence the room can stand behind." },
    countValue: { type: "text", default: "12" },
    countLabel: { type: "text", default: "Years" },
    lineTitle: { type: "text", default: "Open" },
    lineText: { type: "text", default: "Six pages still on the desk." },
  },

  variants: {
    theme: themeVariant({ default: "dark", options: ["light", "dark", "accent"], map: THEME }),
    shape: shapeVariant(["note", "photo", "photo-b", "photo-c", "caption", "wide", "figure", "statement", "count", "line"]),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.06, targets: ["note", "wide", "figure", "caption"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "grid",
        style: {
          base: { display: "grid", "grid-template-columns": "minmax(0, 1fr)", "column-gap": "0.75rem", "row-gap": "0.75rem" },
          md: { "grid-template-columns": "repeat(2, minmax(0, 1fr))" },
          lg: { "grid-template-columns": "repeat(4, minmax(0, 1fr))" },
        },
        children: [
          { tag: "div", key: "note", bind: "note", style: { base: { ...span(1), "min-height": "8rem", ...radius("token(radius-card)"), ...pad("1.1rem"), ...t("note") } } },
          {
            ...photo("photo", "image"),
            style: {
              base: { position: "relative", overflow: "hidden", "min-height": "12rem", "grid-row-start": "auto", "grid-row-end": "auto", ...span(1), ...radius("token(radius-card)") },
              lg: { "grid-row-start": "span 2", "grid-row-end": "span 2", "min-height": "18rem" },
            },
          },
          {
            tag: "div", key: "wide",
            style: { base: { ...span(1), "min-height": "8rem", ...radius("token(radius-card)"), ...pad("1.1rem"), ...t("wide") }, md: { ...span(2) }, lg: { ...span(2) } },
            children: [
              { tag: "h2", key: "wide-title", bind: "wideTitle", style: { base: { "margin-top": "0", "margin-bottom": "0.4rem", "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1.05", "font-weight": "600" } } },
              { tag: "p", key: "wide-text", bind: "wideText", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.45", ...t("wide-text") } } },
            ],
          },
          photo("photo-b", "imageB"),
          {
            tag: "div", key: "figure",
            style: { base: { display: "flex", "flex-direction": "column", "justify-content": "flex-end", "min-height": "12rem", color: "token(surface)", "grid-row-start": "auto", "grid-row-end": "auto", ...span(1), ...radius("token(radius-card)"), ...pad("1.25rem"), ...t("figure") }, lg: { ...span(2), "min-height": "14rem" } },
            children: [
              { tag: "div", key: "figure-value", bind: "figureValue", style: { base: { "font-family": "token(font-display)", "font-size": "4rem", "line-height": "0.9", "font-weight": "600" }, lg: { "font-size": "6rem" } } },
              { tag: "div", key: "figure-label", bind: "figureLabel", style: { base: { "margin-top": "0.4rem", "font-size": "1rem", "line-height": "1.3", color: "token(surface)" } } },
            ],
          },
          { tag: "div", key: "statement", bind: "statement", style: { base: { "min-height": "8rem", ...span(1), ...radius("token(radius-card)"), ...pad("1.1rem"), "font-family": "token(font-display)", "font-size": "1.35rem", "line-height": "1.15", "font-weight": "600", ...t("statement") }, lg: { ...span(2) } } },
          {
            ...photo("photo-c", "imageC"),
            style: {
              base: { position: "relative", overflow: "hidden", "min-height": "12rem", "grid-row-start": "auto", "grid-row-end": "auto", ...span(1), ...radius("token(radius-card)") },
              lg: { ...span(2) },
            },
          },
          {
            tag: "div", key: "caption",
            style: { base: { "min-height": "8rem", ...span(1), ...radius("token(radius-card)"), ...pad("1.1rem"), ...t("caption") }, md: { ...span(2) } },
            children: [
              { tag: "h3", key: "caption-title", bind: "captionTitle", style: { base: { "margin-top": "0", "margin-bottom": "0.35rem", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1", "font-weight": "600" } } },
              { tag: "p", key: "caption-text", bind: "captionText", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.4", ...t("caption-text") } } },
            ],
          },
          {
            tag: "div", key: "count",
            style: { base: { display: "flex", "flex-direction": "column", "justify-content": "flex-end", "min-height": "8rem", ...span(1), ...radius("token(radius-card)"), ...pad("1.1rem"), ...t("count") }, lg: { ...span(2) } },
            children: [
              { tag: "div", key: "count-value", bind: "countValue", style: { base: { "font-family": "token(font-display)", "font-size": "2.5rem", "line-height": "1", "font-weight": "600" } } },
              { tag: "div", key: "count-label", bind: "countLabel", style: { base: { "margin-top": "0.3rem", "font-size": "0.9rem", ...t("count-label") } } },
            ],
          },
          {
            tag: "div", key: "line",
            style: { base: { "min-height": "8rem", ...span(1), ...radius("token(radius-card)"), ...pad("1.1rem"), ...t("line") }, md: { ...span(2) }, lg: { ...span(4) } },
            children: [
              { tag: "h3", key: "line-title", bind: "lineTitle", style: { base: { "margin-top": "0", "margin-bottom": "0.35rem", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1", "font-weight": "600" } } },
              { tag: "p", key: "line-text", bind: "lineText", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.4", ...t("line-text") } } },
            ],
          },
        ],
      }),
    ],
  },
};
