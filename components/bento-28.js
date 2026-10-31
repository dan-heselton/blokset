// Peek atlas: an uneven board of capability cards; the photograph under the pointer fades in.
import { pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  "card-a": { "background-color": "panel", color: "fg" },
  "card-b": { "background-color": "panel", color: "fg" },
  "card-c": { "background-color": "panel", color: "fg" },
  "card-d": { "background-color": "panel", color: "fg" },
  "plate-a": { "background-color": "panel", color: "fg" },
  "plate-b": { "background-color": "panel", color: "fg" },
  "plate-c": { "background-color": "panel", color: "fg" },
  "plate-d": { "background-color": "panel", color: "fg" },
  "note-a": { color: "muted" },
  "note-b": { color: "muted" },
  "note-c": { color: "muted" },
  "note-d": { color: "muted" },
};
const t = (key) => themeBase("dark", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });
const span = (n) => ({ "grid-column-start": `span ${n}`, "grid-column-end": `span ${n}` });
const inset = { top: "0", right: "0", bottom: "0", left: "0" };

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "bento-28",
  prefix: "bento28",
  name: "Bento / Peek atlas",
  category: "bento",
  collection: "marketing",
  description: "An uneven atlas of cards. The first photograph starts open. Moving across the board fades that picture out and the next one in.",

  props: {
    ...headerProps({
      eyebrow: "On the atlas",
      heading: "Rest on a cell",
      description: "Four rooms on one board. The photograph belongs to the cell under your pointer.",
    }),
    cardANumber: { type: "text", default: "01" },
    cardATitle: { type: "text", default: "Discovery" },
    cardANote: { type: "text", default: "Who the site is for, what it has to do, and what we leave off the desk." },
    cardAImage: { type: "image", default: shot("1497366216548-37526070297c", "A bright studio with a long desk") },
    cardBNumber: { type: "text", default: "02" },
    cardBTitle: { type: "text", default: "Direction" },
    cardBNote: { type: "text", default: "Two builds you can click through. We pick one and refine it on real type." },
    cardBImage: { type: "image", default: shot("1519710164239-da123dc03ef4", "A wooden chair in a pale room") },
    cardCNumber: { type: "text", default: "03" },
    cardCTitle: { type: "text", default: "Build" },
    cardCNote: { type: "text", default: "Client-First Webflow or code, with a CMS named the way your team talks." },
    cardCImage: { type: "image", default: shot("1517248135467-4c7edcad34c4", "A bakery dining room") },
    cardDNumber: { type: "text", default: "04" },
    cardDTitle: { type: "text", default: "Launch care" },
    cardDNote: { type: "text", default: "Redirects, analytics, a training call, and thirty days of quiet fixes." },
    cardDImage: { type: "image", default: shot("1501594907352-04cda38ebc29", "A low pier and still harbor water") },
  },

  variants: {
    theme: themeVariant({ default: "dark", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.07, targets: ["eyebrow", "heading", "description", "card-a", "card-b", "card-c", "card-d"] },
  },

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
            tag: "div", key: "atlas", attrs: { "data-blok-peek": "" },
            style: {
              base: { display: "grid", "grid-template-columns": "minmax(0, 1fr)", "column-gap": "0.75rem", "row-gap": "0.75rem", "align-items": "stretch" },
              md: { "grid-template-columns": "repeat(2, minmax(0, 1fr))" },
              lg: { "grid-template-columns": "repeat(12, minmax(0, 1fr))" },
            },
            children: [
              peekCard("a", {
                base: { ...span(1), "min-height": "20rem", "grid-row-start": "auto", "grid-row-end": "auto" },
                lg: { ...span(7), "min-height": "28rem", "grid-row-start": "span 2", "grid-row-end": "span 2" },
              }),
              peekCard("b", {
                base: { ...span(1), "min-height": "16rem" },
                lg: { ...span(5), "min-height": "13.5rem" },
              }),
              peekCard("c", {
                base: { ...span(1), "min-height": "16rem" },
                lg: { ...span(5), "min-height": "13.5rem" },
              }),
              peekCard("d", {
                base: { ...span(1), "min-height": "16rem" },
                md: { ...span(2) },
                lg: { ...span(12), "min-height": "14rem" },
              }),
            ],
          },
        ],
      }),
    ],
  },
};

function peekCard(slot, style) {
  const card = `card-${slot}`;
  const plate = `plate-${slot}`;
  const note = `note-${slot}`;
  const letter = slot.toUpperCase();
  return {
    tag: "div", key: card, attrs: { "data-blok-peek-card": "" },
    style: {
      base: {
        position: "relative", display: "flex", "flex-direction": "column", "justify-content": "flex-end",
        overflow: "hidden", cursor: "pointer", ...radius("token(radius-card)"), ...t(card), ...style.base,
      },
      ...(style.md ? { md: style.md } : {}),
      ...(style.lg ? { lg: style.lg } : {}),
    },
    children: [
      {
        tag: "div", key: `media-${slot}`, attrs: { "data-blok-peek-media": "" },
        style: { base: { position: "absolute", ...inset, "z-index": "0", opacity: "0" } },
        children: [{
          tag: "img", key: `photo-${slot}`, bind: `card${letter}Image`,
          style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } },
        }],
      },
      {
        tag: "div", key: plate,
        style: {
          base: {
            position: "relative", "z-index": "1", display: "flex", "flex-direction": "column", "row-gap": "0.55rem",
            "margin-top": "0", "margin-right": "0.85rem", "margin-bottom": "0.85rem", "margin-left": "0.85rem",
            ...pad("1.1rem"), ...radius("token(radius)"), ...t(plate),
          },
        },
        children: [
          { tag: "div", key: `number-${slot}`, bind: `card${letter}Number`, style: { base: { "font-family": "token(font-mono)", "font-size": "0.75rem", "line-height": "1", "letter-spacing": "0.08em" } } },
          {
            tag: "h3", key: `title-${slot}`, bind: `card${letter}Title`,
            style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.15", "font-weight": "600", "letter-spacing": "-0.03em" } },
          },
          { tag: "p", key: note, bind: `card${letter}Note`, style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "28rem", "font-size": "0.9375rem", "line-height": "1.5", ...t(note) } } },
        ],
      },
    ],
  };
}
