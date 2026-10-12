// The photograph runs to the viewport edge. The copy stays in the container.
import { themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
};
const t = (key) => themeBase("light", THEME[key]);
const parked = { position: "relative", top: "auto", right: "auto", bottom: "auto", left: "auto" };

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "offgrid-03",
  prefix: "offgrid03",
  name: "Off-grid / Bleed split",
  category: "offgrid",
  description: "On a wide screen the photograph runs from the middle of the page to the viewport edge. The copy stays inside the container. On a phone the photograph is simply on top.",

  props: {
    ...headerProps({ eyebrow: "Past the margin", heading: "The picture does not stop at the column", description: "The words stay on the grid. The harbor keeps going." }),
    image: { type: "image", default: { src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1800&q=80", alt: "A low pier and still harbor water" } },
  },

  variants: { theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }) },
  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] } },

  tree: {
    role: "section",
    style: {
      base: { position: "relative", overflow: "hidden", "min-height": "0px", ...t("section") },
      lg: { "min-height": "36rem" },
    },
    children: [
      {
        tag: "div", key: "media",
        style: {
          base: { ...parked, "z-index": "0", width: "100%", height: "18rem", overflow: "hidden" },
          lg: { position: "absolute", top: "0", right: "0", bottom: "0", left: "auto", width: "48%", height: "auto" },
        },
        children: [
          { tag: "img", key: "image", bind: "image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } },
        ],
      },
      shell({
        tag: "div", key: "component",
        style: { base: { position: "relative", "z-index": "1", display: "flex", "flex-direction": "column", "justify-content": "center", "min-height": "0px" }, lg: { "min-height": "36rem" } },
        children: [
          {
            tag: "div", key: "copy",
            style: { base: { "max-width": "34rem", width: "100%" } },
            children: [header({ t, layout: "stack" })],
          },
        ],
      }),
    ],
  },
};
