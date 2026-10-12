// A numbered list you can click, beside one photograph that changes with the step.
import { radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  "step-index": { color: "muted" },
  "step-text": { color: "muted" },
  step: { "border-top-color": "line" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "features-49",
  prefix: "features49",
  name: "Features / Steps",
  category: "features",
  description: "A numbered list you can click, beside one photograph that changes with the step. On a wide screen, scrolling the pinned section advances the step. On a phone, clicking is the control.",

  props: {
    ...headerProps({
      eyebrow: "Sequence",
      heading: "How a piece gets made",
      description: "Click a step, or scroll on a wide screen. The photograph follows.",
    }),
    steps: {
      type: "list",
      fields: { title: "text", text: "text", image: "image" },
      default: [
        { title: "Draw", text: "One drawing, at full size, pinned to the wall until the proportions stop moving.", image: shot("1497366216548-37526070297c", "Drawings on a studio desk") },
        { title: "Cut", text: "The first cut is the one you cannot take back. We make it in the morning.", image: shot("1519710164239-da123dc03ef4", "A wooden chair mid-build") },
        { title: "Fit", text: "Joints are dry-fit, then taken apart, then fit again. Glue is the last step.", image: shot("1517248135467-4c7edcad34c4", "A table set after the work is done") },
        { title: "Leave", text: "It sits in the shop for a week. If we still like it, it can leave.", image: shot("1500530855697-b586d89ba3ee", "Open country beyond the shop") },
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
    attrs: { "data-blok-steps": "" },
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" } },
        children: [
          header({ t, layout: "stack" }),
          {
            tag: "div", key: "layout",
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "align-items": "start", "grid-column-gap": "0rem", "grid-row-gap": "1.5rem" },
              lg: { "grid-template-columns": "0.9fr 1.1fr", "grid-column-gap": "4rem", "grid-row-gap": "0rem" },
            },
            children: [
              {
                tag: "div", key: "frame", repeat: "steps",
                style: {
                  base: {
                    position: "relative", overflow: "hidden", width: "100%", "aspect-ratio": "4 / 3",
                    "grid-column-start": "1", "grid-column-end": "2", "grid-row-start": "1", "grid-row-end": "2",
                    ...radius("token(radius-card)"),
                  },
                  lg: { "grid-column-start": "2", "grid-column-end": "3" },
                },
                children: [{
                  tag: "img", key: "still", bind: "item.image", attrs: { "data-blok-steps-still": "" },
                  style: { base: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", width: "100%", height: "100%", "object-fit": "cover" } },
                }],
              },
              {
                tag: "div", key: "steps", repeat: "steps",
                style: {
                  base: { display: "flex", "flex-direction": "column", "grid-column-start": "1", "grid-column-end": "2", "grid-row-start": "2", "grid-row-end": "3" },
                  lg: { "grid-row-start": "1", "grid-row-end": "2" },
                },
                children: [{
                  tag: "div", key: "step", attrs: { "data-blok-steps-trigger": "" },
                  style: {
                    base: { display: "flex", "flex-direction": "column", "row-gap": "0.35rem", "padding-top": "1.1rem", "padding-bottom": "1.1rem", "border-top-width": "1px", "border-top-style": "solid", cursor: "pointer", ...t("step") },
                  },
                  children: [
                    { tag: "div", key: "step-index", bind: "@index", style: { base: { "font-family": "token(font-mono)", "font-size": "0.75rem", "letter-spacing": "0.08em", ...t("step-index") } } },
                    { tag: "h3", key: "step-title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1.1", "font-weight": "600", "letter-spacing": "-0.03em" }, lg: { "font-size": "2.25rem" } } },
                    { tag: "p", key: "step-text", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "36rem", "font-size": "1rem", "line-height": "1.5", ...t("step-text") } } },
                  ],
                }],
              },
            ],
          },
        ],
      }),
    ],
  },
};
