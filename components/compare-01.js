// Before / after slider: two images stacked in one frame with a draggable divider. Drag, click, or use
// the arrow keys. It sweeps open the first time it scrolls into view. Built for renovations,
// cleanups, landscaping, retouching, redesigns.
import { themeVariant, themeBase, radius, mono, inset0 } from "./_lib/themes.js";
import { header, headerProps, HEADER_THEME, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  "note-before": { color: "muted", "border-top-color": "line" },
  "note-after": { color: "muted", "border-top-color": "line" },
};
const t = (key) => themeBase("light", THEME[key]);
const chip = (key, bind, side) => ({
  tag: "div", key, bind, if: "showLabels",
  style: {
    base: {
      position: "absolute", top: "1rem", [side]: "1rem", "z-index": "2", ...mono("token(ink)"),
      "padding-top": "0.4rem", "padding-bottom": "0.4rem", "padding-left": "0.7rem", "padding-right": "0.7rem",
      "background-color": "rgba(244, 241, 234, 0.92)", ...radius("999px"), "pointer-events": "none",
    },
  },
});

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "compare-01",
  prefix: "compare1",
  name: "Compare / Before & After",
  category: "compare",
  description: "Draggable before/after image slider (mouse, touch, keyboard) that sweeps open on scroll. Captions and labels optional.",

  props: {
    ...headerProps({ eyebrow: "Results", heading: "See the difference", description: "Drag the handle to compare. Same spot, same light, one visit apart." }),
    beforeImage: { type: "image", default: { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1800&q=80&sat=-100", alt: "The yard before the cleanup" } },
    afterImage: { type: "image", default: { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1800&q=80", alt: "The yard after the cleanup" } },
    showLabels: { type: "boolean", default: true },
    beforeLabel: { type: "text", default: "Before" },
    afterLabel: { type: "text", default: "After" },
    showNotes: { type: "boolean", default: true, description: "Two short notes under the slider" },
    beforeNote: { type: "text", default: "Overgrown beds, compacted soil and a fence line nobody had seen in years." },
    afterNote: { type: "text", default: "Cleared, edged and mulched in a single day, with a planting plan for spring." },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark"], map: THEME }),
    frame: {
      label: "Frame",
      default: "rounded",
      options: {
        rounded: null,
        square: { styles: { slider: { base: { "border-top-left-radius": "0px", "border-top-right-radius": "0px", "border-bottom-left-radius": "0px", "border-bottom-right-radius": "0px" } } } },
        wide: { styles: { slider: { base: { "aspect-ratio": "4 / 3" }, md: { "aspect-ratio": "21 / 9" } } } },
      },
    },
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.1, targets: ["eyebrow", "heading", "description", "notes"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" }, lg: { "row-gap": "3.5rem" } },
        children: [
          header({ t }),
          {
            tag: "div", key: "slider", attrs: { "data-blok-compare": "", "data-blok-compare-label": "=heading" },
            style: {
              base: { position: "relative", overflow: "hidden", "aspect-ratio": "4 / 5", cursor: "ew-resize", "touch-action": "pan-y", "user-select": "none", ...radius("token(radius-card)") },
              md: { "aspect-ratio": "16 / 10" },
            },
            children: [
              { tag: "img", key: "before-image", bind: "beforeImage", style: { base: { ...inset0, display: "block", width: "100%", height: "100%", "object-fit": "cover", "pointer-events": "none" } } },
              {
                tag: "div", key: "after", attrs: { "data-blok-compare-after": "" },
                style: { base: { ...inset0, "clip-path": "inset(0 0 0 50%)" } },
                children: [{ tag: "img", key: "after-image", bind: "afterImage", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover", "pointer-events": "none" } } }],
              },
              chip("before-label", "beforeLabel", "left"),
              chip("after-label", "afterLabel", "right"),
              {
                tag: "div", key: "handle", attrs: { "data-blok-compare-handle": "" },
                style: { base: { position: "absolute", top: "0", bottom: "0", left: "50%", "z-index": "3", width: "3rem", "margin-left": "-1.5rem", display: "flex", "align-items": "center", "justify-content": "center", cursor: "ew-resize" } },
                children: [
                  { tag: "div", key: "handle-line", decorative: true, style: { base: { position: "absolute", top: "0", bottom: "0", left: "50%", width: "2px", "margin-left": "-1px", "background-color": "token(text-inverse)" } } },
                  {
                    tag: "div", key: "handle-knob", text: "↔", decorative: true,
                    style: { base: { position: "relative", display: "flex", "align-items": "center", "justify-content": "center", width: "3rem", height: "3rem", "font-size": "1.125rem", color: "token(ink)", "background-color": "token(text-inverse)", "box-shadow": "0 6px 24px rgba(0, 0, 0, 0.25)", ...radius("50%") } },
                  },
                ],
              },
            ],
          },
          {
            tag: "div", key: "notes", if: "showNotes",
            style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1rem", "column-gap": "0rem" }, md: { "flex-direction": "row", "row-gap": "0rem", "column-gap": "2rem" } },
            children: ["before", "after"].map((side) => ({
              tag: "p", key: `note-${side}`, bind: `${side}Note`,
              style: { base: { "flex-grow": "1", "flex-basis": "0%", "margin-top": "0", "margin-bottom": "0", "padding-top": "1rem", "border-top-width": "1px", "border-top-style": "solid", "font-size": "0.9375rem", "line-height": "1.6", ...t(`note-${side}`) } },
            })),
          },
        ],
      }),
    ],
  },
};
