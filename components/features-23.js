// Two equal columns, each a photograph and a caption.
import { themeVariant, themeBase, radius } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  eyebrow: { color: "muted" },
  description: { color: "muted" },
  "caption-a": { color: "muted" },
  "caption-b": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "features-23",
  prefix: "features23",
  name: "Features / Media Pair",
  category: "features",
  description: "Two equal columns. Each one is a photograph with a caption underneath.",

  props: {
    ...headerProps({
      eyebrow: "Two frames",
      heading: "Before the work, and the room it landed in",
      description: "A pair, not a gallery. Useful when the story is a comparison you do not need a slider for.",
    }),
    showCaptions: { type: "boolean", default: true },
    imageA: { type: "image", default: photo("1500530855697-b586d89ba3ee", "Green hills before the project") },
    captionA: { type: "text", default: "The brief: a quiet site for a studio that had outgrown its template." },
    imageB: { type: "image", default: photo("1519710164239-da123dc03ef4", "Sunlit studio after the project") },
    captionB: { type: "text", default: "The result: fewer pages, clearer type, and a CMS the founder actually uses." },
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
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" }, lg: { "row-gap": "3.5rem" } },
        children: [
          header({ t, layout: "split" }),
          {
            tag: "div", key: "pair",
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "grid-column-gap": "1.25rem", "grid-row-gap": "1.5rem" },
              lg: { "grid-template-columns": "1fr 1fr", "grid-column-gap": "1.5rem", "grid-row-gap": "1.5rem" },
            },
            children: [
              {
                tag: "div", key: "col-a",
                children: [
                  { tag: "div", key: "media-a", style: { base: { overflow: "hidden", "aspect-ratio": "4 / 5", "margin-bottom": "1rem", ...radius("token(radius-card)") } }, children: [{ tag: "img", key: "image-a", bind: "imageA", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } }] },
                  { tag: "p", key: "caption-a", bind: "captionA", if: "showCaptions", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1.0625rem", "line-height": "1.55", ...t("caption-a") } } },
                ],
              },
              {
                tag: "div", key: "col-b",
                children: [
                  { tag: "div", key: "media-b", style: { base: { overflow: "hidden", "aspect-ratio": "4 / 5", "margin-bottom": "1rem", ...radius("token(radius-card)") } }, children: [{ tag: "img", key: "image-b", bind: "imageB", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } }] },
                  { tag: "p", key: "caption-b", bind: "captionB", if: "showCaptions", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1.0625rem", "line-height": "1.55", ...t("caption-b") } } },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
