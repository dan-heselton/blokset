// Cards that open on click. Opening one closes the others.
import { themeVariant, themeBase, radius, pad } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  eyebrow: { color: "muted" },
  description: { color: "muted" },
  card: { "background-color": "panel", "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line" },
  "card-text": { color: "muted" },
  icon: { color: "glyph" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "features-35",
  prefix: "features35",
  name: "Features / Expandable Cards",
  category: "features",
  description: "A grid of services. Click a card to read more; the others close.",

  props: {
    ...headerProps({
      eyebrow: "Capabilities",
      heading: "Open a card for the detail",
      description: "The short version is on the card. The longer version opens in place, one at a time.",
    }),
    features: {
      type: "list",
      fields: { title: "text", text: "text" },
      default: [
        { title: "Discovery", text: "A working session and a written brief: who the site is for, what it has to do, and what we are not building." },
        { title: "Design in the browser", text: "Two directions you can click through, not a deck of pictures. We pick one and refine it on the real type and spacing." },
        { title: "Build", text: "Client-First Webflow or Astro, with a CMS modeled on how your team actually publishes." },
        { title: "Launch care", text: "Redirects, analytics, a training call, and thirty days of fixes after the site goes live." },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
    columns: {
      label: "Columns",
      default: "two",
      options: {
        two: null,
        four: {
          styles: {
            grid: {
              base: { "grid-template-columns": "1fr" },
              lg: { "grid-template-columns": "1fr 1fr 1fr 1fr" },
            },
          },
        },
      },
    },
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" }, lg: { "row-gap": "3.5rem" } },
        children: [
          header({ t, layout: "split" }),
          {
            tag: "div", key: "grid", repeat: "features", attrs: { "data-blok-expand": "" },
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "grid-column-gap": "1rem", "grid-row-gap": "1rem" },
              lg: { "grid-template-columns": "1fr 1fr", "grid-column-gap": "1.25rem", "grid-row-gap": "1.25rem" },
            },
            children: [
              {
                tag: "div", key: "card", attrs: { "data-blok-expand-card": "" },
                style: {
                  base: {
                    ...pad("1.25rem"), ...radius("token(radius-card)"),
                    "border-top-width": "1px", "border-right-width": "1px", "border-bottom-width": "1px", "border-left-width": "1px",
                    "border-top-style": "solid", "border-right-style": "solid", "border-bottom-style": "solid", "border-left-style": "solid",
                    ...t("card"),
                  },
                  lg: { ...pad("1.5rem") },
                },
                children: [
                  {
                    tag: "div", key: "trigger", attrs: { "data-blok-expand-trigger": "" },
                    style: { base: { display: "flex", "align-items": "center", "justify-content": "space-between", "column-gap": "1rem", cursor: "pointer" } },
                    children: [
                      { tag: "h3", key: "card-title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1.1", "font-weight": "600", "letter-spacing": "-0.03em" } } },
                      { tag: "div", key: "icon", text: "+", decorative: true, style: { base: { "flex-shrink": "0", "font-size": "1.75rem", "line-height": "1", "font-weight": "300", ...t("icon") } } },
                    ],
                  },
                  {
                    tag: "div", key: "panel", attrs: { "data-blok-expand-panel": "" },
                    style: { base: { overflow: "hidden" } },
                    children: [
                      { tag: "p", key: "card-text", bind: "item.text", style: { base: { "margin-top": "1rem", "margin-bottom": "0", "font-size": "1.0625rem", "line-height": "1.6", ...t("card-text") } } },
                    ],
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
