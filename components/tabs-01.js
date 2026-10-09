// Service switcher: a row of tabs, one panel at a time. The runtime hides the other panels.
import { themeVariant, themeBase, radius, mono, pad } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  eyebrow: { color: "muted" },
  description: { color: "muted" },
  tab: { color: "fg", "border-bottom-color": "line" },
  "panel-text": { color: "muted" },
  panel: { "background-color": "panel" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "tabs-01",
  prefix: "tabs1",
  name: "Tabs / Service Switcher",
  category: "tabs",
  description: "A row of services. Click a tab and the text and image below swap to that service.",

  props: {
    ...headerProps({
      eyebrow: "Services",
      heading: "Four ways we can help",
      description: "Pick a starting point. Most projects use one of these, and we can mix them when the work asks for it.",
    }),
    services: {
      type: "list",
      fields: { label: "text", text: "text", image: "image" },
      default: [
        { label: "Brand", text: "A name, a voice, and a visual system your team can keep using after we leave. Built for a small business, not a rebrand theatre.", image: photo("1519710164239-da123dc03ef4", "Sunlit studio with a long table") },
        { label: "Website", text: "A marketing site in Webflow or Astro, structured so editors can publish without breaking the layout.", image: photo("1497366216548-37526070297c", "Bright office with long desks") },
        { label: "Product", text: "A focused product site: one story, clear proof, and motion that explains rather than decorates.", image: photo("1486406146926-c627a92ad1ab", "Glass building facade") },
        { label: "Care", text: "A monthly plan for updates, small pages, and a same-week reply when something needs to change.", image: photo("1501594907352-04cda38ebc29", "Coastline in soft light") },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" }, lg: { "row-gap": "3.5rem" } },
        children: [
          header({ t, layout: "split" }),
          {
            tag: "div", key: "tabs", repeat: "services", attrs: { "data-blok-tabs": "" },
            style: {
              base: { position: "relative", display: "flex", "flex-direction": "row", "flex-wrap": "wrap", "align-items": "flex-start", "column-gap": "0.5rem", "row-gap": "0.5rem", "padding-bottom": "32rem" },
              lg: { "padding-bottom": "26rem", "column-gap": "0.75rem" },
            },
            children: [
              {
                tag: "div", key: "service",
                children: [
                  {
                    tag: "div", key: "tab", bind: "item.label", attrs: { "data-blok-tab": "" },
                    style: { base: { ...mono(), cursor: "pointer", "padding-top": "0.7rem", "padding-bottom": "0.7rem", "padding-left": "1rem", "padding-right": "1rem", "border-bottom-width": "2px", "border-bottom-style": "solid", ...t("tab") } },
                  },
                  {
                    tag: "div", key: "panel", attrs: { "data-blok-tab-panel": "" },
                    style: {
                      base: { position: "absolute", top: "4.25rem", left: "0", right: "0", display: "flex", "flex-direction": "column", "align-items": "stretch", "column-gap": "0rem", "row-gap": "1.25rem", overflow: "hidden", ...pad("1.25rem"), ...radius("token(radius-card)"), ...t("panel") },
                      lg: { top: "4.5rem", "flex-direction": "row", "align-items": "stretch", "column-gap": "2rem", "row-gap": "0rem", ...pad("1.5rem") },
                    },
                    children: [
                      {
                        tag: "div", key: "panel-media",
                        style: { base: { width: "100%", overflow: "hidden", "aspect-ratio": "16 / 10", ...radius("0.625rem") }, lg: { width: "52%", "aspect-ratio": "16 / 10" } },
                        children: [{ tag: "img", key: "panel-image", bind: "item.image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } }],
                      },
                      {
                        tag: "p", key: "panel-text", bind: "item.text",
                        style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "28rem", "align-self": "flex-start", "font-size": "1.125rem", "line-height": "1.6", ...t("panel-text") }, lg: { "align-self": "center", "font-size": "1.25rem" } },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
