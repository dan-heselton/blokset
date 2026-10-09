// Bento grid: one large image card, an accent stat card, a dark note card and a wide tag card.
// 1 column on mobile, 2 on tablet, 3 on desktop with the image card spanning 2×2.
const round = (r) => ({
  "border-top-left-radius": r, "border-top-right-radius": r, "border-bottom-left-radius": r, "border-bottom-right-radius": r,
});
const cardPad = { base: { "padding-top": "1.5rem", "padding-bottom": "1.5rem", "padding-left": "1.5rem", "padding-right": "1.5rem" } };
const cardPadLg = { "padding-top": "2rem", "padding-bottom": "2rem", "padding-left": "2rem", "padding-right": "2rem" };
const label = (color) => ({ base: { "font-family": "token(font-mono)", "font-size": "0.75rem", "letter-spacing": "0.08em", "text-transform": "uppercase", color } });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "features-20",
  prefix: "features20",
  name: "Features / Bento Grid",
  category: "features",
  description: "Asymmetric bento grid: image card, count-up stat, dark note and a wide tag strip.",

  props: {
    heading: { type: "text", default: "Everything a small team needs to ship" },
    description: { type: "text", default: "Design, build and motion under one roof, delivered in the stack your team already knows." },
    featureLabel: { type: "text", default: "Design systems" },
    featureTitle: { type: "text", default: "Components your editors can't break" },
    featureText: { type: "text", default: "Every section is built as a reusable, documented component with sensible guardrails." },
    featureImage: { type: "image", default: { src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1600&q=80", alt: "" } },
    statLabel: { type: "text", default: "Lighthouse" },
    statValue: { type: "text", default: "98" },
    statText: { type: "text", default: "Average performance score across launches this year." },
    noteLabel: { type: "text", default: "Process" },
    noteText: { type: "text", default: "Weekly previews, no surprise invoices, and a launch checklist we actually follow." },
    noteLinkLabel: { type: "text", default: "How we work →" },
    noteHref: { type: "link", default: "#" },
    tagsTitle: { type: "text", default: "Built with" },
    tags: {
      type: "list",
      fields: { label: "text" },
      default: [{ label: "Webflow" }, { label: "Astro" }, { label: "React" }, { label: "Sanity" }, { label: "GSAP" }, { label: "Figma" }, { label: "Client-First" }],
    },
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.1, targets: ["heading", "description"] },
    reveal: { preset: "fade-up", targets: ["card-feature", "card-stat", "card-note", "card-tags"] },
  },

  tree: {
    role: "section",
    style: { base: { "background-color": "token(surface)", color: "token(ink)" } },
    children: [
      { role: "gutter", children: [{ role: "container", size: "large", children: [{ role: "section-padding", size: "large", children: [
        {
          tag: "div", key: "component",
          style: { base: { display: "flex", "flex-direction": "column", "row-gap": "3rem" } },
          children: [
            {
              tag: "div", key: "header",
              style: {
                base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "justify-content": "flex-start", "row-gap": "1.25rem" },
                lg: { "flex-direction": "row", "align-items": "flex-end", "justify-content": "space-between" },
              },
              children: [
                {
                  tag: "h2", key: "heading", bind: "heading",
                  style: {
                    base: { "margin-top": "0", "margin-bottom": "0", "max-width": "40rem", "font-family": "token(font-display)", "font-size": "2.5rem", "line-height": "1.05", "font-weight": "600", "letter-spacing": "-0.025em" },
                    md: { "font-size": "3.25rem" },
                    lg: { "font-size": "3.75rem" },
                  },
                },
                { tag: "p", key: "description", bind: "description", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "24rem", "font-size": "1.0625rem", "line-height": "1.6", color: "token(ink-muted)" } } },
              ],
            },
            {
              tag: "div", key: "grid",
              style: {
                base: { display: "grid", "grid-template-columns": "minmax(0, 1fr)", "grid-auto-rows": "auto", "column-gap": "1rem", "row-gap": "1rem" },
                md: { "grid-template-columns": "repeat(2, minmax(0, 1fr))" },
                lg: { "grid-template-columns": "repeat(3, minmax(0, 1fr))" },
              },
              children: [
                {
                  tag: "div", key: "card-feature",
                  style: {
                    base: { position: "relative", overflow: "hidden", display: "flex", "flex-direction": "column", "justify-content": "flex-end", "min-height": "26rem", "grid-column-start": "span 1", "grid-column-end": "span 1", "grid-row-start": "span 1", "grid-row-end": "span 1", color: "token(surface)", ...round("token(radius-card)"), ...cardPad.base },
                    md: { "grid-column-start": "span 2", "grid-column-end": "span 2" },
                    lg: { "grid-row-start": "span 2", "grid-row-end": "span 2", ...cardPadLg },
                  },
                  children: [
                    {
                      tag: "div", key: "feature-media", decorative: true,
                      style: { base: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", "z-index": "0" } },
                      children: [
                        { tag: "img", key: "feature-image", bind: "featureImage", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } },
                        { tag: "div", key: "feature-shade", style: { base: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", "background-image": "linear-gradient(to top, rgba(20, 20, 20, 0.88) 0%, rgba(20, 20, 20, 0.35) 45%, rgba(20, 20, 20, 0) 70%)" } } },
                      ],
                    },
                    {
                      tag: "div", key: "feature-body",
                      style: { base: { position: "relative", "z-index": "1", "max-width": "30rem" } },
                      children: [
                        { tag: "div", key: "feature-label", bind: "featureLabel", style: { base: { ...label("token(surface-muted)").base, "margin-bottom": "0.75rem" } } },
                        { tag: "h3", key: "feature-title", bind: "featureTitle", style: { base: { "margin-top": "0", "margin-bottom": "0.75rem", "font-family": "token(font-display)", "font-size": "1.875rem", "line-height": "1.1", "font-weight": "600", "letter-spacing": "-0.02em" }, lg: { "font-size": "2.5rem" } } },
                        { tag: "p", key: "feature-text", bind: "featureText", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.55", color: "token(surface-muted)" } } },
                      ],
                    },
                  ],
                },
                {
                  tag: "div", key: "card-stat",
                  style: {
                    base: { display: "flex", "flex-direction": "column", "justify-content": "space-between", "row-gap": "2rem", "min-height": "16rem", "background-color": "token(accent)", color: "token(ink)", ...round("token(radius-card)"), ...cardPad.base },
                    lg: cardPadLg,
                  },
                  children: [
                    { tag: "div", key: "stat-label", bind: "statLabel", style: label("token(ink)") },
                    {
                      tag: "div", key: "stat-body",
                      children: [
                        { tag: "div", key: "stat-value", bind: "statValue", attrs: { "data-forge-count": "" }, style: { base: { "font-family": "token(font-display)", "font-size": "5rem", "line-height": "0.9", "font-weight": "500", "letter-spacing": "-0.05em", "margin-bottom": "0.75rem" }, lg: { "font-size": "6rem" } } },
                        { tag: "p", key: "stat-text", bind: "statText", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "18rem", "font-size": "0.9375rem", "line-height": "1.5" } } },
                      ],
                    },
                  ],
                },
                {
                  tag: "div", key: "card-note",
                  style: {
                    base: { display: "flex", "flex-direction": "column", "justify-content": "space-between", "row-gap": "2rem", "min-height": "16rem", "background-color": "token(ink)", color: "token(surface)", ...round("token(radius-card)"), ...cardPad.base },
                    lg: cardPadLg,
                  },
                  children: [
                    { tag: "div", key: "note-label", bind: "noteLabel", style: label("token(surface-muted)") },
                    { tag: "p", key: "note-text", bind: "noteText", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.375rem", "line-height": "1.3", "font-weight": "500", "letter-spacing": "-0.01em" } } },
                    { tag: "a", key: "note-link", href: "noteHref", bind: "noteLinkLabel", style: { base: { color: "token(surface)", "font-family": "token(font-mono)", "font-size": "0.875rem", "text-decoration": "underline", "text-underline-offset": "0.3em" } } },
                  ],
                },
                {
                  tag: "div", key: "card-tags",
                  style: {
                    base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "justify-content": "flex-start", "row-gap": "1.25rem", "column-gap": "2rem", "grid-column-start": "span 1", "grid-column-end": "span 1", "background-color": "token(surface-2)", ...round("token(radius-card)"), ...cardPad.base },
                    md: { "grid-column-start": "span 2", "grid-column-end": "span 2" },
                    lg: { "flex-direction": "row", "align-items": "center", "justify-content": "space-between", "grid-column-start": "span 3", "grid-column-end": "span 3", ...cardPadLg },
                  },
                  children: [
                    { tag: "h3", key: "tags-title", bind: "tagsTitle", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.2", "font-weight": "600", "letter-spacing": "-0.015em" } } },
                    {
                      tag: "div", key: "tags", repeat: "tags",
                      style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "0.5rem", "row-gap": "0.5rem" } },
                      children: [
                        {
                          tag: "div", key: "tag", bind: "item.label",
                          style: { base: { "padding-top": "0.5rem", "padding-bottom": "0.5rem", "padding-left": "0.875rem", "padding-right": "0.875rem", "border-top-width": "1px", "border-bottom-width": "1px", "border-left-width": "1px", "border-right-width": "1px", "border-top-style": "solid", "border-bottom-style": "solid", "border-left-style": "solid", "border-right-style": "solid", "border-top-color": "token(line)", "border-bottom-color": "token(line)", "border-left-color": "token(line)", "border-right-color": "token(line)", ...round("999px"), "font-family": "token(font-mono)", "font-size": "0.8125rem", "line-height": "1.2" } },
                        },
                      ],
                    },
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
