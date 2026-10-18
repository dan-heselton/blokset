// A serif headline with a rotating italic line, and a photograph with a page-colored notch.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  chip: { color: "muted" },
  heading: { color: "fg" },
  word: { color: "fg" },
  description: { color: "muted" },
  trust: { color: "muted" },
  avatar: { "border-top-color": "bg", "border-right-color": "bg", "border-bottom-color": "bg", "border-left-color": "bg" },
  card: { "background-color": "bg", color: "fg" },
  "card-kicker": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });
const pill = {
  "border-top-left-radius": "999px", "border-top-right-radius": "999px",
  "border-bottom-right-radius": "999px", "border-bottom-left-radius": "999px",
};

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-52",
  prefix: "hero52",
  name: "Hero / Notched case",
  category: "hero",
  description: "A serif headline with one italic line that rotates, two actions, and a photograph whose top-left corner is left as page color. A case card sits on the picture.",

  props: {
    showChip: { type: "boolean", default: true },
    chip: { type: "text", default: "Webflow template" },
    heading: { type: "text", default: "We help rethink" },
    word: { type: "text", default: "Internal Docs" },
    words: {
      type: "list",
      fields: { word: "text" },
      default: [{ word: "Internal Docs" }, { word: "Product Story" }, { word: "Team Wiki" }],
    },
    showDescription: { type: "boolean", default: true },
    description: { type: "text", default: "We help serious businesses sharpen their offer and structure their communication." },
    showButtons: { type: "boolean", default: true },
    buttons: {
      type: "buttons",
      max: 2,
      default: [
        { title: "Get Template", href: "#", variant: "dark" },
        { title: "Get in touch", href: "#", variant: "secondary" },
      ],
    },
    showAvatars: { type: "boolean", default: true },
    avatars: {
      type: "list",
      fields: { image: "image" },
      default: [
        { image: photo("1494790108377-be9c29b29330", "Portrait of Maren Okafor") },
        { image: photo("1507003211169-0a1dd7228f2d", "Portrait of Eli Hart") },
        { image: photo("1438761681033-6461ffad8d80", "Portrait of June Pell") },
        { image: photo("1500648767791-00dcc994a43e", "Portrait of Noah Voss") },
      ],
    },
    showTrust: { type: "boolean", default: true },
    trust: { type: "text", default: "Trusted by 500+ clients (4.9/5)" },
    showImage: { type: "boolean", default: true },
    image: { type: "image", priority: true, default: photo("1438761681033-6461ffad8d80", "Portrait of a person smiling in warm light") },
    showCard: { type: "boolean", default: true },
    cardImage: { type: "image", default: photo("1497366216548-37526070297c", "Two desks in a bright studio") },
    cardTitle: { type: "text", default: "Clarifying the core: from product confusion to narrative confidence" },
    cardKicker: { type: "text", default: "Case study" },
    cardHref: { type: "link", default: "#" },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["chip", "heading", "description"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component", attrs: { "data-blok-cycle": "" },
        style: {
          base: { display: "grid", "grid-template-columns": "1fr", "align-items": "center", "row-gap": "2.5rem", "column-gap": "0rem" },
          lg: { "grid-template-columns": "1fr 1.15fr", "column-gap": "3rem", "row-gap": "0rem" },
        },
        children: [
          {
            tag: "div", key: "copy",
            style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "1.25rem" } },
            children: [
              { tag: "div", key: "chip", bind: "chip", if: "showChip", style: { base: { ...mono(), ...t("chip") } } },
              {
                tag: "h1", key: "heading",
                style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "0.15rem", "margin-top": "0", "margin-bottom": "0" } },
                children: [
                  {
                    tag: "div", key: "line", bind: "heading",
                    style: {
                      base: { "font-family": "token(font-serif)", "font-size": "3rem", "line-height": "1.02", "font-weight": "500", "letter-spacing": "-0.03em", ...t("heading") },
                      md: { "font-size": "4.25rem" },
                      lg: { "font-size": "4.75rem" },
                    },
                  },
                  {
                    tag: "div", key: "word", bind: "word", attrs: { "data-blok-cycle-current": "" },
                    style: {
                      base: { "font-family": "token(font-serif)", "font-style": "italic", "font-size": "3rem", "line-height": "1.02", "font-weight": "500", "letter-spacing": "-0.03em", ...t("word") },
                      md: { "font-size": "4.25rem" },
                      lg: { "font-size": "4.75rem" },
                    },
                  },
                ],
              },
              {
                tag: "div", key: "words", repeat: "words", attrs: { hidden: "" },
                children: [{ tag: "div", key: "cycle-word", bind: "item.word", attrs: { "data-blok-cycle-word": "" } }],
              },
              {
                tag: "p", key: "description", bind: "description", if: "showDescription",
                style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "28rem", "font-size": "1.0625rem", "line-height": "1.6", ...t("description") } },
              },
              { tag: "div", key: "actions", repeat: "buttons", if: "showButtons", style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "0.6rem", "row-gap": "0.6rem" } } },
              {
                tag: "div", key: "proof",
                style: { base: { display: "flex", "align-items": "center", "column-gap": "0.85rem", "margin-top": "0.5rem" } },
                children: [
                  {
                    tag: "div", key: "avatars", repeat: "avatars", if: "showAvatars",
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
                  { tag: "div", key: "trust", bind: "trust", if: "showTrust", attrs: { "data-blok-count": "" }, style: { base: { "font-size": "0.875rem", "line-height": "1.4", ...t("trust") } } },
                ],
              },
            ],
          },
          {
            tag: "div", key: "stage", if: "showImage",
            style: { base: { position: "relative", width: "100%", "padding-top": "2.5rem", "padding-left": "0rem" }, lg: { "padding-top": "3.5rem", "padding-left": "3rem" } },
            children: [
              {
                tag: "img", key: "image", bind: "image",
                style: { base: { display: "block", width: "100%", height: "22rem", "object-fit": "cover", ...radius("token(radius-card)") }, lg: { height: "32rem" } },
              },
              {
                tag: "a", key: "card", href: "cardHref", if: "showCard",
                style: {
                  base: {
                    position: "relative", right: "auto", bottom: "auto", display: "flex", "align-items": "center", "column-gap": "0.85rem",
                    width: "100%", "max-width": "22rem", "margin-top": "-2.5rem", "margin-left": "auto", "text-decoration": "none",
                    "padding-top": "0.7rem", "padding-right": "0.9rem", "padding-bottom": "0.7rem", "padding-left": "0.7rem",
                    ...radius("token(radius-card)"), ...t("card"),
                  },
                  lg: { position: "absolute", right: "0", bottom: "1.25rem", width: "18rem", "margin-top": "0rem" },
                },
                children: [
                  {
                    tag: "img", key: "card-image", bind: "cardImage",
                    style: { base: { display: "block", width: "4.5rem", height: "3.25rem", "flex-shrink": "0", "object-fit": "cover", ...radius("token(radius)") } },
                  },
                  {
                    tag: "div", key: "card-copy",
                    style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.3rem" } },
                    children: [
                      { tag: "div", key: "card-title", bind: "cardTitle", style: { base: { "font-size": "0.8125rem", "line-height": "1.35", "font-weight": "600" } } },
                      { tag: "div", key: "card-kicker", bind: "cardKicker", style: { base: { ...mono(), "font-size": "0.6875rem", ...t("card-kicker") } } },
                    ],
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
