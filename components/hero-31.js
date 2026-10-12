// A large headline and a wide photograph with the page color cut into two corners.
import { themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  heading: { color: "fg" },
  "notch-copy": { "background-color": "bg", color: "fg" },
  "notch-actions": { "background-color": "bg", color: "fg" },
  description: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=2000&q=80`, alt });
const parked = { position: "relative", top: "auto", right: "auto", bottom: "auto", left: "auto" };

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-31",
  prefix: "hero31",
  name: "Hero / Notched photo",
  category: "hero",
  description: "A display headline over a wide photograph. The description and the actions sit in corners cut out of the picture. On a phone they stack above and below it.",

  props: {
    heading: { type: "text", default: "Furniture for rooms we actually sit in." },
    showDescription: { type: "boolean", default: true, description: "Show the description in the top corner." },
    description: { type: "text", default: "Pieces that last, and a page that says so without shouting. Built for the shop on Main Street." },
    showButtons: { type: "boolean", default: true, description: "Show the actions in the bottom corner." },
    buttons: {
      type: "buttons",
      max: 1,
      default: [{ title: "Read more", href: "#", variant: "secondary" }],
    },
    moreHref: { type: "link", default: "#" },
    image: {
      type: "image",
      priority: true,
      description: "Wide photograph under the headline.",
      default: shot("1555041469-a586c61ea9bc", "A low sofa and a cushion in a quiet room"),
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["heading", "description"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1.5rem" } },
        children: [
          {
            tag: "h1", key: "heading", bind: "heading",
            style: {
              base: { "margin-top": "0", "margin-bottom": "0", "max-width": "16ch", "font-family": "token(font-display)", "font-size": "3rem", "line-height": "0.95", "font-weight": "700", "letter-spacing": "-0.045em", ...t("heading") },
              md: { "font-size": "4.5rem" },
              lg: { "font-size": "5.75rem" },
            },
          },
          {
            tag: "div", key: "stage",
            style: { base: { position: "relative" } },
            children: [
              {
                tag: "div", key: "notch-copy", if: "showDescription",
                style: {
                  base: { ...parked, "z-index": "1", width: "100%", "max-width": "22rem", "margin-bottom": "1rem", "padding-top": "0", "padding-right": "0", "padding-bottom": "0", "padding-left": "0", "border-bottom-right-radius": "0px", ...t("notch-copy") },
                  lg: { position: "absolute", top: "0", right: "auto", bottom: "auto", left: "0", "margin-bottom": "0rem", "padding-top": "0", "padding-right": "1.5rem", "padding-bottom": "1.25rem", "padding-left": "0", "border-bottom-right-radius": "1.5rem" },
                },
                children: [
                  { tag: "p", key: "description", bind: "description", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.5", ...t("description") } } },
                ],
              },
              {
                tag: "img", key: "image", bind: "image",
                style: {
                  base: { display: "block", width: "100%", height: "auto", "aspect-ratio": "16 / 10", "object-fit": "cover", "border-top-left-radius": "1.25rem", "border-top-right-radius": "1.25rem", "border-bottom-right-radius": "1.25rem", "border-bottom-left-radius": "1.25rem" },
                },
              },
              {
                tag: "div", key: "notch-actions", if: "showButtons",
                style: {
                  base: { ...parked, "z-index": "1", display: "flex", "align-items": "center", "justify-content": "flex-start", "column-gap": "0.6rem", "margin-top": "1rem", "padding-top": "0", "padding-right": "0", "padding-bottom": "0", "padding-left": "0", "border-top-left-radius": "0px", ...t("notch-actions") },
                  lg: { position: "absolute", top: "auto", right: "0", bottom: "0", left: "auto", "justify-content": "flex-end", "margin-top": "0rem", "padding-top": "1rem", "padding-right": "0", "padding-bottom": "0", "padding-left": "1rem", "border-top-left-radius": "1.5rem" },
                },
                children: [
                  { tag: "div", key: "actions", repeat: "buttons" },
                  {
                    tag: "a", key: "arrow", href: "moreHref", text: "↗",
                    style: {
                      base: { display: "flex", "align-items": "center", "justify-content": "center", width: "2.75rem", height: "2.75rem", "flex-shrink": "0", "background-color": "token(ink)", color: "token(surface)", "text-decoration": "none", "border-top-left-radius": "999px", "border-top-right-radius": "999px", "border-bottom-right-radius": "999px", "border-bottom-left-radius": "999px" },
                    },
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
