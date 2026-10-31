// Open stage: a project title splits on scroll while the case study photograph fills the gap.
import { themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  "half-left": { "background-color": "bg" },
  "half-right": { "background-color": "bg" },
  "word-left": { color: "fg" },
  "word-right": { color: "fg" },
  "project-year": { color: "muted" },
  "project-summary": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);

const word = {
  "margin-top": "0", "margin-bottom": "0", width: "auto",
  "font-family": "token(font-display)", "font-weight": "600", "line-height": "0.85", "letter-spacing": "-0.05em",
};

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "work-13",
  prefix: "work13",
  name: "Work / Open stage",
  category: "work",
  collection: "marketing",
  description: "A case-study stage. Scrolling pulls the project title apart and the photograph fills the gap. On a phone the title sits above the photo.",

  props: {
    ...headerProps({
      eyebrow: "Selected work",
      heading: "Open the study",
      description: "Scroll. The name splits. The project photograph takes the room.",
    }),
    projectTitle: { type: "text", default: "Halyard" },
    projectYear: { type: "text", default: "2025" },
    projectSummary: { type: "text", default: "A product site with motion that stays quiet until you ask for it." },
    image: {
      type: "image",
      priority: true,
      default: { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000&q=80", alt: "A bright studio with long desks and north light" },
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
    attrs: { "data-blok-open": "" },
    style: {
      base: { position: "relative", overflow: "hidden", "min-height": "0px", ...t("section") },
      lg: { "min-height": "100svh" },
    },
    children: [
      {
        role: "gutter",
        children: [{
          role: "container", size: "large",
          children: [{
            role: "section-padding", size: "large",
            children: [
              {
                tag: "div", key: "intro",
                style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1.5rem", "margin-bottom": "2rem", "padding-bottom": "0rem" }, lg: { "margin-bottom": "0", "padding-bottom": "2rem" } },
                children: [
                  header({ t, layout: "split" }),
                  {
                    tag: "div", key: "study-meta",
                    style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.35rem", "max-width": "28rem" } },
                    children: [
                      { tag: "div", key: "project-year", bind: "projectYear", style: { base: { "font-size": "0.9375rem", "line-height": "1.4", ...t("project-year") } } },
                      { tag: "p", key: "project-summary", bind: "projectSummary", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1.0625rem", "line-height": "1.55", ...t("project-summary") } } },
                    ],
                  },
                ],
              },
            ],
          }],
        }],
      },
      {
        tag: "div", key: "stage", attrs: { "data-blok-open-stage": "" },
        style: {
          base: { position: "relative", display: "flex", "flex-direction": "column", overflow: "hidden", width: "100%", "min-height": "0px" },
          lg: { display: "block", "min-height": "100svh" },
        },
        children: [
          half("left", false),
          half("right", true),
          {
            tag: "div", key: "media",
            style: {
              base: {
                position: "relative", top: "auto", right: "auto", bottom: "auto", left: "auto",
                "z-index": "1", width: "100%", height: "auto", overflow: "hidden", "aspect-ratio": "4 / 5",
              },
              lg: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", height: "100%", "aspect-ratio": "auto" },
            },
            children: [{
              tag: "img", key: "photo", bind: "image",
              style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } },
            }],
          },
        ],
      },
    ],
  },
};

function half(side, hidden) {
  const key = side === "left" ? "half-left" : "half-right";
  const wordKey = side === "left" ? "word-left" : "word-right";
  return {
    tag: "div", key, attrs: { "data-blok-open-half": "" },
    style: {
      base: {
        position: "relative", top: "auto", right: "auto", bottom: "auto", left: "auto",
        "z-index": "2", display: hidden ? "none" : "block", overflow: "visible", width: "100%", height: "auto",
        "padding-top": hidden ? "0rem" : "2rem", "padding-right": hidden ? "0rem" : "1.25rem",
        "padding-bottom": hidden ? "0rem" : "1.25rem", "padding-left": hidden ? "0rem" : "1.25rem",
        ...t(key),
      },
      lg: {
        position: "absolute", top: "0", right: side === "right" ? "0" : "auto", bottom: "0", left: side === "left" ? "0" : "auto",
        display: "block", overflow: "hidden", width: "50%",
        "padding-top": "0rem", "padding-right": "0rem", "padding-bottom": "0rem", "padding-left": "0rem",
      },
    },
    children: [{
      tag: side === "left" ? "h2" : "div",
      key: wordKey,
      bind: "projectTitle",
      decorative: hidden,
      attrs: { "data-blok-open-word": "" },
      style: {
        base: {
          ...word, ...t(wordKey),
          position: "relative", top: "auto", right: "auto", left: "auto",
          "font-size": "3.25rem", "white-space": "normal", transform: "none",
        },
        lg: {
          position: "absolute", top: "50%", left: side === "left" ? "0" : "auto", right: side === "right" ? "0" : "auto",
          "font-size": "14vw", "white-space": "nowrap", transform: "translateY(-50%)",
        },
      },
    }],
  };
}
