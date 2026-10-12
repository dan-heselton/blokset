// A photograph on one side, a heading and a button on the other. On a phone the photo comes first.
import { radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  eyebrow: { color: "muted" },
  heading: { color: "fg" },
  summary: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "cta-13",
  prefix: "cta13",
  name: "CTA / Split",
  category: "cta",
  description: "A photograph on one side, a heading and a button on the other. On a phone the photo comes first.",

  props: {
    showImage: { type: "boolean", default: true },
    image: {
      type: "image",
      default: { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80", alt: "A bright studio with a long desk" },
    },
    showEyebrow: { type: "boolean", default: true },
    eyebrow: { type: "text", default: "Next opening" },
    heading: { type: "text", default: "Tell us what you are making" },
    showSummary: { type: "boolean", default: true },
    summary: { type: "text", default: "A short note is enough. We reply with a time to talk and what we would need from you." },
    showButtons: { type: "boolean", default: true },
    buttons: { type: "buttons", max: 1, default: [{ title: "Start a project", href: "#", variant: "dark" }] },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "summary"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "layout",
        style: {
          base: { display: "grid", "grid-template-columns": "1fr", "align-items": "center", "grid-column-gap": "0rem", "grid-row-gap": "2rem" },
          lg: { "grid-template-columns": "1.1fr 0.9fr", "grid-column-gap": "4rem", "grid-row-gap": "0rem" },
        },
        children: [
          {
            tag: "div", key: "figure", if: "showImage",
            style: { base: { overflow: "hidden", ...radius("token(radius-card)") } },
            children: [
              { tag: "img", key: "image", bind: "image", style: { base: { display: "block", width: "100%", "aspect-ratio": "4 / 5", "object-fit": "cover" }, lg: { "aspect-ratio": "5 / 4" } } },
            ],
          },
          {
            tag: "div", key: "copy",
            style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "1.25rem" } },
            children: [
              { tag: "div", key: "eyebrow", bind: "eyebrow", if: "showEyebrow", style: { base: { "font-family": "token(font-mono)", "font-size": "0.8125rem", "letter-spacing": "0.08em", "text-transform": "uppercase", ...t("eyebrow") } } },
              {
                tag: "h2", key: "heading", bind: "heading",
                style: {
                  base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "2.5rem", "line-height": "1.02", "font-weight": "600", "letter-spacing": "-0.03em", ...t("heading") },
                  lg: { "font-size": "3.5rem" },
                },
              },
              { tag: "p", key: "summary", bind: "summary", if: "showSummary", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "28rem", "font-size": "1.0625rem", "line-height": "1.6", ...t("summary") } } },
              { tag: "div", key: "actions", repeat: "buttons", if: "showButtons", style: { base: { display: "flex" } } },
            ],
          },
        ],
      }),
    ],
  },
};
