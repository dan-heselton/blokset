// Editorial numbered features: a sticky intro column beside a ruled, numbered list.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";

const paint = themeBase("light", { "background-color": "bg", color: "fg" });
const muted = themeBase("light", { color: "muted" }).color;
const line = themeBase("light", { "border-top-color": "line" })["border-top-color"];

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "features-12",
  prefix: "features12",
  name: "Features / Numbered List",
  category: "features",
  description: "Sticky intro column beside a ruled, numbered list of features. Stacks on mobile.",

  props: {
    eyebrow: { type: "text", default: "How we work", description: "Small label above the heading." },
    showEyebrow: { type: "boolean", default: true, description: "Show the eyebrow label." },
    heading: { type: "text", default: "Built by hand, shipped with care" },
    description: {
      type: "text",
      default: "A small studio process for sites that have to work hard: clear structure, considered motion, and a build your team can run without us.",
    },
    showButtons: { type: "boolean", default: true, description: "Show the action buttons." },
    buttons: {
      type: "buttons",
      max: 2,
      default: [
        { title: "Start a project", href: "#", variant: "dark" },
        { title: "See the process", href: "#", variant: "secondary" },
      ],
    },
    showImage: { type: "boolean", default: false, description: "Show the intro image." },
    image: {
      type: "image",
      description: "Photograph in the intro column.",
      default: { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80", alt: "Bright studio with a long desk and open laptops" },
    },
    showNumbers: { type: "boolean", default: true, description: "Show the index number on each feature." },
    features: {
      type: "list",
      fields: { title: "text", text: "text" },
      default: [
        { title: "Strategy before pixels", text: "We start with the questions your site has to answer, then design the shortest path to each one." },
        { title: "Systems, not one-offs", text: "Every section is a reusable component, so your team can build new pages without opening a ticket." },
        { title: "Motion with intent", text: "Animation that guides attention and respects reduced-motion settings. Never decoration for its own sake." },
        { title: "A handoff you can own", text: "Clean Client-First structure, documented classes, and a CMS your editors will actually enjoy using." },
      ],
    },
  },

  variants: {
    theme: themeVariant({
      default: "light",
      options: ["light", "dark", "accent"],
      map: {
        section: { "background-color": "bg", color: "fg" },
        eyebrow: { color: "muted" },
        heading: { color: "fg" },
        description: { color: "muted" },
        list: { "border-bottom-color": "line" },
        item: { "border-top-color": "line" },
        number: { color: "muted" },
        "item-title": { color: "fg" },
        "item-text": { color: "muted" },
      },
    }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.1, targets: ["eyebrow", "heading", "description", "actions"] },
    reveal: { preset: "fade-up", targets: ["item"] },
  },

  tree: {
    role: "section", key: "section",
    style: { base: paint },
    children: [
      {
        role: "gutter",
        children: [
          {
            role: "container", size: "large",
            children: [
              {
                role: "section-padding", size: "large",
                children: [
                  {
                    tag: "div", key: "component",
                    style: {
                      base: { display: "flex", "flex-direction": "column", "align-items": "stretch", "row-gap": "3rem", "column-gap": "0rem" },
                      lg: { "flex-direction": "row", "align-items": "flex-start", "row-gap": "0rem", "column-gap": "5rem" },
                    },
                    children: [
                      {
                        tag: "div", key: "intro",
                        style: {
                          base: { position: "static", top: "auto", width: "100%", "flex-shrink": "0" },
                          lg: { position: "sticky", top: "6rem", width: "38%" },
                        },
                        children: [
                          {
                            tag: "div", key: "eyebrow", bind: "eyebrow", if: "showEyebrow",
                            style: { base: { ...mono(muted), "margin-bottom": "1.25rem" } },
                          },
                          {
                            tag: "h2", key: "heading", bind: "heading",
                            style: {
                              base: { "margin-top": "0", "margin-bottom": "1.25rem", "font-family": "token(font-display)", "font-size": "2.5rem", "line-height": "1.05", "font-weight": "600", "letter-spacing": "-0.025em", color: paint.color },
                              md: { "font-size": "3.25rem" },
                              lg: { "font-size": "3.75rem" },
                            },
                          },
                          {
                            tag: "p", key: "description", bind: "description",
                            style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "28rem", "font-size": "1.0625rem", "line-height": "1.6", color: muted } },
                          },
                          {
                            tag: "div", key: "actions", repeat: "buttons", if: "showButtons",
                            style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "0.75rem", "row-gap": "0.75rem", "margin-top": "2rem" } },
                          },
                          {
                            tag: "div", key: "media", if: "showImage",
                            style: { base: { "margin-top": "2rem", width: "100%", "aspect-ratio": "4 / 5", overflow: "hidden", ...radius("token(radius-card)") } },
                            children: [
                              { tag: "img", key: "image", bind: "image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } },
                            ],
                          },
                        ],
                      },
                      {
                        tag: "div", key: "list", repeat: "features",
                        style: { base: { "flex-grow": "1", "border-bottom-width": "1px", "border-bottom-style": "solid", "border-bottom-color": line } },
                        children: [
                          {
                            tag: "div", key: "item",
                            style: {
                              base: { display: "flex", "column-gap": "1.5rem", "padding-top": "2rem", "padding-bottom": "2rem", "border-top-width": "1px", "border-top-style": "solid", "border-top-color": line },
                              md: { "column-gap": "3rem", "padding-top": "2.5rem", "padding-bottom": "2.5rem" },
                            },
                            children: [
                              {
                                tag: "div", key: "number", bind: "@index", decorative: true, if: "showNumbers",
                                style: { base: { "min-width": "2.5rem", "padding-top": "0.4rem", "font-family": "token(font-mono)", "font-size": "0.875rem", "line-height": "1.4", "letter-spacing": "0.04em", color: muted } },
                              },
                              {
                                tag: "div", key: "item-content",
                                style: { base: { "flex-grow": "1", "max-width": "34rem" } },
                                children: [
                                  {
                                    tag: "h3", key: "item-title", bind: "item.title",
                                    style: {
                                      base: { "margin-top": "0", "margin-bottom": "0.5rem", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.2", "font-weight": "600", "letter-spacing": "-0.01em", color: paint.color },
                                      md: { "font-size": "1.75rem" },
                                    },
                                  },
                                  {
                                    tag: "p", key: "item-text", bind: "item.text",
                                    style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.6", color: muted } },
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
