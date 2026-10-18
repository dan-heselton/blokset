// A photograph with floating labels that follow the pointer, beside a short pitch and two cards.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  chip: { color: "fg", "background-color": "panel" },
  heading: { color: "fg" },
  description: { color: "muted" },
  action: { "background-color": "glyph", color: "fg" },
  card: { "background-color": "panel", color: "fg" },
  "card-note": { color: "muted" },
};
const t = (key) => themeBase("dark", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });
const pill = {
  "border-top-left-radius": "999px", "border-top-right-radius": "999px",
  "border-bottom-right-radius": "999px", "border-bottom-left-radius": "999px",
};

function tag(id, bind, place, depth) {
  return {
    tag: "div", key: id, bind, if: "showTags",
    attrs: { "data-blok-pointer-layer": "", "data-blok-depth": depth },
    style: {
      base: {
        position: "absolute", top: place.top, right: place.right, bottom: "auto", left: place.left,
        "z-index": "2", "font-size": "0.75rem", "line-height": "1", "font-weight": "600", "white-space": "nowrap",
        "padding-top": "0.45rem", "padding-right": "0.7rem", "padding-bottom": "0.45rem", "padding-left": "0.7rem",
        "background-color": "token(surface)", color: "token(ink)", ...pill,
      },
    },
  };
}

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "features-62",
  prefix: "features62",
  name: "Features / Tagged image",
  category: "features",
  description: "Labels float over a photograph and drift with the pointer. Beside it: a chip, a headline, one action, and two cards.",

  props: {
    showImage: { type: "boolean", default: true },
    image: { type: "image", default: photo("1500530855697-b586d89ba3ee", "A person standing in a field of yellow flowers") },
    showTags: { type: "boolean", default: true },
    tagA: { type: "text", default: "Editable components" },
    tagB: { type: "text", default: "In-depth customization" },
    tagC: { type: "text", default: "Visionary innovators" },
    tagD: { type: "text", default: "User-friendly" },
    tagE: { type: "text", default: "Transform your brand" },
    tagF: { type: "text", default: "Detailed design flexibility" },
    showChip: { type: "boolean", default: true },
    chip: { type: "text", default: "Stand out" },
    heading: { type: "text", default: "Templates are everywhere. This one isn't like the rest." },
    showDescription: { type: "boolean", default: true },
    description: { type: "text", default: "A modular system for modern brands, blending expressive design, editable components, and next-gen flexibility in one template." },
    showAction: { type: "boolean", default: true },
    action: { type: "text", default: "Buy Template" },
    actionHref: { type: "link", default: "#" },
    showCards: { type: "boolean", default: true },
    cards: {
      type: "list",
      fields: { glyph: "text", title: "text", note: "text" },
      default: [
        { glyph: "01", title: "Edit, expand, or transform.", note: "Any layout to match your unique brand language." },
        { glyph: "02", title: "Structure your site.", note: "Purposeful hierarchy and consistent messaging." },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "dark", options: ["dark", "light", "accent"], map: THEME }),
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
          lg: { "grid-template-columns": "1.05fr 0.95fr", "column-gap": "3rem", "row-gap": "0rem" },
        },
        children: [
          {
            tag: "div", key: "stage", if: "showImage", attrs: { "data-blok-pointer": "" },
            style: { base: { position: "relative", width: "100%", height: "22rem" }, lg: { height: "36rem" } },
            children: [
              {
                tag: "img", key: "image", bind: "image",
                style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover", ...radius("token(radius-card)") } },
              },
              tag("tag-a", "tagA", { top: "12%", right: "8%", left: "auto" }, "0.15"),
              tag("tag-b", "tagB", { top: "28%", right: "auto", left: "4%" }, "0.28"),
              tag("tag-c", "tagC", { top: "42%", right: "auto", left: "10%" }, "-0.12"),
              tag("tag-d", "tagD", { top: "54%", right: "auto", left: "6%" }, "0.22"),
              tag("tag-e", "tagE", { top: "68%", right: "auto", left: "8%" }, "0.18"),
              tag("tag-f", "tagF", { top: "82%", right: "auto", left: "18%" }, "-0.2"),
            ],
          },
          {
            tag: "div", key: "copy",
            style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "1.15rem" } },
            children: [
              { tag: "div", key: "chip", bind: "chip", if: "showChip", style: { base: { ...mono(), "font-size": "0.6875rem", "padding-top": "0.35rem", "padding-right": "0.65rem", "padding-bottom": "0.35rem", "padding-left": "0.65rem", ...pill, ...t("chip") } } },
              {
                tag: "h2", key: "heading", bind: "heading",
                style: {
                  base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "2.5rem", "line-height": "1.02", "font-weight": "600", "letter-spacing": "-0.04em", ...t("heading") },
                  lg: { "font-size": "3.25rem" },
                },
              },
              {
                tag: "p", key: "description", bind: "description", if: "showDescription",
                style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "32rem", "font-size": "1.0625rem", "line-height": "1.6", ...t("description") } },
              },
              {
                tag: "a", key: "action", bind: "action", href: "actionHref", if: "showAction",
                style: {
                  base: {
                    display: "inline-flex", "text-decoration": "none", "font-weight": "600",
                    "padding-top": "0.8rem", "padding-right": "1.15rem", "padding-bottom": "0.8rem", "padding-left": "1.15rem",
                    ...pill, ...t("action"),
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
                  style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.45rem", "padding-top": "1.1rem", "padding-right": "1rem", "padding-bottom": "1.1rem", "padding-left": "1rem", ...radius("token(radius)"), ...t("card") } },
                  children: [
                    { tag: "div", key: "card-glyph", bind: "item.glyph", style: { base: { ...mono(), "letter-spacing": "0em", "text-transform": "none" } } },
                    { tag: "div", key: "card-title", bind: "item.title", style: { base: { "font-size": "1rem", "line-height": "1.3", "font-weight": "600" } } },
                    { tag: "div", key: "card-note", bind: "item.note", style: { base: { "font-size": "0.875rem", "line-height": "1.45", ...t("card-note") } } },
                  ],
                }],
              },
            ],
          },
        ],
      }),
    ],
  },
};
