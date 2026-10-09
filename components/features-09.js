// Equal cards with a photograph, a title, and a short description.
import { themeVariant, themeBase, radius } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  eyebrow: { color: "muted" },
  description: { color: "muted" },
  "card-text": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1000&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "features-09",
  prefix: "features9",
  name: "Features / Card Grid",
  category: "features",
  description: "Equal cards, each with a photograph, a title, and a short description.",

  props: {
    ...headerProps({
      eyebrow: "Offers",
      heading: "Three ways to begin",
      description: "Pick the shape that matches the work. We can change the scope after the first call.",
    }),
    features: {
      type: "list",
      fields: { title: "text", text: "text", image: "image" },
      default: [
        { title: "A new site", text: "Sitemap, design, and a build your team can edit. Most land in six to ten weeks.", image: photo("1519710164239-da123dc03ef4", "Sunlit room with a wooden chair") },
        { title: "A refresh", text: "Keep the content that works. Replace the structure, the type, and the slow pages.", image: photo("1497366216548-37526070297c", "Bright office with long desks") },
        { title: "A product page", text: "One offer, told clearly, with proof and a single next step.", image: photo("1486406146926-c627a92ad1ab", "Glass building facade") },
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
        two: { styles: { grid: { base: { "grid-template-columns": "1fr" }, lg: { "grid-template-columns": "1fr 1fr" } } } },
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
            tag: "div", key: "grid", repeat: "features",
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "grid-column-gap": "1.25rem", "grid-row-gap": "1.75rem" },
              lg: { "grid-template-columns": "1fr 1fr 1fr", "grid-column-gap": "1.5rem", "grid-row-gap": "2rem" },
            },
            children: [
              {
                tag: "div", key: "card",
                children: [
                  {
                    tag: "div", key: "card-media",
                    style: { base: { overflow: "hidden", "aspect-ratio": "4 / 3", "margin-bottom": "1rem", ...radius("token(radius-card)") } },
                    children: [{ tag: "img", key: "card-image", bind: "item.image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } }],
                  },
                  { tag: "h3", key: "card-title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0.5rem", "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1.1", "font-weight": "600", "letter-spacing": "-0.03em" } } },
                  { tag: "p", key: "card-text", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1.0625rem", "line-height": "1.55", ...t("card-text") } } },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
