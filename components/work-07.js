// Four columns: client, project, year, role. The project name is the link.
import { themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  list: { "border-bottom-color": "line" },
  row: { "border-top-color": "line" },
  client: { color: "muted" },
  title: { color: "fg" },
  year: { color: "muted" },
  role: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "work-07",
  prefix: "work7",
  name: "Portfolio / Ledger",
  category: "portfolio",
  description: "Portfolio list. Four columns: client, project, year, and role. The project name is the link. No photographs.",

  props: {
    ...headerProps({
      eyebrow: "Ledger",
      heading: "Contents",
      description: "Client, project, year, and what we did. The name is the link.",
    }),
    projects: {
      type: "list",
      fields: { client: "text", title: "text", year: "text", role: "text", href: "link" },
      default: [
        { client: "Tidewater", title: "Tidewater Supply", year: "2026", role: "Brand and the shop", href: "#" },
        { client: "North Shore Arts", title: "North Shore Arts", year: "2026", role: "Site and the publishing guide", href: "#" },
        { client: "Halyard", title: "Halyard", year: "2025", role: "Product site", href: "#" },
        { client: "Saltbox", title: "Saltbox Bakery", year: "2025", role: "Identity and the web", href: "#" },
        { client: "Ledgewood", title: "Ledgewood Architects", year: "2024", role: "Portfolio", href: "#" },
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
              tag: "div", key: "row",
              style: {
                base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "column-gap": "1rem", "row-gap": "0.25rem", "padding-top": "1.1rem", "padding-bottom": "1.1rem", "border-top-width": "1px", "border-top-style": "solid", ...t("row") },
                md: { "flex-direction": "row", "align-items": "baseline", "column-gap": "1.5rem" },
              },
              children: [
                { tag: "div", key: "client", bind: "item.client", style: { base: { width: "100%", "flex-shrink": "0", "font-size": "0.9375rem", "line-height": "1.4", ...t("client") }, md: { width: "11rem" } } },
                {
                  tag: "h3", key: "title-wrap",
                  style: { base: { "flex-grow": "1", "min-width": "0", "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.35rem", "line-height": "1.2", "font-weight": "600", "letter-spacing": "-0.02em" }, md: { "font-size": "1.5rem" } },
                  children: [{
                    tag: "a", key: "title", bind: "item.title", href: "item.href",
                    style: { base: { "text-decoration": "none", ...t("title") } },
                  }],
                },
                { tag: "div", key: "year", bind: "item.year", style: { base: { width: "4.5rem", "flex-shrink": "0", "font-size": "0.9375rem", "line-height": "1.4", ...t("year") } } },
                { tag: "div", key: "role", bind: "item.role", style: { base: { width: "100%", "flex-shrink": "0", "font-size": "0.9375rem", "line-height": "1.4", ...t("role") }, md: { width: "14rem" } } },
              ],
            }],
          },
        ],
      }),
    ],
  },
};
