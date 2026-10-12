// Slightly turned photographs around a centered line. They follow the pointer.
import { radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=900&q=80`, alt });

function card(n, prop, depth, turn, box) {
  return {
    tag: "div", key: `card-${n}`, attrs: { "data-blok-pointer-layer": "", "data-blok-depth": depth },
    style: {
      base: { position: "relative", top: "auto", right: "auto", bottom: "auto", left: "auto", "z-index": "1", width: "100%", "max-width": "16rem", overflow: "hidden", "margin-top": "1rem", transform: turn, ...radius("token(radius-card)") },
      lg: { position: "absolute", "margin-top": "0rem", width: box.width, top: box.top, left: box.left },
    },
    children: [{ tag: "img", key: `image-${n}`, bind: prop, style: { base: { display: "block", width: "100%", height: "12rem", "object-fit": "cover" }, lg: { height: "16rem" } } }],
  };
}

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "offgrid-05",
  prefix: "offgrid05",
  name: "Off-grid / Scatter",
  category: "offgrid",
  description: "Four photographs sit slightly turned around a centered line. On a fine pointer they drift. On a phone they stack.",

  props: {
    ...headerProps({ eyebrow: "Pinned to the wall", heading: "Not lined up", description: "Move across the page. The pictures lean with you." }),
    image1: { type: "image", default: shot("1519710164239-da123dc03ef4", "A wooden chair in a pale room") },
    image2: { type: "image", default: shot("1469474968028-56623f02e42e", "A sunlit ridge and a valley of pines") },
    image3: { type: "image", default: shot("1501594907352-04cda38ebc29", "A low pier and still harbor water") },
    image4: { type: "image", default: shot("1497366216548-37526070297c", "A bright studio with a long desk") },
  },

  variants: { theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }) },
  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] } },

  tree: {
    role: "section",
    attrs: { "data-blok-pointer": "" },
    style: { base: { overflow: "hidden", "min-height": "0px", ...t("section") }, lg: { "min-height": "100svh" } },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { position: "relative", display: "flex", "flex-direction": "column", "align-items": "center", "justify-content": "flex-start", "min-height": "0px" }, lg: { "min-height": "40rem", "justify-content": "center" } },
        children: [
          {
            tag: "div", key: "copy",
            style: { base: { position: "relative", "z-index": "2", "max-width": "36rem", "text-align": "center" } },
            children: [header({ t, layout: "center" })],
          },
          {
            tag: "div", key: "scatter",
            style: { base: { position: "relative", top: "auto", right: "auto", bottom: "auto", left: "auto", display: "flex", "flex-wrap": "wrap", "justify-content": "center", "column-gap": "1rem", width: "100%" }, lg: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", display: "block" } },
            children: [
              card("1", "image1", "0.35", "rotate(-7deg)", { width: "18%", top: "6%", left: "4%" }),
              card("2", "image2", "-0.2", "rotate(5deg)", { width: "16%", top: "10%", left: "76%" }),
              card("3", "image3", "0.15", "rotate(8deg)", { width: "18%", top: "62%", left: "8%" }),
              card("4", "image4", "-0.28", "rotate(-4deg)", { width: "20%", top: "64%", left: "70%" }),
            ],
          },
        ],
      }),
    ],
  },
};
