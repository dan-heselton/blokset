// A title row. Opening it drops a full-width photograph, and opening another closes the first.
import { radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  list: { "border-bottom-color": "line" },
  item: { "border-top-color": "line" },
  icon: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1800&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "features-48",
  prefix: "features48",
  name: "Features / Curtain",
  category: "features",
  description: "A title row. Opening it drops a full-width photograph over the list, then closes when you open another.",

  props: {
    ...headerProps({
      eyebrow: "Curtain",
      heading: "Open a title",
      description: "The panel is a photograph. One stays down. The next one you open pulls the first back up.",
    }),
    rows: {
      type: "list",
      fields: { title: "text", image: "image" },
      default: [
        { title: "The shop before it opens", image: shot("1519710164239-da123dc03ef4", "A quiet room with a chair by the window") },
        { title: "The long desk", image: shot("1497366216548-37526070297c", "A studio desk under north light") },
        { title: "The street side", image: shot("1486406146926-c627a92ad1ab", "A glass facade on a clear day") },
        { title: "The way home", image: shot("1501594907352-04cda38ebc29", "A bridge over blue water") },
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
            tag: "div", key: "list", repeat: "rows", attrs: { "data-blok-accordion": "" },
            style: { base: { "border-bottom-width": "1px", "border-bottom-style": "solid", ...t("list") } },
            children: [{
              tag: "div", key: "item", attrs: { "data-blok-acc-item": "" },
              style: { base: { "border-top-width": "1px", "border-top-style": "solid", ...t("item") } },
              children: [
                {
                  tag: "div", key: "trigger", attrs: { "data-blok-acc-trigger": "" },
                  style: { base: { display: "flex", "align-items": "center", "justify-content": "space-between", "column-gap": "1.5rem", "padding-top": "1.35rem", "padding-bottom": "1.35rem", cursor: "pointer" } },
                  children: [
                    { tag: "h3", key: "title", bind: "item.title", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1.15", "font-weight": "600", "letter-spacing": "-0.03em" }, lg: { "font-size": "2.5rem" } } },
                    { tag: "div", key: "icon", text: "+", decorative: true, attrs: { "data-blok-acc-icon": "" }, style: { base: { "flex-shrink": "0", "font-size": "2rem", "line-height": "1", "font-weight": "300", ...t("icon") } } },
                  ],
                },
                {
                  tag: "div", key: "panel", attrs: { "data-blok-acc-panel": "" },
                  children: [{
                    tag: "img", key: "photo", bind: "item.image",
                    style: { base: { display: "block", width: "100%", height: "auto", "aspect-ratio": "16 / 7", "object-fit": "cover", "margin-bottom": "1.5rem", ...radius("token(radius-card)") } },
                  }],
                },
              ],
            }],
          },
        ],
      }),
    ],
  },
};
