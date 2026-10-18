// One large article on the left, two smaller ones on the right.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  kicker: { color: "muted" },
  dot: { "background-color": "glyph" },
  "kicker-row": { "border-bottom-color": "line" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });
const pill = {
  "border-top-left-radius": "999px", "border-top-right-radius": "999px",
  "border-bottom-right-radius": "999px", "border-bottom-left-radius": "999px",
};

function article(id, imageProp, dateProp, titleProp, excerptProp, tall) {
  return {
    tag: "a", key: id, href: `${id}Href`,
    style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.85rem", "text-decoration": "none", color: "inherit", width: "100%", "min-width": "0rem" } },
    children: [
      {
        tag: "img", key: `${id}-image`, bind: imageProp,
        style: { base: { display: "block", width: "100%", height: tall ? "16rem" : "10rem", "object-fit": "cover", ...radius("token(radius-card)") }, lg: { height: tall ? "22rem" : "11rem" } },
      },
      { tag: "div", key: `${id}-date`, bind: dateProp, style: { base: { ...mono(), "font-size": "0.75rem", opacity: "0.72" } } },
      { tag: "h3", key: `${id}-title`, bind: titleProp, style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": tall ? "1.75rem" : "1.25rem", "line-height": "1.15", "font-weight": "600", "letter-spacing": "-0.03em" } } },
      { tag: "p", key: `${id}-excerpt`, bind: excerptProp, style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "0.9375rem", "line-height": "1.5", opacity: "0.72" } } },
    ],
  };
}

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "posts-02",
  prefix: "posts2",
  name: "Posts / Lead grid",
  category: "posts",
  description: "One large article on the left and two smaller articles on the right. Each has a date, a title, and an excerpt.",

  props: {
    showKicker: { type: "boolean", default: true },
    kicker: { type: "text", default: "Company insights" },
    showLead: { type: "boolean", default: true },
    leadImage: { type: "image", default: photo("1500530855697-b586d89ba3ee", "A green courtyard between modern buildings") },
    leadDate: { type: "text", default: "August 12, 2025" },
    leadTitle: { type: "text", default: "Why modular design wins" },
    leadExcerpt: { type: "text", default: "From construction blueprints to digital templates. Discover why flexible, component-based design is the future for brands of any size." },
    leadHref: { type: "link", default: "#" },
    showSide: { type: "boolean", default: true },
    sideImage: { type: "image", default: photo("1519710164239-da123dc03ef4", "A low wooden house among trees") },
    sideDate: { type: "text", default: "August 12, 2025" },
    sideTitle: { type: "text", default: "Designing templates like green architecture" },
    sideExcerpt: { type: "text", default: "From construction blueprints to digital templates. Discover why flexible, component-based design is the future for brands of any size." },
    sideHref: { type: "link", default: "#" },
    showAlso: { type: "boolean", default: true },
    alsoImage: { type: "image", default: photo("1486406146926-c627a92ad1ab", "A white mechanical form on a pale ground") },
    alsoDate: { type: "text", default: "August 12, 2025" },
    alsoTitle: { type: "text", default: "Nature-inspired interactions in Webflow" },
    alsoExcerpt: { type: "text", default: "From construction blueprints to digital templates. Discover why flexible, component-based design is the future for brands of any size." },
    alsoHref: { type: "link", default: "#" },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["kicker", "lead", "side"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2rem" } },
        children: [
          {
            tag: "div", key: "kicker-row", if: "showKicker",
            style: { base: { display: "flex", "align-items": "center", "column-gap": "0.5rem", "padding-bottom": "1rem", "border-bottom-width": "1px", "border-bottom-style": "solid", "border-bottom-color": t("kicker-row")["border-bottom-color"] } },
            children: [
              { tag: "div", key: "dot", decorative: true, style: { base: { width: "0.45rem", height: "0.45rem", "flex-shrink": "0", ...t("dot"), ...pill } } },
              { tag: "div", key: "kicker", bind: "kicker", style: { base: { ...mono(), ...t("kicker") } } },
            ],
          },
          {
            tag: "div", key: "grid",
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "align-items": "start", "row-gap": "2rem", "column-gap": "0rem" },
              lg: { "grid-template-columns": "1.35fr 1fr", "column-gap": "1.5rem", "row-gap": "0rem" },
            },
            children: [
              { ...article("lead", "leadImage", "leadDate", "leadTitle", "leadExcerpt", true), if: "showLead" },
              {
                tag: "div", key: "stack",
                style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1.5rem" } },
                children: [
                  { ...article("side", "sideImage", "sideDate", "sideTitle", "sideExcerpt", false), if: "showSide" },
                  { ...article("also", "alsoImage", "alsoDate", "alsoTitle", "alsoExcerpt", false), if: "showAlso" },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
