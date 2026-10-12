// A posting with the map beside the work on a wide screen, and above it on a phone.
import { mono, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";
import { rockportMap, rockportMapImage } from "./_lib/map.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  team: { color: "fg" },
  type: { color: "fg" },
  schedule: { color: "fg" },
  reports: { color: "fg" },
  "team-label": { color: "muted" },
  "type-label": { color: "muted" },
  "schedule-label": { color: "muted" },
  "reports-label": { color: "muted" },
  "work-label": { color: "muted" },
  "also-label": { color: "muted" },
  "share-label": { color: "muted" },
  duties: { "border-bottom-color": "line" },
  "duty-item": { "border-top-color": "line" },
  "duty-icon": { color: "muted" },
  "duty-text": { color: "muted" },
  address: { color: "fg" },
  hours: { color: "fg" },
  arrive: { color: "muted" },
  "address-label": { color: "muted" },
  "hours-label": { color: "muted" },
  related: { color: "fg", "border-top-color": "line" },
  why: { color: "muted" },
  "related-meta": { color: "muted" },
  "related-list": { "border-bottom-color": "line" },
  share: { color: "fg" },
};
const t = (key) => themeBase("light", THEME[key]);
const fact = (key, label) => ({
  tag: "div", key: `${key}-fact`,
  style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "0.35rem", "min-width": "8rem" } },
  children: [
    { tag: "div", key: `${key}-label`, text: label, style: { base: { ...mono(), ...t(`${key}-label`) } } },
    { tag: "div", key, bind: key, style: { base: { "font-size": "1.0625rem", "line-height": "1.4", ...t(key) } } },
  ],
});
const label = (key, text) => ({
  tag: "div", key, text, style: { base: { ...mono(), ...t(key) } },
});

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "careers-10",
  prefix: "careers10",
  name: "Careers / Studio",
  category: "careers",
  description: "A brand designer posting. The map and address sit beside the work on a wide screen, and above it on a phone.",

  props: {
    ...headerProps({
      eyebrow: "Open role",
      heading: "Brand designer",
      description: "You draw the mark, set the type, and leave pages a client can publish without calling us.",
    }),
    team: { type: "text", default: "Design" },
    type: { type: "text", default: "Contract" },
    schedule: { type: "text", default: "Four days in Rockport, one remote" },
    reports: { type: "text", default: "Jonah Ell, art director" },
    address: { type: "text", default: "18 Main Street, Rockport" },
    hours: { type: "text", default: "Monday to Thursday, 9 to 5" },
    arrive: { type: "text", default: "Same door as the rest of the studio. Your desk is the one by the north window." },
    map: rockportMapImage,
    showApply: { type: "boolean", default: true, description: "Show the apply link." },
    buttons: { type: "buttons", max: 1, default: [{ title: "Apply", href: "mailto:jobs@studio.co", variant: "dark" }] },
    duties: {
      type: "list",
      fields: { title: "text", text: "text" },
      default: [
        { title: "Draw the mark", text: "The mark and the type, until they sit together without a note." },
        { title: "Build the first pages", text: "In the file the developer will take, named the way the site is named." },
        { title: "Sit in the review", text: "Say which part of the brief the layout cannot hold." },
        { title: "Hand it over", text: "A page an editor can change without calling you back." },
      ],
    },
    related: {
      type: "list",
      fields: { title: "text", meta: "text", why: "text", href: "link" },
      default: [
        { title: "Art director", meta: "Design · Rockport", why: "You report to this desk, and you share the review.", href: "#art-director" },
        { title: "Webflow developer", meta: "Build · Rockport", why: "They build the pages you leave in the file.", href: "#webflow-developer" },
        { title: "Content editor", meta: "Strategy · Remote", why: "They write the lines that have to fit the type you set.", href: "#content-editor" },
      ],
    },
    shares: {
      type: "list",
      fields: { label: "text", href: "link" },
      default: [
        { label: "Email this role", href: "mailto:jobs@studio.co?subject=Brand%20designer" },
        { label: "Public link", href: "https://studio.co/careers/brand-designer" },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] },
    reveal: { preset: "fade-up", targets: ["related"] },
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
            tag: "div", key: "stage",
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "grid-column-gap": "0rem", "grid-row-gap": "2.5rem", width: "100%" },
              lg: { "grid-template-columns": "0.9fr 1.1fr", "grid-column-gap": "3rem", "grid-row-gap": "0rem" },
            },
            children: [
              {
                tag: "div", key: "place",
                style: {
                  base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "1.25rem", "grid-column-start": "1", "grid-row-start": "1" },
                  lg: { "grid-column-start": "1", "grid-row-start": "1" },
                },
                children: [
                  rockportMap({ lg: { height: "22rem" } }),
                  fact("address", "Address"),
                  fact("hours", "Hours"),
                  { tag: "p", key: "arrive", bind: "arrive", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1.0625rem", "line-height": "1.55", ...t("arrive") } } },
                ],
              },
              {
                tag: "div", key: "posting",
                style: {
                  base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "1.75rem", "grid-column-start": "1", "grid-row-start": "2" },
                  lg: { "grid-column-start": "2", "grid-row-start": "1", "row-gap": "2rem" },
                },
                children: [
                  {
                    tag: "div", key: "facts",
                    style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "2rem", "row-gap": "1.25rem" } },
                    children: [fact("team", "Team"), fact("type", "Type"), fact("schedule", "Schedule"), fact("reports", "Reports to")],
                  },
                  label("work-label", "The work"),
                  {
                    tag: "div", key: "duties", repeat: "duties", attrs: { "data-blok-accordion": "" },
                    style: { base: { width: "100%", "border-bottom-width": "1px", "border-bottom-style": "solid", ...t("duties") } },
                    children: [{
                      tag: "div", key: "duty-item", attrs: { "data-blok-acc-item": "" },
                      style: { base: { "border-top-width": "1px", "border-top-style": "solid", ...t("duty-item") } },
                      children: [
                        {
                          tag: "div", key: "duty-trigger", attrs: { "data-blok-acc-trigger": "" },
                          style: { base: { display: "flex", "align-items": "center", "justify-content": "space-between", "column-gap": "1.5rem", "padding-top": "1.1rem", "padding-bottom": "1.1rem", cursor: "pointer" } },
                          children: [
                            { tag: "h3", key: "duty-title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.25rem", "line-height": "1.25", "font-weight": "600", "letter-spacing": "-0.02em" } } },
                            { tag: "div", key: "duty-icon", text: "+", decorative: true, attrs: { "data-blok-acc-icon": "" }, style: { base: { "flex-shrink": "0", "font-size": "1.5rem", "line-height": "1", "font-weight": "300", ...t("duty-icon") } } },
                          ],
                        },
                        {
                          tag: "div", key: "duty-panel", attrs: { "data-blok-acc-panel": "" },
                          children: [{ tag: "p", key: "duty-text", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "padding-bottom": "1.25rem", "font-size": "1.0625rem", "line-height": "1.6", ...t("duty-text") } } }],
                        },
                      ],
                    }],
                  },
                  label("also-label", "Related roles"),
                  {
                    tag: "div", key: "related-list", repeat: "related",
                    style: { base: { width: "100%", "border-bottom-width": "1px", "border-bottom-style": "solid", ...t("related-list") } },
                    children: [{
                      tag: "a", key: "related", href: "item.href",
                      style: {
                        base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "0.35rem", "padding-top": "1rem", "padding-bottom": "1rem", "border-top-width": "1px", "border-top-style": "solid", "text-decoration": "none", ...t("related") },
                      },
                      children: [
                        {
                          tag: "h3", key: "related-title", bind: "item.title",
                          style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.25rem", "line-height": "1.2", "font-weight": "600", "letter-spacing": "-0.02em" } },
                        },
                        { tag: "div", key: "related-meta", bind: "item.meta", style: { base: { ...mono(), "letter-spacing": "0.04em", ...t("related-meta") } } },
                        { tag: "p", key: "why", bind: "item.why", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.5", ...t("why") } } },
                      ],
                    }],
                  },
                  label("share-label", "Share this role"),
                  {
                    tag: "div", key: "share-list", repeat: "shares",
                    style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "1.5rem", "row-gap": "0.5rem" } },
                    children: [{
                      tag: "a", key: "share", href: "item.href", bind: "item.label",
                      style: { base: { ...mono(), "letter-spacing": "0.04em", "text-decoration": "underline", ...t("share") } },
                    }],
                  },
                  { tag: "div", key: "actions", repeat: "buttons", if: "showApply", style: { base: { display: "flex" } } },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
