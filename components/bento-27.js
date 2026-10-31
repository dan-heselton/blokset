// Magazine board: asymmetric editorial grid with light parallax on photographs.
import { pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  pull: { "background-color": "panel", color: "fg" },
  "pull-text": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });
const span = (n) => ({ "grid-column-start": `span ${n}`, "grid-column-end": `span ${n}` });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "bento-27",
  prefix: "bento27",
  name: "Work / Magazine board",
  category: "bento",
  collection: "marketing",
  description: "An editorial project spread. Photographs drift at light speeds while a pull quote and captions hold the page.",

  props: {
    ...headerProps({
      eyebrow: "Selected work",
      heading: "Laid out like a magazine",
      description: "Large frames, a short pull, and the projects that earned the ink.",
    }),
    pull: { type: "text", default: "Name the work. Ship the page. Stay for the first week." },
    pullMeta: { type: "text", default: "Studio note, 2026" },
    leadTitle: { type: "text", default: "North Shore Arts" },
    leadYear: { type: "text", default: "2026" },
    leadHref: { type: "link", default: "#" },
    leadImage: { type: "image", default: shot("1519710164239-da123dc03ef4", "Sunlit room with a wooden chair") },
    sideTitle: { type: "text", default: "Tidewater Supply" },
    sideYear: { type: "text", default: "2026" },
    sideHref: { type: "link", default: "#" },
    sideImage: { type: "image", default: shot("1501594907352-04cda38ebc29", "Harbor pier") },
    lowTitle: { type: "text", default: "Halyard" },
    lowYear: { type: "text", default: "2025" },
    lowHref: { type: "link", default: "#" },
    lowImage: { type: "image", default: shot("1497366216548-37526070297c", "Bright studio desks") },
    wideTitle: { type: "text", default: "Saltbox Bakery" },
    wideYear: { type: "text", default: "2025" },
    wideHref: { type: "link", default: "#" },
    wideImage: { type: "image", default: shot("1517248135467-4c7edcad34c4", "Bakery dining room") },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.07, targets: ["eyebrow", "heading", "description", "lead", "pull", "side", "low", "wide"] },
  },

  tree: {
    role: "section",
    style: { base: { overflow: "hidden", ...t("section") } },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" } },
        children: [
          header({ t, layout: "split" }),
          {
            tag: "div", key: "grid",
            style: {
              base: { display: "grid", "grid-template-columns": "minmax(0, 1fr)", "column-gap": "0.85rem", "row-gap": "0.85rem" },
              md: { "grid-template-columns": "repeat(2, minmax(0, 1fr))" },
              lg: { "grid-template-columns": "repeat(12, minmax(0, 1fr))" },
            },
            children: [
              projectCard("lead", "leadHref", "leadImage", "leadTitle", "leadYear", "0.16", {
                base: { ...span(1), "min-height": "18rem", "grid-row-start": "auto", "grid-row-end": "auto" },
                lg: { ...span(7), "min-height": "28rem", "grid-row-start": "span 2", "grid-row-end": "span 2" },
              }),
              {
                tag: "div", key: "pull",
                style: {
                  base: { display: "flex", "flex-direction": "column", "justify-content": "space-between", "row-gap": "1.5rem", "min-height": "10rem", ...span(1), ...radius("token(radius-card)"), ...pad("1.35rem"), ...t("pull") },
                  lg: { ...span(5), "min-height": "12rem" },
                },
                children: [
                  { tag: "p", key: "pull-text", bind: "pull", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.2", "font-weight": "600", "letter-spacing": "-0.02em" }, lg: { "font-size": "1.85rem" } } },
                  { tag: "div", key: "pull-meta", bind: "pullMeta", style: { base: { "font-size": "0.875rem", "line-height": "1.4", ...t("pull-text") } } },
                ],
              },
              projectCard("side", "sideHref", "sideImage", "sideTitle", "sideYear", "-0.14", {
                base: { ...span(1), "min-height": "14rem" },
                lg: { ...span(5), "min-height": "14rem" },
              }),
              projectCard("low", "lowHref", "lowImage", "lowTitle", "lowYear", "0.1", {
                base: { ...span(1), "min-height": "14rem" },
                md: { ...span(1) },
                lg: { ...span(4), "min-height": "16rem" },
              }),
              projectCard("wide", "wideHref", "wideImage", "wideTitle", "wideYear", "-0.08", {
                base: { ...span(1), "min-height": "14rem" },
                md: { ...span(2) },
                lg: { ...span(8), "min-height": "16rem" },
              }),
            ],
          },
        ],
      }),
    ],
  },
};

function projectCard(key, href, image, title, year, depth, style) {
  return {
    tag: "a", key, href,
    style: {
      base: { position: "relative", display: "block", overflow: "hidden", "text-decoration": "none", color: "inherit", ...radius("token(radius-card)"), ...style.base },
      ...(style.md ? { md: style.md } : {}),
      ...(style.lg ? { lg: style.lg } : {}),
    },
    children: [
      {
        tag: "img", key: `${key}-image`, bind: image, attrs: { "data-blok-depth": depth },
        style: { base: { position: "absolute", top: "-18%", right: "0", bottom: "auto", left: "0", width: "100%", height: "136%", "object-fit": "cover" } },
      },
      {
        tag: "div", key: `${key}-shade`, decorative: true,
        style: { base: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", "z-index": "1", "background-image": "linear-gradient(to top, token(shade-strong), token(shade-clear) 50%)" } },
      },
      {
        tag: "div", key: `${key}-meta`,
        style: {
          base: {
            position: "absolute", right: "1.1rem", bottom: "1.1rem", left: "1.1rem", top: "auto", "z-index": "2",
            display: "flex", "flex-direction": "column", "row-gap": "0.2rem",
          },
        },
        children: [
          { tag: "h3", key: `${key}-title`, bind: title, style: { base: { "margin-top": "0", "margin-bottom": "0", color: "token(text-inverse)", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.1", "font-weight": "600", "letter-spacing": "-0.02em" } } },
          { tag: "div", key: `${key}-year`, bind: year, style: { base: { color: "token(text-inverse)", "font-size": "0.875rem", "line-height": "1.4", opacity: "0.85" } } },
        ],
      },
    ],
  };
}
