// Image-trail hero: a centered, oversized statement. Moving the cursor across it leaves a trail of
// project images that pop in and fade out. Touch and reduced-motion users just see the type.
import { themeVariant, themeBase, radius, mono } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  eyebrow: { color: "muted" },
  description: { color: "muted" },
  hint: { color: "muted" },
};
const t = (key) => themeBase("dark", THEME[key]);
const img = (id, alt) => ({ image: { src: `https://images.unsplash.com/${id}?w=600&q=80`, alt } });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-14",
  prefix: "hero14",
  name: "Hero / Image Trail",
  category: "hero",
  description: "Centered statement hero; moving the cursor leaves a trail of images. Three themes, two type sizes.",

  props: {
    showEyebrow: { type: "boolean", default: true },
    eyebrow: { type: "text", default: "Selected work 2019 — 2026" },
    heading: { type: "text", default: "We make the internet feel handmade" },
    showDescription: { type: "boolean", default: true },
    description: { type: "text", default: "A small studio building brands and websites for people who care about the details." },
    showButtons: { type: "boolean", default: true },
    buttons: {
      type: "buttons", max: 2,
      default: [
        { title: "Start a project", href: "#", variant: "primary" },
        { title: "View work", href: "#", variant: "secondary-alt" },
      ],
    },
    showHint: { type: "boolean", default: true, description: "Small 'move your cursor' hint (hidden on touch screens)" },
    hint: { type: "text", default: "Move your cursor ↗" },
    trail: {
      type: "list",
      description: "Images that follow the cursor. 5–8 works best.",
      fields: { image: "image" },
      default: [
        img("photo-1501594907352-04cda38ebc29", "Coastline"),
        img("photo-1519710164239-da123dc03ef4", "Studio interior"),
        img("photo-1497366216548-37526070297c", "Office"),
        img("photo-1517248135467-4c7edcad34c4", "Restaurant"),
        img("photo-1486406146926-c627a92ad1ab", "Architecture"),
        img("photo-1500530855697-b586d89ba3ee", "Hills"),
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "dark", options: ["dark", "light", "accent"], map: THEME }),
    typeSize: {
      label: "Headline size",
      default: "huge",
      options: {
        huge: null,
        large: { styles: { heading: { base: { "font-size": "3rem" }, md: { "font-size": "4.5rem" }, lg: { "font-size": "6rem" } } } },
      },
    },
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.1, targets: ["eyebrow", "description", "actions", "hint"] },
  },

  tree: {
    role: "section",
    style: { base: { position: "relative", overflow: "hidden", ...t("section") } },
    children: [
      shell({
        tag: "div", key: "component", attrs: { "data-blok-trail": "", "data-blok-trail-gap": "80" },
        style: { base: { position: "relative", display: "flex", "align-items": "center", "justify-content": "center", "min-height": "70svh" }, lg: { "min-height": "calc(100svh - 16rem)" } },
        children: [
          {
            tag: "div", key: "content",
            style: { base: { position: "relative", "z-index": "1000", display: "flex", "flex-direction": "column", "align-items": "center", "text-align": "center", "max-width": "72rem", "pointer-events": "none" } },
            children: [
              { tag: "div", key: "eyebrow", bind: "eyebrow", if: "showEyebrow", style: { base: { ...mono(), "margin-bottom": "1.75rem", ...t("eyebrow") } } },
              {
                tag: "h1", key: "heading", bind: "heading", attrs: { "data-blok-split": "rise" },
                style: {
                  base: { "margin-top": "0", "margin-bottom": "1.75rem", "font-family": "token(font-display)", "font-size": "3.5rem", "line-height": "0.92", "font-weight": "600", "letter-spacing": "-0.05em" },
                  md: { "font-size": "6rem" },
                  lg: { "font-size": "8.5rem" },
                },
              },
              { tag: "p", key: "description", bind: "description", if: "showDescription", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "32rem", "font-size": "1.125rem", "line-height": "1.6", ...t("description") } } },
              { tag: "div", key: "actions", repeat: "buttons", if: "showButtons", style: { base: { display: "flex", "flex-wrap": "wrap", "justify-content": "center", "column-gap": "0.75rem", "row-gap": "0.75rem", "margin-top": "2.25rem", "pointer-events": "auto" } } },
              { tag: "div", key: "hint", bind: "hint", if: "showHint", style: { base: { display: "none", ...mono(), "margin-top": "3rem", ...t("hint") }, md: { display: "block" } } },
            ],
          },
          {
            tag: "div", key: "trail", repeat: "trail", decorative: true,
            style: { base: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", "pointer-events": "none" } },
            children: [
              {
                tag: "div", key: "trail-item", attrs: { "data-blok-trail-item": "" },
                style: {
                  base: { position: "absolute", top: "0", left: "0", width: "11rem", height: "14rem", overflow: "hidden", opacity: "0", visibility: "hidden", ...radius("0.5rem") },
                  lg: { width: "15rem", height: "19rem" },
                },
                children: [{ tag: "img", key: "trail-image", bind: "item.image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } }],
              },
            ],
          },
        ],
      }),
    ],
  },
};
