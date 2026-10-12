// Oversized headline whose characters rise in, over a photograph that drifts on scroll.
import { inset0, mono, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  overlay: { "background-color": "bg" },
  eyebrow: { color: "fg" },
  heading: { color: "fg" },
  description: { color: "fg" },
};
const t = (key) => themeBase("dark", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-21",
  prefix: "hero21",
  name: "Hero / Character Headline",
  category: "hero",
  description: "Characters rise into an oversized headline over a photograph that parallaxes as you scroll.",

  props: {
    showEyebrow: { type: "boolean", default: true },
    eyebrow: { type: "text", default: "Design and build — Cape Ann" },
    heading: { type: "text", default: "Sites with a pulse" },
    showDescription: { type: "boolean", default: true },
    description: { type: "text", default: "A small studio for brands and websites that should feel made, not assembled." },
    showButtons: { type: "boolean", default: true },
    buttons: {
      type: "buttons", max: 2,
      default: [
        { title: "Start a project", href: "#", variant: "primary" },
        { title: "See the work", href: "#", variant: "secondary-alt" },
      ],
    },
    showImage: { type: "boolean", default: true },
    image: {
      type: "image", priority: true,
      default: { src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=2000&q=80", alt: "A low pier and still harbor water" },
    },
  },

  variants: {
    theme: themeVariant({ default: "dark", options: ["dark", "light", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.1, targets: ["eyebrow", "description", "actions"] },
    scroll: { preset: "parallax", targets: ["media"], strength: 0.18 },
  },

  tree: {
    role: "section",
    style: { base: { position: "relative", overflow: "hidden", ...t("section") } },
    children: [
      {
        tag: "div", key: "media", if: "showImage",
        style: { base: { ...inset0, "z-index": "0" } },
        children: [
          { tag: "img", key: "image", bind: "image", style: { base: { width: "100%", height: "100%", "object-fit": "cover" } } },
          { tag: "div", key: "overlay", decorative: true, style: { base: { ...inset0, opacity: "0.55", ...t("overlay") } } },
        ],
      },
      shell({
        tag: "div", key: "component",
        style: {
          base: { position: "relative", "z-index": "1", display: "flex", "flex-direction": "column", "justify-content": "flex-end", "min-height": "calc(100svh - 8rem)" },
          md: { "min-height": "calc(100svh - 12rem)" },
          lg: { "min-height": "calc(100svh - 16rem)" },
        },
        children: [
          { tag: "div", key: "eyebrow", bind: "eyebrow", if: "showEyebrow", style: { base: { ...mono(), "margin-bottom": "1.25rem", ...t("eyebrow") } } },
          {
            tag: "h1", key: "heading", bind: "heading", attrs: { "data-blok-split": "chars" },
            style: {
              base: { "margin-top": "0", "margin-bottom": "1.25rem", "max-width": "16ch", "font-family": "token(font-display)", "font-size": "3.5rem", "line-height": "1.05", "font-weight": "600", "letter-spacing": "-0.045em", ...t("heading") },
              md: { "font-size": "5.5rem" },
              lg: { "font-size": "7.5rem" },
            },
          },
          { tag: "p", key: "description", bind: "description", if: "showDescription", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "28rem", "font-size": "1.125rem", "line-height": "1.55", ...t("description") } } },
          { tag: "div", key: "actions", repeat: "buttons", if: "showButtons", style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "0.75rem", "row-gap": "0.75rem", "margin-top": "2rem" } } },
        ],
      }),
    ],
  },
};
