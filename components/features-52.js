// A dim paragraph. The line under the pointer, or the line you focus, is the one that brightens.
import { themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  line: { color: "fg" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "features-52",
  prefix: "features52",
  name: "Features / Read",
  category: "features",
  description: "A dim paragraph. Moving the pointer, or focusing a line, brightens the line you are on. Reduced motion shows the whole paragraph at full strength.",

  props: {
    ...headerProps({
      eyebrow: "Read",
      heading: "The line you are on",
      description: "The rest of the paragraph stays quiet until you reach it.",
    }),
    lines: {
      type: "list",
      fields: { text: "text" },
      default: [
        { text: "The studio keeps a short list" },
        { text: "of materials, and a long list" },
        { text: "of ways to join them." },
        { text: "Move across a line." },
        { text: "It is the only one that speaks." },
        { text: "The rest stay quiet." },
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
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" } },
        children: [
          header({ t, layout: "stack" }),
          {
            tag: "div", key: "passage", repeat: "lines", attrs: { "data-blok-read": "" },
            style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.2rem", "max-width": "48rem" } },
            children: [{
              tag: "div", key: "line", bind: "item.text", attrs: { "data-blok-read-line": "" },
              style: {
                base: { "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1.25", "font-weight": "600", "letter-spacing": "-0.03em", ...t("line") },
                md: { "font-size": "2.05rem" },
                lg: { "font-size": "2.35rem" },
              },
            }],
          },
        ],
      }),
    ],
  },
};
