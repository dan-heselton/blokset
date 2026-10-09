// Equal icon cards: a mono mark, a title, and a short line of text.
import { themeVariant, themeBase, radius, mono, pad } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  eyebrow: { color: "muted" },
  description: { color: "muted" },
  card: { "background-color": "panel" },
  mark: { color: "glyph" },
  "card-text": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "features-03",
  prefix: "features3",
  name: "Features / Icon Grid",
  category: "features",
  description: "Equal cards with a short mark, a title, and one paragraph. Three columns, or two.",

  props: {
    ...headerProps({
      eyebrow: "Included",
      heading: "What every project covers",
      description: "The same six pieces, whether the site is a brochure or a catalog.",
    }),
    features: {
      type: "list",
      fields: { mark: "text", title: "text", text: "text" },
      default: [
        { mark: "01", title: "Brief", text: "Goals, audience, and the pages that matter, written down before design starts." },
        { mark: "02", title: "Structure", text: "A sitemap and a content model your editors can follow without a diagram." },
        { mark: "03", title: "Design", text: "Type, color, and components tried in the browser, not in a slide." },
        { mark: "04", title: "Build", text: "Webflow or Astro, with classes your next developer can read." },
        { mark: "05", title: "Content", text: "A first pass at the words, so launch day is not an empty CMS." },
        { mark: "06", title: "Handoff", text: "Training, redirects, and a checklist you keep after we leave." },
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
              base: { display: "grid", "grid-template-columns": "1fr", "grid-column-gap": "1rem", "grid-row-gap": "1rem" },
              md: { "grid-template-columns": "1fr 1fr", "grid-column-gap": "1.25rem", "grid-row-gap": "1.25rem" },
              lg: { "grid-template-columns": "1fr 1fr 1fr", "grid-column-gap": "1.25rem", "grid-row-gap": "1.25rem" },
            },
            children: [
              {
                tag: "div", key: "card",
                style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.75rem", ...pad("1.25rem"), ...radius("token(radius-card)"), ...t("card") }, lg: { ...pad("1.5rem") } },
                children: [
                  { tag: "div", key: "mark", bind: "item.mark", style: { base: { ...mono(), ...t("mark") } } },
                  { tag: "h3", key: "card-title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.15", "font-weight": "600", "letter-spacing": "-0.03em" } } },
                  { tag: "p", key: "card-text", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.55", ...t("card-text") } } },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
