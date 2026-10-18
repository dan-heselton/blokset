// Immersive landscape hero: wordmark and CTA overlay the photo. No center nav links.
import { radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  stage: { "background-color": "panel" },
  wordmark: { color: "fg" },
  heading: { color: "fg" },
  scrim: { "background-color": "bg" },
};
const t = (key) => themeBase("dark", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=2000&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-64",
  prefix: "hero64",
  name: "Hero / Photo stage",
  category: "hero",
  description: "A full-bleed landscape landing hero: brand and one CTA sit on the photo itself — no separate nav row — with a large headline over a bottom scrim.",

  props: {
    showWordmark: { type: "boolean", default: true },
    wordmark: { type: "text", default: "Lumior" },
    showCta: { type: "boolean", default: true },
    buttons: {
      type: "buttons",
      max: 1,
      default: [{ title: "Get a quote", href: "#", variant: "secondary" }],
    },
    heading: { type: "text", default: "See your energy as clearly as the weather." },
    image: { type: "image", priority: true, default: photo("1469474968028-56623f02e42e", "Coastal hills under a wide open sky") },
  },

  variants: {
    theme: themeVariant({
      default: "dark",
      options: ["dark", "light"],
      map: {
        section: THEME.section,
        stage: THEME.stage,
        wordmark: THEME.wordmark,
        heading: THEME.heading,
        scrim: THEME.scrim,
      },
    }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.1, targets: ["chrome", "heading"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0rem" } },
        children: [
          {
            tag: "div", key: "stage",
            style: {
              base: {
                position: "relative", overflow: "hidden", "min-height": "28rem",
                ...radius("1.75rem"), ...t("stage"),
              },
              lg: {
                "min-height": "40rem",
                "border-top-left-radius": "2.75rem", "border-top-right-radius": "2.75rem",
                "border-bottom-right-radius": "2.75rem", "border-bottom-left-radius": "2.75rem",
              },
            },
            children: [
              {
                tag: "img", key: "image", bind: "image",
                style: {
                  base: { display: "block", width: "100%", height: "100%", "min-height": "28rem", "object-fit": "cover" },
                  lg: { "min-height": "40rem" },
                },
              },
              {
                tag: "div", key: "scrim", decorative: true,
                style: {
                  base: {
                    position: "absolute", top: "40%", right: "0", bottom: "0", left: "0", "z-index": "1",
                    opacity: "0.72", ...t("scrim"),
                  },
                },
              },
              {
                tag: "div", key: "chrome",
                style: {
                  base: {
                    position: "absolute", top: "0", right: "0", left: "0", "z-index": "2",
                    display: "flex", "flex-wrap": "wrap", "align-items": "center", "justify-content": "space-between",
                    "column-gap": "1rem", "row-gap": "0.75rem",
                    "padding-top": "1.5rem", "padding-right": "1.5rem", "padding-bottom": "1.5rem", "padding-left": "1.5rem",
                  },
                  lg: { "padding-top": "2.25rem", "padding-right": "2.5rem", "padding-bottom": "2.25rem", "padding-left": "2.5rem" },
                },
                children: [
                  {
                    tag: "div", key: "wordmark", bind: "wordmark", if: "showWordmark",
                    style: {
                      base: {
                        "font-family": "token(font-display)", "font-size": "1.25rem", "font-weight": "700",
                        "letter-spacing": "-0.02em", color: "token(surface)",
                      },
                    },
                  },
                  { tag: "div", key: "cta", repeat: "buttons", if: "showCta" },
                ],
              },
              {
                tag: "h1", key: "heading", bind: "heading",
                style: {
                  base: {
                    position: "absolute", right: "1.25rem", bottom: "1.5rem", left: "1.25rem", "z-index": "2",
                    "margin-top": "0", "margin-bottom": "0", "max-width": "16ch",
                    "font-family": "token(font-display)", "font-size": "2.5rem", "line-height": "1.02",
                    "font-weight": "700", "letter-spacing": "-0.04em", "text-wrap": "balance", color: "token(surface)",
                  },
                  md: { "font-size": "3.5rem" },
                  lg: {
                    right: "2.5rem", bottom: "2.5rem", left: "2.5rem", "font-size": "4.75rem", "max-width": "14ch",
                  },
                },
              },
            ],
          },
        ],
      }),
    ],
  },
};
