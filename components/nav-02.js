// A quiet bar. Opening it covers the page with a short list of large links.
import { themeBase, themeVariant, mono } from "./_lib/themes.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  panel: { "background-color": "bg", color: "fg" },
  link: { color: "fg" },
  note: { color: "muted" },
  toggle: { color: "fg" },
};
const t = (key) => themeBase("dark", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "nav-02",
  prefix: "nav2",
  name: "Nav / Overlay",
  category: "nav",
  description: "A slim bar that opens a full-screen list of large links. The links rise in, and Escape closes the menu.",

  props: {
    showBrand: { type: "boolean", default: true },
    brand: { type: "text", default: "Studio" },
    brandHref: { type: "link", default: "#" },
    showLinks: { type: "boolean", default: true },
    links: {
      type: "list",
      fields: { label: "text", href: "link", note: "text" },
      default: [
        { label: "Work", href: "#", note: "Selected projects" },
        { label: "Services", href: "#", note: "What we take on" },
        { label: "Studio", href: "#", note: "Four people, Rockport" },
        { label: "Journal", href: "#", note: "Notes from the work" },
        { label: "Contact", href: "#", note: "Write, call, or visit" },
      ],
    },
    showButtons: { type: "boolean", default: true },
    buttons: { type: "buttons", max: 1, default: [{ title: "Start a project", href: "#", variant: "primary" }] },
  },

  variants: {
    theme: themeVariant({ default: "dark", options: ["dark", "light", "accent"], map: THEME }),
  },

  tree: {
    role: "section",
    attrs: { "data-blok-menu": "overlay" },
    style: { base: { position: "sticky", top: "0", "z-index": "30", ...t("section") } },
    children: [
      {
        role: "gutter",
        children: [{
          role: "container", size: "large",
          children: [{
            tag: "div", key: "bar",
            style: {
              base: { position: "relative", "z-index": "2", display: "flex", "align-items": "center", "justify-content": "space-between", "column-gap": "1rem", "padding-top": "0.875rem", "padding-bottom": "0.875rem" },
              lg: { "padding-top": "1.125rem", "padding-bottom": "1.125rem" },
            },
            children: [
              {
                tag: "a", key: "brand", bind: "brand", href: "brandHref", if: "showBrand",
                style: { base: { "font-family": "token(font-display)", "font-size": "1.25rem", "line-height": "1", "font-weight": "600", "letter-spacing": "-0.03em", "text-decoration": "none", color: "inherit" } },
              },
              {
                tag: "div", key: "tools",
                style: { base: { display: "flex", "align-items": "center", "column-gap": "1.25rem" } },
                children: [
                  {
                    tag: "div", key: "toggle", attrs: { "data-blok-menu-toggle": "" },
                    style: { base: { display: "flex", "align-items": "center", cursor: "pointer", ...mono(), ...t("toggle") } },
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
      {
        tag: "div", key: "panel", if: "showLinks", attrs: { "data-blok-menu-panel": "" },
        style: {
          base: {
            display: "none", position: "fixed", top: "0", right: "0", bottom: "0", left: "0", "z-index": "1",
            "flex-direction": "column", "justify-content": "flex-end", "row-gap": "0rem",
            "padding-top": "6rem", "padding-right": "5%", "padding-bottom": "2.5rem", "padding-left": "5%",
            ...t("panel"),
          },
          lg: { "padding-bottom": "4rem" },
        },
        children: [{
          tag: "div", key: "list", repeat: "links",
          style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.25rem", width: "100%", "max-width": "80rem", "margin-left": "auto", "margin-right": "auto" } },
          children: [{
            tag: "div", key: "item",
            style: {
              base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "justify-content": "flex-start", "row-gap": "0.15rem", "column-gap": "0rem" },
              lg: { "flex-direction": "row", "align-items": "baseline", "justify-content": "space-between", "column-gap": "2rem" },
            },
            children: [
              {
                tag: "a", key: "link", bind: "item.label", href: "item.href",
                style: {
                  base: { "text-decoration": "none", "font-family": "token(font-display)", "font-size": "2.75rem", "line-height": "1.05", "font-weight": "600", "letter-spacing": "-0.04em", ...t("link") },
                  md: { "font-size": "4rem" },
                  lg: { "font-size": "5rem" },
                },
              },
              { tag: "div", key: "note", bind: "item.note", style: { base: { ...mono(), "padding-bottom": "0.35rem", ...t("note") } } },
            ],
          }],
        }],
      },
    ],
  },
};
