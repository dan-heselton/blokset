// A name and a short line per row. Hovering a row shows that service's photograph.
import { radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  list: { "border-bottom-color": "line" },
  row: { color: "fg", "border-top-color": "line" },
  line: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=900&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "services-01",
  prefix: "services1",
  name: "Services / Rows",
  category: "services",
  description: "A name and a short line on each row. Hovering a row shows that service's photograph.",

  props: {
    ...headerProps({
      eyebrow: "What we do",
      heading: "Four kinds of work",
      description: "Most projects are one of these. A few are two.",
    }),
    showImages: { type: "boolean", default: true, description: "Show the photograph that follows the pointer." },
    services: {
      type: "list",
      fields: { name: "text", line: "text", href: "link", image: "image" },
      default: [
        { name: "Brand", line: "A name, a type system, and the rules for using them.", href: "#", image: photo("1519710164239-da123dc03ef4", "A sunlit room with a wooden chair") },
        { name: "Web", line: "A site your editors can change without calling us first.", href: "#", image: photo("1497366216548-37526070297c", "A long desk in a bright studio") },
        { name: "Product", line: "Pages for an object: how it is made, and how to ask about one.", href: "#", image: photo("1500530855697-b586d89ba3ee", "Green hills under a pale sky") },
        { name: "Content", line: "The words that go in the fields, written so an editor can keep going.", href: "#", image: photo("1486406146926-c627a92ad1ab", "A glass facade in daylight") },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] },
    reveal: { preset: "fade-up", targets: ["row"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" }, lg: { "row-gap": "3.5rem" } },
        children: [
          header({ t }),
          {
            tag: "div", key: "list", repeat: "services", attrs: { "data-blok-hover-reveal": "" },
            style: { base: { position: "relative", "border-bottom-width": "1px", "border-bottom-style": "solid", ...t("list") } },
            children: [{
              tag: "a", key: "row", href: "item.href", attrs: { "data-blok-hover-row": "" },
              style: {
                base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "0.4rem", "padding-top": "1.35rem", "padding-bottom": "1.35rem", "border-top-width": "1px", "border-top-style": "solid", "text-decoration": "none", ...t("row") },
                lg: { "padding-top": "1.6rem", "padding-bottom": "1.6rem" },
              },
              children: [
                {
                  tag: "h3", key: "name", bind: "item.name",
                  style: {
                    base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1.1", "font-weight": "500", "letter-spacing": "-0.03em" },
                    lg: { "font-size": "2.5rem" },
                  },
                },
                { tag: "p", key: "line", bind: "item.line", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "36rem", "font-size": "1rem", "line-height": "1.5", ...t("line") } } },
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
            }],
          },
        ],
      }),
    ],
  },
};
