// Page-colored cards cut into a wide photograph.
import { pad, radius, shapeVariant, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  label: { "background-color": "bg", color: "fg" },
  heading: { "background-color": "bg", color: "fg" },
  figure: { "background-color": "card" },
  note: { "background-color": "panel", color: "fg" },
  "note-text": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=2000&q=80`, alt });
const parked = { position: "relative", top: "auto", right: "auto", bottom: "auto", left: "auto" };

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-41",
  prefix: "hero41",
  name: "Hero / Board",
  category: "hero",
  description: "A wide photograph with the page color cut into it: a label, the headline, a figure, and a project note. On a phone the photograph sits between the headline and the note.",

  props: {
    label: { type: "text", default: "Blokset" },
    showLabel: { type: "boolean", default: true, description: "Show the label." },
    heading: { type: "text", default: "A studio for the work, not the pitch." },
    showFigure: { type: "boolean", default: true, description: "Show the figure card." },
    figureValue: { type: "text", default: "48" },
    figureLabel: { type: "text", default: "Shipped" },
    showNote: { type: "boolean", default: true, description: "Show the project note." },
    noteTitle: { type: "text", default: "Last page" },
    noteText: { type: "text", default: "Halyard, the week the staff took the CMS." },
    noteLink: { type: "text", default: "See the page" },
    noteHref: { type: "link", default: "#" },
    image: { type: "image", priority: true, default: shot("1555041469-a586c61ea9bc", "A low sofa and a cushion in a quiet room") },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
    shape: shapeVariant(["photo", "label", "heading", "figure", "note"]),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["label", "heading", "figure", "note"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0rem" } },
        children: [
          {
            tag: "div", key: "stage",
            style: {
              base: { position: "relative", display: "flex", "flex-direction": "column", "align-items": "stretch", "row-gap": "0.75rem", width: "100%", "min-height": "0px" },
              lg: { display: "block", "min-height": "36rem" },
            },
            children: [
              {
                tag: "div", key: "label", bind: "label", if: "showLabel",
                style: {
                  base: { ...parked, "z-index": "1", display: "inline-block", "align-self": "flex-start", ...radius("token(radius-card)"), ...pad({ top: "0.7rem", right: "1rem", bottom: "0.7rem", left: "1rem" }), ...t("label") },
                  lg: { position: "absolute", top: "0", right: "auto", bottom: "auto", left: "0", "border-top-left-radius": "0px", "border-top-right-radius": "0px", "border-bottom-left-radius": "0px", "border-bottom-right-radius": "1.25rem" },
                },
              },
              {
                tag: "h1", key: "heading", bind: "heading",
                style: {
                  base: { ...parked, "z-index": "1", "margin-top": "0", "margin-bottom": "0", "max-width": "none", "font-family": "token(font-display)", "font-size": "2.25rem", "line-height": "1", "font-weight": "600", "letter-spacing": "-0.04em", ...radius("token(radius-card)"), ...pad("1.15rem"), ...t("heading") },
                  md: { "font-size": "2.75rem" },
                  lg: { position: "absolute", top: "auto", right: "auto", bottom: "0", left: "0", "max-width": "14rem", "font-size": "2.75rem", "border-top-left-radius": "0px", "border-top-right-radius": "1.5rem", "border-bottom-left-radius": "0px", "border-bottom-right-radius": "0px" },
                },
              },
              {
                tag: "div", key: "photo",
                style: { base: { overflow: "hidden", width: "100%", "min-height": "22rem", ...radius("token(radius-card)") }, lg: { "min-height": "36rem" } },
                children: [{
                  tag: "img", key: "image", bind: "image",
                  style: { base: { display: "block", width: "100%", height: "22rem", "object-fit": "cover" }, lg: { height: "36rem" } },
                }],
              },
              {
                tag: "div", key: "figure", if: "showFigure",
                style: {
                  base: { ...parked, "z-index": "1", width: "100%", "max-width": "none", color: "token(surface)", "text-align": "center", ...radius("token(radius-card)"), ...pad("1.15rem"), ...t("figure") },
                  lg: { position: "absolute", top: "1.25rem", right: "1.25rem", bottom: "auto", left: "auto", width: "11rem", "max-width": "11rem" },
                },
                children: [
                  { tag: "div", key: "figure-value", bind: "figureValue", style: { base: { "font-family": "token(font-display)", "font-size": "2.75rem", "line-height": "1", "font-weight": "600", color: "token(surface)" } } },
                  { tag: "div", key: "figure-label", bind: "figureLabel", style: { base: { "margin-top": "0.35rem", "font-size": "0.9rem", "line-height": "1.3", color: "token(surface)" } } },
                ],
              },
              {
                tag: "div", key: "note", if: "showNote",
                style: {
                  base: { ...parked, "z-index": "1", width: "100%", "max-width": "none", ...radius("token(radius-card)"), ...pad("1.15rem"), ...t("note") },
                  lg: { position: "absolute", top: "auto", right: "1.25rem", bottom: "1.25rem", left: "auto", width: "16rem", "max-width": "16rem" },
                },
                children: [
                  { tag: "h2", key: "note-title", bind: "noteTitle", style: { base: { "margin-top": "0", "margin-bottom": "0.4rem", "font-family": "token(font-display)", "font-size": "1.2rem", "line-height": "1.1", "font-weight": "600" } } },
                  { tag: "p", key: "note-text", bind: "noteText", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "0.95rem", "line-height": "1.45", ...t("note-text") } } },
                  { tag: "a", key: "note-link", href: "noteHref", bind: "noteLink", style: { base: { display: "inline-block", "margin-top": "0.85rem", color: "inherit", "font-size": "0.95rem" } } },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
