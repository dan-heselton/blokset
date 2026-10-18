// Perspective curve carousel: stacked slides with previous and next controls.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  stage: { "background-color": "panel" },
  "slide-title": { color: "fg" },
  counter: { color: "muted" },
  prev: { color: "fg", "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line" },
  next: { color: "fg", "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });
const pill = {
  "border-top-left-radius": "999px", "border-top-right-radius": "999px",
  "border-bottom-right-radius": "999px", "border-bottom-left-radius": "999px",
};
const control = (key) => ({
  base: {
    ...mono(), cursor: "pointer",
    "padding-top": "0.75rem", "padding-right": "0.75rem", "padding-bottom": "0.75rem", "padding-left": "0.75rem",
    "border-top-width": "1px", "border-right-width": "1px", "border-bottom-width": "1px", "border-left-width": "1px",
    "border-top-style": "solid", "border-right-style": "solid", "border-bottom-style": "solid", "border-left-style": "solid",
    ...pill, ...t(key),
  },
});

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "carousel-04",
  prefix: "carousel4",
  name: "Carousel / Curve",
  category: "carousel",
  description: "A perspective curve stack: the active slide stays opaque on top, neighbors sit solid but dimmed beside it, and farther cards fall back. Previous and next rotate the stack.",

  props: {
    showCounter: { type: "boolean", default: true },
    counter: { type: "text", default: "01 / 04" },
    slides: {
      type: "list",
      fields: { title: "text", image: "image" },
      default: [
        { title: "Harbor walk", image: photo("1501594907352-04cda38ebc29", "Bridge over calm water at dusk") },
        { title: "Studio table", image: photo("1519710164239-da123dc03ef4", "Sunlit room with a wooden chair") },
        { title: "North light", image: photo("1500530855697-b586d89ba3ee", "Rolling green hills under soft sky") },
        { title: "Stillwater", image: photo("1540541338287-41700207dee6", "Swimmer in a pool at dusk") },
      ],
    },
  },

  variants: {
    theme: themeVariant({
      default: "light",
      options: ["light", "dark", "accent"],
      map: {
        section: THEME.section,
        stage: THEME.stage,
        "slide-title": THEME["slide-title"],
        counter: THEME.counter,
        prev: THEME.prev,
        next: THEME.next,
      },
    }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["stage", "controls"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component", attrs: { "data-blok-curve": "" },
        style: { base: { display: "flex", "flex-direction": "column", "align-items": "stretch", "row-gap": "1.25rem" } },
        children: [
          {
            tag: "div", key: "stage",
            style: {
              base: {
                position: "relative", overflow: "hidden", perspective: "1200px",
                "min-height": "20rem", "padding-top": "2rem", "padding-right": "1.25rem", "padding-bottom": "2rem", "padding-left": "1.25rem",
                ...radius("1.5rem"), ...t("stage"),
              },
              lg: { "min-height": "26rem", "padding-top": "2.5rem", "padding-right": "2rem", "padding-bottom": "2.5rem", "padding-left": "2rem" },
            },
            children: [{
              tag: "div", key: "slides", repeat: "slides",
              style: { base: { position: "relative", width: "100%", height: "100%", "min-height": "16rem" }, lg: { "min-height": "21rem" } },
              children: [{
                tag: "div", key: "slide", attrs: { "data-blok-slide": "" },
                style: {
                  base: {
                    position: "absolute", top: "0", right: "12%", bottom: "0", left: "12%",
                    display: "flex", "flex-direction": "column", "justify-content": "flex-end", overflow: "hidden",
                    "transform-style": "preserve-3d", ...radius("1rem"),
                  },
                },
                children: [
                  { tag: "img", key: "slide-image", bind: "item.image", style: { base: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", width: "100%", height: "100%", "object-fit": "cover", "z-index": "0" } } },
                  {
                    tag: "div", key: "slide-scrim", decorative: true,
                    style: { base: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", "z-index": "1", "background-color": "token(ink)", opacity: "0.3" } },
                  },
                  {
                    tag: "h3", key: "slide-title", bind: "item.title",
                    style: {
                      base: {
                        position: "relative", "z-index": "2", "margin-top": "0", "margin-bottom": "0",
                        "padding-top": "1.25rem", "padding-right": "1.25rem", "padding-bottom": "1.25rem", "padding-left": "1.25rem",
                        "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.15", "font-weight": "600", "letter-spacing": "-0.02em", color: "token(surface)",
                      },
                      lg: { "font-size": "2rem" },
                    },
                  },
                ],
              }],
            }],
          },
          {
            tag: "div", key: "controls",
            style: { base: { display: "flex", "align-items": "center", "justify-content": "space-between", "column-gap": "1rem" } },
            children: [
              { tag: "div", key: "counter", bind: "counter", if: "showCounter", style: { base: { ...mono(), ...t("counter") } } },
              {
                tag: "div", key: "nav",
                style: { base: { display: "flex", "column-gap": "0.5rem", "margin-left": "auto" } },
                children: [
                  { tag: "div", key: "prev", text: "Previous", attrs: { "data-blok-curve-prev": "" }, style: control("prev") },
                  { tag: "div", key: "next", text: "Next", attrs: { "data-blok-curve-next": "" }, style: control("next") },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
