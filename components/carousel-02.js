// A row of cards you can extend by adding list items. Arrows, a count, and a short swipe.
import { border, mono, pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  text: { color: "muted" },
  count: { color: "muted" },
  prev: { color: "fg", "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line" },
  next: { color: "fg", "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });
const control = (key) => ({
  base: { ...mono(), cursor: "pointer", ...pad("0.75rem"), ...border(t(key)["border-top-color"]), ...radius("999px"), ...t(key) },
});

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "carousel-02",
  prefix: "carousel2",
  name: "Slider / Cards",
  category: "carousel",
  description: "Image cards with a title and a short note. Add a list item to add a card. Arrows and a swipe move the row.",

  props: {
    ...headerProps({
      eyebrow: "In the studio",
      heading: "A few things on the bench",
      description: "One card on a phone, three with a peek on a wide screen. The list is as long as you need.",
    }),
    cards: {
      type: "list",
      fields: { title: "text", text: "text", image: "image" },
      default: [
        { title: "Harbor lamp", text: "A paper shade and a brass stem, made in small runs at the Rockport bench.", image: photo("1519710164239-da123dc03ef4", "Sunlit room with a wooden chair") },
        { title: "Field chair", text: "Ash frame, a woven seat, and a joint you can see from across the room.", image: photo("1500530855697-b586d89ba3ee", "Green hills under a pale sky") },
        { title: "Desk tray", text: "One piece of bent steel for pencils, clips, and the note you meant to file.", image: photo("1497366216548-37526070297c", "A bright office with long desks") },
        { title: "Wall shelf", text: "Oak, two brackets, and enough depth for a row of books that actually get opened.", image: photo("1486406146926-c627a92ad1ab", "A modern glass facade") },
        { title: "Door pull", text: "Cast bronze, left a little rough where the hand lands.", image: photo("1501594907352-04cda38ebc29", "A red bridge over blue water") },
        { title: "Sample book", text: "Cloth, paper, and the colors we are actually willing to print.", image: photo("1517248135467-4c7edcad34c4", "A warm bakery interior") },
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
          header({ t }),
          {
            tag: "div", key: "slider", attrs: { "data-blok-slider": "" },
            style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1.25rem" } },
            children: [
              {
                tag: "div", key: "controls",
                style: { base: { display: "flex", "align-items": "center", "column-gap": "0.75rem" } },
                children: [
                  { tag: "div", key: "count", text: "01 / 06", attrs: { "data-blok-slider-count": "" }, style: { base: { ...mono(), "margin-right": "auto", ...t("count") } } },
                  { tag: "div", key: "prev", text: "Previous", attrs: { "data-blok-slider-prev": "" }, style: control("prev") },
                  { tag: "div", key: "next", text: "Next", attrs: { "data-blok-slider-next": "" }, style: control("next") },
                ],
              },
              {
                tag: "div", key: "viewport",
                style: { base: { overflow: "hidden", width: "100%" } },
                children: [{
                  tag: "div", key: "track", repeat: "cards", attrs: { "data-blok-slider-track": "" },
                  style: { base: { display: "flex", width: "100%", "column-gap": "1rem", "touch-action": "pan-y" }, lg: { "column-gap": "1.25rem" } },
                  children: [{
                    tag: "div", key: "card", attrs: { "data-blok-slider-card": "" },
                    style: { base: { "flex-shrink": "0", width: "84%" }, lg: { width: "calc((100% - 3rem) / 3.3)" } },
                    children: [
                      { tag: "img", key: "card-image", bind: "item.image", style: { base: { display: "block", width: "100%", "aspect-ratio": "4 / 5", "object-fit": "cover", ...radius("token(radius-card)") } } },
                      { tag: "h3", key: "card-title", bind: "item.title", style: { base: { "margin-top": "1rem", "margin-bottom": "0.35rem", "font-family": "token(font-display)", "font-size": "1.35rem", "line-height": "1.15", "font-weight": "600", "letter-spacing": "-0.02em" } } },
                      { tag: "p", key: "text", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.5", ...t("text") } } },
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
