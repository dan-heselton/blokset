// Scroll-highlight quote: an oversized pull quote on a vermilion field. Words start dim and brighten
// one by one as you scroll through it. Attribution with a round portrait.

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "testimonial-07",
  prefix: "testimonial7",
  name: "Testimonial / Scroll-Highlight Quote",
  category: "testimonial",
  description: "Oversized pull quote on a bold color field; words brighten as you scroll through it.",

  props: {
    eyebrow: { type: "text", default: "Client notes" },
    quote: {
      type: "text",
      default:
        "They didn't just hand us a website. They handed us a system our team actually uses, and it still looks this good two years and forty pages later.",
    },
    name: { type: "text", default: "Maren Okafor" },
    role: { type: "text", default: "Director, North Shore Arts" },
    avatar: { type: "image", default: { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=240&q=80", alt: "" } },
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.12, targets: ["eyebrow", "author"] },
  },

  tree: {
    role: "section",
    style: { base: { "background-color": "token(accent)", color: "token(ink)" } },
    children: [
      { role: "gutter", children: [{ role: "container", size: "large", children: [{ role: "section-padding", size: "large", children: [
        {
          tag: "div", key: "component",
          style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" }, lg: { "row-gap": "4rem" } },
          children: [
            {
              tag: "div", key: "eyebrow-row",
              style: { base: { display: "flex", "align-items": "center", "column-gap": "0.75rem" } },
              children: [
                { tag: "div", key: "dot", decorative: true, style: { base: { width: "0.625rem", height: "0.625rem", "border-top-left-radius": "50%", "border-top-right-radius": "50%", "border-bottom-left-radius": "50%", "border-bottom-right-radius": "50%", "background-color": "token(ink)" } } },
                { tag: "div", key: "eyebrow", bind: "eyebrow", style: { base: { "font-family": "token(font-mono)", "font-size": "0.8125rem", "letter-spacing": "0.08em", "text-transform": "uppercase" } } },
              ],
            },
            {
              tag: "p", key: "quote", bind: "quote", attrs: { "data-forge-split": "words" },
              style: {
                base: { "margin-top": "0", "margin-bottom": "0", "max-width": "70rem", "text-indent": "0rem", "font-family": "token(font-display)", "font-size": "2rem", "line-height": "1.12", "font-weight": "500", "letter-spacing": "-0.03em" },
                md: { "font-size": "3rem" },
                lg: { "text-indent": "8rem", "font-size": "4.25rem", "line-height": "1.06" },
              },
            },
            {
              tag: "div", key: "author",
              style: { base: { display: "flex", "align-items": "center", "column-gap": "1rem", "padding-left": "0rem" }, lg: { "padding-left": "8rem" } },
              children: [
                {
                  tag: "img", key: "avatar", bind: "avatar",
                  style: { base: { width: "3.5rem", height: "3.5rem", "object-fit": "cover", "border-top-left-radius": "50%", "border-top-right-radius": "50%", "border-bottom-left-radius": "50%", "border-bottom-right-radius": "50%" } },
                },
                {
                  tag: "div", key: "author-text",
                  children: [
                    { tag: "div", key: "name", bind: "name", style: { base: { "font-size": "1.0625rem", "font-weight": "600", "line-height": "1.3" } } },
                    { tag: "div", key: "role", bind: "role", style: { base: { "font-family": "token(font-mono)", "font-size": "0.8125rem", "letter-spacing": "0.02em", "line-height": "1.5" } } },
                  ],
                },
              ],
            },
          ],
        },
      ] }] }] },
    ],
  },
};
