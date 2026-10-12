// Three photographs at different sizes, overlapping a short note.
import { pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  copy: { "background-color": "panel", color: "fg" },
  "copy-text": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1200&q=80`, alt });
const parked = { position: "relative", top: "auto", right: "auto", bottom: "auto", left: "auto", "z-index": "1", width: "100%", "margin-top": "1rem" };

function photo(key, prop, speed, box) {
  return {
    tag: "div", key, attrs: { "data-blok-depth": speed },
    style: {
      base: { ...parked, overflow: "hidden", ...radius("token(radius-card)") },
      lg: { position: "absolute", "margin-top": "0rem", "z-index": box.z, width: box.width, top: box.top, left: box.left },
    },
    children: [{ tag: "img", key: `${key}-image`, bind: prop, style: { base: { display: "block", width: "100%", height: "14rem", "object-fit": "cover" } } }],
  };
}

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "offgrid-01",
  prefix: "offgrid01",
  name: "Off-grid / Overlap",
  category: "offgrid",
  description: "Three photographs of different sizes overlap a note. They drift at different speeds as you scroll. On a phone they stack.",

  props: {
    ...headerProps({ eyebrow: "Not in a row", heading: "The pictures sit on the note", description: "They overlap on purpose. Scroll and they drift apart." }),
    copyTitle: { type: "text", default: "What we brought back" },
    copyText: { type: "text", default: "A chair, a field, and the harbor at the end of the street. The pages are made from these, not from a mood board." },
    imageA: { type: "image", default: shot("1519710164239-da123dc03ef4", "A wooden chair in a pale room") },
    imageB: { type: "image", default: shot("1500382017468-9049fed747ef", "A gold field under a wide sky") },
    imageC: { type: "image", default: shot("1501594907352-04cda38ebc29", "A low pier and still harbor water") },
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
          header({ t, layout: "split" }),
          {
            tag: "div", key: "stage",
            style: { base: { position: "relative", "min-height": "0px" }, lg: { "min-height": "36rem" } },
            children: [
              {
                tag: "div", key: "copy",
                style: {
                  base: { position: "relative", "z-index": "5", "max-width": "28rem", "margin-top": "0rem", "margin-left": "0rem", ...radius("token(radius-card)"), ...pad("1.5rem"), ...t("copy") },
                  lg: { "margin-top": "5rem", "margin-left": "38%" },
                },
                children: [
                  { tag: "h3", key: "copy-title", bind: "copyTitle", style: { base: { "margin-top": "0", "margin-bottom": "0.6rem", "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1.1", "font-weight": "600" } } },
                  { tag: "p", key: "copy-text", bind: "copyText", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1.05rem", "line-height": "1.5", ...t("copy-text") } } },
                ],
              },
              photo("photo-a", "imageA", "0.22", { z: "3", width: "32%", top: "0", left: "0" }),
              photo("photo-b", "imageB", "-0.18", { z: "1", width: "26%", top: "4%", left: "70%" }),
              photo("photo-c", "imageC", "0.1", { z: "4", width: "24%", top: "62%", left: "62%" }),
            ],
          },
        ],
      }),
    ],
  },
};
