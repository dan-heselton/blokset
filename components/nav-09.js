// A floating pill. Dropdowns hold icon cards, and one card opens a second panel.
import { border, mono, radius, themeBase, themeVariant } from "./_lib/themes.js";

const THEME = {
  bar: {
    "background-color": "bg", color: "fg",
    "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line",
  },
  "product-flyout": {
    "background-color": "bg",
    "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line",
  },
  "studio-flyout": {
    "background-color": "bg",
    "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line",
  },
  "library-flyout": {
    "background-color": "panel",
    "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line",
  },
  link: { color: "fg" },
  toggle: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const card = (glyph, title, note) => ({ glyph, title, note, href: "#" });
const show = (id) => `show${id[0].toUpperCase()}${id.slice(1)}`;
const pill = {
  "border-top-left-radius": "999px", "border-top-right-radius": "999px",
  "border-bottom-right-radius": "999px", "border-bottom-left-radius": "999px",
};

function sheet(key, side) {
  return {
    base: {
      display: "none", position: "static", top: "auto", left: "auto", width: "100%", "z-index": "5",
      "flex-direction": "column", "align-items": "stretch", "row-gap": "0.35rem",
      "padding-top": "0.5rem", "padding-right": "0.35rem", "padding-bottom": "0.5rem", "padding-left": "0.35rem",
      ...border(t(key)["border-top-color"]), ...radius("token(radius-card)"), ...t(key),
    },
    lg: side
      ? { position: "absolute", top: "0", left: "100%", width: "18rem", "z-index": "6", "padding-top": "0.75rem", "padding-right": "0.75rem", "padding-bottom": "0.75rem", "padding-left": "0.75rem" }
      : { position: "absolute", top: "100%", left: "0", width: "20rem", "padding-top": "0.75rem", "padding-right": "0.75rem", "padding-bottom": "0.75rem", "padding-left": "0.75rem" },
  };
}

function cards(id, prop) {
  return {
    tag: "div", key: `${id}-cards`, repeat: prop,
    style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.25rem" } },
    children: [{
      tag: "a", key: `${id}-card`, href: "item.href",
      style: {
        base: {
          display: "flex", "align-items": "flex-start", "column-gap": "0.75rem", "text-decoration": "none", color: "inherit",
          "padding-top": "0.65rem", "padding-right": "0.7rem", "padding-bottom": "0.65rem", "padding-left": "0.7rem",
          ...radius("token(radius)"),
        },
      },
      children: [
        { tag: "div", key: `${id}-glyph`, bind: "item.glyph", style: { base: { width: "1.5rem", "flex-shrink": "0", ...mono(), "letter-spacing": "0em", "text-transform": "none" } } },
        {
          tag: "div", key: `${id}-copy`,
          style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.15rem" } },
          children: [
            { tag: "div", key: `${id}-title`, bind: "item.title", style: { base: { "font-size": "0.9375rem", "line-height": "1.3", "font-weight": "600" } } },
            { tag: "div", key: `${id}-note`, bind: "item.note", style: { base: { "font-size": "0.8125rem", "line-height": "1.4", opacity: "0.72" } } },
          ],
        },
      ],
    }],
  };
}

function nest(id, labelProp, noteProp, glyphProp) {
  return {
    tag: "div", key: id, if: show(id), attrs: { "data-blok-drop": "level" },
    style: { base: { position: "relative", width: "100%" } },
    children: [
      {
        tag: "div", key: `${id}-trigger`, attrs: { "data-blok-drop-trigger": "" },
        style: {
          base: {
            display: "flex", "align-items": "flex-start", "column-gap": "0.75rem", cursor: "pointer",
            "padding-top": "0.65rem", "padding-right": "0.7rem", "padding-bottom": "0.65rem", "padding-left": "0.7rem",
          },
        },
        children: [
          { tag: "div", key: `${id}-icon`, bind: glyphProp, style: { base: { width: "1.5rem", "flex-shrink": "0", ...mono(), "letter-spacing": "0em", "text-transform": "none" } } },
          {
            tag: "div", key: `${id}-lead`,
            style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.15rem", "flex-grow": "1" } },
            children: [
              { tag: "div", key: `${id}-name`, bind: labelProp, style: { base: { "font-size": "0.9375rem", "line-height": "1.3", "font-weight": "600" } } },
              { tag: "div", key: `${id}-text`, bind: noteProp, style: { base: { "font-size": "0.8125rem", "line-height": "1.4", opacity: "0.72" } } },
            ],
          },
          { tag: "div", key: `${id}-chevron`, text: "›", decorative: true, style: { base: { "font-size": "1rem", "line-height": "1", "padding-top": "0.15rem" } } },
        ],
      },
      {
        tag: "div", key: `${id}-flyout`, attrs: { "data-blok-drop-panel": "" },
        style: sheet(`${id}-flyout`, true),
        children: [cards(id, `${id}Cards`)],
      },
    ],
  };
}

function menu(id, labelProp, listProp, nested) {
  return {
    tag: "div", key: id, if: show(id), attrs: { "data-blok-drop": "" },
    style: { base: { position: "relative", width: "100%" }, lg: { width: "auto" } },
    children: [
      {
        tag: "div", key: `${id}-trigger`, attrs: { "data-blok-drop-trigger": "" },
        style: { base: { display: "flex", "align-items": "center", "column-gap": "0.35rem", cursor: "pointer", "padding-top": "0.35rem", "padding-bottom": "0.35rem" } },
        children: [
          { tag: "div", key: `${id}-name`, bind: labelProp, style: { base: { "font-size": "0.9375rem", "line-height": "1.3" } } },
          { tag: "div", key: `${id}-icon`, text: "+", decorative: true, attrs: { "data-blok-drop-icon": "" }, style: { base: { "font-size": "1rem", "line-height": "1", "font-weight": "300" } } },
        ],
      },
      {
        tag: "div", key: `${id}-flyout`, attrs: { "data-blok-drop-panel": "" },
        style: sheet(`${id}-flyout`, false),
        children: [cards(id, listProp), nested].filter(Boolean),
      },
    ],
  };
}

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "nav-09",
  prefix: "nav9",
  name: "Nav / Pill layers",
  category: "nav",
  description: "A floating pill. Each dropdown is a stack of icon cards, and one card opens a second panel.",

  props: {
    showBrand: { type: "boolean", default: true },
    brand: { type: "text", default: "Studio" },
    brandHref: { type: "link", default: "#" },
    showProduct: { type: "boolean", default: true },
    productLabel: { type: "text", default: "Product" },
    productCards: {
      type: "list",
      fields: { glyph: "text", title: "text", note: "text", href: "link" },
      default: [
        card("01", "Gallery", "Browse every component."),
        card("02", "Spec", "One file, five outputs."),
      ],
    },
    showLibrary: { type: "boolean", default: true },
    libraryGlyph: { type: "text", default: "03" },
    libraryLabel: { type: "text", default: "Library" },
    libraryNote: { type: "text", default: "Themes, motion, and class systems." },
    libraryCards: {
      type: "list",
      fields: { glyph: "text", title: "text", note: "text", href: "link" },
      default: [
        card("Aa", "Client-First", "Finsweet class names."),
        card("Bb", "BEM", "Block, element, modifier."),
        card("Cc", "Flowkit", "Webflow variable styles."),
      ],
    },
    showStudio: { type: "boolean", default: true },
    studioLabel: { type: "text", default: "Studio" },
    studioCards: {
      type: "list",
      fields: { glyph: "text", title: "text", note: "text", href: "link" },
      default: [
        card("→", "People", "Who you will work with."),
        card("✉", "Contact", "Start a project."),
      ],
    },
    showLinks: { type: "boolean", default: true },
    links: { type: "list", fields: { label: "text", href: "link" }, default: [{ label: "Journal", href: "#" }] },
    showMenu: { type: "boolean", default: true },
    showButtons: { type: "boolean", default: true },
    buttons: { type: "buttons", max: 1, default: [{ title: "Get started", href: "#", variant: "dark" }] },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  tree: {
    role: "section",
    style: { base: { "background-color": "transparent", "padding-top": "1.25rem", "padding-bottom": "1.25rem" } },
    children: [{
      role: "gutter",
      children: [{
        role: "container", size: "large",
        children: [{
          tag: "div", key: "bar", attrs: { "data-blok-menu": "", "data-blok-drops": "" },
          style: {
            base: {
              display: "grid", "grid-template-columns": "1fr auto", "align-items": "center",
              "column-gap": "0.75rem", "row-gap": "0rem",
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
              tag: "div", key: "panel", attrs: { "data-blok-menu-panel": "" },
              style: {
                base: {
                  display: "none", "flex-direction": "column", "align-items": "stretch", "justify-content": "flex-start",
                  "row-gap": "0.25rem", "column-gap": "0rem", "padding-top": "0.75rem", "padding-bottom": "0.6rem",
                  "grid-column-start": "1", "grid-column-end": "3", "grid-row-start": "2",
                },
                lg: {
                  display: "flex", "flex-direction": "row", "align-items": "center", "justify-content": "center",
                  "column-gap": "1.25rem", "row-gap": "0rem", "padding-top": "0rem", "padding-bottom": "0rem",
                  "grid-column-start": "2", "grid-column-end": "3", "grid-row-start": "1",
                },
              },
              children: [
                menu("product", "productLabel", "productCards", nest("library", "libraryLabel", "libraryNote", "libraryGlyph")),
                menu("studio", "studioLabel", "studioCards"),
                {
                  tag: "div", key: "links", repeat: "links", if: "showLinks",
                  style: {
                    base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "0.15rem", "column-gap": "0rem" },
                    lg: { "flex-direction": "row", "align-items": "center", "column-gap": "1.25rem", "row-gap": "0rem" },
                  },
                  children: [{
                    tag: "a", key: "link", bind: "item.label", href: "item.href",
                    style: { base: { "text-decoration": "none", "font-size": "0.9375rem", "line-height": "1.3", "padding-top": "0.35rem", "padding-bottom": "0.35rem", ...t("link") } },
                  }],
                },
              ],
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
    }],
  },
};
