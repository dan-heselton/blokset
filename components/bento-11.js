// A wide photograph, three figures, and a second photograph. No badge.
import { inset0, pad, radius, shapeVariant, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  stat: { "background-color": "panel", color: "fg" },
  "stat-label": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1600&q=80`, alt });
const span = (n) => ({ "grid-column-start": `span ${n}`, "grid-column-end": `span ${n}` });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "bento-11",
  prefix: "bento11",
  name: "Bento / Proof",
  category: "bento",
  description: "A headline, a wide photograph, three figures, and a second photograph.",

  props: {
    ...headerProps({ eyebrow: "What we can point at", heading: "The year, in three numbers", description: "Not a scoreboard. The work that left the desk." }),
    image: { type: "image", default: shot("1469474968028-56623f02e42e", "A sunlit ridge and a valley of pines") },
    imageB: { type: "image", default: shot("1501594907352-04cda38ebc29", "A low pier and still harbor water") },
    stats: {
      type: "list",
      fields: { value: "text", label: "text" },
      default: [
        { value: "48", label: "Shipped" },
        { value: "12", label: "Years" },
        { value: "6", label: "Open" },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
    shape: shapeVariant(["photo", "photo-b", "stat"]),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2rem" } },
        children: [
          header({ t, layout: "split" }),
          {
            tag: "div", key: "grid",
            style: {
              base: { display: "grid", "grid-template-columns": "minmax(0, 1fr)", "column-gap": "1rem", "row-gap": "1rem" },
              md: { "grid-template-columns": "repeat(2, minmax(0, 1fr))" },
              lg: { "grid-template-columns": "repeat(3, minmax(0, 1fr))" },
            },
            children: [
              {
                tag: "div", key: "photo",
                style: {
                  base: { position: "relative", overflow: "hidden", "min-height": "16rem", ...span(1), ...radius("token(radius-card)") },
                  md: { ...span(2) },
                  lg: { ...span(2), "min-height": "22rem" },
                },
                children: [{ tag: "img", key: "image", bind: "image", style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } } }],
              },
              {
                tag: "div", key: "photo-b",
                style: {
                  base: { position: "relative", overflow: "hidden", "min-height": "14rem", ...span(1), ...radius("token(radius-card)") },
                  md: { ...span(2) },
                  lg: { ...span(1), "min-height": "22rem" },
                },
                children: [{ tag: "img", key: "image-b", bind: "imageB", style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } } }],
              },
              {
                tag: "div", key: "stats", repeat: "stats",
                style: {
                  base: { display: "grid", "grid-template-columns": "minmax(0, 1fr)", "column-gap": "1rem", "row-gap": "1rem", ...span(1) },
                  md: { "grid-template-columns": "repeat(3, minmax(0, 1fr))", ...span(2) },
                  lg: { ...span(3) },
                },
                children: [{
                  tag: "div", key: "stat",
                  style: { base: { display: "flex", "flex-direction": "column", "justify-content": "flex-end", "min-height": "8rem", ...radius("token(radius-card)"), ...pad("1.1rem"), ...t("stat") } },
                  children: [
                    { tag: "div", key: "stat-value", bind: "item.value", style: { base: { "font-family": "token(font-display)", "font-size": "2rem", "line-height": "1", "font-weight": "600" } } },
                    { tag: "div", key: "stat-label", bind: "item.label", style: { base: { "margin-top": "0.35rem", "font-size": "0.9rem", "line-height": "1.3", ...t("stat-label") } } },
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
