// Portraits in a sideways row. Phones swipe. Desktop pins the row and scrolls it sideways.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  role: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=900&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "team-06",
  prefix: "team6",
  name: "Team / Strip",
  category: "team",
  description: "Portraits with a name and a role in a sideways row. Phones swipe. Desktop scrolls the row as the page moves.",

  props: {
    ...headerProps({
      eyebrow: "The studio",
      heading: "The people on the work",
      description: "Five of us. Add a card when someone joins.",
    }),
    showRole: { type: "boolean", default: true, description: "Show each person's role." },
    people: {
      type: "list",
      fields: { name: "text", role: "text", href: "link", image: "image" },
      default: [
        { name: "Maren Okafor", role: "Design", href: "#", image: photo("1494790108377-be9c29b29330", "Portrait of Maren Okafor") },
        { name: "Eli Hart", role: "Webflow", href: "#", image: photo("1507003211169-0a1dd7228f2d", "Portrait of Eli Hart") },
        { name: "June Pell", role: "Strategy", href: "#", image: photo("1438761681033-6461ffad8d80", "Portrait of June Pell") },
        { name: "Noah Voss", role: "Engineering", href: "#", image: photo("1500648767791-00dcc994a43e", "Portrait of Noah Voss") },
        { name: "Ada Kim", role: "Content", href: "#", image: photo("1544005313-94ddf0286df2", "Portrait of Ada Kim") },
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
        tag: "div", key: "component", attrs: { "data-blok-hscroll": "" },
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" }, lg: { "row-gap": "3.5rem" } },
        children: [
          header({ t }),
          {
            tag: "div", key: "track", repeat: "people", attrs: { "data-blok-hscroll-track": "" },
            style: {
              base: {
                display: "flex", "column-gap": "1rem", "overflow-x": "auto", "scroll-snap-type": "x mandatory",
                "padding-bottom": "0.5rem",
              },
              lg: { "column-gap": "1.25rem" },
            },
            children: [{
              tag: "a", key: "card", href: "item.href",
              style: {
                base: { display: "block", "flex-shrink": "0", width: "72vw", color: "inherit", "text-decoration": "none", "scroll-snap-align": "start" },
                md: { width: "16rem" },
                lg: { width: "18rem" },
              },
              children: [
                {
                  tag: "div", key: "portrait",
                  style: { base: { overflow: "hidden", "aspect-ratio": "3 / 4", ...radius("token(radius-card)") } },
                  children: [
                    { tag: "img", key: "image", bind: "item.image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } },
                  ],
                },
                {
                  tag: "h3", key: "name", bind: "item.name",
                  style: { base: { "margin-top": "0.85rem", "margin-bottom": "0.2rem", "font-family": "token(font-display)", "font-size": "1.25rem", "line-height": "1.2", "font-weight": "600", "letter-spacing": "-0.02em" } },
                },
                { tag: "div", key: "role", bind: "item.role", if: "showRole", style: { base: { ...mono(), ...t("role") } } },
              ],
            }],
          },
        ],
      }),
    ],
  },
};
