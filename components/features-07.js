// Photograph beside a checklist. The check mark is decorative; the line is the content.
import { themeVariant, themeBase, radius } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  eyebrow: { color: "muted" },
  description: { color: "muted" },
  item: { "border-top-color": "line" },
  mark: { color: "glyph" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "features-07",
  prefix: "features7",
  name: "Features / Checklist",
  category: "features",
  description: "A photograph beside a checklist. Image can sit on the left or the right.",

  props: {
    ...headerProps({
      eyebrow: "Before we start",
      heading: "What we need from you",
      description: "A short list. Most teams have these already, and we help with the ones they do not.",
    }),
    showImage: { type: "boolean", default: true },
    image: { type: "image", default: photo("1497366216548-37526070297c", "Bright studio with a long desk") },
    items: {
      type: "list",
      fields: { text: "text" },
      default: [
        { text: "Who the site is for, in one sentence." },
        { text: "The pages you know you need, even if the names change." },
        { text: "A logo and any colors you already use." },
        { text: "Two or three sites you like, and one you do not." },
        { text: "The person who will publish after launch." },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
    imageSide: {
      label: "Image side",
      default: "left",
      options: {
        left: null,
        right: { styles: { layout: { base: { "flex-direction": "column" }, lg: { "flex-direction": "row-reverse" } } } },
      },
    },
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] },
    reveal: { preset: "fade-up", targets: ["item"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" } },
        children: [
          header({ t, layout: "stack" }),
          {
            tag: "div", key: "layout",
            style: {
              base: { display: "flex", "flex-direction": "column", "align-items": "stretch", "row-gap": "2rem", "column-gap": "0rem" },
              lg: { "flex-direction": "row", "align-items": "center", "row-gap": "0rem", "column-gap": "4rem" },
            },
            children: [
              {
                tag: "div", key: "media", if: "showImage",
                style: { base: { width: "100%", overflow: "hidden", "aspect-ratio": "4 / 3", ...radius("token(radius-card)") }, lg: { width: "48%", "aspect-ratio": "4 / 5" } },
                children: [{ tag: "img", key: "image", bind: "image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } }],
              },
              {
                tag: "div", key: "list", repeat: "items",
                style: { base: { width: "100%", "flex-grow": "1" }, lg: { width: "52%" } },
                children: [
                  {
                    tag: "div", key: "item",
                    style: { base: { display: "flex", "align-items": "flex-start", "column-gap": "0.85rem", "padding-top": "1rem", "padding-bottom": "1rem", "border-top-width": "1px", "border-top-style": "solid", ...t("item") } },
                    children: [
                      { tag: "div", key: "mark", text: "✓", decorative: true, style: { base: { "flex-shrink": "0", "font-size": "1rem", "line-height": "1.55", ...t("mark") } } },
                      { tag: "p", key: "item-text", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1.0625rem", "line-height": "1.55" } } },
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
