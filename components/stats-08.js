// Capability bars that fill to their value when they enter the viewport.
import { themeVariant, themeBase, mono, radius } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  eyebrow: { color: "muted" },
  description: { color: "muted" },
  "meter-value": { color: "muted" },
  note: { color: "muted" },
  track: { "background-color": "line" },
  bar: { "background-color": "glyph" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "stats-08",
  prefix: "stats8",
  name: "Stats / Meters",
  category: "stats",
  description: "Labeled meters that fill to a value as they enter the screen. Reduced motion shows the final width.",

  props: {
    ...headerProps({
      eyebrow: "Where the time goes",
      heading: "A typical project, by share of the work",
      description: "Not a score. A plain split of how a ten-week site usually breaks down.",
    }),
    meters: {
      type: "list",
      fields: { label: "text", value: "text", note: "text" },
      default: [
        { label: "Discovery and structure", value: "20", note: "Brief, sitemap, content model" },
        { label: "Design", value: "35", note: "Two directions, then one" },
        { label: "Build", value: "30", note: "Webflow or Astro, CMS, motion" },
        { label: "Launch and training", value: "15", note: "QA, redirects, editor session" },
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
            tag: "div", key: "list", repeat: "meters", attrs: { "data-blok-meters": "" },
            style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1.75rem" }, lg: { "row-gap": "2.25rem" } },
            children: [
              {
                tag: "div", key: "meter",
                children: [
                  {
                    tag: "div", key: "meter-head",
                    style: { base: { display: "flex", "align-items": "baseline", "justify-content": "space-between", "column-gap": "1rem", "margin-bottom": "0.75rem" } },
                    children: [
                      { tag: "h3", key: "meter-label", bind: "item.label", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.35rem", "line-height": "1.2", "font-weight": "600", "letter-spacing": "-0.02em" }, lg: { "font-size": "1.75rem" } } },
                      { tag: "div", key: "meter-value", bind: "item.value", style: { base: { ...mono(), ...t("meter-value") } } },
                    ],
                  },
                  {
                    tag: "div", key: "track",
                    style: { base: { width: "100%", height: "0.35rem", overflow: "hidden", ...radius("999px"), ...t("track") } },
                    children: [
                      {
                        tag: "div", key: "bar", attrs: { "data-blok-meter": "", "data-blok-value": "=item.value" },
                        style: { base: { width: "100%", height: "100%", ...t("bar") } },
                      },
                    ],
                  },
                  { tag: "p", key: "note", bind: "item.note", style: { base: { "margin-top": "0.6rem", "margin-bottom": "0", "font-size": "0.95rem", "line-height": "1.5", ...t("note") } } },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
