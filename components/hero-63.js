// Service Design split: serif copy left, photograph with a stepped L notch right, floating case card.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  chip: { color: "muted" },
  heading: { color: "fg" },
  description: { color: "muted" },
  trust: { color: "muted" },
  avatar: { "border-top-color": "bg", "border-right-color": "bg", "border-bottom-color": "bg", "border-left-color": "bg" },
  "notch-a": { "background-color": "bg" },
  "notch-b": { "background-color": "bg" },
  card: { "background-color": "panel", color: "fg" },
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
  id: "hero-63",
  prefix: "hero63",
  name: "Hero / Service notch",
  category: "hero",
  description: "Copy on the left. On the right, a photograph with a stepped L notch cut from page color and a floating case-study card.",

  props: {
    showChip: { type: "boolean", default: true },
    chip: { type: "text", default: "Webflow template" },
    heading: { type: "text", default: "We help rethink Service Design" },
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
    image: { type: "image", priority: true, default: photo("1573496359142-b8d87734a5a2", "Person smiling at a desk in soft light") },
    showCard: { type: "boolean", default: true },
    cardImage: { type: "image", default: photo("1497366216548-37526070297c", "Two desks in a bright studio") },
    cardTitle: { type: "text", default: "How a founder's vision became a team-wide message" },
    cardKicker: { type: "text", default: "Case study" },
    cardHref: { type: "link", default: "#" },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["chip", "heading", "description", "actions"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: {
          base: { display: "grid", "grid-template-columns": "1fr", "align-items": "center", "row-gap": "2.5rem", "column-gap": "0rem" },
          lg: { "grid-template-columns": "1fr 1.15fr", "column-gap": "3rem", "row-gap": "0rem" },
        },
        children: [
          {
            tag: "div", key: "copy",
            style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "1.25rem" } },
            children: [
              { tag: "div", key: "chip", bind: "chip", if: "showChip", style: { base: { ...mono(), "text-transform": "uppercase", "letter-spacing": "0.08em", ...t("chip") } } },
              {
                tag: "h1", key: "heading", bind: "heading",
                style: {
                  base: { "margin-top": "0", "margin-bottom": "0", "max-width": "18ch", "font-family": "token(font-serif)", "font-size": "3rem", "line-height": "1.05", "font-weight": "500", "letter-spacing": "-0.03em", "text-wrap": "balance", ...t("heading") },
                  md: { "font-size": "4rem" },
                  lg: { "font-size": "4.5rem" },
                },
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
            style: {
              base: { position: "relative", width: "100%", "padding-top": "0rem", "padding-left": "0rem" },
              lg: { "padding-top": "2.5rem", "padding-left": "2.5rem" },
            },
            children: [
              {
                tag: "div", key: "media",
                style: {
                  base: { position: "relative", overflow: "hidden", height: "22rem", ...radius("2rem") },
                  lg: {
                    height: "34rem",
                    "border-top-left-radius": "2.75rem", "border-top-right-radius": "2.75rem",
                    "border-bottom-right-radius": "2.75rem", "border-bottom-left-radius": "2.75rem",
                  },
                },
                children: [
                  { tag: "img", key: "image", bind: "image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } },
                  {
                    tag: "div", key: "notch-a", decorative: true,
                    style: {
                      base: {
                        display: "none", position: "absolute", top: "0", left: "0", width: "28%", height: "32%", "z-index": "2",
                        "border-bottom-right-radius": "2.25rem", ...t("notch-a"),
                      },
                      lg: { display: "block" },
                    },
                  },
                  {
                    tag: "div", key: "notch-b", decorative: true,
                    style: {
                      base: {
                        display: "none", position: "absolute", top: "28%", left: "0", width: "14%", height: "22%", "z-index": "2",
                        "border-top-right-radius": "1.75rem", "border-bottom-right-radius": "1.75rem", ...t("notch-b"),
                      },
                      lg: { display: "block" },
                    },
                  },
                ],
              },
              {
                tag: "a", key: "card", href: "cardHref", if: "showCard",
                style: {
                  base: {
                    position: "relative", right: "auto", bottom: "auto", "z-index": "3",
                    display: "flex", "align-items": "center", "column-gap": "0.85rem",
                    width: "100%", "max-width": "22rem", "margin-top": "-2rem", "margin-left": "auto", "text-decoration": "none",
                    "padding-top": "0.7rem", "padding-right": "0.9rem", "padding-bottom": "0.7rem", "padding-left": "0.7rem",
                    ...radius("1.25rem"), ...t("card"),
                  },
                  lg: { position: "absolute", right: "0", bottom: "1.25rem", width: "19rem", "margin-top": "0rem" },
                },
                children: [
                  {
                    tag: "img", key: "card-image", bind: "cardImage",
                    style: { base: { display: "block", width: "4.5rem", height: "3.25rem", "flex-shrink": "0", "object-fit": "cover", ...radius("0.75rem") } },
                  },
                  {
                    tag: "div", key: "card-copy",
                    style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.3rem" } },
                    children: [
                      { tag: "div", key: "card-title", bind: "cardTitle", style: { base: { "font-size": "0.8125rem", "line-height": "1.35", "font-weight": "600" } } },
                      { tag: "div", key: "card-kicker", bind: "cardKicker", style: { base: { ...mono(), "font-size": "0.6875rem", "text-transform": "uppercase", ...t("card-kicker") } } },
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
