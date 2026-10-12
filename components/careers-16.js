// What arrives after a yes. A date, a lead, a trial, a desk, and what is on it.
import { inset0, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  front: { "background-color": "fg", color: "bg" },
  back: { "background-color": "panel", color: "fg" },
  "item-text": { color: "fg" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "careers-16",
  prefix: "careers16",
  name: "Careers / Offer",
  category: "careers",
  description: "What we send after a yes. Turn a card over for the start date, the lead, the trial, the desk, or what is on it.",

  props: {
    ...headerProps({
      eyebrow: "After a yes",
      heading: "What we send you",
      description: "No portal. A letter, a date, and a desk. Turn a card over.",
    }),
    items: {
      type: "list",
      fields: { label: "text", text: "text" },
      default: [
        { label: "Start", text: "The first Tuesday of the month, unless we agreed on another day." },
        { label: "Lead", text: "You report to Maya Chen, studio lead. She is the person on the letter." },
        { label: "Trial", text: "Six weeks. At the end we both say if the work fits, in the same room." },
        { label: "Desk", text: "A chair by the window at 18 Main Street, or the harbor desk if that room is full." },
        { label: "On it", text: "A laptop, the type we use, and a key to the Rockport door." },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" }, lg: { "row-gap": "3.5rem" } },
        children: [
          header({ t, layout: "stack" }),
          {
            tag: "div", key: "cards", repeat: "items",
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "grid-column-gap": "1rem", "grid-row-gap": "1rem", width: "100%", perspective: "1200px" },
              md: { "grid-template-columns": "1fr 1fr" },
              lg: { "grid-template-columns": "1fr 1fr 1fr" },
            },
            children: [{
              tag: "div", key: "card", attrs: { "data-blok-flip": "" },
              style: { base: { position: "relative", height: "14rem", cursor: "pointer", "transform-style": "preserve-3d", ...radius("token(radius-card)") } },
              children: [
                {
                  tag: "div", key: "front", attrs: { "data-blok-flip-front": "" },
                  style: {
                    base: {
                      ...inset0, overflow: "hidden", "backface-visibility": "hidden",
                      display: "flex", "align-items": "flex-end",
                      "padding-top": "1.5rem", "padding-right": "1.5rem", "padding-bottom": "1.5rem", "padding-left": "1.5rem",
                      ...radius("token(radius-card)"), ...t("front"),
                    },
                  },
                  children: [{
                    tag: "h3", key: "item-label", bind: "item.label",
                    style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "2.5rem", "line-height": "1", "font-weight": "600", "letter-spacing": "-0.035em" } },
                  }],
                },
                {
                  tag: "div", key: "back", attrs: { "data-blok-flip-back": "" },
                  style: {
                    base: {
                      ...inset0, overflow: "hidden", transform: "rotateY(180deg)", "backface-visibility": "hidden",
                      display: "flex", "flex-direction": "column", "justify-content": "flex-end",
                      "padding-top": "1.5rem", "padding-right": "1.5rem", "padding-bottom": "1.5rem", "padding-left": "1.5rem",
                      ...radius("token(radius-card)"), ...t("back"),
                    },
                  },
                  children: [
                    { tag: "p", key: "item-text", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1.125rem", "line-height": "1.5", ...t("item-text") } } },
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
