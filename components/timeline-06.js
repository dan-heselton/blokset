// Milestones on a horizontal line. Previous and next move one step. Add a list item to add a step.
import { border, mono, pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  "step-line": { "background-color": "line" },
  "step-dot": { "background-color": "glyph" },
  date: { color: "glyph" },
  text: { color: "muted" },
  count: { color: "muted" },
  prev: { color: "fg", "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line" },
  next: { color: "fg", "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line" },
};
const t = (key) => themeBase("light", THEME[key]);
const control = (key) => ({
  base: { ...mono(), cursor: "pointer", ...pad("0.75rem"), ...border(t(key)["border-top-color"]), ...radius("999px"), ...t(key) },
});

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "timeline-06",
  prefix: "timeline6",
  name: "Timeline / Stepper",
  category: "timeline",
  description: "Milestones sit on a line and move one step at a time. Add a list item and the line gains a step.",

  props: {
    ...headerProps({
      eyebrow: "Step through it",
      heading: "One year at a time",
      description: "Use the arrows, or swipe. Each step is a list item, so the line can grow.",
    }),
    steps: {
      type: "list",
      fields: { date: "text", title: "text", text: "text" },
      default: [
        { date: "2014", title: "Begin", text: "A spare room, a bakery client, and a habit of showing the work every Friday." },
        { date: "2017", title: "Independent", text: "The agency job ended. The Friday preview stayed." },
        { date: "2020", title: "Distributed", text: "The studio was a call and a shared file. The sites still shipped on the day we named." },
        { date: "2023", title: "A room again", text: "Harbor light, a second chair, and enough wall to pin a whole homepage." },
        { date: "2026", title: "Shared", text: "The parts we kept remaking are written down, ready for the next project." },
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
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" } },
        children: [
          header({ t }),
          {
            tag: "div", key: "slider", attrs: { "data-blok-slider": "" },
            style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1.5rem" } },
            children: [
              {
                tag: "div", key: "controls",
                style: { base: { display: "flex", "align-items": "center", "column-gap": "0.75rem" } },
                children: [
                  { tag: "div", key: "count", text: "01 / 05", attrs: { "data-blok-slider-count": "" }, style: { base: { ...mono(), "margin-right": "auto", ...t("count") } } },
                  { tag: "div", key: "prev", text: "Previous", attrs: { "data-blok-slider-prev": "" }, style: control("prev") },
                  { tag: "div", key: "next", text: "Next", attrs: { "data-blok-slider-next": "" }, style: control("next") },
                ],
              },
              {
                tag: "div", key: "viewport",
                style: { base: { overflow: "hidden", width: "100%" } },
                children: [{
                  tag: "div", key: "track", repeat: "steps", attrs: { "data-blok-slider-track": "" },
                  style: { base: { display: "flex", width: "100%", "column-gap": "0rem", "touch-action": "pan-y" } },
                  children: [{
                    tag: "div", key: "step", attrs: { "data-blok-slider-card": "" },
                    style: {
                      base: { position: "relative", "flex-shrink": "0", width: "100%", "padding-top": "2rem", "padding-right": "1.5rem" },
                      lg: { width: "calc((100% - 1.5rem) / 3)", "padding-right": "2.5rem" },
                    },
                    children: [
                      { tag: "div", key: "step-line", decorative: true, style: { base: { position: "absolute", top: "0.35rem", left: "0.85rem", right: "0", height: "2px", ...t("step-line") } } },
                      { tag: "div", key: "step-dot", decorative: true, style: { base: { position: "absolute", top: "0", left: "0", width: "0.8rem", height: "0.8rem", ...radius("50%"), ...t("step-dot") } } },
                      { tag: "div", key: "date", bind: "item.date", style: { base: { "margin-bottom": "0.45rem", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1", "font-weight": "600", "letter-spacing": "-0.03em", ...t("date") } } },
                      { tag: "h3", key: "step-title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0.4rem", "font-family": "token(font-display)", "font-size": "1.35rem", "line-height": "1.2", "font-weight": "600", "letter-spacing": "-0.02em" } } },
                      { tag: "p", key: "text", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.55", ...t("text") } } },
                    ],
                  }],
                }],
              },
            ],
          },
        ],
      }),
    ],
  },
};
