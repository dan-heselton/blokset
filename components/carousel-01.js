// One story at a time, with previous and next controls. Autoplay stops when reduced motion is on.
import { themeVariant, themeBase, mono, radius, pad } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  eyebrow: { color: "muted" },
  description: { color: "muted" },
  quote: { color: "fg" },
  role: { color: "muted" },
  prev: { color: "fg", "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line" },
  next: { color: "fg", "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line" },
  slide: { "background-color": "panel" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "carousel-01",
  prefix: "carousel1",
  name: "Carousel / Stories",
  category: "carousel",
  description: "Client stories, one at a time, with previous and next. Autoplay pauses when motion is reduced.",

  props: {
    ...headerProps({
      eyebrow: "In their words",
      heading: "What it was like to work together",
      description: "Short notes from teams we have shipped with. Use the arrows, or let them advance on their own.",
    }),
    stories: {
      type: "list",
      fields: { quote: "text", name: "text", role: "text" },
      default: [
        { quote: "They treated the site like a product, not a pile of pages. Our editors published the first news post the day after launch.", name: "Maren Okafor", role: "Director, North Shore Arts" },
        { quote: "The weekly preview meant we never waited a month to see where the work was going. The price stayed the price.", name: "Eli Hart", role: "Owner, Saltbox Bakery" },
        { quote: "We asked for a portfolio that architects would respect and clients could skim. Both things are true now.", name: "June Pell", role: "Principal, Ledgewood" },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
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
            tag: "div", key: "carousel", attrs: { "data-blok-carousel": "" },
            style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1.25rem" } },
            children: [
              {
                tag: "div", key: "slides", repeat: "stories",
                children: [
                  {
                    tag: "div", key: "slide", attrs: { "data-blok-slide": "" },
                    style: { base: { display: "flex", "flex-direction": "column", "justify-content": "space-between", "row-gap": "2rem", "min-height": "18rem", ...pad("1.5rem"), ...radius("token(radius-card)"), ...t("slide") }, lg: { "min-height": "22rem", ...pad("2.5rem") } },
                    children: [
                      { tag: "h3", key: "quote", bind: "item.quote", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "44rem", "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1.2", "font-weight": "500", "letter-spacing": "-0.03em", ...t("quote") }, lg: { "font-size": "2.5rem" } } },
                      {
                        tag: "div", key: "byline",
                        children: [
                          { tag: "div", key: "name", bind: "item.name", style: { base: { "font-weight": "600", "margin-bottom": "0.25rem" } } },
                          { tag: "div", key: "role", bind: "item.role", style: { base: { ...mono(), ...t("role") } } },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                tag: "div", key: "controls",
                style: { base: { display: "flex", "column-gap": "0.5rem" } },
                children: [
                  { tag: "div", key: "prev", text: "Previous", attrs: { "data-blok-carousel-prev": "" }, style: { base: { ...mono(), cursor: "pointer", ...pad("0.75rem"), "border-top-width": "1px", "border-right-width": "1px", "border-bottom-width": "1px", "border-left-width": "1px", "border-top-style": "solid", "border-right-style": "solid", "border-bottom-style": "solid", "border-left-style": "solid", ...radius("999px"), ...t("prev") } } },
                  { tag: "div", key: "next", text: "Next", attrs: { "data-blok-carousel-next": "" }, style: { base: { ...mono(), cursor: "pointer", ...pad("0.75rem"), "border-top-width": "1px", "border-right-width": "1px", "border-bottom-width": "1px", "border-left-width": "1px", "border-top-style": "solid", "border-right-style": "solid", "border-bottom-style": "solid", "border-left-style": "solid", ...radius("999px"), ...t("next") } } },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
