// A still logo grid. No marquee.
import { themeVariant, themeBase, mono, radius } from "./_lib/themes.js";
import { shell, withStyles } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  label: { color: "muted" },
  cell: { "background-color": "panel", "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line" },
};
const t = (key) => themeBase("light", THEME[key]);
const logo = (name) => ({ logo: { src: `https://placehold.co/240x64/f4f1ea/141414/png?text=${encodeURIComponent(name)}&font=montserrat`, alt: name } });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "logos-03",
  prefix: "logos3",
  name: "Logos / Static Grid",
  category: "logos",
  description: "A still grid of client logos. Nothing moves. Logos invert on the dark theme.",

  props: {
    showLabel: { type: "boolean", default: true },
    label: { type: "text", default: "Studios and shops we have shipped with" },
    logos: {
      type: "list",
      fields: { logo: "image" },
      default: ["Northwind", "Tidewater", "Halyard", "Saltbox", "Ledgewood", "Pasture", "Granite", "Harbor Lab"].map(logo),
    },
  },

  variants: {
    theme: withStyles(themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }), {
      dark: { logo: { base: { filter: "grayscale(1) invert(1)" } } },
    }),
  },

  motion: { enter: { preset: "fade", stagger: 0.08, targets: ["label"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "align-items": "center", "row-gap": "1.75rem" }, lg: { "row-gap": "2.25rem" } },
        children: [
          { tag: "div", key: "label", bind: "label", if: "showLabel", style: { base: { ...mono(), "text-align": "center", ...t("label") } } },
          {
            tag: "div", key: "grid", repeat: "logos",
            style: {
              base: { display: "grid", width: "100%", "grid-template-columns": "1fr 1fr", "grid-column-gap": "0.75rem", "grid-row-gap": "0.75rem" },
              md: { "grid-template-columns": "1fr 1fr 1fr", "grid-column-gap": "1rem", "grid-row-gap": "1rem" },
              lg: { "grid-template-columns": "1fr 1fr 1fr 1fr", "grid-column-gap": "1rem", "grid-row-gap": "1rem" },
            },
            children: [
              {
                tag: "div", key: "cell",
                style: {
                  base: {
                    display: "flex", "align-items": "center", "justify-content": "center", height: "5.5rem",
                    "padding-left": "1rem", "padding-right": "1rem",
                    "border-top-width": "1px", "border-right-width": "1px", "border-bottom-width": "1px", "border-left-width": "1px",
                    "border-top-style": "solid", "border-right-style": "solid", "border-bottom-style": "solid", "border-left-style": "solid",
                    ...radius("token(radius)"), ...t("cell"),
                  },
                  lg: { height: "6.5rem" },
                },
                children: [{ tag: "img", key: "logo", bind: "item.logo", style: { base: { display: "block", "max-width": "100%", "max-height": "2rem", width: "auto", height: "auto", "object-fit": "contain" } } }],
              },
            ],
          },
        ],
      }, { size: "medium" }),
    ],
  },
};
