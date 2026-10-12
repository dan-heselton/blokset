// Milestones swap sides of a center line on a wide screen. The line fills as you scroll.
import { border, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  rail: { "background-color": "line" },
  fill: { "background-color": "glyph" },
  dot: {
    "background-color": "bg",
    "border-top-color": "glyph", "border-right-color": "glyph", "border-bottom-color": "glyph", "border-left-color": "glyph",
  },
  date: { color: "glyph" },
  "milestone-text": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1200&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "timeline-03",
  prefix: "timeline3",
  name: "Timeline / Alternating",
  category: "timeline",
  description: "Milestones swap sides of a center line on a wide screen. The line fills as you scroll.",

  props: {
    ...headerProps({
      eyebrow: "Studio notes",
      heading: "How the room changed",
      description: "Four moves, told from either side of the same line.",
    }),
    showImages: { type: "boolean", default: true },
    milestones: {
      type: "list",
      fields: { date: "text", title: "text", text: "text", image: "image" },
      default: [
        { date: "2016", title: "A rented bench", text: "Gloucester, evenings. The work was signs at first, then the websites for the shops next door.", image: photo("1517248135467-4c7edcad34c4", "A small bakery interior") },
        { date: "2019", title: "Shared with a print shop", text: "Afternoons were for making. Mornings were for the jobs that paid the rent.", image: photo("1497366216548-37526070297c", "A bright room with long desks") },
        { date: "2022", title: "The harbor table", text: "Four people, one long table, and a rule that meetings stay shorter than the work.", image: photo("1519710164239-da123dc03ef4", "Sunlit studio with a wooden chair") },
        { date: "2026", title: "A library, not a folder", text: "The pieces we were rebuilding on every project, written down so the next site starts further along.", image: photo("1486406146926-c627a92ad1ab", "A glass building facade") },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] },
    reveal: { preset: "fade-up", targets: ["milestone"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "3rem" }, lg: { "row-gap": "4.5rem" } },
        children: [
          header({ t }),
          {
            tag: "div", key: "timeline",
            style: { base: { position: "relative" } },
            children: [
              { tag: "div", key: "rail", decorative: true, style: { base: { position: "absolute", top: "0", bottom: "0", left: "calc(0.5rem - 1px)", width: "2px", "z-index": "0", ...t("rail") }, lg: { left: "calc(50% - 1px)" } } },
              { tag: "div", key: "fill", decorative: true, attrs: { "data-blok-progress": "" }, style: { base: { position: "absolute", top: "0", bottom: "0", left: "calc(0.5rem - 1px)", width: "2px", "z-index": "1", ...t("fill") }, lg: { left: "calc(50% - 1px)" } } },
              {
                tag: "div", key: "list", repeat: "milestones", attrs: { "data-blok-sides": "" },
                style: { base: { position: "relative", "z-index": "2", display: "flex", "flex-direction": "column", "row-gap": "3rem" }, lg: { "row-gap": "4.5rem" } },
                children: [{
                  tag: "div", key: "milestone", attrs: { "data-blok-side": "" },
                  style: {
                    base: { position: "relative", width: "100%", "margin-left": "0", "margin-right": "0", "text-align": "left", "padding-left": "2.5rem", "padding-right": "0" },
                    lg: { "padding-left": "0", "padding-right": "0" },
                  },
                  children: [
                    {
                      tag: "div", key: "dot", decorative: true, attrs: { "data-blok-side-dot": "" },
                      style: {
                        base: {
                          position: "absolute", top: "0.2rem", left: "0", right: "auto", width: "1rem", height: "1rem", "z-index": "2",
                          ...radius("50%"), ...border(t("dot")["border-top-color"], "2px"), ...t("dot"),
                        },
                      },
                    },
                    { tag: "div", key: "date", bind: "item.date", style: { base: { "margin-bottom": "0.4rem", "font-family": "token(font-display)", "font-size": "1.25rem", "line-height": "1", "font-weight": "600", "letter-spacing": "-0.03em", ...t("date") }, lg: { "font-size": "1.75rem" } } },
                    { tag: "h3", key: "milestone-title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0.5rem", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.15", "font-weight": "600", "letter-spacing": "-0.02em" }, lg: { "font-size": "2rem" } } },
                    { tag: "p", key: "milestone-text", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1.0625rem", "line-height": "1.6", ...t("milestone-text") } } },
                    {
                      tag: "img", key: "milestone-image", bind: "item.image", if: "showImages",
                      style: { base: { display: "block", width: "100%", "aspect-ratio": "16 / 10", "object-fit": "cover", "margin-top": "1.25rem", ...radius("token(radius-card)") } },
                    },
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
