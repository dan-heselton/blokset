// The section pins and scrolling wipes through a list of photographs under one headline.
import { themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  heading: { color: "fg" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ image: { src: `https://images.unsplash.com/photo-${id}?w=1800&q=80`, alt } });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-27",
  prefix: "hero27",
  name: "Hero / Scroll stills",
  category: "hero",
  description: "The section pins and scrolling wipes through a list of photographs under one headline. On a phone the photographs stack and the section does not pin.",

  props: {
    heading: { type: "text", default: "Four frames of the work" },
    stills: {
      type: "list",
      fields: { image: "image" },
      default: [
        shot("1519710164239-da123dc03ef4", "A sunlit room with a wooden chair"),
        shot("1497366216548-37526070297c", "A bright studio with a long desk"),
        shot("1517248135467-4c7edcad34c4", "A dining room with set tables"),
        shot("1500530855697-b586d89ba3ee", "Green hills under a pale sky"),
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["heading"] },
  },

  tree: {
    role: "section",
    attrs: { "data-blok-steps": "" },
    style: {
      base: { "min-height": "0px", ...t("section") },
      lg: { "min-height": "100svh" },
    },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1.75rem" }, lg: { "row-gap": "2rem" } },
        children: [
          {
            tag: "h1", key: "heading", bind: "heading",
            style: {
              base: { "margin-top": "0", "margin-bottom": "0", "max-width": "16ch", "font-family": "token(font-display)", "font-size": "3rem", "line-height": "0.95", "font-weight": "600", "letter-spacing": "-0.04em", ...t("heading") },
              md: { "font-size": "4.25rem" },
              lg: { "font-size": "5.5rem" },
            },
          },
          {
            tag: "div", key: "stills", repeat: "stills",
            style: {
              base: { display: "flex", "flex-direction": "column", position: "relative", overflow: "visible", width: "100%", height: "auto", "row-gap": "0.75rem" },
              lg: { display: "block", overflow: "hidden", height: "72vh", "row-gap": "0rem" },
            },
            children: [{
              tag: "img", key: "still", bind: "item.image", attrs: { "data-blok-steps-still": "" },
              style: {
                base: { position: "relative", top: "auto", right: "auto", bottom: "auto", left: "auto", display: "block", width: "100%", height: "auto", "aspect-ratio": "16 / 10", "object-fit": "cover", "z-index": "1" },
                lg: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", height: "100%", "aspect-ratio": "auto" },
              },
            }],
          },
        ],
      }, { size: "medium" }),
    ],
  },
};
