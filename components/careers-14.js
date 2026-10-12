// One workday, as timed blocks. The hours are the same in the room and at home.
import { mono, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  times: { "border-bottom-color": "line" },
  tab: { "border-top-color": "line" },
  time: { color: "muted" },
  "block-text": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "careers-14",
  prefix: "careers14",
  name: "Careers / Day",
  category: "careers",
  description: "A Thursday on the build team. Choose an hour and the rest of the day steps aside.",

  props: {
    ...headerProps({
      eyebrow: "A Thursday",
      heading: "A day on the build team",
      description: "The hours are the same whether you are at the desk in Rockport or at home. Choose one.",
    }),
    blocks: {
      type: "list",
      fields: { time: "text", title: "text", text: "text" },
      default: [
        { time: "9:00", title: "Start", text: "The producer reads what is due. You open the page you left yesterday and finish the part you named." },
        { time: "11:00", title: "Build", text: "Uninterrupted work on one page. Questions go in a note, not a call, until the review." },
        { time: "1:00", title: "Review", text: "Design looks at what changed. You say what the brief cannot hold, and you agree what ships." },
        { time: "4:00", title: "Close", text: "You write what the next person needs, and you leave the page in a state they can open." },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" }, lg: { "row-gap": "3.5rem" } },
        children: [
          header({ t, layout: "stack" }),
          {
            tag: "div", key: "stage", attrs: { "data-blok-tabs": "" },
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "align-items": "start", "grid-column-gap": "0rem", "grid-row-gap": "2rem", width: "100%" },
              lg: { "grid-template-columns": "0.8fr 1.2fr", "grid-column-gap": "3rem", "grid-row-gap": "0rem" },
            },
            children: [
              {
                tag: "div", key: "times", repeat: "blocks",
                style: { base: { "border-bottom-width": "1px", "border-bottom-style": "solid", ...t("times") } },
                children: [{
                  tag: "div", key: "tab", attrs: { "data-blok-tab": "" },
                  style: {
                    base: { display: "flex", "align-items": "baseline", "column-gap": "1.25rem", "padding-top": "1.15rem", "padding-bottom": "1.15rem", "border-top-width": "1px", "border-top-style": "solid", cursor: "pointer", ...t("tab") },
                    lg: { "padding-top": "1.4rem", "padding-bottom": "1.4rem" },
                  },
                  children: [
                    { tag: "div", key: "time", bind: "item.time", style: { base: { width: "4rem", "flex-shrink": "0", ...mono(), "letter-spacing": "0.04em", ...t("time") } } },
                    {
                      tag: "div", key: "tab-title", bind: "item.title",
                      style: {
                        base: { "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1.1", "font-weight": "600", "letter-spacing": "-0.03em" },
                        md: { "font-size": "2.25rem" },
                      },
                    },
                  ],
                }],
              },
              {
                tag: "div", key: "panels", repeat: "blocks",
                children: [{
                  tag: "div", key: "panel", attrs: { "data-blok-tab-panel": "" },
                  children: [{
                    tag: "div", key: "panel-body",
                    style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "0.85rem", "padding-top": "0.5rem" } },
                    children: [
                      {
                        tag: "h3", key: "block-title", bind: "item.title",
                        style: {
                          base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "2.5rem", "line-height": "1", "font-weight": "600", "letter-spacing": "-0.035em" },
                          md: { "font-size": "3.5rem" },
                        },
                      },
                      { tag: "p", key: "block-text", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "32rem", "font-size": "1.25rem", "line-height": "1.5", ...t("block-text") } } },
                    ],
                  }],
                }],
              },
            ],
          },
        ],
      }),
    ],
  },
};
