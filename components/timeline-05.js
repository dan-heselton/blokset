// Dated cards in a row. On a wide screen the section pins and the row moves sideways as you scroll.
import { radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  line: { "background-color": "line" },
  tick: { "background-color": "glyph" },
  date: { color: "glyph" },
  text: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "timeline-05",
  prefix: "timeline5",
  name: "Timeline / Horizontal",
  category: "timeline",
  description: "Dated cards in a row. A wide screen pins the section and scrolls them sideways; a phone swipes.",

  props: {
    ...headerProps({
      eyebrow: "Along the way",
      heading: "A line you can scroll",
      description: "The same story, laid out left to right. Add a card and the line gets longer.",
    }),
    events: {
      type: "list",
      fields: { date: "text", title: "text", text: "text" },
      default: [
        { date: "2014", title: "First client", text: "A bakery site, invoiced the week the bread changed recipes." },
        { date: "2017", title: "On our own", text: "Left the agency desk. Kept the Friday preview, dropped the status meeting." },
        { date: "2020", title: "Remote on purpose", text: "Clients in six states. The work still showed up on the same day each week." },
        { date: "2023", title: "Harbor room", text: "A shared space with a window on the water and room for a second designer." },
        { date: "2026", title: "Written down", text: "The components we kept rebuilding became a library other studios can start from." },
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
    style: { base: { overflow: "hidden", ...t("section") } },
    children: [
      shell({
        tag: "div", key: "component", attrs: { "data-blok-hscroll": "" },
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" }, lg: { "row-gap": "3.5rem" } },
        children: [
          header({ t }),
          {
            tag: "div", key: "track", repeat: "events", attrs: { "data-blok-hscroll-track": "" },
            style: {
              base: {
                display: "flex", "align-items": "stretch", "column-gap": "1rem", "overflow-x": "auto",
                "scroll-snap-type": "x mandatory", "padding-top": "0.5rem", "padding-bottom": "1rem",
              },
              lg: { "column-gap": "1.5rem" },
            },
            children: [{
              tag: "div", key: "event",
              style: {
                base: { position: "relative", "flex-shrink": "0", width: "78vw", "padding-top": "1.75rem", "scroll-snap-align": "start" },
                md: { width: "42vw" },
                      lg: { width: "18rem" },
              },
              children: [
                { tag: "div", key: "line", decorative: true, style: { base: { position: "absolute", top: "0.3rem", left: "0.7rem", right: "-1rem", height: "2px", ...t("line") }, lg: { right: "-1.5rem" } } },
                { tag: "div", key: "tick", decorative: true, style: { base: { position: "absolute", top: "0", left: "0", width: "0.7rem", height: "0.7rem", ...radius("50%"), ...t("tick") } } },
                { tag: "div", key: "date", bind: "item.date", style: { base: { "margin-bottom": "0.6rem", "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1", "font-weight": "600", "letter-spacing": "-0.04em", ...t("date") } } },
                { tag: "h3", key: "event-title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0.5rem", "font-family": "token(font-display)", "font-size": "1.35rem", "line-height": "1.2", "font-weight": "600", "letter-spacing": "-0.02em" } } },
                { tag: "p", key: "text", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.55", ...t("text") } } },
              ],
            }],
          },
        ],
      }),
    ],
  },
};
