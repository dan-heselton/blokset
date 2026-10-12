// Photographs that drift at different speeds while the page scrolls.
import { pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  "note-card": { "background-color": "panel", color: "fg" },
  "note-text": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1200&q=80`, alt });

function photo(key, prop, speed, span) {
  return {
    tag: "div", key,
    style: {
      base: { position: "relative", overflow: "hidden", "min-height": "14rem", "grid-column-start": "span 1", "grid-column-end": "span 1", ...radius("token(radius-card)") },
      lg: { "grid-column-start": span, "grid-column-end": span, "min-height": "18rem" },
    },
    children: [{
      tag: "img", key: `${key}-image`, bind: prop, attrs: { "data-blok-depth": speed },
      style: { base: { position: "absolute", top: "-20%", right: "0", bottom: "auto", left: "0", width: "100%", height: "140%", "object-fit": "cover" } },
    }],
  };
}

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "bento-07",
  prefix: "bento07",
  name: "Bento / Depth",
  category: "bento",
  description: "Photographs in an uneven grid, each drifting at its own speed as you scroll. A note tile stays with the page.",

  props: {
    ...headerProps({ eyebrow: "Different speeds", heading: "The pictures do not move together", description: "Scroll. Some rise, some lag. The note holds still." }),
    noteTitle: { type: "text", default: "Three speeds" },
    noteText: { type: "text", default: "The harbor is slow. The field is faster. The room barely moves." },
    imageA: { type: "image", default: shot("1501594907352-04cda38ebc29", "A low pier and still harbor water") },
    imageB: { type: "image", default: shot("1500382017468-9049fed747ef", "A gold field under a wide sky") },
    imageC: { type: "image", default: shot("1519710164239-da123dc03ef4", "A wooden chair in a pale room") },
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
            tag: "div", key: "grid",
            style: {
              base: { display: "grid", "grid-template-columns": "minmax(0, 1fr)", "column-gap": "1rem", "row-gap": "1rem" },
              md: { "grid-template-columns": "repeat(2, minmax(0, 1fr))" },
              lg: { "grid-template-columns": "repeat(4, minmax(0, 1fr))" },
            },
            children: [
              photo("photo-a", "imageA", "0.18", "span 2"),
              {
                tag: "div", key: "note-card",
                style: {
                  base: { display: "flex", "flex-direction": "column", "justify-content": "flex-end", "min-height": "14rem", "grid-column-start": "span 1", "grid-column-end": "span 1", ...radius("token(radius-card)"), ...pad("1.5rem"), ...t("note-card") },
                  lg: { "grid-column-start": "span 2", "grid-column-end": "span 2" },
                },
                children: [
                  { tag: "h3", key: "note-title", bind: "noteTitle", style: { base: { "margin-top": "0", "margin-bottom": "0.5rem", "font-family": "token(font-display)", "font-size": "2rem", "line-height": "1.05", "font-weight": "600" } } },
                  { tag: "p", key: "note-text", bind: "noteText", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1.05rem", "line-height": "1.5", ...t("note-text") } } },
                ],
              },
              photo("photo-b", "imageB", "-0.18", "span 2"),
              photo("photo-c", "imageC", "0.12", "span 2"),
            ],
          },
        ],
      }),
    ],
  },
};
