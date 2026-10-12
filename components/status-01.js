// A short missing-page block. It is not a marketing hero.
import { themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  eyebrow: { color: "muted" },
  heading: { color: "fg" },
  sentence: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "status-01",
  prefix: "status1",
  name: "Page / Missing",
  category: "status",
  description: "A heading, one sentence, and a button for a page that is not there.",

  props: {
    showEyebrow: { type: "boolean", default: true },
    eyebrow: { type: "text", default: "404" },
    heading: { type: "text", default: "This page is not here" },
    sentence: { type: "text", default: "The link may be old, or the page may have moved. The rest of the site is still where you left it." },
    showButtons: { type: "boolean", default: true },
    buttons: { type: "buttons", max: 1, default: [{ title: "Back to the studio", href: "#", variant: "dark" }] },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "sentence"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "block",
        style: { base: { display: "flex", "flex-direction": "column", "align-items": "center", "row-gap": "1.25rem", "text-align": "center" } },
        children: [
          { tag: "div", key: "eyebrow", bind: "eyebrow", if: "showEyebrow", style: { base: { "font-family": "token(font-mono)", "font-size": "0.8125rem", "letter-spacing": "0.08em", "text-transform": "uppercase", ...t("eyebrow") } } },
          {
            tag: "h2", key: "heading", bind: "heading",
            style: {
              base: { "margin-top": "0", "margin-bottom": "0", "max-width": "18rem", "font-family": "token(font-display)", "font-size": "2.5rem", "line-height": "1.02", "font-weight": "600", "letter-spacing": "-0.03em", ...t("heading") },
              lg: { "max-width": "28rem", "font-size": "3.5rem" },
            },
          },
          { tag: "p", key: "sentence", bind: "sentence", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "28rem", "font-size": "1.0625rem", "line-height": "1.6", ...t("sentence") } } },
          { tag: "div", key: "actions", repeat: "buttons", if: "showButtons", style: { base: { display: "flex", "margin-top": "0.5rem" } } },
        ],
      }),
    ],
  },
};
