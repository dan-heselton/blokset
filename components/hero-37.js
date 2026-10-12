// Copy on the left. Four photographs in a cluster, with two cards on the seams.
import { pad, radius, shapeVariant, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  heading: { color: "fg" },
  description: { color: "muted" },
  note: { "background-color": "panel", color: "fg" },
  "note-text": { color: "muted" },
  place: { "background-color": "panel", color: "fg" },
  "place-text": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1200&q=80`, alt });
const parked = { position: "relative", top: "auto", right: "auto", bottom: "auto", left: "auto" };

function frame(key, bind) {
  return {
    tag: "div", key,
    style: { base: { overflow: "hidden", width: "100%", "min-height": "10rem", ...radius("token(radius-card)") } },
    children: [{
      tag: "img", key: `${key}-image`, bind,
      style: { base: { display: "block", width: "100%", height: "11rem", "object-fit": "cover" }, lg: { height: "13rem" } },
    }],
  };
}

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-37",
  prefix: "hero37",
  name: "Hero / Collage",
  category: "hero",
  description: "A headline and one action on the left. Four photographs sit in a cluster on the right, with a note and a place card on the seams. On a phone the photographs are two columns and the cards follow.",

  props: {
    heading: { type: "text", default: "The work, in one place." },
    showDescription: { type: "boolean", default: true, description: "Show the line under the headline." },
    description: { type: "text", default: "Photographs from the desk, and the two notes that sit on them. Nothing here submits." },
    showButtons: { type: "boolean", default: true, description: "Show the action." },
    buttons: { type: "buttons", max: 1, default: [{ title: "See the work", href: "#", variant: "dark" }] },
    imageA: { type: "image", priority: true, default: shot("1519710164239-da123dc03ef4", "A wooden chair in a pale room") },
    imageB: { type: "image", default: shot("1497366216548-37526070297c", "A bright studio with a long desk") },
    imageC: { type: "image", default: shot("1501594907352-04cda38ebc29", "A low pier and still harbor water") },
    imageD: { type: "image", default: shot("1486406146926-c627a92ad1ab", "A glass facade against a clear sky") },
    showNote: { type: "boolean", default: true, description: "Show the note card." },
    noteTitle: { type: "text", default: "Halyard" },
    noteText: { type: "text", default: "Week of the 14th" },
    showPlace: { type: "boolean", default: true, description: "Show the place card." },
    placeTitle: { type: "text", default: "18 Main Street" },
    placeText: { type: "text", default: "The same desk since 2014." },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
    shape: shapeVariant(["photo-a", "photo-b", "photo-c", "photo-d", "note", "place"]),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["heading", "description", "note", "place"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: {
          base: { display: "flex", "flex-direction": "column", "align-items": "stretch", "row-gap": "2rem", "column-gap": "0rem" },
          lg: { "flex-direction": "row", "align-items": "center", "column-gap": "3rem", "row-gap": "0rem" },
        },
        children: [
          {
            tag: "div", key: "copy",
            style: { base: { width: "100%", "max-width": "34rem" }, lg: { width: "40%" } },
            children: [
              {
                tag: "h1", key: "heading", bind: "heading",
                style: {
                  base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "2.75rem", "line-height": "0.98", "font-weight": "600", "letter-spacing": "-0.04em", ...t("heading") },
                  md: { "font-size": "3.5rem" },
                  lg: { "font-size": "4.25rem" },
                },
              },
              {
                tag: "p", key: "description", bind: "description", if: "showDescription",
                style: { base: { "margin-top": "1.25rem", "margin-bottom": "0", "max-width": "28rem", "font-size": "1.05rem", "line-height": "1.6", ...t("description") } },
              },
              {
                tag: "div", key: "actions", repeat: "buttons", if: "showButtons",
                style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "0.75rem", "row-gap": "0.75rem", "margin-top": "1.5rem" } },
              },
            ],
          },
          {
            tag: "div", key: "cluster",
            style: {
              base: { position: "relative", display: "grid", "grid-template-columns": "repeat(2, minmax(0, 1fr))", "column-gap": "0.75rem", "row-gap": "0.75rem", width: "100%", "min-height": "0px" },
              lg: { width: "56%" },
            },
            children: [
              frame("photo-a", "imageA"),
              frame("photo-b", "imageB"),
              frame("photo-c", "imageC"),
              frame("photo-d", "imageD"),
              {
                tag: "div", key: "note", if: "showNote",
                style: {
                  base: { ...parked, "z-index": "2", width: "100%", ...radius("token(radius-card)"), ...pad("1rem"), ...t("note") },
                  lg: { position: "absolute", top: "38%", right: "auto", bottom: "auto", left: "8%", width: "42%" },
                },
                children: [
                  { tag: "h2", key: "note-title", bind: "noteTitle", style: { base: { "margin-top": "0", "margin-bottom": "0.3rem", "font-family": "token(font-display)", "font-size": "1.25rem", "line-height": "1", "font-weight": "600" } } },
                  { tag: "p", key: "note-text", bind: "noteText", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "0.95rem", "line-height": "1.4", ...t("note-text") } } },
                ],
              },
              {
                tag: "div", key: "place", if: "showPlace",
                style: {
                  base: { ...parked, "z-index": "2", width: "100%", ...radius("token(radius-card)"), ...pad("1rem"), ...t("place") },
                  lg: { position: "absolute", top: "auto", right: "6%", bottom: "10%", left: "auto", width: "44%" },
                },
                children: [
                  { tag: "h2", key: "place-title", bind: "placeTitle", style: { base: { "margin-top": "0", "margin-bottom": "0.3rem", "font-family": "token(font-display)", "font-size": "1.25rem", "line-height": "1", "font-weight": "600" } } },
                  { tag: "p", key: "place-text", bind: "placeText", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "0.95rem", "line-height": "1.4", ...t("place-text") } } },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
