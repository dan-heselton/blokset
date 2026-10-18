// Discovery ABOUT US: tracked caps label, large serif caps headline, wide photo, asymmetric note.
import { mono, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  eyebrow: { color: "muted" },
  heading: { color: "fg" },
  label: { color: "muted" },
  body: { color: "fg" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1600&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "about-02",
  prefix: "about2",
  name: "About / Statement image",
  category: "about",
  description: "A tracked ALL-CAPS eyebrow, a large serif caps headline, a wide photograph, then an asymmetric WORLD-RENOWNED label beside a serif body.",

  props: {
    eyebrow: { type: "text", default: "ABOUT US" },
    heading: { type: "text", default: "Creating your perfect world" },
    image: { type: "image", default: photo("1540541338287-41700207dee6", "Resort pool terrace at golden hour") },
    showLabel: { type: "boolean", default: true },
    label: { type: "text", default: "WORLD-RENOWNED" },
    body: {
      type: "text",
      default: "Modern luxury living shaped by places that feel inevitable. Thirty years of quiet craft, patient sequencing, and rooms that hold their light.",
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark"], map: THEME }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "body"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: {
          base: { display: "flex", "flex-direction": "column", "align-items": "stretch", "row-gap": "2.75rem" },
          lg: { "row-gap": "4rem" },
        },
        children: [
          {
            tag: "div", key: "intro",
            style: {
              base: {
                display: "flex", "flex-direction": "column", "align-items": "center", "row-gap": "1.5rem",
                "text-align": "center", "max-width": "44rem",
                "margin-top": "0", "margin-right": "auto", "margin-bottom": "0", "margin-left": "auto",
              },
            },
            children: [
              {
                tag: "div", key: "eyebrow", bind: "eyebrow",
                style: {
                  base: {
                    ...mono(), "font-size": "0.75rem", "letter-spacing": "0.22em", "text-transform": "uppercase", ...t("eyebrow"),
                  },
                },
              },
              {
                tag: "h2", key: "heading", bind: "heading",
                style: {
                  base: {
                    "margin-top": "0", "margin-bottom": "0", "max-width": "18ch", "font-family": "token(font-serif)",
                    "font-size": "2.75rem", "line-height": "1.02", "font-weight": "500", "letter-spacing": "0.06em",
                    "text-transform": "uppercase", ...t("heading"),
                  },
                  md: { "font-size": "3.5rem" },
                  lg: { "font-size": "4.25rem" },
                },
              },
            ],
          },
          {
            tag: "img", key: "image", bind: "image",
            style: {
              base: { display: "block", width: "100%", height: "16rem", "object-fit": "cover" },
              md: { height: "24rem" },
              lg: { height: "34rem" },
            },
          },
          {
            tag: "div", key: "row",
            style: {
              base: {
                display: "grid", "grid-template-columns": "1fr", "align-items": "start",
                "row-gap": "1.5rem", "column-gap": "0rem",
                "padding-top": "0.5rem", "padding-right": "0%", "padding-left": "0%",
              },
              lg: {
                "grid-template-columns": "0.28fr 1fr", "column-gap": "4rem", "row-gap": "0rem",
                "padding-top": "0.75rem", "padding-right": "4%", "padding-left": "2%",
              },
            },
            children: [
              {
                tag: "div", key: "label", bind: "label", if: "showLabel",
                style: {
                  base: {
                    ...mono(), "font-size": "0.6875rem", "letter-spacing": "0.18em", "text-transform": "uppercase", ...t("label"),
                  },
                },
              },
              {
                tag: "p", key: "body", bind: "body",
                style: {
                  base: {
                    "margin-top": "0", "margin-bottom": "0", "max-width": "38rem",
                    "font-family": "token(font-serif)", "font-size": "1.35rem", "line-height": "1.55", "font-weight": "400", ...t("body"),
                  },
                  lg: { "font-size": "1.65rem" },
                },
              },
            ],
          },
        ],
      }),
    ],
  },
};
