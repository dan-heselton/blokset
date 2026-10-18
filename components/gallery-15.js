// A rounded photo strip, then a headline and two paragraphs.
import { radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  heading: { color: "fg" },
  body: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1200&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "gallery-15",
  prefix: "gallery15",
  name: "Gallery / Marquee intro",
  category: "gallery",
  description: "A strip of rounded photographs drifts across the section. Below it, a headline sits on the left and two paragraphs sit on the right.",

  props: {
    showImages: { type: "boolean", default: true },
    images: {
      type: "list",
      fields: { image: "image" },
      default: [
        { image: photo("1500530855697-b586d89ba3ee", "Green hills under a pale sky") },
        { image: photo("1469474968028-56623f02e42e", "A ridge and a pale road through dry hills") },
        { image: photo("1519710164239-da123dc03ef4", "A low wooden house among trees") },
        { image: photo("1497366216548-37526070297c", "A bright studio with a long desk") },
        { image: photo("1486406146926-c627a92ad1ab", "A glass facade against a clear sky") },
        { image: photo("1501594907352-04cda38ebc29", "A wooden pier over still water") },
      ],
    },
    heading: { type: "text", default: "Science, written so a team can use it" },
    showBody: { type: "boolean", default: true },
    lead: { type: "text", default: "The photographs keep moving. The copy stays still, so the section reads before it performs." },
    support: { type: "text", default: "Each frame is its own rounded photograph. Nothing here is masked or clipped into a curve." },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["heading", "body"] } },

  tree: {
    role: "section",
    style: { base: { overflow: "hidden", ...t("section") } },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" } },
        children: [
          {
            tag: "div", key: "band", if: "showImages",
            style: { base: { overflow: "hidden", width: "100%" } },
            children: [{
              tag: "div", key: "track", repeat: "images", attrs: { "data-blok-marquee": "", "data-blok-speed": "40" },
              style: { base: { display: "flex", width: "max-content", "column-gap": "0.75rem" } },
              children: [{
                tag: "div", key: "frame",
                style: { base: { width: "14rem", height: "10rem", "flex-shrink": "0", overflow: "hidden", ...radius("token(radius-card)") }, lg: { width: "20rem", height: "13rem" } },
                children: [{
                  tag: "img", key: "frame-image", bind: "item.image",
                  style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } },
                }],
              }],
            }],
          },
          {
            tag: "div", key: "copy",
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "align-items": "start", "row-gap": "1.25rem", "column-gap": "0rem" },
              lg: { "grid-template-columns": "1fr 1fr", "column-gap": "3rem", "row-gap": "0rem" },
            },
            children: [
              {
                tag: "h2", key: "heading", bind: "heading",
                style: {
                  base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-serif)", "font-size": "2.75rem", "line-height": "1.02", "font-weight": "500", "letter-spacing": "-0.03em", ...t("heading") },
                  lg: { "font-size": "3.75rem" },
                },
              },
              {
                tag: "div", key: "body", if: "showBody",
                style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.9rem", ...t("body") } },
                children: [
                  { tag: "p", key: "lead", bind: "lead", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.6" } } },
                  { tag: "p", key: "support", bind: "support", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.6" } } },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
