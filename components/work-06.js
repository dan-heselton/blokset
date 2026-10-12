// A numbered list of project titles and a year. No photographs.
import { mono, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  list: { "border-bottom-color": "line" },
  row: { color: "fg", "border-top-color": "line" },
  index: { color: "muted" },
  year: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "work-06",
  prefix: "work6",
  name: "Portfolio / Index",
  category: "portfolio",
  description: "Portfolio list. Numbered project titles and a year. No photographs. A short list for a homepage.",

  props: {
    ...headerProps({
      eyebrow: "Index",
      heading: "The work",
      description: "Titles only. Open one when you want the photographs.",
    }),
    projects: {
      type: "list",
      fields: { title: "text", year: "text", href: "link" },
      default: [
        { title: "Tidewater Supply", year: "2026", href: "#" },
        { title: "North Shore Arts", year: "2026", href: "#" },
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
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] },
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
            tag: "div", key: "list", repeat: "projects",
            style: { base: { "border-bottom-width": "1px", "border-bottom-style": "solid", ...t("list") } },
            children: [{
              tag: "a", key: "row", href: "item.href",
              style: {
                base: { display: "flex", "flex-direction": "row", "align-items": "baseline", "column-gap": "1rem", "padding-top": "1.15rem", "padding-bottom": "1.15rem", "border-top-width": "1px", "border-top-style": "solid", "text-decoration": "none", ...t("row") },
                lg: { "column-gap": "1.5rem", "padding-top": "1.35rem", "padding-bottom": "1.35rem" },
              },
              children: [
                { tag: "div", key: "index", bind: "@index", style: { base: { width: "2.5rem", "flex-shrink": "0", ...mono(), ...t("index") } } },
                {
                  tag: "h3", key: "title", bind: "item.title",
                  style: {
                    base: { "flex-grow": "1", "min-width": "0", "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.15", "font-weight": "500", "letter-spacing": "-0.03em" },
                    lg: { "font-size": "2.25rem" },
                  },
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
