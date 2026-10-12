// A longer list of points scrolls on the left. The photograph sticks on the right and eases back as you pass it.
import { radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  "point-text": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "features-44",
  prefix: "features44",
  name: "Highlight / Media right",
  category: "features",
  description: "Points scroll on the left. A photograph sticks on the right and slowly zooms back as you move through them.",

  props: {
    ...headerProps({
      eyebrow: "Highlight",
      heading: "What the lamp is made of",
      description: "Scroll the notes. The photograph stays in place and settles as you go.",
    }),
    image: { type: "image", default: { src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1800&q=80", alt: "Sunlight across a wooden chair and a pale wall" } },
    points: {
      type: "list",
      fields: { title: "text", text: "text" },
      default: [
        { title: "Paper that holds a shape", text: "The shade is two sheets, not a molded form. The seam is the joint, and you can see the stitch." },
        { title: "Brass that is allowed to change", text: "No lacquer. The stem marks where it is handled, which is the point of a lamp you move." },
        { title: "A cord you notice", text: "Cloth, ink-colored, long enough for the table that is not against the wall." },
        { title: "Hardware you can replace", text: "The socket and the switch are standard parts. When one fails, the lamp does not." },
        { title: "Light, not a scene", text: "It is meant to read by. The shade keeps the bulb out of your eyes and off the page." },
        { title: "A small run", text: "Made in the studio, a few at a time. The next one can be a little different if the paper is." },
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
              lg: { "grid-template-columns": "1.1fr 0.9fr", "grid-column-gap": "4rem", "grid-row-gap": "0rem" },
            },
            children: [
              {
                tag: "div", key: "figure",
                style: {
                  base: {
                    position: "relative", top: "0", overflow: "hidden", "aspect-ratio": "4 / 5", ...radius("token(radius-card)"),
                    "grid-column-start": "1", "grid-column-end": "2", "grid-row-start": "1", "grid-row-end": "2",
                  },
                  lg: { position: "sticky", top: "6rem", "grid-column-start": "2", "grid-column-end": "3", "grid-row-start": "1", "grid-row-end": "2" },
                },
                children: [{
                  tag: "img", key: "figure-image", bind: "image", attrs: { "data-blok-scroll": "zoom" },
                  style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } },
                }],
              },
              {
                tag: "div", key: "points", repeat: "points",
                style: {
                  base: { display: "flex", "flex-direction": "column", "grid-column-start": "1", "grid-column-end": "2", "grid-row-start": "2", "grid-row-end": "3" },
                  lg: { "grid-column-start": "1", "grid-column-end": "2", "grid-row-start": "1", "grid-row-end": "2" },
                },
                children: [{
                  tag: "div", key: "point",
                  style: {
                    base: { display: "flex", "flex-direction": "column", "justify-content": "center", "row-gap": "0.55rem", "min-height": "0rem", "padding-top": "1.35rem", "padding-bottom": "1.35rem", "border-top-width": "1px", "border-top-style": "solid", "border-top-color": "token(line)" },
                    lg: { "min-height": "16rem" },
                  },
                  children: [
                    { tag: "h3", key: "point-title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.65rem", "line-height": "1.15", "font-weight": "600", "letter-spacing": "-0.03em" }, lg: { "font-size": "2rem" } } },
                    { tag: "p", key: "point-text", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "32rem", "font-size": "1.0625rem", "line-height": "1.6", ...t("point-text") } } },
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
