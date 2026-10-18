// Guide line: positioned hotspots on a stage photo, numbered timeline tabs, SVG path between them.
import { mono, pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  stage: { "background-color": "panel" },
  hotspot: { "background-color": "fg", "border-top-color": "bg", "border-right-color": "bg", "border-bottom-color": "bg", "border-left-color": "bg" },
  rail: { "background-color": "line" },
  "tab-node": { "background-color": "bg", color: "fg", "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line" },
  "tab-title": { "background-color": "bg", color: "fg" },
  "panel-text": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });
const pill = {
  "border-top-left-radius": "999px", "border-top-right-radius": "999px",
  "border-bottom-right-radius": "999px", "border-bottom-left-radius": "999px",
};
const step = (title, text) => ({ title, text });
const hotspot = (key, top, left) => ({
  tag: "div", key, attrs: { "data-blok-guide-hotspot": "" }, decorative: true,
  style: {
    base: {
      position: "absolute", top, left, width: "0.95rem", height: "0.95rem",
      display: "flex", "align-items": "center", "justify-content": "center",
      "border-top-width": "2px", "border-right-width": "2px", "border-bottom-width": "2px", "border-left-width": "2px",
      "border-top-style": "solid", "border-right-style": "solid", "border-bottom-style": "solid", "border-left-style": "solid",
      "background-color": "token(surface)", "border-top-color": "token(ink)", "border-right-color": "token(ink)",
      "border-bottom-color": "token(ink)", "border-left-color": "token(ink)",
      ...pill, "z-index": "2",
    },
  },
  children: [{
    tag: "div", key: `${key}-core`, decorative: true,
    style: { base: { width: "0.3rem", height: "0.3rem", "background-color": "token(ink)", ...pill } },
  }],
});

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "process-06",
  prefix: "process6",
  name: "Process / Guide line",
  category: "process",
  description: "A landscape stage with positioned hotspots and a numbered timeline. Selecting a step draws a line from the tab to its hotspot.",

  props: {
    ...headerProps({
      eyebrow: "How it works",
      heading: "One team: panels, turbines, batteries",
      description: "Four stages on one landscape. Pick a step and the line follows.",
    }),
    image: { type: "image", default: photo("1469474968028-56623f02e42e", "Rolling green hills under a pale sky") },
    steps: {
      type: "list",
      fields: { title: "text", text: "text" },
      default: [
        step("Connect everything", "Link your home, your meter, and your share of the cooperative in one dashboard."),
        step("See it live", "Watch production and usage update in real time, with clear labels instead of jargon."),
        step("Store it smart", "Bank surplus energy when prices dip and draw it down when the grid asks."),
        step("Share and earn", "Return power to neighbors and receive credits when your share feeds the community."),
      ],
    },
  },

  variants: {
    theme: themeVariant({
      default: "light",
      options: ["light", "dark"],
      map: {
        section: THEME.section,
        ...HEADER_THEME,
        stage: THEME.stage,
        rail: THEME.rail,
        "tab-node": THEME["tab-node"],
        "tab-title": THEME["tab-title"],
        "panel-text": THEME["panel-text"],
      },
    }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.1, targets: ["eyebrow", "heading", "description"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component", attrs: { "data-blok-guide": "curve" },
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" }, lg: { "row-gap": "3.5rem" } },
        children: [
          header({ t, layout: "stack" }),
          {
            tag: "div", key: "layout",
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "align-items": "center", "row-gap": "2.5rem", "column-gap": "0rem" },
              lg: { "grid-template-columns": "1.05fr 0.95fr", "column-gap": "3.5rem", "row-gap": "0rem" },
            },
            children: [
              {
                tag: "div", key: "stage", attrs: { "data-blok-guide-stage": "" },
                style: { base: { position: "relative", width: "100%", overflow: "hidden", ...radius("1.5rem"), ...t("stage") } },
                children: [
                  {
                    tag: "img", key: "image", bind: "image",
                    style: {
                      base: { display: "block", width: "100%", height: "18rem", "object-fit": "cover" },
                      md: { height: "22rem" },
                      lg: { height: "28rem" },
                    },
                  },
                  hotspot("hotspot-1", "22%", "18%"),
                  hotspot("hotspot-2", "38%", "58%"),
                  hotspot("hotspot-3", "62%", "34%"),
                  hotspot("hotspot-4", "74%", "72%"),
                ],
              },
              {
                tag: "div", key: "timeline", attrs: { "data-blok-guide-tabs": "" },
                style: { base: { position: "relative", "z-index": "3", display: "flex", "flex-direction": "column", "row-gap": "0rem", "padding-left": "0.25rem" } },
                children: [
                  {
                    tag: "div", key: "rail", decorative: true,
                    style: {
                      base: {
                        position: "absolute", top: "1.1rem", bottom: "1.1rem", left: "1.35rem", width: "1px", "z-index": "0",
                        ...t("rail"),
                      },
                    },
                  },
                  {
                    tag: "div", key: "steps", repeat: "steps",
                    style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0rem" } },
                    children: [{
                      tag: "div", key: "step",
                      style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.55rem", "padding-bottom": "1.75rem" } },
                      children: [
                        {
                          tag: "div", key: "tab", attrs: { "data-blok-guide-tab": "" },
                          style: { base: { position: "relative", "z-index": "3", display: "flex", "align-items": "center", "column-gap": "1rem", cursor: "pointer" } },
                          children: [
                            {
                              tag: "div", key: "tab-node", bind: "@index", attrs: { "data-blok-guide-node": "" },
                              style: {
                                base: {
                                  position: "relative", "z-index": "3",
                                  width: "2.5rem", height: "2.5rem", "flex-shrink": "0",
                                  display: "flex", "align-items": "center", "justify-content": "center",
                                  ...mono(), "font-size": "0.75rem", "font-weight": "600",
                                  "border-top-width": "1px", "border-right-width": "1px", "border-bottom-width": "1px", "border-left-width": "1px",
                                  "border-top-style": "solid", "border-right-style": "solid", "border-bottom-style": "solid", "border-left-style": "solid",
                                  ...pill, ...t("tab-node"),
                                },
                              },
                            },
                            {
                              tag: "h3", key: "tab-title", bind: "item.title",
                              style: {
                                base: {
                                  position: "relative", "z-index": "3",
                                  "margin-top": "0", "margin-bottom": "0",
                                  "padding-top": "0.15rem", "padding-right": "0.35rem", "padding-bottom": "0.15rem", "padding-left": "0.35rem",
                                  "font-family": "token(font-display)", "font-size": "1.35rem", "line-height": "1.15",
                                  "font-weight": "600", "letter-spacing": "-0.03em", ...t("tab-title"),
                                },
                              },
                            },
                          ],
                        },
                        {
                          tag: "div", key: "panel", attrs: { "data-blok-guide-panel": "" },
                          style: { base: { position: "relative", "z-index": "3", "padding-left": "3.5rem", ...pad("0rem") } },
                          children: [
                            {
                              tag: "p", key: "panel-text", bind: "item.text",
                              style: {
                                base: {
                                  "margin-top": "0", "margin-bottom": "0", "max-width": "26rem",
                                  "font-size": "0.9375rem", "line-height": "1.6", ...t("panel-text"),
                                },
                              },
                            },
                          ],
                        },
                      ],
                    }],
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
