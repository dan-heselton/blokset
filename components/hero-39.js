// A photograph with a headline on it, a finder panel, and a listing card.
import { inset0, mono, pad, radius, shapeVariant, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  panel: { "background-color": "panel", color: "fg" },
  choice: { "background-color": "bg", color: "fg" },
  "row-label": { color: "muted" },
  listing: { "background-color": "panel", color: "fg" },
  place: { color: "muted" },
  fact: { "background-color": "bg", color: "fg" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1800&q=80`, alt });
const inverse = { color: "token(text-inverse)" };

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-39",
  prefix: "hero39",
  name: "Hero / Finder",
  category: "hero",
  description: "A full-bleed photograph with a headline on it. A panel on the left holds two choices and three labeled rows. A listing card sits on the right. Nothing submits.",

  props: {
    showKicker: { type: "boolean", default: true, description: "Show the line above the headline." },
    kicker: { type: "text", default: "Open this week." },
    heading: { type: "text", default: "A room, a Friday, a page." },
    showDescription: { type: "boolean", default: true, description: "Show the sentence under the headline." },
    description: { type: "text", default: "Tell us the place and the kind of work. We answer with what a Friday costs." },
    showChoices: { type: "boolean", default: true, description: "Show the two choices." },
    choices: {
      type: "list",
      fields: { label: "text" },
      default: [{ label: "Site" }, { label: "Shop" }],
    },
    showRows: { type: "boolean", default: true, description: "Show the labeled rows." },
    rows: {
      type: "list",
      fields: { label: "text", value: "text" },
      default: [
        { label: "Place", value: "Rockport" },
        { label: "Kind", value: "Still life" },
        { label: "When", value: "A Friday" },
      ],
    },
    showButtons: { type: "boolean", default: true, description: "Show the action." },
    buttons: { type: "buttons", max: 1, default: [{ title: "Start with this", href: "#", variant: "dark" }] },
    showListing: { type: "boolean", default: true, description: "Show the listing card." },
    listingTitle: { type: "text", default: "The chair, week two" },
    listingPlace: { type: "text", default: "18 Main Street" },
    facts: {
      type: "list",
      fields: { label: "text" },
      default: [{ label: "1 room" }, { label: "2 passes" }],
    },
    listingImage: { type: "image", default: shot("1519710164239-da123dc03ef4", "A wooden chair in a pale room") },
    image: { type: "image", priority: true, default: shot("1486406146926-c627a92ad1ab", "A glass facade against a clear sky") },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
    shape: shapeVariant(["panel", "listing", "listing-shot", "choice"]),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["kicker", "heading", "description", "listing"] } },

  tree: {
    role: "section",
    style: { base: { position: "relative", overflow: "hidden", ...t("section") } },
    children: [
      { tag: "img", key: "image", bind: "image", style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } } },
      {
        tag: "div", key: "shade", decorative: true,
        style: { base: { ...inset0, "background-image": "linear-gradient(to top, token(shade-strong) 0%, token(overlay) 42%, token(overlay-subtle) 100%)" } },
      },
      shell({
        tag: "div", key: "component",
        style: {
          base: { position: "relative", "z-index": "1", display: "flex", "flex-direction": "column", "align-items": "stretch", "justify-content": "space-between", "row-gap": "2rem", "min-height": "40rem" },
          lg: { "min-height": "44rem" },
        },
        children: [
          {
            tag: "div", key: "copy",
            style: { base: { width: "100%", "max-width": "36rem" } },
            children: [
              {
                tag: "p", key: "kicker", bind: "kicker", if: "showKicker",
                style: { base: { "margin-top": "0", "margin-bottom": "0.75rem", "font-size": "1.05rem", "line-height": "1.4", ...inverse } },
              },
              {
                tag: "h1", key: "heading", bind: "heading",
                style: {
                  base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "2.75rem", "line-height": "0.98", "font-weight": "600", "letter-spacing": "-0.04em", ...inverse },
                  md: { "font-size": "3.75rem" },
                  lg: { "font-size": "4.5rem" },
                },
              },
              {
                tag: "p", key: "description", bind: "description", if: "showDescription",
                style: { base: { "margin-top": "1rem", "margin-bottom": "0", "max-width": "28rem", "font-size": "1.05rem", "line-height": "1.5", ...inverse } },
              },
            ],
          },
          {
            tag: "div", key: "bottom",
            style: {
              base: { display: "flex", "flex-direction": "column", "align-items": "stretch", "justify-content": "flex-start", "row-gap": "1rem", "column-gap": "0rem", width: "100%" },
              lg: { "flex-direction": "row", "align-items": "flex-end", "justify-content": "space-between", "column-gap": "1.5rem", "row-gap": "0rem" },
            },
            children: [
              {
                tag: "div", key: "panel",
                style: { base: { width: "100%", "max-width": "24rem", ...radius("token(radius-card)"), ...pad("1.5rem"), ...t("panel") } },
                children: [
                  {
                    tag: "div", key: "choices", repeat: "choices", if: "showChoices",
                    style: { base: { display: "flex", "column-gap": "0.5rem" } },
                    children: [{
                      tag: "div", key: "choice", bind: "item.label",
                      style: { base: { ...mono(), "font-size": "0.75rem", ...radius("token(radius-card)"), ...pad({ top: "0.45rem", right: "0.8rem", bottom: "0.45rem", left: "0.8rem" }), ...t("choice") } },
                    }],
                  },
                  {
                    tag: "div", key: "rows", repeat: "rows", if: "showRows",
                    style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.65rem", "margin-top": "1.25rem" } },
                    children: [{
                      tag: "div", key: "row",
                      style: { base: { display: "flex", "justify-content": "space-between", "align-items": "baseline", "column-gap": "1rem" } },
                      children: [
                        { tag: "div", key: "row-label", bind: "item.label", style: { base: { ...mono(), "font-size": "0.7rem", ...t("row-label") } } },
                        { tag: "div", key: "row-value", bind: "item.value", style: { base: { "font-size": "1rem", "line-height": "1.3" } } },
                      ],
                    }],
                  },
                  { tag: "div", key: "actions", repeat: "buttons", if: "showButtons", style: { base: { display: "flex", "margin-top": "1.25rem" } } },
                ],
              },
              {
                tag: "div", key: "listing", if: "showListing",
                style: { base: { width: "100%", "max-width": "22rem", ...radius("token(radius-card)"), ...pad("0.85rem"), ...t("listing") } },
                children: [
                  {
                    tag: "div", key: "listing-shot",
                    style: { base: { overflow: "hidden", width: "100%", height: "10rem", ...radius("token(radius-card)") } },
                    children: [{ tag: "img", key: "listing-image", bind: "listingImage", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } }],
                  },
                  { tag: "h2", key: "listing-title", bind: "listingTitle", style: { base: { "margin-top": "0.85rem", "margin-bottom": "0.25rem", "font-family": "token(font-display)", "font-size": "1.35rem", "line-height": "1.1", "font-weight": "600" } } },
                  { tag: "p", key: "place", bind: "listingPlace", style: { base: { "margin-top": "0", "margin-bottom": "0.75rem", "font-size": "0.95rem", "line-height": "1.4", ...t("place") } } },
                  {
                    tag: "div", key: "facts", repeat: "facts",
                    style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "0.5rem", "row-gap": "0.5rem" } },
                    children: [{
                      tag: "div", key: "fact", bind: "item.label",
                      style: { base: { "font-size": "0.9rem", ...radius("token(radius-card)"), ...pad({ top: "0.35rem", right: "0.7rem", bottom: "0.35rem", left: "0.7rem" }), ...t("fact") } },
                    }],
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
