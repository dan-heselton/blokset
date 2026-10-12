// A large photograph with the headline on it, a booking card, and two smaller photographs.
import { inset0, mono, pad, radius, shapeVariant, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  card: { "background-color": "panel", color: "fg" },
  "row-label": { color: "muted" },
  thumb: { "background-color": "panel", color: "fg" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1600&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-40",
  prefix: "hero40",
  name: "Hero / Stage",
  category: "hero",
  description: "A large photograph with the headline on it, a card of three labeled rows and one action, and two smaller photographs with captions. On a phone they stack.",

  props: {
    heading: { type: "text", default: "The next week, from the same desk." },
    showDescription: { type: "boolean", default: true, description: "Show the line on the photograph." },
    description: { type: "text", default: "Arrive, leave, and who is in the room. Then the photographs." },
    image: { type: "image", priority: true, default: shot("1497366216548-37526070297c", "A bright studio with a long desk") },
    showCard: { type: "boolean", default: true, description: "Show the booking card." },
    cardTitle: { type: "text", default: "Halyard" },
    rows: {
      type: "list",
      fields: { label: "text", value: "text" },
      default: [
        { label: "Arrive", value: "Mon 14" },
        { label: "Leave", value: "Fri 18" },
        { label: "Who", value: "Maya Chen" },
      ],
    },
    showButtons: { type: "boolean", default: true, description: "Show the action." },
    buttons: { type: "buttons", max: 1, default: [{ title: "Hold the week", href: "#", variant: "dark" }] },
    showThumbs: { type: "boolean", default: true, description: "Show the two photographs." },
    thumbs: {
      type: "list",
      fields: { caption: "text", image: "image" },
      default: [
        { caption: "Harbor", image: shot("1501594907352-04cda38ebc29", "A low pier and still harbor water") },
        { caption: "The field", image: shot("1500382017468-9049fed747ef", "A gold field under a wide sky") },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
    shape: shapeVariant(["stage", "card", "thumb"]),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["heading", "description", "card"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1rem" } },
        children: [
          {
            tag: "div", key: "top",
            style: {
              base: { display: "flex", "flex-direction": "column", "align-items": "stretch", "row-gap": "1rem", "column-gap": "0rem" },
              lg: { "flex-direction": "row", "align-items": "stretch", "column-gap": "1rem", "row-gap": "0rem" },
            },
            children: [
              {
                tag: "div", key: "stage",
                style: { base: { position: "relative", overflow: "hidden", width: "100%", "min-height": "22rem", ...radius("token(radius-card)") }, lg: { width: "68%", "min-height": "28rem" } },
                children: [
                  { tag: "img", key: "image", bind: "image", style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } } },
                  {
                    tag: "div", key: "shade", decorative: true,
                    style: { base: { ...inset0, "background-image": "linear-gradient(to top, token(shade-strong) 0%, token(shade-clear) 55%)" } },
                  },
                  {
                    tag: "div", key: "copy",
                    style: { base: { position: "absolute", top: "auto", right: "1.25rem", bottom: "1.25rem", left: "1.25rem" } },
                    children: [
                      {
                        tag: "h1", key: "heading", bind: "heading",
                        style: {
                          base: { "margin-top": "0", "margin-bottom": "0", "max-width": "14ch", color: "token(text-inverse)", "font-family": "token(font-display)", "font-size": "2.5rem", "line-height": "0.98", "font-weight": "600", "letter-spacing": "-0.04em" },
                          lg: { "font-size": "3.5rem" },
                        },
                      },
                      {
                        tag: "p", key: "description", bind: "description", if: "showDescription",
                        style: { base: { "margin-top": "0.75rem", "margin-bottom": "0", "max-width": "28rem", color: "token(text-inverse)", "font-size": "1rem", "line-height": "1.45" } },
                      },
                    ],
                  },
                ],
              },
              {
                tag: "div", key: "card", if: "showCard",
                style: { base: { display: "flex", "flex-direction": "column", "justify-content": "space-between", width: "100%", "min-height": "18rem", ...radius("token(radius-card)"), ...pad("1.25rem"), ...t("card") }, lg: { width: "32%" } },
                children: [
                  { tag: "h2", key: "card-title", bind: "cardTitle", style: { base: { "margin-top": "0", "margin-bottom": "1rem", "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1", "font-weight": "600" } } },
                  {
                    tag: "div", key: "rows", repeat: "rows",
                    style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.75rem" } },
                    children: [{
                      tag: "div", key: "row",
                      style: { base: { display: "flex", "justify-content": "space-between", "align-items": "baseline", "column-gap": "1rem" } },
                      children: [
                        { tag: "div", key: "row-label", bind: "item.label", style: { base: { ...mono(), "font-size": "0.7rem", ...t("row-label") } } },
                        { tag: "div", key: "row-value", bind: "item.value", style: { base: { "font-size": "1rem", "line-height": "1.3" } } },
                      ],
                    }],
                  },
                  { tag: "div", key: "actions", repeat: "buttons", if: "showButtons", style: { base: { display: "flex", "margin-top": "1.25rem" } } },
                ],
              },
            ],
          },
          {
            tag: "div", key: "thumbs", repeat: "thumbs", if: "showThumbs",
            style: {
              base: { display: "grid", "grid-template-columns": "minmax(0, 1fr)", "column-gap": "1rem", "row-gap": "1rem" },
              md: { "grid-template-columns": "repeat(2, minmax(0, 1fr))" },
            },
            children: [{
              tag: "div", key: "thumb",
              style: { base: { position: "relative", overflow: "hidden", "min-height": "10rem", ...radius("token(radius-card)") } },
              children: [
                { tag: "img", key: "thumb-image", bind: "item.image", style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } } },
                {
                  tag: "div", key: "caption", bind: "item.caption",
                  style: { base: { position: "absolute", right: "0.85rem", bottom: "0.85rem", left: "0.85rem", top: "auto", color: "token(text-inverse)", "font-family": "token(font-display)", "font-size": "1.25rem", "line-height": "1", "font-weight": "600" } },
                },
              ],
            }],
          },
        ],
      }),
    ],
  },
};
