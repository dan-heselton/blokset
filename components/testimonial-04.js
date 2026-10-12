// One featured quote, then a quiet row of the other clients' marks.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell, withStyles } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  quote: { color: "fg" },
  name: { color: "fg" },
  role: { color: "muted" },
  logos: { "border-top-color": "line" },
};
const t = (key) => themeBase("light", THEME[key]);
const mark = (name) => ({ logo: { src: `https://placehold.co/200x56/f4f1ea/141414/png?text=${encodeURIComponent(name)}&font=montserrat`, alt: name } });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "testimonial-04",
  prefix: "testimonial4",
  name: "Testimonial / Featured Quote",
  category: "testimonial",
  description: "One large quote with attribution, then a row of client marks underneath.",

  props: {
    ...headerProps({
      eyebrow: "From the work",
      heading: "A system, not a one-off",
      description: "North Shore Arts asked for a site their small staff could keep current.",
    }),
    quote: {
      type: "text",
      default: "They handed us a system our team actually uses. It still looks this good two years and forty pages later.",
    },
    name: { type: "text", default: "Maren Okafor" },
    role: { type: "text", default: "Director, North Shore Arts" },
    showAvatar: { type: "boolean", default: true, description: "Show the portrait beside the name." },
    avatar: {
      type: "image",
      default: { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=240&q=80", alt: "Portrait of Maren Okafor" },
    },
    showLogos: { type: "boolean", default: true, description: "Show the client mark row." },
    logos: {
      type: "list",
      fields: { logo: "image" },
      default: ["Northwind", "Tidewater", "Halyard", "Saltbox", "Ledgewood", "Pasture"].map(mark),
    },
  },

  variants: {
    theme: withStyles(themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }), {
      dark: { logo: { base: { filter: "grayscale(1) invert(1)" } } },
      accent: { logo: { base: { opacity: "1" } } },
    }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.1, targets: ["eyebrow", "heading", "description", "quote", "author"] },
    reveal: { preset: "fade", targets: ["logo-cell"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "3rem" }, lg: { "row-gap": "4.5rem" } },
        children: [
          header({ t, layout: "stack" }),
          {
            tag: "p", key: "quote", bind: "quote",
            style: {
              base: { "margin-top": "0", "margin-bottom": "0", "max-width": "58rem", "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1.2", "font-weight": "500", "letter-spacing": "-0.03em", ...t("quote") },
              md: { "font-size": "2.5rem" },
              lg: { "font-size": "3.25rem", "line-height": "1.12" },
            },
          },
          {
            tag: "div", key: "author",
            style: { base: { display: "flex", "align-items": "center", "column-gap": "1rem" } },
            children: [
              {
                tag: "img", key: "avatar", bind: "avatar", if: "showAvatar",
                style: { base: { width: "3.25rem", height: "3.25rem", "object-fit": "cover", "flex-shrink": "0", ...radius("50%") } },
              },
              {
                tag: "div", key: "author-text",
                children: [
                  { tag: "div", key: "name", bind: "name", style: { base: { "font-size": "1.0625rem", "font-weight": "600", "line-height": "1.3", ...t("name") } } },
                  { tag: "div", key: "role", bind: "role", style: { base: { ...mono(), "letter-spacing": "0.04em", "text-transform": "none", ...t("role") } } },
                ],
              },
            ],
          },
          {
            tag: "div", key: "logos", repeat: "logos", if: "showLogos",
            style: {
              base: { display: "flex", "flex-wrap": "wrap", "align-items": "center", "column-gap": "2rem", "row-gap": "1.5rem", "padding-top": "1.5rem", "border-top-width": "1px", "border-top-style": "solid", "border-top-color": t("logos")["border-top-color"] },
              lg: { "column-gap": "3rem", "padding-top": "2rem" },
            },
            children: [
              {
                tag: "div", key: "logo-cell",
                style: { base: { display: "flex", "align-items": "center", height: "2.5rem" } },
                children: [
                  { tag: "img", key: "logo", bind: "item.logo", style: { base: { display: "block", "max-width": "7.5rem", "max-height": "1.75rem", width: "auto", height: "auto", "object-fit": "contain", filter: "grayscale(1)", opacity: "0.75" } } },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
