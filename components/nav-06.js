// Big words in the bar. The photograph underneath changes to the one that belongs to the word you are on.
import { themeBase, themeVariant } from "./_lib/themes.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  label: { color: "fg" },
  index: { color: "muted" },
  toggle: { color: "muted" },
};
const t = (key) => themeBase("dark", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1600&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "nav-06",
  prefix: "nav6",
  name: "Nav / Index",
  category: "nav",
  description: "Oversized links. The photograph stays hidden until a link is under your pointer or focused.",

  props: {
    showBrand: { type: "boolean", default: true },
    brand: { type: "text", default: "Studio" },
    brandHref: { type: "link", default: "#" },
    image: { type: "image", default: photo("1501594907352-04cda38ebc29", "The Golden Gate Bridge over blue water") },
    showLinks: { type: "boolean", default: true },
    links: {
      type: "list",
      fields: { label: "text", href: "link", image: "image" },
      default: [
        { label: "Work", href: "#", image: photo("1501594907352-04cda38ebc29", "The Golden Gate Bridge over blue water") },
        { label: "Studio", href: "#", image: photo("1519710164239-da123dc03ef4", "Sunlit room with a wooden chair") },
        { label: "Journal", href: "#", image: photo("1497366216548-37526070297c", "A long office corridor") },
        { label: "Contact", href: "#", image: photo("1500530855697-b586d89ba3ee", "Green hills under a pale sky") },
      ],
    },
    showMenu: { type: "boolean", default: true },
    showButtons: { type: "boolean", default: true },
    buttons: { type: "buttons", max: 1, default: [{ title: "Start a project", href: "#", variant: "primary" }] },
  },

  variants: {
    theme: themeVariant({ default: "dark", options: ["dark", "light", "accent"], map: THEME }),
  },

  tree: {
    role: "section",
    attrs: { "data-blok-swap": "reveal" },
    style: { base: { position: "sticky", top: "0", "z-index": "30", ...t("section") } },
    children: [
      {
        role: "gutter",
        children: [{
          role: "container", size: "large",
          children: [{
            tag: "div", key: "bar", attrs: { "data-blok-menu": "" },
            style: {
              base: {
                display: "grid", "grid-template-columns": "1fr auto", "align-items": "center",
                "column-gap": "1rem", "padding-top": "0.85rem", "padding-bottom": "0.85rem",
              },
              lg: { "grid-template-columns": "auto 1fr auto", "padding-top": "1rem", "padding-bottom": "1rem" },
            },
            children: [
              {
                tag: "a", key: "brand", bind: "brand", href: "brandHref", if: "showBrand",
                style: {
                  base: {
                    "grid-column-start": "1", "grid-column-end": "2", "grid-row-start": "1",
                    "font-family": "token(font-display)", "font-size": "1.25rem", "line-height": "1", "font-weight": "600",
                    "letter-spacing": "-0.03em", "text-decoration": "none", color: "inherit",
                  },
                },
              },
              {
                tag: "div", key: "tools",
                style: {
                  base: { display: "flex", "align-items": "center", "justify-content": "flex-end", "column-gap": "1rem", "grid-column-start": "2", "grid-column-end": "3", "grid-row-start": "1" },
                  lg: { "grid-column-start": "3", "grid-column-end": "4" },
                },
                children: [
                  {
                    tag: "div", key: "toggle", if: "showMenu", attrs: { "data-blok-menu-toggle": "" },
                    style: {
                      base: { display: "flex", cursor: "pointer", ...t("toggle"), "font-family": "token(font-mono)", "font-size": "0.8125rem", "line-height": "1", "letter-spacing": "0.08em", "text-transform": "uppercase" },
                      lg: { display: "none" },
                    },
                    children: [
                      { tag: "div", key: "menu-open", text: "Menu", attrs: { "data-blok-menu-open": "" } },
                      { tag: "div", key: "menu-close", text: "Close", attrs: { "data-blok-menu-close": "", hidden: "" } },
                    ],
                  },
                  { tag: "div", key: "actions", repeat: "buttons", if: "showButtons", style: { base: { display: "flex" } } },
                ],
              },
              {
                tag: "div", key: "panel", repeat: "links", if: "showLinks", attrs: { "data-blok-menu-panel": "" },
                style: {
                  base: {
                    display: "none", "flex-direction": "column", "align-items": "flex-start", "justify-content": "flex-start",
                    "row-gap": "0.15rem", "column-gap": "0rem", "padding-top": "0.5rem", "padding-bottom": "0.75rem",
                    "grid-column-start": "1", "grid-column-end": "3", "grid-row-start": "2",
                  },
                  lg: {
                    display: "flex", "flex-direction": "row", "align-items": "baseline", "justify-content": "flex-end",
                    "column-gap": "2rem", "row-gap": "0rem", "padding-top": "0rem", "padding-bottom": "0rem",
                    "grid-column-start": "2", "grid-column-end": "3", "grid-row-start": "1",
                  },
                },
                children: [{
                  tag: "a", key: "link", href: "item.href",
                  attrs: { "data-blok-swap-row": "", "data-blok-src": "=item.image.src", "data-blok-alt": "=item.image.alt" },
                  style: { base: { display: "flex", "align-items": "baseline", "column-gap": "0.55rem", "text-decoration": "none", "padding-top": "0.2rem", "padding-bottom": "0.2rem" } },
                  children: [
                    { tag: "div", key: "index", bind: "@index", style: { base: { "font-family": "token(font-mono)", "font-size": "0.75rem", "line-height": "1", "letter-spacing": "0.08em", ...t("index") } } },
                    {
                      tag: "div", key: "label", bind: "item.label",
                      style: {
                        base: { "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1", "font-weight": "600", "letter-spacing": "-0.04em", ...t("label") },
                        lg: { "font-size": "2.25rem" },
                      },
                    },
                  ],
                }],
              },
            ],
          }],
        }],
      },
      {
        tag: "div", key: "figure", attrs: { "data-blok-swap-figure": "" },
        style: { base: { width: "100%", height: "11rem", overflow: "hidden" }, lg: { height: "16rem" } },
        children: [{
          tag: "img", key: "figure-image", bind: "image",
          style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } },
        }],
      },
    ],
  },
};
