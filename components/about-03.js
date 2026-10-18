// Discovery Mission: serif heading, two body paragraphs, large right photo, generous whitespace.
import { themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  heading: { color: "fg" },
  body: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "about-03",
  prefix: "about3",
  name: "About / Mission split",
  category: "about",
  description: "A serif Mission heading and two body paragraphs on the left, with a large photograph on the right and generous whitespace.",

  props: {
    heading: { type: "text", default: "Mission" },
    body: {
      type: "text",
      default: "We believe extraordinary places are built slowly: land chosen with care, rooms sequenced for light, and details that stay quiet until you need them.",
    },
    body2: {
      type: "text",
      default: "Our mission is to leave each community clearer than we found it — from the first sketch to the last evening under the vines.",
    },
    showImage: { type: "boolean", default: true },
    image: { type: "image", default: photo("1517248135467-4c7edcad34c4", "Evening dinner table under warm lights") },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark"], map: THEME }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["heading", "body"] } },

  tree: {
    role: "section",
    style: { base: { ...t("section"), "padding-top": "2rem", "padding-bottom": "2rem" }, lg: { "padding-top": "3.5rem", "padding-bottom": "3.5rem" } },
    children: [
      shell({
        tag: "div", key: "component",
        style: {
          base: {
            display: "grid", "grid-template-columns": "1fr", "align-items": "start",
            "row-gap": "3rem", "column-gap": "0rem", "min-height": "0rem",
          },
          lg: {
            "grid-template-columns": "0.9fr 1.1fr", "column-gap": "5rem", "row-gap": "0rem", "align-items": "center",
            "min-height": "36rem",
          },
        },
        children: [
          {
            tag: "div", key: "copy",
            style: {
              base: {
                display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "1.75rem",
                "padding-top": "0.5rem", "padding-bottom": "0.5rem", "max-width": "100%",
              },
              lg: { "padding-top": "2rem", "padding-bottom": "2rem", "max-width": "28rem" },
            },
            children: [
              {
                tag: "h2", key: "heading", bind: "heading",
                style: {
                  base: {
                    "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-serif)",
                    "font-size": "2.25rem", "line-height": "1.08", "font-weight": "500", "letter-spacing": "-0.02em", ...t("heading"),
                  },
                  lg: { "font-size": "2.75rem" },
                },
              },
              {
                tag: "div", key: "body",
                style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1.25rem", ...t("body") } },
                children: [
                  {
                    tag: "p", key: "body-lead", bind: "body",
                    style: {
                      base: {
                        "margin-top": "0", "margin-bottom": "0", "max-width": "30rem",
                        "font-family": "token(font-serif)", "font-size": "1.125rem", "line-height": "1.7",
                      },
                      lg: { "font-size": "1.2rem" },
                    },
                  },
                  {
                    tag: "p", key: "body-support", bind: "body2",
                    style: {
                      base: {
                        "margin-top": "0", "margin-bottom": "0", "max-width": "30rem",
                        "font-family": "token(font-serif)", "font-size": "1.125rem", "line-height": "1.7",
                      },
                      lg: { "font-size": "1.2rem" },
                    },
                  },
                ],
              },
            ],
          },
          {
            tag: "div", key: "media", if: "showImage",
            style: { base: { position: "relative", width: "100%", overflow: "hidden" } },
            children: [{
              tag: "img", key: "image", bind: "image",
              style: {
                base: { display: "block", width: "100%", height: "22rem", "object-fit": "cover" },
                md: { height: "28rem" },
                lg: { height: "38rem" },
              },
            }],
          },
        ],
      }),
    ],
  },
};
