// The photograph is the hero. The page color is cut into two corners.
import { themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  notch: { "background-color": "bg", color: "fg" },
  foot: { "background-color": "bg", color: "fg" },
  sentence: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=2000&q=80`, alt });
const parked = { position: "relative", top: "auto", right: "auto", bottom: "auto", left: "auto" };

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-46",
  prefix: "hero46",
  name: "Hero / Notch bleed",
  category: "hero",
  description: "The photograph is the hero and fills the screen. The headline is cut into the top-left corner, and a sentence with one action is cut into the bottom-right. On a phone they stack.",

  props: {
    heading: { type: "text", default: "The room, before the pitch." },
    showSentence: { type: "boolean", default: true, description: "Show the sentence in the bottom corner." },
    sentence: { type: "text", default: "One photograph, and the line that belongs in the corner." },
    showButtons: { type: "boolean", default: true, description: "Show the action." },
    buttons: { type: "buttons", max: 1, default: [{ title: "See the work", href: "#", variant: "dark" }] },
    image: { type: "image", priority: true, default: shot("1501594907352-04cda38ebc29", "A low pier and still harbor water") },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["heading", "sentence"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "stage",
        style: {
          base: { position: "relative", height: "auto", "min-height": "0px" },
          lg: { height: "calc(100svh - 16rem)", "min-height": "calc(100svh - 16rem)" },
        },
        children: [
          {
            tag: "div", key: "notch",
            style: {
              base: { ...parked, "z-index": "1", width: "100%", "max-width": "none", "margin-bottom": "1rem", "padding-top": "0", "padding-right": "0", "padding-bottom": "0", "padding-left": "0", "border-bottom-right-radius": "0px", ...t("notch") },
              lg: { position: "absolute", top: "0", right: "auto", bottom: "auto", left: "0", "max-width": "20rem", "margin-bottom": "0rem", "padding-top": "0", "padding-right": "1.5rem", "padding-bottom": "1.25rem", "padding-left": "0", "border-bottom-right-radius": "1.5rem" },
            },
            children: [
              {
                tag: "h1", key: "heading", bind: "heading",
                style: {
                  base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "2.75rem", "line-height": "0.95", "font-weight": "600", "letter-spacing": "-0.04em" },
                  lg: { "font-size": "3.5rem" },
                },
              },
            ],
          },
          {
            tag: "img", key: "image", bind: "image",
            style: {
              base: { ...parked, "z-index": "0", display: "block", width: "100%", height: "18rem", "object-fit": "cover", "border-top-left-radius": "1.25rem", "border-top-right-radius": "1.25rem", "border-bottom-right-radius": "1.25rem", "border-bottom-left-radius": "1.25rem" },
              lg: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", height: "100%", "z-index": "0" },
            },
          },
          {
            tag: "div", key: "foot",
            style: {
              base: { ...parked, "z-index": "1", width: "100%", "max-width": "none", "margin-top": "1rem", "padding-top": "0", "padding-right": "0", "padding-bottom": "0", "padding-left": "0", "border-top-left-radius": "0px", ...t("foot") },
              lg: { position: "absolute", top: "auto", right: "0", bottom: "0", left: "auto", "max-width": "22rem", "margin-top": "0rem", "padding-top": "1.15rem", "padding-right": "0", "padding-bottom": "0", "padding-left": "1.25rem", "border-top-left-radius": "1.5rem" },
            },
            children: [
              {
                tag: "p", key: "sentence", bind: "sentence", if: "showSentence",
                style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.5", ...t("sentence") } },
              },
              {
                tag: "div", key: "actions", repeat: "buttons", if: "showButtons",
                style: { base: { display: "flex", "margin-top": "1rem" } },
              },
            ],
          },
        ],
      }),
    ],
  },
};
