// Oversized type, a still life, and three thumbnails.
import { radius, shapeVariant, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  heading: { color: "fg" },
  word: { color: "fg", "border-bottom-color": "glyph" },
  description: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-43",
  prefix: "hero43",
  name: "Hero / Still life",
  category: "hero",
  description: "Oversized type on the left, one word underlined, a still-life photograph on the right, and three thumbnails along the bottom.",

  props: {
    before: { type: "text", default: "Artistry in" },
    word: { type: "text", default: "every" },
    after: { type: "text", default: "detail." },
    showDescription: { type: "boolean", default: true, description: "Show the line under the headline." },
    description: { type: "text", default: "Pieces from the shop on Main Street. The page names them and then gets out of the way." },
    showButtons: { type: "boolean", default: true, description: "Show the action." },
    buttons: { type: "buttons", max: 1, default: [{ title: "See the pieces", href: "#", variant: "dark" }] },
    image: { type: "image", priority: true, default: shot("1519710164239-da123dc03ef4", "A wooden chair in a pale room") },
    showThumbs: { type: "boolean", default: true, description: "Show the thumbnails." },
    thumbs: {
      type: "list",
      fields: { image: "image" },
      default: [
        { image: shot("1500530855697-b586d89ba3ee", "Green hills under a pale sky") },
        { image: shot("1486406146926-c627a92ad1ab", "A glass facade against a clear sky") },
        { image: shot("1501594907352-04cda38ebc29", "A low pier and still harbor water") },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
    shape: shapeVariant(["photo", "thumb"]),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["heading", "description", "actions"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1.5rem" } },
        children: [
          {
            tag: "div", key: "top",
            style: {
              base: { display: "flex", "flex-direction": "column", "align-items": "stretch", "row-gap": "1.5rem", "column-gap": "0rem" },
              lg: { "flex-direction": "row", "align-items": "center", "column-gap": "2rem", "row-gap": "0rem" },
            },
            children: [
              {
                tag: "div", key: "copy",
                style: { base: { width: "100%" }, lg: { width: "46%" } },
                children: [
                  {
                    tag: "h1", key: "heading",
                    style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "0.1rem", "margin-top": "0", "margin-bottom": "0", ...t("heading") } },
                    children: [
                      { tag: "div", key: "before", bind: "before", style: { base: { "font-family": "token(font-display)", "font-size": "2.75rem", "line-height": "0.95", "font-weight": "600", "letter-spacing": "-0.04em" }, lg: { "font-size": "4rem" } } },
                      {
                        tag: "div", key: "word", bind: "word",
                        style: { base: { "border-bottom-width": "3px", "border-bottom-style": "solid", "padding-bottom": "0.1rem", "font-family": "token(font-display)", "font-size": "2.75rem", "line-height": "0.95", "font-weight": "600", "letter-spacing": "-0.04em", ...t("word") }, lg: { "font-size": "4rem" } },
                      },
                      { tag: "div", key: "after", bind: "after", style: { base: { "font-family": "token(font-display)", "font-size": "2.75rem", "line-height": "0.95", "font-weight": "600", "letter-spacing": "-0.04em" }, lg: { "font-size": "4rem" } } },
                    ],
                  },
                  {
                    tag: "p", key: "description", bind: "description", if: "showDescription",
                    style: { base: { "margin-top": "1.25rem", "margin-bottom": "0", "max-width": "28rem", "font-size": "1.05rem", "line-height": "1.55", ...t("description") } },
                  },
                  { tag: "div", key: "actions", repeat: "buttons", if: "showButtons", style: { base: { display: "flex", "margin-top": "1.5rem" } } },
                ],
              },
              {
                tag: "div", key: "photo",
                style: { base: { overflow: "hidden", width: "100%", ...radius("token(radius-card)") }, lg: { width: "54%" } },
                children: [{ tag: "img", key: "image", bind: "image", style: { base: { display: "block", width: "100%", height: "18rem", "object-fit": "cover" }, lg: { height: "26rem" } } }],
              },
            ],
          },
          {
            tag: "div", key: "thumbs", repeat: "thumbs", if: "showThumbs",
            style: {
              base: { display: "grid", "grid-template-columns": "repeat(3, minmax(0, 1fr))", "column-gap": "0.75rem", width: "100%", "max-width": "22rem" },
            },
            children: [{
              tag: "div", key: "thumb",
              style: { base: { overflow: "hidden", width: "100%", height: "5.5rem", ...radius("token(radius-card)") } },
              children: [{ tag: "img", key: "thumb-image", bind: "item.image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } }],
            }],
          },
        ],
      }),
    ],
  },
};
