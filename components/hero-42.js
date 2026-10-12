// A short line, a large headline, and one photograph crossing the type.
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
const parked = { position: "relative", top: "auto", right: "auto", bottom: "auto", left: "auto" };

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-42",
  prefix: "hero42",
  name: "Hero / Cutout",
  category: "hero",
  description: "A short line, a large headline, and one sentence, with a photograph crossing the type. On a phone the photograph sits under the copy.",

  props: {
    showKicker: { type: "boolean", default: true, description: "Show the line above the headline." },
    kicker: { type: "text", default: "From the same desk." },
    heading: { type: "text", default: "Find the next page worth making." },
    showBody: { type: "boolean", default: true, description: "Show the sentence under the headline." },
    body: { type: "text", default: "One photograph, on the type. The sentence still reads. Then we make the page." },
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
    style: { base: { overflow: "hidden", ...t("section") } },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { position: "relative", "min-height": "0px" }, lg: { "min-height": "32rem" } },
        children: [
          {
            tag: "div", key: "copy",
            style: { base: { position: "relative", "z-index": "1", width: "100%" } },
            children: [
              {
                tag: "p", key: "kicker", bind: "kicker", if: "showKicker",
                style: { base: { "margin-top": "0", "margin-bottom": "1rem", "max-width": "28rem", "font-size": "1.05rem", "line-height": "1.5", ...t("kicker") } },
              },
              {
                tag: "h1", key: "heading", bind: "heading",
                style: {
                  base: { "margin-top": "0", "margin-bottom": "0", width: "100%", "padding-right": "0px", "font-family": "token(font-display)", "font-size": "3rem", "line-height": "0.92", "font-weight": "600", "letter-spacing": "-0.045em", ...t("heading") },
                  md: { "font-size": "4.5rem" },
                  lg: { "padding-right": "28%", "font-size": "5.25rem" },
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
              base: { ...parked, "z-index": "2", overflow: "hidden", width: "100%", "max-width": "40rem", "margin-top": "1.5rem", ...radius("token(radius-card)") },
              lg: { position: "absolute", top: "4.5rem", right: "0", bottom: "auto", left: "auto", "z-index": "2", width: "36%", "max-width": "40rem", "margin-top": "0rem" },
            },
            children: [{
              tag: "img", key: "image", bind: "image",
              style: { base: { display: "block", width: "100%", height: "18rem", "object-fit": "cover" }, lg: { height: "26rem" } },
            }],
          },
        ],
      }),
    ],
  },
};
