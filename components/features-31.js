// Sticky image that changes as each feature row scrolls through the middle of the viewport.
import { themeVariant, themeBase, radius } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  eyebrow: { color: "muted" },
  description: { color: "muted" },
  "row-text": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "features-31",
  prefix: "features31",
  name: "Features / Sticky Spotlight",
  category: "features",
  description: "A sticky photograph that swaps as each feature row scrolls through the center of the screen.",

  props: {
    ...headerProps({
      eyebrow: "What you get",
      heading: "The work, one piece at a time",
      description: "Scroll the list. The image stays put and changes with the row you are reading.",
    }),
    image: { type: "image", default: photo("1519710164239-da123dc03ef4", "Sunlit studio with a long table") },
    features: {
      type: "list",
      fields: { title: "text", text: "text", image: "image" },
      default: [
        { title: "A system, not a one-off", text: "Type, color, and components documented so the next page does not start from zero.", image: photo("1519710164239-da123dc03ef4", "Sunlit studio with a long table") },
        { title: "Editors in mind", text: "Fields named the way your team talks, with images and text they can change without calling us.", image: photo("1497366216548-37526070297c", "Bright office with long desks") },
        { title: "Motion that explains", text: "Scroll, hover, and tabs that show how the product works, and stay still when someone asks them to.", image: photo("1486406146926-c627a92ad1ab", "Glass building facade") },
        { title: "A launch you can own", text: "Redirects, analytics, and a short training session. Then the site is yours.", image: photo("1500530855697-b586d89ba3ee", "Green hills at sunrise") },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component", attrs: { "data-blok-spotlight": "" },
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" } },
        children: [
          header({ t, layout: "stack" }),
          {
            tag: "div", key: "layout",
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "grid-column-gap": "0rem", "grid-row-gap": "2rem", "align-items": "start" },
              lg: { "grid-template-columns": "1fr 1fr", "grid-column-gap": "4rem", "grid-row-gap": "0rem", "align-items": "start" },
            },
            children: [
              {
                tag: "div", key: "figure", attrs: { "data-blok-spotlight-figure": "" },
                style: { base: { position: "relative", top: "0", overflow: "hidden", "aspect-ratio": "4 / 5", ...radius("token(radius-card)") }, lg: { position: "sticky", top: "6rem", "aspect-ratio": "4 / 5" } },
                children: [{ tag: "img", key: "figure-image", bind: "image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } }],
              },
              {
                tag: "div", key: "rows", repeat: "features",
                children: [
                  {
                    tag: "div", key: "row", attrs: { "data-blok-spotlight-row": "", "data-blok-src": "=item.image.src", "data-blok-alt": "=item.image.alt" },
                    style: { base: { display: "flex", "flex-direction": "column", "justify-content": "center", "row-gap": "0.75rem", "min-height": "16rem", "padding-top": "2rem", "padding-bottom": "2rem" }, lg: { "min-height": "70vh", "padding-top": "3rem", "padding-bottom": "3rem" } },
                    children: [
                      { tag: "h3", key: "row-title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "2rem", "line-height": "1.1", "font-weight": "600", "letter-spacing": "-0.03em" }, lg: { "font-size": "2.75rem" } } },
                      { tag: "p", key: "row-text", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "28rem", "font-size": "1.0625rem", "line-height": "1.6", ...t("row-text") } } },
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
