// Four cards. One of them also shows a figure.
import { inset0, pad, radius, shapeVariant, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  guard: { "background-color": "panel", color: "fg" },
  yield: { "background-color": "panel", color: "fg" },
  cash: { "background-color": "panel", color: "fg" },
  people: { "background-color": "panel", color: "fg" },
  "guard-text": { color: "muted" },
  "yield-text": { color: "muted" },
  "cash-text": { color: "muted" },
  "people-text": { color: "muted" },
  "figure-label": { color: "muted" },
};
const t = (key) => themeBase("dark", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1200&q=80`, alt });

function card(key, title, text, image, figure) {
  const children = [
    {
      tag: "div", key: `${key}-shot`,
      style: { base: { position: "relative", overflow: "hidden", width: "100%", height: "8rem", ...radius("token(radius-card)") } },
      children: [{ tag: "img", key: `${key}-image`, bind: image, style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } } }],
    },
    { tag: "h3", key: `${key}-title`, bind: title, style: { base: { "margin-top": "0.85rem", "margin-bottom": "0.35rem", "font-family": "token(font-display)", "font-size": "1.35rem", "line-height": "1.1", "font-weight": "600" } } },
    { tag: "p", key: `${key}-text`, bind: text, style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "0.95rem", "line-height": "1.45", ...t(`${key}-text`) } } },
  ];
  if (figure) {
    children.push(
      { tag: "div", key: "figure-value", bind: "figureValue", style: { base: { "margin-top": "0.85rem", "font-family": "token(font-display)", "font-size": "2rem", "line-height": "1", "font-weight": "600" } } },
      { tag: "div", key: "figure-label", bind: "figureLabel", style: { base: { "margin-top": "0.25rem", "font-size": "0.9rem", ...t("figure-label") } } },
    );
  }
  return {
    tag: "div", key,
    style: { base: { ...radius("token(radius-card)"), ...pad("1rem"), ...t(key) } },
    children,
  };
}

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "bento-17",
  prefix: "bento17",
  name: "Bento / Yields",
  category: "bento",
  description: "Four cards in a two-by-two grid. Each has a photograph, a title, and a line. One card also shows a figure.",

  props: {
    guardTitle: { type: "text", default: "The file" },
    guardText: { type: "text", default: "One folder. The photographs, the words, and the launch list." },
    guardImage: { type: "image", default: shot("1497366216548-37526070297c", "A bright studio with a long desk") },
    yieldTitle: { type: "text", default: "The year" },
    yieldText: { type: "text", default: "What left the desk. Not a forecast." },
    yieldImage: { type: "image", default: shot("1469474968028-56623f02e42e", "A sunlit ridge and a valley of pines") },
    figureValue: { type: "text", default: "48" },
    figureLabel: { type: "text", default: "Shipped" },
    cashTitle: { type: "text", default: "The Friday" },
    cashText: { type: "text", default: "The staff publish once while we are still in the room." },
    cashImage: { type: "image", default: shot("1501594907352-04cda38ebc29", "A low pier and still harbor water") },
    peopleTitle: { type: "text", default: "The room" },
    peopleText: { type: "text", default: "18 Main Street. The same desk since 2014." },
    peopleImage: { type: "image", default: shot("1519710164239-da123dc03ef4", "A wooden chair in a pale room") },
  },

  variants: {
    theme: themeVariant({ default: "dark", options: ["light", "dark", "accent"], map: THEME }),
    shape: shapeVariant(["guard", "yield", "cash", "people", "guard-shot", "yield-shot", "cash-shot", "people-shot"]),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["guard", "yield", "cash", "people"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "grid",
        style: {
          base: { display: "grid", "grid-template-columns": "minmax(0, 1fr)", "column-gap": "1rem", "row-gap": "1rem" },
          md: { "grid-template-columns": "repeat(2, minmax(0, 1fr))" },
        },
        children: [
          card("guard", "guardTitle", "guardText", "guardImage", false),
          card("yield", "yieldTitle", "yieldText", "yieldImage", true),
          card("cash", "cashTitle", "cashText", "cashImage", false),
          card("people", "peopleTitle", "peopleText", "peopleImage", false),
        ],
      }),
    ],
  },
};
