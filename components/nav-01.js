// Sticky bar: wordmark, a link row, and one action. Below the desktop breakpoint the links
// collapse behind a menu control.
import { themeBase, themeVariant } from "./_lib/themes.js";

const THEME = {
  section: { "background-color": "bg", color: "fg", "border-bottom-color": "line" },
  link: { color: "fg" },
  toggle: { color: "muted" },
  panel: { "border-top-color": "line" },
};
const t = (key) => themeBase("light", THEME[key]);
const links = [
  { label: "Work", href: "#" },
  { label: "Services", href: "#" },
  { label: "Studio", href: "#" },
  { label: "Journal", href: "#" },
  { label: "Contact", href: "#" },
];

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "nav-01",
  prefix: "nav1",
  name: "Nav / Bar",
  category: "nav",
  description: "Sticky bar with a wordmark, a link row, and one action. The links collapse into a menu on a phone.",

  props: {
    showLogo: { type: "boolean", default: false },
    logo: { type: "image", priority: true, default: { src: "https://placehold.co/120x32/f4f1ea/141414/png?text=Studio", alt: "Studio" } },
    showBrand: { type: "boolean", default: true },
    brand: { type: "text", default: "Studio" },
    brandHref: { type: "link", default: "#" },
    showLinks: { type: "boolean", default: true },
    links: { type: "list", fields: { label: "text", href: "link" }, default: links },
    showMenu: { type: "boolean", default: true },
    showButtons: { type: "boolean", default: true },
    buttons: { type: "buttons", max: 1, default: [{ title: "Start a project", href: "#", variant: "dark" }] },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  tree: {
    role: "section",
    style: {
      base: {
        position: "sticky", top: "0", "z-index": "20",
        "border-bottom-width": "1px", "border-bottom-style": "solid", "border-bottom-color": t("section")["border-bottom-color"],
        ...t("section"),
      },
    },
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
                "column-gap": "1rem", "row-gap": "0rem", "padding-top": "0.875rem", "padding-bottom": "0.875rem",
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
                tag: "img", key: "logo", bind: "logo", if: "showLogo",
                style: { base: { display: "block", width: "auto", height: "1.75rem", "object-fit": "contain", "grid-column-start": "1", "grid-column-end": "2", "grid-row-start": "1" } },
              },
              {
                tag: "div", key: "tools",
                style: {
                  base: { display: "flex", "align-items": "center", "column-gap": "1rem", "grid-column-start": "2", "grid-column-end": "3", "grid-row-start": "1" },
                  lg: { "grid-column-start": "3", "grid-column-end": "4" },
                },
                children: [
                  {
                    tag: "div", key: "toggle", if: "showMenu", attrs: { "data-blok-menu-toggle": "" },
                    style: {
                      base: { display: "flex", "align-items": "center", cursor: "pointer", ...t("toggle"), "font-family": "token(font-mono)", "font-size": "0.8125rem", "line-height": "1", "letter-spacing": "0.08em", "text-transform": "uppercase" },
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
                    "row-gap": "0.25rem", "column-gap": "0rem", "padding-top": "0.75rem", "padding-bottom": "0.5rem",
                    "border-top-width": "1px", "border-top-style": "solid", "border-top-color": t("panel")["border-top-color"],
                    "grid-column-start": "1", "grid-column-end": "3", "grid-row-start": "2",
                  },
                  lg: {
                    display: "flex", "flex-direction": "row", "align-items": "center", "justify-content": "center",
                    "column-gap": "1.75rem", "row-gap": "0rem", "padding-top": "0rem", "padding-bottom": "0rem",
                    "border-top-width": "0px", "grid-column-start": "2", "grid-column-end": "3", "grid-row-start": "1",
                  },
                },
                children: [{
                  tag: "a", key: "link", bind: "item.label", href: "item.href",
                  style: { base: { "text-decoration": "none", "font-size": "1rem", "line-height": "1.4", "padding-top": "0.4rem", "padding-bottom": "0.4rem", ...t("link") } },
                }],
              },
            ],
          }],
        }],
      },
    ],
  },
};
