// Questions and answers, visible, in two columns. The accordion stays a separate section.
import { themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  answer: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "faq-05",
  prefix: "faq5",
  name: "FAQ / Columns",
  category: "faq",
  description: "Questions and answers sit in the open, in two columns on a wide screen. Nothing is collapsed.",

  props: {
    ...headerProps({
      eyebrow: "Before you write",
      heading: "A few practical answers",
      description: "The questions that come up before a first call. Add one when it keeps coming up.",
    }),
    questions: {
      type: "list",
      fields: { question: "text", answer: "text" },
      default: [
        { question: "Where does the work happen?", answer: "The studio is in Rockport. Calls and reviews happen wherever you already are." },
        { question: "Who edits the site after launch?", answer: "You do. Fields are named for the person who will change them, and we leave a short note on each one." },
        { question: "How does a project start?", answer: "A note about what you are making, then a call. If it is a fit, you get a written plan before any design." },
        { question: "What do you need from us?", answer: "Who the site is for, the pages you already know you need, and one example you like." },
        { question: "Can you work with a brand we already have?", answer: "Yes. We start from the type, color, and logo you use now, and only replace a piece when it is getting in the way." },
        { question: "Will the site stay in Webflow?", answer: "When your editors want to change it visually, yes. When you need custom logic, we say so before the plan is written." },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] },
    reveal: { preset: "fade-up", targets: ["item"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" }, lg: { "row-gap": "3.5rem" } },
        children: [
          header({ t }),
          {
            tag: "div", key: "list", repeat: "questions",
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "grid-column-gap": "0rem", "grid-row-gap": "2rem" },
              lg: { "grid-template-columns": "1fr 1fr", "grid-column-gap": "3rem", "grid-row-gap": "2.75rem" },
            },
            children: [{
              tag: "div", key: "item",
              style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.6rem" } },
              children: [
                {
                  tag: "h3", key: "question", bind: "item.question",
                  style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.35rem", "line-height": "1.25", "font-weight": "600", "letter-spacing": "-0.02em" } },
                },
                { tag: "p", key: "answer", bind: "item.answer", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.6", ...t("answer") } } },
              ],
            }],
          },
        ],
      }),
    ],
  },
};
