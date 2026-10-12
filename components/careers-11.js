// Related roles for the job you are already reading. Each row says why it is close.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  card: { "background-color": "fg", color: "bg" },
  team: { color: "bg" },
  place: { color: "bg" },
  why: { color: "bg" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "careers-11",
  prefix: "careers11",
  name: "Careers / Also Open",
  category: "careers",
  description: "The open roles closest to the one you are reading. Click or swipe the stack to bring the next one forward.",

  props: {
    ...headerProps({
      eyebrow: "Also open",
      heading: "Close to Webflow developer",
      description: "These three ask for the same kind of care, in a different room. Click the card, or swipe it.",
    }),
    roles: {
      type: "list",
      fields: { title: "text", team: "text", place: "text", why: "text", href: "link" },
      default: [
        { title: "Brand designer", team: "Design", place: "Rockport", why: "The pages a developer builds start as files from this desk.", href: "#brand-designer" },
        { title: "Studio producer", team: "Build", place: "The harbor", why: "Same team. They hold the week while the pages are in progress.", href: "#studio-producer" },
        { title: "Content editor", team: "Strategy", place: "Remote", why: "They write the lines that have to fit the fields you name.", href: "#content-editor" },
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
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" }, lg: { "row-gap": "3rem" } },
        children: [
          header({ t, layout: "stack" }),
          {
            tag: "div", key: "deck", repeat: "roles", attrs: { "data-blok-deck": "" },
            style: { base: { position: "relative", width: "100%", height: "22rem" } },
            children: [{
              tag: "div", key: "card", attrs: { "data-blok-deck-card": "" },
              style: {
                base: {
                  position: "absolute", top: "0", left: "0", right: "0",
                  width: "100%", "max-width": "28rem", height: "18rem",
                  "margin-top": "0", "margin-right": "auto", "margin-bottom": "0", "margin-left": "auto",
                  overflow: "hidden", cursor: "pointer",
                  "padding-top": "1.75rem", "padding-right": "1.75rem", "padding-bottom": "1.75rem", "padding-left": "1.75rem",
                  ...radius("token(radius-card)"), ...t("card"),
                },
              },
              children: [
                {
                  tag: "div", key: "body",
                  style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "justify-content": "space-between", height: "100%", "row-gap": "1rem" } },
                  children: [
                    { tag: "div", key: "index", bind: "@index", decorative: true, style: { base: { ...mono(), "letter-spacing": "0.08em" } } },
                    {
                      tag: "h3", key: "title", bind: "item.title",
                      style: {
                        base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "2.25rem", "line-height": "1.05", "font-weight": "600", "letter-spacing": "-0.03em" },
                        md: { "font-size": "2.75rem" },
                      },
                    },
                    {
                      tag: "div", key: "foot",
                      style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "0.45rem" } },
                      children: [
                        {
                          tag: "div", key: "meta-row",
                          style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "1rem", "row-gap": "0.25rem" } },
                          children: [
                            { tag: "div", key: "team", bind: "item.team", style: { base: { ...mono(), "letter-spacing": "0.04em", ...t("team") } } },
                            { tag: "div", key: "place", bind: "item.place", style: { base: { "font-size": "0.9375rem", "line-height": "1.4", ...t("place") } } },
                          ],
                        },
                        { tag: "p", key: "why", bind: "item.why", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1.0625rem", "line-height": "1.5", ...t("why") } } },
                      ],
                    },
                  ],
                },
              ],
            }],
          },
        ],
      }),
    ],
  },
};
