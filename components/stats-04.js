// Stats ledger: oversized numerals that count up on scroll, set in a ruled four-column grid.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";

const paint = themeBase("light", { "background-color": "bg", color: "fg" });
const muted = themeBase("light", { color: "muted" }).color;
const line = themeBase("light", { "border-top-color": "line" })["border-top-color"];

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "stats-04",
  prefix: "stats4",
  name: "Stats / Count-up Ledger",
  category: "stats",
  description: "Oversized numerals that count up as they scroll in, in a ruled 1 → 2 → 4 column grid.",

  props: {
    eyebrow: { type: "text", default: "By the numbers", description: "Small label above the heading." },
    showEyebrow: { type: "boolean", default: true, description: "Show the eyebrow label." },
    heading: { type: "text", default: "Small studio, measurable results" },
    showDescription: { type: "boolean", default: true, description: "Show the header description." },
    description: {
      type: "text",
      default: "We keep the team small on purpose. You work directly with the people designing and building your site, start to finish.",
    },
    showImage: { type: "boolean", default: false, description: "Show the wide image." },
    image: {
      type: "image",
      description: "Wide photograph above the stats.",
      default: { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=2000&q=80", alt: "Sunlit ridge and a valley of pine trees" },
    },
    stats: {
      type: "list",
      fields: { value: "text", label: "text", detail: "text" },
      default: [
        { value: "140+", label: "Sites launched", detail: "From two-page portfolios to multi-language marketing platforms." },
        { value: "98%", label: "Client retention", detail: "Most new work comes from people we've already built for." },
        { value: "0.8s", label: "Median load", detail: "Largest contentful paint, measured on real mobile devices." },
        { value: "12", label: "Years independent", detail: "No account managers between you and the work." },
      ],
    },
  },

  variants: {
    theme: themeVariant({
      default: "light",
      options: ["light", "dark", "accent"],
      map: {
        section: { "background-color": "bg", color: "fg" },
        eyebrow: { color: "muted" },
        heading: { color: "fg" },
        description: { color: "muted" },
        grid: { "border-bottom-color": "line" },
        stat: { "border-top-color": "line" },
        label: { color: "fg" },
        detail: { color: "muted" },
      },
    }),
    columns: {
      label: "Columns",
      default: "four",
      options: {
        four: null,
        three: {
          label: "Three",
          styles: {
            stat: {
              base: { width: "100%" },
              md: { width: "50%" },
              lg: { width: "33.333%" },
            },
          },
        },
      },
    },
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.1, targets: ["eyebrow", "heading", "description"] },
    reveal: { preset: "fade-up", targets: ["stat"] },
  },

  tree: {
    role: "section",
    style: { base: paint },
    children: [
      { role: "gutter", children: [{ role: "container", size: "large", children: [{ role: "section-padding", size: "large", children: [
        {
          tag: "div", key: "component",
          style: { base: { display: "flex", "flex-direction": "column", "row-gap": "3.5rem" }, lg: { "row-gap": "5rem" } },
          children: [
            {
              tag: "div", key: "header",
              style: {
                base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "justify-content": "flex-start", "row-gap": "1.5rem", "column-gap": "0rem" },
                lg: { "flex-direction": "row", "align-items": "flex-end", "justify-content": "space-between", "column-gap": "4rem" },
              },
              children: [
                {
                  tag: "div", key: "title",
                  style: { base: { "max-width": "40rem" } },
                  children: [
                    { tag: "div", key: "eyebrow", bind: "eyebrow", if: "showEyebrow", style: { base: { ...mono(muted), "margin-bottom": "1.25rem" } } },
                    {
                      tag: "h2", key: "heading", bind: "heading",
                      style: {
                        base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "2.5rem", "line-height": "1.05", "font-weight": "600", "letter-spacing": "-0.025em", color: paint.color },
                        md: { "font-size": "3.25rem" },
                        lg: { "font-size": "4rem" },
                      },
                    },
                  ],
                },
                { tag: "p", key: "description", bind: "description", if: "showDescription", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "26rem", "font-size": "1.0625rem", "line-height": "1.6", color: muted } } },
              ],
            },
            {
              tag: "div", key: "media", if: "showImage",
              style: { base: { width: "100%", "aspect-ratio": "4 / 3", overflow: "hidden", ...radius("token(radius-card)") }, lg: { "aspect-ratio": "21 / 9" } },
              children: [
                { tag: "img", key: "image", bind: "image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } },
              ],
            },
            {
              tag: "div", key: "grid", repeat: "stats",
              style: { base: { display: "flex", "flex-wrap": "wrap", "border-bottom-width": "1px", "border-bottom-style": "solid", "border-bottom-color": line } },
              children: [
                {
                  tag: "div", key: "stat",
                  style: {
                    base: { width: "100%", "padding-top": "1.75rem", "padding-bottom": "2.5rem", "padding-right": "1.5rem", "border-top-width": "1px", "border-top-style": "solid", "border-top-color": line },
                    md: { width: "50%" },
                    lg: { width: "25%", "padding-bottom": "3rem" },
                  },
                  children: [
                    {
                      tag: "div", key: "value", bind: "item.value", attrs: { "data-blok-count": "" },
                      style: {
                        base: { "margin-bottom": "1.5rem", "font-family": "token(font-display)", "font-size": "4.5rem", "line-height": "1", "font-weight": "500", "letter-spacing": "-0.045em", "font-variant-numeric": "tabular-nums", color: paint.color },
                        md: { "font-size": "5.25rem" },
                        lg: { "font-size": "5.75rem" },
                      },
                    },
                    { tag: "div", key: "label", bind: "item.label", style: { base: { ...mono(paint.color), "margin-bottom": "0.5rem", "letter-spacing": "0.06em" } } },
                    { tag: "p", key: "detail", bind: "item.detail", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "17rem", "font-size": "0.9375rem", "line-height": "1.55", color: muted } } },
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
