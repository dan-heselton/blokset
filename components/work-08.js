// A vertical list of project names. Click or Enter shows that project's photograph and one sentence.
import { radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  names: { "border-bottom-color": "line" },
  tab: { color: "fg", "border-top-color": "line" },
  line: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1600&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "work-08",
  prefix: "work8",
  name: "Portfolio / Preview",
  category: "portfolio",
  description: "Portfolio list. A vertical list of project names. Click or Enter shows that project's photograph and one sentence. On a phone the photograph sits above the names.",

  props: {
    ...headerProps({
      eyebrow: "Selected work",
      heading: "Look at one",
      description: "The names stay put. The photograph changes with the one you choose.",
    }),
    projects: {
      type: "list",
      fields: { title: "text", text: "text", image: "image" },
      default: [
        { title: "Tidewater Supply", text: "A shop for a chandlery that still writes its orders by hand.", image: shot("1501594907352-04cda38ebc29", "A bridge in fog above the water") },
        { title: "North Shore Arts", text: "Exhibitions, a visit page, and a way for the editors to publish on a Thursday.", image: shot("1519710164239-da123dc03ef4", "A sunlit room with a wooden chair") },
        { title: "Halyard", text: "One product, told from the drawing to the object on the table.", image: shot("1497366216548-37526070297c", "A long desk in a bright studio") },
        { title: "Saltbox Bakery", text: "The name, the mark, and a short site for the Saturday line.", image: shot("1517248135467-4c7edcad34c4", "A dining room with set tables") },
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
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" }, lg: { "row-gap": "3.5rem" } },
        children: [
          header({ t, layout: "stack" }),
          {
            tag: "div", key: "stage", attrs: { "data-blok-tabs": "" },
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "align-items": "start", "grid-column-gap": "0rem", "grid-row-gap": "1.5rem" },
              lg: { "grid-template-columns": "0.85fr 1.15fr", "grid-column-gap": "3rem", "grid-row-gap": "0rem" },
            },
            children: [
              {
                tag: "div", key: "names", repeat: "projects",
                style: {
                  base: { display: "flex", "flex-direction": "column", "border-bottom-width": "1px", "border-bottom-style": "solid", "grid-column-start": "1", "grid-column-end": "2", "grid-row-start": "2", "grid-row-end": "3", ...t("names") },
                  lg: { "grid-column-start": "1", "grid-column-end": "2", "grid-row-start": "1", "grid-row-end": "2" },
                },
                children: [{
                  tag: "h3", key: "tab", bind: "item.title", attrs: { "data-blok-tab": "" },
                  style: {
                    base: { "margin-top": "0", "margin-bottom": "0", "padding-top": "0.95rem", "padding-bottom": "0.95rem", "border-top-width": "1px", "border-top-style": "solid", cursor: "pointer", "font-family": "token(font-display)", "font-size": "1.35rem", "line-height": "1.2", "font-weight": "500", "letter-spacing": "-0.02em", ...t("tab") },
                    lg: { "padding-top": "1.15rem", "padding-bottom": "1.15rem", "font-size": "1.75rem" },
                  },
                }],
              },
              {
                tag: "div", key: "panels", repeat: "projects",
                style: {
                  base: { display: "flex", "flex-direction": "column", "grid-column-start": "1", "grid-column-end": "2", "grid-row-start": "1", "grid-row-end": "2" },
                  lg: { "grid-column-start": "2", "grid-column-end": "3", "grid-row-start": "1", "grid-row-end": "2" },
                },
                children: [{
                  tag: "div", key: "panel", attrs: { "data-blok-tab-panel": "" },
                  children: [{
                    tag: "div", key: "panel-body",
                    style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "0.85rem" } },
                    children: [
                    {
                      tag: "img", key: "preview", bind: "item.image",
                      style: { base: { display: "block", width: "100%", height: "16rem", "object-fit": "cover", ...radius("token(radius-card)") }, lg: { height: "24rem" } },
                    },
                    { tag: "p", key: "line", bind: "item.text", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "32rem", "font-size": "1.0625rem", "line-height": "1.55", ...t("line") } } },
                    ],
                  }],
                }],
              },
            ],
          },
        ],
      }),
    ],
  },
};
