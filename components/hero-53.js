// A headline and two cards beside a solid accent field of rings, avatars, and dots.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  chip: { color: "muted" },
  heading: { color: "fg" },
  description: { color: "muted" },
  action: { "background-color": "glyph", color: "fg" },
  card: { "background-color": "panel", color: "fg" },
  "card-note": { color: "muted" },
  stage: { "background-color": "glyph" },
  disc: { "background-color": "bg" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=400&q=80`, alt });
const pill = {
  "border-top-left-radius": "999px", "border-top-right-radius": "999px",
  "border-bottom-right-radius": "999px", "border-bottom-left-radius": "999px",
};
const ringEdge = {
  "border-top-width": "1px", "border-right-width": "1px", "border-bottom-width": "1px", "border-left-width": "1px",
  "border-top-style": "solid", "border-right-style": "solid", "border-bottom-style": "solid", "border-left-style": "solid",
};

function ring(id, inset) {
  return {
    tag: "div", key: id, decorative: true,
    style: {
      base: {
        position: "absolute", top: inset, right: inset, bottom: inset, left: inset,
        ...ringEdge,
        "border-top-color": "token(surface)", "border-right-color": "token(surface)", "border-bottom-color": "token(surface)", "border-left-color": "token(surface)",
        ...pill,
      },
    },
  };
}

function face(id, bind, place, depth) {
  return {
    tag: "img", key: id, bind, if: "showFaces",
    attrs: { "data-blok-pointer-layer": "", "data-blok-depth": depth },
    style: {
      base: {
        position: "absolute", top: place.top, right: place.right, bottom: place.bottom, left: place.left,
        width: "4.5rem", height: "4.5rem", "object-fit": "cover", "z-index": "2",
        "border-top-width": "3px", "border-right-width": "3px", "border-bottom-width": "3px", "border-left-width": "3px",
        "border-top-style": "solid", "border-right-style": "solid", "border-bottom-style": "solid", "border-left-style": "solid",
        "border-top-color": "token(surface)", "border-right-color": "token(surface)", "border-bottom-color": "token(surface)", "border-left-color": "token(surface)",
        ...pill,
      },
    },
  };
}

function dot(id, place, depth) {
  return {
    tag: "div", key: id, decorative: true,
    attrs: { "data-blok-pointer-layer": "", "data-blok-depth": depth },
    style: {
      base: {
        position: "absolute", top: place.top, right: place.right, bottom: "auto", left: place.left,
        width: "0.7rem", height: "0.7rem", "z-index": "2", "background-color": "token(ink)", ...pill,
      },
    },
  };
}

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-53",
  prefix: "hero53",
  name: "Hero / Orbit",
  category: "hero",
  description: "A headline, an accent action, and two cards. Beside them, rings, portraits, and dots drift with the pointer.",

  props: {
    showChip: { type: "boolean", default: true },
    chip: { type: "text", default: "Designed by expert" },
    heading: { type: "text", default: "Design with intention. Lead with distinction." },
    showDescription: { type: "boolean", default: true },
    description: { type: "text", default: "Gives your brand the tools to cut through noise, using layouts, type, and pictures that pull your audience in." },
    showAction: { type: "boolean", default: true },
    action: { type: "text", default: "Buy Template" },
    actionHref: { type: "link", default: "#" },
    showCards: { type: "boolean", default: true },
    cards: {
      type: "list",
      fields: { glyph: "text", title: "text", note: "text" },
      default: [
        { glyph: "01", title: "Define what matters.", note: "Present it with precision and aesthetics." },
        { glyph: "02", title: "Engage your audience.", note: "Through meaningful design systems." },
      ],
    },
    showFaces: { type: "boolean", default: true },
    faceA: { type: "image", default: photo("1500648767791-00dcc994a43e", "Portrait of a person in a cap") },
    faceB: { type: "image", default: photo("1507003211169-0a1dd7228f2d", "Portrait of a person smiling") },
    faceC: { type: "image", default: photo("1494790108377-be9c29b29330", "Portrait of a person outdoors") },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["chip", "heading", "description"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: {
          base: { display: "grid", "grid-template-columns": "1fr", "align-items": "center", "row-gap": "2.5rem", "column-gap": "0rem" },
          lg: { "grid-template-columns": "1fr 1fr", "column-gap": "3rem", "row-gap": "0rem" },
        },
        children: [
          {
            tag: "div", key: "copy",
            style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "1.25rem" } },
            children: [
              { tag: "div", key: "chip", bind: "chip", if: "showChip", style: { base: { ...mono(), ...t("chip") } } },
              {
                tag: "h1", key: "heading", bind: "heading",
                style: {
                  base: { "margin-top": "0", "margin-bottom": "0", "max-width": "18rem", "font-family": "token(font-display)", "font-size": "2.75rem", "line-height": "1.02", "font-weight": "600", "letter-spacing": "-0.04em", ...t("heading") },
                  lg: { "font-size": "3.5rem" },
                },
              },
              {
                tag: "p", key: "description", bind: "description", if: "showDescription",
                style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "28rem", "font-size": "1.0625rem", "line-height": "1.6", ...t("description") } },
              },
              {
                tag: "a", key: "action", bind: "action", href: "actionHref", if: "showAction",
                style: {
                  base: {
                    display: "inline-flex", "align-items": "center", "column-gap": "0.4rem", "text-decoration": "none", "font-weight": "600",
                    "padding-top": "0.8rem", "padding-right": "1.15rem", "padding-bottom": "0.8rem", "padding-left": "1.15rem",
                    ...radius("999px"), ...t("action"),
                  },
                },
              },
              {
                tag: "div", key: "cards", repeat: "cards", if: "showCards",
                style: {
                  base: { display: "grid", "grid-template-columns": "1fr", "row-gap": "0.75rem", "column-gap": "0rem", width: "100%", "margin-top": "0.5rem" },
                  md: { "grid-template-columns": "1fr 1fr", "column-gap": "0.75rem", "row-gap": "0rem" },
                },
                children: [{
                  tag: "div", key: "card",
                  style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.45rem", "padding-top": "1.1rem", "padding-right": "1rem", "padding-bottom": "1.1rem", "padding-left": "1rem", ...radius("token(radius-card)"), ...t("card") } },
                  children: [
                    { tag: "div", key: "card-glyph", bind: "item.glyph", style: { base: { ...mono(), "letter-spacing": "0em", "text-transform": "none" } } },
                    { tag: "div", key: "card-title", bind: "item.title", style: { base: { "font-size": "1rem", "line-height": "1.3", "font-weight": "600" } } },
                    { tag: "div", key: "card-note", bind: "item.note", style: { base: { "font-size": "0.875rem", "line-height": "1.45", ...t("card-note") } } },
                  ],
                }],
              },
            ],
          },
          {
            tag: "div", key: "stage", attrs: { "data-blok-pointer": "" },
            style: {
              base: {
                position: "relative", display: "flex", "align-items": "center", "justify-content": "center",
                width: "100%", height: "22rem", overflow: "hidden", ...radius("token(radius-card)"), ...t("stage"),
              },
              lg: { height: "34rem" },
            },
            children: [
              ring("ring-a", "1.25rem"),
              ring("ring-b", "3.25rem"),
              ring("ring-c", "5.25rem"),
              {
                tag: "div", key: "disc", decorative: true,
                style: {
                  base: {
                    position: "relative", "z-index": "2", display: "grid", "grid-template-columns": "1fr 1fr",
                    "row-gap": "0.45rem", "column-gap": "0.45rem", width: "6.5rem", height: "6.5rem",
                    "padding-top": "1.35rem", "padding-right": "1.35rem", "padding-bottom": "1.35rem", "padding-left": "1.35rem",
                    ...t("disc"), ...pill,
                  },
                },
                children: ["square-a", "square-b", "square-c", "square-d"].map((key) => ({
                  tag: "div", key, decorative: true,
                  style: { base: { width: "100%", height: "100%", "background-color": "token(ink)", ...radius("0.35rem") } },
                })),
              },
              face("face-a", "faceA", { top: "1.5rem", right: "1.5rem", bottom: "auto", left: "auto" }, "0.35"),
              face("face-b", "faceB", { top: "auto", right: "auto", bottom: "2rem", left: "2rem" }, "0.2"),
              face("face-c", "faceC", { top: "auto", right: "2.5rem", bottom: "4.5rem", left: "auto" }, "-0.15"),
              dot("dot-a", { top: "3rem", right: "auto", left: "38%" }, "0.45"),
              dot("dot-b", { top: "46%", right: "1.25rem", left: "auto" }, "0.25"),
            ],
          },
        ],
      }),
    ],
  },
};
