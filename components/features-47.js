// Two photographs of the same room. Drag a circle to reveal the second one inside it.
import { inset0, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
};
const t = (key) => themeBase("light", THEME[key]);
const crop = (edge, alt) => ({
  src: `https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1600&h=1100&fit=crop&crop=${edge}&q=80`,
  alt,
});

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "features-47",
  prefix: "features47",
  name: "Features / Lens",
  category: "features",
  description: "Two photographs of the same room. Drag a circle to reveal the second one inside it. Arrow keys move the circle.",

  props: {
    ...headerProps({
      eyebrow: "Lens",
      heading: "Look through the circle",
      description: "Drag the circle, or use the arrow keys. The second photograph sits inside it.",
    }),
    image: { type: "image", priority: true, default: crop("top", "The upper part of a sunlit room") },
    reveal: { type: "image", default: crop("bottom", "The lower part of the same room") },
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
            tag: "div", key: "stage", attrs: { "data-blok-lens": "" },
            style: {
              base: { position: "relative", overflow: "hidden", width: "100%", "aspect-ratio": "16 / 10", cursor: "grab", ...radius("token(radius-card)") },
            },
            children: [
              {
                tag: "img", key: "base", bind: "image",
                style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } },
              },
              {
                tag: "img", key: "reveal", bind: "reveal", attrs: { "data-blok-lens-reveal": "" },
                style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover", "pointer-events": "none", "clip-path": "circle(88px at 50% 46%)" } },
              },
            ],
          },
        ],
      }),
    ],
  },
};
