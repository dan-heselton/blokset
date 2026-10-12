// Three columns of photographs, each drifting at its own speed as you scroll.
import { radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ image: { src: `https://images.unsplash.com/photo-${id}?w=1000&q=80`, alt } });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "gallery-14",
  prefix: "gallery14",
  name: "Gallery / Parallax Columns",
  category: "gallery",
  description: "Three columns of photographs moving at opposite speeds while the page scrolls.",

  props: {
    ...headerProps({
      eyebrow: "Field notes",
      heading: "Pictures at three speeds",
      description: "The middle column lags. The outer ones pull ahead.",
    }),
    column1: {
      type: "list",
      fields: { image: "image" },
      default: [
        shot("1501594907352-04cda38ebc29", "Harbor water and a low pier"),
        shot("1519710164239-da123dc03ef4", "Sunlit room with a wooden chair"),
        shot("1469474968028-56623f02e42e", "A ridge in warm light"),
      ],
    },
    column2: {
      type: "list",
      fields: { image: "image" },
      default: [
        shot("1497366216548-37526070297c", "A bright studio with long desks"),
        shot("1517248135467-4c7edcad34c4", "A dining room with set tables"),
        shot("1500530855697-b586d89ba3ee", "Green hills under a pale sky"),
      ],
    },
    column3: {
      type: "list",
      fields: { image: "image" },
      default: [
        shot("1486406146926-c627a92ad1ab", "A glass tower against a clear sky"),
        shot("1494790108377-be9c29b29330", "A portrait in soft window light"),
        shot("1500648767791-00dcc994a43e", "A portrait against a plain wall"),
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
      {
        role: "section-padding", size: "large",
        children: [
          { role: "gutter", children: [{ role: "container", size: "large", children: [header({ t, layout: "split" })] }] },
          {
            tag: "div", key: "columns",
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "grid-column-gap": "0.75rem", "margin-top": "2.5rem" },
              md: { "grid-template-columns": "1fr 1fr 1fr" },
              lg: { "grid-column-gap": "1rem", "margin-top": "3.5rem" },
            },
            children: [
              column(1, "column1", "-0.4"),
              column(2, "column2", "0.22"),
              column(3, "column3", "-0.18"),
            ],
          },
        ],
      },
    ],
  },
};

function column(n, prop, speed) {
  return {
    tag: "div", key: `column-${n}`,
    style: { base: { overflow: "hidden", height: "22rem" }, lg: { height: "36rem" } },
    children: [
      {
        tag: "div", key: `track-${n}`, repeat: prop, attrs: { "data-blok-depth": speed },
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.75rem" }, lg: { "row-gap": "1rem" } },
        children: [
          {
            tag: "div", key: `frame-${n}`,
            style: { base: { overflow: "hidden", height: "14rem", "flex-shrink": "0", ...radius("token(radius-card)") }, lg: { height: "18rem" } },
            children: [
              { tag: "img", key: `image-${n}`, bind: "item.image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } },
            ],
          },
        ],
      },
    ],
  };
}
