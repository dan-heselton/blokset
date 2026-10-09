// Dual logo marquee: two rows of client logos drifting in opposite directions, fading out at the
// edges. Logos are monochrome by default and invert automatically on the dark theme.
import { themeVariant, themeBase, mono } from "./_lib/themes.js";
import { withStyles } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  label: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const logo = (name) => ({ logo: { src: `https://placehold.co/200x56/f4f1ea/141414/png?text=${encodeURIComponent(name)}&font=montserrat`, alt: name } });
const fade = (bg) => ({
  "fade-left": { base: { "background-image": `linear-gradient(to right, ${bg}, transparent)` } },
  "fade-right": { base: { "background-image": `linear-gradient(to left, ${bg}, transparent)` } },
});
const edge = (side) => ({
  tag: "div", key: `fade-${side}`, decorative: true,
  style: { base: { position: "absolute", top: "0", bottom: "0", [side]: "0", "z-index": "1", width: "4rem", "pointer-events": "none", "background-image": `linear-gradient(to ${side === "left" ? "right" : "left"}, token(surface), transparent)` }, lg: { width: "10rem" } },
});
const row = (n, prop, attrs) => ({
  tag: "div", key: `row-${n}`, ...(n === 2 ? { if: "showSecondRow" } : {}),
  style: { base: { position: "relative", overflow: "hidden" } },
  children: [
    {
      tag: "div", key: `track-${n}`, repeat: prop, attrs,
      style: { base: { display: "flex", width: "max-content" } },
      children: [
        {
          tag: "div", key: `cell-${n}`,
          style: { base: { display: "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", width: "10rem", height: "4.5rem", "padding-left": "1.5rem", "padding-right": "1.5rem" }, lg: { width: "14rem", height: "6rem" } },
          children: [{ tag: "img", key: `logo-${n}`, bind: "item.logo", style: { base: { display: "block", "max-width": "100%", "max-height": "2.25rem", width: "auto", height: "auto", "object-fit": "contain", filter: "grayscale(1)", opacity: "0.8" } } }],
        },
      ],
    },
  ],
});

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "logos-02",
  prefix: "logos2",
  name: "Logos / Dual Marquee",
  category: "logos",
  description: "Two rows of logos drifting in opposite directions with soft faded edges. Logos invert on dark; second row optional.",

  props: {
    showLabel: { type: "boolean", default: true },
    label: { type: "text", default: "Trusted by teams on the North Shore and beyond" },
    logosTop: { type: "list", fields: { logo: "image" }, default: ["Northwind", "Tidewater", "Halyard", "Saltbox", "Ledgewood", "Pasture"].map(logo) },
    showSecondRow: { type: "boolean", default: true },
    logosBottom: { type: "list", fields: { logo: "image" }, default: ["Granite & Co", "Harbor Lab", "Fieldnotes", "Quarry", "Lantern", "Breakwater"].map(logo) },
  },

  variants: {
    theme: withStyles(themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }), {
      dark: { ...fade("#141414"), "logo-1": { base: { filter: "grayscale(1) invert(1)" } }, "logo-2": { base: { filter: "grayscale(1) invert(1)" } } },
      accent: { ...fade("#ff5b2e"), "logo-1": { base: { opacity: "1" } }, "logo-2": { base: { opacity: "1" } } },
    }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.1, targets: ["label"] },
  },

  tree: {
    role: "section",
    style: { base: { overflow: "hidden", ...t("section") } },
    children: [
      {
        role: "section-padding", size: "medium",
        children: [
          {
            role: "gutter",
            children: [{
              role: "container", size: "large",
              children: [{
                tag: "div", key: "label", bind: "label", if: "showLabel",
                style: { base: { ...mono(), "text-align": "center", "margin-bottom": "2rem", ...t("label") }, lg: { "margin-bottom": "2.75rem" } },
              }],
            }],
          },
          {
            tag: "div", key: "rows",
            style: { base: { position: "relative", display: "flex", "flex-direction": "column", "row-gap": "0.5rem" } },
            children: [
              row(1, "logosTop", { "data-blok-marquee": "", "data-blok-speed": "40" }),
              row(2, "logosBottom", { "data-blok-marquee": "", "data-blok-speed": "32", "data-blok-direction": "reverse" }),
              edge("left"),
              edge("right"),
            ],
          },
        ],
      },
    ],
  },
};
