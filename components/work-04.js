// A portfolio list. Each row is a link: thumbnail, project, client, and year. The photograph stays visible.
import { radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  list: { "border-bottom-color": "line" },
  row: { color: "fg", "border-top-color": "line" },
  client: { color: "muted" },
  year: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=400&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "work-04",
  prefix: "work4",
  name: "Portfolio / Rows",
  category: "portfolio",
  description: "Portfolio list. Each row is a link: a thumbnail, the project, the client, and the year. The photograph is always visible.",

  props: {
    ...headerProps({
      eyebrow: "Selected work",
      heading: "Projects",
      description: "A straight list. The photograph stays on the row, so you can scan without hovering.",
    }),
    projects: {
      type: "list",
      fields: { title: "text", client: "text", year: "text", href: "link", image: "image" },
      default: [
        { title: "Tidewater Supply", client: "Tidewater", year: "2026", href: "#", image: shot("1501594907352-04cda38ebc29", "A bridge in fog above the water") },
        { title: "North Shore Arts", client: "North Shore Arts", year: "2026", href: "#", image: shot("1519710164239-da123dc03ef4", "A sunlit room with a wooden chair") },
        { title: "Halyard", client: "Halyard", year: "2025", href: "#", image: shot("1497366216548-37526070297c", "A long desk in a bright studio") },
        { title: "Saltbox Bakery", client: "Saltbox", year: "2025", href: "#", image: shot("1517248135467-4c7edcad34c4", "A dining room with set tables") },
        { title: "Ledgewood Architects", client: "Ledgewood", year: "2024", href: "#", image: shot("1486406146926-c627a92ad1ab", "A glass building in daylight") },
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
            tag: "div", key: "list", repeat: "projects",
            style: { base: { "border-bottom-width": "1px", "border-bottom-style": "solid", ...t("list") } },
            children: [{
              tag: "a", key: "row", href: "item.href",
              style: {
                base: { display: "flex", "flex-direction": "row", "align-items": "center", "column-gap": "1rem", "row-gap": "0.35rem", "padding-top": "0.85rem", "padding-bottom": "0.85rem", "border-top-width": "1px", "border-top-style": "solid", "text-decoration": "none", ...t("row") },
                md: { "column-gap": "1.5rem", "padding-top": "1rem", "padding-bottom": "1rem" },
              },
              children: [
                {
                  tag: "img", key: "thumb", bind: "item.image",
                  style: {
                    base: { display: "block", width: "4.25rem", height: "4.25rem", "object-fit": "cover", "flex-shrink": "0", ...radius("token(radius)") },
                    md: { width: "5rem", height: "5rem" },
                  },
                },
                {
                  tag: "div", key: "copy",
                  style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "column-gap": "0rem", "row-gap": "0.2rem", "flex-grow": "1", "min-width": "0" }, md: { "flex-direction": "row", "align-items": "baseline", "column-gap": "1.5rem" } },
                  children: [
                    {
                      tag: "h3", key: "title", bind: "item.title",
                      style: {
                        base: { "flex-grow": "1", "min-width": "0", "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.25rem", "line-height": "1.2", "font-weight": "600", "letter-spacing": "-0.02em" },
                        md: { "font-size": "1.5rem" },
                      },
                    },
                    { tag: "div", key: "client", bind: "item.client", style: { base: { width: "100%", "flex-shrink": "0", "font-size": "0.9375rem", "line-height": "1.4", ...t("client") }, md: { width: "11rem" } } },
                    { tag: "div", key: "year", bind: "item.year", style: { base: { width: "4rem", "flex-shrink": "0", "font-size": "0.9375rem", "line-height": "1.4", ...t("year") } } },
                  ],
                },
              ],
            }],
          },
        ],
      }),
    ],
  },
};
