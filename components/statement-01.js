// One large paragraph. Characters go from dim to full as the line scrolls through.
import { mono, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  eyebrow: { color: "muted" },
  statement: { color: "fg" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "statement-01",
  prefix: "statement1",
  name: "Statement / Scroll Fill",
  category: "statement",
  description: "A single large paragraph. Each character brightens as you scroll through it.",

  props: {
    showEyebrow: { type: "boolean", default: true },
    eyebrow: { type: "text", default: "A note" },
    statement: {
      type: "text",
      default: "We would rather ship a small site people keep than a large one they abandon after the launch email.",
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade", stagger: 0.08, targets: ["eyebrow"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1.5rem" }, lg: { "row-gap": "2rem" } },
        children: [
          { tag: "div", key: "eyebrow", bind: "eyebrow", if: "showEyebrow", style: { base: { ...mono(), ...t("eyebrow") } } },
          {
            tag: "h2", key: "statement", bind: "statement", attrs: { "data-blok-split": "fill" },
            style: {
              base: { "margin-top": "0", "margin-bottom": "0", "max-width": "22em", "font-family": "token(font-display)", "font-size": "2rem", "line-height": "1.2", "font-weight": "500", "letter-spacing": "-0.03em", ...t("statement") },
              md: { "font-size": "3rem" },
              lg: { "font-size": "4.25rem", "line-height": "1.12" },
            },
          },
        ],
      }, { size: "large" }),
    ],
  },
};
