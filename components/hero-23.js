// Three photographs travel at different speeds behind a short headline.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  eyebrow: { color: "muted" },
  heading: { color: "fg" },
  description: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-23",
  prefix: "hero23",
  name: "Hero / Depth Layers",
  category: "hero",
  description: "Three photographs move at different speeds behind the headline as the page scrolls.",

  props: {
    showEyebrow: { type: "boolean", default: true },
    eyebrow: { type: "text", default: "Selected work" },
    heading: { type: "text", default: "Depth, not decoration" },
    showDescription: { type: "boolean", default: true },
    description: { type: "text", default: "Scroll and the pictures drift apart. The line in front stays put." },
    showImages: { type: "boolean", default: true },
    image1: { type: "image", priority: true, default: shot("1519710164239-da123dc03ef4", "Sunlit room with a wooden chair") },
    image2: { type: "image", default: shot("1497366216548-37526070297c", "A bright studio with long desks") },
    image3: { type: "image", default: shot("1500530855697-b586d89ba3ee", "Green hills under a pale sky") },
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
      base: { position: "relative", overflow: "hidden", display: "flex", "flex-direction": "column", "justify-content": "flex-start", "min-height": "0px", ...t("section") },
      lg: { "justify-content": "center", "min-height": "100svh" },
    },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { position: "relative", "z-index": "3", "max-width": "34rem", "margin-left": "0", "margin-right": "0", "text-align": "left" }, lg: { "margin-left": "auto", "margin-right": "auto", "text-align": "center" } },
        children: [
          { tag: "div", key: "eyebrow", bind: "eyebrow", if: "showEyebrow", style: { base: { ...mono(), "margin-bottom": "1rem", ...t("eyebrow") } } },
          {
            tag: "h1", key: "heading", bind: "heading",
            style: {
              base: { "margin-top": "0", "margin-bottom": "1rem", "font-family": "token(font-display)", "font-size": "3rem", "line-height": "0.98", "font-weight": "600", "letter-spacing": "-0.04em", ...t("heading") },
              md: { "font-size": "4.25rem" },
              lg: { "font-size": "5.5rem" },
            },
          },
          { tag: "p", key: "description", bind: "description", if: "showDescription", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "26rem", "font-size": "1.0625rem", "line-height": "1.55", ...t("description") } } },
        ],
      }),
      layer("1", "0.45", "image1", {
        base: { top: "auto", left: "auto", width: "100%", height: "16rem" },
        lg: { top: "16%", left: "4%", width: "22%", height: "62%" },
      }),
      layer("2", "-0.32", "image2", {
        base: { top: "auto", left: "auto", width: "100%", height: "16rem" },
        lg: { top: "12%", left: "74%", width: "22%", height: "50%" },
      }),
      layer("3", "0.18", "image3", {
        base: { top: "auto", left: "auto", width: "100%", height: "14rem" },
        lg: { top: "70%", left: "40%", width: "18%", height: "22%" },
      }),
    ],
  },
};

function layer(n, speed, prop, box) {
  return {
    tag: "div", key: `layer-${n}`, if: "showImages", attrs: { "data-blok-depth": speed },
    style: {
      base: { position: "relative", "z-index": "0", overflow: "hidden", "margin-top": "1.5rem", ...radius("token(radius-card)"), ...box.base },
      lg: { position: "absolute", "margin-top": "0rem", ...box.lg },
    },
    children: [
      { tag: "img", key: `image-${n}`, bind: prop, style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } },
    ],
  };
}
