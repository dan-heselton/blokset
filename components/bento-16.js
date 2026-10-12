// Three columns. Each column stacks two cards.
import { inset0, pad, radius, shapeVariant, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  "col-a-title": { color: "fg" },
  "col-b-title": { color: "fg" },
  "col-c-title": { color: "fg" },
  "col-a-text": { color: "muted" },
  "col-b-text": { color: "muted" },
  "col-c-text": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1200&q=80`, alt });

function column(key, prop) {
  return {
    tag: "div", key, repeat: prop,
    style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1.25rem" } },
    children: [{
      tag: "div", key: `${key}-card`,
      style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.65rem" } },
      children: [
        {
          tag: "div", key: `${key}-shot`,
          style: { base: { position: "relative", overflow: "hidden", width: "100%", height: "9rem", ...radius("token(radius-card)") } },
          children: [{ tag: "img", key: `${key}-image`, bind: "item.image", style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } } }],
        },
        { tag: "h3", key: `${key}-title`, bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.2rem", "line-height": "1.15", "font-weight": "600", ...t(`${key}-title`) } } },
        { tag: "p", key: `${key}-text`, bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "0.95rem", "line-height": "1.45", ...t(`${key}-text`) } } },
      ],
    }],
  };
}

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "bento-16",
  prefix: "bento16",
  name: "Bento / Columns",
  category: "bento",
  description: "Three columns. Each column stacks a photograph, a title, and a line, twice.",

  props: {
    colA: {
      type: "list",
      fields: { title: "text", text: "text", image: "image" },
      default: [
        { title: "The words", text: "Read once, out loud, before the page goes out.", image: shot("1497366216548-37526070297c", "A bright studio with a long desk") },
        { title: "The recording", text: "One take in the room. No booth.", image: shot("1519710164239-da123dc03ef4", "A wooden chair in a pale room") },
      ],
    },
    colB: {
      type: "list",
      fields: { title: "text", text: "text", image: "image" },
      default: [
        { title: "The page", text: "A name, a photograph, and the sentence under it.", image: shot("1469474968028-56623f02e42e", "A sunlit ridge and a valley of pines") },
        { title: "The template", text: "The staff can change the line without us.", image: shot("1500530855697-b586d89ba3ee", "Green hills under a pale sky") },
      ],
    },
    colC: {
      type: "list",
      fields: { title: "text", text: "text", image: "image" },
      default: [
        { title: "The picture", text: "Cropped for the column, not the feed.", image: shot("1501594907352-04cda38ebc29", "A low pier and still harbor water") },
        { title: "The rest", text: "Figma, Webflow, Astro. Whichever the desk already uses.", image: shot("1486406146926-c627a92ad1ab", "A glass facade against a clear sky") },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
    shape: shapeVariant(["col-a-shot", "col-b-shot", "col-c-shot"]),
  },

  motion: { enter: { preset: "fade", stagger: 0.05, targets: ["col-a", "col-b", "col-c"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "grid",
        style: {
          base: { display: "grid", "grid-template-columns": "minmax(0, 1fr)", "column-gap": "1.25rem", "row-gap": "2rem" },
          lg: { "grid-template-columns": "repeat(3, minmax(0, 1fr))" },
        },
        children: [column("col-a", "colA"), column("col-b", "colB"), column("col-c", "colC")],
      }),
    ],
  },
};
