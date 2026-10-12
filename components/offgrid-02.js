// A photograph with two surface-colored tabs cut into the corners.
import { inset0, pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  "notch-label": { "background-color": "bg", color: "fg" },
  "notch-actions": { "background-color": "bg", color: "fg" },
  "notch-text": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "offgrid-02",
  prefix: "offgrid02",
  name: "Off-grid / Notched card",
  category: "offgrid",
  description: "One wide photograph. A surface-colored tab in the top-left holds the label. A tab in the bottom-right holds the link.",

  props: {
    ...headerProps({ eyebrow: "Cut from the page", heading: "The corners belong to the type", description: "The photograph is the card. The page color comes back in at two corners." }),
    label: { type: "text", default: "Field chair" },
    note: { type: "text", default: "Ash, one pin, and a seat that is allowed to darken." },
    linkLabel: { type: "text", default: "Read the note" },
    href: { type: "link", default: "#" },
    image: { type: "image", default: { src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1600&q=80", alt: "A wooden chair in a pale room" } },
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
            tag: "div", key: "card",
            style: { base: { position: "relative", "min-height": "22rem", ...radius("token(radius-card)") }, lg: { "min-height": "34rem" } },
            children: [
              { tag: "img", key: "image", bind: "image", style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover", ...radius("token(radius-card)") } } },
              {
                tag: "div", key: "notch-label",
                style: {
                  base: { position: "absolute", top: "0", left: "0", right: "auto", bottom: "auto", "max-width": "16rem", "border-bottom-right-radius": "1.5rem", ...pad("1.25rem"), ...t("notch-label") },
                },
                children: [
                  { tag: "h3", key: "label", bind: "label", style: { base: { "margin-top": "0", "margin-bottom": "0.4rem", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.1", "font-weight": "600" } } },
                  { tag: "p", key: "notch-text", bind: "note", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "0.95rem", "line-height": "1.45", ...t("notch-text") } } },
                ],
              },
              {
                tag: "div", key: "notch-actions",
                style: {
                  base: { position: "absolute", right: "0", bottom: "0", top: "auto", left: "auto", "border-top-left-radius": "1.5rem", ...pad("1rem"), ...t("notch-actions") },
                },
                children: [
                  { tag: "a", key: "more", href: "href", bind: "linkLabel", style: { base: { color: "inherit", "font-weight": "600", "text-decoration": "none" } } },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
