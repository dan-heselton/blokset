// A dark card of copy, with a portrait that hangs past the card on a wide screen.
import { themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  word: { color: "glyph" },
  studies: { color: "glyph" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-55",
  prefix: "hero55",
  name: "Hero / Card overhang",
  category: "hero",
  description: "A dark card holds the headline, one accent line, and two actions. The portrait hangs past the top and bottom of the card.",

  props: {
    heading: { type: "text", default: "Boost your business through" },
    word: { type: "text", default: "online marketing" },
    showDescription: { type: "boolean", default: true },
    description: { type: "text", default: "At Consult Craft we take actual steps to make the world a better and more sustainable place to live." },
    showTalk: { type: "boolean", default: true },
    talk: { type: "text", default: "Let's talk" },
    talkHref: { type: "link", default: "#" },
    showStudies: { type: "boolean", default: true },
    studies: { type: "text", default: "See case studies" },
    studiesHref: { type: "link", default: "#" },
    showImage: { type: "boolean", default: true },
    image: { type: "image", priority: true, default: photo("1438761681033-6461ffad8d80", "A person in a knit sweater looking up from a phone") },
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
        tag: "div", key: "stage",
        style: { base: { position: "relative", width: "100%" } },
        children: [
          {
            tag: "div", key: "card",
            style: {
              base: {
                display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "1.25rem",
                width: "100%", "max-width": "100%", "background-color": "token(ink)", color: "token(surface)",
                "padding-top": "2rem", "padding-right": "1.5rem", "padding-bottom": "2rem", "padding-left": "1.5rem",
                "border-top-left-radius": "1.5rem", "border-top-right-radius": "1.5rem", "border-bottom-right-radius": "1.5rem", "border-bottom-left-radius": "1.5rem",
              },
              lg: { "max-width": "68%", "padding-top": "4.5rem", "padding-right": "4rem", "padding-bottom": "4.5rem", "padding-left": "4rem" },
            },
            children: [
              {
                tag: "h1", key: "heading",
                style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "0.1rem", "margin-top": "0", "margin-bottom": "0", "max-width": "16rem" } },
                children: [
                  {
                    tag: "div", key: "line", bind: "heading",
                    style: {
                      base: { "font-family": "token(font-display)", "font-size": "2.5rem", "line-height": "1.02", "font-weight": "600", "letter-spacing": "-0.04em" },
                      lg: { "font-size": "3.75rem" },
                    },
                  },
                  {
                    tag: "div", key: "word", bind: "word",
                    style: {
                      base: { "font-family": "token(font-display)", "font-size": "2.5rem", "line-height": "1.02", "font-weight": "600", "letter-spacing": "-0.04em", ...t("word") },
                      lg: { "font-size": "3.75rem" },
                    },
                  },
                ],
              },
              {
                tag: "p", key: "description", bind: "description", if: "showDescription",
                style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "24rem", "font-size": "1.0625rem", "line-height": "1.6", opacity: "0.8" } },
              },
              {
                tag: "div", key: "actions",
                style: { base: { display: "flex", "align-items": "center", "flex-wrap": "wrap", "column-gap": "1.25rem", "row-gap": "0.75rem" } },
                children: [
                  {
                    tag: "a", key: "talk", bind: "talk", href: "talkHref", if: "showTalk",
                    style: {
                      base: {
                        display: "inline-flex", "background-color": "token(accent)", color: "token(ink)", "text-decoration": "none", "font-weight": "600",
                        "padding-top": "0.8rem", "padding-right": "1.15rem", "padding-bottom": "0.8rem", "padding-left": "1.15rem",
                        "border-top-left-radius": "0.5rem", "border-top-right-radius": "0.5rem", "border-bottom-right-radius": "0.5rem", "border-bottom-left-radius": "0.5rem",
                      },
                    },
                  },
                  {
                    tag: "a", key: "studies", bind: "studies", href: "studiesHref", if: "showStudies",
                    style: { base: { "text-decoration": "none", "font-weight": "600", ...t("studies") } },
                  },
                ],
              },
            ],
          },
          {
            tag: "img", key: "image", bind: "image", if: "showImage",
            style: {
              base: {
                position: "relative", top: "auto", right: "auto", bottom: "auto", display: "block",
                width: "100%", height: "22rem", "margin-top": "1.25rem", "object-fit": "cover",
                "border-top-left-radius": "1.5rem", "border-top-right-radius": "1.5rem", "border-bottom-right-radius": "1.5rem", "border-bottom-left-radius": "1.5rem",
              },
              lg: { position: "absolute", top: "-2rem", right: "0", bottom: "-2rem", width: "38%", height: "auto", "margin-top": "0rem" },
            },
          },
        ],
      }),
    ],
  },
};
