// Marquee CTA: a full-bleed, endlessly scrolling headline between a status bar and the actions.
// The marquee slows down while hovered. Phrases are a list, so editors can change the loop.

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "cta-08",
  prefix: "cta8",
  name: "CTA / Marquee",
  category: "cta",
  description: "Dark closing CTA with a full-bleed, endlessly scrolling headline that slows on hover.",

  props: {
    status: { type: "text", default: "Taking new projects for Q1 2027" },
    response: { type: "text", default: "Replies within one business day" },
    phrases: {
      type: "list",
      fields: { text: "text" },
      default: [{ text: "Let's build something good" }, { text: "Start a project" }],
    },
    description: {
      type: "text",
      default: "Tell us what you're making. We'll come back with a plan, a timeline and a fixed price. No decks, no fluff.",
    },
    buttons: {
      type: "buttons",
      max: 2,
      default: [
        { title: "Start a project", href: "#", variant: "primary" },
        { title: "hello@studio.co", href: "mailto:hello@studio.co", variant: "secondary-alt" },
      ],
    },
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.1, targets: ["top", "description", "actions"] },
  },

  tree: {
    role: "section",
    style: { base: { position: "relative", overflow: "hidden", "background-color": "token(ink)", color: "token(surface)" } },
    children: [
      {
        role: "section-padding", size: "large",
        children: [
          { role: "gutter", children: [{ role: "container", size: "large", children: [
            {
              tag: "div", key: "top",
              style: {
                base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "justify-content": "flex-start", "row-gap": "0.75rem", "padding-bottom": "1.25rem", "border-bottom-width": "1px", "border-bottom-style": "solid", "border-bottom-color": "token(line-inverse)" },
                md: { "flex-direction": "row", "align-items": "center", "justify-content": "space-between" },
              },
              children: [
                {
                  tag: "div", key: "status-row",
                  style: { base: { display: "flex", "align-items": "center", "column-gap": "0.75rem" } },
                  children: [
                    { tag: "div", key: "dot", decorative: true, style: { base: { width: "0.5rem", height: "0.5rem", "border-top-left-radius": "50%", "border-top-right-radius": "50%", "border-bottom-left-radius": "50%", "border-bottom-right-radius": "50%", "background-color": "token(accent)", "box-shadow": "0 0 0 4px rgba(255, 91, 46, 0.25)" } } },
                    { tag: "div", key: "status", bind: "status", style: { base: { "font-family": "token(font-mono)", "font-size": "0.8125rem", "letter-spacing": "0.06em", "text-transform": "uppercase" } } },
                  ],
                },
                { tag: "div", key: "response", bind: "response", style: { base: { "font-family": "token(font-mono)", "font-size": "0.8125rem", "letter-spacing": "0.06em", "text-transform": "uppercase", color: "token(surface-muted)" } } },
              ],
            },
          ] }] },
          {
            tag: "div", key: "marquee",
            style: {
              base: { overflow: "hidden", "padding-top": "2.5rem", "padding-bottom": "2.5rem" },
              lg: { "padding-top": "4rem", "padding-bottom": "4rem" },
            },
            children: [
              {
                tag: "div", key: "track", repeat: "phrases", attrs: { "data-forge-marquee": "", "data-forge-speed": "70" },
                style: { base: { display: "flex", width: "max-content" } },
                children: [
                  {
                    tag: "div", key: "phrase",
                    style: { base: { display: "flex", "align-items": "center", "flex-shrink": "0", "column-gap": "2rem", "padding-right": "2rem" }, lg: { "column-gap": "3.5rem", "padding-right": "3.5rem" } },
                    children: [
                      {
                        tag: "div", key: "phrase-text", bind: "item.text",
                        style: {
                          base: { "font-family": "token(font-display)", "font-size": "4.5rem", "line-height": "1", "font-weight": "500", "letter-spacing": "-0.045em", "white-space": "nowrap" },
                          md: { "font-size": "7.5rem" },
                          lg: { "font-size": "11rem" },
                        },
                      },
                      { tag: "div", key: "star", text: "✳", decorative: true, style: { base: { color: "token(accent)", "font-size": "3rem", "line-height": "1" }, md: { "font-size": "4.5rem" }, lg: { "font-size": "6.5rem" } } },
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
                { tag: "p", key: "description", bind: "description", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "30rem", "font-size": "1.125rem", "line-height": "1.6", color: "token(surface-muted)" } } },
                { tag: "div", key: "actions", repeat: "buttons", style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "0.75rem", "row-gap": "0.75rem" } } },
              ],
            },
          ] }] },
        ],
      },
    ],
  },
};
