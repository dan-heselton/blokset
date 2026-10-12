// Departments. Each row is a name, a line, a count of open roles, and a link.
import { mono, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  list: { "border-bottom-color": "line" },
  row: { color: "fg", "border-top-color": "line" },
  line: { color: "muted" },
  count: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "careers-05",
  prefix: "careers5",
  name: "Careers / Teams",
  category: "careers",
  description: "Departments. Each row is a name, a line, a count of open roles, and a link. The jobs themselves stay on the roles list.",

  props: {
    ...headerProps({
      eyebrow: "Teams",
      heading: "Where the work sits",
      description: "Three groups. The open jobs are listed on their own page, so this one only says how many.",
    }),
    teams: {
      type: "list",
      fields: { name: "text", line: "text", count: "text", href: "link" },
      default: [
        { name: "Build", line: "The sites, from the first template to the week after launch.", count: "Two open", href: "#" },
        { name: "Design", line: "The type, the photographs, and the rules for using them.", count: "One open", href: "#" },
        { name: "Strategy", line: "The brief, and the words that go in the fields.", count: "None open", href: "#" },
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
            tag: "div", key: "list", repeat: "teams",
            style: { base: { "border-bottom-width": "1px", "border-bottom-style": "solid", ...t("list") } },
            children: [{
              tag: "a", key: "row", href: "item.href",
              style: {
                base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "column-gap": "2rem", "row-gap": "0.45rem", "padding-top": "1.5rem", "padding-bottom": "1.5rem", "border-top-width": "1px", "border-top-style": "solid", "text-decoration": "none", ...t("row") },
                md: { "flex-direction": "row", "align-items": "baseline" },
              },
              children: [
                {
                  tag: "h3", key: "name", bind: "item.name",
                  style: {
                    base: { width: "100%", "flex-shrink": "0", "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1.1", "font-weight": "600", "letter-spacing": "-0.03em" },
                    md: { width: "10rem", "flex-shrink": "0", "font-size": "2rem" },
                  },
                },
                { tag: "p", key: "line", bind: "item.line", style: { base: { "flex-grow": "1", "margin-top": "0", "margin-bottom": "0", "max-width": "32rem", "font-size": "1.0625rem", "line-height": "1.5", ...t("line") } } },
                { tag: "div", key: "count", bind: "item.count", style: { base: { "flex-shrink": "0", ...mono(), ...t("count") } } },
              ],
            }],
          },
        ],
      }),
    ],
  },
};
