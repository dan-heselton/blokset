// Cover stack: perspective curve of project covers with previous and next.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  stage: { "background-color": "panel" },
  counter: { color: "muted" },
  prev: { color: "fg", "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line" },
  next: { color: "fg", "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });
const pill = {
  "border-top-left-radius": "999px", "border-top-right-radius": "999px",
  "border-bottom-right-radius": "999px", "border-bottom-left-radius": "999px",
};
const control = (key) => ({
  base: {
    ...mono(), cursor: "pointer",
    "padding-top": "0.75rem", "padding-right": "0.75rem", "padding-bottom": "0.75rem", "padding-left": "0.75rem",
    "border-top-width": "1px", "border-right-width": "1px", "border-bottom-width": "1px", "border-left-width": "1px",
    "border-top-style": "solid", "border-right-style": "solid", "border-bottom-style": "solid", "border-left-style": "solid",
    ...pill, ...t(key),
  },
});

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "work-11",
  prefix: "work11",
  name: "Work / Cover stack",
  category: "work",
  collection: "marketing",
  description: "A perspective stack of project covers. The active cover stays on top; neighbors fall back. Previous and next rotate the stack.",

  props: {
    ...headerProps({
      eyebrow: "Selected work",
      heading: "Covers in a stack",
      description: "Flip through the work like a short deck. Each cover is a project.",
    }),
    showCounter: { type: "boolean", default: true },
    counter: { type: "text", default: "01 / 05" },
    projects: {
      type: "list",
      fields: { title: "text", year: "text", image: "image" },
      default: [
        { title: "North Shore Arts", year: "2026", image: shot("1519710164239-da123dc03ef4", "Sunlit room") },
        { title: "Tidewater Supply", year: "2026", image: shot("1501594907352-04cda38ebc29", "Harbor pier") },
        { title: "Halyard", year: "2025", image: shot("1497366216548-37526070297c", "Studio desks") },
        { title: "Saltbox Bakery", year: "2025", image: shot("1517248135467-4c7edcad34c4", "Bakery") },
        { title: "Ledgewood", year: "2024", image: shot("1486406146926-c627a92ad1ab", "Glass tower") },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description", "stage", "controls"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component", attrs: { "data-blok-curve": "" },
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2rem" } },
        children: [
          header({ t, layout: "split" }),
          {
            tag: "div", key: "stage",
            style: {
              base: {
                position: "relative", overflow: "hidden", perspective: "1200px",
                "padding-top": "1.5rem", "padding-right": "1rem", "padding-bottom": "1.5rem", "padding-left": "1rem",
                ...radius("1.5rem"), ...t("stage"),
              },
              lg: { "padding-top": "2rem", "padding-right": "1.5rem", "padding-bottom": "2rem", "padding-left": "1.5rem" },
            },
            children: [{
              tag: "div", key: "slides", repeat: "projects",
              style: {
                base: { position: "relative", width: "100%", "aspect-ratio": "4 / 3", "min-height": "14rem" },
                lg: { "aspect-ratio": "16 / 10", "min-height": "0px" },
              },
              children: [{
                tag: "div", key: "slide", attrs: { "data-blok-slide": "" },
                style: {
                  base: {
                    position: "absolute", top: "0", right: "8%", bottom: "0", left: "8%",
                    display: "flex", "flex-direction": "column", "justify-content": "flex-end", overflow: "hidden",
                    "background-color": "token(ink-2)", "transform-style": "preserve-3d", ...radius("1rem"),
                  },
                  lg: { right: "10%", left: "10%" },
                },
                children: [
                  {
                    tag: "img", key: "slide-image", bind: "item.image",
                    style: {
                      base: {
                        position: "absolute", top: "0", right: "0", bottom: "0", left: "0",
                        width: "100%", height: "100%", "object-fit": "cover", "object-position": "center", "z-index": "0",
                      },
                    },
                  },
                  {
                    tag: "div", key: "slide-scrim", decorative: true,
                    style: {
                      base: {
                        position: "absolute", top: "0", right: "0", bottom: "0", left: "0", "z-index": "1",
                        "background-image": "linear-gradient(to top, token(shade-strong) 0%, token(shade-mid) 42%, token(shade-clear) 72%)",
                      },
                    },
                  },
                  {
                    tag: "div", key: "slide-meta",
                    style: {
                      base: {
                        position: "relative", "z-index": "2",
                        display: "flex", "flex-direction": "column", "row-gap": "0.35rem",
                        "padding-top": "1rem", "padding-right": "1.1rem", "padding-bottom": "1.1rem", "padding-left": "1.1rem",
                      },
                      lg: { "padding-right": "1.35rem", "padding-bottom": "1.35rem", "padding-left": "1.35rem" },
                    },
                    children: [
                      { tag: "div", key: "slide-year", bind: "item.year", style: { base: { color: "token(surface)", "font-size": "0.875rem", "line-height": "1.4", opacity: "0.85" } } },
                      {
                        tag: "h3", key: "slide-title", bind: "item.title",
                        style: {
                          base: {
                            "margin-top": "0", "margin-bottom": "0", "max-width": "22rem",
                            "font-family": "token(font-display)", "font-size": "1.35rem", "line-height": "1.15", "font-weight": "600",
                            "letter-spacing": "-0.02em", color: "token(surface)",
                          },
                          lg: { "max-width": "28rem", "font-size": "1.75rem" },
                        },
                      },
                    ],
                  },
                ],
              }],
            }],
          },
          {
            tag: "div", key: "controls",
            style: { base: { display: "flex", "align-items": "center", "justify-content": "space-between", "column-gap": "1rem" } },
            children: [
              { tag: "div", key: "counter", bind: "counter", if: "showCounter", style: { base: { ...mono(), ...t("counter") } } },
              {
                tag: "div", key: "nav",
                style: { base: { display: "flex", "column-gap": "0.5rem", "margin-left": "auto" } },
                children: [
                  { tag: "div", key: "prev", text: "Previous", attrs: { "data-blok-curve-prev": "" }, style: control("prev") },
                  { tag: "div", key: "next", text: "Next", attrs: { "data-blok-curve-next": "" }, style: control("next") },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
