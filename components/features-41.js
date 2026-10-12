// The product photograph stays put on the left. Notes scroll on the right.
import { radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  "note-text": { color: "muted" },
  index: { color: "glyph" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "features-41",
  prefix: "features41",
  name: "Product / Media left",
  category: "features",
  description: "A product photograph sticks on the left while the notes scroll on the right. On a phone the photo comes first.",

  props: {
    ...headerProps({
      eyebrow: "Object",
      heading: "Harbor lamp",
      description: "Paper, brass, and a cord long enough to reach the table from the wall.",
    }),
    image: { type: "image", default: { src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1600&q=80", alt: "A sunlit room with a wooden chair beside a table" } },
    notes: {
      type: "list",
      fields: { title: "text", text: "text" },
      default: [
        { title: "Shade", text: "Two sheets of paper, sewn at the seam so the light stays warm and the edge stays crisp." },
        { title: "Stem", text: "Brass tube, left unlacquered. It darkens where a hand picks it up." },
        { title: "Cord", text: "Cloth-covered, in the same ink as the shade seam. It is part of the drawing, not an afterthought." },
        { title: "Switch", text: "An inline switch you can find without looking. No app, no dimmer hidden in a menu." },
        { title: "Made here", text: "Small runs in the Rockport studio. When a part changes, the next lamp shows it." },
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
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" } },
        children: [
          header({ t, layout: "stack" }),
          {
            tag: "div", key: "layout",
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "align-items": "start", "grid-column-gap": "0rem", "grid-row-gap": "2rem" },
              lg: { "grid-template-columns": "0.9fr 1.1fr", "grid-column-gap": "4rem", "grid-row-gap": "0rem" },
            },
            children: [
              {
                tag: "div", key: "figure",
                style: { base: { position: "relative", top: "0", overflow: "hidden", "aspect-ratio": "4 / 5", ...radius("token(radius-card)") }, lg: { position: "sticky", top: "6rem" } },
                children: [{ tag: "img", key: "figure-image", bind: "image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } }],
              },
              {
                tag: "div", key: "notes", repeat: "notes",
                style: { base: { display: "flex", "flex-direction": "column" } },
                children: [{
                  tag: "div", key: "note",
                  style: {
                    base: { display: "flex", "flex-direction": "column", "justify-content": "center", "row-gap": "0.6rem", "min-height": "0rem", "padding-top": "1.5rem", "padding-bottom": "1.5rem", "border-top-width": "1px", "border-top-style": "solid", "border-top-color": "token(line)" },
                    lg: { "min-height": "18rem", "padding-top": "2rem", "padding-bottom": "2rem" },
                  },
                  children: [
                    { tag: "div", key: "index", bind: "@index", decorative: true, style: { base: { "font-family": "token(font-mono)", "font-size": "0.75rem", "letter-spacing": "0.08em", ...t("index") } } },
                    { tag: "h3", key: "note-title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1.1", "font-weight": "600", "letter-spacing": "-0.03em" }, lg: { "font-size": "2.25rem" } } },
                    { tag: "p", key: "note-text", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "28rem", "font-size": "1.0625rem", "line-height": "1.6", ...t("note-text") } } },
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
