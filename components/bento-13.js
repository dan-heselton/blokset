// Six row cells beside a tall photograph. One row is the week we are in.
import { inset0, pad, radius, shapeVariant, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const rowFace = { "background-color": "panel", color: "fg" };
const rowInk = { color: "muted" };
const THEME = {
  section: { "background-color": "bg", color: "fg" },
  heading: { color: "fg" },
  description: { color: "muted" },
  brief: rowFace,
  "brief-text": rowInk,
  direction: rowFace,
  "direction-text": rowInk,
  review: rowFace,
  "review-text": rowInk,
  launch: rowFace,
  "launch-text": rowInk,
  after: rowFace,
  "after-text": rowInk,
};
const t = (key) => themeBase("dark", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1600&q=80`, alt });
const cell = (col) => ({ "grid-column-start": `span ${col}`, "grid-column-end": `span ${col}` });

function line(key, title, text) {
  return {
    tag: "div", key,
    style: {
      base: { display: "flex", "flex-direction": "column", "justify-content": "center", "min-height": "5.5rem", "grid-row-start": "auto", "grid-row-end": "auto", ...cell(1), ...radius("token(radius-card)"), ...pad("1rem"), ...t(key) },
    },
    children: [
      { tag: "h3", key: `${key}-title`, bind: title, style: { base: { "margin-top": "0", "margin-bottom": "0.25rem", "font-size": "1.05rem", "line-height": "1.2", "font-weight": "600" } } },
      { tag: "p", key: `${key}-text`, bind: text, style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "0.95rem", "line-height": "1.4", ...t(`${key}-text`) } } },
    ],
  };
}

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "bento-13",
  prefix: "bento13",
  name: "Bento / Rows",
  category: "bento",
  description: "A tall photograph and six row cells. The current week is the wide card.",

  props: {
    heading: { type: "text", default: "What the week holds" },
    showDescription: { type: "boolean", default: true, description: "Show the line under the headline." },
    description: { type: "text", default: "Six lines. The wide card is the week we are in." },
    image: { type: "image", default: shot("1497366216548-37526070297c", "A bright studio with a long desk") },
    briefTitle: { type: "text", default: "Brief" },
    briefText: { type: "text", default: "One sitting. We leave with the pages that matter." },
    directionTitle: { type: "text", default: "Direction" },
    directionText: { type: "text", default: "Two ways, in the browser, then we pick one." },
    reviewTitle: { type: "text", default: "Review" },
    reviewText: { type: "text", default: "Friday. The people who will edit it are in the room." },
    launchTitle: { type: "text", default: "Launch" },
    launchText: { type: "text", default: "Redirects, a checklist, and a person who stays." },
    currentTitle: { type: "text", default: "Build" },
    currentText: { type: "text", default: "Webflow or Astro. The CMS matches the staff. This is the week." },
    afterTitle: { type: "text", default: "After" },
    afterText: { type: "text", default: "We pick up the phone the week it is live." },
  },

  variants: {
    theme: themeVariant({ default: "dark", options: ["light", "dark", "accent"], map: THEME }),
    shape: shapeVariant(["photo", "brief", "direction", "review", "launch", "current", "after"]),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.06, targets: ["heading", "current"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "grid",
        style: {
          base: { display: "grid", "grid-template-columns": "minmax(0, 1fr)", "column-gap": "0.75rem", "row-gap": "0.75rem" },
          md: { "grid-template-columns": "repeat(2, minmax(0, 1fr))" },
          lg: { "grid-template-columns": "repeat(4, minmax(0, 1fr))" },
        },
        children: [
          {
            tag: "div", key: "photo",
            style: {
              base: { position: "relative", overflow: "hidden", "min-height": "16rem", "grid-row-start": "auto", "grid-row-end": "auto", ...cell(1), ...radius("token(radius-card)") },
              md: { ...cell(2) },
              lg: { ...cell(2), "grid-row-start": "span 2", "grid-row-end": "span 2", "min-height": "22rem" },
            },
            children: [{ tag: "img", key: "image", bind: "image", style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } } }],
          },
          {
            tag: "div", key: "intro",
            style: {
              base: { display: "flex", "flex-direction": "column", "justify-content": "flex-end", "min-height": "8rem", ...cell(1), ...radius("token(radius-card)"), ...pad("1.25rem") },
              md: { ...cell(2) },
              lg: { ...cell(2) },
            },
            children: [
              {
                tag: "h2", key: "heading", bind: "heading",
                style: {
                  base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "2rem", "line-height": "1.05", "font-weight": "600", "letter-spacing": "-0.03em", ...t("heading") },
                  lg: { "font-size": "2.5rem" },
                },
              },
              {
                tag: "p", key: "description", bind: "description", if: "showDescription",
                style: { base: { "margin-top": "0.6rem", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.45", ...t("description") } },
              },
            ],
          },
          line("brief", "briefTitle", "briefText"),
          line("direction", "directionTitle", "directionText"),
          line("review", "reviewTitle", "reviewText"),
          line("launch", "launchTitle", "launchText"),
          {
            tag: "div", key: "current",
            style: {
              base: { display: "flex", "flex-direction": "column", "justify-content": "center", "min-height": "7rem", "background-color": "token(accent)", color: "token(ink)", ...cell(1), ...radius("token(radius-card)"), ...pad("1.25rem") },
              md: { ...cell(2) },
              lg: { ...cell(2) },
            },
            children: [
              { tag: "h3", key: "current-title", bind: "currentTitle", style: { base: { "margin-top": "0", "margin-bottom": "0.35rem", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.1", "font-weight": "600" } } },
              { tag: "p", key: "current-text", bind: "currentText", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.45", color: "token(ink)" } } },
            ],
          },
          {
            ...line("after", "afterTitle", "afterText"),
            style: {
              base: { display: "flex", "flex-direction": "column", "justify-content": "center", "min-height": "5.5rem", "grid-row-start": "auto", "grid-row-end": "auto", ...cell(1), ...radius("token(radius-card)"), ...pad("1rem"), ...t("after") },
              md: { ...cell(2) },
              lg: { ...cell(4) },
            },
          },
        ],
      }),
    ],
  },
};
