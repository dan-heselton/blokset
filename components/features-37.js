// A fixed figure beside a list. Hovering or focusing a row swaps the figure.
import { themeVariant, themeBase, radius } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  eyebrow: { color: "muted" },
  description: { color: "muted" },
  row: { "border-top-color": "line" },
  "row-text": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "features-37",
  prefix: "features37",
  name: "Features / Hover Swap",
  category: "features",
  description: "Hover or focus a row and the photograph beside the list changes to match.",

  props: {
    ...headerProps({
      eyebrow: "Practice",
      heading: "Point at a row",
      description: "The image stays in one place. The row you are on decides which photograph it shows.",
    }),
    image: { type: "image", default: photo("1497366216548-37526070297c", "Team around a table") },
    features: {
      type: "list",
      fields: { title: "text", text: "text", image: "image" },
      default: [
        { title: "Discover", text: "A working session and a written brief before any screens.", image: photo("1497366216548-37526070297c", "Team around a table") },
        { title: "Design", text: "Two directions in the browser, then one we refine together.", image: photo("1519710164239-da123dc03ef4", "Design studio") },
        { title: "Build", text: "Webflow or Astro, with a CMS your editors can run.", image: photo("1486406146926-c627a92ad1ab", "Building facade") },
        { title: "Care", text: "A monthly plan and a same-week reply after launch.", image: photo("1501594907352-04cda38ebc29", "Coastline at dusk") },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
    imageSide: {
      label: "Image side",
      default: "left",
      options: {
        left: null,
        right: {
          styles: {
            layout: {
              base: { "flex-direction": "column" },
              lg: { "flex-direction": "row-reverse" },
            },
          },
        },
      },
    },
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component", attrs: { "data-blok-swap": "" },
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" } },
        children: [
          header({ t, layout: "stack" }),
          {
            tag: "div", key: "layout",
            style: {
              base: { display: "flex", "flex-direction": "column", "align-items": "stretch", "row-gap": "2rem", "column-gap": "0rem" },
              lg: { "flex-direction": "row", "align-items": "center", "row-gap": "0rem", "column-gap": "4rem" },
            },
            children: [
              {
                tag: "div", key: "figure", attrs: { "data-blok-swap-figure": "" },
                style: { base: { width: "100%", overflow: "hidden", "aspect-ratio": "4 / 5", ...radius("token(radius-card)") }, lg: { width: "46%", "aspect-ratio": "4 / 5" } },
                children: [{ tag: "img", key: "figure-image", bind: "image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } }],
              },
              {
                tag: "div", key: "rows", repeat: "features",
                style: { base: { width: "100%", "flex-grow": "1" }, lg: { width: "54%" } },
                children: [
                  {
                    tag: "div", key: "row", attrs: { "data-blok-swap-row": "", "data-blok-src": "=item.image.src", "data-blok-alt": "=item.image.alt" },
                    style: { base: { cursor: "pointer", "padding-top": "1.25rem", "padding-bottom": "1.25rem", "border-top-width": "1px", "border-top-style": "solid", ...t("row") } },
                    children: [
                      { tag: "h3", key: "row-title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0.4rem", "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1.1", "font-weight": "600", "letter-spacing": "-0.03em" }, lg: { "font-size": "2.25rem" } } },
                      { tag: "p", key: "row-text", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1.0625rem", "line-height": "1.55", ...t("row-text") } } },
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
