// A photograph in a rounded frame, with the headline low on the left and two stat cards on the right.
import { mono, pad, radius } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=2000&q=80`, alt });
const cardPad = pad("1.15rem");

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-28",
  prefix: "hero28",
  name: "Hero / Framed stats",
  category: "hero",
  description: "A rounded photograph with the headline and two actions low on the left, and two stat cards on the right. The photograph eases in as you scroll. On a phone the cards stack under the headline.",

  props: {
    showChip: { type: "boolean", default: true, description: "Show the chip on the photograph." },
    chip: { type: "text", default: "18 Main Street" },
    heading: { type: "text", default: "A site for the work, not the pitch." },
    showButtons: { type: "boolean", default: true, description: "Show the action buttons." },
    buttons: {
      type: "buttons",
      max: 2,
      default: [
        { title: "See the work", href: "#", variant: "primary" },
        { title: "Write to us", href: "#", variant: "secondary-alt" },
      ],
    },
    showCards: { type: "boolean", default: true, description: "Show the stat cards." },
    cards: {
      type: "list",
      fields: { glyph: "text", label: "text", value: "text", text: "text", href: "link" },
      default: [
        { glyph: "01", label: "Years", value: "12", text: "On this street since 2014", href: "#" },
        { glyph: "02", label: "Shipped", value: "48", text: "Projects still on the books", href: "#" },
      ],
    },
    image: {
      type: "image",
      priority: true,
      description: "Photograph filling the rounded frame.",
      default: shot("1500382017468-9049fed747ef", "A gold field under a wide sky"),
    },
  },

  variants: {
    overlay: {
      label: "Overlay",
      default: "medium",
      options: {
        subtle: { label: "Subtle", styles: { overlay: { base: { "background-color": "token(overlay-subtle)" } } } },
        medium: null,
        strong: { label: "Strong", styles: { overlay: { base: { "background-color": "token(overlay-strong)" } } } },
      },
    },
    height: {
      label: "Height",
      default: "screen",
      options: {
        screen: null,
        auto: {
          label: "Auto",
          styles: {
            frame: { base: { "min-height": "0px" }, lg: { "min-height": "0px" } },
            component: { base: { "min-height": "0px" }, lg: { "min-height": "0px" } },
          },
        },
      },
    },
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["chip", "heading", "actions"] },
  },

  tree: {
    role: "section",
    style: { base: { "background-color": "token(surface)" } },
    children: [
      shell({
        tag: "div", key: "frame",
        style: {
          base: { position: "relative", overflow: "hidden", display: "flex", "align-items": "flex-end", "min-height": "36rem", ...radius("1.25rem") },
          lg: { "min-height": "44rem" },
        },
        children: [
          {
            tag: "div", key: "media",
            style: { base: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", "z-index": "0" } },
            children: [
              {
                tag: "img", key: "image", bind: "image", attrs: { "data-blok-scroll": "zoom" },
                style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } },
              },
              {
                tag: "div", key: "shade", decorative: true,
                style: { base: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", "background-image": "linear-gradient(to top, token(shade-strong) 0%, token(shade-mid) 42%, token(shade-clear) 72%)" } },
              },
              {
                tag: "div", key: "overlay", decorative: true,
                style: { base: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", "background-color": "token(overlay)" } },
              },
            ],
          },
          {
            tag: "div", key: "component",
            style: {
              base: { position: "relative", "z-index": "1", display: "flex", "flex-direction": "column", "justify-content": "space-between", "row-gap": "2rem", width: "100%", "min-height": "36rem", ...pad("1.25rem") },
              lg: { "min-height": "44rem", ...pad("2rem") },
            },
            children: [
              {
                tag: "div", key: "chip", bind: "chip", if: "showChip",
                style: { base: { ...mono("token(text-inverse)"), display: "inline-block", "align-self": "flex-start", "background-color": "token(shade-mid)", ...radius("999px"), "padding-top": "0.4rem", "padding-bottom": "0.4rem", "padding-left": "0.75rem", "padding-right": "0.75rem" } },
              },
              {
                tag: "div", key: "bottom",
                style: {
                  base: { display: "flex", "flex-direction": "column", "align-items": "stretch", "justify-content": "flex-start", "row-gap": "1.5rem", "column-gap": "1rem" },
                  lg: { "flex-direction": "row", "align-items": "flex-end", "justify-content": "space-between", "column-gap": "2rem", "row-gap": "0rem" },
                },
                children: [
                  {
                    tag: "div", key: "copy",
                    style: { base: { "max-width": "36rem" } },
                    children: [
                      {
                        tag: "h1", key: "heading", bind: "heading",
                        style: {
                          base: { "margin-top": "0", "margin-bottom": "0", "max-width": "12ch", color: "token(text-inverse)", "font-family": "token(font-display)", "font-size": "3rem", "line-height": "0.95", "font-weight": "600", "letter-spacing": "-0.04em" },
                          md: { "font-size": "4.25rem" },
                          lg: { "font-size": "5.25rem" },
                        },
                      },
                      {
                        tag: "div", key: "actions", repeat: "buttons", if: "showButtons",
                        style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "0.75rem", "row-gap": "0.75rem", "margin-top": "1.25rem" } },
                      },
                    ],
                  },
                  {
                    tag: "div", key: "cards", repeat: "cards", if: "showCards",
                    style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.75rem", "column-gap": "0.75rem" }, md: { "flex-direction": "row" } },
                    children: [{
                      tag: "div", key: "card",
                      style: { base: { display: "flex", "flex-direction": "column", "justify-content": "space-between", "row-gap": "1.25rem", width: "100%", "min-height": "9rem", "background-color": "token(surface)", color: "token(ink)", ...radius("1rem"), ...cardPad }, md: { width: "13.5rem" } },
                      children: [
                        {
                          tag: "div", key: "card-top",
                          style: { base: { display: "flex", "align-items": "center", "column-gap": "0.5rem" } },
                          children: [
                            { tag: "div", key: "card-glyph", bind: "item.glyph", decorative: true, style: { base: { "font-size": "0.9rem", "line-height": "1" } } },
                            { tag: "h3", key: "card-label", bind: "item.label", style: { base: { "margin-top": "0", "margin-bottom": "0", ...mono("token(ink-muted)") } } },
                          ],
                        },
                        {
                          tag: "div", key: "card-value", bind: "item.value", attrs: { "data-blok-count": "" },
                          style: { base: { "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1", "font-weight": "600", "letter-spacing": "-0.03em" } },
                        },
                        {
                          tag: "div", key: "card-foot",
                          style: { base: { display: "flex", "align-items": "flex-end", "justify-content": "space-between", "column-gap": "0.75rem" } },
                          children: [
                            { tag: "p", key: "card-text", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "0.875rem", "line-height": "1.4", color: "token(ink-muted)" } } },
                            {
                              tag: "a", key: "card-link", href: "item.href", text: "↗",
                              style: { base: { display: "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", width: "2.25rem", height: "2.25rem", color: "token(ink)", "text-decoration": "none", "border-top-width": "1px", "border-right-width": "1px", "border-bottom-width": "1px", "border-left-width": "1px", "border-top-style": "solid", "border-right-style": "solid", "border-bottom-style": "solid", "border-left-style": "solid", "border-top-color": "token(line)", "border-right-color": "token(line)", "border-bottom-color": "token(line)", "border-left-color": "token(line)", ...radius("999px") } },
                            },
                          ],
                        },
                      ],
                    }],
                  },
                ],
              },
            ],
          },
        ],
      }, { size: "medium" }),
    ],
  },
};
