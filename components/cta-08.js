// Marquee CTA: a full-bleed, endlessly scrolling headline between a status bar and the actions.
// The marquee slows down while hovered. Phrases are a list, so editors can change the loop.
import { inset0, mono, themeBase, themeVariant } from "./_lib/themes.js";

const paint = themeBase("dark", { "background-color": "bg", color: "fg" });
const muted = themeBase("dark", { color: "muted" }).color;
const line = themeBase("dark", { "border-bottom-color": "line" })["border-bottom-color"];
const glyph = themeBase("dark", { color: "glyph" }).color;

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "cta-08",
  prefix: "cta8",
  name: "CTA / Marquee",
  category: "cta",
  description: "Dark closing CTA with a full-bleed, endlessly scrolling headline that slows on hover.",

  props: {
    showStatus: { type: "boolean", default: true, description: "Show the status bar." },
    status: { type: "text", default: "Taking new projects for Q1 2027" },
    response: { type: "text", default: "Replies within one business day" },
    showMarquee: { type: "boolean", default: true, description: "Show the scrolling headline." },
    phrases: {
      type: "list",
      fields: { text: "text" },
      default: [{ text: "Let's build something good" }, { text: "Start a project" }],
    },
    description: {
      type: "text",
      default: "Tell us what you're making. We'll come back with a plan, a timeline and a fixed price. No decks, no fluff.",
    },
    showButtons: { type: "boolean", default: true, description: "Show the action buttons." },
    buttons: {
      type: "buttons",
      max: 2,
      default: [
        { title: "Start a project", href: "#", variant: "primary" },
        { title: "hello@studio.co", href: "mailto:hello@studio.co", variant: "secondary-alt" },
      ],
    },
    showImage: { type: "boolean", default: false, description: "Show the background photograph." },
    image: {
      type: "image",
      description: "Grayscale background photograph behind the section.",
      default: { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2000&q=80", alt: "Glass tower facade against a dusk sky" },
    },
  },

  variants: {
    theme: themeVariant({
      default: "dark",
      options: ["dark", "accent", "light"],
      map: {
        section: { "background-color": "bg", color: "fg" },
        shade: { "background-color": "bg" },
        dot: { "background-color": "glyph" },
        status: { color: "fg" },
        response: { color: "muted" },
        top: { "border-bottom-color": "line" },
        "phrase-text": { color: "fg" },
        star: { color: "glyph" },
        description: { color: "muted" },
      },
    }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.1, targets: ["top", "description", "actions"] },
  },

  tree: {
    role: "section",
    style: { base: { position: "relative", isolation: "isolate", overflow: "hidden", ...paint } },
    children: [
      {
        tag: "div", key: "media", if: "showImage",
        style: { base: { ...inset0, "z-index": "-1" } },
        children: [
          { tag: "img", key: "image", bind: "image", style: { base: { width: "100%", height: "100%", "object-fit": "cover", filter: "grayscale(1)" } } },
          { tag: "div", key: "shade", decorative: true, style: { base: { ...inset0, "background-color": paint["background-color"], opacity: "0.82" } } },
        ],
      },
      {
        role: "section-padding", size: "large",
        children: [
          { role: "gutter", children: [{ role: "container", size: "large", children: [
            {
              tag: "div", key: "top", if: "showStatus",
              style: {
                base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "justify-content": "flex-start", "row-gap": "0.75rem", "padding-bottom": "1.25rem", "border-bottom-width": "1px", "border-bottom-style": "solid", "border-bottom-color": line },
                md: { "flex-direction": "row", "align-items": "center", "justify-content": "space-between" },
              },
              children: [
                {
                  tag: "div", key: "status-row",
                  style: { base: { display: "flex", "align-items": "center", "column-gap": "0.75rem" } },
                  children: [
                    { tag: "div", key: "dot", decorative: true, style: { base: { width: "0.5rem", height: "0.5rem", "border-top-left-radius": "50%", "border-top-right-radius": "50%", "border-bottom-left-radius": "50%", "border-bottom-right-radius": "50%", "background-color": glyph, "box-shadow": "0 0 0 4px token(accent-glow)" } } },
                    { tag: "div", key: "status", bind: "status", style: { base: { ...mono(paint.color), "letter-spacing": "0.06em" } } },
                  ],
                },
                { tag: "div", key: "response", bind: "response", style: { base: { ...mono(muted), "letter-spacing": "0.06em" } } },
              ],
            },
          ] }] },
          {
            tag: "div", key: "marquee", if: "showMarquee",
            style: {
              base: { overflow: "hidden", "padding-top": "2.5rem", "padding-bottom": "2.5rem" },
              lg: { "padding-top": "4rem", "padding-bottom": "4rem" },
            },
            children: [
              {
                tag: "div", key: "track", repeat: "phrases", attrs: { "data-blok-marquee": "", "data-blok-speed": "70" },
                style: { base: { display: "flex", width: "max-content" } },
                children: [
                  {
                    tag: "div", key: "phrase",
                    style: { base: { display: "flex", "align-items": "center", "flex-shrink": "0", "column-gap": "2rem", "padding-right": "2rem" }, lg: { "column-gap": "3.5rem", "padding-right": "3.5rem" } },
                    children: [
                      {
                        tag: "div", key: "phrase-text", bind: "item.text",
                        style: {
                          base: { "font-family": "token(font-display)", "font-size": "4.5rem", "line-height": "1", "font-weight": "500", "letter-spacing": "-0.045em", "white-space": "nowrap", color: paint.color },
                          md: { "font-size": "7.5rem" },
                          lg: { "font-size": "11rem" },
                        },
                      },
                      { tag: "div", key: "star", text: "✳", decorative: true, style: { base: { color: glyph, "font-size": "3rem", "line-height": "1" }, md: { "font-size": "4.5rem" }, lg: { "font-size": "6.5rem" } } },
                    ],
                  },
                ],
              },
            ],
          },
          { role: "gutter", children: [{ role: "container", size: "large", children: [
            {
              tag: "div", key: "bottom",
              style: {
                base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "justify-content": "flex-start", "row-gap": "2rem" },
                md: { "flex-direction": "row", "align-items": "flex-end", "justify-content": "space-between" },
              },
              children: [
                { tag: "p", key: "description", bind: "description", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "30rem", "font-size": "1.125rem", "line-height": "1.6", color: muted } } },
                { tag: "div", key: "actions", repeat: "buttons", if: "showButtons", style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "0.75rem", "row-gap": "0.75rem" } } },
              ],
            },
          ] }] },
        ],
      },
    ],
  },
};
