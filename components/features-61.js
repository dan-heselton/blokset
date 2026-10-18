// A dark split: a captioned photograph, a short essay, and four counted figures.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  heading: { color: "fg" },
  kicker: { color: "muted" },
  dot: { "background-color": "glyph" },
  body: { color: "muted" },
  "kicker-row": { "border-bottom-color": "line" },
  stat: { "border-left-color": "line" },
  label: { color: "muted" },
  action: { "background-color": "glyph", color: "fg" },
};
const t = (key) => themeBase("dark", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });
const pill = {
  "border-top-left-radius": "999px", "border-top-right-radius": "999px",
  "border-bottom-right-radius": "999px", "border-bottom-left-radius": "999px",
};

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "features-61",
  prefix: "features61",
  name: "Features / Image stats",
  category: "features",
  description: "A headline, a captioned photograph, two paragraphs, and four figures that count up. The figures sit on a left rule.",

  props: {
    heading: { type: "text", default: "A calm structure for ambitious brands" },
    showImage: { type: "boolean", default: true },
    image: { type: "image", default: photo("1519710164239-da123dc03ef4", "Two people standing in a sunlit room") },
    showCaption: { type: "boolean", default: true },
    caption: { type: "text", default: "It's a good place to describe image" },
    showKicker: { type: "boolean", default: true },
    kicker: { type: "text", default: "Well-designed system" },
    showBody: { type: "boolean", default: true },
    lead: { type: "text", default: "This isn't just a set of pages. It's a fully modular template built like lasting infrastructure." },
    support: { type: "text", default: "With reusable sections and flexible layouts, you make websites that feel modern and timeless. Type, space, and motion give the brand a foundation that grows with it." },
    showAction: { type: "boolean", default: true },
    action: { type: "text", default: "About company" },
    actionHref: { type: "link", default: "#" },
    showStats: { type: "boolean", default: true },
    stats: {
      type: "list",
      fields: { value: "text", label: "text" },
      default: [
        { value: "50+", label: "Pre-built sections and layouts." },
        { value: "1500+", label: "Happy creators using the templates." },
        { value: "99%", label: "Lighthouse performance score." },
        { value: "50+", label: "Responsive and fully scalable design." },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "dark", options: ["dark", "light", "accent"], map: THEME }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["heading", "kicker"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" } },
        children: [
          {
            tag: "h2", key: "heading", bind: "heading",
            style: {
              base: { "margin-top": "0", "margin-bottom": "0", "max-width": "18rem", "font-family": "token(font-display)", "font-size": "2.75rem", "line-height": "1.02", "font-weight": "600", "letter-spacing": "-0.04em", ...t("heading") },
              lg: { "max-width": "28rem", "font-size": "4rem" },
            },
          },
          {
            tag: "div", key: "split",
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "align-items": "start", "row-gap": "2rem", "column-gap": "0rem" },
              lg: { "grid-template-columns": "1.1fr 0.9fr", "column-gap": "3rem", "row-gap": "0rem" },
            },
            children: [
              {
                tag: "div", key: "figure", if: "showImage",
                style: { base: { position: "relative", width: "100%" } },
                children: [
                  {
                    tag: "img", key: "image", bind: "image",
                    style: { base: { display: "block", width: "100%", height: "18rem", "object-fit": "cover", ...radius("token(radius-card)") }, lg: { height: "28rem" } },
                  },
                  {
                    tag: "div", key: "caption", bind: "caption", if: "showCaption",
                    style: { base: { position: "absolute", left: "1rem", bottom: "1rem", "background-color": "token(overlay-strong)", color: "token(surface)", ...mono(), "font-size": "0.6875rem", "padding-top": "0.4rem", "padding-right": "0.7rem", "padding-bottom": "0.4rem", "padding-left": "0.7rem", ...pill } },
                  },
                ],
              },
              {
                tag: "div", key: "copy",
                style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "1.25rem" } },
                children: [
                  {
                    tag: "div", key: "kicker-row", if: "showKicker",
                    style: { base: { display: "flex", "align-items": "center", "column-gap": "0.5rem", width: "100%", "padding-bottom": "0.85rem", "border-bottom-width": "1px", "border-bottom-style": "solid", "border-bottom-color": t("kicker-row")["border-bottom-color"] } },
                    children: [
                      { tag: "div", key: "dot", decorative: true, style: { base: { width: "0.45rem", height: "0.45rem", "flex-shrink": "0", ...t("dot"), ...pill } } },
                      { tag: "div", key: "kicker", bind: "kicker", style: { base: { ...mono(), ...t("kicker") } } },
                    ],
                  },
                  {
                    tag: "div", key: "body", if: "showBody",
                    style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.9rem", ...t("body") } },
                    children: [
                      { tag: "p", key: "lead", bind: "lead", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.6" } } },
                      { tag: "p", key: "support", bind: "support", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.6" } } },
                    ],
                  },
                  {
                    tag: "a", key: "action", bind: "action", href: "actionHref", if: "showAction",
                    style: {
                      base: {
                        display: "inline-flex", "text-decoration": "none", "font-weight": "600",
                        "padding-top": "0.8rem", "padding-right": "1.15rem", "padding-bottom": "0.8rem", "padding-left": "1.15rem",
                        ...pill, ...t("action"),
                      },
                    },
                  },
                  {
                    tag: "div", key: "stats", repeat: "stats", if: "showStats",
                    style: {
                      base: { display: "grid", "grid-template-columns": "1fr", "row-gap": "1.25rem", "column-gap": "0rem", width: "100%", "margin-top": "0.5rem" },
                      md: { "grid-template-columns": "1fr 1fr", "column-gap": "1.5rem", "row-gap": "1.5rem" },
                    },
                    children: [{
                      tag: "div", key: "stat",
                      style: {
                        base: {
                          display: "flex", "flex-direction": "column", "row-gap": "0.35rem",
                          "padding-left": "1rem", "border-left-width": "1px", "border-left-style": "solid", "border-left-color": t("stat")["border-left-color"],
                        },
                      },
                      children: [
                        { tag: "div", key: "value", bind: "item.value", attrs: { "data-blok-count": "" }, style: { base: { "font-family": "token(font-display)", "font-size": "2.5rem", "line-height": "1", "font-weight": "600", "letter-spacing": "-0.04em" } } },
                        { tag: "div", key: "label", bind: "item.label", style: { base: { "font-size": "0.875rem", "line-height": "1.45", ...t("label") } } },
                      ],
                    }],
                  },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
