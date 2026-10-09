// Project grid with category chips. "All" is static; the other chips and the cards are lists.
import { themeVariant, themeBase, radius, mono } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  eyebrow: { color: "muted" },
  description: { color: "muted" },
  chip: { color: "fg", "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line" },
  "chip-all": { color: "fg", "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line" },
  meta: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1000&q=80`, alt });
const chipStyle = { base: { ...mono(), cursor: "pointer", "padding-top": "0.55rem", "padding-bottom": "0.55rem", "padding-left": "0.9rem", "padding-right": "0.9rem", "border-top-width": "1px", "border-right-width": "1px", "border-bottom-width": "1px", "border-left-width": "1px", "border-top-style": "solid", "border-right-style": "solid", "border-bottom-style": "solid", "border-left-style": "solid", ...radius("999px") } };

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "filter-01",
  prefix: "filter1",
  name: "Filter / Project Grid",
  category: "filter",
  description: "A project grid with category chips. All shows every card; each chip shows one group.",

  props: {
    ...headerProps({
      eyebrow: "Selected work",
      heading: "Recent projects, by kind of work",
      description: "Filter the grid to brand, web, or product. The same cards stay in the page, so nothing has to load.",
    }),
    groups: {
      type: "list",
      fields: { label: "text", group: "text" },
      default: [
        { label: "Brand", group: "brand" },
        { label: "Web", group: "web" },
        { label: "Product", group: "product" },
      ],
    },
    projects: {
      type: "list",
      fields: { group: "text", title: "text", meta: "text", image: "image" },
      default: [
        { group: "brand", title: "Saltbox Bakery", meta: "Identity", image: photo("1517248135467-4c7edcad34c4", "Restaurant dining room") },
        { group: "web", title: "North Shore Arts", meta: "Webflow", image: photo("1519710164239-da123dc03ef4", "Sunlit gallery room") },
        { group: "product", title: "Halyard", meta: "Product site", image: photo("1497366216548-37526070297c", "Open office") },
        { group: "web", title: "Ledgewood", meta: "Portfolio", image: photo("1486406146926-c627a92ad1ab", "Glass facade") },
        { group: "brand", title: "Tidewater Supply", meta: "Brand", image: photo("1501594907352-04cda38ebc29", "Coastline in fog") },
        { group: "product", title: "High Pasture", meta: "Campaign", image: photo("1500530855697-b586d89ba3ee", "Green hills at sunrise") },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "filter", attrs: { "data-blok-filter": "" },
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2rem" }, lg: { "row-gap": "2.75rem" } },
        children: [
          header({ t, layout: "split" }),
          {
            tag: "div", key: "chips",
            style: { base: { display: "flex", "flex-wrap": "wrap", "align-items": "center", "column-gap": "0.5rem", "row-gap": "0.5rem" } },
            children: [
              { tag: "div", key: "chip-all", text: "All", attrs: { "data-blok-filter-chip": "all" }, style: { ...chipStyle, base: { ...chipStyle.base, ...t("chip-all") } } },
              {
                tag: "div", key: "chip-row", repeat: "groups",
                style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "0.5rem", "row-gap": "0.5rem" } },
                children: [
                  { tag: "div", key: "chip", bind: "item.label", attrs: { "data-blok-filter-chip": "=item.group" }, style: { ...chipStyle, base: { ...chipStyle.base, ...t("chip") } } },
                ],
              },
            ],
          },
          {
            tag: "div", key: "grid", repeat: "projects",
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "grid-column-gap": "1.25rem", "grid-row-gap": "1.5rem" },
              md: { "grid-template-columns": "1fr 1fr", "grid-column-gap": "1.5rem", "grid-row-gap": "1.75rem" },
              lg: { "grid-template-columns": "1fr 1fr 1fr", "grid-column-gap": "1.5rem", "grid-row-gap": "2rem" },
            },
            children: [
              {
                tag: "div", key: "card", attrs: { "data-blok-filter-card": "", "data-blok-group": "=item.group" },
                children: [
                  {
                    tag: "div", key: "card-media",
                    style: { base: { overflow: "hidden", "aspect-ratio": "4 / 3", "margin-bottom": "1rem", ...radius("token(radius-card)") } },
                    children: [{ tag: "img", key: "card-image", bind: "item.image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } }],
                  },
                  { tag: "h3", key: "card-title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0.35rem", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.15", "font-weight": "600", "letter-spacing": "-0.03em" } } },
                  { tag: "div", key: "meta", bind: "item.meta", style: { base: { ...mono(), ...t("meta") } } },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
