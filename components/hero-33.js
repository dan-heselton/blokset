// Copy on the left, a photograph on the right, and a card of figures over the picture.
import { mono, pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  heading: { color: "fg" },
  description: { color: "muted" },
  "partner-label": { color: "muted" },
  card: { "background-color": "panel", color: "fg" },
  "figure-label": { color: "muted" },
  partner: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1600&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-33",
  prefix: "hero33",
  name: "Hero / Split card",
  category: "hero",
  description: "A headline and two actions on the left, a photograph on the right, and a card of three figures with a small map laid over the picture.",

  props: {
    heading: { type: "text", default: "Track a job from the first sketch." },
    showDescription: { type: "boolean", default: true, description: "Show the line under the headline." },
    description: { type: "text", default: "Distance, time, and what is still open. The same card we send when a build leaves the desk." },
    showButtons: { type: "boolean", default: true, description: "Show the action buttons." },
    buttons: {
      type: "buttons",
      max: 2,
      default: [
        { title: "Get started", href: "#", variant: "dark" },
        { title: "Trial 12 days", href: "#", variant: "secondary" },
      ],
    },
    showPartners: { type: "boolean", default: true, description: "Show the partner names." },
    partnerLabel: { type: "text", default: "On the bench with" },
    partners: {
      type: "list",
      fields: { name: "text" },
      default: [{ name: "Webflow" }, { name: "Astro" }, { name: "Figma" }],
    },
    showCard: { type: "boolean", default: true, description: "Show the figures card." },
    cardTitle: { type: "text", default: "Halyard, week two" },
    figures: {
      type: "list",
      fields: { value: "text", label: "text" },
      default: [
        { value: "6", label: "Open" },
        { value: "2", label: "Passes" },
        { value: "Fri", label: "Review" },
      ],
    },
    image: {
      type: "image",
      priority: true,
      description: "Photograph on the right.",
      default: shot("1476480862126-209bfaa8edc8", "A person running on an open road"),
    },
    map: {
      type: "image",
      description: "Small map inside the figures card.",
      default: shot("1524661135-423995f22d0b", "A folded paper map"),
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["heading", "description", "actions"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: {
          base: { display: "flex", "flex-direction": "column", "align-items": "stretch", "row-gap": "2rem", "column-gap": "0rem" },
          lg: { "flex-direction": "row", "align-items": "center", "column-gap": "3rem", "row-gap": "0rem" },
        },
        children: [
          {
            tag: "div", key: "copy",
            style: { base: { width: "100%", "max-width": "34rem" }, lg: { width: "46%" } },
            children: [
              {
                tag: "h1", key: "heading", bind: "heading",
                style: {
                  base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "2.75rem", "line-height": "1.02", "font-weight": "600", "letter-spacing": "-0.04em", ...t("heading") },
                  md: { "font-size": "3.5rem" },
                  lg: { "font-size": "4rem" },
                },
              },
              {
                tag: "p", key: "description", bind: "description", if: "showDescription",
                style: { base: { "margin-top": "1.25rem", "margin-bottom": "0", "max-width": "32rem", "font-size": "1.05rem", "line-height": "1.6", ...t("description") } },
              },
              {
                tag: "div", key: "actions", repeat: "buttons", if: "showButtons",
                style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "0.75rem", "row-gap": "0.75rem", "margin-top": "1.5rem" } },
              },
              {
                tag: "div", key: "partners", if: "showPartners",
                style: { base: { "margin-top": "2.5rem" } },
                children: [
                  { tag: "div", key: "partner-label", bind: "partnerLabel", style: { base: { ...mono(), "margin-bottom": "0.85rem", ...t("partner-label") } } },
                  {
                    tag: "div", key: "partner-row", repeat: "partners",
                    style: { base: { display: "flex", "flex-wrap": "wrap", "align-items": "center", "column-gap": "1.25rem", "row-gap": "0.5rem" } },
                    children: [{
                      tag: "div", key: "partner", bind: "item.name",
                      style: { base: { "font-family": "token(font-display)", "font-size": "1.15rem", "line-height": "1", "font-weight": "700", "letter-spacing": "-0.03em", "text-transform": "uppercase", ...t("partner") } },
                    }],
                  },
                ],
              },
            ],
          },
          {
            tag: "div", key: "media",
            style: { base: { position: "relative", width: "100%", overflow: "hidden", ...radius("1.25rem") }, lg: { width: "54%" } },
            children: [
              {
                tag: "img", key: "image", bind: "image",
                style: { base: { display: "block", width: "100%", height: "22rem", "object-fit": "cover" }, lg: { height: "36rem" } },
              },
              {
                tag: "div", key: "card", if: "showCard",
                style: {
                  base: { position: "relative", top: "auto", right: "auto", bottom: "auto", left: "auto", "z-index": "1", width: "auto", "max-width": "18rem", "margin-top": "-4rem", "margin-left": "1rem", "margin-right": "1rem", "margin-bottom": "1rem", ...radius("1rem"), ...pad("1rem"), ...t("card") },
                  lg: { position: "absolute", right: "1.25rem", bottom: "1.25rem", left: "auto", "margin-top": "0rem", "margin-left": "0rem", "margin-right": "0rem", "margin-bottom": "0rem" },
                },
                children: [
                  { tag: "h3", key: "card-title", bind: "cardTitle", style: { base: { "margin-top": "0", "margin-bottom": "0.85rem", "font-family": "token(font-display)", "font-size": "1.35rem", "line-height": "1.1", "font-weight": "600", "letter-spacing": "-0.03em" } } },
                  {
                    tag: "div", key: "figures", repeat: "figures",
                    style: { base: { display: "flex", "justify-content": "space-between", "column-gap": "0.75rem" } },
                    children: [{
                      tag: "div", key: "figure",
                      children: [
                        { tag: "div", key: "figure-value", bind: "item.value", style: { base: { "font-family": "token(font-display)", "font-size": "1.15rem", "line-height": "1", "font-weight": "600" } } },
                        { tag: "div", key: "figure-label", bind: "item.label", style: { base: { ...mono(), "margin-top": "0.3rem", ...t("figure-label") } } },
                      ],
                    }],
                  },
                  {
                    tag: "img", key: "map", bind: "map",
                    style: { base: { display: "block", width: "100%", height: "7rem", "margin-top": "0.9rem", "object-fit": "cover", ...radius("0.6rem") } },
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
