// Cursor trail board: sticky copy and figures on the left; photographs follow the pointer on the right.
import { mono, pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  stage: { "background-color": "panel" },
  figure: { "background-color": "card", color: "fg" },
  "figure-label": { color: "muted" },
  hint: { color: "muted" },
  note: { "background-color": "panel", color: "fg" },
  "note-text": { color: "muted" },
};
const t = (key) => themeBase("dark", THEME[key]);
const shot = (id, alt) => ({ image: { src: `https://images.unsplash.com/photo-${id}?w=800&q=80`, alt } });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "bento-29",
  prefix: "bento29",
  name: "Bento / Cursor trail",
  category: "bento",
  collection: "marketing",
  description: "A split board. Copy and figures hold on the left. On the right, moving the pointer leaves a trail of project photographs. Touch and reduced motion keep the stage quiet.",

  props: {
    ...headerProps({
      eyebrow: "Selected frames",
      heading: "Draw across the stage",
      description: "The left side stays put. The right side remembers where you have been.",
    }),
    showHint: { type: "boolean", default: true },
    hint: { type: "text", default: "Move across the stage" },
    figureValue: { type: "text", default: "48" },
    figureLabel: { type: "text", default: "Shipped this year" },
    noteTitle: { type: "text", default: "Still on the desk" },
    noteText: { type: "text", default: "Halyard, second pass. Tidewater catalog. One more visit page." },
    trail: {
      type: "list",
      fields: { image: "image" },
      default: [
        shot("1501594907352-04cda38ebc29", "Harbor pier"),
        shot("1519710164239-da123dc03ef4", "Sunlit room"),
        shot("1497366216548-37526070297c", "Studio desks"),
        shot("1517248135467-4c7edcad34c4", "Bakery interior"),
        shot("1486406146926-c627a92ad1ab", "Glass tower"),
        shot("1500530855697-b586d89ba3ee", "Green hills"),
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "dark", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description", "figure", "note", "stage"] },
  },

  tree: {
    role: "section",
    style: { base: { overflow: "hidden", ...t("section") } },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" } },
        children: [
          header({ t, layout: "split" }),
          {
            tag: "div", key: "board",
            style: {
              base: { display: "grid", "grid-template-columns": "minmax(0, 1fr)", "column-gap": "0.85rem", "row-gap": "0.85rem", "align-items": "stretch" },
              lg: { "grid-template-columns": "minmax(0, 0.9fr) minmax(0, 1.25fr)", "column-gap": "1rem", "row-gap": "0rem" },
            },
            children: [
              {
                tag: "div", key: "rail",
                style: {
                  base: { display: "flex", "flex-direction": "column", "row-gap": "0.85rem", position: "relative", top: "auto", "align-self": "stretch" },
                  lg: { position: "sticky", top: "5rem", "align-self": "start" },
                },
                children: [
                  {
                    tag: "div", key: "figure",
                    style: {
                      base: {
                        display: "flex", "flex-direction": "column", "justify-content": "flex-end", "row-gap": "0.4rem",
                        "min-height": "12rem", color: "token(surface)", ...radius("token(radius-card)"), ...pad("1.35rem"), ...t("figure"),
                      },
                      lg: { "min-height": "14rem" },
                    },
                    children: [
                      {
                        tag: "div", key: "figure-value", bind: "figureValue",
                        style: { base: { "font-family": "token(font-display)", "font-size": "4rem", "line-height": "0.9", "font-weight": "600", "letter-spacing": "-0.04em" }, lg: { "font-size": "5.5rem" } },
                      },
                      { tag: "div", key: "figure-label", bind: "figureLabel", style: { base: { "font-size": "1rem", "line-height": "1.35", ...t("figure-label") } } },
                    ],
                  },
                  {
                    tag: "div", key: "note",
                    style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.5rem", "min-height": "10rem", ...radius("token(radius-card)"), ...pad("1.25rem"), ...t("note") } },
                    children: [
                      {
                        tag: "h3", key: "note-title", bind: "noteTitle",
                        style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.15", "font-weight": "600", "letter-spacing": "-0.02em" } },
                      },
                      { tag: "p", key: "note-text", bind: "noteText", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.5", ...t("note-text") } } },
                    ],
                  },
                ],
              },
              {
                tag: "div", key: "stage", attrs: { "data-blok-trail": "", "data-blok-trail-gap": "72" },
                style: {
                  base: {
                    position: "relative", overflow: "hidden", "min-height": "22rem",
                    display: "flex", "align-items": "flex-end", "justify-content": "flex-start",
                    ...radius("token(radius-card)"), ...pad("1.25rem"), ...t("stage"),
                  },
                  lg: { "min-height": "32rem", ...pad("1.5rem") },
                },
                children: [
                  {
                    tag: "div", key: "hint", bind: "hint", if: "showHint",
                    style: {
                      base: {
                        position: "relative", "z-index": "2", display: "none", ...mono(), ...t("hint"),
                        "pointer-events": "none",
                      },
                      md: { display: "block" },
                    },
                  },
                  {
                    tag: "div", key: "trail", repeat: "trail", decorative: true,
                    style: { base: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", "pointer-events": "none", "z-index": "1" } },
                    children: [{
                      tag: "div", key: "trail-item", attrs: { "data-blok-trail-item": "" },
                      style: {
                        base: {
                          position: "absolute", top: "0", left: "0", width: "9rem", height: "11rem",
                          overflow: "hidden", opacity: "0", visibility: "hidden", ...radius("0.5rem"),
                        },
                        lg: { width: "12rem", height: "15rem" },
                      },
                      children: [{
                        tag: "img", key: "trail-image", bind: "item.image",
                        style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } },
                      }],
                    }],
                  },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
