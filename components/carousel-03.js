// Wide photographs with a caption. The same slider as the cards: add a frame by adding a list item.
import { border, mono, pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  caption: { color: "muted" },
  count: { color: "muted" },
  prev: { color: "fg", "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line" },
  next: { color: "fg", "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1800&q=80`, alt });
const control = (key) => ({
  base: { ...mono(), cursor: "pointer", ...pad("0.75rem"), ...border(t(key)["border-top-color"]), ...radius("999px"), ...t(key) },
});

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "carousel-03",
  prefix: "carousel3",
  name: "Slider / Frames",
  category: "carousel",
  description: "Wide photographs with a caption. Add a list item to add a frame. Arrows and a swipe move them.",

  props: {
    ...headerProps({
      eyebrow: "Frames",
      heading: "Rooms we keep coming back to",
      description: "A large frame and a sliver of the next one. The row grows when you add a photograph.",
    }),
    frames: {
      type: "list",
      fields: { title: "text", caption: "text", image: "image" },
      default: [
        { title: "Morning table", caption: "Rockport, before the shop opens.", image: photo("1519710164239-da123dc03ef4", "Sunlit room with a wooden chair and a table") },
        { title: "The corridor", caption: "A long room we use to judge type at a distance.", image: photo("1497366216548-37526070297c", "A long office corridor") },
        { title: "North light", caption: "The window the color studies sit under.", image: photo("1500530855697-b586d89ba3ee", "Green hills under a pale sky") },
        { title: "Harbor walk", caption: "The long way back from the post office.", image: photo("1501594907352-04cda38ebc29", "A bridge spanning blue water") },
        { title: "After hours", caption: "The bakery, once the cases are empty.", image: photo("1517248135467-4c7edcad34c4", "A bakery interior after closing") },
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
            tag: "div", key: "slider", attrs: { "data-blok-slider": "" },
            style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1.25rem" } },
            children: [
              {
                tag: "div", key: "controls",
                style: { base: { display: "flex", "align-items": "center", "column-gap": "0.75rem" } },
                children: [
                  { tag: "div", key: "count", text: "01 / 05", attrs: { "data-blok-slider-count": "" }, style: { base: { ...mono(), "margin-right": "auto", ...t("count") } } },
                  { tag: "div", key: "prev", text: "Previous", attrs: { "data-blok-slider-prev": "" }, style: control("prev") },
                  { tag: "div", key: "next", text: "Next", attrs: { "data-blok-slider-next": "" }, style: control("next") },
                ],
              },
              {
                tag: "div", key: "viewport",
                style: { base: { overflow: "hidden", width: "100%" } },
                children: [{
                  tag: "div", key: "track", repeat: "frames", attrs: { "data-blok-slider-track": "" },
                  style: { base: { display: "flex", width: "100%", "column-gap": "1rem", "touch-action": "pan-y" }, lg: { "column-gap": "1.25rem" } },
                  children: [{
                    tag: "div", key: "frame", attrs: { "data-blok-slider-card": "" },
                    style: { base: { "flex-shrink": "0", width: "86%" }, lg: { width: "72%" } },
                    children: [
                      { tag: "img", key: "frame-image", bind: "item.image", style: { base: { display: "block", width: "100%", "aspect-ratio": "16 / 10", "object-fit": "cover", ...radius("token(radius-card)") }, lg: { "aspect-ratio": "16 / 9" } } },
                      {
                        tag: "div", key: "frame-meta",
                        style: { base: { display: "flex", "justify-content": "space-between", "align-items": "baseline", "column-gap": "1rem", "margin-top": "0.9rem" } },
                        children: [
                          { tag: "h3", key: "frame-title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.35rem", "line-height": "1.2", "font-weight": "600", "letter-spacing": "-0.02em" } } },
                          { tag: "div", key: "caption", bind: "item.caption", style: { base: { ...mono(), "text-align": "right", ...t("caption") } } },
                        ],
                      },
                    ],
                  }],
                }],
              },
            ],
          },
        ],
      }),
    ],
  },
};
