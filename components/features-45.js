// A row of titles. Opening one shows its photograph and squeezes the others to a vertical label.
import { themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  column: {
    "background-color": "bg",
    "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line",
  },
  label: { color: "fg", "background-color": "bg" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });
const edge = {
  "border-top-width": "1px", "border-right-width": "1px", "border-bottom-width": "1px", "border-left-width": "1px",
  "border-top-style": "solid", "border-right-style": "solid", "border-bottom-style": "solid", "border-left-style": "solid",
};

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "features-45",
  prefix: "features45",
  name: "Features / Columns",
  category: "features",
  description: "A row of titles. Hover, focus, or click opens that column into its photograph and squeezes the others to a vertical label. On a phone they stack and open by click, one at a time.",

  props: {
    ...headerProps({
      eyebrow: "Rooms",
      heading: "Open a column",
      description: "Each title keeps a photograph. One stays open. The others wait as a label.",
    }),
    columns: {
      type: "list",
      fields: { title: "text", image: "image" },
      default: [
        { title: "Material", image: shot("1519710164239-da123dc03ef4", "A wooden chair in a pale room") },
        { title: "Daylight", image: shot("1500530855697-b586d89ba3ee", "Green hills in soft light") },
        { title: "Joinery", image: shot("1497366216548-37526070297c", "A long studio desk") },
        { title: "Finish", image: shot("1486406146926-c627a92ad1ab", "A glass facade against a clear sky") },
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
            tag: "div", key: "columns", repeat: "columns", attrs: { "data-blok-columns": "" },
            style: {
              base: { display: "flex", "flex-direction": "column", "align-items": "stretch", height: "auto", "row-gap": "0.75rem", "column-gap": "0rem" },
              lg: { "flex-direction": "row", height: "36rem", "row-gap": "0rem", "column-gap": "0.75rem" },
            },
            children: [{
              tag: "div", key: "column", attrs: { "data-blok-columns-item": "" },
              style: {
                base: {
                  position: "relative", display: "flex", "flex-direction": "column", "justify-content": "flex-start",
                  overflow: "hidden", "min-width": "0px", height: "auto", "flex-grow": "0", "flex-basis": "auto", cursor: "pointer",
                  "padding-top": "0.75rem", "padding-right": "0.75rem", "padding-bottom": "0.75rem", "padding-left": "0.75rem",
                  ...edge, ...t("column"),
                },
                lg: { height: "100%", "flex-grow": "1", "flex-basis": "0px" },
              },
              children: [
                {
                  tag: "h3", key: "label", bind: "item.title", attrs: { "data-blok-columns-label": "" },
                  style: {
                    base: {
                      position: "relative", "z-index": "2", "align-self": "flex-start",
                      "margin-top": "0", "margin-bottom": "0", "white-space": "nowrap",
                      "padding-top": "0.45rem", "padding-right": "0.75rem", "padding-bottom": "0.45rem", "padding-left": "0.75rem",
                      "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1", "font-weight": "600", "letter-spacing": "-0.03em",
                      ...t("label"),
                    },
                    lg: { "font-size": "1.75rem" },
                  },
                },
                {
                  tag: "div", key: "media", attrs: { "data-blok-columns-media": "" },
                  style: {
                    base: { position: "relative", top: "auto", right: "auto", bottom: "auto", left: "auto", "z-index": "1", overflow: "hidden", width: "100%", height: "auto", opacity: "1" },
                    lg: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", height: "100%" },
                  },
                  children: [{
                    tag: "img", key: "photo", bind: "item.image",
                    style: {
                      base: { display: "block", width: "100%", height: "14rem", "object-fit": "cover" },
                      lg: { height: "100%" },
                    },
                  }],
                },
              ],
            }],
          },
        ],
      }),
    ],
  },
};
