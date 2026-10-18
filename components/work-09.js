// Four project cards. Clicking one opens a full-page sheet with the project detail.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  title: { color: "fg" },
  meta: { color: "muted" },
  index: { color: "muted" },
  view: { "background-color": "glyph", color: "card" },
  dialog: { "background-color": "bg" },
  panel: { "background-color": "glyph", color: "card" },
  close: { "background-color": "panel", color: "fg" },
};

const t = (key) => themeBase("dark", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1200&q=80`, alt });
const pill = {
  "border-top-left-radius": "999px", "border-top-right-radius": "999px",
  "border-bottom-right-radius": "999px", "border-bottom-left-radius": "999px",
};

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "work-09",
  prefix: "work9",
  name: "Work / Sheet grid",
  category: "work",
  description: "Four project cards in a row. Clicking a card opens a full-page sheet with the image, copy, and meta.",

  props: {
    viewLabel: { type: "text", default: "View" },
    closeLabel: { type: "text", default: "×" },
    projects: {
      type: "list",
      fields: {
        title: "text", meta: "text", category: "text", body: "text",
        client: "text", year: "text", scope: "text", place: "text", image: "image",
      },
      default: [
        {
          title: "Callbox", meta: "Brand identity | 2025", category: "Brand Identity",
          body: "A calling card for a telecom start-up that wanted to feel like a street corner, not a data centre. One colour, one shape, and a booth on every corner of the city.",
          client: "Callbox Mobile", year: "2025", scope: "Identity, signage", place: "Lisbon",
          image: photo("1558618666-fcd25c85cd64", "Red payphone on a textured wall"),
        },
        {
          title: "Stillwater", meta: "Hospitality | 2024", category: "Hospitality",
          body: "A lakeside hotel brand built around quiet evenings and long tables. Soft type, warm photography, and a reservation flow that stays out of the way.",
          client: "Stillwater Lodge", year: "2024", scope: "Brand, website", place: "Vermont",
          image: photo("1540541338287-41700207dee6", "Person swimming in a pool at dusk"),
        },
        {
          title: "Sandstone", meta: "Material study | 2024", category: "Material study",
          body: "A research booklet for a stone yard: close frames, short captions, and a grid that lets the material do the talking.",
          client: "Sandstone Co.", year: "2024", scope: "Editorial", place: "Arizona",
          image: photo("1506905925346-21bda4d32df4", "Wavy red rock canyon walls"),
        },
        {
          title: "Ristretto", meta: "Editorial | 2023", category: "Editorial",
          body: "A coffee journal for late nights: dark paper, quiet photos, and short essays about the shops that stay open.",
          client: "Ristretto Press", year: "2023", scope: "Magazine", place: "Portland",
          image: photo("1495474472287-4d71bcdd2085", "Hands with a coffee cup and an open book"),
        },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "dark", options: ["dark", "light"], map: THEME }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.06, targets: ["grid"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component", attrs: { "data-blok-sheet": "" },
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2rem" } },
        children: [
          {
            tag: "div", key: "grid", repeat: "projects",
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "grid-column-gap": "1rem", "grid-row-gap": "2rem" },
              md: { "grid-template-columns": "1fr 1fr" },
              lg: { "grid-template-columns": "1fr 1fr 1fr 1fr", "grid-column-gap": "1.25rem" },
            },
            children: [{
              tag: "div", key: "card", attrs: { "data-blok-sheet-item": "" },
              style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.85rem", cursor: "pointer" } },
              children: [
                {
                  tag: "div", key: "media",
                  style: { base: { position: "relative", overflow: "hidden", "aspect-ratio": "3 / 4", ...radius("1rem") } },
                  children: [
                    { tag: "img", key: "image", bind: "item.image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } },
                    {
                      tag: "div", key: "view", bind: "viewLabel",
                      style: {
                        base: {
                          position: "absolute", left: "50%", bottom: "1rem",
                          "margin-left": "-2.25rem", "padding-top": "0.55rem", "padding-right": "1rem", "padding-bottom": "0.55rem", "padding-left": "1rem",
                          "font-size": "0.8125rem", "font-weight": "600", ...pill, ...t("view"),
                        },
                      },
                    },
                  ],
                },
                {
                  tag: "div", key: "caption",
                  style: { base: { display: "flex", "justify-content": "space-between", "align-items": "baseline", "column-gap": "0.75rem" } },
                  children: [
                    { tag: "h3", key: "title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.125rem", "font-weight": "600", ...t("title") } } },
                    { tag: "div", key: "index", bind: "@index", style: { base: { ...mono(), "font-size": "0.75rem", ...t("index") } } },
                  ],
                },
                { tag: "div", key: "meta", bind: "item.meta", style: { base: { "font-size": "0.8125rem", ...t("meta") } } },
              ],
            }],
          },
          {
            tag: "div", key: "panels", repeat: "projects",
            children: [{
              tag: "div", key: "panel", attrs: { "data-blok-sheet-panel": "", hidden: "" },
              style: {
                base: {
                  display: "grid", "grid-template-columns": "1fr", "align-items": "stretch",
                  "column-gap": "0rem", "row-gap": "1.5rem", width: "100%", "max-width": "72rem",
                  "padding-top": "1.25rem", "padding-right": "1.25rem", "padding-bottom": "1.25rem", "padding-left": "1.25rem",
                  ...radius("1.75rem"), ...t("panel"),
                },
                lg: {
                  "grid-template-columns": "0.9fr 1.1fr", "column-gap": "2.5rem", "row-gap": "0rem",
                  "padding-top": "1.75rem", "padding-right": "1.75rem", "padding-bottom": "1.75rem", "padding-left": "1.75rem",
                },
              },
              children: [
                {
                  tag: "div", key: "panel-media",
                  style: { base: { overflow: "hidden", "aspect-ratio": "3 / 4", "min-height": "0rem", ...radius("0.25rem") }, lg: { "aspect-ratio": "auto", "min-height": "28rem" } },
                  children: [{ tag: "img", key: "panel-image", bind: "item.image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } }],
                },
                {
                  tag: "div", key: "panel-body",
                  style: { base: { display: "flex", "flex-direction": "column", "justify-content": "space-between", "row-gap": "2rem", "padding-top": "0.5rem", "padding-bottom": "0.5rem" } },
                  children: [
                    {
                      tag: "div", key: "panel-top",
                      style: { base: { display: "flex", "justify-content": "space-between", "align-items": "flex-start", "column-gap": "1rem" } },
                      children: [
                        {
                          tag: "div", key: "panel-index",
                          style: { base: { display: "flex", "column-gap": "0.5rem", ...mono(), "font-size": "0.75rem", ...t("meta") } },
                          children: [
                            { tag: "div", key: "panel-num", bind: "@index" },
                            { tag: "div", key: "panel-cat", bind: "item.category" },
                          ],
                        },
                      ],
                    },
                    {
                      tag: "div", key: "panel-copy",
                      style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1.25rem" } },
                      children: [
                        { tag: "h2", key: "panel-title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "3rem", "line-height": "1", "font-weight": "700", "letter-spacing": "-0.03em" }, lg: { "font-size": "4.5rem" } } },
                        { tag: "p", key: "panel-text", bind: "item.body", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "36rem", "font-size": "1.0625rem", "line-height": "1.6" } } },
                      ],
                    },
                    {
                      tag: "div", key: "facts",
                      style: { base: { display: "grid", "grid-template-columns": "1fr 1fr", "grid-column-gap": "1.5rem", "grid-row-gap": "0rem" } },
                      children: [
                        {
                          tag: "div", key: "fact-client",
                          style: { base: { "padding-top": "0.85rem", "padding-bottom": "0.85rem", "border-top-width": "1px", "border-top-style": "solid", "border-top-color": "token(ink)" } },
                          children: [
                            { tag: "div", key: "fact-client-label", text: "Client", style: { base: { ...mono(), "font-size": "0.6875rem", "margin-bottom": "0.35rem", ...t("meta") } } },
                            { tag: "div", key: "fact-client-value", bind: "item.client", style: { base: { "font-size": "0.9375rem", "font-weight": "600" } } },
                          ],
                        },
                        {
                          tag: "div", key: "fact-year",
                          style: { base: { "padding-top": "0.85rem", "padding-bottom": "0.85rem", "border-top-width": "1px", "border-top-style": "solid", "border-top-color": "token(ink)" } },
                          children: [
                            { tag: "div", key: "fact-year-label", text: "Year", style: { base: { ...mono(), "font-size": "0.6875rem", "margin-bottom": "0.35rem", ...t("meta") } } },
                            { tag: "div", key: "fact-year-value", bind: "item.year", style: { base: { "font-size": "0.9375rem", "font-weight": "600" } } },
                          ],
                        },
                        {
                          tag: "div", key: "fact-scope",
                          style: { base: { "padding-top": "0.85rem", "padding-bottom": "0.85rem", "border-top-width": "1px", "border-top-style": "solid", "border-top-color": "token(ink)" } },
                          children: [
                            { tag: "div", key: "fact-scope-label", text: "Scope", style: { base: { ...mono(), "font-size": "0.6875rem", "margin-bottom": "0.35rem", ...t("meta") } } },
                            { tag: "div", key: "fact-scope-value", bind: "item.scope", style: { base: { "font-size": "0.9375rem", "font-weight": "600" } } },
                          ],
                        },
                        {
                          tag: "div", key: "fact-place",
                          style: { base: { "padding-top": "0.85rem", "padding-bottom": "0.85rem", "border-top-width": "1px", "border-top-style": "solid", "border-top-color": "token(ink)" } },
                          children: [
                            { tag: "div", key: "fact-place-label", text: "Place", style: { base: { ...mono(), "font-size": "0.6875rem", "margin-bottom": "0.35rem", ...t("meta") } } },
                            { tag: "div", key: "fact-place-value", bind: "item.place", style: { base: { "font-size": "0.9375rem", "font-weight": "600" } } },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            }],
          },
          {
            tag: "div", key: "dialog", attrs: { "data-blok-sheet-dialog": "", hidden: "" },
            style: {
              base: {
                position: "fixed", top: "0", right: "0", bottom: "0", left: "0", "z-index": "40",
                display: "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center",
                "padding-top": "1.25rem", "padding-right": "1.25rem", "padding-bottom": "1.25rem", "padding-left": "1.25rem",
                ...t("dialog"),
              },
            },
            children: [
              {
                tag: "div", key: "close", bind: "closeLabel", attrs: { "data-blok-sheet-close": "" },
                style: {
                  base: {
                    position: "absolute", top: "1.25rem", right: "1.25rem", cursor: "pointer",
                    width: "2.5rem", height: "2.5rem", display: "flex", "align-items": "center", "justify-content": "center",
                    "font-size": "1.25rem", "line-height": "1", ...pill, ...t("close"), "z-index": "2",
                  },
                },
              },
              { tag: "div", key: "mount", attrs: { "data-blok-sheet-mount": "" }, style: { base: { width: "100%", "max-width": "72rem" } } },
            ],
          },
        ],
      }),
    ],
  },
};
