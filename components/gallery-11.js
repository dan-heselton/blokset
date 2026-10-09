// A large frame with a strip of thumbnails. Clicking a thumb updates the frame.
import { themeVariant, themeBase, radius, mono } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  eyebrow: { color: "muted" },
  description: { color: "muted" },
  caption: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1600&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "gallery-11",
  prefix: "gallery11",
  name: "Gallery / Filmstrip",
  category: "gallery",
  description: "One large frame and a strip of thumbnails. Click a thumb to change the frame.",

  props: {
    ...headerProps({
      eyebrow: "Field notes",
      heading: "Click through the roll",
      description: "The large frame follows the thumbnail you choose.",
    }),
    showCaption: { type: "boolean", default: true },
    caption: { type: "text", default: "North Shore Arts — gallery interior" },
    image: { type: "image", default: photo("1519710164239-da123dc03ef4", "Sunlit gallery interior") },
    frames: {
      type: "list",
      fields: { image: "image", caption: "text" },
      default: [
        { image: photo("1519710164239-da123dc03ef4", "Sunlit gallery interior"), caption: "North Shore Arts — gallery interior" },
        { image: photo("1517248135467-4c7edcad34c4", "Warm restaurant interior"), caption: "Saltbox Bakery — dining room" },
        { image: photo("1497366216548-37526070297c", "Open plan office"), caption: "Halyard — borrowed studio" },
        { image: photo("1486406146926-c627a92ad1ab", "Glass building facade"), caption: "Ledgewood — street facade" },
        { image: photo("1501594907352-04cda38ebc29", "Rocky coastline at dusk"), caption: "Tidewater — the harbor" },
        { image: photo("1469474968028-56623f02e42e", "Sunlit ridge and pine valley"), caption: "High Pasture — the ridge" },
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
        tag: "div", key: "component", attrs: { "data-blok-scrub": "" },
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1.25rem" }, lg: { "row-gap": "1.5rem" } },
        children: [
          header({ t, layout: "split" }),
          {
            tag: "div", key: "stage",
            style: { base: { overflow: "hidden", "aspect-ratio": "16 / 10", ...radius("token(radius-card)") } },
            children: [{ tag: "img", key: "main", bind: "image", attrs: { "data-blok-scrub-main": "" }, style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } }],
          },
          { tag: "div", key: "caption", bind: "caption", if: "showCaption", style: { base: { ...mono(), ...t("caption") } } },
          {
            tag: "div", key: "strip", repeat: "frames",
            style: { base: { display: "flex", "column-gap": "0.5rem", "row-gap": "0.5rem" }, lg: { "column-gap": "0.75rem" } },
            children: [
              {
                tag: "div", key: "thumb", attrs: { "data-blok-scrub-thumb": "" },
                style: { base: { cursor: "pointer", width: "4.5rem", height: "3.25rem", "flex-shrink": "0", overflow: "hidden", ...radius("0.4rem") }, lg: { width: "7rem", height: "4.75rem" } },
                children: [{ tag: "img", key: "thumb-image", bind: "item.image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } }],
              },
            ],
          },
        ],
      }),
    ],
  },
};
