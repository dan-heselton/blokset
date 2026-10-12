// A wordmark scaled to the container width. Its characters lift in as you scroll to it.
import { mono, themeBase, themeVariant } from "./_lib/themes.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  eyebrow: { color: "muted" },
  wordmark: { color: "fg" },
  note: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "cta-12",
  prefix: "cta12",
  name: "CTA / Wordmark",
  category: "cta",
  description: "A single word scaled to the full width. Characters lift and fade in as you scroll.",

  props: {
    showEyebrow: { type: "boolean", default: true },
    eyebrow: { type: "text", default: "Until next time" },
    wordmark: { type: "text", default: "Blokset" },
    showNote: { type: "boolean", default: true },
    note: { type: "text", default: "New projects open the first week of each month." },
    showButtons: { type: "boolean", default: true },
    buttons: {
      type: "buttons", max: 1,
      default: [{ title: "Start a project", href: "#", variant: "dark" }],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade", stagger: 0.1, targets: ["eyebrow", "note", "actions"] },
  },

  tree: {
    role: "section",
    style: { base: { overflow: "hidden", ...t("section") } },
    children: [
      {
        role: "section-padding", size: "large",
        children: [
          {
            role: "gutter",
            children: [{
              role: "container", size: "large",
              children: [{
                tag: "div", key: "eyebrow", bind: "eyebrow", if: "showEyebrow",
                style: { base: { ...mono(), "margin-bottom": "1.5rem", ...t("eyebrow") } },
              }],
            }],
          },
          {
            tag: "div", key: "stage",
            style: { base: { width: "100%" } },
            children: [
              {
                tag: "h2", key: "wordmark", bind: "wordmark", attrs: { "data-blok-fit": "", "data-blok-split": "scrub" },
                style: {
                  base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "4rem", "line-height": "1", "font-weight": "600", "letter-spacing": "-0.06em", "white-space": "nowrap", "text-align": "center", ...t("wordmark") },
                },
              },
            ],
          },
          {
            role: "gutter",
            children: [{
              role: "container", size: "large",
              children: [{
                tag: "div", key: "footer",
                style: {
                  base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "justify-content": "flex-start", "row-gap": "1rem", "margin-top": "2rem" },
                  md: { "flex-direction": "row", "align-items": "center", "justify-content": "space-between" },
                },
                children: [
                  { tag: "p", key: "note", bind: "note", if: "showNote", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1.0625rem", "line-height": "1.5", ...t("note") } } },
                  { tag: "div", key: "actions", repeat: "buttons", if: "showButtons", style: { base: { display: "flex", "column-gap": "0.75rem", "row-gap": "0.75rem" } } },
                ],
              }],
            }],
          },
        ],
      },
    ],
  },
};
