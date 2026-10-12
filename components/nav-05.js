// One trigger opens a full-width panel: three link columns and a featured photograph.
import { radius, themeBase, themeVariant } from "./_lib/themes.js";

const THEME = {
  section: { "background-color": "bg", color: "fg", "border-bottom-color": "line" },
  mega: { "background-color": "bg", "border-top-color": "line" },
  "work-title": { color: "muted" },
  "studio-title": { color: "muted" },
  "visit-title": { color: "muted" },
  "work-link": { color: "fg" },
  "studio-link": { color: "fg" },
  "visit-link": { color: "fg" },
  page: { color: "fg" },
  "feature-title": { color: "fg" },
  toggle: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1200&q=80`, alt });
const group = (labels) => labels.map((label) => ({ label, href: "#" }));

function column(id, title) {
  return {
    tag: "div", key: `${id}-col`,
    style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.35rem", "min-width": "0rem" }, lg: { "min-width": "10rem" } },
    children: [
      { tag: "div", key: `${id}-title`, bind: title, style: { base: { "font-family": "token(font-mono)", "font-size": "0.75rem", "line-height": "1.4", "letter-spacing": "0.08em", "text-transform": "uppercase", "margin-bottom": "0.35rem", ...t(`${id}-title`) } } },
      {
        tag: "div", key: `${id}-links`, repeat: `${id}Links`,
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.15rem" } },
        children: [{
          tag: "a", key: `${id}-link`, bind: "item.label", href: "item.href",
          style: { base: { "text-decoration": "none", "font-size": "1.0625rem", "line-height": "1.45", ...t(`${id}-link`) } },
        }],
      },
    ],
  };
}

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "nav-05",
  prefix: "nav5",
  name: "Nav / Mega",
  category: "nav",
  description: "A full-width panel under the bar, with link columns and a featured photograph. It opens on hover or tap.",

  props: {
    showBrand: { type: "boolean", default: true },
    brand: { type: "text", default: "Studio" },
    brandHref: { type: "link", default: "#" },
    showMega: { type: "boolean", default: true },
    megaLabel: { type: "text", default: "Work" },
    workTitle: { type: "text", default: "Projects" },
    workLinks: { type: "list", fields: { label: "text", href: "link" }, default: group(["North Shore Arts", "Halyard", "Saltbox Bakery"]) },
    studioTitle: { type: "text", default: "Studio" },
    studioLinks: { type: "list", fields: { label: "text", href: "link" }, default: group(["Services", "People", "Careers"]) },
    visitTitle: { type: "text", default: "Visit" },
    visitLinks: { type: "list", fields: { label: "text", href: "link" }, default: group(["Rockport", "Gloucester", "Contact"]) },
    showFeature: { type: "boolean", default: true },
    feature: { type: "image", default: photo("1519710164239-da123dc03ef4", "Sunlit room with a wooden chair") },
    featureTitle: { type: "text", default: "North Shore Arts, 2024" },
    featureHref: { type: "link", default: "#" },
    showPages: { type: "boolean", default: true },
    pages: { type: "list", fields: { label: "text", href: "link" }, default: group(["Journal", "Contact"]) },
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
                {
                  tag: "div", key: "mega-drop", if: "showMega", attrs: { "data-blok-drop": "mega" },
                  style: { base: { position: "static", width: "100%" }, lg: { width: "auto" } },
                  children: [
                    {
                      tag: "div", key: "mega-trigger", attrs: { "data-blok-drop-trigger": "" },
                      style: { base: { display: "flex", "align-items": "center", "column-gap": "0.4rem", cursor: "pointer", "padding-top": "0.45rem", "padding-bottom": "0.45rem" } },
                      children: [
                        { tag: "div", key: "mega-label", bind: "megaLabel", style: { base: { "font-size": "1rem", "line-height": "1.3" } } },
                        { tag: "div", key: "mega-icon", text: "+", decorative: true, attrs: { "data-blok-drop-icon": "" }, style: { base: { "font-size": "1rem", "line-height": "1", "font-weight": "300" } } },
                      ],
                    },
                    {
                      tag: "div", key: "mega", attrs: { "data-blok-drop-panel": "" },
                      style: {
                        base: {
                          display: "none", position: "static", top: "auto", right: "auto", left: "auto", width: "100%", "z-index": "5",
                          "flex-direction": "column", "align-items": "stretch", "justify-content": "flex-start",
                          "row-gap": "1.5rem", "column-gap": "0rem",
                          "padding-top": "1.25rem", "padding-right": "0rem", "padding-bottom": "1.25rem", "padding-left": "0rem",
                          "border-top-width": "1px", "border-top-style": "solid", "border-top-color": t("mega")["border-top-color"],
                          ...t("mega"),
                        },
                        lg: {
                          position: "absolute", top: "100%", right: "0", left: "0", width: "auto",
                          "flex-direction": "row", "align-items": "flex-start", "column-gap": "2.5rem", "row-gap": "0rem",
                          "padding-top": "2rem", "padding-right": "5%", "padding-bottom": "2rem", "padding-left": "5%",
                        },
                      },
                      children: [
                        column("work", "workTitle"),
                        column("studio", "studioTitle"),
                        column("visit", "visitTitle"),
                        {
                          tag: "a", key: "feature", href: "featureHref", if: "showFeature",
                          style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.6rem", "text-decoration": "none", width: "100%", "margin-left": "0" }, lg: { width: "22rem", "margin-left": "auto" } },
                          children: [
                            {
                              tag: "img", key: "feature-image", bind: "feature",
                              style: { base: { display: "block", width: "100%", height: "9rem", "object-fit": "cover", ...radius("token(radius-card)") }, lg: { height: "11rem" } },
                            },
                            { tag: "div", key: "feature-title", bind: "featureTitle", style: { base: { "font-size": "0.9375rem", "line-height": "1.4", ...t("feature-title") } } },
                          ],
                        },
                      ],
                    },
                  ],
                },
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
