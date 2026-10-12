// A headline and one action, then one large card and two stacked cards.
import { inset0, pad, radius, shapeVariant, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  large: { "background-color": "panel", color: "fg" },
  "large-text": { color: "muted" },
  top: { "background-color": "panel", color: "fg" },
  "top-text": { color: "muted" },
  bottom: { "background-color": "panel", color: "fg" },
  "bottom-text": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1600&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "bento-18",
  prefix: "bento18",
  name: "Bento / Split",
  category: "bento",
  description: "A headline and one action, then one large card and two stacked cards.",

  props: {
    ...headerProps({ eyebrow: "From the desk", heading: "The page, and the two things beside it", description: "One photograph that holds the line. Two notes that do not." }),
    showButtons: { type: "boolean", default: true, description: "Show the action." },
    buttons: { type: "buttons", max: 1, default: [{ title: "See the work", href: "#", variant: "dark" }] },
    largeTitle: { type: "text", default: "Built for the people who publish it" },
    largeText: { type: "text", default: "The staff can change a line on Friday without opening a ticket." },
    largeImage: { type: "image", default: shot("1497366216548-37526070297c", "A bright studio with a long desk") },
    topTitle: { type: "text", default: "The words" },
    topText: { type: "text", default: "Short enough to read standing up." },
    topImage: { type: "image", default: shot("1486406146926-c627a92ad1ab", "A glass facade against a clear sky") },
    bottomTitle: { type: "text", default: "The pictures" },
    bottomText: { type: "text", default: "Named, cropped, and light enough to ship." },
    bottomImage: { type: "image", default: shot("1501594907352-04cda38ebc29", "A low pier and still harbor water") },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
    shape: shapeVariant(["large", "large-shot", "top", "top-shot", "bottom", "bottom-shot"]),
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
          {
            tag: "div", key: "top-row",
            style: {
              base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "justify-content": "flex-start", "row-gap": "1.25rem", "column-gap": "0rem" },
              lg: { "flex-direction": "row", "align-items": "flex-end", "justify-content": "space-between", "column-gap": "2rem", "row-gap": "0rem" },
            },
            children: [
              header({ t, layout: "stack" }),
              { tag: "div", key: "actions", repeat: "buttons", if: "showButtons", style: { base: { display: "flex" } } },
            ],
          },
          {
            tag: "div", key: "grid",
            style: {
              base: { display: "grid", "grid-template-columns": "minmax(0, 1fr)", "column-gap": "1rem", "row-gap": "1rem" },
              lg: { "grid-template-columns": "minmax(0, 1.3fr) minmax(0, 0.7fr)" },
            },
            children: [
              {
                tag: "div", key: "large",
                style: { base: { display: "flex", "flex-direction": "column", "justify-content": "flex-end", "min-height": "18rem", overflow: "hidden", ...radius("token(radius-card)"), ...t("large") }, lg: { "min-height": "26rem" } },
                children: [
                  {
                    tag: "div", key: "large-shot",
                    style: { base: { position: "relative", overflow: "hidden", width: "100%", height: "12rem" }, lg: { height: "16rem" } },
                    children: [{ tag: "img", key: "large-image", bind: "largeImage", style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } } }],
                  },
                  {
                    tag: "div", key: "large-copy",
                    style: { base: { ...pad("1.25rem") } },
                    children: [
                      { tag: "h3", key: "large-title", bind: "largeTitle", style: { base: { "margin-top": "0", "margin-bottom": "0.4rem", "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1.05", "font-weight": "600" } } },
                      { tag: "p", key: "large-text", bind: "largeText", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.45", ...t("large-text") } } },
                    ],
                  },
                ],
              },
              {
                tag: "div", key: "stack",
                style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1rem" } },
                children: [
                  {
                    tag: "div", key: "top",
                    style: { base: { ...radius("token(radius-card)"), ...pad("1rem"), ...t("top") } },
                    children: [
                      {
                        tag: "div", key: "top-shot",
                        style: { base: { position: "relative", overflow: "hidden", width: "100%", height: "7rem", ...radius("token(radius-card)") } },
                        children: [{ tag: "img", key: "top-image", bind: "topImage", style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } } }],
                      },
                      { tag: "h3", key: "top-title", bind: "topTitle", style: { base: { "margin-top": "0.85rem", "margin-bottom": "0.3rem", "font-family": "token(font-display)", "font-size": "1.25rem", "line-height": "1.1", "font-weight": "600" } } },
                      { tag: "p", key: "top-text", bind: "topText", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "0.95rem", "line-height": "1.4", ...t("top-text") } } },
                    ],
                  },
                  {
                    tag: "div", key: "bottom",
                    style: { base: { ...radius("token(radius-card)"), ...pad("1rem"), ...t("bottom") } },
                    children: [
                      {
                        tag: "div", key: "bottom-shot",
                        style: { base: { position: "relative", overflow: "hidden", width: "100%", height: "7rem", ...radius("token(radius-card)") } },
                        children: [{ tag: "img", key: "bottom-image", bind: "bottomImage", style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } } }],
                      },
                      { tag: "h3", key: "bottom-title", bind: "bottomTitle", style: { base: { "margin-top": "0.85rem", "margin-bottom": "0.3rem", "font-family": "token(font-display)", "font-size": "1.25rem", "line-height": "1.1", "font-weight": "600" } } },
                      { tag: "p", key: "bottom-text", bind: "bottomText", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "0.95rem", "line-height": "1.4", ...t("bottom-text") } } },
                    ],
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
