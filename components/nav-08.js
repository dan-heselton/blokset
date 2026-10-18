// Three dropdowns. A row with a chevron opens a second list beside it.
import { border, radius, themeBase, themeVariant } from "./_lib/themes.js";

const THEME = {
  section: { "background-color": "bg", color: "fg", "border-bottom-color": "line" },
  "work-flyout": {
    "background-color": "bg",
    "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line",
  },
  "studio-flyout": {
    "background-color": "bg",
    "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line",
  },
  "visit-flyout": {
    "background-color": "bg",
    "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line",
  },
  "cases-flyout": {
    "background-color": "bg",
    "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line",
  },
  "people-flyout": {
    "background-color": "bg",
    "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line",
  },
  "places-flyout": {
    "background-color": "bg",
    "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line",
  },
  page: { color: "fg" },
  toggle: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const group = (labels) => labels.map((label) => ({ label, href: "#" }));
const show = (id) => `show${id[0].toUpperCase()}${id.slice(1)}`;

function panel(key, side) {
  return {
    base: {
      display: "none", position: "static", top: "auto", left: "auto", width: "100%", "z-index": "5",
      "flex-direction": "column", "align-items": "stretch", "row-gap": "0.1rem",
      "padding-top": "0.35rem", "padding-right": "0.25rem", "padding-bottom": "0.35rem", "padding-left": "0.25rem",
      ...border(t(key)["border-top-color"]), ...radius("token(radius)"), ...t(key),
    },
    lg: side
      ? { position: "absolute", top: "0", left: "100%", width: "14rem", "z-index": "6", "padding-top": "0.85rem", "padding-right": "1rem", "padding-bottom": "0.85rem", "padding-left": "1rem" }
      : { position: "absolute", top: "100%", left: "0", width: "16rem", "padding-top": "0.85rem", "padding-right": "1rem", "padding-bottom": "0.85rem", "padding-left": "1rem" },
  };
}

function links(id, prop) {
  return {
    tag: "div", key: `${id}-links`, repeat: prop,
    style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.1rem" } },
    children: [{
      tag: "a", key: `${id}-link`, bind: "item.label", href: "item.href",
      style: { base: { "text-decoration": "none", color: "inherit", "font-size": "0.9375rem", "line-height": "1.4", "padding-top": "0.4rem", "padding-bottom": "0.4rem" } },
    }],
  };
}

function nest(id, labelProp) {
  return {
    tag: "div", key: id, if: show(id), attrs: { "data-blok-drop": "level" },
    style: { base: { position: "relative", width: "100%" } },
    children: [
      {
        tag: "div", key: `${id}-trigger`, attrs: { "data-blok-drop-trigger": "" },
        style: { base: { display: "flex", "align-items": "center", "justify-content": "space-between", "column-gap": "0.75rem", cursor: "pointer", "padding-top": "0.4rem", "padding-bottom": "0.4rem" } },
        children: [
          { tag: "div", key: `${id}-label`, bind: labelProp, style: { base: { "font-size": "0.9375rem", "line-height": "1.4" } } },
          { tag: "div", key: `${id}-chevron`, text: "›", decorative: true, style: { base: { "font-size": "1rem", "line-height": "1" } } },
        ],
      },
      {
        tag: "div", key: `${id}-flyout`, attrs: { "data-blok-drop-panel": "" },
        style: panel(`${id}-flyout`, true),
        children: [links(id, `${id}Links`)],
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
        style: { base: { display: "flex", "align-items": "center", "column-gap": "0.4rem", cursor: "pointer", "padding-top": "0.45rem", "padding-bottom": "0.45rem" } },
        children: [
          { tag: "div", key: `${id}-name`, bind: labelProp, style: { base: { "font-size": "1rem", "line-height": "1.3" } } },
          { tag: "div", key: `${id}-icon`, text: "+", decorative: true, attrs: { "data-blok-drop-icon": "" }, style: { base: { "font-size": "1rem", "line-height": "1", "font-weight": "300" } } },
        ],
      },
      {
        tag: "div", key: `${id}-flyout`, attrs: { "data-blok-drop-panel": "" },
        style: panel(`${id}-flyout`, false),
        children: [links(id, listProp), nested],
      },
    ],
  };
}

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "nav-08",
  prefix: "nav8",
  name: "Nav / Flyout",
  category: "nav",
  description: "Three dropdowns. A row with a chevron opens a second list beside it on a desktop, and under it on a phone.",

  props: {
    showBrand: { type: "boolean", default: true },
    brand: { type: "text", default: "Studio" },
    brandHref: { type: "link", default: "#" },
    showWork: { type: "boolean", default: true },
    workLabel: { type: "text", default: "Work" },
    workLinks: { type: "list", fields: { label: "text", href: "link" }, default: group(["Selected projects", "Archive"]) },
    showCases: { type: "boolean", default: true },
    casesLabel: { type: "text", default: "Case studies" },
    casesLinks: { type: "list", fields: { label: "text", href: "link" }, default: group(["North Shore Arts", "Halyard", "Saltbox Bakery"]) },
    showStudio: { type: "boolean", default: true },
    studioLabel: { type: "text", default: "Studio" },
    studioLinks: { type: "list", fields: { label: "text", href: "link" }, default: group(["Services", "Careers"]) },
    showPeople: { type: "boolean", default: true },
    peopleLabel: { type: "text", default: "People" },
    peopleLinks: { type: "list", fields: { label: "text", href: "link" }, default: group(["Design", "Engineering", "Strategy"]) },
    showVisit: { type: "boolean", default: true },
    visitLabel: { type: "text", default: "Visit" },
    visitLinks: { type: "list", fields: { label: "text", href: "link" }, default: group(["Contact", "Journal"]) },
    showPlaces: { type: "boolean", default: true },
    placesLabel: { type: "text", default: "Places" },
    placesLinks: { type: "list", fields: { label: "text", href: "link" }, default: group(["Rockport", "Gloucester"]) },
    showPages: { type: "boolean", default: true },
    pages: { type: "list", fields: { label: "text", href: "link" }, default: group(["Journal"]) },
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
        position: "sticky", top: "0", "z-index": "30",
        "border-bottom-width": "1px", "border-bottom-style": "solid", "border-bottom-color": t("section")["border-bottom-color"],
        ...t("section"),
      },
    },
    children: [{
      role: "gutter",
      children: [{
        role: "container", size: "large",
        children: [{
          tag: "div", key: "bar", attrs: { "data-blok-menu": "", "data-blok-drops": "" },
          style: {
            base: {
              display: "grid", "grid-template-columns": "1fr auto", "align-items": "center",
              "column-gap": "1rem", "row-gap": "0rem", "padding-top": "0.75rem", "padding-bottom": "0.75rem",
            },
            lg: { "grid-template-columns": "auto 1fr auto", "padding-top": "0.85rem", "padding-bottom": "0.85rem" },
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
                base: { display: "flex", "align-items": "center", "column-gap": "1rem", "grid-column-start": "2", "grid-column-end": "3", "grid-row-start": "1" },
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
              tag: "div", key: "panel", attrs: { "data-blok-menu-panel": "" },
              style: {
                base: {
                  display: "none", "flex-direction": "column", "align-items": "stretch", "justify-content": "flex-start",
                  "row-gap": "0.25rem", "column-gap": "0rem", "padding-top": "0.75rem", "padding-bottom": "0.5rem",
                  "grid-column-start": "1", "grid-column-end": "3", "grid-row-start": "2",
                },
                lg: {
                  display: "flex", "flex-direction": "row", "align-items": "center", "justify-content": "center",
                  "column-gap": "1.5rem", "row-gap": "0rem", "padding-top": "0rem", "padding-bottom": "0rem",
                  "grid-column-start": "2", "grid-column-end": "3", "grid-row-start": "1",
                },
              },
              children: [
                menu("work", "workLabel", "workLinks", nest("cases", "casesLabel")),
                menu("studio", "studioLabel", "studioLinks", nest("people", "peopleLabel")),
                menu("visit", "visitLabel", "visitLinks", nest("places", "placesLabel")),
                {
                  tag: "div", key: "pages", repeat: "pages", if: "showPages",
                  style: {
                    base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "0.15rem", "column-gap": "0rem" },
                    lg: { "flex-direction": "row", "align-items": "center", "column-gap": "1.5rem", "row-gap": "0rem" },
                  },
                  children: [{
                    tag: "a", key: "page", bind: "item.label", href: "item.href",
                    style: { base: { "text-decoration": "none", "font-size": "1rem", "line-height": "1.3", "padding-top": "0.45rem", "padding-bottom": "0.45rem", ...t("page") } },
                  }],
                },
              ],
            },
          ],
        }],
      }],
    }],
  },
};
