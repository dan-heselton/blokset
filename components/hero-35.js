// A dark, centered headline with one word underlined, then a row of tall oval photographs.
import { themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  headline: { color: "fg" },
  word: { color: "fg", "border-bottom-color": "glyph" },
  description: { color: "muted" },
};
const t = (key) => themeBase("dark", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=900&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-35",
  prefix: "hero35",
  name: "Hero / Oval row",
  category: "hero",
  description: "A centered headline with one word underlined, a single action, and four tall oval photographs. The ovals rise in together.",

  props: {
    before: { type: "text", default: "Teach the team." },
    word: { type: "text", default: "Then" },
    after: { type: "text", default: "leave the keys." },
    showDescription: { type: "boolean", default: true, description: "Show the line under the headline." },
    description: { type: "text", default: "One afternoon in the room. After that, the people who work there can publish without us." },
    showButtons: { type: "boolean", default: true, description: "Show the action button." },
    buttons: {
      type: "buttons",
      max: 1,
      default: [{ title: "Read more", href: "#", variant: "primary" }],
    },
    showPhotos: { type: "boolean", default: true, description: "Show the oval photographs." },
    photos: {
      type: "list",
      fields: { image: "image" },
      default: [
        { image: shot("1503676260728-1c00da094a0b", "Children reading at a classroom table") },
        { image: shot("1427504494785-3a9ca7044f45", "Students with their hands raised") },
        { image: shot("1509062522246-3755977927d7", "A classroom seen from the back row") },
        { image: shot("1577896851231-70ef18881754", "Students working at their desks") },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "dark", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["headline", "description", "actions"] },
    reveal: { preset: "fade-up", targets: ["oval"] },
  },

  tree: {
    role: "section",
    style: { base: { overflow: "hidden", ...t("section") } },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "align-items": "center", "row-gap": "2rem", "text-align": "center" } },
        children: [
          {
            tag: "h1", key: "headline",
            style: {
              base: { display: "flex", "flex-wrap": "wrap", "justify-content": "center", "align-items": "baseline", "column-gap": "0.4rem", "row-gap": "0.2rem", "margin-top": "0", "margin-bottom": "0", "max-width": "22ch", "font-family": "token(font-display)", "font-size": "2.25rem", "line-height": "1.15", "font-weight": "600", "letter-spacing": "-0.03em", ...t("headline") },
              md: { "font-size": "3rem" },
              lg: { "font-size": "3.5rem" },
            },
            children: [
              {
                tag: "div", key: "before", bind: "before",
                style: { base: { display: "inline" } },
              },
              {
                tag: "div", key: "word", bind: "word",
                style: {
                  base: { display: "inline", "border-bottom-width": "3px", "border-bottom-style": "solid", "padding-bottom": "0.15rem", ...t("word") },
                },
              },
              {
                tag: "div", key: "after", bind: "after",
                style: { base: { display: "inline" } },
              },
            ],
          },
          {
            tag: "p", key: "description", bind: "description", if: "showDescription",
            style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "36rem", "font-size": "1rem", "line-height": "1.55", ...t("description") } },
          },
          { tag: "div", key: "actions", repeat: "buttons", if: "showButtons" },
          {
            tag: "div", key: "row", repeat: "photos", if: "showPhotos",
            style: {
              base: { display: "grid", "grid-template-columns": "1fr 1fr", "column-gap": "0.75rem", "row-gap": "0.75rem", width: "100%", "margin-top": "0.5rem" },
              lg: { "grid-template-columns": "repeat(4, minmax(0, 1fr))", "column-gap": "1.25rem", "row-gap": "0rem" },
            },
            children: [{
              tag: "div", key: "oval",
              style: { base: { overflow: "hidden", width: "100%", "aspect-ratio": "3 / 4", "border-top-left-radius": "999px", "border-top-right-radius": "999px", "border-bottom-right-radius": "999px", "border-bottom-left-radius": "999px" } },
              children: [
                { tag: "img", key: "photo", bind: "item.image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } },
              ],
            }],
          },
        ],
      }),
    ],
  },
};
