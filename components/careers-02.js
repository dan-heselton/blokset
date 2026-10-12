// One open role: the job, where it sits, what the work is, and a link to apply.
import { mono, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  team: { color: "fg" },
  location: { color: "fg" },
  type: { color: "fg" },
  "team-label": { color: "muted" },
  "location-label": { color: "muted" },
  "type-label": { color: "muted" },
  duty: { color: "fg", "border-top-color": "line" },
  list: { "border-bottom-color": "line" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "careers-02",
  prefix: "careers2",
  name: "Careers / Role",
  category: "careers",
  description: "One open role: team, location, type, a short note, a list of the work, and an apply link.",

  props: {
    ...headerProps({
      eyebrow: "Open role",
      heading: "Webflow developer",
      description: "You build the site the designers hand over, and you stay on it after it launches.",
    }),
    team: { type: "text", default: "Build" },
    location: { type: "text", default: "Rockport or remote" },
    type: { type: "text", default: "Full-time" },
    showApply: { type: "boolean", default: true, description: "Show the apply link." },
    buttons: { type: "buttons", max: 1, default: [{ title: "Apply", href: "mailto:jobs@studio.co", variant: "dark" }] },
    duties: {
      type: "list",
      fields: { text: "text" },
      default: [
        { text: "Pages in Webflow or Astro, structured so an editor can publish on a Thursday." },
        { text: "CMS fields named the way the client talks about the work." },
        { text: "A short note when something in the brief will not fit the layout." },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] },
    reveal: { preset: "fade-up", targets: ["duty"] },
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
            style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "2.5rem", "row-gap": "1.25rem" } },
            children: [
              {
                tag: "div", key: "team-fact",
                style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.35rem", "min-width": "8rem" } },
                children: [
                  { tag: "div", key: "team-label", text: "Team", style: { base: { ...mono(), ...t("team-label") } } },
                  { tag: "div", key: "team", bind: "team", style: { base: { "font-size": "1.0625rem", "line-height": "1.4", ...t("team") } } },
                ],
              },
              {
                tag: "div", key: "location-fact",
                style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.35rem", "min-width": "8rem" } },
                children: [
                  { tag: "div", key: "location-label", text: "Place", style: { base: { ...mono(), ...t("location-label") } } },
                  { tag: "div", key: "location", bind: "location", style: { base: { "font-size": "1.0625rem", "line-height": "1.4", ...t("location") } } },
                ],
              },
              {
                tag: "div", key: "type-fact",
                style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.35rem", "min-width": "8rem" } },
                children: [
                  { tag: "div", key: "type-label", text: "Type", style: { base: { ...mono(), ...t("type-label") } } },
                  { tag: "div", key: "type", bind: "type", style: { base: { "font-size": "1.0625rem", "line-height": "1.4", ...t("type") } } },
                ],
              },
            ],
          },
          {
            tag: "div", key: "list", repeat: "duties",
            style: { base: { width: "100%", "max-width": "40rem", "border-bottom-width": "1px", "border-bottom-style": "solid", ...t("list") } },
            children: [{
              tag: "p", key: "duty", bind: "item.text",
              style: {
                base: { "margin-top": "0", "margin-bottom": "0", "padding-top": "1rem", "padding-bottom": "1rem", "border-top-width": "1px", "border-top-style": "solid", "font-size": "1.0625rem", "line-height": "1.6", ...t("duty") },
              },
            }],
          },
          { tag: "div", key: "actions", repeat: "buttons", if: "showApply", style: { base: { display: "flex" } } },
        ],
      }),
    ],
  },
};
