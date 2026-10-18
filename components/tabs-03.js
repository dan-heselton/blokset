// One wide panel stays open. The others shrink to a vertical label.
import { themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  heading: { color: "fg" },
  column: {
    "background-color": "panel",
    "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line",
  },
  label: { color: "fg", "background-color": "bg" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1600&q=80`, alt });
const edge = {
  "border-top-width": "1px", "border-right-width": "1px", "border-bottom-width": "1px", "border-left-width": "1px",
  "border-top-style": "solid", "border-right-style": "solid", "border-bottom-style": "solid", "border-left-style": "solid",
};

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "tabs-03",
  prefix: "tabs3",
  name: "Tabs / Vertical panels",
  category: "tabs",
  description: "One panel stays open over its photograph and quote. The others shrink to a vertical label. On a phone they stack and open by click.",

  props: {
    heading: { type: "text", default: "Happy clients, better outcomes" },
    panels: {
      type: "list",
      fields: { title: "text", quote: "text", glyph: "text", image: "image" },
      default: [
        { title: "Impact-Focused Approach", glyph: "01", quote: "Clean design and seamless functionality transformed the way we connect with our clients. It's the best investment we've made in our digital presence.", image: shot("1469474968028-56623f02e42e", "A ridge and a pale road through dry hills") },
        { title: "Eco development", glyph: "02", quote: "The build stayed light, and the pages still feel finished.", image: shot("1500530855697-b586d89ba3ee", "Green hills under a pale sky") },
        { title: "Effortless customization", glyph: "03", quote: "Sections come apart and go back together without a rebuild.", image: shot("1497366216548-37526070297c", "A bright studio with a long desk") },
        { title: "Optimized performance", glyph: "04", quote: "The score stayed high after the motion went in.", image: shot("1486406146926-c627a92ad1ab", "A glass facade against a clear sky") },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["heading"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2rem" } },
        children: [
          {
            tag: "h2", key: "heading", bind: "heading",
            style: {
              base: { "margin-top": "0", "margin-bottom": "0", "max-width": "16rem", "font-family": "token(font-serif)", "font-size": "3rem", "line-height": "0.98", "font-weight": "500", "letter-spacing": "-0.03em", ...t("heading") },
              lg: { "max-width": "28rem", "font-size": "4.75rem" },
            },
          },
          {
            tag: "div", key: "columns", repeat: "panels", attrs: { "data-blok-columns": "" },
            style: {
              base: { display: "flex", "flex-direction": "column", "align-items": "stretch", height: "auto", "row-gap": "0.75rem", "column-gap": "0rem" },
              lg: { "flex-direction": "row", height: "28rem", "row-gap": "0rem", "column-gap": "0.75rem" },
            },
            children: [{
              tag: "div", key: "column", attrs: { "data-blok-columns-item": "" },
              style: {
                base: {
                  position: "relative", display: "flex", "flex-direction": "column", "justify-content": "space-between",
                  overflow: "hidden", "min-width": "0px", height: "auto", "flex-grow": "0", "flex-basis": "auto", cursor: "pointer",
                  "padding-top": "0.85rem", "padding-right": "0.85rem", "padding-bottom": "0.85rem", "padding-left": "0.85rem",
                  ...edge, ...t("column"),
                },
                lg: { height: "100%", "flex-grow": "1", "flex-basis": "0px" },
              },
              children: [
                {
                  tag: "h3", key: "label", bind: "item.title", attrs: { "data-blok-columns-label": "" },
                  style: {
                    base: {
                      position: "relative", "z-index": "2", "align-self": "flex-start", "white-space": "nowrap",
                      "margin-top": "0", "margin-bottom": "0",
                      "padding-top": "0.4rem", "padding-right": "0.7rem", "padding-bottom": "0.4rem", "padding-left": "0.7rem",
                      "font-family": "token(font-display)", "font-size": "1.125rem", "line-height": "1.2", "font-weight": "600",
                      ...t("label"),
                    },
                  },
                },
                {
                  tag: "div", key: "glyph", bind: "item.glyph",
                  style: { base: { position: "relative", "z-index": "2", "align-self": "flex-end", "font-family": "token(font-mono)", "font-size": "0.75rem", "line-height": "1", "letter-spacing": "0.08em" } },
                },
                {
                  tag: "div", key: "media", attrs: { "data-blok-columns-media": "" },
                  style: {
                    base: { position: "relative", top: "auto", right: "auto", bottom: "auto", left: "auto", "z-index": "1", overflow: "hidden", width: "100%", height: "auto", opacity: "1" },
                    lg: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", height: "100%" },
                  },
                  children: [
                    {
                      tag: "img", key: "photo", bind: "item.image",
                      style: {
                        base: { display: "block", position: "relative", top: "auto", right: "auto", bottom: "auto", left: "auto", width: "100%", height: "14rem", "object-fit": "cover" },
                        lg: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", height: "100%" },
                      },
                    },
                    {
                      tag: "p", key: "quote", bind: "item.quote",
                      style: {
                        base: {
                          position: "relative", left: "auto", bottom: "auto", "z-index": "2", "max-width": "28rem",
                          "margin-top": "0.85rem", "margin-bottom": "0", color: "token(ink)", "font-size": "0.9375rem", "line-height": "1.5",
                        },
                        lg: { position: "absolute", left: "1.25rem", bottom: "1.25rem", "margin-top": "0rem", color: "token(surface)" },
                      },
                    },
                  ],
                },
              ],
            }],
          },
        ],
      }),
    ],
  },
};
