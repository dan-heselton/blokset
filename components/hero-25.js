// A cluster of pictures follows the cursor. The subhead reveals line by line.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  eyebrow: { color: "muted" },
  heading: { color: "fg" },
  subhead: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=900&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-25",
  prefix: "hero25",
  name: "Hero / Pointer Parallax",
  category: "hero",
  description: "Floating photographs lean toward the cursor. The subhead rises one line at a time.",

  props: {
    showEyebrow: { type: "boolean", default: true },
    eyebrow: { type: "text", default: "Move closer" },
    heading: { type: "text", default: "Pictures that notice you" },
    subhead: { type: "text", default: "On a fine pointer, the frames drift apart. On a phone, they simply stack." },
    showImages: { type: "boolean", default: true },
    image1: { type: "image", priority: true, default: shot("1517248135467-4c7edcad34c4", "A dining room with set tables") },
    image2: { type: "image", default: shot("1486406146926-c627a92ad1ab", "A glass tower against a clear sky") },
    image3: { type: "image", default: shot("1469474968028-56623f02e42e", "A ridge in warm evening light") },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  tree: {
    role: "section",
    attrs: { "data-blok-pointer": "" },
    style: {
      base: { position: "relative", overflow: "hidden", display: "flex", "flex-direction": "column", "justify-content": "flex-start", "min-height": "0px", ...t("section") },
      lg: { "justify-content": "center", "min-height": "100svh" },
    },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { position: "relative", "z-index": "3", "max-width": "40rem", "text-align": "left", "margin-left": "0", "margin-right": "0" }, lg: { "text-align": "center", "margin-left": "auto", "margin-right": "auto" } },
        children: [
          { tag: "div", key: "eyebrow", bind: "eyebrow", if: "showEyebrow", style: { base: { ...mono(), "margin-bottom": "1rem", ...t("eyebrow") } } },
          {
            tag: "h1", key: "heading", bind: "heading",
            style: {
              base: { "margin-top": "0", "margin-bottom": "1.25rem", "font-family": "token(font-display)", "font-size": "3rem", "line-height": "0.98", "font-weight": "600", "letter-spacing": "-0.04em", ...t("heading") },
              md: { "font-size": "4.5rem" },
              lg: { "font-size": "5.75rem" },
            },
          },
          {
            tag: "p", key: "subhead", bind: "subhead", attrs: { "data-blok-split": "lines" },
            style: { base: { "margin-top": "0", "margin-bottom": "0", "margin-left": "auto", "margin-right": "auto", "max-width": "28rem", "font-size": "1.25rem", "line-height": "1.45", ...t("subhead") } },
          },
        ],
      }),
      frame("1", "0.55", "image1", {
        base: { top: "auto", left: "auto", width: "100%", height: "14rem" },
        lg: { top: "12%", left: "5%", width: "20%", height: "34%" },
      }),
      frame("2", "-0.4", "image2", {
        base: { top: "auto", left: "auto", width: "100%", height: "14rem" },
        lg: { top: "16%", left: "74%", width: "20%", height: "40%" },
      }),
      frame("3", "0.25", "image3", {
        base: { top: "auto", left: "auto", width: "100%", height: "12rem" },
        lg: { top: "74%", left: "42%", width: "16%", height: "20%" },
      }),
    ],
  },
};

function frame(n, depth, prop, box) {
  return {
    tag: "div", key: `frame-${n}`, if: "showImages", attrs: { "data-blok-pointer-layer": "", "data-blok-depth": depth },
    style: {
      base: { position: "relative", "z-index": "1", overflow: "hidden", "margin-top": "1rem", ...radius("token(radius-card)"), ...box.base },
      lg: { position: "absolute", "margin-top": "0rem", ...box.lg },
    },
    children: [
      { tag: "img", key: `image-${n}`, bind: prop, style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } },
    ],
  };
}
