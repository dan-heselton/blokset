// Thumbnail grid. Clicking a photo opens a dialog that stays hidden until the runtime shows it.
import { themeVariant, themeBase, radius, mono, pad } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  eyebrow: { color: "muted" },
  description: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "gallery-08",
  prefix: "gallery8",
  name: "Gallery / Lightbox",
  category: "gallery",
  description: "A photo grid. Click a thumbnail to open a larger view. The dialog stays hidden without JavaScript.",

  props: {
    ...headerProps({
      eyebrow: "Studio notes",
      heading: "Pictures from the work",
      description: "A few frames from recent projects. Open one for a closer look.",
    }),
    image: { type: "image", default: photo("1519710164239-da123dc03ef4", "Sunlit gallery interior") },
    caption: { type: "text", default: "North Shore Arts, gallery interior" },
    frames: {
      type: "list",
      fields: { image: "image", caption: "text" },
      default: [
        { image: photo("1519710164239-da123dc03ef4", "Sunlit gallery interior"), caption: "North Shore Arts, gallery interior" },
        { image: photo("1517248135467-4c7edcad34c4", "Warm restaurant interior"), caption: "Saltbox Bakery, dining room" },
        { image: photo("1497366216548-37526070297c", "Open plan office"), caption: "Halyard, the studio we borrowed" },
        { image: photo("1486406146926-c627a92ad1ab", "Glass building facade"), caption: "Ledgewood, street facade" },
        { image: photo("1501594907352-04cda38ebc29", "Rocky coastline at dusk"), caption: "Tidewater, the harbor" },
        { image: photo("1500530855697-b586d89ba3ee", "Green hills at sunrise"), caption: "High Pasture, early light" },
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
        tag: "div", key: "component", attrs: { "data-blok-lightbox": "" },
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" }, lg: { "row-gap": "3.5rem" } },
        children: [
          header({ t, layout: "split" }),
          {
            tag: "div", key: "grid", repeat: "frames",
            style: {
              base: { display: "grid", "grid-template-columns": "1fr 1fr", "grid-column-gap": "0.75rem", "grid-row-gap": "0.75rem" },
              lg: { "grid-template-columns": "1fr 1fr 1fr", "grid-column-gap": "1rem", "grid-row-gap": "1rem" },
            },
            children: [
              {
                tag: "div", key: "frame", attrs: { "data-blok-lightbox-item": "", "data-blok-caption": "=item.caption" },
                style: { base: { cursor: "pointer", overflow: "hidden", "aspect-ratio": "1 / 1", ...radius("token(radius-card)") } },
                children: [{ tag: "img", key: "frame-image", bind: "item.image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } }],
              },
            ],
          },
          {
            tag: "div", key: "dialog", attrs: { "data-blok-lightbox-dialog": "", hidden: "" },
            style: {
              base: {
                position: "fixed", top: "0", right: "0", bottom: "0", left: "0", "z-index": "30",
                display: "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center",
                "row-gap": "1rem", "background-color": "token(overlay-strong)", ...pad("1.25rem"),
              },
            },
            children: [
              {
                tag: "div", key: "close", text: "Close", attrs: { "data-blok-lightbox-close": "" },
                style: { base: { ...mono(), cursor: "pointer", "align-self": "flex-end", color: "token(surface)" } },
              },
              {
                tag: "div", key: "dialog-media",
                style: { base: { width: "100%", "max-width": "64rem", overflow: "hidden", "aspect-ratio": "16 / 10", ...radius("token(radius-card)") } },
                children: [{ tag: "img", key: "dialog-image", bind: "image", attrs: { "data-blok-lightbox-image": "" }, style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } }],
              },
              { tag: "p", key: "dialog-caption", bind: "caption", attrs: { "data-blok-lightbox-caption": "" }, style: { base: { "margin-top": "0", "margin-bottom": "0", ...mono(), color: "token(surface)" } } },
            ],
          },
        ],
      }),
    ],
  },
};
