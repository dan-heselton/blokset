// A row of tiles. The one under the pointer grows, and the others make room.
import { pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ image: { src: `https://images.unsplash.com/photo-${id}?w=1200&q=80`, alt } });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "bento-03",
  prefix: "bento03",
  name: "Bento / Grow",
  category: "bento",
  description: "Four tiles in a row. Hover or focus one and it widens while the others shrink. On a phone they stack and stay still.",

  props: {
    ...headerProps({ eyebrow: "Open one", heading: "The tile you are on gets the room", description: "The others wait. On a small screen they simply stack." }),
    tiles: {
      type: "list",
      fields: { title: "text", image: "image" },
      default: [
        { title: "Material", ...shot("1519710164239-da123dc03ef4", "A wooden chair in a pale room") },
        { title: "Daylight", ...shot("1469474968028-56623f02e42e", "A sunlit ridge and a valley of pines") },
        { title: "Harbor", ...shot("1501594907352-04cda38ebc29", "A low pier and still harbor water") },
        { title: "Field", ...shot("1500382017468-9049fed747ef", "A gold field under a wide sky") },
      ],
    },
  },

  variants: { theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }) },
  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] } },

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
            tag: "div", key: "row", repeat: "tiles", attrs: { "data-blok-grow": "" },
            style: {
              base: { display: "flex", "flex-direction": "column", "column-gap": "0rem", "row-gap": "0.75rem", height: "auto" },
              lg: { "flex-direction": "row", "column-gap": "0.75rem", "row-gap": "0rem", height: "26rem" },
            },
            children: [{
              tag: "div", key: "tile", attrs: { "data-blok-grow-tile": "" },
              style: {
                base: { position: "relative", overflow: "hidden", "flex-grow": "0", "flex-shrink": "1", "flex-basis": "auto", "min-height": "16rem", ...radius("token(radius-card)") },
                lg: { "flex-grow": "1", "flex-basis": "0px", "min-height": "0px" },
              },
              children: [
                { tag: "img", key: "tile-image", bind: "item.image", style: { base: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", width: "100%", height: "100%", "object-fit": "cover" } } },
                {
                  tag: "div", key: "tile-shade", decorative: true,
                  style: { base: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", "background-image": "linear-gradient(to top, token(shade-strong), token(shade-clear) 55%)" } },
                },
                {
                  tag: "h3", key: "tile-title", bind: "item.title",
                  style: { base: { position: "absolute", right: "1rem", bottom: "1rem", left: "1rem", top: "auto", "margin-top": "0", "margin-bottom": "0", color: "token(text-inverse)", "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1.1", "font-weight": "600" } },
                },
              ],
            }],
          },
        ],
      }),
    ],
  },
};
