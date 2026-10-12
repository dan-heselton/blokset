// A full posting: the work, the desk, related roles, and a way to share it.
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
  "place-label": { color: "muted" },
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
  id: "careers-09",
  prefix: "careers9",
  name: "Careers / Posting",
  category: "careers",
  description: "A job posting with the schedule, who you report to, the work, a map of the desk, related roles, and links to share it.",

  props: {
    ...headerProps({
      eyebrow: "Open role",
      heading: "Webflow developer",
      description: "You take a designed page and make it a site an editor can publish on a Thursday, then you stay on it after it launches.",
    }),
    team: { type: "text", default: "Build" },
    type: { type: "text", default: "Full-time" },
    schedule: { type: "text", default: "Three days in Rockport, two remote" },
    reports: { type: "text", default: "Maya Chen, studio lead" },
    address: { type: "text", default: "18 Main Street, Rockport" },
    hours: { type: "text", default: "Tuesday to Thursday, 9 to 5" },
    arrive: { type: "text", default: "The train to Rockport, then a ten-minute walk down Main. The door is beside the chair in the window." },
    map: rockportMapImage,
    showApply: { type: "boolean", default: true, description: "Show the apply link." },
    buttons: { type: "buttons", max: 1, default: [{ title: "Apply", href: "mailto:jobs@studio.co", variant: "dark" }] },
    duties: {
      type: "list",
      fields: { title: "text", text: "text" },
      default: [
        { title: "Build the pages", text: "Webflow or Astro, so an editor can change the words without breaking the layout." },
        { title: "Name the fields", text: "Name them the way the client talks about the work, not the way the template is named." },
        { title: "Say what will not fit", text: "Write a short note when a part of the brief will not fit the layout we showed." },
        { title: "Stay the week after", text: "Review the live site the week after launch and fix what an editor actually hit." },
      ],
    },
    related: {
      type: "list",
      fields: { title: "text", meta: "text", why: "text", href: "link" },
      default: [
        { title: "Brand designer", meta: "Design · Rockport", why: "The pages you build start as files from this desk.", href: "#brand-designer" },
        { title: "Studio producer", meta: "Build · The harbor", why: "They keep the week you are building inside.", href: "#studio-producer" },
        { title: "Content editor", meta: "Strategy · Remote", why: "They write the lines that go in the fields you name.", href: "#content-editor" },
      ],
    },
    shares: {
      type: "list",
      fields: { label: "text", href: "link" },
      default: [
        { label: "Email this role", href: "mailto:jobs@studio.co?subject=Webflow%20developer" },
        { label: "Public link", href: "https://studio.co/careers/webflow-developer" },
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
            tag: "div", key: "facts",
            style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "2.5rem", "row-gap": "1.25rem", width: "100%" } },
            children: [fact("team", "Team"), fact("type", "Type"), fact("schedule", "Schedule"), fact("reports", "Reports to")],
          },
          label("work-label", "The work"),
          {
            tag: "div", key: "duties", repeat: "duties", attrs: { "data-blok-accordion": "" },
            style: { base: { width: "100%", "max-width": "40rem", "border-bottom-width": "1px", "border-bottom-style": "solid", ...t("duties") } },
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
                  children: [{ tag: "p", key: "duty-text", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "padding-bottom": "1.25rem", "max-width": "36rem", "font-size": "1.0625rem", "line-height": "1.6", ...t("duty-text") } } }],
                },
              ],
            }],
          },
          label("place-label", "The place"),
          {
            tag: "div", key: "place",
            style: {
              base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "column-gap": "0rem", "row-gap": "1.25rem", width: "100%" },
              md: { "flex-direction": "row", "column-gap": "2rem", "row-gap": "0rem" },
            },
            children: [
              rockportMap({ md: { width: "18rem", height: "14rem" } }),
              {
                tag: "div", key: "place-facts",
                style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "1.25rem", "max-width": "28rem" } },
                children: [
                  fact("address", "Address"),
                  fact("hours", "Hours"),
                  {
                    tag: "div", key: "arrive-fact",
                    style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "0.35rem" } },
                    children: [
                      { tag: "p", key: "arrive", bind: "arrive", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1.0625rem", "line-height": "1.55", ...t("arrive") } } },
                    ],
                  },
                ],
              },
            ],
          },
          label("also-label", "Related roles"),
          {
            tag: "div", key: "related-list", repeat: "related",
            style: { base: { width: "100%", "border-bottom-width": "1px", "border-bottom-style": "solid", ...t("related-list") } },
            children: [{
              tag: "a", key: "related", href: "item.href",
              style: {
                base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "0.35rem", "padding-top": "1.1rem", "padding-bottom": "1.1rem", "border-top-width": "1px", "border-top-style": "solid", "text-decoration": "none", ...t("related") },
              },
              children: [
                {
                  tag: "h3", key: "related-title", bind: "item.title",
                  style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.35rem", "line-height": "1.2", "font-weight": "600", "letter-spacing": "-0.02em" } },
                },
                { tag: "div", key: "related-meta", bind: "item.meta", style: { base: { ...mono(), "letter-spacing": "0.04em", ...t("related-meta") } } },
                { tag: "p", key: "why", bind: "item.why", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "36rem", "font-size": "1rem", "line-height": "1.5", ...t("why") } } },
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
      }),
    ],
  },
};
