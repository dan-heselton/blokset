// A large photograph with smaller cards that turn over.
import { inset0, pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
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
  id: "bento-05",
  prefix: "bento05",
  name: "Bento / Flip",
  category: "bento",
  description: "One large photograph, and smaller cards beside it. Click or press Enter to turn a card over. Click again to turn it back.",

  props: {
    ...headerProps({ eyebrow: "Turn it", heading: "The note is on the back", description: "The front is the photograph. The back is the sentence." }),
    image: { type: "image", default: shot("1497366216548-37526070297c", "A bright studio with a long desk") },
    photoTitle: { type: "text", default: "The room we work in" },
    cards: {
      type: "list",
      fields: { title: "text", note: "text", image: "image" },
      default: [
        { title: "Field chair", note: "Ash, one pin, and a seat that is allowed to darken.", image: shot("1519710164239-da123dc03ef4", "A wooden chair in a pale room") },
        { title: "Harbor lamp", note: "Paper shade, brass stem, cloth cord.", image: shot("1500530855697-b586d89ba3ee", "Green hills under a pale sky") },
        { title: "North tray", note: "One sheet of steel, folded once.", image: shot("1486406146926-c627a92ad1ab", "A glass facade against a clear sky") },
      ],
    },
  },

  variants: { theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }) },
  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" } },
        children: [
          header({ t, layout: "split" }),
          {
            tag: "div", key: "grid",
            style: {
              base: { display: "grid", "grid-template-columns": "minmax(0, 1fr)", "column-gap": "1rem", "row-gap": "1rem" },
              lg: { "grid-template-columns": "repeat(3, minmax(0, 1fr))" },
            },
            children: [
              {
                tag: "div", key: "photo",
                style: {
                  base: { position: "relative", overflow: "hidden", "min-height": "18rem", "grid-column-start": "span 1", "grid-column-end": "span 1", "grid-row-start": "span 1", "grid-row-end": "span 1", ...radius("token(radius-card)") },
                  lg: { "grid-column-start": "span 2", "grid-column-end": "span 2", "min-height": "28rem" },
                },
                children: [
                  { tag: "img", key: "photo-image", bind: "image", style: { base: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", width: "100%", height: "100%", "object-fit": "cover" } } },
                  {
                    tag: "h3", key: "photo-title", bind: "photoTitle",
                    style: { base: { position: "absolute", right: "1.25rem", bottom: "1.25rem", left: "1.25rem", top: "auto", "margin-top": "0", "margin-bottom": "0", color: "token(text-inverse)", "font-family": "token(font-display)", "font-size": "2rem", "line-height": "1.05", "font-weight": "600" } },
                  },
                ],
              },
              {
                tag: "div", key: "stack",
                style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1rem" } },
                children: [{
                  tag: "div", key: "stack-list", repeat: "cards",
                  style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1rem" } },
                  children: [{
                  tag: "div", key: "card", attrs: { "data-blok-flip": "" },
                  style: { base: { position: "relative", height: "11rem", cursor: "pointer", "transform-style": "preserve-3d", ...radius("token(radius-card)") } },
                  children: [
                    {
                      tag: "div", key: "front", attrs: { "data-blok-flip-front": "" },
                      style: { base: { ...inset0, overflow: "hidden", "backface-visibility": "hidden", ...radius("token(radius-card)") } },
                      children: [{ tag: "img", key: "front-image", bind: "item.image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } }],
                    },
                    {
                      tag: "div", key: "back", attrs: { "data-blok-flip-back": "" },
                      style: { base: { ...inset0, overflow: "hidden", display: "flex", "flex-direction": "column", "justify-content": "flex-end", transform: "rotateY(180deg)", "backface-visibility": "hidden", ...radius("token(radius-card)"), ...pad("1rem"), ...t("back") } },
                      children: [
                        { tag: "h3", key: "title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0.35rem", "font-family": "token(font-display)", "font-size": "1.25rem", "line-height": "1.1", "font-weight": "600" } } },
                        { tag: "p", key: "note", bind: "item.note", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "0.95rem", "line-height": "1.45", ...t("note") } } },
                      ],
                    },
                  ],
                  }],
                }],
              },
            ],
          },
        ],
      }),
    ],
  },
};
