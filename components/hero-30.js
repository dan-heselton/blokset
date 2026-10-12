// A full-bleed photograph and a headline that switches from sans to italic serif.
import { mono, radius } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=2000&q=80`, alt });
const line = {
  "border-top-width": "1px", "border-right-width": "1px", "border-bottom-width": "1px", "border-left-width": "1px",
  "border-top-style": "solid", "border-right-style": "solid", "border-bottom-style": "solid", "border-left-style": "solid",
  "border-top-color": "token(line-inverse)", "border-right-color": "token(line-inverse)", "border-bottom-color": "token(line-inverse)", "border-left-color": "token(line-inverse)",
};

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-30",
  prefix: "hero30",
  name: "Hero / Mixed type",
  category: "hero",
  description: "A photograph, a small eyebrow, and a headline that finishes in italic serif. Words rise in on enter. Trust chips sit under the buttons.",

  props: {
    showEyebrow: { type: "boolean", default: true, description: "Show the eyebrow." },
    eyebrow: { type: "text", default: "Exterior sites · Rockport and the shore" },
    heading: { type: "text", default: "Exterior sites," },
    accent: { type: "text", default: "done properly." },
    showDescription: { type: "boolean", default: true, description: "Show the line under the headline." },
    description: { type: "text", default: "Windows, words, and the pages between them. Local, and we pick up the phone." },
    showButtons: { type: "boolean", default: true, description: "Show the action buttons." },
    buttons: {
      type: "buttons",
      max: 2,
      default: [
        { title: "Get a quote", href: "#", variant: "primary" },
        { title: "978 555 0148", href: "tel:+19785550148", variant: "secondary-alt" },
      ],
    },
    showChips: { type: "boolean", default: true, description: "Show the chips under the buttons." },
    chips: {
      type: "list",
      fields: { label: "text" },
      default: [
        { label: "Local crew" },
        { label: "On the day we named" },
        { label: "Our own equipment" },
      ],
    },
    image: {
      type: "image",
      priority: true,
      description: "Full-bleed photograph behind the headline.",
      default: shot("1564013799919-ab600027ffc6", "A white house with a dark roof"),
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
        auto: { label: "Auto", styles: { component: { base: { "min-height": "0px" }, md: { "min-height": "0px" }, lg: { "min-height": "0px" } } } },
      },
    },
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "description", "actions"] } },

  tree: {
    role: "section",
    style: { base: { position: "relative", overflow: "hidden", "background-color": "token(ink)" } },
    children: [
      {
        tag: "img", key: "image", bind: "image",
        style: { base: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", width: "100%", height: "100%", "object-fit": "cover" } },
      },
      {
        tag: "div", key: "shade", decorative: true,
        style: { base: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", "background-image": "linear-gradient(to top, token(shade-strong) 0%, token(shade-mid) 46%, token(shade-clear) 78%)" } },
      },
      {
        tag: "div", key: "overlay", decorative: true,
        style: { base: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", "background-color": "token(overlay)" } },
      },
      shell({
        tag: "div", key: "component",
        style: {
          base: { position: "relative", "z-index": "1", display: "flex", "flex-direction": "column", "justify-content": "flex-end", "min-height": "34rem" },
          md: { "min-height": "36rem" },
          lg: { "min-height": "calc(100svh - 10rem)" },
        },
        children: [
          {
            tag: "div", key: "eyebrow", bind: "eyebrow", if: "showEyebrow",
            style: { base: { ...mono("token(surface-muted)"), "margin-bottom": "1rem" } },
          },
          {
            tag: "h1", key: "headline",
            style: {
              base: { display: "flex", "flex-wrap": "wrap", "align-items": "baseline", "column-gap": "0.4rem", "row-gap": "0.15rem", "margin-top": "0", "margin-bottom": "0", "max-width": "18ch", color: "token(text-inverse)" },
            },
            children: [
              {
                tag: "div", key: "heading", bind: "heading", attrs: { "data-blok-split": "rise" },
                style: {
                  base: { display: "inline", "font-family": "token(font-display)", "font-size": "3.25rem", "line-height": "0.95", "font-weight": "600", "letter-spacing": "-0.04em" },
                  md: { "font-size": "4.75rem" },
                  lg: { "font-size": "6rem" },
                },
              },
              {
                tag: "div", key: "accent", bind: "accent", attrs: { "data-blok-split": "rise" },
                style: {
                  base: { display: "inline", "font-family": "token(font-serif)", "font-style": "italic", "font-weight": "500", "font-size": "3.25rem", "line-height": "0.95", "letter-spacing": "-0.03em" },
                  md: { "font-size": "4.75rem" },
                  lg: { "font-size": "6rem" },
                },
              },
            ],
          },
          {
            tag: "p", key: "description", bind: "description", if: "showDescription",
            style: { base: { "margin-top": "1.25rem", "margin-bottom": "0", "max-width": "28rem", color: "token(surface-muted)", "font-size": "1.05rem", "line-height": "1.55" } },
          },
          {
            tag: "div", key: "actions", repeat: "buttons", if: "showButtons",
            style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "0.75rem", "row-gap": "0.75rem", "margin-top": "1.5rem" } },
          },
          {
            tag: "div", key: "chips", repeat: "chips", if: "showChips",
            style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "0.5rem", "row-gap": "0.5rem", "margin-top": "1.25rem" } },
            children: [{
              tag: "div", key: "chip", bind: "item.label",
              style: { base: { ...mono("token(text-inverse)"), ...line, ...radius("999px"), "padding-top": "0.45rem", "padding-bottom": "0.45rem", "padding-left": "0.8rem", "padding-right": "0.8rem" } },
            }],
          },
        ],
      }, { size: "medium" }),
    ],
  },
};
