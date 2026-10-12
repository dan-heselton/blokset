// Quote cards: a short rating, the quote, and a round portrait with a name and role.
import { pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  card: { "background-color": "panel" },
  quote: { color: "fg" },
  rating: { color: "glyph" },
  name: { color: "fg" },
  role: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const face = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=240&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "testimonial-02",
  prefix: "testimonial2",
  name: "Testimonial / Card Grid",
  category: "testimonial",
  description: "Quote cards with a rating, a portrait, and a name. One column on a phone, three on a desktop.",

  props: {
    ...headerProps({
      eyebrow: "Client notes",
      heading: "People we have built with",
      description: "Short notes from teams who stayed after the launch.",
    }),
    quotes: {
      type: "list",
      fields: { quote: "text", rating: "text", name: "text", role: "text", avatar: "image" },
      default: [
        {
          quote: "The site still looks considered two years later, and our editors actually update it.",
          rating: "5.0",
          name: "Maren Okafor",
          role: "Director, North Shore Arts",
          avatar: face("1494790108377-be9c29b29330", "Portrait of Maren Okafor"),
        },
        {
          quote: "They wrote the structure down before they designed anything. That saved us a month.",
          rating: "5.0",
          name: "Eli Hart",
          role: "Founder, Tidewater Supply",
          avatar: face("1507003211169-0a1dd7228f2d", "Portrait of Eli Hart"),
        },
        {
          quote: "We asked for a catalog. We got a catalog our shop staff can run without a call.",
          rating: "5.0",
          name: "June Pell",
          role: "Owner, Saltbox Bakery",
          avatar: face("1438761681033-6461ffad8d80", "Portrait of June Pell"),
        },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
    columns: {
      label: "Columns",
      default: "three",
      options: {
        three: null,
        two: {
          label: "Two",
          styles: {
            grid: {
              base: { "grid-template-columns": "1fr" },
              md: { "grid-template-columns": "1fr 1fr" },
              lg: { "grid-template-columns": "1fr 1fr" },
            },
          },
        },
      },
    },
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] },
    reveal: { preset: "fade-up", targets: ["card"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" }, lg: { "row-gap": "3.5rem" } },
        children: [
          header({ t, layout: "split" }),
          {
            tag: "div", key: "grid", repeat: "quotes",
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "grid-column-gap": "1rem", "grid-row-gap": "1rem" },
              md: { "grid-template-columns": "1fr 1fr", "grid-column-gap": "1.25rem", "grid-row-gap": "1.25rem" },
              lg: { "grid-template-columns": "1fr 1fr 1fr" },
            },
            children: [
              {
                tag: "div", key: "card",
                style: {
                  base: {
                    display: "flex", "flex-direction": "column", "justify-content": "space-between", "row-gap": "2rem",
                    height: "100%", ...pad("1.5rem"), ...radius("token(radius-card)"), ...t("card"),
                  },
                  lg: pad("1.75rem"),
                },
                children: [
                  {
                    tag: "div", key: "card-top",
                    style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1rem" } },
                    children: [
                      { tag: "div", key: "rating", bind: "item.rating", style: { base: { "font-family": "token(font-mono)", "font-size": "0.8125rem", "letter-spacing": "0.08em", ...t("rating") } } },
                      { tag: "p", key: "quote", bind: "item.quote", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.35rem", "line-height": "1.3", "font-weight": "500", "letter-spacing": "-0.02em", ...t("quote") } } },
                    ],
                  },
                  {
                    tag: "div", key: "author",
                    style: { base: { display: "flex", "align-items": "center", "column-gap": "0.85rem" } },
                    children: [
                      { tag: "img", key: "avatar", bind: "item.avatar", style: { base: { width: "2.75rem", height: "2.75rem", "object-fit": "cover", "flex-shrink": "0", ...radius("50%") } } },
                      {
                        tag: "div", key: "author-text",
                        children: [
                          { tag: "div", key: "name", bind: "item.name", style: { base: { "font-size": "1rem", "font-weight": "600", "line-height": "1.3", ...t("name") } } },
                          { tag: "div", key: "role", bind: "item.role", style: { base: { "font-size": "0.875rem", "line-height": "1.4", ...t("role") } } },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
