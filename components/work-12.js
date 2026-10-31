// Paired parallax columns: two project stacks drifting at opposite speeds.
import { radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  "year-left": { color: "muted" },
  "year-right": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ image: { src: `https://images.unsplash.com/photo-${id}?w=1200&q=80`, alt } });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "work-12",
  prefix: "work12",
  name: "Work / Paired columns",
  category: "work",
  collection: "marketing",
  description: "Two columns of projects. As you scroll, one rises and the other lags. Captions stay with each frame.",

  props: {
    ...headerProps({
      eyebrow: "Selected work",
      heading: "Two columns, two speeds",
      description: "The left column pulls ahead. The right one waits. Each frame is a project.",
    }),
    left: {
      type: "list",
      fields: { title: "text", year: "text", href: "link", image: "image" },
      default: [
        { title: "North Shore Arts", year: "2026", href: "#", ...shot("1519710164239-da123dc03ef4", "Sunlit room") },
        { title: "Halyard", year: "2025", href: "#", ...shot("1497366216548-37526070297c", "Studio desks") },
        { title: "Ledgewood", year: "2024", href: "#", ...shot("1486406146926-c627a92ad1ab", "Glass tower") },
      ],
    },
    right: {
      type: "list",
      fields: { title: "text", year: "text", href: "link", image: "image" },
      default: [
        { title: "Tidewater Supply", year: "2026", href: "#", ...shot("1501594907352-04cda38ebc29", "Harbor pier") },
        { title: "Saltbox Bakery", year: "2025", href: "#", ...shot("1517248135467-4c7edcad34c4", "Bakery") },
        { title: "Stillwater", year: "2024", href: "#", ...shot("1540541338287-41700207dee6", "Pool at dusk") },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] },
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
            tag: "div", key: "columns",
            style: {
              base: { display: "grid", "grid-template-columns": "minmax(0, 1fr)", "column-gap": "0.85rem", "row-gap": "2rem" },
              md: { "grid-template-columns": "1fr 1fr", "row-gap": "0rem" },
              lg: { "column-gap": "1.25rem" },
            },
            children: [
              column("left", "left", "-0.32"),
              column("right", "right", "0.24"),
            ],
          },
        ],
      }),
    ],
  },
};

function column(key, prop, speed) {
  return {
    tag: "div", key: `column-${key}`,
    style: { base: { overflow: "hidden", height: "28rem" }, lg: { height: "42rem" } },
    children: [{
      tag: "div", key: `track-${key}`, repeat: prop, attrs: { "data-blok-depth": speed },
      style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1.25rem" }, lg: { "row-gap": "1.5rem" } },
      children: [{
        tag: "a", key: `frame-${key}`, href: "item.href",
        style: {
          base: {
            display: "flex", "flex-direction": "column", "row-gap": "0.75rem", "flex-shrink": "0",
            "text-decoration": "none", color: "inherit",
          },
        },
        children: [
          {
            tag: "div", key: `media-${key}`,
            style: { base: { overflow: "hidden", height: "16rem", ...radius("token(radius-card)") }, lg: { height: "20rem" } },
            children: [
              { tag: "img", key: `image-${key}`, bind: "item.image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } },
            ],
          },
          {
            tag: "div", key: `meta-${key}`,
            style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.25rem" } },
            children: [
              { tag: "div", key: `year-${key}`, bind: "item.year", style: { base: { "font-size": "0.875rem", "line-height": "1.4", ...t(`year-${key}`) } } },
              {
                tag: "h3", key: `title-${key}`, bind: "item.title",
                style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.35rem", "line-height": "1.15", "font-weight": "600", "letter-spacing": "-0.02em" } },
              },
            ],
          },
        ],
      }],
    }],
  };
}
