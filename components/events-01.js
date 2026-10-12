// A dated list: date, title, place, and a link. Not a timeline.
import { mono, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  list: { "border-bottom-color": "line" },
  row: { color: "fg", "border-top-color": "line" },
  date: { color: "glyph" },
  place: { color: "muted" },
  action: { color: "fg" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "events-01",
  prefix: "events1",
  name: "Events / List",
  category: "events",
  description: "Date, title, place, and a link. A plain list you can add to. Not a spine or a sideways track.",

  props: {
    ...headerProps({
      eyebrow: "On the calendar",
      heading: "Come by, or just read along",
      description: "The studio is open on Fridays. Everything else is listed here.",
    }),
    showPlace: { type: "boolean", default: true, description: "Show where it happens." },
    events: {
      type: "list",
      fields: { date: "text", title: "text", place: "text", action: "text", href: "link" },
      default: [
        { date: "Oct 16", title: "Friday preview", place: "Rockport studio", action: "Details", href: "#" },
        { date: "Nov 6", title: "Open studio", place: "Rockport studio", action: "Details", href: "#" },
        { date: "Nov 20", title: "A walk through the type", place: "Gloucester", action: "Details", href: "#" },
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
          header({ t }),
          {
            tag: "div", key: "list", repeat: "events",
            style: { base: { "border-bottom-width": "1px", "border-bottom-style": "solid", ...t("list") } },
            children: [{
              tag: "a", key: "row", href: "item.href",
              style: {
                base: { display: "flex", "flex-wrap": "wrap", "align-items": "baseline", "column-gap": "1.5rem", "row-gap": "0.4rem", "padding-top": "1.35rem", "padding-bottom": "1.35rem", "border-top-width": "1px", "border-top-style": "solid", "text-decoration": "none", ...t("row") },
                md: { "flex-wrap": "nowrap", "align-items": "center" },
              },
              children: [
                { tag: "div", key: "date", bind: "item.date", style: { base: { width: "5.5rem", "flex-shrink": "0", "font-family": "token(font-display)", "font-size": "1.125rem", "line-height": "1.2", "font-weight": "600", "letter-spacing": "-0.02em", ...t("date") } } },
                {
                  tag: "h3", key: "title", bind: "item.title",
                  style: {
                    base: { "flex-grow": "1", "flex-basis": "100%", "min-width": "0", "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.2", "font-weight": "500", "letter-spacing": "-0.02em" },
                    md: { "flex-basis": "0%", "font-size": "1.75rem" },
                  },
                },
                { tag: "div", key: "place", bind: "item.place", if: "showPlace", style: { base: { width: "11rem", "flex-shrink": "0", ...mono(), ...t("place") } } },
                { tag: "div", key: "action", bind: "item.action", style: { base: { "flex-shrink": "0", "font-size": "0.9375rem", "line-height": "1.4", "font-weight": "600", ...t("action") } } },
              ],
            }],
          },
        ],
      }),
    ],
  },
};
