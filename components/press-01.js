// Press and awards: publication, headline, year, and a link out.
import { mono, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  list: { "border-bottom-color": "line" },
  row: { color: "fg", "border-top-color": "line" },
  publication: { color: "muted" },
  year: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "press-01",
  prefix: "press1",
  name: "Press / Mentions",
  category: "press",
  description: "A list of press mentions and awards: publication, headline, year, and a link.",

  props: {
    ...headerProps({
      eyebrow: "Press",
      heading: "Mentions and awards",
      description: "A short record of where the work has been written about.",
    }),
    showYear: { type: "boolean", default: true, description: "Show the year on each row." },
    items: {
      type: "list",
      fields: { publication: "text", headline: "text", year: "text", href: "link" },
      default: [
        { publication: "Awwwards", headline: "Honorable mention, North Shore Arts", year: "2026", href: "#" },
        { publication: "It's Nice That", headline: "A catalog a bakery can actually run", year: "2025", href: "#" },
        { publication: "CSS Design Awards", headline: "Site of the day, Halyard", year: "2025", href: "#" },
        { publication: "Communication Arts", headline: "Interactive annual, Ledgewood", year: "2024", href: "#" },
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
          header({ t, layout: "split" }),
          {
            tag: "div", key: "list", repeat: "items",
            style: { base: { "border-bottom-width": "1px", "border-bottom-style": "solid", ...t("list") } },
            children: [
              {
                tag: "a", key: "row", href: "item.href",
                style: {
                  base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "column-gap": "0rem", "row-gap": "0.4rem", "padding-top": "1.35rem", "padding-bottom": "1.35rem", "border-top-width": "1px", "border-top-style": "solid", "text-decoration": "none", ...t("row") },
                  md: { "flex-direction": "row", "align-items": "baseline", "column-gap": "2rem" },
                },
                children: [
                  { tag: "div", key: "publication", bind: "item.publication", style: { base: { width: "12rem", "flex-shrink": "0", ...mono(), "letter-spacing": "0.05em", ...t("publication") } } },
                  {
                    tag: "h3", key: "headline", bind: "item.headline",
                    style: { base: { "flex-grow": "1", "flex-basis": "0%", "min-width": "0", "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.35rem", "line-height": "1.25", "font-weight": "500", "letter-spacing": "-0.02em" }, lg: { "font-size": "1.6rem" } },
                  },
                  { tag: "div", key: "year", bind: "item.year", if: "showYear", style: { base: { "flex-shrink": "0", ...mono(), "letter-spacing": "0.04em", ...t("year") } } },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
