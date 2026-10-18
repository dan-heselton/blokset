// Three tall freight cards: side cards grayscale, center card full color with a white speech bubble.
import { radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ocean: { color: "fg" },
  air: { color: "fg" },
  supply: { color: "fg" },
  "ocean-title": { color: "fg" },
  "air-title": { color: "fg" },
  "supply-title": { color: "fg" },
  "ocean-mark": { "background-color": "panel", color: "fg" },
  "air-mark": { "background-color": "panel", color: "fg" },
  "supply-mark": { "background-color": "panel", color: "fg" },
  speech: { "background-color": "bg", color: "fg" },
};
const t = (key) => themeBase("dark", THEME[key]);
const speechTone = themeBase("light", THEME.speech);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1200&q=80`, alt });
const pill = {
  "border-top-left-radius": "999px", "border-top-right-radius": "999px",
  "border-bottom-right-radius": "999px", "border-bottom-left-radius": "999px",
};

function freightCard({ key, titleBind, imageBind, hrefBind, muted }) {
  return {
    tag: "a", key, href: hrefBind,
    style: {
      base: {
        position: "relative", display: "flex", "flex-direction": "column", "justify-content": "flex-end",
        overflow: "hidden", "min-height": "24rem", "text-decoration": "none", ...radius("1.5rem"), ...t(key),
      },
      lg: { "min-height": "30rem" },
    },
    children: [
      {
        tag: "img", key: `${key}-image`, bind: imageBind,
        style: {
          base: {
            position: "absolute", top: "0", right: "0", bottom: "0", left: "0",
            width: "100%", height: "100%", "object-fit": "cover", "z-index": "0",
            ...(muted ? { filter: "grayscale(1)" } : {}),
          },
        },
      },
      {
        tag: "div", key: `${key}-scrim`, decorative: true,
        style: {
          base: {
            position: "absolute", top: "0", right: "0", bottom: "0", left: "0", "z-index": "1",
            "background-color": "token(ink)", opacity: muted ? "0.38" : "0.22",
          },
        },
      },
      {
        tag: "div", key: `${key}-mark`, text: "↗", decorative: true,
        style: {
          base: {
            position: "absolute", top: "1.1rem", left: "1.1rem", "z-index": "3",
            width: "2.5rem", height: "2.5rem", display: "flex", "align-items": "center", "justify-content": "center",
            "font-size": "1.125rem", "line-height": "1", "font-weight": "600", ...pill, ...t(`${key}-mark`),
          },
        },
      },
      {
        tag: "h3", key: `${key}-title`, bind: titleBind,
        style: {
          base: {
            position: "relative", "z-index": "2", "margin-top": "0", "margin-bottom": "0",
            "padding-top": "1.35rem", "padding-right": "1.35rem", "padding-bottom": "1.35rem", "padding-left": "1.35rem",
            "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.1",
            "font-weight": "600", "letter-spacing": "-0.02em", ...t(`${key}-title`),
          },
          lg: { "font-size": "1.75rem" },
        },
      },
    ],
  };
}

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "services-02",
  prefix: "services2",
  name: "Services / Image cards",
  category: "services",
  description: "Three tall equal freight cards. Side cards are grayscale; the center card stays full color with a white speech bubble and corner arrows.",

  props: {
    oceanTitle: { type: "text", default: "Ocean Freight" },
    oceanHref: { type: "link", default: "#" },
    oceanImage: { type: "image", default: photo("1501594907352-04cda38ebc29", "Harbor pier over calm water at dusk") },
    airTitle: { type: "text", default: "Air Freight" },
    airHref: { type: "link", default: "#" },
    airImage: { type: "image", default: photo("1469474968028-56623f02e42e", "Open landscape under a wide sky") },
    supplyTitle: { type: "text", default: "Supply Chain" },
    supplyHref: { type: "link", default: "#" },
    supplyImage: { type: "image", default: photo("1586528116311-ad8dd3c8310d", "Highway freight trucks at dusk") },
    showSpeech: { type: "boolean", default: true },
    speech: { type: "text", default: "Westway Air Freight — priority ships with fast transit and global coverage." },
  },

  variants: {
    theme: themeVariant({ default: "dark", options: ["dark", "light", "accent"], map: THEME }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["ocean", "air", "supply"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { position: "relative" } },
        children: [
          {
            tag: "div", key: "grid",
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "grid-column-gap": "1rem", "grid-row-gap": "1rem" },
              md: { "grid-template-columns": "repeat(3, minmax(0, 1fr))", "grid-column-gap": "1.25rem" },
            },
            children: [
              freightCard({ key: "ocean", titleBind: "oceanTitle", imageBind: "oceanImage", hrefBind: "oceanHref", muted: true }),
              freightCard({ key: "air", titleBind: "airTitle", imageBind: "airImage", hrefBind: "airHref", muted: false }),
              freightCard({ key: "supply", titleBind: "supplyTitle", imageBind: "supplyImage", hrefBind: "supplyHref", muted: true }),
            ],
          },
          {
            tag: "div", key: "speech", bind: "speech", if: "showSpeech",
            style: {
              base: {
                display: "none", position: "absolute", top: "38%", left: "50%", "z-index": "5",
                width: "14rem", "margin-left": "-7rem",
                "padding-top": "1.1rem", "padding-right": "1.15rem", "padding-bottom": "1.1rem", "padding-left": "1.15rem",
                "font-size": "0.875rem", "line-height": "1.45", "text-align": "center", "font-weight": "500",
                ...radius("1.15rem"), ...speechTone,
              },
              md: { display: "block" },
            },
          },
        ],
      }),
    ],
  },
};
