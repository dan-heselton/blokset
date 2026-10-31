// Spotlight board: one featured project, then supporting tiles that grow on hover.
import { inset0, pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  summary: { color: "muted" },
  "feature-year": { color: "muted" },
};
const t = (key) => themeBase("dark", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1600&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "bento-26",
  prefix: "bento26",
  name: "Work / Spotlight board",
  category: "bento",
  collection: "marketing",
  description: "One featured project above a row of supporting tiles. On a wide screen the tile under the pointer widens.",

  props: {
    ...headerProps({
      eyebrow: "Selected work",
      heading: "One in the light",
      description: "The project we are talking about this season, then the rest of the desk.",
    }),
    featureTitle: { type: "text", default: "North Shore Arts" },
    featureSummary: { type: "text", default: "A site the gallery’s editors can publish without a developer on the call." },
    featureYear: { type: "text", default: "2026" },
    featureHref: { type: "link", default: "#" },
    featureImage: {
      type: "image",
      default: shot("1519710164239-da123dc03ef4", "A sunlit room with a wooden chair and a pale wall"),
    },
    projects: {
      type: "list",
      fields: { title: "text", year: "text", href: "link", image: "image" },
      default: [
        { title: "Tidewater", year: "2026", href: "#", image: shot("1501594907352-04cda38ebc29", "Harbor pier") },
        { title: "Halyard", year: "2025", href: "#", image: shot("1497366216548-37526070297c", "Bright studio") },
        { title: "Saltbox", year: "2025", href: "#", image: shot("1517248135467-4c7edcad34c4", "Bakery interior") },
        { title: "Ledgewood", year: "2024", href: "#", image: shot("1486406146926-c627a92ad1ab", "Glass tower") },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "dark", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description", "feature", "tile"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" }, lg: { "row-gap": "3rem" } },
        children: [
          header({ t, layout: "stack" }),
          {
            tag: "a", key: "feature", href: "featureHref",
            style: {
              base: {
                display: "grid", "grid-template-columns": "minmax(0, 1fr)", "column-gap": "0rem", "row-gap": "1.25rem",
                "align-items": "start", "text-decoration": "none", color: "inherit",
              },
              lg: { "grid-template-columns": "1.4fr 1fr", "column-gap": "2rem", "align-items": "end" },
            },
            children: [
              {
                tag: "div", key: "feature-media",
                style: { base: { position: "relative", overflow: "hidden", "min-height": "16rem", ...radius("token(radius-card)") }, lg: { "min-height": "26rem" } },
                children: [
                  { tag: "img", key: "feature-image", bind: "featureImage", style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } } },
                ],
              },
              {
                tag: "div", key: "feature-copy",
                style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.75rem", ...pad("0.25rem") } },
                children: [
                  { tag: "div", key: "feature-year", bind: "featureYear", style: { base: { "font-size": "0.9375rem", "line-height": "1.4", ...t("feature-year") } } },
                  {
                    tag: "h3", key: "feature-title", bind: "featureTitle",
                    style: {
                      base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "2rem", "line-height": "1.05", "font-weight": "600", "letter-spacing": "-0.03em" },
                      lg: { "font-size": "2.75rem" },
                    },
                  },
                  { tag: "p", key: "summary", bind: "featureSummary", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "28rem", "font-size": "1.0625rem", "line-height": "1.55", ...t("summary") } } },
                ],
              },
            ],
          },
          {
            tag: "div", key: "row", repeat: "projects", attrs: { "data-blok-grow": "" },
            style: {
              base: { display: "flex", "flex-direction": "column", "column-gap": "0rem", "row-gap": "0.75rem", height: "auto" },
              lg: { "flex-direction": "row", "column-gap": "0.75rem", "row-gap": "0rem", height: "22rem" },
            },
            children: [{
              tag: "a", key: "tile", href: "item.href", attrs: { "data-blok-grow-tile": "" },
              style: {
                base: {
                  position: "relative", overflow: "hidden", display: "block", "text-decoration": "none",
                  "flex-grow": "0", "flex-shrink": "1", "flex-basis": "auto", "min-height": "14rem", ...radius("token(radius-card)"),
                },
                lg: { "flex-grow": "1", "flex-basis": "0px", "min-height": "0px" },
              },
              children: [
                { tag: "img", key: "tile-image", bind: "item.image", style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } } },
                {
                  tag: "div", key: "tile-shade", decorative: true,
                  style: { base: { ...inset0, "background-image": "linear-gradient(to top, token(shade-strong), token(shade-clear) 55%)" } },
                },
                {
                  tag: "div", key: "tile-meta",
                  style: {
                    base: {
                      position: "absolute", right: "1rem", bottom: "1rem", left: "1rem", top: "auto",
                      display: "flex", "flex-direction": "column", "row-gap": "0.2rem",
                    },
                  },
                  children: [
                    { tag: "h3", key: "tile-title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0", color: "token(text-inverse)", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.1", "font-weight": "600" } } },
                    { tag: "div", key: "tile-year", bind: "item.year", style: { base: { color: "token(text-inverse)", "font-size": "0.875rem", "line-height": "1.4", opacity: "0.8" } } },
                  ],
                },
              ],
            }],
          },
        ],
      }),
    ],
  },
};
