// Three cards that get taller as they go, and rise in together.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  chip: { color: "muted" },
  heading: { color: "fg" },
  low: { "background-color": "panel", color: "fg" },
  mid: { "background-color": "panel", color: "fg" },
  high: { "background-color": "panel", color: "fg" },
};
const t = (key) => themeBase("light", THEME[key]);

function card(id, figureProp, labelProp, noteProp, height) {
  return {
    tag: "div", key: id,
    style: {
      base: {
        display: "flex", "flex-direction": "column", "justify-content": "space-between", "row-gap": "1.5rem",
        width: "100%", "min-height": "12rem", "flex-grow": "0", "flex-basis": "auto",
        "padding-top": "1.25rem", "padding-right": "1.25rem", "padding-bottom": "1.25rem", "padding-left": "1.25rem",
        ...radius("token(radius-card)"), ...t(id),
      },
      lg: { "min-height": height, width: "auto", "flex-grow": "1", "flex-basis": "0px" },
    },
    children: [
      {
        tag: "div", key: `${id}-top`,
        style: { base: { display: "flex", "align-items": "flex-start", "justify-content": "space-between", "column-gap": "1rem" } },
        children: [
          { tag: "div", key: `${id}-figure`, bind: figureProp, attrs: { "data-blok-count": "" }, style: { base: { "font-family": "token(font-display)", "font-size": "2.75rem", "line-height": "1", "font-weight": "600", "letter-spacing": "-0.04em" } } },
          { tag: "div", key: `${id}-label`, bind: labelProp, style: { base: { "max-width": "7rem", "min-width": "0px", "font-size": "0.875rem", "line-height": "1.3", "text-align": "right", opacity: "0.72" } } },
        ],
      },
      { tag: "p", key: `${id}-note`, bind: noteProp, style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "0.9375rem", "line-height": "1.5", opacity: "0.8" } } },
    ],
  };
}

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "stats-10",
  prefix: "stats10",
  name: "Stats / Rising cards",
  category: "stats",
  description: "Three cards grow taller from left to right. The figures count up, and the cards rise in together.",

  props: {
    showChip: { type: "boolean", default: true },
    chip: { type: "text", default: "Stats" },
    heading: { type: "text", default: "We help you rebuild trust through better structure" },
    showAction: { type: "boolean", default: true },
    action: { type: "text", default: "Get Template" },
    actionHref: { type: "link", default: "#" },
    showLow: { type: "boolean", default: true },
    lowFigure: { type: "text", default: "34%" },
    lowLabel: { type: "text", default: "Structure impact" },
    lowNote: { type: "text", default: "Average clarity score boost across internal decks, websites and service documentation." },
    showMid: { type: "boolean", default: true },
    midFigure: { type: "text", default: "55%" },
    midLabel: { type: "text", default: "Messaging lift" },
    midNote: { type: "text", default: "Measured improvement in engagement after applying our narrative framework across digital touchpoints." },
    showHigh: { type: "boolean", default: true },
    highFigure: { type: "text", default: "89%" },
    highLabel: { type: "text", default: "Access rate" },
    highNote: { type: "text", default: "Our restructured onboarding flows helped clients reduce bounce and increase clarity across channels." },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.1, targets: ["heading", "low", "mid", "high"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" } },
        children: [
          {
            tag: "div", key: "copy",
            style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "1.25rem", "max-width": "36rem" } },
            children: [
              { tag: "div", key: "chip", bind: "chip", if: "showChip", style: { base: { ...mono(), ...t("chip") } } },
              {
                tag: "h2", key: "heading", bind: "heading",
                style: {
                  base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-serif)", "font-size": "2.75rem", "line-height": "1.02", "font-weight": "500", "letter-spacing": "-0.03em", ...t("heading") },
                  lg: { "font-size": "3.75rem" },
                },
              },
              {
                tag: "a", key: "action", bind: "action", href: "actionHref", if: "showAction",
                style: {
                  base: {
                    display: "inline-flex", "background-color": "token(ink)", color: "token(surface)", "text-decoration": "none", "font-weight": "600",
                    "padding-top": "0.75rem", "padding-right": "1.1rem", "padding-bottom": "0.75rem", "padding-left": "1.1rem",
                    "border-top-left-radius": "999px", "border-top-right-radius": "999px", "border-bottom-right-radius": "999px", "border-bottom-left-radius": "999px",
                  },
                },
              },
            ],
          },
          {
            tag: "div", key: "row",
            style: {
              base: { display: "flex", "flex-direction": "column", "align-items": "stretch", "row-gap": "0.75rem", "column-gap": "0rem" },
              lg: { "flex-direction": "row", "align-items": "flex-end", "column-gap": "0.75rem", "row-gap": "0rem" },
            },
            children: [
              { ...card("low", "lowFigure", "lowLabel", "lowNote", "16rem"), if: "showLow" },
              { ...card("mid", "midFigure", "midLabel", "midNote", "22rem"), if: "showMid" },
              { ...card("high", "highFigure", "highLabel", "highNote", "28rem"), if: "showHigh" },
            ],
          },
        ],
      }),
    ],
  },
};
