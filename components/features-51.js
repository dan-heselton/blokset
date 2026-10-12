// A card with a photograph on the front. Click or Enter turns it over to a short note.
import { inset0, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  back: { "background-color": "panel", color: "fg" },
  note: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1200&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "features-51",
  prefix: "features51",
  name: "Features / Flip",
  category: "features",
  description: "A card with a photograph on the front. Click or Enter turns it over to a short note. Click again to turn it back.",

  props: {
    ...headerProps({
      eyebrow: "Flip",
      heading: "Turn a card over",
      description: "The front is the photograph. The back is the note. Click, or press Enter.",
    }),
    cards: {
      type: "list",
      fields: { title: "text", note: "text", image: "image" },
      default: [
        { title: "Field chair", note: "Ash, one pin, and a seat that is allowed to darken where you sit.", image: shot("1519710164239-da123dc03ef4", "A wooden chair in a pale room") },
        { title: "Harbor lamp", note: "Paper shade, brass stem, and a cloth cord long enough to move the table.", image: shot("1497366216548-37526070297c", "A lamp on a studio desk") },
        { title: "North tray", note: "One sheet of steel, folded once, left without a lacquer.", image: shot("1486406146926-c627a92ad1ab", "A clear glass facade") },
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
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" } },
        children: [
          header({ t, layout: "stack" }),
          {
            tag: "div", key: "cards", repeat: "cards",
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "grid-column-gap": "1rem", "grid-row-gap": "1rem", perspective: "1200px" },
              md: { "grid-template-columns": "1fr 1fr" },
              lg: { "grid-template-columns": "1fr 1fr 1fr" },
            },
            children: [{
              tag: "div", key: "card", attrs: { "data-blok-flip": "" },
              style: {
                base: { position: "relative", height: "26rem", cursor: "pointer", "transform-style": "preserve-3d", ...radius("token(radius-card)") },
              },
              children: [
                {
                  tag: "div", key: "front", attrs: { "data-blok-flip-front": "" },
                  style: { base: { ...inset0, overflow: "hidden", "backface-visibility": "hidden", ...radius("token(radius-card)") } },
                  children: [{
                    tag: "img", key: "photo", bind: "item.image",
                    style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } },
                  }],
                },
                {
                  tag: "div", key: "back", attrs: { "data-blok-flip-back": "" },
                  style: {
                    base: {
                      ...inset0, ...t("back"), ...radius("token(radius-card)"),
                      display: "flex", "flex-direction": "column", "justify-content": "flex-end", "row-gap": "0.75rem",
                      overflow: "hidden", transform: "rotateY(180deg)", "backface-visibility": "hidden",
                      "padding-top": "1.5rem", "padding-right": "1.5rem", "padding-bottom": "1.5rem", "padding-left": "1.5rem",
                    },
                  },
                  children: [
                    { tag: "h3", key: "title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1.1", "font-weight": "600", "letter-spacing": "-0.03em" } } },
                    { tag: "p", key: "note", bind: "item.note", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1.0625rem", "line-height": "1.55", ...t("note") } } },
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
