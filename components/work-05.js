// One project large, then the rest as text rows. The feature is its own props.
import { radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  feature: { color: "fg" },
  summary: { color: "muted" },
  list: { "border-bottom-color": "line" },
  row: { color: "fg", "border-top-color": "line" },
  year: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "work-05",
  prefix: "work5",
  name: "Portfolio / Featured",
  category: "portfolio",
  description: "Portfolio list. One project as a large photograph with a title and a summary, then a list of the others as text rows.",

  props: {
    ...headerProps({
      eyebrow: "Selected work",
      heading: "One in front",
      description: "The project we are talking about this season sits above the rest of the list.",
    }),
    featureTitle: { type: "text", default: "North Shore Arts" },
    featureSummary: { type: "text", default: "A site the gallery’s editors can publish without a developer on the call. Programs, exhibitions, and a visit page." },
    featureHref: { type: "link", default: "#" },
    featureImage: { type: "image", default: { src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1800&q=80", alt: "A sunlit room with a wooden chair and a pale wall" } },
    projects: {
      type: "list",
      fields: { title: "text", year: "text", href: "link" },
      default: [
        { title: "Tidewater Supply", year: "2026", href: "#" },
        { title: "Halyard", year: "2025", href: "#" },
        { title: "Saltbox Bakery", year: "2025", href: "#" },
        { title: "Ledgewood Architects", year: "2024", href: "#" },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description", "feature"] },
    reveal: { preset: "fade-up", targets: ["row"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" }, lg: { "row-gap": "3.5rem" } },
        children: [
          header({ t, layout: "stack" }),
          {
            tag: "a", key: "feature", href: "featureHref",
            style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "1rem", "text-decoration": "none", ...t("feature") } },
            children: [
              {
                tag: "img", key: "feature-image", bind: "featureImage",
                style: { base: { display: "block", width: "100%", height: "16rem", "object-fit": "cover", ...radius("token(radius-card)") }, lg: { height: "28rem" } },
              },
              {
                tag: "h3", key: "feature-title", bind: "featureTitle",
                style: {
                  base: { "margin-top": "0.25rem", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "2rem", "line-height": "1.05", "font-weight": "600", "letter-spacing": "-0.03em" },
                  lg: { "font-size": "2.75rem" },
                },
              },
              { tag: "p", key: "summary", bind: "featureSummary", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "36rem", "font-size": "1.0625rem", "line-height": "1.6", ...t("summary") } } },
            ],
          },
          {
            tag: "div", key: "list", repeat: "projects",
            style: { base: { "border-bottom-width": "1px", "border-bottom-style": "solid", ...t("list") } },
            children: [{
              tag: "a", key: "row", href: "item.href",
              style: {
                base: { display: "flex", "flex-direction": "row", "align-items": "baseline", "justify-content": "space-between", "column-gap": "1.5rem", "padding-top": "1.1rem", "padding-bottom": "1.1rem", "border-top-width": "1px", "border-top-style": "solid", "text-decoration": "none", ...t("row") },
              },
              children: [
                {
                  tag: "h3", key: "title", bind: "item.title",
                  style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.35rem", "line-height": "1.2", "font-weight": "500", "letter-spacing": "-0.02em" }, md: { "font-size": "1.6rem" } },
                },
                { tag: "div", key: "year", bind: "item.year", style: { base: { "flex-shrink": "0", "font-size": "0.9375rem", "line-height": "1.4", ...t("year") } } },
              ],
            }],
          },
        ],
      }),
    ],
  },
};
