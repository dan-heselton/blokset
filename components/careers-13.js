// The interview, hour by hour: who you meet, how long, and what you do in the room.
import { mono, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  list: { "border-bottom-color": "line" },
  step: { "border-top-color": "line" },
  index: { color: "muted" },
  icon: { color: "muted" },
  who: { color: "muted" },
  length: { color: "muted" },
  "step-text": { color: "fg" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "careers-13",
  prefix: "careers13",
  name: "Careers / Interview",
  category: "careers",
  description: "Four conversations. Open one to read who is in the room, how long you have, and what the hour is for.",

  props: {
    ...headerProps({
      eyebrow: "The loop",
      heading: "How the interview goes",
      description: "Four conversations. Open one. You always know who is in the room, how long you have, and what the hour is for.",
    }),
    steps: {
      type: "list",
      fields: { title: "text", who: "text", length: "text", text: "text" },
      default: [
        { title: "Write", who: "Maya Chen, studio lead", length: "45 minutes", text: "You get a page and a brief. You say what you would build first, and what you would leave out." },
        { title: "Talk", who: "Jonah Ell, design", length: "30 minutes", text: "You look at a live site together and name the one thing you would change before launch." },
        { title: "Try", who: "The team in the room", length: "90 minutes", text: "A small piece of the real work. Paid. Scoped before you arrive, so the hour has an end." },
        { title: "Decide", who: "Maya Chen, again", length: "20 minutes", text: "What the role is, what it is not, and the day you would hear yes or no." },
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
            tag: "div", key: "list", repeat: "steps", attrs: { "data-blok-accordion": "" },
            style: { base: { "border-bottom-width": "1px", "border-bottom-style": "solid", ...t("list") } },
            children: [{
              tag: "div", key: "step", attrs: { "data-blok-acc-item": "" },
              style: { base: { "border-top-width": "1px", "border-top-style": "solid", ...t("step") } },
              children: [
                {
                  tag: "div", key: "trigger", attrs: { "data-blok-acc-trigger": "" },
                  style: { base: { display: "flex", "align-items": "center", "column-gap": "1rem", "padding-top": "1.35rem", "padding-bottom": "1.35rem", cursor: "pointer" }, lg: { "padding-top": "1.6rem", "padding-bottom": "1.6rem" } },
                  children: [
                    { tag: "div", key: "index", bind: "@index", style: { base: { width: "2.5rem", "flex-shrink": "0", ...mono(), ...t("index") } } },
                    {
                      tag: "h3", key: "step-title", bind: "item.title",
                      style: {
                        base: { "flex-grow": "1", "min-width": "0", "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1.1", "font-weight": "600", "letter-spacing": "-0.03em" },
                        md: { "font-size": "2.25rem" },
                      },
                    },
                    { tag: "div", key: "length", bind: "item.length", style: { base: { "flex-shrink": "0", ...mono(), "letter-spacing": "0.04em", ...t("length") } } },
                    { tag: "div", key: "icon", text: "+", decorative: true, attrs: { "data-blok-acc-icon": "" }, style: { base: { "flex-shrink": "0", "font-size": "1.75rem", "line-height": "1", "font-weight": "300", ...t("icon") } } },
                  ],
                },
                {
                  tag: "div", key: "panel", attrs: { "data-blok-acc-panel": "" },
                  children: [{
                    tag: "div", key: "panel-body",
                    style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "0.45rem", "padding-bottom": "1.5rem", "padding-left": "3.5rem" } },
                    children: [
                      { tag: "div", key: "who", bind: "item.who", style: { base: { "font-size": "0.9375rem", "line-height": "1.4", ...t("who") } } },
                      { tag: "p", key: "step-text", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "40rem", "font-size": "1.0625rem", "line-height": "1.55", ...t("step-text") } } },
                    ],
                  }],
                },
              ],
            }],
          },
        ],
      }),
    ],
  },
};
