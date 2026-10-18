// A page-colored column bites the left edge of a photograph that fills the screen.
import { themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  rail: { "background-color": "bg", color: "fg" },
  sentence: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=2000&q=80`, alt });
const parked = { position: "relative", top: "auto", right: "auto", bottom: "auto", left: "auto" };
const square = {
  "border-top-left-radius": "0px",
  "border-top-right-radius": "0px",
  "border-bottom-right-radius": "0px",
  "border-bottom-left-radius": "0px",
};

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-47",
  prefix: "hero47",
  name: "Hero / Notch rail",
  category: "hero",
  description: "A page-colored column holds the headline, one sentence, and one action, and bites the photograph along that edge. The photograph fills the rest of the screen. On a phone the copy comes first.",

  props: {
    heading: { type: "text", default: "A desk, a Friday, a page." },
    showSentence: { type: "boolean", default: true, description: "Show the sentence." },
    sentence: { type: "text", default: "The photograph takes the rest of the screen. The line stays on the page." },
    showButtons: { type: "boolean", default: true, description: "Show the action." },
    buttons: { type: "buttons", max: 1, default: [{ title: "Start with this", href: "#", variant: "dark" }] },
    image: { type: "image", priority: true, default: shot("1519710164239-da123dc03ef4", "A wooden chair in a pale room") },
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
          base: { position: "relative", display: "flex", "flex-direction": "column", "row-gap": "1.25rem", height: "auto", "min-height": "0px" },
          lg: { display: "block", height: "calc(100svh - 16rem)", "min-height": "calc(100svh - 16rem)", "row-gap": "0rem" },
        },
        children: [
          {
            tag: "div", key: "rail",
            style: {
              base: { ...parked, "z-index": "1", display: "flex", "flex-direction": "column", "justify-content": "flex-end", width: "100%", "max-width": "none", "padding-top": "0", "padding-right": "0", "padding-bottom": "0", "padding-left": "0", ...square, ...t("rail") },
              lg: { position: "absolute", top: "0", right: "auto", bottom: "0", left: "0", width: "38%", "max-width": "28rem", "justify-content": "center", "padding-top": "2rem", "padding-right": "2rem", "padding-bottom": "2rem", "padding-left": "0", "border-top-right-radius": "1.75rem", "border-bottom-right-radius": "1.75rem" },
            },
            children: [
              {
                tag: "h1", key: "heading", bind: "heading",
                style: {
                  base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "2.75rem", "line-height": "0.95", "font-weight": "600", "letter-spacing": "-0.04em" },
                  lg: { "font-size": "3.75rem" },
                },
              },
              {
                tag: "p", key: "sentence", bind: "sentence", if: "showSentence",
                style: { base: { "margin-top": "1rem", "margin-bottom": "0", "max-width": "24rem", "font-size": "1.05rem", "line-height": "1.5", ...t("sentence") } },
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
              base: { ...parked, "z-index": "0", overflow: "hidden", width: "100%", height: "auto", "min-height": "16rem", "border-top-left-radius": "1.25rem", "border-top-right-radius": "1.25rem", "border-bottom-right-radius": "1.25rem", "border-bottom-left-radius": "1.25rem" },
              lg: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", "min-height": "0px", height: "100%", "z-index": "0" },
            },
            children: [{
              tag: "img", key: "image", bind: "image",
              style: { base: { display: "block", width: "100%", height: "18rem", "object-fit": "cover" }, lg: { height: "100%" } },
            }],
          },
        ],
      }),
    ],
  },
};
