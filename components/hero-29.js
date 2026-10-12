// Full-bleed photograph, an uppercase headline, and a project card you can step through.
import { mono, pad, radius } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=2000&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-29",
  prefix: "hero29",
  name: "Hero / Project slider",
  category: "hero",
  description: "An uppercase headline on a full-bleed photograph, a project card with previous and next, and a dark band of figures underneath. On a phone the card sits under the note.",

  props: {
    heading: { type: "text", default: "Let’s build the next one together" },
    showNote: { type: "boolean", default: true, description: "Show the note under the headline." },
    note: { type: "text", default: "A site, a name, and a launch date. We still answer from 18 Main Street." },
    showAward: { type: "boolean", default: true, description: "Show the note beside the project card." },
    awardYear: { type: "text", default: "2014" },
    awardLabel: { type: "text", default: "On the books" },
    awardTitle: { type: "text", default: "Same desk since the first invoice" },
    showSlider: { type: "boolean", default: true, description: "Show the project card." },
    projects: {
      type: "list",
      fields: { title: "text", text: "text" },
      default: [
        { title: "Tidewater Supply", text: "A catalog and a checkout for a chandlery that still cuts keys at the counter." },
        { title: "North Shore Arts", text: "A program and a CMS the front desk can update between visitors." },
        { title: "Halyard", text: "A product site with one photograph and almost no adjectives." },
      ],
    },
    showBand: { type: "boolean", default: true, description: "Show the figures under the photograph." },
    stats: {
      type: "list",
      fields: { value: "text", label: "text" },
      default: [
        { value: "12", label: "years on Main Street" },
        { value: "48", label: "projects shipped" },
        { value: "30", label: "clients still calling" },
      ],
    },
    image: {
      type: "image",
      priority: true,
      description: "Full-bleed photograph behind the headline.",
      default: shot("1470071459604-3b5ec3a7fe05", "Fog over a dark ridge at sunset"),
    },
  },

  variants: {
    overlay: {
      label: "Overlay",
      default: "medium",
      options: {
        subtle: { label: "Subtle", styles: { overlay: { base: { "background-color": "token(overlay-subtle)" } } } },
        medium: null,
        strong: { label: "Strong", styles: { overlay: { base: { "background-color": "token(overlay-strong)" } } } },
      },
    },
    height: {
      label: "Height",
      default: "screen",
      options: {
        screen: null,
        auto: {
          label: "Auto",
          styles: { stage: { base: { "min-height": "0px" }, lg: { "min-height": "0px" } }, component: { base: { "min-height": "0px" }, lg: { "min-height": "0px" } } },
        },
      },
    },
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["heading", "note", "award"] },
  },

  tree: {
    role: "section",
    style: { base: { "background-color": "token(ink)" } },
    children: [
      {
        tag: "div", key: "stage",
        style: {
          base: { position: "relative", overflow: "hidden", "min-height": "36rem" },
          lg: { "min-height": "100svh" },
        },
        children: [
          {
            tag: "img", key: "image", bind: "image",
            style: { base: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", width: "100%", height: "100%", "object-fit": "cover" } },
          },
          {
            tag: "div", key: "shade", decorative: true,
            style: { base: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", "background-image": "linear-gradient(to top, token(shade-strong) 0%, token(shade-clear) 55%)" } },
          },
          {
            tag: "div", key: "overlay", decorative: true,
            style: { base: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", "background-color": "token(overlay)" } },
          },
          shell({
            tag: "div", key: "component",
            style: {
              base: { position: "relative", "z-index": "1", display: "flex", "flex-direction": "column", "justify-content": "space-between", "row-gap": "2.5rem", "min-height": "36rem" },
              lg: { "min-height": "calc(100svh - 10rem)" },
            },
            children: [
              {
                tag: "div", key: "intro",
                style: { base: { "max-width": "46rem" } },
                children: [
                  {
                    tag: "h1", key: "heading", bind: "heading",
                    style: {
                      base: { "margin-top": "0", "margin-bottom": "0", color: "token(text-inverse)", "font-family": "token(font-display)", "font-size": "2.75rem", "line-height": "0.92", "font-weight": "700", "letter-spacing": "-0.03em", "text-transform": "uppercase" },
                      md: { "font-size": "4.25rem" },
                      lg: { "font-size": "5.5rem" },
                    },
                  },
                  {
                    tag: "p", key: "note", bind: "note", if: "showNote",
                    style: { base: { "margin-top": "1.25rem", "margin-bottom": "0", "max-width": "32rem", color: "token(surface-muted)", "font-size": "1.05rem", "line-height": "1.5" } },
                  },
                ],
              },
              {
                tag: "div", key: "foot",
                style: {
                  base: { display: "flex", "flex-direction": "column", "align-items": "stretch", "justify-content": "flex-start", "row-gap": "1.5rem", "column-gap": "1.5rem" },
                  lg: { "flex-direction": "row", "align-items": "flex-end", "justify-content": "space-between", "row-gap": "0rem" },
                },
                children: [
                  {
                    tag: "div", key: "award", if: "showAward",
                    style: { base: { display: "flex", "align-items": "center", "column-gap": "0.9rem", "max-width": "18rem" } },
                    children: [
                      {
                        tag: "div", key: "award-year", bind: "awardYear",
                        style: { base: { display: "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", width: "4.5rem", height: "4.5rem", color: "token(text-inverse)", "border-top-width": "1px", "border-right-width": "1px", "border-bottom-width": "1px", "border-left-width": "1px", "border-top-style": "solid", "border-right-style": "solid", "border-bottom-style": "solid", "border-left-style": "solid", "border-top-color": "token(line-inverse)", "border-right-color": "token(line-inverse)", "border-bottom-color": "token(line-inverse)", "border-left-color": "token(line-inverse)", ...radius("999px"), "font-family": "token(font-display)", "font-size": "0.95rem", "font-weight": "600" } },
                      },
                      {
                        tag: "div", key: "award-copy",
                        children: [
                          { tag: "div", key: "award-label", bind: "awardLabel", style: { base: { ...mono("token(surface-muted)"), "margin-bottom": "0.25rem" } } },
                          { tag: "p", key: "award-title", bind: "awardTitle", style: { base: { "margin-top": "0", "margin-bottom": "0", color: "token(text-inverse)", "font-family": "token(font-display)", "font-size": "1.15rem", "line-height": "1.2", "font-weight": "600" } } },
                        ],
                      },
                    ],
                  },
                  {
                    tag: "div", key: "slider", if: "showSlider", attrs: { "data-blok-slider": "" },
                    style: { base: { width: "100%", "max-width": "28rem", "background-color": "token(surface)", color: "token(ink)", ...radius("1rem"), ...pad("1.25rem") } },
                    children: [
                      {
                        tag: "div", key: "viewport",
                        style: { base: { overflow: "hidden", width: "100%" } },
                        children: [{
                          tag: "div", key: "track", repeat: "projects", attrs: { "data-blok-slider-track": "" },
                          style: { base: { display: "flex", width: "100%" } },
                          children: [{
                            tag: "div", key: "slide", attrs: { "data-blok-slider-card": "" },
                            style: { base: { "flex-shrink": "0", width: "100%" } },
                            children: [
                              { tag: "h3", key: "slide-title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0.5rem", "font-family": "token(font-display)", "font-size": "1.35rem", "line-height": "1.15", "font-weight": "600", "letter-spacing": "-0.02em" } } },
                              { tag: "p", key: "slide-text", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", color: "token(ink-muted)", "font-size": "0.98rem", "line-height": "1.5" } } },
                            ],
                          }],
                        }],
                      },
                      {
                        tag: "div", key: "controls",
                        style: { base: { display: "flex", "align-items": "center", "justify-content": "flex-end", "column-gap": "0.5rem", "margin-top": "1rem" } },
                        children: [
                          { tag: "div", key: "count", text: "01 / 03", attrs: { "data-blok-slider-count": "" }, style: { base: { ...mono("token(ink-muted)"), "margin-right": "auto" } } },
                          { tag: "div", key: "prev", text: "←", attrs: { "data-blok-slider-prev": "" }, style: { base: { cursor: "pointer", "padding-left": "0.35rem", "padding-right": "0.35rem", "font-size": "1.1rem" } } },
                          { tag: "div", key: "next", text: "→", attrs: { "data-blok-slider-next": "" }, style: { base: { cursor: "pointer", "padding-left": "0.35rem", "padding-right": "0.35rem", "font-size": "1.1rem" } } },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          }, { size: "medium" }),
        ],
      },
      {
        tag: "div", key: "band", if: "showBand",
        style: { base: { "background-color": "token(ink)", color: "token(surface)" } },
        children: [
          shell({
            tag: "div", key: "stats", repeat: "stats",
            style: { base: { display: "flex", "flex-direction": "column", "justify-content": "flex-start", "column-gap": "0rem", "row-gap": "1.5rem" }, md: { "flex-direction": "row", "justify-content": "space-between", "column-gap": "2rem", "row-gap": "0rem" } },
            children: [{
              tag: "div", key: "stat",
              style: { base: { display: "flex", "align-items": "center", "column-gap": "0.9rem" } },
              children: [
                {
                  tag: "div", key: "stat-mark", decorative: true,
                  style: { base: { display: "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", width: "2.75rem", height: "2.75rem", "background-color": "token(ink-2)", color: "token(surface)", ...radius("0.7rem"), "font-size": "0.95rem" } },
                  children: [{ tag: "div", key: "stat-glyph", text: "✶" }],
                },
                {
                  tag: "div", key: "stat-copy",
                  children: [
                    { tag: "div", key: "stat-value", bind: "item.value", attrs: { "data-blok-count": "" }, style: { base: { "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1", "font-weight": "600", "letter-spacing": "-0.03em" } } },
                    { tag: "h3", key: "stat-label", bind: "item.label", style: { base: { "margin-top": "0.25rem", "margin-bottom": "0", color: "token(surface-muted)", "font-size": "0.95rem", "line-height": "1.3", "font-weight": "500" } } },
                  ],
                },
              ],
            }],
          }, { size: "medium" }),
        ],
      },
    ],
  },
};
