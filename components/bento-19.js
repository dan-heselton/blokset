// A tall photograph, a list on a second photograph, a stat, and a quote.
import { inset0, pad, radius, shapeVariant, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  stat: { "background-color": "glyph", color: "fg" },
  "stat-label": { color: "fg" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1600&q=80`, alt });
const span = (n) => ({ "grid-column-start": `span ${n}`, "grid-column-end": `span ${n}` });
const inverse = { color: "token(text-inverse)" };

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "bento-19",
  prefix: "bento19",
  name: "Bento / Panels",
  category: "bento",
  description: "A tall photograph with a headline and one action. Beside it, a photograph carries a short list. Under those: a stat, and a quote on a third photograph.",

  props: {
    heading: { type: "text", default: "The trip is the work, not the distance." },
    showButtons: { type: "boolean", default: true, description: "Show the action on the photograph." },
    buttons: { type: "buttons", max: 1, default: [{ title: "Plan the week", href: "#", variant: "primary" }] },
    image: { type: "image", default: shot("1500530855697-b586d89ba3ee", "Green hills under a pale sky") },
    listImage: { type: "image", default: shot("1497366216548-37526070297c", "A bright studio with a long desk") },
    items: {
      type: "list",
      fields: { label: "text" },
      default: [
        { label: "A Friday in the room" },
        { label: "The photographs, named" },
        { label: "A CMS the staff can open" },
        { label: "Someone who stays the week after" },
      ],
    },
    listAction: { type: "text", default: "See what we bring" },
    listHref: { type: "link", default: "#" },
    statValue: { type: "text", default: "48" },
    statLabel: { type: "text", default: "Pages shipped from this desk" },
    quote: { type: "text", default: "The page went out Monday." },
    quoteName: { type: "text", default: "North Shore Arts" },
    quoteImage: { type: "image", default: shot("1501594907352-04cda38ebc29", "A low pier and still harbor water") },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
    shape: shapeVariant(["photo", "list", "stat", "quote"]),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["heading", "list", "stat"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "grid",
        style: {
          base: { display: "grid", "grid-template-columns": "minmax(0, 1fr)", "column-gap": "1rem", "row-gap": "1rem" },
          md: { "grid-template-columns": "repeat(2, minmax(0, 1fr))" },
          lg: { "grid-template-columns": "repeat(3, minmax(0, 1fr))" },
        },
        children: [
          {
            tag: "div", key: "photo",
            style: {
              base: { position: "relative", overflow: "hidden", "min-height": "22rem", "grid-row-start": "auto", "grid-row-end": "auto", ...span(1), ...radius("token(radius-card)") },
              md: { ...span(2) },
              lg: { ...span(1), "grid-row-start": "span 2", "grid-row-end": "span 2", "min-height": "32rem" },
            },
            children: [
              { tag: "img", key: "image", bind: "image", style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } } },
              {
                tag: "div", key: "shade", decorative: true,
                style: { base: { ...inset0, "background-image": "linear-gradient(to top, token(shade-strong) 0%, token(shade-clear) 55%)" } },
              },
              {
                tag: "div", key: "photo-copy",
                style: { base: { position: "absolute", top: "auto", right: "1.25rem", bottom: "1.25rem", left: "1.25rem" } },
                children: [
                  {
                    tag: "h2", key: "heading", bind: "heading",
                    style: {
                      base: { "margin-top": "0", "margin-bottom": "0", "max-width": "14ch", "font-family": "token(font-display)", "font-size": "2rem", "line-height": "1", "font-weight": "600", "letter-spacing": "-0.03em", ...inverse },
                      lg: { "font-size": "2.5rem" },
                    },
                  },
                  { tag: "div", key: "actions", repeat: "buttons", if: "showButtons", style: { base: { display: "flex", "margin-top": "1rem" } } },
                ],
              },
            ],
          },
          {
            tag: "div", key: "list",
            style: {
              base: { position: "relative", overflow: "hidden", "min-height": "16rem", ...span(1), ...radius("token(radius-card)") },
              md: { ...span(2) },
              lg: { ...span(2), "min-height": "16rem" },
            },
            children: [
              { tag: "img", key: "list-image", bind: "listImage", style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } } },
              {
                tag: "div", key: "list-shade", decorative: true,
                style: { base: { ...inset0, "background-image": "linear-gradient(to top, token(shade-strong) 0%, token(overlay) 55%, token(overlay-subtle) 100%)" } },
              },
              {
                tag: "div", key: "list-copy",
                style: { base: { position: "absolute", top: "auto", right: "1.25rem", bottom: "1.25rem", left: "1.25rem", display: "flex", "flex-direction": "column", "row-gap": "0.85rem" } },
                children: [
                  {
                    tag: "div", key: "items", repeat: "items",
                    style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.45rem" } },
                    children: [{ tag: "div", key: "item", bind: "item.label", style: { base: { "font-size": "1.05rem", "line-height": "1.35", ...inverse } } }],
                  },
                  { tag: "a", key: "list-link", href: "listHref", bind: "listAction", style: { base: { color: "token(text-inverse)", "font-size": "1rem" } } },
                ],
              },
            ],
          },
          {
            tag: "div", key: "stat",
            style: { base: { display: "flex", "flex-direction": "column", "justify-content": "flex-end", "min-height": "12rem", ...span(1), ...radius("token(radius-card)"), ...pad("1.25rem"), ...t("stat") } },
            children: [
              { tag: "div", key: "stat-value", bind: "statValue", style: { base: { "font-family": "token(font-display)", "font-size": "3.5rem", "line-height": "0.9", "font-weight": "600" } } },
              { tag: "p", key: "stat-label", bind: "statLabel", style: { base: { "margin-top": "0.4rem", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.35", ...t("stat-label") } } },
            ],
          },
          {
            tag: "div", key: "quote",
            style: { base: { position: "relative", overflow: "hidden", "min-height": "12rem", ...span(1), ...radius("token(radius-card)") } },
            children: [
              { tag: "img", key: "quote-image", bind: "quoteImage", style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } } },
              { tag: "div", key: "quote-shade", decorative: true, style: { base: { ...inset0, "background-color": "token(overlay)" } } },
              {
                tag: "div", key: "quote-copy",
                style: { base: { position: "absolute", top: "auto", right: "1rem", bottom: "1rem", left: "1rem" } },
                children: [
                  { tag: "p", key: "quote-text", bind: "quote", style: { base: { "margin-top": "0", "margin-bottom": "0.35rem", "font-family": "token(font-display)", "font-size": "1.35rem", "line-height": "1.15", "font-weight": "600", ...inverse } } },
                  { tag: "div", key: "quote-name", bind: "quoteName", style: { base: { "font-size": "0.9rem", "line-height": "1.3", ...inverse } } },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
