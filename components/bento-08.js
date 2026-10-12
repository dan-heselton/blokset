// A lens you drag, beside rows that swap the photograph.
import { inset0, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  row: { "border-top-color": "line" },
  "row-text": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "bento-08",
  prefix: "bento08",
  name: "Bento / Lens",
  category: "bento",
  description: "Drag a circle to reveal a second photograph. Beside it, each row swaps the picture. Arrow keys move the circle.",

  props: {
    ...headerProps({ eyebrow: "Look closer", heading: "A circle, and a row that changes the picture", description: "Drag the lens. Or move down the list." }),
    image: { type: "image", default: shot("1519710164239-da123dc03ef4", "A wooden chair in a pale room") },
    reveal: { type: "image", default: shot("1497366216548-37526070297c", "A bright studio with a long desk") },
    figure: { type: "image", default: shot("1500530855697-b586d89ba3ee", "Green hills under a pale sky") },
    rows: {
      type: "list",
      fields: { title: "text", text: "text", image: "image" },
      default: [
        { title: "Harbor", text: "The pier, early.", image: shot("1501594907352-04cda38ebc29", "A low pier and still harbor water") },
        { title: "Field", text: "Late light on the grass.", image: shot("1500382017468-9049fed747ef", "A gold field under a wide sky") },
        { title: "Room", text: "The chair by the window.", image: shot("1519710164239-da123dc03ef4", "A wooden chair in a pale room") },
      ],
    },
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
              lg: { "grid-template-columns": "repeat(3, minmax(0, 1fr))" },
            },
            children: [
              {
                tag: "div", key: "stage", attrs: { "data-blok-lens": "" },
                style: {
                  base: { position: "relative", overflow: "hidden", width: "100%", "aspect-ratio": "16 / 10", cursor: "grab", "grid-column-start": "span 1", "grid-column-end": "span 1", ...radius("token(radius-card)") },
                  lg: { "grid-column-start": "span 2", "grid-column-end": "span 2" },
                },
                children: [
                  { tag: "img", key: "base", bind: "image", style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } } },
                  {
                    tag: "img", key: "reveal", bind: "reveal", attrs: { "data-blok-lens-reveal": "" },
                    style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover", "pointer-events": "none", "clip-path": "circle(88px at 50% 46%)" } },
                  },
                ],
              },
              {
                tag: "div", key: "swap", attrs: { "data-blok-swap": "" },
                style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1rem" } },
                children: [
                  {
                    tag: "div", key: "figure", attrs: { "data-blok-swap-figure": "" },
                    style: { base: { overflow: "hidden", width: "100%", height: "10rem", ...radius("token(radius-card)") } },
                    children: [{ tag: "img", key: "figure-image", bind: "figure", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } }],
                  },
                  {
                    tag: "div", key: "rows", repeat: "rows",
                    style: { base: { display: "flex", "flex-direction": "column" } },
                    children: [{
                      tag: "div", key: "row", attrs: { "data-blok-swap-row": "", "data-blok-src": "=item.image.src", "data-blok-alt": "=item.image.alt" },
                      style: { base: { cursor: "pointer", "padding-top": "0.8rem", "padding-bottom": "0.8rem", "border-top-width": "1px", "border-top-style": "solid", ...t("row") } },
                      children: [
                        { tag: "h3", key: "row-title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0.2rem", "font-family": "token(font-display)", "font-size": "1.25rem", "line-height": "1.1", "font-weight": "600" } } },
                        { tag: "p", key: "row-text", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "0.95rem", "line-height": "1.4", ...t("row-text") } } },
                      ],
                    }],
                  },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
