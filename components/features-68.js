// A belief headline in a soft card with avatars and a counted member line.
import { mono, pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  card: { "background-color": "panel", color: "fg" },
  heading: { color: "fg" },
  description: { color: "muted" },
  about: { color: "muted" },
  count: { color: "fg" },
  avatar: { "border-top-color": "panel", "border-right-color": "panel", "border-bottom-color": "panel", "border-left-color": "panel" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=400&q=80`, alt });
const pill = {
  "border-top-left-radius": "999px", "border-top-right-radius": "999px",
  "border-bottom-right-radius": "999px", "border-bottom-left-radius": "999px",
};

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "features-68",
  prefix: "features68",
  name: "Features / Belief",
  category: "features",
  description: "A large belief headline and muted description in a soft card, with an about row of avatars and a counted member line.",

  props: {
    heading: { type: "text", default: "We believe clean energy shouldn't feel like a spreadsheet — it should feel like home." },
    description: { type: "text", default: "A cooperative model where members see the impact of every connection and every kilowatt returned to the grid." },
    showAbout: { type: "boolean", default: true },
    aboutLabel: { type: "text", default: "About Lumior" },
    avatars: {
      type: "list",
      fields: { image: "image" },
      default: [
        { image: photo("1494790108377-be9c29b29330", "Portrait of a co-op member") },
        { image: photo("1507003211169-0a1dd7228f2d", "Portrait of a co-op member") },
        { image: photo("1438761681033-6461ffad8d80", "Portrait of a co-op member") },
        { image: photo("1500648767791-00dcc994a43e", "Portrait of a co-op member") },
      ],
    },
    showCount: { type: "boolean", default: true },
    countLabel: { type: "text", default: "Co-op members 2,300+" },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["heading", "description"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "align-items": "stretch", "row-gap": "0rem" } },
        children: [
          {
            tag: "div", key: "card",
            style: {
              base: {
                display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "2rem",
                ...pad("1.75rem"), ...radius("1.75rem"), ...t("card"),
              },
              md: { ...pad("2.25rem"), "border-top-left-radius": "2rem", "border-top-right-radius": "2rem", "border-bottom-right-radius": "2rem", "border-bottom-left-radius": "2rem" },
              lg: { ...pad("3rem"), "border-top-left-radius": "2.25rem", "border-top-right-radius": "2.25rem", "border-bottom-right-radius": "2.25rem", "border-bottom-left-radius": "2.25rem", "row-gap": "2.5rem" },
            },
            children: [
              {
                tag: "h2", key: "heading", bind: "heading",
                style: {
                  base: { "margin-top": "0", "margin-bottom": "0", "max-width": "18ch", "font-family": "token(font-display)", "font-size": "2.25rem", "line-height": "1.05", "font-weight": "600", "letter-spacing": "-0.04em", ...t("heading") },
                  md: { "font-size": "3rem", "max-width": "20ch" },
                  lg: { "font-size": "3.75rem" },
                },
              },
              {
                tag: "p", key: "description", bind: "description",
                style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "32rem", "font-size": "1.0625rem", "line-height": "1.6", ...t("description") } },
              },
              {
                tag: "div", key: "about", if: "showAbout",
                style: { base: { display: "flex", "flex-wrap": "wrap", "align-items": "center", "column-gap": "1rem", "row-gap": "0.75rem", width: "100%" } },
                children: [
                  { tag: "div", key: "about-label", bind: "aboutLabel", style: { base: { ...mono(), ...t("about") } } },
                  {
                    tag: "div", key: "avatars", repeat: "avatars",
                    style: { base: { display: "flex", "align-items": "center", "padding-left": "0.65rem" } },
                    children: [{
                      tag: "img", key: "avatar", bind: "item.image",
                      style: {
                        base: {
                          display: "block", width: "2.25rem", height: "2.25rem", "margin-left": "-0.65rem", "object-fit": "cover",
                          "border-top-width": "2px", "border-right-width": "2px", "border-bottom-width": "2px", "border-left-width": "2px",
                          "border-top-style": "solid", "border-right-style": "solid", "border-bottom-style": "solid", "border-left-style": "solid",
                          ...t("avatar"), ...pill,
                        },
                      },
                    }],
                  },
                  {
                    tag: "div", key: "count", bind: "countLabel", if: "showCount", attrs: { "data-blok-count": "" },
                    style: { base: { "font-size": "0.9375rem", "line-height": "1.4", "font-weight": "600", ...t("count") } },
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
