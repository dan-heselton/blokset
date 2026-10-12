// A word set larger than the container, with a photograph across the letters.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  eyebrow: { color: "muted" },
  description: { color: "muted" },
  heading: { color: "fg" },
};
const t = (key) => themeBase("light", THEME[key]);
const parked = { position: "relative", top: "auto", right: "auto", bottom: "auto", left: "auto" };

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "offgrid-06",
  prefix: "offgrid06",
  name: "Off-grid / Oversized type",
  category: "offgrid",
  description: "The word is set wider than the container and scaled to fit the viewport. A photograph sits across the letters.",

  props: {
    ...headerProps({ eyebrow: "Too big on purpose", heading: "Rockport", description: "Eighteen Main Street. The word runs past the column." }),
    image: { type: "image", default: { src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1400&q=80", alt: "A low pier and still harbor water" } },
  },

  variants: { theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }) },
  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "description"] } },

  tree: {
    role: "section",
    style: { base: { overflow: "hidden", ...t("section") } },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1.5rem" } },
        children: [
          { tag: "div", key: "eyebrow", bind: "eyebrow", if: "showEyebrow", style: { base: { ...mono(), ...t("eyebrow") } } },
          {
            tag: "div", key: "stage",
            style: { base: { position: "relative", "min-height": "0px" }, lg: { "min-height": "22rem" } },
            children: [
              {
                tag: "h2", key: "heading", bind: "heading", attrs: { "data-blok-fit": "" },
                style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "4.5rem", "line-height": "0.85", "font-weight": "600", "letter-spacing": "-0.06em", "white-space": "nowrap", ...t("heading") }, lg: { "font-size": "8rem" } },
              },
              {
                tag: "div", key: "photo",
                style: {
                  base: { ...parked, "z-index": "2", overflow: "hidden", width: "100%", "max-width": "22rem", "margin-top": "1.5rem", ...radius("token(radius-card)") },
                  lg: { position: "absolute", top: "28%", left: "42%", right: "auto", bottom: "auto", "margin-top": "0rem", width: "28%" },
                },
                children: [{ tag: "img", key: "image", bind: "image", style: { base: { display: "block", width: "100%", height: "12rem", "object-fit": "cover" }, lg: { height: "14rem" } } }],
              },
            ],
          },
          { tag: "p", key: "description", bind: "description", if: "showDescription", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "28rem", "font-size": "1.125rem", "line-height": "1.55", ...t("description") } } },
        ],
      }),
    ],
  },
};
