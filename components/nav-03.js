// A rounded bar that sits in the page. On a phone it opens downward; on a desktop the links stay in the row.
import { border, radius, themeBase, themeVariant } from "./_lib/themes.js";

const THEME = {
  bar: {
    "background-color": "bg", color: "fg",
    "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line",
  },
  link: { color: "fg" },
  toggle: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "nav-03",
  prefix: "nav3",
  name: "Nav / Pill",
  category: "nav",
  description: "A floating pill with the links in the row. On a phone the same links open inside the pill.",

  props: {
    showBrand: { type: "boolean", default: true },
    brand: { type: "text", default: "Studio" },
    brandHref: { type: "link", default: "#" },
    showLinks: { type: "boolean", default: true },
    links: {
      type: "list",
      fields: { label: "text", href: "link" },
      default: [
        { label: "Work", href: "#" },
        { label: "Services", href: "#" },
        { label: "Studio", href: "#" },
        { label: "Journal", href: "#" },
      ],
    },
    showMenu: { type: "boolean", default: true },
    showButtons: { type: "boolean", default: true },
    buttons: { type: "buttons", max: 1, default: [{ title: "Start a project", href: "#", variant: "dark" }] },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  tree: {
    role: "section",
    style: { base: { "background-color": "transparent", "padding-top": "1.25rem", "padding-bottom": "1.25rem" } },
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
                "column-gap": "0.75rem", "row-gap": "0rem", overflow: "hidden",
                "padding-top": "0.4rem", "padding-right": "0.4rem", "padding-bottom": "0.4rem", "padding-left": "1.1rem",
                ...radius("1.25rem"), ...border(t("bar")["border-top-color"]), ...t("bar"),
              },
              lg: {
                "grid-template-columns": "auto 1fr auto", "padding-left": "1.35rem",
                "border-top-left-radius": "999px", "border-top-right-radius": "999px",
                "border-bottom-right-radius": "999px", "border-bottom-left-radius": "999px",
              },
            },
            children: [
              {
                tag: "a", key: "brand", bind: "brand", href: "brandHref", if: "showBrand",
                style: {
                  base: {
                    "grid-column-start": "1", "grid-column-end": "2", "grid-row-start": "1",
                    "font-family": "token(font-display)", "font-size": "1.0625rem", "line-height": "1", "font-weight": "600",
                    "letter-spacing": "-0.03em", "text-decoration": "none", color: "inherit",
                  },
                },
              },
              {
                tag: "div", key: "panel", repeat: "links", if: "showLinks", attrs: { "data-blok-menu-panel": "" },
                style: {
                  base: {
                    display: "none", "flex-direction": "column", "align-items": "flex-start", "justify-content": "flex-start",
                    "row-gap": "0.15rem", "column-gap": "0rem", "padding-top": "0.75rem", "padding-bottom": "0.6rem",
                    "grid-column-start": "1", "grid-column-end": "3", "grid-row-start": "2",
                  },
                  lg: {
                    display: "flex", "flex-direction": "row", "align-items": "center", "justify-content": "center",
                    "column-gap": "1.5rem", "row-gap": "0rem", "padding-top": "0rem", "padding-bottom": "0rem",
                    "grid-column-start": "2", "grid-column-end": "3", "grid-row-start": "1",
                  },
                },
                children: [{
                  tag: "a", key: "link", bind: "item.label", href: "item.href",
                  style: { base: { "text-decoration": "none", "font-size": "0.9375rem", "line-height": "1.4", "padding-top": "0.35rem", "padding-bottom": "0.35rem", ...t("link") } },
                }],
              },
              {
                tag: "div", key: "tools",
                style: {
                  base: { display: "flex", "align-items": "center", "column-gap": "0.75rem", "grid-column-start": "2", "grid-column-end": "3", "grid-row-start": "1" },
                  lg: { "grid-column-start": "3", "grid-column-end": "4" },
                },
                children: [
                  {
                    tag: "div", key: "toggle", if: "showMenu", attrs: { "data-blok-menu-toggle": "" },
                    style: {
                      base: { display: "flex", cursor: "pointer", ...t("toggle"), "font-family": "token(font-mono)", "font-size": "0.75rem", "line-height": "1", "letter-spacing": "0.08em", "text-transform": "uppercase" },
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
            ],
          }],
        }],
      },
    ],
  },
};
