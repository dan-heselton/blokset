// Project details stay on the left. Image chapters scroll on the right. On a phone the images come first.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  eyebrow: { color: "muted" },
  title: { color: "fg" },
  summary: { color: "muted" },
  "client-label": { color: "muted" },
  "year-label": { color: "muted" },
  "role-label": { color: "muted" },
  client: { color: "fg" },
  year: { color: "fg" },
  role: { color: "fg" },
  "chapter-text": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1600&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "work-03",
  prefix: "work3",
  name: "Study / Meta left",
  category: "work",
  description: "The project title and details stick on the left. Image chapters scroll on the right. On a phone the images come first.",

  props: {
    showEyebrow: { type: "boolean", default: true },
    eyebrow: { type: "text", default: "Selected work" },
    title: { type: "text", default: "North Shore Arts" },
    summary: { type: "text", default: "A site the gallery’s editors can publish without a developer on the call. Programs, exhibitions, and a visit page that answers the practical questions first." },
    client: { type: "text", default: "North Shore Arts" },
    year: { type: "text", default: "2024" },
    role: { type: "text", default: "Site, type, and the publishing guide" },
    showButtons: { type: "boolean", default: true },
    buttons: { type: "buttons", max: 1, default: [{ title: "View the project", href: "#", variant: "dark" }] },
    chapters: {
      type: "list",
      fields: { title: "text", text: "text", image: "image" },
      default: [
        { title: "The lobby", text: "The homepage is the current exhibition, not a menu of everything the gallery has ever done.", image: photo("1519710164239-da123dc03ef4", "A bright room with a chair and a table") },
        { title: "The galleries", text: "Each show has a date, a room, and enough photographs to decide if the trip is worth it.", image: photo("1497366216548-37526070297c", "A long quiet corridor") },
        { title: "The program", text: "Talks and workshops sit in one list the front desk can update on a Thursday.", image: photo("1486406146926-c627a92ad1ab", "A glass building in daylight") },
        { title: "The visit", text: "Hours, the ramp, and where to leave a bike. The questions people actually ask.", image: photo("1500530855697-b586d89ba3ee", "Open green hills") },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "title", "summary"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "layout",
        style: {
          base: { display: "grid", "grid-template-columns": "1fr", "align-items": "start", "grid-column-gap": "0rem", "grid-row-gap": "2.5rem" },
          lg: { "grid-template-columns": "0.8fr 1.2fr", "grid-column-gap": "4rem", "grid-row-gap": "0rem" },
        },
        children: [
          {
            tag: "div", key: "chapters", repeat: "chapters",
            style: {
              base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem", "grid-column-start": "1", "grid-column-end": "2", "grid-row-start": "1", "grid-row-end": "2" },
              lg: { "grid-column-start": "2", "grid-column-end": "3", "grid-row-start": "1", "grid-row-end": "2", "row-gap": "4rem" },
            },
            children: [{
              tag: "div", key: "chapter",
              style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.75rem" } },
              children: [
                { tag: "img", key: "chapter-image", bind: "item.image", style: { base: { display: "block", width: "100%", "aspect-ratio": "16 / 10", "object-fit": "cover", ...radius("token(radius-card)") } } },
                { tag: "h3", key: "chapter-title", bind: "item.title", style: { base: { "margin-top": "0.25rem", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.15", "font-weight": "600", "letter-spacing": "-0.02em" } } },
                { tag: "p", key: "chapter-text", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "36rem", "font-size": "1.0625rem", "line-height": "1.6", ...t("chapter-text") } } },
              ],
            }],
          },
          {
            tag: "div", key: "meta",
            style: {
              base: {
                position: "relative", top: "0", display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "1.25rem",
                "grid-column-start": "1", "grid-column-end": "2", "grid-row-start": "2", "grid-row-end": "3",
              },
              lg: { position: "sticky", top: "6rem", "grid-column-start": "1", "grid-column-end": "2", "grid-row-start": "1", "grid-row-end": "2" },
            },
            children: [
              { tag: "div", key: "eyebrow", bind: "eyebrow", if: "showEyebrow", style: { base: { ...mono(), ...t("eyebrow") } } },
              { tag: "h2", key: "title", bind: "title", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "2.75rem", "line-height": "0.95", "font-weight": "600", "letter-spacing": "-0.04em", ...t("title") }, lg: { "font-size": "3.75rem" } } },
              { tag: "p", key: "summary", bind: "summary", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1.0625rem", "line-height": "1.6", ...t("summary") } } },
              {
                tag: "div", key: "facts",
                style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.75rem", width: "100%", "padding-top": "0.5rem" } },
                children: [
                  { tag: "div", key: "client-label", text: "Client", style: { base: { ...mono(), ...t("client-label") } } },
                  { tag: "div", key: "client", bind: "client", style: { base: { "margin-bottom": "0.5rem", "font-size": "1.0625rem", ...t("client") } } },
                  { tag: "div", key: "year-label", text: "Year", style: { base: { ...mono(), ...t("year-label") } } },
                  { tag: "div", key: "year", bind: "year", style: { base: { "margin-bottom": "0.5rem", "font-size": "1.0625rem", ...t("year") } } },
                  { tag: "div", key: "role-label", text: "Role", style: { base: { ...mono(), ...t("role-label") } } },
                  { tag: "div", key: "role", bind: "role", style: { base: { "font-size": "1.0625rem", ...t("role") } } },
                ],
              },
              { tag: "div", key: "actions", repeat: "buttons", if: "showButtons", style: { base: { display: "flex" } } },
            ],
          },
        ],
      }),
    ],
  },
};
