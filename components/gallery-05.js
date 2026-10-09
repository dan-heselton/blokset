// Horizontal scroll gallery: on desktop the section pins and scrolling moves a row of large frames
// sideways. On phones and tablets it's a native swipe row with scroll snapping. No JS required there.
import { themeVariant, themeBase, radius, mono } from "./_lib/themes.js";
import { header, headerProps, HEADER_THEME, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  "frame-meta": { color: "muted" },
  counter: { color: "muted" },
};
const t = (key) => themeBase("dark", THEME[key]);
const frame = (title, meta, id, alt) => ({ title, meta, href: "#", image: { src: `https://images.unsplash.com/${id}?w=1400&q=80`, alt } });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "gallery-05",
  prefix: "gallery5",
  name: "Gallery / Horizontal Scroll",
  category: "gallery",
  description: "Desktop pins the section and scrolls large frames sideways; touch devices get a native snap-scrolling row.",

  props: {
    ...headerProps({
      eyebrow: "Field notes",
      heading: "A year of making things",
      description: "Projects, prototypes and the places they came from. Scroll to wander through.",
    }),
    showCaptions: { type: "boolean", default: true },
    showCounter: { type: "boolean", default: true, description: "Small 01, 02… index on each frame" },
    frames: {
      type: "list",
      fields: { title: "text", meta: "text", href: "link", image: "image" },
      default: [
        frame("Tidewater Supply", "Brand · 2026", "photo-1501594907352-04cda38ebc29", "Rocky coastline at dusk"),
        frame("North Shore Arts", "Website · 2026", "photo-1519710164239-da123dc03ef4", "Bright gallery interior"),
        frame("Halyard", "Product · 2025", "photo-1497366216548-37526070297c", "Open plan office"),
        frame("Saltbox Bakery", "Identity · 2025", "photo-1517248135467-4c7edcad34c4", "Warm restaurant interior"),
        frame("Ledgewood", "Portfolio · 2024", "photo-1486406146926-c627a92ad1ab", "Glass building facade"),
        frame("High Pasture", "Campaign · 2024", "photo-1500530855697-b586d89ba3ee", "Green hills at sunrise"),
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "dark", options: ["dark", "light"], map: THEME }),
    frameShape: {
      label: "Frame shape",
      default: "portrait",
      options: {
        portrait: null,
        landscape: {
          styles: {
            "frame-media": { base: { "aspect-ratio": "4 / 3" } },
            frame: { base: { width: "85vw" }, md: { width: "60vw" }, lg: { width: "40rem" } },
          },
        },
      },
    },
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.1, targets: ["eyebrow", "heading", "description"] },
  },

  tree: {
    role: "section",
    style: { base: { overflow: "hidden", ...t("section") } },
    children: [
      shell({
        tag: "div", key: "component", attrs: { "data-blok-hscroll": "" },
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "3rem" } },
        children: [
          header({ t }),
          {
            tag: "div", key: "track", repeat: "frames", attrs: { "data-blok-hscroll-track": "" },
            style: {
              base: {
                display: "flex", "column-gap": "1rem", "overflow-x": "auto", "scroll-snap-type": "x mandatory",
                "padding-bottom": "1rem", "margin-right": "-5vw", "padding-right": "5vw",
              },
              lg: { "column-gap": "1.5rem" },
            },
            children: [
              {
                tag: "a", key: "frame", href: "item.href",
                style: {
                  base: { display: "block", "flex-shrink": "0", width: "78vw", color: "inherit", "text-decoration": "none", "scroll-snap-align": "start" },
                  md: { width: "44vw" },
                  lg: { width: "26rem" },
                },
                children: [
                  {
                    tag: "div", key: "frame-media",
                    style: { base: { position: "relative", overflow: "hidden", "aspect-ratio": "4 / 5", ...radius("0.75rem") } },
                    children: [
                      { tag: "img", key: "frame-image", bind: "item.image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } },
                      {
                        tag: "div", key: "counter", bind: "@index", if: "showCounter", decorative: true,
                        style: { base: { position: "absolute", top: "0.875rem", left: "0.875rem", ...mono("token(text-inverse)"), "mix-blend-mode": "difference" } },
                      },
                    ],
                  },
                  {
                    tag: "div", key: "frame-caption", if: "showCaptions",
                    style: { base: { display: "flex", "justify-content": "space-between", "align-items": "baseline", "column-gap": "1rem", "margin-top": "0.875rem" } },
                    children: [
                      { tag: "h3", key: "frame-title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.25rem", "font-weight": "600", "letter-spacing": "-0.015em" } } },
                      { tag: "div", key: "frame-meta", bind: "item.meta", style: { base: { ...mono(), "white-space": "nowrap", ...t("frame-meta") } } },
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
