// A photograph starts as an inset card and grows to the edges of a pinned section.
import { mono, pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  caption: { "background-color": "panel", color: "fg" },
  eyebrow: { color: "muted" },
  heading: { color: "fg" },
  description: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "features-40",
  prefix: "features40",
  name: "Features / Zoom Story",
  category: "features",
  description: "On a desktop, a pinned photograph grows from an inset card to the edges of the section.",

  props: {
    showEyebrow: { type: "boolean", default: true },
    eyebrow: { type: "text", default: "Fig. 04" },
    heading: { type: "text", default: "The room, then the work" },
    description: { type: "text", default: "Scroll and the photograph opens up. The caption stays where you can read it." },
    image: {
      type: "image",
      default: { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000&q=80", alt: "A bright studio with long white desks" },
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.1, targets: ["eyebrow", "heading", "description"] },
  },

  tree: {
    role: "section",
    style: {
      base: { position: "relative", overflow: "hidden", display: "flex", "flex-direction": "column", "justify-content": "flex-end", "min-height": "0px", ...t("section") },
      lg: { "min-height": "100svh" },
    },
    children: [
      {
        tag: "div", key: "media", attrs: { "data-blok-expand-media": "" },
        style: {
          base: {
            position: "relative", top: "auto", right: "auto", bottom: "auto", left: "auto",
            "z-index": "0", width: "100%", height: "auto", "aspect-ratio": "16 / 10", overflow: "hidden", ...radius("token(radius-card)"),
          },
          lg: { position: "absolute", top: "12%", right: "12%", bottom: "12%", left: "12%", width: "auto", height: "auto", "aspect-ratio": "auto" },
        },
        children: [
          { tag: "img", key: "image", bind: "image", attrs: { "data-blok-scroll": "zoom" }, style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } },
        ],
      },
      shell({
        tag: "div", key: "caption",
        style: {
          base: { position: "relative", top: "auto", right: "auto", bottom: "auto", left: "auto", "z-index": "2", "max-width": "28rem", "margin-top": "1.5rem", ...pad("1.5rem"), ...radius("token(radius-card)"), ...t("caption") },
          lg: { position: "absolute", right: "8%", bottom: "8%", left: "auto", "margin-top": "0rem" },
        },
        children: [
          { tag: "div", key: "eyebrow", bind: "eyebrow", if: "showEyebrow", style: { base: { ...mono(), "margin-bottom": "0.75rem", ...t("eyebrow") } } },
          {
            tag: "h2", key: "heading", bind: "heading",
            style: { base: { "margin-top": "0", "margin-bottom": "0.75rem", "font-family": "token(font-display)", "font-size": "2rem", "line-height": "1.1", "font-weight": "600", "letter-spacing": "-0.03em", ...t("heading") }, lg: { "font-size": "2.5rem" } },
          },
          { tag: "p", key: "description", bind: "description", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1.0625rem", "line-height": "1.55", ...t("description") } } },
        ],
      }),
    ],
  },
};
