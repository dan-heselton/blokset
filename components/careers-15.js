// One team in detail: who leads it, what it ships, and the roles open on it.
import { mono, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  lead: { color: "fg" },
  ships: { color: "fg" },
  alongside: { color: "muted" },
  "lead-label": { color: "muted" },
  "ships-label": { color: "muted" },
  "alongside-label": { color: "muted" },
  "roles-label": { color: "muted" },
  list: { "border-bottom-color": "line" },
  role: { color: "fg", "border-top-color": "line" },
  type: { color: "muted" },
  place: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const fact = (key, label) => ({
  tag: "div", key: `${key}-fact`,
  style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "0.35rem", "max-width": "28rem" } },
  children: [
    { tag: "div", key: `${key}-label`, text: label, style: { base: { ...mono(), ...t(`${key}-label`) } } },
    { tag: "div", key, bind: key, style: { base: { "font-size": "1.0625rem", "line-height": "1.5", ...t(key) } } },
  ],
});

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "careers-15",
  prefix: "careers15",
  name: "Careers / Build",
  category: "careers",
  description: "The build team: who leads it, what it ships, how it sits with Design, and the two roles open on it.",

  props: {
    ...headerProps({
      eyebrow: "Team",
      heading: "Build",
      description: "Two roles are open. The team ships the site and stays on it the week after launch.",
    }),
    lead: { type: "text", default: "Maya Chen, studio lead" },
    ships: { type: "text", default: "Pages, the CMS, and the fixes an editor hits in the first week." },
    alongside: { type: "text", default: "Design sits in the same room in Rockport. Strategy joins the review on a call." },
    roles: {
      type: "list",
      fields: { title: "text", type: "text", place: "text", href: "link" },
      default: [
        { title: "Webflow developer", type: "Full-time", place: "Rockport or remote", href: "#webflow-developer" },
        { title: "Studio producer", type: "Full-time", place: "The harbor", href: "#studio-producer" },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] },
    reveal: { preset: "fade-up", targets: ["role"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "2.5rem" }, lg: { "row-gap": "3rem" } },
        children: [
          header({ t, layout: "stack" }),
          {
            tag: "div", key: "facts",
            style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "1.35rem" }, md: { "row-gap": "1.5rem" } },
            children: [fact("lead", "Lead"), fact("ships", "What they ship"), fact("alongside", "With Design")],
          },
          { tag: "div", key: "roles-label", text: "Open on this team", style: { base: { ...mono(), ...t("roles-label") } } },
          {
            tag: "div", key: "list", repeat: "roles",
            style: { base: { width: "100%", "border-bottom-width": "1px", "border-bottom-style": "solid", ...t("list") } },
            children: [{
              tag: "a", key: "role", href: "item.href",
              style: {
                base: { display: "flex", "flex-direction": "column", "flex-wrap": "wrap", "align-items": "flex-start", "column-gap": "1.5rem", "row-gap": "0.35rem", "padding-top": "1.15rem", "padding-bottom": "1.15rem", "border-top-width": "1px", "border-top-style": "solid", "text-decoration": "none", ...t("role") },
                md: { "flex-direction": "row", "flex-wrap": "wrap", "align-items": "baseline" },
              },
              children: [
                {
                  tag: "h3", key: "title", bind: "item.title",
                  style: {
                    base: { "flex-grow": "1", "flex-basis": "100%", "min-width": "0", "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.2", "font-weight": "600", "letter-spacing": "-0.02em" },
                    md: { "flex-basis": "0%", "font-size": "1.75rem" },
                  },
                },
                { tag: "div", key: "type", bind: "item.type", style: { base: { width: "8rem", "flex-shrink": "0", ...mono(), "letter-spacing": "0.04em", ...t("type") } } },
                { tag: "div", key: "place", bind: "item.place", style: { base: { width: "12rem", "flex-shrink": "0", "font-size": "0.9375rem", "line-height": "1.4", ...t("place") } } },
              ],
            }],
          },
        ],
      }),
    ],
  },
};
