// One tile scrolls words. Another scrolls photographs the other way.
import { inset0, mono, pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  "word-card": { "background-color": "panel", color: "fg" },
  "copy-card": { "background-color": "panel", color: "fg" },
  "note-card": { "background-color": "card" },
  pill: { color: "fg", "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line" },
  "copy-text": { color: "muted" },
  "place-card": { "background-color": "panel", color: "fg" },
  "place-text": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ image: { src: `https://images.unsplash.com/photo-${id}?w=900&q=80`, alt } });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "bento-02",
  prefix: "bento02",
  name: "Bento / Moving tiles",
  category: "bento",
  description: "A strip of words drifts one way. A strip of photographs drifts the other. Three still tiles sit on the bottom row.",

  props: {
    ...headerProps({ eyebrow: "In motion", heading: "Tiles that do not sit still", description: "The words and the pictures keep moving. The note stays put." }),
    copyTitle: { type: "text", default: "A weekly preview" },
    copyText: { type: "text", default: "Friday, in the browser, with the pages we actually changed." },
    note: { type: "text", default: "No slide deck. The site is the review." },
    placeTitle: { type: "text", default: "The desk" },
    placeText: { type: "text", default: "18 Main Street. This tile stays while the strip moves." },
    still: { type: "image", default: { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80", alt: "A bright studio with a long desk" } },
    words: {
      type: "list",
      fields: { label: "text" },
      default: ["Webflow", "Astro", "React", "GSAP", "Figma", "Client-First"].map((label) => ({ label })),
    },
    photos: {
      type: "list",
      fields: { image: "image" },
      default: [
        shot("1519710164239-da123dc03ef4", "A wooden chair in a pale room"),
        shot("1500530855697-b586d89ba3ee", "Green hills under a pale sky"),
        shot("1486406146926-c627a92ad1ab", "A glass facade against a clear sky"),
        shot("1517248135467-4c7edcad34c4", "A dining room with set tables"),
      ],
    },
  },

  variants: { theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }) },
  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] } },

  tree: {
    role: "section",
    style: { base: { overflow: "hidden", ...t("section") } },
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
              md: { "grid-template-columns": "repeat(2, minmax(0, 1fr))" },
              lg: { "grid-template-columns": "repeat(3, minmax(0, 1fr))" },
            },
            children: [
              {
                tag: "div", key: "word-card",
                style: {
                  base: { overflow: "hidden", display: "flex", "align-items": "center", "min-height": "6rem", "grid-column-start": "span 1", "grid-column-end": "span 1", ...t("word-card") },
                  md: { "grid-column-start": "span 2", "grid-column-end": "span 2" },
                  lg: { "grid-column-start": "span 3", "grid-column-end": "span 3" },
                },
                children: [{
                  tag: "div", key: "word-track", repeat: "words", attrs: { "data-blok-marquee": "", "data-blok-speed": "50" },
                  style: { base: { display: "flex", "align-items": "center", width: "max-content" } },
                  children: [{
                    tag: "div", key: "pill", bind: "item.label",
                    style: { base: { "flex-shrink": "0", "margin-right": "0.6rem", ...mono(), ...radius("999px"), "padding-top": "0.55rem", "padding-bottom": "0.55rem", "padding-left": "0.9rem", "padding-right": "0.9rem", "border-top-width": "1px", "border-right-width": "1px", "border-bottom-width": "1px", "border-left-width": "1px", "border-top-style": "solid", "border-right-style": "solid", "border-bottom-style": "solid", "border-left-style": "solid", ...t("pill") } },
                  }],
                }],
              },
              {
                tag: "div", key: "copy-card",
                style: { base: { display: "flex", "flex-direction": "column", "justify-content": "flex-end", "min-height": "14rem", ...radius("token(radius-card)"), ...pad("1.5rem"), ...t("copy-card") } },
                children: [
                  { tag: "h3", key: "copy-title", bind: "copyTitle", style: { base: { "margin-top": "0", "margin-bottom": "0.5rem", "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1.1", "font-weight": "600", "letter-spacing": "-0.03em" } } },
                  { tag: "p", key: "copy-text", bind: "copyText", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.5", ...t("copy-text") } } },
                ],
              },
              {
                tag: "div", key: "photo-card",
                style: {
                  base: { overflow: "hidden", "min-height": "14rem", "grid-column-start": "span 1", "grid-column-end": "span 1", ...radius("token(radius-card)") },
                  lg: { "grid-column-start": "span 2", "grid-column-end": "span 2" },
                },
                children: [{
                  tag: "div", key: "photo-track", repeat: "photos", attrs: { "data-blok-marquee": "", "data-blok-speed": "40", "data-blok-direction": "reverse" },
                  style: { base: { display: "flex", height: "100%", width: "max-content" } },
                  children: [{
                    tag: "div", key: "photo-cell",
                    style: { base: { "flex-shrink": "0", width: "16rem", height: "14rem", "margin-right": "0.75rem", overflow: "hidden", ...radius("0.75rem") } },
                    children: [{ tag: "img", key: "photo", bind: "item.image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } }],
                  }],
                }],
              },
              {
                tag: "div", key: "note-card",
                style: { base: { display: "flex", "align-items": "flex-end", "min-height": "14rem", ...radius("token(radius-card)"), ...pad("1.5rem"), ...t("note-card") } },
                children: [
                  { tag: "p", key: "note", bind: "note", style: { base: { "margin-top": "0", "margin-bottom": "0", color: "token(surface)", "font-family": "token(font-display)", "font-size": "1.65rem", "line-height": "1.15", "font-weight": "600", "letter-spacing": "-0.03em" } } },
                ],
              },
              {
                tag: "div", key: "place-card",
                style: { base: { display: "flex", "flex-direction": "column", "justify-content": "flex-end", "min-height": "14rem", ...radius("token(radius-card)"), ...pad("1.5rem"), ...t("place-card") } },
                children: [
                  { tag: "h3", key: "place-title", bind: "placeTitle", style: { base: { "margin-top": "0", "margin-bottom": "0.5rem", "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1.1", "font-weight": "600", "letter-spacing": "-0.03em" } } },
                  { tag: "p", key: "place-text", bind: "placeText", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.5", ...t("place-text") } } },
                ],
              },
              {
                tag: "div", key: "still",
                style: {
                  base: { position: "relative", overflow: "hidden", "min-height": "14rem", "grid-column-start": "span 1", "grid-column-end": "span 1", ...radius("token(radius-card)") },
                  md: { "grid-column-start": "span 2", "grid-column-end": "span 2" },
                  lg: { "grid-column-start": "span 1", "grid-column-end": "span 1" },
                },
                children: [{ tag: "img", key: "still-image", bind: "still", style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } } }],
              },
            ],
          },
        ],
      }),
    ],
  },
};
