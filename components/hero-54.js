// A centered headline over a photo strip clipped to a deep curve.
import { mono, themeBase, themeVariant } from "./_lib/themes.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  chip: { color: "muted" },
  heading: { color: "fg" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1200&q=80`, alt });
const curve = {
  "border-top-left-radius": "12rem", "border-top-right-radius": "12rem",
  "border-bottom-right-radius": "12rem", "border-bottom-left-radius": "12rem",
};

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-54",
  prefix: "hero54",
  name: "Hero / Curved marquee",
  category: "hero",
  description: "A centered headline and one action, over a strip of photographs clipped into a deep curve.",

  props: {
    showChip: { type: "boolean", default: true },
    chip: { type: "text", default: "Experience coworking" },
    heading: { type: "text", default: "Perfect backdrop of brainstorm" },
    showAction: { type: "boolean", default: true },
    action: { type: "text", default: "Buy Template" },
    actionHref: { type: "link", default: "#" },
    showImages: { type: "boolean", default: true },
    images: {
      type: "list",
      fields: { image: "image" },
      default: [
        { image: photo("1438761681033-6461ffad8d80", "A person laughing in a knit sweater") },
        { image: photo("1500530855697-b586d89ba3ee", "A hand holding stems in a green field") },
        { image: photo("1486406146926-c627a92ad1ab", "A pale building behind a tree") },
        { image: photo("1501594907352-04cda38ebc29", "A low pier and still harbor water") },
        { image: photo("1469474968028-56623f02e42e", "Green hills under a pale sky") },
        { image: photo("1519710164239-da123dc03ef4", "A sunlit room with a wooden chair") },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["chip", "heading"] } },

  tree: {
    role: "section",
    style: { base: { overflow: "hidden", ...t("section") } },
    children: [{
      role: "section-padding", size: "large",
      children: [
        {
          role: "gutter",
          children: [{
            role: "container", size: "large",
            children: [{
              tag: "div", key: "copy",
              style: { base: { display: "flex", "flex-direction": "column", "align-items": "center", "row-gap": "1.25rem", "text-align": "center", "margin-bottom": "2.5rem" }, lg: { "margin-bottom": "3.5rem" } },
              children: [
                { tag: "div", key: "chip", bind: "chip", if: "showChip", style: { base: { ...mono(), ...t("chip") } } },
                {
                  tag: "h1", key: "heading", bind: "heading",
                  style: {
                    base: { "margin-top": "0", "margin-bottom": "0", "max-width": "16rem", "font-family": "token(font-serif)", "font-size": "3.25rem", "line-height": "0.95", "font-weight": "500", "letter-spacing": "-0.03em", ...t("heading") },
                    md: { "max-width": "28rem", "font-size": "5rem" },
                    lg: { "max-width": "36rem", "font-size": "6.5rem" },
                  },
                },
                {
                  tag: "a", key: "action", bind: "action", href: "actionHref", if: "showAction",
                  style: {
                    base: {
                      display: "inline-flex", "background-color": "token(accent)", color: "token(ink)", "text-decoration": "none", "font-weight": "600",
                      "padding-top": "0.75rem", "padding-right": "1.2rem", "padding-bottom": "0.75rem", "padding-left": "1.2rem",
                      "border-top-left-radius": "999px", "border-top-right-radius": "999px", "border-bottom-right-radius": "999px", "border-bottom-left-radius": "999px",
                    },
                  },
                },
              ],
            }],
          }],
        },
        {
          tag: "div", key: "band", if: "showImages",
          style: { base: { overflow: "hidden", width: "100%", height: "12rem", ...curve }, lg: { height: "18rem" } },
          children: [{
            tag: "div", key: "track", repeat: "images", attrs: { "data-blok-marquee": "", "data-blok-speed": "40" },
            style: { base: { display: "flex", width: "max-content", height: "100%" } },
            children: [{
              tag: "div", key: "frame",
              style: { base: { width: "16rem", height: "100%", "flex-shrink": "0" }, lg: { width: "24rem" } },
              children: [{
                tag: "img", key: "frame-image", bind: "item.image",
                style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } },
              }],
            }],
          }],
        },
      ],
    }],
  },
};
