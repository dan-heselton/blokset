// Portrait grid: photo, name, and role.
import { themeVariant, themeBase, radius, mono } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  eyebrow: { color: "muted" },
  description: { color: "muted" },
  role: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=800&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "team-01",
  prefix: "team1",
  name: "Team / Portrait Grid",
  category: "team",
  description: "Portraits with a name and a role. Two columns on a phone, four on a desktop.",

  props: {
    ...headerProps({
      eyebrow: "The studio",
      heading: "People you will actually meet",
      description: "A small team. The person on the first call is usually the person doing the work.",
    }),
    people: {
      type: "list",
      fields: { name: "text", role: "text", image: "image" },
      default: [
        { name: "Maren Okafor", role: "Design", image: photo("1494790108377-be9c29b29330", "Portrait of Maren Okafor") },
        { name: "Eli Hart", role: "Webflow", image: photo("1507003211169-0a1dd7228f2d", "Portrait of Eli Hart") },
        { name: "June Pell", role: "Strategy", image: photo("1438761681033-6461ffad8d80", "Portrait of June Pell") },
        { name: "Noah Voss", role: "Engineering", image: photo("1500648767791-00dcc994a43e", "Portrait of Noah Voss") },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] },
    reveal: { preset: "fade-up", targets: ["person"] },
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
            tag: "div", key: "grid", repeat: "people",
            style: {
              base: { display: "grid", "grid-template-columns": "1fr 1fr", "grid-column-gap": "1rem", "grid-row-gap": "1.75rem" },
              lg: { "grid-template-columns": "1fr 1fr 1fr 1fr", "grid-column-gap": "1.25rem", "grid-row-gap": "2rem" },
            },
            children: [
              {
                tag: "div", key: "person",
                children: [
                  {
                    tag: "div", key: "portrait",
                    style: { base: { overflow: "hidden", "aspect-ratio": "3 / 4", "margin-bottom": "0.9rem", ...radius("token(radius-card)") } },
                    children: [{ tag: "img", key: "portrait-image", bind: "item.image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } }],
                  },
                  { tag: "h3", key: "name", bind: "item.name", style: { base: { "margin-top": "0", "margin-bottom": "0.25rem", "font-family": "token(font-display)", "font-size": "1.35rem", "line-height": "1.2", "font-weight": "600", "letter-spacing": "-0.02em" } } },
                  { tag: "div", key: "role", bind: "item.role", style: { base: { ...mono(), ...t("role") } } },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
