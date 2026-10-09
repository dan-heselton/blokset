// Stats ledger: oversized numerals that count up on scroll, set in a ruled four-column grid.

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "stats-04",
  prefix: "stats4",
  name: "Stats / Count-up Ledger",
  category: "stats",
  description: "Oversized numerals that count up as they scroll in, in a ruled 1 → 2 → 4 column grid.",

  props: {
    eyebrow: { type: "text", default: "By the numbers" },
    heading: { type: "text", default: "Small studio, measurable results" },
    description: {
      type: "text",
      default: "We keep the team small on purpose. You work directly with the people designing and building your site, start to finish.",
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

  motion: {
    enter: { preset: "fade-up", stagger: 0.1, targets: ["eyebrow", "heading", "description"] },
    reveal: { preset: "fade-up", targets: ["stat"] },
  },

  tree: {
    role: "section",
    style: { base: { "background-color": "token(surface)", color: "token(ink)" } },
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
                    { tag: "div", key: "eyebrow", bind: "eyebrow", style: { base: { "margin-bottom": "1.25rem", "font-family": "token(font-mono)", "font-size": "0.8125rem", "letter-spacing": "0.08em", "text-transform": "uppercase", color: "token(ink-muted)" } } },
                    {
                      tag: "h2", key: "heading", bind: "heading",
                      style: {
                        base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "2.5rem", "line-height": "1.05", "font-weight": "600", "letter-spacing": "-0.025em" },
                        md: { "font-size": "3.25rem" },
                        lg: { "font-size": "4rem" },
                      },
                    },
                  ],
                },
                { tag: "p", key: "description", bind: "description", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "26rem", "font-size": "1.0625rem", "line-height": "1.6", color: "token(ink-muted)" } } },
              ],
            },
            {
              tag: "div", key: "grid", repeat: "stats",
              style: { base: { display: "flex", "flex-wrap": "wrap", "border-bottom-width": "1px", "border-bottom-style": "solid", "border-bottom-color": "token(line)" } },
              children: [
                {
                  tag: "div", key: "stat",
                  style: {
                    base: { width: "100%", "padding-top": "1.75rem", "padding-bottom": "2.5rem", "padding-right": "1.5rem", "border-top-width": "1px", "border-top-style": "solid", "border-top-color": "token(line)" },
                    md: { width: "50%" },
                    lg: { width: "25%", "padding-bottom": "3rem" },
                  },
                  children: [
                    {
                      tag: "div", key: "value", bind: "item.value", attrs: { "data-forge-count": "" },
                      style: {
                        base: { "margin-bottom": "1.5rem", "font-family": "token(font-display)", "font-size": "4.5rem", "line-height": "1", "font-weight": "500", "letter-spacing": "-0.045em", "font-variant-numeric": "tabular-nums" },
                        md: { "font-size": "5.25rem" },
                        lg: { "font-size": "5.75rem" },
                      },
                    },
                    { tag: "div", key: "label", bind: "item.label", style: { base: { "margin-bottom": "0.5rem", "font-family": "token(font-mono)", "font-size": "0.8125rem", "letter-spacing": "0.06em", "text-transform": "uppercase" } } },
                    { tag: "p", key: "detail", bind: "item.detail", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "17rem", "font-size": "0.9375rem", "line-height": "1.55", color: "token(ink-muted)" } } },
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
