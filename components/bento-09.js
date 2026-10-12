// A photograph in the grid, with notes beside it. The type stays on the page.
import { inset0, pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  tile: { "background-color": "panel", color: "fg" },
  "tile-text": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "bento-09",
  prefix: "bento09",
  name: "Bento / Expand",
  category: "bento",
  description: "The photograph is the first cell and zooms as you scroll. Four notes sit in the grid under it, on the page color. On a phone the photograph is first, then the notes.",

  props: {
    ...headerProps({ eyebrow: "In the frame", heading: "The picture takes the room", description: "It stays in its cell. The notes stay on the page." }),
    image: { type: "image", default: { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=2000&q=80", alt: "A sunlit ridge and a valley of pines" } },
    tiles: {
      type: "list",
      fields: { title: "text", text: "text" },
      default: [
        { title: "Brief", text: "One sitting. We leave with the pages that matter." },
        { title: "Direction", text: "Two ways, in the browser, then we pick one." },
        { title: "Build", text: "Webflow or Astro. The CMS matches the staff." },
        { title: "Launch", text: "Redirects, a checklist, and a person who stays." },
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
              md: { "grid-template-columns": "repeat(2, minmax(0, 1fr))" },
            },
            children: [
              {
                tag: "div", key: "photo",
                style: {
                  base: { position: "relative", overflow: "hidden", "min-height": "16rem", "grid-column-start": "span 1", "grid-column-end": "span 1", ...radius("token(radius-card)") },
                  md: { "grid-column-start": "span 2", "grid-column-end": "span 2", "min-height": "22rem" },
                },
                children: [{
                  tag: "img", key: "image", bind: "image", attrs: { "data-blok-scroll": "zoom" },
                  style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } },
                }],
              },
              {
                tag: "div", key: "notes", repeat: "tiles",
                style: {
                  base: { display: "grid", "grid-template-columns": "minmax(0, 1fr)", "column-gap": "1rem", "row-gap": "1rem", "grid-column-start": "span 1", "grid-column-end": "span 1" },
                  md: { "grid-template-columns": "repeat(2, minmax(0, 1fr))", "grid-column-start": "span 2", "grid-column-end": "span 2" },
                },
                children: [{
                  tag: "div", key: "tile",
                  style: { base: { display: "flex", "flex-direction": "column", "justify-content": "flex-end", "min-height": "12rem", ...radius("token(radius-card)"), ...pad("1.25rem"), ...t("tile") } },
                  children: [
                    { tag: "h3", key: "tile-title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0.4rem", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.1", "font-weight": "600" } } },
                    { tag: "p", key: "tile-text", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.45", ...t("tile-text") } } },
                  ],
                }],
              },
            ],
          },
        ],
      }),
    ],
  },
};
