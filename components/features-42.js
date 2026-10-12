// Photographs scroll on the left. The name, the summary, and the button stay put on the right.
import { radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  eyebrow: { color: "muted" },
  name: { color: "fg" },
  summary: { color: "muted" },
  caption: { color: "fg" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1600&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "features-42",
  prefix: "features42",
  name: "Product / Copy right",
  category: "features",
  description: "Photographs scroll on the left. The name, summary, and button stick on the right. On a phone the photos come first.",

  props: {
    showEyebrow: { type: "boolean", default: true },
    eyebrow: { type: "text", default: "Object" },
    name: { type: "text", default: "Field chair" },
    summary: { type: "text", default: "An ash frame and a woven seat. Light enough to move to the window, steady enough to sit in all afternoon." },
    showButtons: { type: "boolean", default: true },
    buttons: { type: "buttons", max: 1, default: [{ title: "Ask about a chair", href: "#", variant: "dark" }] },
    photos: {
      type: "list",
      fields: { caption: "text", image: "image" },
      default: [
        { caption: "The frame, before the seat goes on.", image: photo("1500530855697-b586d89ba3ee", "Green hills under a pale sky") },
        { caption: "Seat cord, pulled tight and tied under the rail.", image: photo("1519710164239-da123dc03ef4", "A wooden chair in a sunlit room") },
        { caption: "Oil, wiped back so the grain stays visible.", image: photo("1497366216548-37526070297c", "A quiet room with long wooden surfaces") },
        { caption: "Where it usually ends up: near a window, not against a wall.", image: photo("1486406146926-c627a92ad1ab", "A bright modern interior") },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "name", "summary"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "layout",
        style: {
          base: { display: "grid", "grid-template-columns": "1fr", "align-items": "start", "grid-column-gap": "0rem", "grid-row-gap": "2rem" },
          lg: { "grid-template-columns": "1.15fr 0.85fr", "grid-column-gap": "4rem", "grid-row-gap": "0rem" },
        },
        children: [
          {
            tag: "div", key: "photos", repeat: "photos",
            style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1.5rem" }, lg: { "row-gap": "2.5rem" } },
            children: [{
              tag: "div", key: "photo",
              style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.75rem" } },
              children: [
                { tag: "img", key: "photo-image", bind: "item.image", style: { base: { display: "block", width: "100%", "aspect-ratio": "4 / 5", "object-fit": "cover", ...radius("token(radius-card)") } } },
                { tag: "div", key: "caption", bind: "item.caption", style: { base: { "font-size": "1rem", "line-height": "1.45", ...t("caption") } } },
              ],
            }],
          },
          {
            tag: "div", key: "copy",
            style: { base: { position: "relative", top: "0", display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "1.25rem" }, lg: { position: "sticky", top: "6rem" } },
            children: [
              { tag: "div", key: "eyebrow", bind: "eyebrow", if: "showEyebrow", style: { base: { "font-family": "token(font-mono)", "font-size": "0.8125rem", "letter-spacing": "0.08em", "text-transform": "uppercase", ...t("eyebrow") } } },
              { tag: "h2", key: "name", bind: "name", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "2.75rem", "line-height": "0.95", "font-weight": "600", "letter-spacing": "-0.04em", ...t("name") }, lg: { "font-size": "4rem" } } },
              { tag: "p", key: "summary", bind: "summary", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "26rem", "font-size": "1.0625rem", "line-height": "1.6", ...t("summary") } } },
              { tag: "div", key: "actions", repeat: "buttons", if: "showButtons", style: { base: { display: "flex" } } },
            ],
          },
        ],
      }),
    ],
  },
};
