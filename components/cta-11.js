// The heading resolves out of random glyphs, then does it again when the pointer enters.
import { themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  heading: { color: "fg" },
  description: { color: "muted" },
};
const t = (key) => themeBase("dark", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "cta-11",
  prefix: "cta11",
  name: "CTA / Scramble",
  category: "cta",
  description: "The heading resolves from random glyphs on enter, and again when you hover it.",

  props: {
    heading: { type: "text", default: "Start something" },
    description: { type: "text", default: "Tell us what you are making. We reply with a plan, a timeline, and a fixed price." },
    showButtons: { type: "boolean", default: true },
    buttons: {
      type: "buttons", max: 2,
      default: [
        { title: "Start a project", href: "#", variant: "primary" },
        { title: "hello@studio.co", href: "mailto:hello@studio.co", variant: "secondary-alt" },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "dark", options: ["dark", "light", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.1, targets: ["description", "actions"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "1.5rem", "max-width": "48rem" } },
        children: [
          {
            tag: "h2", key: "heading", bind: "heading", attrs: { "data-blok-scramble": "" },
            style: {
              base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "3.25rem", "line-height": "0.95", "font-weight": "600", "letter-spacing": "-0.045em", ...t("heading") },
              md: { "font-size": "5rem" },
              lg: { "font-size": "6.5rem" },
            },
          },
          { tag: "p", key: "description", bind: "description", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "32rem", "font-size": "1.125rem", "line-height": "1.6", ...t("description") } } },
          { tag: "div", key: "actions", repeat: "buttons", if: "showButtons", style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "0.75rem", "row-gap": "0.75rem", "margin-top": "0.5rem" } } },
        ],
      }),
    ],
  },
};
