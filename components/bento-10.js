// Figures that scramble into place, a quote you can step through, and a short status list.
import { mono, pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  figure: { "background-color": "panel", color: "fg" },
  "figure-label": { color: "muted" },
  quote: { "background-color": "card" },
  status: { "background-color": "panel", color: "fg" },
  "status-note": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "bento-10",
  prefix: "bento10",
  name: "Bento / Studio board",
  category: "bento",
  description: "Figures scramble into place, a quote card steps through three lines, and a status list says what is on the bench.",

  props: {
    ...headerProps({ eyebrow: "On the wall", heading: "The board by the door", description: "Numbers, a line from a client, and what is actually in progress." }),
    figures: {
      type: "list",
      fields: { value: "text", label: "text" },
      default: [
        { value: "48", label: "Shipped" },
        { value: "6", label: "Open" },
        { value: "12", label: "Years" },
      ],
    },
    quotes: {
      type: "list",
      fields: { quote: "text", name: "text" },
      default: [
        { quote: "They sent the page on Friday. We published it Monday.", name: "North Shore Arts" },
        { quote: "No deck. We looked at the site and said yes.", name: "Tidewater Supply" },
        { quote: "The staff can edit it. That was the whole point.", name: "Saltbox Bakery" },
      ],
    },
    statuses: {
      type: "list",
      fields: { label: "text", note: "text" },
      default: [
        { label: "On the bench", note: "Halyard, second pass" },
        { label: "In review", note: "Ledgewood, Friday" },
        { label: "Shipped", note: "Harbor lamp page" },
      ],
    },
  },

  variants: { theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }) },
  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" } },
        children: [
          header({ t, layout: "split" }),
          {
            tag: "div", key: "grid",
            style: {
              base: { display: "grid", "grid-template-columns": "minmax(0, 1fr)", "column-gap": "1rem", "row-gap": "1rem" },
              md: { "grid-template-columns": "repeat(2, minmax(0, 1fr))" },
              lg: { "grid-template-columns": "repeat(3, minmax(0, 1fr))" },
            },
            children: [
              {
                tag: "div", key: "figures",
                style: { base: { "grid-column-start": "span 1", "grid-column-end": "span 1" }, md: { "grid-column-start": "span 2", "grid-column-end": "span 2" }, lg: { "grid-column-start": "span 1", "grid-column-end": "span 1" } },
                children: [{
                  tag: "div", key: "figure-list", repeat: "figures",
                  style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1rem" } },
                  children: [{
                  tag: "div", key: "figure",
                  style: { base: { ...radius("token(radius-card)"), ...pad("1.25rem"), ...t("figure") } },
                  children: [
                    { tag: "div", key: "figure-value", bind: "item.value", attrs: { "data-blok-scramble": "" }, style: { base: { "font-family": "token(font-display)", "font-size": "3rem", "line-height": "0.9", "font-weight": "600", "letter-spacing": "-0.04em" } } },
                    { tag: "h3", key: "figure-label", bind: "item.label", style: { base: { "margin-top": "0.4rem", "margin-bottom": "0", "font-size": "1rem", "font-weight": "600", ...t("figure-label") } } },
                  ],
                  }],
                }],
              },
              {
                tag: "div", key: "quote", attrs: { "data-blok-slider": "" },
                style: {
                  base: { display: "flex", "flex-direction": "column", "justify-content": "space-between", "min-height": "16rem", "grid-column-start": "span 1", "grid-column-end": "span 1", color: "token(surface)", ...radius("token(radius-card)"), ...pad("1.5rem"), ...t("quote") },
                  lg: { "grid-column-start": "span 2", "grid-column-end": "span 2" },
                },
                children: [
                  {
                    tag: "div", key: "viewport",
                    style: { base: { overflow: "hidden", width: "100%" } },
                    children: [{
                      tag: "div", key: "track", repeat: "quotes", attrs: { "data-blok-slider-track": "" },
                      style: { base: { display: "flex", width: "100%" } },
                      children: [{
                        tag: "div", key: "slide", attrs: { "data-blok-slider-card": "" },
                        style: { base: { "flex-shrink": "0", width: "100%" } },
                        children: [
                          { tag: "p", key: "slide-quote", bind: "item.quote", style: { base: { "margin-top": "0", "margin-bottom": "0.75rem", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.2", "font-weight": "600", "letter-spacing": "-0.03em" } } },
                          { tag: "div", key: "slide-name", bind: "item.name", style: { base: { ...mono("token(surface-muted)") } } },
                        ],
                      }],
                    }],
                  },
                  {
                    tag: "div", key: "controls",
                    style: { base: { display: "flex", "align-items": "center", "column-gap": "0.65rem", "margin-top": "1rem" } },
                    children: [
                      { tag: "div", key: "count", text: "01 / 03", attrs: { "data-blok-slider-count": "" }, style: { base: { ...mono("token(surface-muted)") } } },
                      { tag: "div", key: "prev", text: "←", attrs: { "data-blok-slider-prev": "" }, style: { base: { cursor: "pointer" } } },
                      { tag: "div", key: "next", text: "→", attrs: { "data-blok-slider-next": "" }, style: { base: { cursor: "pointer" } } },
                    ],
                  },
                ],
              },
              {
                tag: "div", key: "status",
                style: { base: { "grid-column-start": "span 1", "grid-column-end": "span 1", ...radius("token(radius-card)"), ...pad("1.25rem"), ...t("status") }, md: { "grid-column-start": "span 2", "grid-column-end": "span 2" }, lg: { "grid-column-start": "span 3", "grid-column-end": "span 3" } },
                children: [{
                  tag: "div", key: "statuses", repeat: "statuses",
                  style: { base: { display: "flex", "flex-direction": "column", "column-gap": "0rem", "row-gap": "0.85rem" }, md: { "flex-direction": "row", "column-gap": "2rem", "row-gap": "0rem" } },
                  children: [{
                    tag: "div", key: "status-item",
                    style: { base: { display: "flex", "align-items": "baseline", "column-gap": "0.75rem" } },
                    children: [
                      { tag: "h3", key: "status-label", bind: "item.label", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.15rem", "line-height": "1.2", "font-weight": "600" } } },
                      { tag: "p", key: "status-note", bind: "item.note", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "0.95rem", "line-height": "1.4", ...t("status-note") } } },
                    ],
                  }],
                }],
              },
            ],
          },
        ],
      }),
    ],
  },
};
