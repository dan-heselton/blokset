// A bento of counted figures, filled meters, and one photograph.
import { mono, pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  "stat-a": { "background-color": "glyph", color: "fg" },
  "stat-b": { "background-color": "panel", color: "fg" },
  "meter-card": { "background-color": "panel", color: "fg" },
  track: { "background-color": "line" },
  bar: { "background-color": "glyph" },
  "meter-note": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const card = { ...radius("token(radius-card)"), ...pad("1.25rem") };

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "bento-01",
  prefix: "bento01",
  name: "Bento / Numbers",
  category: "bento",
  description: "Counted figures, meters that fill on enter, and a photograph, set in an uneven grid.",

  props: {
    ...headerProps({ eyebrow: "The year, counted", heading: "What left the desk", description: "Not a scoreboard. The work we can point at." }),
    statAValue: { type: "text", default: "48" },
    statALabel: { type: "text", default: "Projects shipped" },
    statBValue: { type: "text", default: "12" },
    statBLabel: { type: "text", default: "Years on Main Street" },
    meters: {
      type: "list",
      fields: { label: "text", value: "text", note: "text" },
      default: [
        { label: "Design", value: "40", note: "Of a typical build" },
        { label: "Build", value: "45", note: "In the browser" },
        { label: "Launch", value: "15", note: "Redirects and training" },
      ],
    },
    image: { type: "image", default: { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80", alt: "A bright studio with a long desk" } },
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
                tag: "div", key: "photo",
                style: {
                  base: { position: "relative", overflow: "hidden", "min-height": "16rem", "grid-column-start": "span 1", "grid-column-end": "span 1", "grid-row-start": "span 1", "grid-row-end": "span 1", ...radius("token(radius-card)") },
                  lg: { "grid-row-start": "span 2", "grid-row-end": "span 2", "min-height": "24rem" },
                },
                children: [{ tag: "img", key: "photo-image", bind: "image", style: { base: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", width: "100%", height: "100%", "object-fit": "cover" } } }],
              },
              {
                tag: "div", key: "stat-a",
                style: { base: { display: "flex", "flex-direction": "column", "justify-content": "space-between", "min-height": "12rem", ...card, ...t("stat-a") } },
                children: [
                  { tag: "div", key: "stat-a-value", bind: "statAValue", attrs: { "data-blok-count": "" }, style: { base: { "font-family": "token(font-display)", "font-size": "4.5rem", "line-height": "0.9", "font-weight": "600", "letter-spacing": "-0.05em" } } },
                  { tag: "h3", key: "stat-a-label", bind: "statALabel", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1.05rem", "line-height": "1.3", "font-weight": "600" } } },
                ],
              },
              {
                tag: "div", key: "stat-b",
                style: { base: { display: "flex", "flex-direction": "column", "justify-content": "space-between", "min-height": "12rem", ...card, ...t("stat-b") } },
                children: [
                  { tag: "div", key: "stat-b-value", bind: "statBValue", attrs: { "data-blok-count": "" }, style: { base: { "font-family": "token(font-display)", "font-size": "4.5rem", "line-height": "0.9", "font-weight": "600", "letter-spacing": "-0.05em" } } },
                  { tag: "h3", key: "stat-b-label", bind: "statBLabel", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1.05rem", "line-height": "1.3", "font-weight": "600" } } },
                ],
              },
              {
                tag: "div", key: "meter-card",
                style: {
                  base: { "grid-column-start": "span 1", "grid-column-end": "span 1", ...card, ...t("meter-card") },
                  md: { "grid-column-start": "span 2", "grid-column-end": "span 2" },
                },
                children: [{
                  tag: "div", key: "meters", repeat: "meters", attrs: { "data-blok-meters": "" },
                  style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1.1rem" } },
                  children: [{
                    tag: "div", key: "meter",
                    children: [
                      {
                        tag: "div", key: "meter-head",
                        style: { base: { display: "flex", "justify-content": "space-between", "column-gap": "1rem", "margin-bottom": "0.45rem" } },
                        children: [
                          { tag: "h3", key: "meter-label", bind: "item.label", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.2", "font-weight": "600" } } },
                          { tag: "div", key: "meter-note", bind: "item.note", style: { base: { ...mono(), ...t("meter-note") } } },
                        ],
                      },
                      {
                        tag: "div", key: "track",
                        style: { base: { width: "100%", height: "0.4rem", overflow: "hidden", ...radius("999px"), ...t("track") } },
                        children: [{ tag: "div", key: "bar", attrs: { "data-blok-meter": "", "data-blok-value": "=item.value" }, style: { base: { width: "100%", height: "100%", ...t("bar") } } }],
                      },
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
