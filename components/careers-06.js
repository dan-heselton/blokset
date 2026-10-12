// Where the studio works. A photograph, a place, and a sentence. Add a row for another place.
import { radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  note: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "careers-06",
  prefix: "careers6",
  name: "Careers / Places",
  category: "careers",
  description: "A photograph, a place name, and a sentence. Adding a list item adds a place, including remote.",

  props: {
    ...headerProps({
      eyebrow: "Places",
      heading: "Where you would work",
      description: "One room in Rockport, a second desk when that room is full, and remote for the people who stay home.",
    }),
    places: {
      type: "list",
      fields: { name: "text", text: "text", image: "image" },
      default: [
        { name: "Rockport", text: "The shop, with a chair by the window and the light we judge color by.", image: shot("1519710164239-da123dc03ef4", "A sunlit room with a wooden chair") },
        { name: "The harbor", text: "A second desk above the boat shop, used when the first room is full.", image: shot("1497366216548-37526070297c", "A long desk in a bright studio") },
        { name: "Remote", text: "The same hours, and a call when a decision needs more than a note.", image: shot("1500530855697-b586d89ba3ee", "Open green hills under a pale sky") },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] },
    reveal: { preset: "fade-up", targets: ["place"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" }, lg: { "row-gap": "3.5rem" } },
        children: [
          header({ t, layout: "stack" }),
          {
            tag: "div", key: "list", repeat: "places",
            style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" }, lg: { "row-gap": "3rem" } },
            children: [{
              tag: "div", key: "place",
              style: {
                base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "column-gap": "0rem", "row-gap": "1rem" },
                md: { "flex-direction": "row", "align-items": "center", "column-gap": "2rem", "row-gap": "0rem" },
              },
              children: [
                {
                  tag: "img", key: "photo", bind: "item.image",
                  style: {
                    base: { display: "block", width: "100%", height: "14rem", "object-fit": "cover", "flex-shrink": "0", ...radius("token(radius-card)") },
                    md: { width: "16rem", height: "11rem" },
                  },
                },
                {
                  tag: "div", key: "copy",
                  style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "0.4rem" } },
                  children: [
                    {
                      tag: "h3", key: "name", bind: "item.name",
                      style: {
                        base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1.1", "font-weight": "600", "letter-spacing": "-0.03em" },
                        lg: { "font-size": "2.25rem" },
                      },
                    },
                    { tag: "p", key: "note", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "32rem", "font-size": "1.0625rem", "line-height": "1.55", ...t("note") } } },
                  ],
                },
              ],
            }],
          },
        ],
      }),
    ],
  },
};
