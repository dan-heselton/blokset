// Copy on the left. A portrait beside it, never on the words.
import { radius, shapeVariant, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  kicker: { color: "muted" },
  heading: { color: "fg" },
  body: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1600&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-42",
  prefix: "hero42",
  name: "Hero / Beside",
  category: "hero",
  description: "A short line, the full headline, one sentence, and one action. The portrait sits beside them. On a phone it sits under the copy.",

  props: {
    showKicker: { type: "boolean", default: true, description: "Show the line above the headline." },
    kicker: { type: "text", default: "From the same desk." },
    heading: { type: "text", default: "Find the next page worth making." },
    showBody: { type: "boolean", default: true, description: "Show the sentence under the headline." },
    body: { type: "text", default: "The portrait stays beside the line. The sentence is the whole sentence." },
    showButtons: { type: "boolean", default: true, description: "Show the action." },
    buttons: { type: "buttons", max: 1, default: [{ title: "See the work", href: "#", variant: "dark" }] },
    image: { type: "image", priority: true, default: shot("1507003211169-0a1dd7228f2d", "Portrait of the studio lead") },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
    shape: shapeVariant(["photo"]),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["kicker", "heading", "body"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: {
          base: { display: "flex", "flex-direction": "column", "align-items": "stretch", "row-gap": "2rem", "column-gap": "0rem" },
          lg: { "flex-direction": "row", "align-items": "center", "column-gap": "3rem", "row-gap": "0rem" },
        },
        children: [
          {
            tag: "div", key: "copy",
            style: { base: { width: "100%", "max-width": "40rem" }, lg: { width: "52%" } },
            children: [
              {
                tag: "p", key: "kicker", bind: "kicker", if: "showKicker",
                style: { base: { "margin-top": "0", "margin-bottom": "1rem", "max-width": "28rem", "font-size": "1.05rem", "line-height": "1.5", ...t("kicker") } },
              },
              {
                tag: "h1", key: "heading", bind: "heading",
                style: {
                  base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "2.75rem", "line-height": "0.95", "font-weight": "600", "letter-spacing": "-0.04em", ...t("heading") },
                  md: { "font-size": "3.75rem" },
                  lg: { "font-size": "4.5rem" },
                },
              },
              {
                tag: "p", key: "body", bind: "body", if: "showBody",
                style: { base: { "margin-top": "1.25rem", "margin-bottom": "0", "max-width": "28rem", "font-size": "1.05rem", "line-height": "1.55", ...t("body") } },
              },
              {
                tag: "div", key: "actions", repeat: "buttons", if: "showButtons",
                style: { base: { display: "flex", "margin-top": "1.5rem" } },
              },
            ],
          },
          {
            tag: "div", key: "photo",
            style: {
              base: { overflow: "hidden", width: "100%", "max-width": "40rem", ...radius("token(radius-card)") },
              lg: { width: "42%", "max-width": "36rem" },
            },
            children: [{
              tag: "img", key: "image", bind: "image",
              style: { base: { display: "block", width: "100%", height: "18rem", "object-fit": "cover" }, lg: { height: "28rem" } },
            }],
          },
        ],
      }),
    ],
  },
};
