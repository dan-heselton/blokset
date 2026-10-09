// Stacking process cards: each step is a sticky card. As you scroll, the next card slides up over the
// previous one, which shrinks behind it and stays opaque. Pure CSS sticky does the layout; the runtime adds depth.
import { themeVariant, themeBase, radius, pad, mono } from "./_lib/themes.js";
import { header, headerProps, HEADER_THEME, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  card: { "background-color": "panel", "border-top-color": "line", "border-bottom-color": "line", "border-left-color": "line", "border-right-color": "line" },
  number: { color: "glyph" },
  "card-text": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const step = (title, text, id, alt) => ({ title, text, image: { src: `https://images.unsplash.com/${id}?w=1200&q=80`, alt } });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "process-03",
  prefix: "process3",
  name: "Process / Stacking Cards",
  category: "process",
  description: "Sticky step cards that stack on scroll; earlier cards shrink behind the next and stay opaque. Two themes, image side switch.",

  props: {
    ...headerProps({
      eyebrow: "Process",
      heading: "From first call to launch day",
      description: "Four steps, no surprises. Every stage ends with something you can see, click and comment on.",
    }),
    showNumbers: { type: "boolean", default: true },
    showImages: { type: "boolean", default: true },
    steps: {
      type: "list",
      fields: { title: "text", text: "text", image: "image" },
      default: [
        step("Discover", "A working session to map goals, audiences and the pages that matter. You leave with a written brief.", "photo-1497366216548-37526070297c", "Team around a table"),
        step("Design", "Two directions in the browser, not static mockups. We pick one and refine it together.", "photo-1519710164239-da123dc03ef4", "Design studio"),
        step("Build", "Client-First Webflow or Astro, CMS modeled around how your team actually publishes.", "photo-1486406146926-c627a92ad1ab", "Building facade"),
        step("Launch & care", "Redirects, analytics, training and a 30-day tune-up. Then we stay on call.", "photo-1501594907352-04cda38ebc29", "Coastline at dusk"),
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark"], map: THEME }),
    imageSide: {
      label: "Image side",
      default: "media-right",
      options: {
        "media-right": null,
        "media-left": { styles: { card: { base: { "flex-direction": "column" }, lg: { "flex-direction": "row-reverse" } } } },
      },
    },
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.1, targets: ["eyebrow", "heading", "description"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "3rem" }, lg: { "row-gap": "4.5rem" } },
        children: [
          header({ t }),
          {
            tag: "div", key: "list", repeat: "steps", attrs: { "data-blok-stack": "" },
            style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1.5rem" }, lg: { "row-gap": "2.5rem" } },
            children: [
              {
                tag: "div", key: "card", attrs: { "data-blok-stack-card": "" },
                style: {
                  base: {
                    position: "sticky", top: "5rem", display: "flex", "flex-direction": "column", "row-gap": "1.5rem", "column-gap": "0rem",
                    "min-height": "22rem", ...pad("1.5rem"), ...radius("token(radius-card)"),
                    "border-top-width": "1px", "border-bottom-width": "1px", "border-left-width": "1px", "border-right-width": "1px",
                    "border-top-style": "solid", "border-bottom-style": "solid", "border-left-style": "solid", "border-right-style": "solid",
                    ...t("card"),
                  },
                  lg: { top: "7rem", "flex-direction": "row", "row-gap": "0rem", "column-gap": "3rem", "min-height": "28rem", ...pad("2.5rem") },
                },
                children: [
                  {
                    tag: "div", key: "card-body",
                    style: { base: { display: "flex", "flex-direction": "column", "justify-content": "space-between", "row-gap": "2rem", "flex-grow": "1", "flex-basis": "0%" } },
                    children: [
                      {
                        tag: "div", key: "number", bind: "@index", if: "showNumbers", decorative: true,
                        style: { base: { "font-family": "token(font-display)", "font-size": "4rem", "line-height": "0.9", "font-weight": "500", "letter-spacing": "-0.05em", ...t("number") }, lg: { "font-size": "6rem" } },
                      },
                      {
                        tag: "div", key: "card-copy",
                        children: [
                          { tag: "h3", key: "card-title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0.75rem", "font-family": "token(font-display)", "font-size": "2rem", "line-height": "1.05", "font-weight": "600", "letter-spacing": "-0.03em" }, lg: { "font-size": "3rem" } } },
                          { tag: "p", key: "card-text", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "28rem", "font-size": "1.0625rem", "line-height": "1.6", ...t("card-text") } } },
                        ],
                      },
                    ],
                  },
                  {
                    tag: "div", key: "card-media", if: "showImages",
                    style: { base: { width: "100%", overflow: "hidden", "aspect-ratio": "4 / 3", ...radius("0.625rem") }, lg: { width: "46%", "aspect-ratio": "auto" } },
                    children: [{ tag: "img", key: "card-image", bind: "item.image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } }],
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
