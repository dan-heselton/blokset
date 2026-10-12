// Tall cards on the sides, one wide cell in the center.
import { inset0, pad, radius, shapeVariant, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  left: { "background-color": "panel", color: "fg" },
  "left-text": { color: "muted" },
  "left-b": { "background-color": "panel", color: "fg" },
  "left-b-text": { color: "muted" },
  right: { "background-color": "panel", color: "fg" },
  "right-text": { color: "muted" },
  "right-b": { "background-color": "panel", color: "fg" },
  "right-b-text": { color: "muted" },
  center: { "background-color": "card" },
};
const t = (key) => themeBase("dark", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1200&q=80`, alt });
function sideCard(key, titleBind, textBind, href, imageBind) {
  return {
    tag: "div", key,
    style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.65rem", "min-height": "14rem", ...radius("token(radius-card)"), ...pad("1.1rem"), ...t(key) } },
    children: [
      { tag: "h3", key: `${key}-title`, bind: titleBind, style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.25rem", "line-height": "1.1", "font-weight": "600" } } },
      { tag: "p", key: `${key}-text`, bind: textBind, style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "0.95rem", "line-height": "1.4", ...t(`${key}-text`) } } },
      { tag: "a", key: `${key}-link`, href, text: "See it", style: { base: { color: "inherit", "font-size": "0.95rem", "line-height": "1.3" } } },
      {
        tag: "div", key: `${key}-shot`,
        style: { base: { position: "relative", overflow: "hidden", width: "100%", height: "7rem", "margin-top": "auto", ...radius("token(radius-card)") } },
        children: [{ tag: "img", key: `${key}-image`, bind: imageBind, style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } } }],
      },
    ],
  };
}

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "bento-15",
  prefix: "bento15",
  name: "Bento / Services",
  category: "bento",
  description: "Tall cards on the sides and one wide cell in the center. Each card has a title, a line, an action, and a photograph.",

  props: {
    leftTitle: { type: "text", default: "Webflow" },
    leftText: { type: "text", default: "The CMS the staff already open." },
    leftHref: { type: "link", default: "#" },
    leftImage: { type: "image", default: shot("1497366216548-37526070297c", "A bright studio with a long desk") },
    leftBTitle: { type: "text", default: "Astro" },
    leftBText: { type: "text", default: "When the page should be a file, not a builder." },
    leftBHref: { type: "link", default: "#" },
    leftBImage: { type: "image", default: shot("1486406146926-c627a92ad1ab", "A glass facade against a clear sky") },
    centerTitle: { type: "text", default: "The work, in one place" },
    centerText: { type: "text", default: "Words, photographs, and the launch. From the desk on Main Street." },
    centerHref: { type: "link", default: "#" },
    rightTitle: { type: "text", default: "Photographs" },
    rightText: { type: "text", default: "Named, cropped, and light enough to ship." },
    rightHref: { type: "link", default: "#" },
    rightImage: { type: "image", default: shot("1519710164239-da123dc03ef4", "A wooden chair in a pale room") },
    rightBTitle: { type: "text", default: "The week after" },
    rightBText: { type: "text", default: "We stay until the staff has published once." },
    rightBHref: { type: "link", default: "#" },
    rightBImage: { type: "image", default: shot("1501594907352-04cda38ebc29", "A low pier and still harbor water") },
  },

  variants: {
    theme: themeVariant({ default: "dark", options: ["light", "dark", "accent"], map: THEME }),
    shape: shapeVariant(["left", "left-b", "center", "right", "right-b", "left-shot", "left-b-shot", "right-shot", "right-b-shot"]),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["center"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "grid",
        style: {
          base: { display: "grid", "grid-template-columns": "minmax(0, 1fr)", "align-items": "stretch", "column-gap": "1rem", "row-gap": "1rem" },
          lg: { "grid-template-columns": "repeat(3, minmax(0, 1fr))", "align-items": "stretch" },
        },
        children: [
          {
            tag: "div", key: "left-col",
            style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1rem" } },
            children: [
              sideCard("left", "leftTitle", "leftText", "leftHref", "leftImage"),
              sideCard("left-b", "leftBTitle", "leftBText", "leftBHref", "leftBImage"),
            ],
          },
          {
            tag: "div", key: "center",
            style: { base: { display: "flex", "flex-direction": "column", "justify-content": "flex-end", "min-height": "18rem", color: "token(surface)", ...radius("token(radius-card)"), ...pad("1.5rem"), ...t("center") }, lg: { "min-height": "28rem" } },
            children: [
              { tag: "h2", key: "center-title", bind: "centerTitle", style: { base: { "margin-top": "0", "margin-bottom": "0.5rem", "font-family": "token(font-display)", "font-size": "2rem", "line-height": "1.05", "font-weight": "600" }, lg: { "font-size": "2.5rem" } } },
              { tag: "p", key: "center-text", bind: "centerText", style: { base: { "margin-top": "0", "margin-bottom": "1rem", "font-size": "1rem", "line-height": "1.45", color: "token(surface)" } } },
              { tag: "a", key: "center-link", href: "centerHref", text: "See the work", style: { base: { color: "inherit", "font-size": "1rem" } } },
            ],
          },
          {
            tag: "div", key: "right-col",
            style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1rem" } },
            children: [
              sideCard("right", "rightTitle", "rightText", "rightHref", "rightImage"),
              sideCard("right-b", "rightBTitle", "rightBText", "rightBHref", "rightBImage"),
            ],
          },
        ],
      }),
    ],
  },
};
