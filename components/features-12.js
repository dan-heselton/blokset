// Editorial numbered features: a sticky intro column beside a ruled, numbered list.
/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "features-12",
  prefix: "features12",
  name: "Features / Numbered List",
  category: "features",
  description: "Sticky intro column beside a ruled, numbered list of features. Stacks on mobile.",

  props: {
    eyebrow: { type: "text", default: "How we work" },
    heading: { type: "text", default: "Built by hand, shipped with care" },
    description: {
      type: "text",
      default: "A small studio process for sites that have to work hard: clear structure, considered motion, and a build your team can run without us.",
    },
    buttons: {
      type: "buttons",
      max: 2,
      default: [
        { title: "Start a project", href: "#", variant: "dark" },
        { title: "See the process", href: "#", variant: "secondary" },
      ],
    },
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

  motion: {
    enter: { preset: "fade-up", stagger: 0.1, targets: ["eyebrow", "heading", "description", "actions"] },
    reveal: { preset: "fade-up", targets: ["item"] },
  },

  tree: {
    role: "section", key: "section",
    style: { base: { "background-color": "token(surface)", color: "token(ink)" } },
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
                            tag: "div", key: "eyebrow", bind: "eyebrow",
                            style: { base: { "margin-bottom": "1.25rem", "font-family": "token(font-mono)", "font-size": "0.8125rem", "line-height": "1.4", "letter-spacing": "0.08em", "text-transform": "uppercase", color: "token(ink-muted)" } },
                          },
                          {
                            tag: "h2", key: "heading", bind: "heading",
                            style: {
                              base: { "margin-top": "0", "margin-bottom": "1.25rem", "font-family": "token(font-display)", "font-size": "2.5rem", "line-height": "1.05", "font-weight": "600", "letter-spacing": "-0.025em", color: "token(ink)" },
                              md: { "font-size": "3.25rem" },
                              lg: { "font-size": "3.75rem" },
                            },
                          },
                          {
                            tag: "p", key: "description", bind: "description",
                            style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "28rem", "font-size": "1.0625rem", "line-height": "1.6", color: "token(ink-muted)" } },
                          },
                          {
                            tag: "div", key: "actions", repeat: "buttons",
                            style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "0.75rem", "row-gap": "0.75rem", "margin-top": "2rem" } },
                          },
                        ],
                      },
                      {
                        tag: "div", key: "list", repeat: "features",
                        style: { base: { "flex-grow": "1", "border-bottom-width": "1px", "border-bottom-style": "solid", "border-bottom-color": "token(line)" } },
                        children: [
                          {
                            tag: "div", key: "item",
                            style: {
                              base: { display: "flex", "column-gap": "1.5rem", "padding-top": "2rem", "padding-bottom": "2rem", "border-top-width": "1px", "border-top-style": "solid", "border-top-color": "token(line)" },
                              md: { "column-gap": "3rem", "padding-top": "2.5rem", "padding-bottom": "2.5rem" },
                            },
                            children: [
                              {
                                tag: "div", key: "number", bind: "@index", decorative: true,
                                style: { base: { "min-width": "2.5rem", "padding-top": "0.4rem", "font-family": "token(font-mono)", "font-size": "0.875rem", "line-height": "1.4", "letter-spacing": "0.04em", color: "token(ink-muted)" } },
                              },
                              {
                                tag: "div", key: "item-content",
                                style: { base: { "flex-grow": "1", "max-width": "34rem" } },
                                children: [
                                  {
                                    tag: "h3", key: "item-title", bind: "item.title",
                                    style: {
                                      base: { "margin-top": "0", "margin-bottom": "0.5rem", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.2", "font-weight": "600", "letter-spacing": "-0.01em", color: "token(ink)" },
                                      md: { "font-size": "1.75rem" },
                                    },
                                  },
                                  {
                                    tag: "p", key: "item-text", bind: "item.text",
                                    style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.6", color: "token(ink-muted)" } },
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
