// Cards piled on top of each other. A click or a short swipe sends the top card to the back.
import { radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  card: { "background-color": "panel", color: "fg" },
  index: { color: "muted" },
  note: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1200&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "features-46",
  prefix: "features46",
  name: "Features / Deck",
  category: "features",
  description: "Cards piled on top of each other. Click or a short swipe sends the top card to the back. Adding a list item adds a card.",

  props: {
    ...headerProps({
      eyebrow: "Deck",
      heading: "Turn the stack",
      description: "The top card is the one you can read. Send it to the back and the next one is waiting.",
    }),
    cards: {
      type: "list",
      fields: { title: "text", note: "text", image: "image" },
      default: [
        { title: "Field chair", note: "Ash seat, one pin, no finish on the wood.", image: shot("1519710164239-da123dc03ef4", "A wooden chair in daylight") },
        { title: "Harbor lamp", note: "Paper shade, brass stem, a cord you can see.", image: shot("1497366216548-37526070297c", "A lamp on a long desk") },
        { title: "North tray", note: "A single sheet of steel, folded once.", image: shot("1486406146926-c627a92ad1ab", "A glass building in clear light") },
        { title: "Window bench", note: "The length of the sill, and no more.", image: shot("1500530855697-b586d89ba3ee", "A low horizon of green hills") },
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
            tag: "div", key: "deck", repeat: "cards", attrs: { "data-blok-deck": "" },
            style: { base: { position: "relative", height: "34rem", width: "100%" } },
            children: [{
              tag: "div", key: "card", attrs: { "data-blok-deck-card": "" },
              style: {
                base: {
                  position: "absolute", top: "0", left: "0", right: "0",
                  width: "100%", "max-width": "26rem", height: "28rem",
                  "margin-top": "0", "margin-right": "auto", "margin-bottom": "0", "margin-left": "auto",
                  overflow: "hidden", cursor: "pointer", ...radius("token(radius-card)"), ...t("card"),
                },
              },
              children: [
                {
                  tag: "img", key: "photo", bind: "item.image",
                  style: { base: { display: "block", width: "100%", height: "16rem", "object-fit": "cover" } },
                },
                {
                  tag: "div", key: "body",
                  style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.5rem", "padding-top": "1.25rem", "padding-right": "1.25rem", "padding-bottom": "1.25rem", "padding-left": "1.25rem" } },
                  children: [
                    { tag: "div", key: "index", bind: "@index", decorative: true, style: { base: { "font-family": "token(font-mono)", "font-size": "0.75rem", "letter-spacing": "0.08em", ...t("index") } } },
                    { tag: "h3", key: "title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1.1", "font-weight": "600", "letter-spacing": "-0.03em" } } },
                    { tag: "p", key: "note", bind: "item.note", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.5", ...t("note") } } },
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
