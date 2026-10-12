// Case quote: a photograph on one side, the quote and a single counted result on the other.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  eyebrow: { color: "muted" },
  quote: { color: "fg" },
  name: { color: "fg" },
  role: { color: "muted" },
  value: { color: "fg" },
  "stat-label": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "testimonial-09",
  prefix: "testimonial9",
  name: "Testimonial / Case Quote",
  category: "testimonial",
  description: "A project photograph beside a quote and one counted result. Image can sit on either side.",

  props: {
    showEyebrow: { type: "boolean", default: true },
    eyebrow: { type: "text", default: "North Shore Arts · 2024" },
    quote: {
      type: "text",
      default: "They didn't hand us a website. They handed us a system our team still opens every week.",
    },
    name: { type: "text", default: "Maren Okafor" },
    role: { type: "text", default: "Director, North Shore Arts" },
    showAvatar: { type: "boolean", default: true },
    avatar: {
      type: "image",
      default: { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=240&q=80", alt: "Portrait of Maren Okafor" },
    },
    showStat: { type: "boolean", default: true, description: "Show the counted result under the quote." },
    statValue: { type: "text", default: "40" },
    statLabel: { type: "text", default: "pages the staff still edits" },
    showImage: { type: "boolean", default: true },
    image: {
      type: "image",
      default: { src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1400&q=80", alt: "Sunlit gallery room with a wooden chair" },
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
    imageSide: {
      label: "Image side",
      default: "image-right",
      options: {
        "image-right": null,
        "image-left": {
          label: "Image left",
          styles: {
            component: {
              base: { "flex-direction": "column" },
              lg: { "flex-direction": "row-reverse" },
            },
          },
        },
      },
    },
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.1, targets: ["eyebrow", "quote", "author", "stat"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: {
          base: { display: "flex", "flex-direction": "column", "align-items": "stretch", "row-gap": "2.5rem", "column-gap": "0rem" },
          lg: { "flex-direction": "row", "align-items": "center", "row-gap": "0rem", "column-gap": "4rem" },
        },
        children: [
          {
            tag: "div", key: "content",
            style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1.75rem", "flex-grow": "1", "flex-basis": "0%", "min-width": "0" } },
            children: [
              { tag: "div", key: "eyebrow", bind: "eyebrow", if: "showEyebrow", style: { base: { ...mono(), ...t("eyebrow") } } },
              {
                tag: "h2", key: "quote", bind: "quote",
                style: {
                  base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.85rem", "line-height": "1.15", "font-weight": "500", "letter-spacing": "-0.03em", ...t("quote") },
                  md: { "font-size": "2.5rem" },
                  lg: { "font-size": "3rem" },
                },
              },
              {
                tag: "div", key: "author",
                style: { base: { display: "flex", "align-items": "center", "column-gap": "0.9rem" } },
                children: [
                  { tag: "img", key: "avatar", bind: "avatar", if: "showAvatar", style: { base: { width: "3rem", height: "3rem", "object-fit": "cover", "flex-shrink": "0", ...radius("50%") } } },
                  {
                    tag: "div", key: "author-text",
                    children: [
                      { tag: "div", key: "name", bind: "name", style: { base: { "font-size": "1rem", "font-weight": "600", "line-height": "1.3", ...t("name") } } },
                      { tag: "div", key: "role", bind: "role", style: { base: { "font-size": "0.875rem", "line-height": "1.4", ...t("role") } } },
                    ],
                  },
                ],
              },
              {
                tag: "div", key: "stat", if: "showStat",
                style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.35rem", "padding-top": "0.5rem" } },
                children: [
                  {
                    tag: "div", key: "value", bind: "statValue", attrs: { "data-blok-count": "" },
                    style: {
                      base: { "font-family": "token(font-display)", "font-size": "4.5rem", "line-height": "0.9", "font-weight": "500", "letter-spacing": "-0.05em", ...t("value") },
                      lg: { "font-size": "6rem" },
                    },
                  },
                  { tag: "div", key: "stat-label", bind: "statLabel", style: { base: { ...mono(), "letter-spacing": "0.06em", ...t("stat-label") } } },
                ],
              },
            ],
          },
          {
            tag: "div", key: "figure", if: "showImage",
            style: { base: { "flex-grow": "1", "flex-basis": "0%", "min-width": "0", overflow: "hidden", "aspect-ratio": "4 / 5", ...radius("token(radius-card)") }, lg: { "aspect-ratio": "5 / 6" } },
            children: [
              { tag: "img", key: "image", bind: "image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } },
            ],
          },
        ],
      }),
    ],
  },
};
