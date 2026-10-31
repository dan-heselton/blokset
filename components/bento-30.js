// Lightbox board: a dense mosaic of photographs and a note; click opens a captioned dialog.
import { inset0, mono, pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  note: { "background-color": "panel", color: "fg" },
  "note-text": { color: "muted" },
  pull: { "background-color": "panel", color: "fg" },
  "pull-meta": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });
const span = (n) => ({ "grid-column-start": `span ${n}`, "grid-column-end": `span ${n}` });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "bento-30",
  prefix: "bento30",
  name: "Bento / Lightbox board",
  category: "bento",
  collection: "marketing",
  description: "A dense board of photographs and notes. Click a frame to open it larger. The dialog stays hidden without JavaScript.",

  props: {
    ...headerProps({
      eyebrow: "Studio frames",
      heading: "Open a cell",
      description: "The board holds the work at a glance. A click brings one photograph forward.",
    }),
    noteTitle: { type: "text", default: "This week" },
    noteText: { type: "text", default: "Four shoots. Two still on the card. One already in the CMS." },
    pull: { type: "text", default: "Name the frame. Crop it once. Ship it." },
    pullMeta: { type: "text", default: "Desk note" },
    image: { type: "image", default: shot("1519710164239-da123dc03ef4", "Sunlit gallery interior") },
    caption: { type: "text", default: "North Shore Arts, gallery interior" },
    photoA: { type: "image", default: shot("1519710164239-da123dc03ef4", "Sunlit gallery interior") },
    captionA: { type: "text", default: "North Shore Arts, gallery interior" },
    photoB: { type: "image", default: shot("1517248135467-4c7edcad34c4", "Warm restaurant interior") },
    captionB: { type: "text", default: "Saltbox Bakery, dining room" },
    photoC: { type: "image", default: shot("1497366216548-37526070297c", "Open plan office") },
    captionC: { type: "text", default: "Halyard, the studio we borrowed" },
    photoD: { type: "image", default: shot("1486406146926-c627a92ad1ab", "Glass building facade") },
    captionD: { type: "text", default: "Ledgewood, street facade" },
    photoE: { type: "image", default: shot("1501594907352-04cda38ebc29", "Rocky coastline at dusk") },
    captionE: { type: "text", default: "Tidewater, the harbor" },
    photoF: { type: "image", default: shot("1500530855697-b586d89ba3ee", "Green hills at sunrise") },
    captionF: { type: "text", default: "High Pasture, early light" },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.06, targets: ["eyebrow", "heading", "description", "note", "pull", "frame-a", "frame-b"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component", attrs: { "data-blok-lightbox": "" },
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" } },
        children: [
          header({ t, layout: "split" }),
          {
            tag: "div", key: "grid",
            style: {
              base: { display: "grid", "grid-template-columns": "minmax(0, 1fr)", "column-gap": "0.75rem", "row-gap": "0.75rem", "align-items": "stretch" },
              md: { "grid-template-columns": "repeat(2, minmax(0, 1fr))" },
              lg: { "grid-template-columns": "repeat(12, minmax(0, 1fr))" },
            },
            children: [
              frame("a", {
                base: { ...span(1), "min-height": "14rem", "aspect-ratio": "auto", "grid-row-start": "auto", "grid-row-end": "auto" },
                lg: { ...span(7), "min-height": "26rem", "grid-row-start": "span 2", "grid-row-end": "span 2" },
              }),
              {
                tag: "div", key: "note",
                style: {
                  base: { display: "flex", "flex-direction": "column", "justify-content": "flex-end", "row-gap": "0.5rem", "min-height": "10rem", ...span(1), ...radius("token(radius-card)"), ...pad("1.25rem"), ...t("note") },
                  lg: { ...span(5), "min-height": "12rem" },
                },
                children: [
                  {
                    tag: "h3", key: "note-title", bind: "noteTitle",
                    style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.1", "font-weight": "600", "letter-spacing": "-0.02em" } },
                  },
                  { tag: "p", key: "note-text", bind: "noteText", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.5", ...t("note-text") } } },
                ],
              },
              frame("b", {
                base: { ...span(1), "min-height": "12rem" },
                lg: { ...span(5), "min-height": "12rem" },
              }),
              frame("c", {
                base: { ...span(1), "min-height": "12rem" },
                lg: { ...span(4), "min-height": "14rem" },
              }),
              frame("d", {
                base: { ...span(1), "min-height": "12rem" },
                lg: { ...span(4), "min-height": "14rem" },
              }),
              {
                tag: "div", key: "pull",
                style: {
                  base: { display: "flex", "flex-direction": "column", "justify-content": "space-between", "row-gap": "1.25rem", "min-height": "10rem", ...span(1), ...radius("token(radius-card)"), ...pad("1.25rem"), ...t("pull") },
                  md: { ...span(2) },
                  lg: { ...span(4), "min-height": "14rem" },
                },
                children: [
                  {
                    tag: "p", key: "pull-line", bind: "pull",
                    style: {
                      base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.35rem", "line-height": "1.2", "font-weight": "600", "letter-spacing": "-0.02em" },
                      lg: { "font-size": "1.6rem" },
                    },
                  },
                  { tag: "div", key: "pull-meta", bind: "pullMeta", style: { base: { "font-size": "0.875rem", "line-height": "1.4", ...t("pull-meta") } } },
                ],
              },
              frame("e", {
                base: { ...span(1), "min-height": "12rem" },
                lg: { ...span(6), "min-height": "16rem" },
              }),
              frame("f", {
                base: { ...span(1), "min-height": "12rem" },
                lg: { ...span(6), "min-height": "16rem" },
              }),
            ],
          },
          {
            tag: "div", key: "dialog", attrs: { "data-blok-lightbox-dialog": "", hidden: "" },
            style: {
              base: {
                position: "fixed", top: "0", right: "0", bottom: "0", left: "0", "z-index": "30",
                display: "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center",
                "row-gap": "1rem", "background-color": "token(overlay-strong)", ...pad("1.25rem"),
              },
            },
            children: [
              {
                tag: "div", key: "close", text: "Close", attrs: { "data-blok-lightbox-close": "" },
                style: { base: { ...mono(), cursor: "pointer", "align-self": "flex-end", color: "token(surface)" } },
              },
              {
                tag: "div", key: "dialog-media",
                style: { base: { width: "100%", "max-width": "64rem", overflow: "hidden", "aspect-ratio": "16 / 10", ...radius("token(radius-card)") } },
                children: [{
                  tag: "img", key: "dialog-image", bind: "image", attrs: { "data-blok-lightbox-image": "" },
                  style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } },
                }],
              },
              {
                tag: "p", key: "dialog-caption", bind: "caption", attrs: { "data-blok-lightbox-caption": "" },
                style: { base: { "margin-top": "0", "margin-bottom": "0", ...mono(), color: "token(surface)" } },
              },
            ],
          },
        ],
      }),
    ],
  },
};

function frame(slot, style) {
  const letter = slot.toUpperCase();
  return {
    tag: "div", key: `frame-${slot}`,
    attrs: { "data-blok-lightbox-item": "", "data-blok-caption": `=caption${letter}` },
    style: {
      base: { cursor: "pointer", position: "relative", overflow: "hidden", ...radius("token(radius-card)"), ...style.base },
      ...(style.md ? { md: style.md } : {}),
      ...(style.lg ? { lg: style.lg } : {}),
    },
    children: [{
      tag: "img", key: `frame-${slot}-image`, bind: `photo${letter}`,
      style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } },
    }],
  };
}
