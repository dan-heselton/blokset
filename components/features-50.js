// An accordion of oversized numbers. The open row shows a note and a photograph.
import { radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  list: { "border-bottom-color": "line" },
  item: { "border-top-color": "line" },
  number: { color: "fg" },
  note: { color: "muted" },
  icon: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1200&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "features-50",
  prefix: "features50",
  name: "Features / Index",
  category: "features",
  description: "An accordion of oversized numbers. The open row shows a short note and a photograph. The others stay a single line.",

  props: {
    ...headerProps({
      eyebrow: "Index",
      heading: "Numbers that open",
      description: "The closed rows are one line. The open row keeps a note and a photograph.",
    }),
    rows: {
      type: "list",
      fields: { title: "text", note: "text", image: "image" },
      default: [
        { title: "Shop", note: "The room where the pieces are made, and where they stay until they are finished.", image: shot("1519710164239-da123dc03ef4", "The shop, with a chair by the window") },
        { title: "Archive", note: "Drawings, offcuts, and the notes we did not throw away.", image: shot("1497366216548-37526070297c", "A desk covered with notes") },
        { title: "Window", note: "The light we judge color by. It faces north.", image: shot("1500530855697-b586d89ba3ee", "Pale light over a green hill") },
        { title: "Street", note: "The walk from the door to the post office, which is longer than it looks.", image: shot("1501594907352-04cda38ebc29", "A bridge on the way across town") },
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
            tag: "div", key: "list", repeat: "rows", attrs: { "data-blok-accordion": "" },
            style: { base: { "border-bottom-width": "1px", "border-bottom-style": "solid", ...t("list") } },
            children: [{
              tag: "div", key: "item", attrs: { "data-blok-acc-item": "" },
              style: { base: { "border-top-width": "1px", "border-top-style": "solid", ...t("item") } },
              children: [
                {
                  tag: "div", key: "trigger", attrs: { "data-blok-acc-trigger": "" },
                  style: { base: { display: "flex", "align-items": "center", "column-gap": "1.25rem", "padding-top": "0.85rem", "padding-bottom": "0.85rem", cursor: "pointer" }, lg: { "column-gap": "2rem" } },
                  children: [
                    { tag: "div", key: "number", bind: "@index", style: { base: { "flex-shrink": "0", "font-family": "token(font-display)", "font-size": "2.75rem", "line-height": "0.9", "font-weight": "600", "letter-spacing": "-0.05em", ...t("number") }, lg: { "font-size": "4.75rem" } } },
                    { tag: "h3", key: "title", bind: "item.title", style: { base: { "flex-grow": "1", "min-width": "0px", overflow: "hidden", "margin-top": "0", "margin-bottom": "0", "white-space": "nowrap", "text-overflow": "ellipsis", "font-family": "token(font-display)", "font-size": "1.35rem", "line-height": "1.2", "font-weight": "600", "letter-spacing": "-0.03em" }, lg: { "font-size": "2rem" } } },
                    { tag: "div", key: "icon", text: "+", decorative: true, attrs: { "data-blok-acc-icon": "" }, style: { base: { "flex-shrink": "0", "font-size": "1.75rem", "line-height": "1", "font-weight": "300", ...t("icon") } } },
                  ],
                },
                {
                  tag: "div", key: "panel", attrs: { "data-blok-acc-panel": "" },
                  style: {
                    base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "1.25rem", "column-gap": "0rem", "padding-bottom": "1.5rem" },
                    lg: { "flex-direction": "row", "align-items": "center", "column-gap": "2.5rem", "row-gap": "0rem" },
                  },
                  children: [
                    { tag: "p", key: "note", bind: "item.note", style: { base: { "flex-grow": "1", "margin-top": "0", "margin-bottom": "0", "max-width": "36rem", "font-size": "1.0625rem", "line-height": "1.6", ...t("note") } } },
                    { tag: "img", key: "photo", bind: "item.image", style: { base: { display: "block", width: "100%", height: "12rem", "object-fit": "cover", "flex-shrink": "0", ...radius("token(radius-card)") }, lg: { width: "16rem", height: "11rem" } } },
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
