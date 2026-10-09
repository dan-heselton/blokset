// Article cards: image, date, title, and a link.
import { themeVariant, themeBase, radius, mono } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  eyebrow: { color: "muted" },
  description: { color: "muted" },
  date: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1200&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "posts-01",
  prefix: "posts1",
  name: "Posts / Article Grid",
  category: "posts",
  description: "Article cards with an image, a date, a title, and a link. Three columns, or two.",

  props: {
    ...headerProps({
      eyebrow: "Notes",
      heading: "Writing from the studio",
      description: "Short pieces on process, Webflow, and the decisions behind a launch.",
    }),
    posts: {
      type: "list",
      fields: { title: "text", date: "text", href: "link", image: "image" },
      default: [
        { title: "What we send before a kickoff", date: "March 2026", href: "#", image: photo("1497366216548-37526070297c", "Notes on a studio desk") },
        { title: "A CMS an editor will actually open", date: "January 2026", href: "#", image: photo("1519710164239-da123dc03ef4", "A quiet room with a chair") },
        { title: "Motion that survives reduced-motion", date: "November 2025", href: "#", image: photo("1469474968028-56623f02e42e", "A ridge in soft light") },
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
            tag: "div", key: "grid", repeat: "posts",
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "grid-column-gap": "1.25rem", "grid-row-gap": "2rem" },
              lg: { "grid-template-columns": "1fr 1fr 1fr", "grid-column-gap": "1.5rem", "grid-row-gap": "2rem" },
            },
            children: [
              {
                tag: "div", key: "card",
                children: [
                  {
                    tag: "div", key: "card-media",
                    style: { base: { overflow: "hidden", "aspect-ratio": "3 / 2", "margin-bottom": "1rem", ...radius("token(radius-card)") } },
                    children: [{ tag: "img", key: "card-image", bind: "item.image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } }],
                  },
                  { tag: "div", key: "date", bind: "item.date", style: { base: { ...mono(), "margin-bottom": "0.5rem", ...t("date") } } },
                  { tag: "h3", key: "card-title", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.2", "font-weight": "600", "letter-spacing": "-0.03em" } }, children: [
                    { tag: "a", key: "card-link", bind: "item.title", href: "item.href", style: { base: { color: "inherit", "text-decoration": "none" } } },
                  ] },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
