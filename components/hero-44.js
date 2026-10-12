// A full-bleed photograph, a short row of links, a chip, and one action.
import { inset0, mono, pad, radius, shapeVariant, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  chip: { "background-color": "panel", color: "fg" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=2000&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-44",
  prefix: "hero44",
  name: "Hero / Departure",
  category: "hero",
  description: "A full-bleed photograph, a short row of links, one chip, a headline, a line of type, and one action. The links are not a site nav.",

  props: {
    showLinks: { type: "boolean", default: true, description: "Show the row of links." },
    links: {
      type: "list",
      fields: { label: "text", href: "link" },
      default: [
        { label: "Work", href: "#" },
        { label: "Studio", href: "#" },
        { label: "Visit", href: "#" },
        { label: "Notes", href: "#" },
      ],
    },
    showChip: { type: "boolean", default: true, description: "Show the chip." },
    chip: { type: "text", default: "Since 2014" },
    heading: { type: "text", default: "A new page, from a road you already know." },
    showDescription: { type: "boolean", default: true, description: "Show the line beside the headline." },
    description: { type: "text", default: "18 Main Street. We name the work, ship the page, and stay for the first week." },
    showButtons: { type: "boolean", default: true, description: "Show the action." },
    buttons: { type: "buttons", max: 1, default: [{ title: "See the work", href: "#", variant: "primary" }] },
    image: { type: "image", priority: true, default: shot("1500382017468-9049fed747ef", "A gold field under a wide sky") },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
    shape: shapeVariant(["chip"]),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["heading", "description", "actions"] } },

  tree: {
    role: "section",
    style: { base: { position: "relative", overflow: "hidden", ...radius("token(radius-card)"), ...t("section") } },
    children: [
      { tag: "img", key: "image", bind: "image", style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } } },
      {
        tag: "div", key: "shade", decorative: true,
        style: { base: { ...inset0, "background-image": "linear-gradient(to top, token(shade-strong) 0%, token(shade-mid) 48%, token(shade-clear) 72%)" } },
      },
      shell({
        tag: "div", key: "component",
        style: {
          base: { position: "relative", "z-index": "1", display: "flex", "flex-direction": "column", "justify-content": "space-between", "row-gap": "3rem", "min-height": "36rem" },
          lg: { "min-height": "42rem" },
        },
        children: [
          {
            tag: "div", key: "bar",
            style: { base: { display: "flex", "flex-wrap": "wrap", "align-items": "center", "justify-content": "space-between", "column-gap": "1rem", "row-gap": "0.75rem" } },
            children: [
              {
                tag: "div", key: "links", repeat: "links", if: "showLinks",
                style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "1.25rem", "row-gap": "0.5rem" } },
                children: [{
                  tag: "a", key: "link", bind: "item.label", href: "item.href",
                  style: { base: { color: "token(text-inverse)", "font-size": "0.95rem", "line-height": "1.3", "text-decoration": "none" } },
                }],
              },
              {
                tag: "div", key: "chip", bind: "chip", if: "showChip",
                style: { base: { ...mono(), "font-size": "0.75rem", ...radius("token(radius-card)"), ...pad({ top: "0.45rem", right: "0.85rem", bottom: "0.45rem", left: "0.85rem" }), ...t("chip") } },
              },
            ],
          },
          {
            tag: "div", key: "bottom",
            style: {
              base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "justify-content": "flex-start", "row-gap": "1.25rem", "column-gap": "0rem" },
              lg: { "flex-direction": "row", "align-items": "flex-end", "justify-content": "space-between", "column-gap": "2rem", "row-gap": "0rem" },
            },
            children: [
              {
                tag: "h1", key: "heading", bind: "heading",
                style: {
                  base: { "margin-top": "0", "margin-bottom": "0", "max-width": "14ch", color: "token(text-inverse)", "font-family": "token(font-display)", "font-size": "2.75rem", "line-height": "0.95", "font-weight": "600", "letter-spacing": "-0.045em" },
                  md: { "font-size": "4rem" },
                  lg: { "font-size": "4.75rem" },
                },
              },
              {
                tag: "div", key: "aside",
                style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "1rem", "max-width": "22rem" } },
                children: [
                  {
                    tag: "p", key: "description", bind: "description", if: "showDescription",
                    style: { base: { "margin-top": "0", "margin-bottom": "0", color: "token(text-inverse)", "font-size": "1rem", "line-height": "1.5" } },
                  },
                  { tag: "div", key: "actions", repeat: "buttons", if: "showButtons", style: { base: { display: "flex" } } },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
