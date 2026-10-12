// Centered type over a photograph, with a caption card and a row of pills.
import { inset0, mono, pad, radius, shapeVariant, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  caption: { "background-color": "panel", color: "fg" },
  "caption-text": { color: "muted" },
  pill: { "background-color": "panel", color: "fg" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=2000&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-38",
  prefix: "hero38",
  name: "Hero / Horizon",
  category: "hero",
  description: "A centered headline over a full-bleed photograph, one word in the accent color, one action, a caption card, and a cluster of pills.",

  props: {
    heading: { type: "text", default: "A site for" },
    accent: { type: "text", default: "the work" },
    showDescription: { type: "boolean", default: true, description: "Show the line under the headline." },
    description: { type: "text", default: "Built at 18 Main Street. The page says so without a pitch." },
    showButtons: { type: "boolean", default: true, description: "Show the action." },
    buttons: { type: "buttons", max: 1, default: [{ title: "See the work", href: "#", variant: "primary" }] },
    showCaption: { type: "boolean", default: true, description: "Show the caption card." },
    caption: { type: "text", default: "The same desk since 2014. Photographs, words, and the launch." },
    captionImage: { type: "image", default: shot("1519710164239-da123dc03ef4", "A wooden chair in a pale room") },
    showPills: { type: "boolean", default: true, description: "Show the pills." },
    pills: {
      type: "list",
      fields: { label: "text" },
      default: [
        { label: "Webflow" },
        { label: "Astro" },
        { label: "Figma" },
        { label: "Words" },
        { label: "Photographs" },
      ],
    },
    image: { type: "image", priority: true, default: shot("1469474968028-56623f02e42e", "A sunlit ridge and a valley of pines") },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
    shape: shapeVariant(["caption", "caption-shot", "pill"]),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["heading", "accent", "description", "actions"] } },

  tree: {
    role: "section",
    style: { base: { position: "relative", overflow: "hidden", "min-height": "36rem", ...t("section") }, lg: { "min-height": "44rem" } },
    children: [
      { tag: "img", key: "image", bind: "image", style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } } },
      {
        tag: "div", key: "shade", decorative: true,
        style: { base: { ...inset0, "background-image": "linear-gradient(to top, token(shade-strong) 0%, token(shade-mid) 42%, token(shade-clear) 70%)" } },
      },
      shell({
        tag: "div", key: "component",
        style: {
          base: { position: "relative", "z-index": "1", display: "flex", "flex-direction": "column", "align-items": "center", "justify-content": "flex-end", "row-gap": "2rem", "min-height": "36rem", "text-align": "center" },
          lg: { "min-height": "44rem" },
        },
        children: [
          {
            tag: "h1", key: "line",
            style: { base: { display: "flex", "flex-direction": "column", "align-items": "center", "row-gap": "0.15rem", "margin-top": "0", "margin-bottom": "0" } },
            children: [
              {
                tag: "div", key: "heading", bind: "heading",
                style: {
                  base: { color: "token(text-inverse)", "font-family": "token(font-display)", "font-size": "3rem", "line-height": "0.95", "font-weight": "600", "letter-spacing": "-0.045em" },
                  md: { "font-size": "4.5rem" },
                  lg: { "font-size": "5.5rem" },
                },
              },
              {
                tag: "div", key: "accent", bind: "accent",
                style: {
                  base: { color: "token(accent)", "font-family": "token(font-display)", "font-size": "3rem", "line-height": "0.95", "font-weight": "600", "letter-spacing": "-0.045em" },
                  md: { "font-size": "4.5rem" },
                  lg: { "font-size": "5.5rem" },
                },
              },
            ],
          },
          {
            tag: "p", key: "description", bind: "description", if: "showDescription",
            style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "28rem", color: "token(text-inverse)", "font-size": "1.05rem", "line-height": "1.5" } },
          },
          { tag: "div", key: "actions", repeat: "buttons", if: "showButtons", style: { base: { display: "flex" } } },
          {
            tag: "div", key: "foot",
            style: {
              base: { display: "flex", "flex-direction": "column", "align-items": "stretch", "justify-content": "space-between", "row-gap": "1rem", "column-gap": "0rem", width: "100%" },
              lg: { "flex-direction": "row", "align-items": "flex-end", "column-gap": "1.5rem", "row-gap": "0rem" },
            },
            children: [
              {
                tag: "div", key: "caption", if: "showCaption",
                style: { base: { display: "flex", "align-items": "center", "column-gap": "0.85rem", "text-align": "left", width: "100%", "max-width": "24rem", ...radius("token(radius-card)"), ...pad("0.7rem"), ...t("caption") } },
                children: [
                  {
                    tag: "div", key: "caption-shot",
                    style: { base: { overflow: "hidden", width: "4.5rem", height: "4.5rem", "flex-shrink": "0", ...radius("token(radius-card)") } },
                    children: [{ tag: "img", key: "caption-image", bind: "captionImage", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } }],
                  },
                  { tag: "p", key: "caption-text", bind: "caption", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "0.95rem", "line-height": "1.4", ...t("caption-text") } } },
                ],
              },
              {
                tag: "div", key: "pills", repeat: "pills", if: "showPills",
                style: { base: { display: "flex", "flex-wrap": "wrap", "justify-content": "flex-end", "column-gap": "0.5rem", "row-gap": "0.5rem" } },
                children: [{
                  tag: "div", key: "pill", bind: "item.label",
                  style: { base: { ...mono(), "font-size": "0.75rem", ...radius("token(radius-card)"), ...pad({ top: "0.45rem", right: "0.8rem", bottom: "0.45rem", left: "0.8rem" }), ...t("pill") } },
                }],
              },
            ],
          },
        ],
      }),
    ],
  },
};
