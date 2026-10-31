// Project card rail: peek of the next card with previous and next controls.
import { inset0, mono, pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  count: { color: "muted" },
  "card-year": { color: "muted" },
  "card-role": { color: "muted" },
  prev: { color: "fg", "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line" },
  next: { color: "fg", "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });
const control = (key) => ({
  base: {
    ...mono(), cursor: "pointer", ...pad("0.75rem"),
    "border-top-width": "1px", "border-right-width": "1px", "border-bottom-width": "1px", "border-left-width": "1px",
    "border-top-style": "solid", "border-right-style": "solid", "border-bottom-style": "solid", "border-left-style": "solid",
    ...radius("999px"), ...t(key),
  },
});

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "carousel-06",
  prefix: "carousel6",
  name: "Work / Card rail",
  category: "carousel",
  collection: "marketing",
  description: "A horizontal rail of project cards. A sliver of the next card peeks in. Arrows and a swipe move the row.",

  props: {
    ...headerProps({
      eyebrow: "Selected work",
      heading: "Cards on a rail",
      description: "Each card is a project. Keep scrolling the row until you find the one you want.",
    }),
    projects: {
      type: "list",
      fields: { title: "text", year: "text", role: "text", href: "link", image: "image" },
      default: [
        { title: "North Shore Arts", year: "2026", role: "Museum site", href: "#", image: shot("1519710164239-da123dc03ef4", "Sunlit room") },
        { title: "Tidewater Supply", year: "2026", role: "Commerce", href: "#", image: shot("1501594907352-04cda38ebc29", "Harbor pier") },
        { title: "Halyard", year: "2025", role: "Product", href: "#", image: shot("1497366216548-37526070297c", "Studio desks") },
        { title: "Saltbox Bakery", year: "2025", role: "Local shop", href: "#", image: shot("1517248135467-4c7edcad34c4", "Bakery") },
        { title: "Ledgewood", year: "2024", role: "Architecture", href: "#", image: shot("1486406146926-c627a92ad1ab", "Glass tower") },
        { title: "Stillwater", year: "2024", role: "Wellness", href: "#", image: shot("1540541338287-41700207dee6", "Pool at dusk") },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description", "slider"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" } },
        children: [
          header({ t, layout: "stack" }),
          {
            tag: "div", key: "slider", attrs: { "data-blok-slider": "" },
            style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1.25rem" } },
            children: [
              {
                tag: "div", key: "controls",
                style: { base: { display: "flex", "align-items": "center", "column-gap": "0.75rem" } },
                children: [
                  { tag: "div", key: "count", text: "01 / 06", attrs: { "data-blok-slider-count": "" }, style: { base: { ...mono(), "margin-right": "auto", ...t("count") } } },
                  { tag: "div", key: "prev", text: "Previous", attrs: { "data-blok-slider-prev": "" }, style: control("prev") },
                  { tag: "div", key: "next", text: "Next", attrs: { "data-blok-slider-next": "" }, style: control("next") },
                ],
              },
              {
                tag: "div", key: "viewport",
                style: { base: { overflow: "hidden", width: "100%" } },
                children: [{
                  tag: "div", key: "track", repeat: "projects", attrs: { "data-blok-slider-track": "" },
                  style: { base: { display: "flex", width: "100%", "column-gap": "1rem", "touch-action": "pan-y" }, lg: { "column-gap": "1.25rem" } },
                  children: [{
                    tag: "a", key: "card", href: "item.href", attrs: { "data-blok-slider-card": "" },
                    style: {
                      base: {
                        "flex-shrink": "0", width: "78%", display: "flex", "flex-direction": "column", "row-gap": "0.9rem",
                        "text-decoration": "none", color: "inherit",
                      },
                      lg: { width: "38%" },
                    },
                    children: [
                      {
                        tag: "div", key: "card-media",
                        style: { base: { position: "relative", overflow: "hidden", "aspect-ratio": "4 / 5", ...radius("token(radius-card)") } },
                        children: [
                          { tag: "img", key: "card-image", bind: "item.image", style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } } },
                        ],
                      },
                      {
                        tag: "div", key: "card-meta",
                        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.35rem" } },
                        children: [
                          { tag: "div", key: "card-year", bind: "item.year", style: { base: { ...mono(), ...t("card-year") } } },
                          {
                            tag: "h3", key: "card-title", bind: "item.title",
                            style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.15", "font-weight": "600", "letter-spacing": "-0.02em" } },
                          },
                          { tag: "div", key: "card-role", bind: "item.role", style: { base: { "font-size": "0.9375rem", "line-height": "1.4", ...t("card-role") } } },
                        ],
                      },
                    ],
                  }],
                }],
              },
            ],
          },
        ],
      }),
    ],
  },
};
