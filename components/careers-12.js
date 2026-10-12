// One studio, in detail: the map, how to get there, who sits there, and the roles at that desk.
import { mono, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";
import { rockportMap, rockportMapImage } from "./_lib/map.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  address: { color: "fg" },
  transit: { color: "fg" },
  who: { color: "muted" },
  "address-label": { color: "muted" },
  "transit-label": { color: "muted" },
  "who-label": { color: "muted" },
  "roles-label": { color: "muted" },
  list: { "border-bottom-color": "line" },
  role: { color: "fg", "border-top-color": "line" },
  type: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const fact = (key, label) => ({
  tag: "div", key: `${key}-fact`,
  style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "0.35rem" } },
  children: [
    { tag: "div", key: `${key}-label`, text: label, style: { base: { ...mono(), ...t(`${key}-label`) } } },
    { tag: "div", key, bind: key, style: { base: { "font-size": "1.0625rem", "line-height": "1.45", ...t(key) } } },
  ],
});

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "careers-12",
  prefix: "careers12",
  name: "Careers / Rockport",
  category: "careers",
  description: "The Rockport studio: a map, the address, how to arrive, who sits there, and the roles open at that desk.",

  props: {
    ...headerProps({
      eyebrow: "The studio",
      heading: "Rockport",
      description: "One room on Main Street. The light we judge color by comes in from the west.",
    }),
    address: { type: "text", default: "18 Main Street, Rockport" },
    transit: { type: "text", default: "The train to Rockport, then a ten-minute walk. Bikes fit in the hall." },
    who: { type: "text", default: "Build and Design sit here. Strategy is usually on a call." },
    map: rockportMapImage,
    roles: {
      type: "list",
      fields: { title: "text", type: "text", href: "link" },
      default: [
        { title: "Webflow developer", type: "Full-time", href: "#webflow-developer" },
        { title: "Brand designer", type: "Contract", href: "#brand-designer" },
        { title: "Art director", type: "Full-time", href: "#art-director" },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] },
    reveal: { preset: "fade-up", targets: ["role"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "2rem" }, lg: { "row-gap": "2.5rem" } },
        children: [
          header({ t, layout: "stack" }),
          rockportMap({ lg: { height: "24rem" } }),
          {
            tag: "div", key: "facts",
            style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "1.25rem", "max-width": "36rem" }, md: { "row-gap": "1.5rem" } },
            children: [fact("address", "Address"), fact("transit", "How to arrive"), fact("who", "Who sits here")],
          },
          { tag: "div", key: "roles-label", text: "Open at this desk", style: { base: { ...mono(), ...t("roles-label") } } },
          {
            tag: "div", key: "list", repeat: "roles",
            style: { base: { width: "100%", "border-bottom-width": "1px", "border-bottom-style": "solid", ...t("list") } },
            children: [{
              tag: "a", key: "role", href: "item.href",
              style: {
                base: { display: "flex", "flex-wrap": "wrap", "align-items": "baseline", "justify-content": "space-between", "column-gap": "1.5rem", "row-gap": "0.35rem", "padding-top": "1.1rem", "padding-bottom": "1.1rem", "border-top-width": "1px", "border-top-style": "solid", "text-decoration": "none", ...t("role") },
              },
              children: [
                {
                  tag: "h3", key: "title", bind: "item.title",
                  style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.2", "font-weight": "600", "letter-spacing": "-0.02em" } },
                },
                { tag: "div", key: "type", bind: "item.type", style: { base: { ...mono(), "letter-spacing": "0.04em", ...t("type") } } },
              ],
            }],
          },
        ],
      }),
    ],
  },
};
