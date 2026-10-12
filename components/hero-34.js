// A dark photograph, a headline on the left, and two media cards stacked on the right.
import { mono, pad, radius } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1600&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-34",
  prefix: "hero34",
  name: "Hero / Media stack",
  category: "hero",
  description: "A dark full-bleed photograph with the headline on the left and two cards stacked on the right. The photograph and the cards drift at different speeds.",

  props: {
    showEyebrow: { type: "boolean", default: true, description: "Show the eyebrow." },
    eyebrow: { type: "text", default: "A new room, 2026" },
    heading: { type: "text", default: "The next room, from the same desk." },
    showDescription: { type: "boolean", default: true, description: "Show the line under the headline." },
    description: { type: "text", default: "Not a colony. A site, a name, and the photographs that have to carry it. Built from the same desk." },
    showButtons: { type: "boolean", default: true, description: "Show the action buttons." },
    buttons: {
      type: "buttons",
      max: 2,
      default: [
        { title: "See the work", href: "#", variant: "primary" },
        { title: "Write to us", href: "#", variant: "secondary-alt" },
      ],
    },
    showCards: { type: "boolean", default: true, description: "Show the stacked cards." },
    cards: {
      type: "list",
      fields: { title: "text", text: "text", href: "link", image: "image" },
      default: [
        { title: "The night cut", text: "See the still", href: "#", image: shot("1614728894747-a83421e2b9c9", "A rust-colored planet against black") },
        { title: "The long dune", text: "See the still", href: "#", image: shot("1509316785289-025f5b846b35", "Red dunes under a low sun") },
      ],
    },
    image: {
      type: "image",
      priority: true,
      description: "Dark photograph behind the headline.",
      default: shot("1451187580459-43490279c0fa", "Earth at night, seen from orbit"),
    },
  },

  variants: {
    overlay: {
      label: "Overlay",
      default: "strong",
      options: {
        subtle: { label: "Subtle", styles: { overlay: { base: { "background-color": "token(overlay-subtle)" } } } },
        medium: { label: "Medium", styles: { overlay: { base: { "background-color": "token(overlay)" } } } },
        strong: null,
      },
    },
    height: {
      label: "Height",
      default: "screen",
      options: {
        screen: null,
        auto: { label: "Auto", styles: { component: { base: { "min-height": "0px" }, lg: { "min-height": "0px" } } } },
      },
    },
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description", "actions"] } },

  tree: {
    role: "section",
    style: { base: { position: "relative", overflow: "hidden", "background-color": "token(ink)" } },
    children: [
      {
        tag: "img", key: "image", bind: "image", attrs: { "data-blok-depth": "0.18" },
        style: { base: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", width: "100%", height: "100%", "object-fit": "cover" } },
      },
      {
        tag: "div", key: "overlay", decorative: true,
        style: { base: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", "background-color": "token(overlay-strong)" } },
      },
      shell({
        tag: "div", key: "component",
        style: {
          base: { position: "relative", "z-index": "1", display: "flex", "flex-direction": "column", "align-items": "stretch", "justify-content": "flex-end", "row-gap": "2rem", "column-gap": "0rem", "min-height": "36rem" },
          lg: { "flex-direction": "row", "align-items": "center", "justify-content": "space-between", "column-gap": "3rem", "row-gap": "0rem", "min-height": "calc(100svh - 10rem)" },
        },
        children: [
          {
            tag: "div", key: "copy",
            style: { base: { width: "100%", "max-width": "36rem" }, lg: { width: "52%" } },
            children: [
              { tag: "div", key: "eyebrow", bind: "eyebrow", if: "showEyebrow", style: { base: { ...mono("token(surface-muted)"), "margin-bottom": "1rem" } } },
              {
                tag: "h1", key: "heading", bind: "heading",
                style: {
                  base: { "margin-top": "0", "margin-bottom": "0", color: "token(text-inverse)", "font-family": "token(font-display)", "font-size": "3rem", "line-height": "0.98", "font-weight": "600", "letter-spacing": "-0.04em" },
                  md: { "font-size": "4.25rem" },
                  lg: { "font-size": "5rem" },
                },
              },
              {
                tag: "p", key: "description", bind: "description", if: "showDescription",
                style: { base: { "margin-top": "1.25rem", "margin-bottom": "0", "max-width": "32rem", color: "token(surface-muted)", "font-size": "1.05rem", "line-height": "1.6" } },
              },
              {
                tag: "div", key: "actions", repeat: "buttons", if: "showButtons",
                style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "0.75rem", "row-gap": "0.75rem", "margin-top": "1.5rem" } },
              },
            ],
          },
          {
            tag: "div", key: "stack", repeat: "cards", if: "showCards", attrs: { "data-blok-depth": "-0.12" },
            style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.85rem", width: "100%" }, lg: { width: "22rem" } },
            children: [{
              tag: "a", key: "media-card", href: "item.href",
              style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.75rem", color: "token(ink)", "text-decoration": "none", "background-color": "token(surface)", ...radius("1rem"), ...pad("0.7rem") } },
              children: [
                {
                  tag: "div", key: "thumb",
                  style: { base: { position: "relative", overflow: "hidden", width: "100%", height: "8.5rem", ...radius("0.7rem") } },
                  children: [
                    { tag: "img", key: "thumb-image", bind: "item.image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } },
                    {
                      tag: "div", key: "play", text: "▶", decorative: true,
                      style: { base: { position: "absolute", top: "0.6rem", right: "0.6rem", bottom: "auto", left: "auto", display: "flex", "align-items": "center", "justify-content": "center", width: "2rem", height: "2rem", "background-color": "token(surface)", color: "token(ink)", "font-size": "0.7rem", ...radius("999px") } },
                    },
                  ],
                },
                { tag: "h3", key: "card-title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0", "padding-left": "0.35rem", "padding-right": "0.35rem", "font-family": "token(font-display)", "font-size": "1.05rem", "line-height": "1.25", "font-weight": "600" } } },
                { tag: "div", key: "card-link", bind: "item.text", style: { base: { "margin-bottom": "0.25rem", "padding-left": "0.35rem", "padding-right": "0.35rem", color: "token(accent)", "font-size": "0.9rem", "line-height": "1.3" } } },
              ],
            }],
          },
        ],
      }, { size: "medium" }),
    ],
  },
};
