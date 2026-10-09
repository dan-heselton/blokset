// Scroll-highlight quote: an oversized pull quote on a vermilion field. Words start dim and brighten
// one by one as you scroll through it. Attribution with a round portrait.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";

const paint = themeBase("accent", { "background-color": "bg", color: "fg" });
const muted = themeBase("accent", { color: "muted" }).color;
const glyph = themeBase("accent", { "background-color": "glyph" })["background-color"];

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "testimonial-07",
  prefix: "testimonial7",
  name: "Testimonial / Scroll-Highlight Quote",
  category: "testimonial",
  description: "Oversized pull quote on a bold color field; words brighten as you scroll through it.",

  props: {
    eyebrow: { type: "text", default: "Client notes", description: "Small label above the quote." },
    showEyebrow: { type: "boolean", default: true, description: "Show the eyebrow label." },
    quote: {
      type: "text",
      default:
        "They didn't just hand us a website. They handed us a system our team actually uses, and it still looks this good two years and forty pages later.",
    },
    name: { type: "text", default: "Maren Okafor" },
    role: { type: "text", default: "Director, North Shore Arts" },
    showAvatar: { type: "boolean", default: true, description: "Show the portrait." },
    avatar: {
      type: "image",
      description: "Round portrait beside the attribution.",
      default: { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=240&q=80", alt: "Portrait of Maren Okafor" },
    },
    showLogo: { type: "boolean", default: false, description: "Show the client logo." },
    logo: {
      type: "image",
      description: "Client logo above the attribution.",
      default: { src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=480&q=80", alt: "North Shore Arts logo" },
    },
  },

  variants: {
    theme: themeVariant({
      default: "accent",
      options: ["accent", "light", "dark"],
      map: {
        section: { "background-color": "bg", color: "fg" },
        dot: { "background-color": "glyph" },
        eyebrow: { color: "fg" },
        quote: { color: "fg" },
        name: { color: "fg" },
        role: { color: "muted" },
      },
    }),
    size: {
      label: "Size",
      default: "large",
      options: {
        large: null,
        medium: {
          label: "Medium",
          styles: {
            quote: {
              base: { "font-size": "1.5rem", "text-indent": "0rem" },
              md: { "font-size": "2.25rem" },
              lg: { "font-size": "3rem", "text-indent": "4rem" },
            },
            author: { base: { "padding-left": "0rem" }, lg: { "padding-left": "4rem" } },
          },
        },
      },
    },
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.12, targets: ["eyebrow", "author"] },
  },

  tree: {
    role: "section",
    style: { base: paint },
    children: [
      { role: "gutter", children: [{ role: "container", size: "large", children: [{ role: "section-padding", size: "large", children: [
        {
          tag: "div", key: "component",
          style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" }, lg: { "row-gap": "4rem" } },
          children: [
            {
              tag: "div", key: "eyebrow-row", if: "showEyebrow",
              style: { base: { display: "flex", "align-items": "center", "column-gap": "0.75rem" } },
              children: [
                { tag: "div", key: "dot", decorative: true, style: { base: { width: "0.625rem", height: "0.625rem", ...radius("50%"), "background-color": glyph } } },
                { tag: "div", key: "eyebrow", bind: "eyebrow", style: { base: { ...mono(paint.color) } } },
              ],
            },
            {
              tag: "p", key: "quote", bind: "quote", attrs: { "data-blok-split": "words" },
              style: {
                base: { "margin-top": "0", "margin-bottom": "0", "max-width": "70rem", "text-indent": "0rem", "font-family": "token(font-display)", "font-size": "2rem", "line-height": "1.12", "font-weight": "500", "letter-spacing": "-0.03em", color: paint.color },
                md: { "font-size": "3rem" },
                lg: { "text-indent": "8rem", "font-size": "4.25rem", "line-height": "1.06" },
              },
            },
            {
              tag: "img", key: "logo", bind: "logo", if: "showLogo",
              style: { base: { width: "8rem", height: "2rem", "object-fit": "contain", "object-position": "left center" } },
            },
            {
              tag: "div", key: "author",
              style: { base: { display: "flex", "align-items": "center", "column-gap": "1rem", "padding-left": "0rem" }, lg: { "padding-left": "8rem" } },
              children: [
                {
                  tag: "img", key: "avatar", bind: "avatar", if: "showAvatar",
                  style: { base: { width: "3.5rem", height: "3.5rem", "object-fit": "cover", ...radius("50%") } },
                },
                {
                  tag: "div", key: "author-text",
                  children: [
                    { tag: "div", key: "name", bind: "name", style: { base: { "font-size": "1.0625rem", "font-weight": "600", "line-height": "1.3", color: paint.color } } },
                    { tag: "div", key: "role", bind: "role", style: { base: { ...mono(muted), "letter-spacing": "0.02em", "text-transform": "none", "line-height": "1.5" } } },
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
