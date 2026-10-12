// A portrait in the middle, with a stat, two figures, and a note overlapping it.
import { pad, radius, shapeVariant, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  heading: { color: "fg" },
  stat: { "background-color": "glyph", color: "fg" },
  "stat-label": { color: "fg" },
  figure: { color: "fg" },
  "figure-label": { color: "muted" },
  note: { "background-color": "panel", color: "fg" },
  "note-text": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });
const parked = { position: "relative", top: "auto", right: "auto", bottom: "auto", left: "auto" };

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-45",
  prefix: "hero45",
  name: "Hero / Portrait",
  category: "hero",
  description: "A portrait in the middle. A stat overlaps its lower left, two figures sit under the stat, and a note overlaps the right. On a phone the portrait is first.",

  props: {
    heading: { type: "text", default: "The work leaves this desk." },
    showStat: { type: "boolean", default: true, description: "Show the stat card." },
    statValue: { type: "text", default: "48" },
    statLabel: { type: "text", default: "Shipped" },
    showFigures: { type: "boolean", default: true, description: "Show the two figures." },
    figures: {
      type: "list",
      fields: { value: "text", label: "text" },
      default: [
        { value: "12", label: "Years" },
        { value: "2014", label: "Since" },
      ],
    },
    showNote: { type: "boolean", default: true, description: "Show the note." },
    noteTitle: { type: "text", default: "North Shore Arts" },
    noteText: { type: "text", default: "Since 2014. The staff edit the page. That was the point." },
    image: { type: "image", priority: true, default: shot("1494790108377-be9c29b29330", "Portrait of Maren Okafor") },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
    shape: shapeVariant(["portrait", "stat", "note"]),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["heading", "stat", "note"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "align-items": "center", "row-gap": "1.5rem" } },
        children: [
          {
            tag: "h1", key: "heading", bind: "heading",
            style: {
              base: { "margin-top": "0", "margin-bottom": "0", "max-width": "16ch", "text-align": "center", "font-family": "token(font-display)", "font-size": "2.75rem", "line-height": "0.95", "font-weight": "600", "letter-spacing": "-0.045em", ...t("heading") },
              md: { "font-size": "4rem" },
              lg: { "font-size": "5rem" },
            },
          },
          {
            tag: "div", key: "stage",
            style: {
              base: { position: "relative", display: "flex", "flex-direction": "column", "align-items": "center", "row-gap": "1rem", width: "100%", "max-width": "44rem", "margin-left": "auto", "margin-right": "auto", "min-height": "0px" },
              lg: { display: "block", "min-height": "34rem" },
            },
            children: [
              {
                tag: "div", key: "portrait",
                style: {
                  base: { position: "relative", "z-index": "1", overflow: "hidden", width: "100%", "max-width": "22rem", "margin-left": "auto", "margin-right": "auto", ...radius("token(radius-card)") },
                  lg: { width: "22rem" },
                },
                children: [{ tag: "img", key: "image", bind: "image", style: { base: { display: "block", width: "100%", height: "22rem", "object-fit": "cover" }, lg: { height: "28rem" } } }],
              },
              {
                tag: "div", key: "stat", if: "showStat",
                style: {
                  base: { ...parked, "z-index": "2", width: "100%", "max-width": "16rem", ...radius("token(radius-card)"), ...pad("1.25rem"), ...t("stat") },
                  lg: { position: "absolute", top: "auto", right: "auto", bottom: "6.5rem", left: "0", "z-index": "2", width: "15rem", "max-width": "15rem" },
                },
                children: [
                  { tag: "div", key: "stat-value", bind: "statValue", style: { base: { "font-family": "token(font-display)", "font-size": "2.75rem", "line-height": "1", "font-weight": "600" } } },
                  { tag: "div", key: "stat-label", bind: "statLabel", style: { base: { "margin-top": "0.35rem", "font-size": "0.95rem", "line-height": "1.3", ...t("stat-label") } } },
                ],
              },
              {
                tag: "div", key: "figures", repeat: "figures", if: "showFigures",
                style: {
                  base: { ...parked, "z-index": "2", display: "flex", "column-gap": "1.5rem", width: "100%", "max-width": "16rem" },
                  lg: { position: "absolute", top: "auto", right: "auto", bottom: "0.5rem", left: "0", "z-index": "2", width: "15rem", "max-width": "15rem" },
                },
                children: [{
                  tag: "div", key: "figure",
                  children: [
                    { tag: "div", key: "figure-value", bind: "item.value", style: { base: { "font-family": "token(font-display)", "font-size": "2rem", "line-height": "1", "font-weight": "600", ...t("figure") } } },
                    { tag: "div", key: "figure-label", bind: "item.label", style: { base: { "margin-top": "0.3rem", "font-size": "0.9rem", "line-height": "1.3", ...t("figure-label") } } },
                  ],
                }],
              },
              {
                tag: "div", key: "note", if: "showNote",
                style: {
                  base: { ...parked, "z-index": "2", width: "100%", "max-width": "18rem", ...radius("token(radius-card)"), ...pad("1.25rem"), ...t("note") },
                  lg: { position: "absolute", top: "7rem", right: "0", bottom: "auto", left: "auto", "z-index": "2", width: "16rem", "max-width": "16rem" },
                },
                children: [
                  { tag: "h2", key: "note-title", bind: "noteTitle", style: { base: { "margin-top": "0", "margin-bottom": "0.5rem", "font-family": "token(font-display)", "font-size": "1.35rem", "line-height": "1.1", "font-weight": "600" } } },
                  { tag: "p", key: "note-text", bind: "noteText", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.45", ...t("note-text") } } },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
