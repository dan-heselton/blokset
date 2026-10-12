// Four cards that tilt toward the pointer.
import { pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  "card-note": { "background-color": "panel", color: "fg" },
  "card-accent": { "background-color": "glyph", color: "fg" },
  "note-text": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1200&q=80`, alt });
const face = { ...radius("token(radius-card)"), overflow: "hidden", "min-height": "16rem" };

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "bento-04",
  prefix: "bento04",
  name: "Bento / Tilt",
  category: "bento",
  description: "Photographs and notes in a four-up grid. On a fine pointer each card tilts toward the cursor and settles when you leave.",

  props: {
    ...headerProps({ eyebrow: "A light lean", heading: "Cards that notice the pointer", description: "Move across them. They tip, then sit flat again." }),
    noteTitle: { type: "text", default: "Friday preview" },
    noteText: { type: "text", default: "You see the pages in the browser, not in a deck." },
    accentText: { type: "text", default: "One street. One desk. The harbor if the window is open." },
    imageA: { type: "image", default: shot("1441974231531-c6227db76b6e", "Sun through a stand of trees") },
    imageB: { type: "image", default: shot("1501594907352-04cda38ebc29", "A low pier and still harbor water") },
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
            tag: "div", key: "grid", attrs: { "data-blok-tilt": "" },
            style: {
              base: { display: "grid", "grid-template-columns": "minmax(0, 1fr)", "column-gap": "1rem", "row-gap": "1rem" },
              md: { "grid-template-columns": "repeat(2, minmax(0, 1fr))" },
              lg: { "grid-template-columns": "repeat(4, minmax(0, 1fr))" },
            },
            children: [
              {
                tag: "div", key: "card-a", attrs: { "data-blok-tilt-card": "" },
                style: { base: { ...face } },
                children: [{ tag: "img", key: "image-a", bind: "imageA", style: { base: { display: "block", width: "100%", height: "16rem", "object-fit": "cover" } } }],
              },
              {
                tag: "div", key: "card-note", attrs: { "data-blok-tilt-card": "" },
                style: { base: { display: "flex", "flex-direction": "column", "justify-content": "flex-end", ...face, ...pad("1.5rem"), ...t("card-note") } },
                children: [
                  { tag: "h3", key: "note-title", bind: "noteTitle", style: { base: { "margin-top": "0", "margin-bottom": "0.5rem", "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1.1", "font-weight": "600" } } },
                  { tag: "p", key: "note-text", bind: "noteText", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.5", ...t("note-text") } } },
                ],
              },
              {
                tag: "div", key: "card-accent", attrs: { "data-blok-tilt-card": "" },
                style: { base: { display: "flex", "align-items": "flex-end", ...face, ...pad("1.5rem"), ...t("card-accent") } },
                children: [
                  { tag: "p", key: "accent-text", bind: "accentText", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.65rem", "line-height": "1.15", "font-weight": "600", "letter-spacing": "-0.03em" } } },
                ],
              },
              {
                tag: "div", key: "card-b", attrs: { "data-blok-tilt-card": "" },
                style: { base: { ...face } },
                children: [{ tag: "img", key: "image-b", bind: "imageB", style: { base: { display: "block", width: "100%", height: "16rem", "object-fit": "cover" } } }],
              },
            ],
          },
        ],
      }),
    ],
  },
};
