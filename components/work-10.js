// Work index with list, grid, and gallery modes plus a floating mode bar.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  wordmark: { color: "fg" },
  "nav-link": { color: "muted" },
  "mode-bar": { "background-color": "panel", color: "fg", "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line" },
  mode: { color: "muted" },
  "mode-on": { "background-color": "fg", color: "bg" },
  "list-title": { color: "fg" },
  "grid-title": { color: "fg" },
  "gallery-meta": { color: "muted" },
  "list-panel": { "border-top-color": "line" },
  "list-row": { "border-bottom-color": "line" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=900&q=80`, alt });
const pill = {
  "border-top-left-radius": "999px", "border-top-right-radius": "999px",
  "border-bottom-right-radius": "999px", "border-bottom-left-radius": "999px",
};
const nav = (label, href) => ({ label, href });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "work-10",
  prefix: "work10",
  name: "Work / Index modes",
  category: "work",
  description: "A wordmark header, nav links, and three layout modes — list rows, a card grid, and a stacked gallery — switched from a floating bar.",

  props: {
    showWordmark: { type: "boolean", default: true },
    wordmark: { type: "text", default: "Kononenko Architectural Bureau" },
    navLinks: {
      type: "list",
      fields: { label: "text", href: "link" },
      default: [nav("Index", "#"), nav("Work", "#"), nav("About", "#"), nav("Contact", "#")],
    },
    projects: {
      type: "list",
      fields: { title: "text", image: "image", image2: "image", image3: "image" },
      default: [
        {
          title: "Pokrovskoe Private House",
          image: photo("1486406146926-c627a92ad1ab", "Glass building facade"),
          image2: photo("1519710164239-da123dc03ef4", "Sunlit interior corner"),
          image3: photo("1497366216548-37526070297c", "Long desk in bright office"),
        },
        {
          title: "Millenium Private Park",
          image: photo("1500530855697-b586d89ba3ee", "Green hills under soft sky"),
          image2: photo("1469474968028-56623f02e42e", "Rolling landscape"),
          image3: photo("1501594907352-04cda38ebc29", "Bridge over calm water"),
        },
        {
          title: "Bolshevik Residential",
          image: photo("1517248135467-4c7edcad34c4", "Warm interior dining room"),
          image2: photo("1540541338287-41700207dee6", "Pool terrace at dusk"),
          image3: photo("1506905925346-21bda4d32df4", "Red rock canyon walls"),
        },
        {
          title: "Vision Mansion",
          image: photo("1558618666-fcd25c85cd64", "Textured wall in harsh light"),
          image2: photo("1573496359142-b8d87734a5a2", "Portrait in soft studio light"),
          image3: photo("1438761681033-6461ffad8d80", "Portrait in warm light"),
        },
      ],
    },
  },

  variants: {
    theme: themeVariant({
      default: "light",
      options: ["light", "dark"],
      map: {
        section: THEME.section,
        wordmark: THEME.wordmark,
        "nav-link": THEME["nav-link"],
        "mode-bar": THEME["mode-bar"],
        "list-title": THEME["list-title"],
        "grid-title": THEME["grid-title"],
        "gallery-meta": THEME["gallery-meta"],
        "list-panel": THEME["list-panel"],
        "list-row": THEME["list-row"],
      },
    }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.06, targets: ["header", "list-panel", "grid-panel", "gallery-panel"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component", attrs: { "data-blok-modes": "" },
        style: { base: { position: "relative", display: "flex", "flex-direction": "column", "row-gap": "2.5rem", "padding-bottom": "5rem" }, lg: { "padding-bottom": "6rem" } },
        children: [
          {
            tag: "div", key: "header",
            style: { base: { display: "flex", "flex-wrap": "wrap", "justify-content": "space-between", "align-items": "center", "column-gap": "1.5rem", "row-gap": "1rem" } },
            children: [
              {
                tag: "div", key: "wordmark", bind: "wordmark", if: "showWordmark",
                style: { base: { "font-family": "token(font-display)", "font-size": "1.5rem", "font-weight": "700", ...t("wordmark") } },
              },
              {
                tag: "div", key: "nav",
                style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "1rem", "row-gap": "0.5rem" } },
                children: [{
                  tag: "div", key: "nav-slot", repeat: "navLinks",
                  children: [{
                    tag: "a", key: "nav-link", bind: "item.label", href: "item.href",
                    style: { base: { "text-decoration": "none", "font-size": "0.9375rem", ...t("nav-link") } },
                  }],
                }],
              },
            ],
          },
          {
            tag: "div", key: "list-panel", attrs: { "data-blok-modes-panel": "list" },
            style: {
              base: {
                display: "flex", "flex-direction": "column", "row-gap": "0",
                "border-top-width": "1px", "border-top-style": "solid", ...t("list-panel"),
              },
            },
            children: [{
              tag: "div", key: "list-row", repeat: "projects",
              children: [{
                tag: "div", key: "list-row-inner",
                style: {
                  base: {
                    display: "flex", "flex-direction": "column", "align-items": "flex-start", "justify-content": "flex-start", "row-gap": "1rem", "column-gap": "0rem",
                    "padding-top": "1.25rem", "padding-bottom": "1.25rem",
                    "border-bottom-width": "1px", "border-bottom-style": "solid", ...t("list-row"),
                  },
                  lg: { "flex-direction": "row", "align-items": "center", "justify-content": "space-between", "column-gap": "2rem", "row-gap": "0rem" },
                },
                children: [
                  { tag: "h3", key: "list-title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.5rem", "font-weight": "600", ...t("list-title") }, lg: { "font-size": "2rem" } } },
                  {
                    tag: "div", key: "list-thumbs",
                    style: { base: { display: "flex", "column-gap": "0.5rem", "flex-wrap": "wrap", "row-gap": "0.5rem" } },
                    children: [
                      { tag: "img", key: "list-thumb-a", bind: "item.image", style: { base: { display: "block", width: "4.5rem", height: "3.25rem", "object-fit": "cover", ...radius("0.375rem") } } },
                      { tag: "img", key: "list-thumb-b", bind: "item.image2", style: { base: { display: "block", width: "4.5rem", height: "3.25rem", "object-fit": "cover", ...radius("0.375rem") } } },
                      { tag: "img", key: "list-thumb-c", bind: "item.image3", style: { base: { display: "block", width: "4.5rem", height: "3.25rem", "object-fit": "cover", ...radius("0.375rem") } } },
                    ],
                  },
                ],
              }],
            }],
          },
          {
            tag: "div", key: "grid-panel", attrs: { "data-blok-modes-panel": "grid", hidden: "" },
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "grid-column-gap": "1rem", "grid-row-gap": "1.5rem" },
              md: { "grid-template-columns": "1fr 1fr" },
              lg: { "grid-template-columns": "1fr 1fr 1fr" },
            },
            children: [{
              tag: "div", key: "grid-card", repeat: "projects",
              children: [{
                tag: "div", key: "grid-card-inner",
                style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.75rem" } },
                children: [
                  { tag: "img", key: "grid-image", bind: "item.image", style: { base: { display: "block", width: "100%", "aspect-ratio": "4 / 5", "object-fit": "cover", ...radius("0.75rem") } } },
                  { tag: "h3", key: "grid-title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1.125rem", "font-weight": "600", ...t("grid-title") } } },
                ],
              }],
            }],
          },
          {
            tag: "div", key: "gallery-panel", attrs: { "data-blok-modes-panel": "gallery", hidden: "" },
            style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" } },
            children: [{
              tag: "div", key: "gallery-stack", repeat: "projects",
              children: [{
                tag: "div", key: "gallery-stack-inner",
                style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.75rem" } },
                children: [
                  { tag: "div", key: "gallery-meta", bind: "item.title", style: { base: { ...mono(), "font-size": "0.75rem", ...t("gallery-meta") } } },
                  { tag: "img", key: "gallery-image-a", bind: "item.image", style: { base: { display: "block", width: "100%", "aspect-ratio": "16 / 10", "object-fit": "cover", ...radius("0.5rem") } } },
                  { tag: "img", key: "gallery-image-b", bind: "item.image2", style: { base: { display: "block", width: "100%", "aspect-ratio": "16 / 10", "object-fit": "cover", ...radius("0.5rem") } } },
                  { tag: "img", key: "gallery-image-c", bind: "item.image3", style: { base: { display: "block", width: "100%", "aspect-ratio": "16 / 10", "object-fit": "cover", ...radius("0.5rem") } } },
                ],
              }],
            }],
          },
          {
            tag: "div", key: "mode-bar",
            style: {
              base: {
                position: "fixed", left: "50%", bottom: "1.25rem", "z-index": "20",
                display: "flex", "column-gap": "0.25rem",
                "padding-top": "0.35rem", "padding-right": "0.35rem", "padding-bottom": "0.35rem", "padding-left": "0.35rem",
                "margin-left": "-8rem",
                "border-top-width": "1px", "border-right-width": "1px", "border-bottom-width": "1px", "border-left-width": "1px",
                "border-top-style": "solid", "border-right-style": "solid", "border-bottom-style": "solid", "border-left-style": "solid",
                ...pill, ...t("mode-bar"),
              },
              lg: { bottom: "1.75rem" },
            },
            children: [
              { tag: "div", key: "mode-grid", text: "Grid", attrs: { "data-blok-mode": "grid" }, style: { base: { cursor: "pointer", ...mono(), "padding-top": "0.55rem", "padding-right": "0.9rem", "padding-bottom": "0.55rem", "padding-left": "0.9rem", ...pill, ...t("mode") } } },
              { tag: "div", key: "mode-list", text: "List", attrs: { "data-blok-mode": "list", "aria-pressed": "true" }, style: { base: { cursor: "pointer", ...mono(), "padding-top": "0.55rem", "padding-right": "0.9rem", "padding-bottom": "0.55rem", "padding-left": "0.9rem", ...pill, ...t("mode-on") } } },
              { tag: "div", key: "mode-gallery", text: "Gallery", attrs: { "data-blok-mode": "gallery" }, style: { base: { cursor: "pointer", ...mono(), "padding-top": "0.55rem", "padding-right": "0.9rem", "padding-bottom": "0.55rem", "padding-left": "0.9rem", ...pill, ...t("mode") } } },
            ],
          },
        ],
      }),
    ],
  },
};
