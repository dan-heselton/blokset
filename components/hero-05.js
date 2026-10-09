/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-05",
  prefix: "hero05",
  name: "Hero / Image Background",
  category: "hero",
  description: "Full-height hero with a background image, dark overlay, left-aligned copy and two actions.",

  props: {
    heading: { type: "text", default: "Medium length hero heading goes here" },
    description: {
      type: "text",
      default: "A short supporting line that explains the offer in plain language and gives visitors a reason to keep scrolling.",
    },
    buttons: {
      type: "buttons",
      max: 2,
      default: [
        { title: "Get started", href: "#", variant: "primary" },
        { title: "Learn more", href: "#", variant: "secondary-alt" },
      ],
    },
    image: {
      type: "image",
      priority: true,
      default: { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=2000&q=80", alt: "" },
    },
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.12, targets: ["heading", "description", "actions"] },
    scroll: { preset: "parallax", targets: ["media"], strength: 0.15 },
  },

  tree: {
    role: "section", key: "section",
    style: { base: { position: "relative", overflow: "hidden" } },
    children: [
      {
        role: "gutter",
        children: [
          {
            role: "container", size: "large",
            children: [
              {
                role: "section-padding", size: "large",
                children: [
                  {
                    tag: "div", key: "component",
                    style: {
                      // min-height subtracts the section padding so the whole hero fits one screen.
                      base: { position: "relative", "z-index": "1", display: "flex", "align-items": "center", "min-height": "calc(100svh - 8rem)", "max-height": "60rem" },
                      md: { "min-height": "calc(100svh - 12rem)" },
                      lg: { "min-height": "calc(100svh - 16rem)" },
                    },
                    children: [
                      {
                        tag: "div", key: "content",
                        style: { base: { "max-width": "28rem" }, lg: { "max-width": "40rem" } },
                        children: [
                          {
                            tag: "h1", key: "heading", bind: "heading",
                            style: {
                              base: { "margin-top": "0", "margin-bottom": "1.25rem", color: "token(text-inverse)", "font-family": "token(font-display)", "font-size": "3.5rem", "line-height": "1.1", "font-weight": "700", "letter-spacing": "-0.02em" },
                              md: { "margin-bottom": "1.5rem", "font-size": "4.5rem" },
                              lg: { "font-size": "5.25rem" },
                            },
                          },
                          {
                            tag: "p", key: "description", bind: "description",
                            style: {
                              base: { "margin-top": "0", "margin-bottom": "0", color: "token(text-inverse)", "font-size": "1rem", "line-height": "1.6", opacity: "0.9" },
                              md: { "font-size": "1.125rem" },
                            },
                          },
                          {
                            tag: "div", key: "actions", repeat: "buttons",
                            style: {
                              base: { display: "flex", "flex-wrap": "wrap", "column-gap": "1rem", "row-gap": "1rem", "margin-top": "1.5rem" },
                              md: { "margin-top": "2rem" },
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        tag: "div", key: "media",
        style: { base: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", "z-index": "0" } },
        children: [
          { tag: "img", key: "image", bind: "image", style: { base: { width: "100%", height: "100%", "object-fit": "cover" } } },
          {
            tag: "div", key: "overlay", decorative: true,
            style: { base: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", "background-color": "token(overlay)" } },
          },
        ],
      },
    ],
  },
};
