// Dark shell: stacked white copy + logo cards on the left, tall photograph on the right.
import { mono, pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  component: { "background-color": "bg", color: "fg" },
  "copy-card": { "background-color": "bg", color: "fg" },
  badge: { "background-color": "glyph", color: "card" },
  body: { color: "muted" },
  "logos-card": { "background-color": "bg", color: "fg" },
  "logos-title": { color: "fg" },
  logo: { color: "muted" },
};
const t = (key) => themeBase("dark", THEME[key]);
// White cards on the dark shell — fixed light palette so they stay readable.
const card = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });
const pill = {
  "border-top-left-radius": "999px", "border-top-right-radius": "999px",
  "border-bottom-right-radius": "999px", "border-bottom-left-radius": "999px",
};
const LIME = "#c8f542";

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "bento-24",
  prefix: "bento24",
  name: "Bento / Built to move",
  category: "bento",
  description: "A dark frame with a stacked copy card and logo cloud on the left, and a tall photograph spanning the right.",

  props: {
    showBadge: { type: "boolean", default: true },
    badge: { type: "text", default: "About us" },
    heading: { type: "text", default: "Built to Move" },
    body: {
      type: "text",
      default: "Ocean and air freight, bonded warehouses, and last-mile partners in one operating picture. We design routes that stay readable when volume spikes.",
    },
    logosTitle: { type: "text", default: "Trusted Across Global Supply Chains" },
    logos: {
      type: "list",
      fields: { name: "text" },
      default: [
        { name: "Northwind" }, { name: "Harbor Co." }, { name: "Stillwater" }, { name: "Callbox" },
        { name: "Ledgewood" }, { name: "Saltbox" }, { name: "Ristretto" }, { name: "Sandstone" },
        { name: "Fieldnote" }, { name: "Westway" },
      ],
    },
    showImage: { type: "boolean", default: true },
    image: { type: "image", default: photo("1581091226825-a6a2a5aee158", "Logistics workers in a container yard") },
  },

  variants: {
    theme: themeVariant({
      default: "dark",
      options: ["dark", "light"],
      map: {
        section: THEME.section,
        component: THEME.component,
        "copy-card": THEME["copy-card"],
        badge: THEME.badge,
        body: THEME.body,
        "logos-card": THEME["logos-card"],
        "logos-title": THEME["logos-title"],
        logo: THEME.logo,
      },
    }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["badge", "heading", "body", "logos-title"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: {
          base: {
            display: "grid", "grid-template-columns": "1fr", "grid-template-rows": "auto",
            "grid-column-gap": "0.75rem", "grid-row-gap": "0.75rem",
            ...pad("0.75rem"), ...radius("1.5rem"), ...t("component"),
          },
          lg: {
            "grid-template-columns": "1.05fr 0.95fr", "grid-template-rows": "auto auto",
            "grid-column-gap": "0.75rem", "grid-row-gap": "0.75rem",
            ...pad("0.85rem"),
            "border-top-left-radius": "1.75rem", "border-top-right-radius": "1.75rem",
            "border-bottom-right-radius": "1.75rem", "border-bottom-left-radius": "1.75rem",
          },
        },
        children: [
          {
            tag: "div", key: "copy-card",
            style: {
              base: {
                display: "flex", "flex-direction": "column", "justify-content": "space-between", "row-gap": "2rem",
                "min-height": "14rem",
                "grid-column-start": "auto", "grid-column-end": "auto", "grid-row-start": "auto", "grid-row-end": "auto",
                ...pad("1.5rem"), ...radius("1.25rem"), ...card("copy-card"),
              },
              lg: {
                "grid-column-start": "1", "grid-column-end": "2", "grid-row-start": "1", "grid-row-end": "2",
                "min-height": "16rem", ...pad("1.75rem"),
              },
            },
            children: [
              {
                tag: "div", key: "copy-top",
                style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "1rem" } },
                children: [
                  {
                    tag: "div", key: "badge", bind: "badge", if: "showBadge",
                    style: {
                      base: {
                        ...mono(), "text-transform": "uppercase", "letter-spacing": "0.08em",
                        "padding-top": "0.35rem", "padding-right": "0.75rem", "padding-bottom": "0.35rem", "padding-left": "0.75rem",
                        "background-color": LIME, color: "token(ink)", ...pill,
                      },
                    },
                  },
                  {
                    tag: "h2", key: "heading", bind: "heading",
                    style: {
                      base: {
                        "margin-top": "0", "margin-bottom": "0",
                        "font-family": "token(font-display)", "font-size": "2.5rem", "line-height": "1.02",
                        "font-weight": "700", "letter-spacing": "-0.03em", color: "token(ink)",
                      },
                      lg: { "font-size": "3.25rem" },
                    },
                  },
                ],
              },
              {
                tag: "p", key: "body", bind: "body",
                style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "34rem", "font-size": "1rem", "line-height": "1.6", ...card("body") } },
              },
            ],
          },
          {
            tag: "div", key: "logos-card",
            style: {
              base: {
                display: "flex", "flex-direction": "column", "row-gap": "1.25rem",
                "grid-column-start": "auto", "grid-column-end": "auto", "grid-row-start": "auto", "grid-row-end": "auto",
                ...pad("1.5rem"), ...radius("1.25rem"), ...card("logos-card"),
              },
              lg: {
                "grid-column-start": "1", "grid-column-end": "2", "grid-row-start": "2", "grid-row-end": "3",
                ...pad("1.75rem"),
              },
            },
            children: [
              {
                tag: "h3", key: "logos-title", bind: "logosTitle",
                style: {
                  base: {
                    "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)",
                    "font-size": "1.25rem", "line-height": "1.2", "font-weight": "600", ...card("logos-title"),
                  },
                },
              },
              {
                tag: "div", key: "logos", repeat: "logos",
                style: {
                  base: {
                    display: "grid", "grid-template-columns": "1fr 1fr",
                    "grid-column-gap": "1rem", "grid-row-gap": "0.85rem", "align-items": "center",
                  },
                  md: { "grid-template-columns": "1fr 1fr 1fr", "grid-column-gap": "1.25rem" },
                },
                children: [{
                  tag: "div", key: "logo", bind: "item.name",
                  style: {
                    base: {
                      "font-size": "0.9375rem", "font-weight": "600", "letter-spacing": "-0.01em",
                      "text-align": "left", ...card("logo"),
                    },
                  },
                }],
              },
            ],
          },
          {
            tag: "div", key: "photo", if: "showImage",
            style: {
              base: {
                position: "relative", overflow: "hidden", "min-height": "18rem",
                "grid-column-start": "auto", "grid-column-end": "auto", "grid-row-start": "auto", "grid-row-end": "auto",
                ...radius("1.25rem"),
              },
              lg: {
                "grid-column-start": "2", "grid-column-end": "3", "grid-row-start": "1", "grid-row-end": "3",
                "min-height": "100%",
              },
            },
            children: [{
              tag: "img", key: "photo-image", bind: "image",
              style: {
                base: {
                  display: "block", width: "100%", height: "100%", "min-height": "22rem", "object-fit": "cover",
                  "object-position": "center top",
                },
                lg: { "min-height": "100%" },
              },
            }],
          },
        ],
      }),
    ],
  },
};
