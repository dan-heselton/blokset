// Open roles: each row is the job, the team, the place, the type, and an apply link.
import { mono, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  list: { "border-bottom-color": "line" },
  row: { color: "fg", "border-top-color": "line" },
  meta: { color: "muted" },
  location: { color: "muted" },
  type: { color: "muted" },
  apply: { color: "fg" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "careers-01",
  prefix: "careers1",
  name: "Careers / Open Roles",
  category: "careers",
  description: "A list of open roles with team, location, type, and an apply link on each row.",

  props: {
    ...headerProps({
      eyebrow: "Careers",
      heading: "Open roles",
      description: "Small team. We hire when a project load needs another person, not to fill a chart.",
    }),
    showMeta: { type: "boolean", default: true, description: "Show team and location." },
    roles: {
      type: "list",
      fields: { title: "text", team: "text", location: "text", type: "text", apply: "text", href: "link" },
      default: [
        { title: "Webflow developer", team: "Build", location: "Rockport or remote", type: "Full-time", apply: "Apply", href: "mailto:jobs@studio.co" },
        { title: "Brand designer", team: "Design", location: "Rockport", type: "Contract", apply: "Apply", href: "mailto:jobs@studio.co" },
        { title: "Content editor", team: "Strategy", location: "Remote", type: "Part-time", apply: "Apply", href: "mailto:jobs@studio.co" },
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
            tag: "div", key: "list", repeat: "roles",
            style: { base: { "border-bottom-width": "1px", "border-bottom-style": "solid", ...t("list") } },
            children: [
              {
                tag: "a", key: "row", href: "item.href",
                style: {
                  base: { display: "flex", "flex-wrap": "wrap", "align-items": "baseline", "column-gap": "1.5rem", "row-gap": "0.4rem", "padding-top": "1.35rem", "padding-bottom": "1.35rem", "border-top-width": "1px", "border-top-style": "solid", "text-decoration": "none", ...t("row") },
                  md: { "flex-wrap": "nowrap", "align-items": "center" },
                },
                children: [
                  {
                    tag: "h3", key: "title", bind: "item.title",
                    style: {
                      base: { "flex-grow": "1", "flex-basis": "100%", "min-width": "0", "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.2", "font-weight": "500", "letter-spacing": "-0.02em" },
                      md: { "flex-basis": "0%", "font-size": "1.75rem" },
                    },
                  },
                  { tag: "div", key: "meta", bind: "item.team", if: "showMeta", style: { base: { width: "7rem", "flex-shrink": "0", ...mono(), "letter-spacing": "0.04em", ...t("meta") } } },
                  { tag: "div", key: "location", bind: "item.location", if: "showMeta", style: { base: { width: "11rem", "flex-shrink": "0", "font-size": "0.9375rem", "line-height": "1.4", ...t("location") } } },
                  { tag: "div", key: "type", bind: "item.type", style: { base: { width: "6.5rem", "flex-shrink": "0", ...mono(), "letter-spacing": "0.04em", ...t("type") } } },
                  { tag: "div", key: "apply", bind: "item.apply", style: { base: { "margin-left": "auto", "font-size": "0.9375rem", "line-height": "1.4", "text-decoration": "underline", "text-underline-offset": "0.25em", ...t("apply") } } },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
