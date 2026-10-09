// Scroll-progress timeline: a vertical rail fills with color as you read down through the milestones.
// Dates sit in their own column on desktop; each milestone can carry an image.
import { themeVariant, themeBase, radius, mono } from "./_lib/themes.js";
import { header, headerProps, HEADER_THEME, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  rail: { "background-color": "line" },
  fill: { "background-color": "glyph" },
  dot: { "background-color": "bg", "border-top-color": "glyph", "border-bottom-color": "glyph", "border-left-color": "glyph", "border-right-color": "glyph" },
  date: { color: "glyph" },
  "milestone-text": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const RAIL = { base: "0.4375rem", lg: "13rem" };
const m = (date, title, text, id, alt) => ({ date, title, text, image: { src: `https://images.unsplash.com/${id}?w=1200&q=80`, alt } });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "timeline-02",
  prefix: "timeline2",
  name: "Timeline / Scroll Progress",
  category: "timeline",
  description: "Milestones along a rail that fills with color as you scroll. Date column on desktop, optional images, three themes.",

  props: {
    ...headerProps({ eyebrow: "Our story", heading: "Twelve years, one workbench", description: "From a spare bedroom to a studio by the harbor, a few moments that shaped how we work." }),
    showImages: { type: "boolean", default: false },
    milestones: {
      type: "list",
      fields: { date: "text", title: "text", text: "text", image: "image" },
      default: [
        m("2014", "First client, first invoice", "A bakery website built on nights and weekends. They still use the logo.", "photo-1517248135467-4c7edcad34c4", "Bakery interior"),
        m("2017", "Going independent", "Left the agency job and set up a desk by the window. Webflow became the default.", "photo-1497366216548-37526070297c", "Desk by a window"),
        m("2020", "Remote by design", "Clients across six states, the same weekly preview ritual, and fewer meetings.", "photo-1519710164239-da123dc03ef4", "Bright home studio"),
        m("2023", "A real studio", "Moved into a shared space on the harbor. Added motion and brand work.", "photo-1501594907352-04cda38ebc29", "Harbor coastline"),
        m("2026", "Building tools", "Turning a decade of components into a library other studios can use.", "photo-1486406146926-c627a92ad1ab", "Modern facade"),
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.1, targets: ["eyebrow", "heading", "description"] },
    reveal: { preset: "fade-up", targets: ["milestone"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "3rem" }, lg: { "row-gap": "5rem" } },
        children: [
          header({ t }),
          {
            tag: "div", key: "timeline",
            style: { base: { position: "relative" } },
            children: [
              { tag: "div", key: "rail", decorative: true, style: { base: { position: "absolute", top: "0", bottom: "0", left: RAIL.base, width: "2px", ...t("rail") }, lg: { left: RAIL.lg } } },
              { tag: "div", key: "fill", decorative: true, attrs: { "data-blok-progress": "" }, style: { base: { position: "absolute", top: "0", bottom: "0", left: RAIL.base, width: "2px", ...t("fill") }, lg: { left: RAIL.lg } } },
              {
                tag: "div", key: "list", repeat: "milestones",
                style: { base: { position: "relative", display: "flex", "flex-direction": "column", "row-gap": "3.5rem" }, lg: { "row-gap": "5rem" } },
                children: [
                  {
                    tag: "div", key: "milestone",
                    style: { base: { position: "relative", "padding-left": "2.5rem" }, lg: { "padding-left": "17rem" } },
                    children: [
                      {
                        tag: "div", key: "dot", decorative: true,
                        style: {
                          base: {
                            position: "absolute", top: "0.35rem", left: `calc(${RAIL.base} + 1px - 0.5rem)`, width: "1rem", height: "1rem", ...radius("50%"),
                            "border-top-width": "2px", "border-bottom-width": "2px", "border-left-width": "2px", "border-right-width": "2px",
                            "border-top-style": "solid", "border-bottom-style": "solid", "border-left-style": "solid", "border-right-style": "solid", ...t("dot"),
                          },
                          lg: { left: `calc(${RAIL.lg} + 1px - 0.5rem)` },
                        },
                      },
                      {
                        tag: "div", key: "date", bind: "item.date",
                        style: {
                          base: { position: "static", left: "auto", top: "auto", width: "auto", "margin-bottom": "0.75rem", "text-align": "left", "font-family": "token(font-display)", "font-size": "1.125rem", "font-weight": "600", "letter-spacing": "-0.01em", ...t("date") },
                          lg: { position: "absolute", left: "0rem", top: "0rem", width: "10.5rem", "margin-bottom": "0rem", "text-align": "right", "font-size": "2.25rem", "letter-spacing": "-0.04em" },
                        },
                      },
                      { tag: "h3", key: "milestone-title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0.5rem", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.15", "font-weight": "600", "letter-spacing": "-0.02em" }, lg: { "font-size": "2rem" } } },
                      { tag: "p", key: "milestone-text", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "34rem", "font-size": "1.0625rem", "line-height": "1.6", ...t("milestone-text") } } },
                      {
                        tag: "img", key: "milestone-image", bind: "item.image", if: "showImages",
                        style: { base: { display: "block", width: "100%", "max-width": "34rem", "aspect-ratio": "16 / 10", "object-fit": "cover", "margin-top": "1.5rem", ...radius("0.75rem") } },
                      },
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
