// Directory: name, role, and location in ruled rows. Hovering a row floats the portrait.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const paint = themeBase("light", { "background-color": "bg", color: "fg" });
const muted = themeBase("light", { color: "muted" }).color;
const line = themeBase("light", { "border-top-color": "line" })["border-top-color"];
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=800&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "team-03",
  prefix: "team3",
  name: "Team / Directory",
  category: "team",
  description: "Ruled rows of name, role, and location. Hovering a row floats that person's portrait.",

  props: {
    showEyebrow: { type: "boolean", default: true },
    eyebrow: { type: "text", default: "The studio" },
    heading: { type: "text", default: "Everyone on the work" },
    showRole: { type: "boolean", default: true, description: "Show each person's role." },
    showLocation: { type: "boolean", default: true, description: "Show each person's location." },
    showImages: { type: "boolean", default: true, description: "Show the hover portrait." },
    people: {
      type: "list",
      fields: { name: "text", role: "text", location: "text", href: "link", image: "image" },
      default: [
        { name: "Maren Okafor", role: "Design", location: "Rockport", href: "#", image: photo("1494790108377-be9c29b29330", "Portrait of Maren Okafor") },
        { name: "Eli Hart", role: "Webflow", location: "Gloucester", href: "#", image: photo("1507003211169-0a1dd7228f2d", "Portrait of Eli Hart") },
        { name: "June Pell", role: "Strategy", location: "Salem", href: "#", image: photo("1438761681033-6461ffad8d80", "Portrait of June Pell") },
        { name: "Noah Voss", role: "Engineering", location: "Newburyport", href: "#", image: photo("1500648767791-00dcc994a43e", "Portrait of Noah Voss") },
        { name: "Ada Kim", role: "Content", location: "Rockport", href: "#", image: photo("1544005313-94ddf0286df2", "Portrait of Ada Kim") },
      ],
    },
  },

  variants: {
    theme: themeVariant({
      default: "light",
      options: ["light", "dark", "accent"],
      map: {
        section: { "background-color": "bg", color: "fg" },
        eyebrow: { color: "muted" },
        heading: { color: "fg" },
        list: { "border-bottom-color": "line" },
        row: { color: "fg", "border-top-color": "line" },
        role: { color: "muted" },
        location: { color: "muted" },
      },
    }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading"] },
    reveal: { preset: "fade-up", targets: ["row"] },
  },

  tree: {
    role: "section",
    style: { base: paint },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" }, lg: { "row-gap": "3.5rem" } },
        children: [
          {
            tag: "div", key: "header",
            style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1rem", "max-width": "40rem" } },
            children: [
              { tag: "div", key: "eyebrow", bind: "eyebrow", if: "showEyebrow", style: { base: { ...mono(muted) } } },
              {
                tag: "h2", key: "heading", bind: "heading",
                style: {
                  base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "2.25rem", "line-height": "1.05", "font-weight": "600", "letter-spacing": "-0.03em", color: paint.color },
                  md: { "font-size": "3rem" },
                  lg: { "font-size": "3.5rem" },
                },
              },
            ],
          },
          {
            tag: "div", key: "list", repeat: "people", attrs: { "data-blok-hover-reveal": "" },
            style: { base: { position: "relative", "border-bottom-width": "1px", "border-bottom-style": "solid", "border-bottom-color": line } },
            children: [
              {
                tag: "a", key: "row", href: "item.href", attrs: { "data-blok-hover-row": "" },
                style: {
                  base: { display: "flex", "flex-wrap": "wrap", "align-items": "baseline", "column-gap": "1.5rem", "row-gap": "0.35rem", "padding-top": "1.25rem", "padding-bottom": "1.25rem", "border-top-width": "1px", "border-top-style": "solid", "border-top-color": line, color: paint.color, "text-decoration": "none" },
                  md: { "flex-wrap": "nowrap", "align-items": "center" },
                  lg: { "padding-top": "1.5rem", "padding-bottom": "1.5rem" },
                },
                children: [
                  {
                    tag: "h3", key: "name", bind: "item.name",
                    style: {
                      base: { "flex-grow": "1", "flex-basis": "100%", "min-width": "0", "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1.1", "font-weight": "500", "letter-spacing": "-0.03em" },
                      md: { "flex-basis": "0%", "font-size": "2.25rem" },
                      lg: { "font-size": "2.75rem" },
                    },
                  },
                  { tag: "div", key: "role", bind: "item.role", if: "showRole", style: { base: { width: "8rem", "flex-shrink": "0", ...mono(muted), "letter-spacing": "0.04em" } } },
                  { tag: "div", key: "location", bind: "item.location", if: "showLocation", style: { base: { width: "8rem", "flex-shrink": "0", ...mono(muted), "letter-spacing": "0.04em" } } },
                  {
                    tag: "div", key: "media", decorative: true, if: "showImages", attrs: { "data-blok-hover-media": "" },
                    style: {
                      base: { display: "none", position: "absolute", top: "0", left: "0", "z-index": "2", width: "16rem", height: "20rem", overflow: "hidden", ...radius("0.375rem"), "pointer-events": "none", opacity: "0", visibility: "hidden" },
                      lg: { display: "block" },
                    },
                    children: [
                      { tag: "img", key: "image", bind: "item.image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } },
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
