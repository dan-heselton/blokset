// A short line of characters, then a giant word loop that skews with scroll speed.
import { themeBase, themeVariant } from "./_lib/themes.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  heading: { color: "fg" },
  word: { color: "fg" },
  star: { color: "glyph" },
};
const t = (key) => themeBase("dark", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "logos-05",
  prefix: "logos5",
  name: "Logos / Velocity Marquee",
  category: "logos",
  description: "An intro line rises character by character, then a giant word loop speeds up and skews with the scroll.",

  props: {
    heading: { type: "text", default: "Names we keep" },
    words: {
      type: "list",
      fields: { text: "text" },
      default: [
        { text: "Northwind" },
        { text: "Tidewater" },
        { text: "Halyard" },
        { text: "Saltbox" },
        { text: "Ledgewood" },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "dark", options: ["dark", "light", "accent"], map: THEME }),
  },

  tree: {
    role: "section",
    style: { base: { overflow: "hidden", ...t("section") } },
    children: [
      {
        role: "section-padding", size: "large",
        children: [
          {
            role: "gutter",
            children: [{
              role: "container", size: "large",
              children: [{
                tag: "h2", key: "heading", bind: "heading", attrs: { "data-blok-split": "chars" },
                style: {
                  base: { "margin-top": "0", "margin-bottom": "2rem", "font-family": "token(font-display)", "font-size": "2.5rem", "line-height": "1", "font-weight": "600", "letter-spacing": "-0.04em", ...t("heading") },
                  md: { "font-size": "3.5rem" },
                  lg: { "margin-bottom": "3rem", "font-size": "4.5rem" },
                },
              }],
            }],
          },
          {
            tag: "div", key: "marquee",
            style: { base: { overflow: "hidden" } },
            children: [
              {
                tag: "div", key: "track", repeat: "words", attrs: { "data-blok-marquee": "", "data-blok-speed": "80", "data-blok-velocity": "" },
                style: { base: { display: "flex", width: "max-content", "align-items": "center" } },
                children: [
                  {
                    tag: "div", key: "item",
                    style: { base: { display: "flex", "align-items": "center", "flex-shrink": "0", "column-gap": "1.5rem", "padding-right": "1.5rem" }, lg: { "column-gap": "2.5rem", "padding-right": "2.5rem" } },
                    children: [
                      {
                        tag: "div", key: "word", bind: "item.text",
                        style: {
                          base: { "font-family": "token(font-display)", "font-size": "4rem", "line-height": "1", "font-weight": "500", "letter-spacing": "-0.05em", "white-space": "nowrap", ...t("word") },
                          md: { "font-size": "7rem" },
                          lg: { "font-size": "10rem" },
                        },
                      },
                      { tag: "div", key: "star", text: "✳", decorative: true, style: { base: { "font-size": "2rem", "line-height": "1", ...t("star") }, md: { "font-size": "3.5rem" }, lg: { "font-size": "5rem" } } },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
