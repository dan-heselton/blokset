// Project mosaic: irregular tiles; hover a row to swap the large photograph.
import { inset0, pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  row: { "border-top-color": "line", color: "fg" },
  "row-year": { color: "muted" },
  note: { "background-color": "panel", color: "fg" },
  "note-text": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });
const span = (n) => ({ "grid-column-start": `span ${n}`, "grid-column-end": `span ${n}` });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "bento-25",
  prefix: "bento25",
  name: "Work / Project mosaic",
  category: "bento",
  collection: "marketing",
  description: "An irregular project board. The large photograph swaps when you rest on a row. On a phone the figure sits above the list.",

  props: {
    ...headerProps({
      eyebrow: "Selected work",
      heading: "Projects on the board",
      description: "Rest on a name. The photograph changes. Every tile links through.",
    }),
    figure: {
      type: "image",
      default: shot("1519710164239-da123dc03ef4", "A sunlit room with a wooden chair and a pale wall"),
    },
    noteTitle: { type: "text", default: "This season" },
    noteText: { type: "text", default: "Four sites shipped. Two still on the desk." },
    projects: {
      type: "list",
      fields: { title: "text", year: "text", href: "link", image: "image" },
      default: [
        { title: "North Shore Arts", year: "2026", href: "#", image: shot("1519710164239-da123dc03ef4", "A sunlit room with a wooden chair") },
        { title: "Tidewater Supply", year: "2026", href: "#", image: shot("1501594907352-04cda38ebc29", "A low pier and still harbor water") },
        { title: "Halyard", year: "2025", href: "#", image: shot("1497366216548-37526070297c", "A bright studio with long desks") },
        { title: "Saltbox Bakery", year: "2025", href: "#", image: shot("1517248135467-4c7edcad34c4", "A bakery dining room") },
        { title: "Ledgewood", year: "2024", href: "#", image: shot("1486406146926-c627a92ad1ab", "A glass tower against a clear sky") },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.07, targets: ["eyebrow", "heading", "description", "figure", "note", "row"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component", attrs: { "data-blok-swap": "reveal" },
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" } },
        children: [
          header({ t, layout: "split" }),
          {
            tag: "div", key: "grid",
            style: {
              base: { display: "grid", "grid-template-columns": "minmax(0, 1fr)", "column-gap": "0.85rem", "row-gap": "0.85rem", "align-items": "stretch" },
              lg: { "grid-template-columns": "repeat(12, minmax(0, 1fr))" },
            },
            children: [
              {
                tag: "div", key: "figure", attrs: { "data-blok-swap-figure": "" },
                style: {
                  base: { position: "relative", overflow: "hidden", "min-height": "16rem", "grid-row-start": "auto", "grid-row-end": "auto", ...span(1), ...radius("token(radius-card)") },
                  lg: { ...span(7), "min-height": "28rem", "grid-row-start": "span 2", "grid-row-end": "span 2" },
                },
                children: [
                  { tag: "img", key: "figure-image", bind: "figure", style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } } },
                ],
              },
              {
                tag: "div", key: "note",
                style: {
                  base: { display: "flex", "flex-direction": "column", "justify-content": "flex-end", "row-gap": "0.5rem", "min-height": "8rem", ...span(1), ...radius("token(radius-card)"), ...pad("1.25rem"), ...t("note") },
                  lg: { ...span(5) },
                },
                children: [
                  { tag: "h3", key: "note-title", bind: "noteTitle", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.1", "font-weight": "600", "letter-spacing": "-0.02em" } } },
                  { tag: "p", key: "note-text", bind: "noteText", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.5", ...t("note-text") } } },
                ],
              },
              {
                tag: "div", key: "list", repeat: "projects",
                style: {
                  base: { display: "flex", "flex-direction": "column", ...span(1) },
                  lg: { ...span(5) },
                },
                children: [{
                  tag: "a", key: "row", href: "item.href",
                  attrs: { "data-blok-swap-row": "", "data-blok-src": "=item.image.src", "data-blok-alt": "=item.image.alt" },
                  style: {
                    base: {
                      display: "flex", "flex-direction": "row", "align-items": "baseline", "justify-content": "space-between",
                      "column-gap": "1rem", "padding-top": "1rem", "padding-bottom": "1rem",
                      "border-top-width": "1px", "border-top-style": "solid", "text-decoration": "none", cursor: "pointer", ...t("row"),
                    },
                  },
                  children: [
                    { tag: "h3", key: "row-title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.35rem", "line-height": "1.15", "font-weight": "600", "letter-spacing": "-0.02em" } } },
                    { tag: "div", key: "row-year", bind: "item.year", style: { base: { "flex-shrink": "0", "font-size": "0.9375rem", "line-height": "1.4", ...t("row-year") } } },
                  ],
                }],
              },
            ],
          },
        ],
      }),
    ],
  },
};
