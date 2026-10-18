// Giant wordmark footer: tagline and actions, link columns, then the brand name scaled to span the
// full width edge to edge, and a slim legal bar. Optional logo image.
import { themeVariant, themeBase, mono } from "./_lib/themes.js";
import { shell, withStyles } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  "col-1-title": { color: "muted" },
  "col-2-title": { color: "muted" },
  "col-3-title": { color: "muted" },
  wordmark: { color: "fg" },
  bottom: { color: "muted" },
  top: { "border-bottom-color": "line" },
};
const t = (key) => themeBase("dark", THEME[key]);
const links = (...labels) => labels.map((label) => ({ label, href: "#" }));

const column = (n) => ({
  tag: "div", key: `col-${n}`,
  style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.75rem", "min-width": "9rem" }, lg: { "min-width": "0rem" } },
  children: [
    { tag: "div", key: `col-${n}-title`, bind: `column${n}Title`, style: { base: { ...mono(), "margin-bottom": "0.5rem", ...t(`col-${n}-title`) } } },
    {
      tag: "div", key: `col-${n}-links`, repeat: `column${n}Links`,
      style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.625rem" } },
      children: [{ tag: "a", key: `col-${n}-link`, href: "item.href", bind: "item.label", style: { base: { color: "inherit", "text-decoration": "none", "font-size": "1.0625rem", "line-height": "1.3" } } }],
    },
  ],
});

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "footer-04",
  prefix: "footer4",
  name: "Footer / Giant Wordmark",
  category: "footer",
  description: "Footer with tagline, actions and three link columns, crowned by a wordmark scaled to span the full width.",

  props: {
    showLogo: { type: "boolean", default: false },
    logo: { type: "image", default: { src: "https://placehold.co/160x40/141414/f4f1ea/png?text=Logo", alt: "Studio logo" } },
    tagline: { type: "text", default: "Have a project in mind? Let's make it good." },
    showButtons: { type: "boolean", default: true },
    buttons: {
      type: "buttons", max: 2,
      default: [
        { title: "Start a project", href: "#", variant: "primary" },
        { title: "hello@studio.co", href: "mailto:hello@studio.co", variant: "secondary-alt" },
      ],
    },
    showColumns: { type: "boolean", default: true },
    column1Title: { type: "text", default: "Studio" },
    column1Links: { type: "list", fields: { label: "text", href: "link" }, default: links("Work", "Services", "About", "Journal") },
    column2Title: { type: "text", default: "Connect" },
    column2Links: { type: "list", fields: { label: "text", href: "link" }, default: links("Instagram", "LinkedIn", "Dribbble", "Newsletter") },
    column3Title: { type: "text", default: "Visit" },
    column3Links: { type: "list", fields: { label: "text", href: "link" }, default: links("12 Harbor Way", "Rockport, MA", "Mon–Fri, 9–5") },
    showWordmark: { type: "boolean", default: true },
    wordmark: { type: "text", default: "studio", description: "One word works best. It scales to fill the full width." },
    showLegal: { type: "boolean", default: true },
    copyright: { type: "text", default: "© 2026 Studio. All rights reserved." },
    legalLinks: { type: "list", fields: { label: "text", href: "link" }, default: links("Privacy", "Terms", "Accessibility") },
  },

  variants: {
    theme: themeVariant({ default: "dark", options: ["dark", "light", "accent"], map: THEME }),
    wordmarkStyle: withStyles(
      {
        label: "Wordmark style",
        default: "solid",
        options: { solid: null, ghost: { styles: { wordmark: { base: { opacity: "0.14" } } } }, glyph: { styles: { wordmark: { base: { color: "token(accent)" } } } } },
      },
      {}
    ),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["tagline", "actions", "columns"] },
    reveal: { preset: "fade-up", targets: ["wordmark"] },
  },

  tree: {
    role: "section",
    style: { base: { overflow: "hidden", ...t("section") } },
    children: [
      shell(
        {
          tag: "div", key: "component",
          style: { base: { display: "flex", "flex-direction": "column", "row-gap": "3rem" }, lg: { "row-gap": "4rem" } },
          children: [
            {
              tag: "div", key: "top",
              style: {
                base: { display: "flex", "flex-direction": "column", "justify-content": "flex-start", "row-gap": "3rem", "column-gap": "0rem", "padding-bottom": "3rem", "border-bottom-width": "1px", "border-bottom-style": "solid", ...t("top") },
                lg: { "flex-direction": "row", "justify-content": "space-between", "row-gap": "0rem", "column-gap": "4rem", "padding-bottom": "4rem" },
              },
              children: [
                {
                  tag: "div", key: "brand",
                  style: { base: { "max-width": "34rem" } },
                  children: [
                    { tag: "img", key: "logo", bind: "logo", if: "showLogo", style: { base: { display: "block", height: "2.5rem", width: "auto", "margin-bottom": "2rem" } } },
                    { tag: "h2", key: "tagline", bind: "tagline", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "2rem", "line-height": "1.08", "font-weight": "600", "letter-spacing": "-0.03em" }, lg: { "font-size": "2.75rem" } } },
                    { tag: "div", key: "actions", repeat: "buttons", if: "showButtons", style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "0.75rem", "row-gap": "0.75rem", "margin-top": "2rem" } } },
                  ],
                },
                {
                  tag: "div", key: "columns", if: "showColumns",
                  style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "3rem", "row-gap": "2.5rem" }, lg: { "flex-wrap": "nowrap", "column-gap": "4rem" } },
                  children: [column(1), column(2), column(3)],
                },
              ],
            },
            {
              tag: "div", key: "wordmark-wrap", if: "showWordmark",
              style: { base: { width: "100%", "padding-top": "0.5rem" } },
              children: [
                {
                  tag: "div", key: "wordmark", bind: "wordmark", attrs: { "data-blok-fit": "" },
                  style: { base: { display: "inline-block", "font-family": "token(font-display)", "font-size": "22vw", "line-height": "0.86", "font-weight": "700", "letter-spacing": "-0.06em", "white-space": "nowrap", ...t("wordmark") } },
                },
              ],
            },
            {
              tag: "div", key: "bottom", if: "showLegal",
              style: {
                base: { display: "flex", "flex-direction": "column", "justify-content": "flex-start", "row-gap": "1rem", "column-gap": "0rem", "font-size": "0.875rem", ...t("bottom") },
                md: { "flex-direction": "row", "justify-content": "space-between", "row-gap": "0rem", "column-gap": "2rem" },
              },
              children: [
                { tag: "div", key: "copyright", bind: "copyright" },
                {
                  tag: "div", key: "legal", repeat: "legalLinks",
                  style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "1.5rem", "row-gap": "0.5rem" } },
                  children: [{ tag: "a", key: "legal-link", href: "item.href", bind: "item.label", style: { base: { color: "inherit", "text-decoration": "none" } } }],
                },
              ],
            },
          ],
        },
        { size: "medium" }
      ),
    ],
  },
};
