// Each top link opens a full-width panel. One row inside a panel opens a second list.
import { border, mono, radius, themeBase, themeVariant } from "./_lib/themes.js";

const THEME = {
  section: { "background-color": "bg", color: "fg", "border-bottom-color": "line" },
  "overview-mark": { "background-color": "panel" },
  "layout-mark": { "background-color": "panel" },
  "pages-mark": { "background-color": "panel" },
  "overview-panel": { "background-color": "bg", "border-top-color": "line" },
  "layout-panel": { "background-color": "bg", "border-top-color": "line" },
  "pages-panel": { "background-color": "bg", "border-top-color": "line" },
  "services-flyout": {
    "background-color": "bg",
    "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line",
  },
  "scale-flyout": {
    "background-color": "bg",
    "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line",
  },
  "stories-flyout": {
    "background-color": "bg",
    "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line",
  },
  "home-dot": { "background-color": "glyph" },
  "about-dot": { "background-color": "glyph" },
  "contact-dot": { "background-color": "glyph" },
  "page-dot": { "background-color": "glyph" },
  "story-dot": { "background-color": "glyph" },
  "home-title": { color: "muted" },
  "about-title": { color: "muted" },
  "contact-title": { color: "muted" },
  "page-title": { color: "muted" },
  "story-title": { color: "muted" },
  "show-all": { color: "muted" },
  "home-col": { "border-top-color": "line", "border-left-color": "line" },
  "about-col": { "border-top-color": "line", "border-left-color": "line" },
  "contact-col": { "border-top-color": "line", "border-left-color": "line" },
  explore: {
    "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line",
  },
  toggle: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1200&q=80`, alt });
const titled = (rows) => rows.map(([label, note]) => ({ label, note, href: "#" }));
const group = (labels) => labels.map((label) => ({ label, href: "#" }));
const show = (id) => `show${id[0].toUpperCase()}${id.slice(1)}`;
const pill = {
  "border-top-left-radius": "999px", "border-top-right-radius": "999px",
  "border-bottom-right-radius": "999px", "border-bottom-left-radius": "999px",
};

function sheet(key, across) {
  return {
    base: {
      display: "none", position: "static", top: "auto", right: "auto", left: "auto", width: "100%", "z-index": "5",
      "flex-direction": "column", "align-items": "stretch", "justify-content": "flex-start",
      "row-gap": "1.5rem", "column-gap": "0rem", "margin-top": "0rem",
      "padding-top": "1.25rem", "padding-right": "0rem", "padding-bottom": "1.5rem", "padding-left": "0rem",
      "border-top-width": "1px", "border-top-style": "solid", "border-top-color": t(key)["border-top-color"],
      ...t(key),
    },
    lg: {
      position: "absolute", top: "100%", right: "0", left: "0", width: "auto",
      "flex-direction": across ? "row" : "column", "align-items": "flex-start",
      "column-gap": across ? "2.5rem" : "0rem", "row-gap": across ? "0rem" : "1.5rem",
      "margin-top": "-0.85rem",
      "padding-top": "2.35rem", "padding-right": "5%", "padding-bottom": "2.25rem", "padding-left": "5%",
    },
  };
}

function flyout(key) {
  return {
    base: {
      display: "none", position: "static", top: "auto", left: "auto", width: "100%", "z-index": "6",
      "flex-direction": "column", "align-items": "stretch", "row-gap": "0.1rem", "margin-top": "0.75rem",
      "padding-top": "0.7rem", "padding-right": "0.9rem", "padding-bottom": "0.7rem", "padding-left": "0.9rem",
      ...border(t(key)["border-top-color"]), ...radius("token(radius)"), ...t(key),
    },
    lg: { position: "absolute", top: "100%", left: "0", width: "16rem", "margin-top": "0.35rem" },
  };
}

function kicker(id, bind) {
  return {
    tag: "div", key: `${id}-head`,
    style: { base: { display: "flex", "align-items": "center", "column-gap": "0.5rem", "margin-bottom": "1rem" } },
    children: [
      {
        tag: "div", key: `${id}-dot`, decorative: true,
        style: { base: { width: "0.45rem", height: "0.45rem", "flex-shrink": "0", "background-color": t(`${id}-dot`)["background-color"], ...pill } },
      },
      { tag: "div", key: `${id}-title`, bind, style: { base: { ...mono(), ...t(`${id}-title`) } } },
    ],
  };
}

function titledLinks(id, prop) {
  return {
    tag: "div", key: `${id}-links`, repeat: prop,
    style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.95rem" } },
    children: [{
      tag: "a", key: `${id}-link`, href: "item.href",
      style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.2rem", "text-decoration": "none", color: "inherit" } },
      children: [
        { tag: "div", key: `${id}-label`, bind: "item.label", style: { base: { "font-size": "1rem", "line-height": "1.3", "font-weight": "600" } } },
        { tag: "div", key: `${id}-note`, bind: "item.note", style: { base: { "font-size": "0.875rem", "line-height": "1.45", opacity: "0.72" } } },
      ],
    }],
  };
}

function plainLinks(id, prop) {
  return {
    tag: "div", key: `${id}-links`, repeat: prop,
    style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.1rem" } },
    children: [{
      tag: "a", key: `${id}-link`, bind: "item.label", href: "item.href",
      style: { base: { "text-decoration": "none", color: "inherit", "font-size": "0.9375rem", "line-height": "1.4", "padding-top": "0.35rem", "padding-bottom": "0.35rem" } },
    }],
  };
}

function nest(id, labelProp, noteProp) {
  return {
    tag: "div", key: id, if: show(id), attrs: { "data-blok-drop": "level" },
    style: { base: { position: "relative", width: "100%", "margin-top": "0.95rem" } },
    children: [
      {
        tag: "div", key: `${id}-trigger`, attrs: { "data-blok-drop-trigger": "" },
        style: { base: { display: "flex", "align-items": "flex-start", "justify-content": "space-between", "column-gap": "0.75rem", cursor: "pointer" } },
        children: [
          {
            tag: "div", key: `${id}-copy`,
            style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.2rem" } },
            children: [
              { tag: "div", key: `${id}-label`, bind: labelProp, style: { base: { "font-size": "1rem", "line-height": "1.3", "font-weight": "600" } } },
              { tag: "div", key: `${id}-note`, bind: noteProp, style: { base: { "font-size": "0.875rem", "line-height": "1.45", opacity: "0.72" } } },
            ],
          },
          {
            tag: "div", key: `${id}-icon`, text: "+", decorative: true, attrs: { "data-blok-drop-icon": "" },
            style: { base: { "font-size": "1rem", "line-height": "1", "font-weight": "300", "padding-top": "0.15rem" } },
          },
        ],
      },
      {
        tag: "div", key: `${id}-flyout`, attrs: { "data-blok-drop-panel": "" },
        style: flyout(`${id}-flyout`),
        children: [plainLinks(id, `${id}Links`)],
      },
    ],
  };
}

function column(id, titleProp, listProp, extra) {
  const ruled = id !== "home";
  return {
    tag: "div", key: `${id}-col`,
    style: {
      base: {
        display: "flex", "flex-direction": "column", "align-items": "stretch", "min-width": "0rem",
        width: "100%", "flex-grow": "0", "flex-basis": "auto",
        "padding-top": ruled ? "1.25rem" : "0rem", "padding-right": "0rem", "padding-bottom": "0rem", "padding-left": "0rem",
        "border-top-width": ruled ? "1px" : "0px", "border-top-style": "solid", "border-top-color": t(`${id}-col`)["border-top-color"],
        "border-left-width": "0px", "border-left-style": "solid", "border-left-color": t(`${id}-col`)["border-left-color"],
      },
      lg: {
        width: "auto", "flex-grow": "1", "flex-basis": "0px",
        "padding-top": "0rem", "padding-left": ruled ? "1.5rem" : "0rem",
        "border-top-width": "0px", "border-left-width": ruled ? "1px" : "0px",
      },
    },
    children: [kicker(id, titleProp), titledLinks(id, listProp), extra].filter(Boolean),
  };
}

function barDrop(id, labelProp, panel) {
  return {
    tag: "div", key: id, if: show(id), attrs: { "data-blok-drop": "" },
    style: {
      base: { position: "static", display: "flex", "align-items": "center", "align-self": "stretch", width: "100%" },
      lg: { width: "auto", "align-self": "stretch" },
    },
    children: [
      {
        tag: "div", key: `${id}-trigger`, attrs: { "data-blok-drop-trigger": "" },
        style: {
          base: {
            position: "relative", display: "inline-flex", "align-items": "center", "column-gap": "0.35rem", cursor: "pointer",
            "padding-top": "0.45rem", "padding-right": "0.9rem", "padding-bottom": "0.45rem", "padding-left": "0.9rem",
          },
        },
        children: [
          {
            tag: "div", key: `${id}-mark`, decorative: true, attrs: { "data-blok-drop-mark": "" },
            style: { base: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", opacity: "0", "z-index": "0", "pointer-events": "none", "background-color": t(`${id}-mark`)["background-color"], ...pill } },
          },
          { tag: "div", key: `${id}-name`, bind: labelProp, style: { base: { position: "relative", "z-index": "1", "font-size": "0.9375rem", "line-height": "1.3" } } },
        ],
      },
      panel,
    ],
  };
}

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "nav-07",
  prefix: "nav7",
  name: "Nav / Layers",
  category: "nav",
  description: "Three top links, each opening a full-width panel. One row in a panel opens a second list. Hover on a desktop, tap on a phone.",

  props: {
    showBrand: { type: "boolean", default: true },
    brand: { type: "text", default: "Evermind" },
    brandHref: { type: "link", default: "#" },
    showOverview: { type: "boolean", default: true },
    overviewLabel: { type: "text", default: "Overview" },
    overviewLinks: {
      type: "list",
      fields: { label: "text", note: "text", href: "link" },
      default: titled([
        ["Gallery", "Every component, in the browser."],
        ["Spec", "The file the other outputs come from."],
      ]),
    },
    showServices: { type: "boolean", default: true },
    servicesLabel: { type: "text", default: "Outputs" },
    servicesNote: { type: "text", default: "The same component, five places." },
    servicesLinks: { type: "list", fields: { label: "text", href: "link" }, default: group(["Webflow", "React", "Astro", "HTML", "Vanilla"]) },
    showLayout: { type: "boolean", default: true },
    layoutLabel: { type: "text", default: "Multi-Layout" },
    homeTitle: { type: "text", default: "Homepages" },
    homeLinks: {
      type: "list",
      fields: { label: "text", note: "text", href: "link" },
      default: titled([
        ["Home A — Structure", "Calm structure for fresh ideas and first impressions."],
        ["Home B — Depth", "Clarity through details, made for showcasing work."],
      ]),
    },
    showScale: { type: "boolean", default: true },
    scaleLabel: { type: "text", default: "Home C — Scale" },
    scaleNote: { type: "text", default: "Crafted to scale with purpose-driven projects." },
    scaleLinks: { type: "list", fields: { label: "text", href: "link" }, default: group(["Infrastructure", "Systems", "Partnerships"]) },
    aboutTitle: { type: "text", default: "About" },
    aboutLinks: {
      type: "list",
      fields: { label: "text", note: "text", href: "link" },
      default: titled([
        ["About A — People", "Faces and roles behind the projects and partnerships."],
        ["About B — Timeline", "A quiet look at the milestones that shaped the studio."],
        ["About C — Values", "How we think, work, and approach lasting design."],
      ]),
    },
    contactTitle: { type: "text", default: "Contact" },
    contactLinks: {
      type: "list",
      fields: { label: "text", note: "text", href: "link" },
      default: titled([
        ["Contact A — Grounded", "For honest questions and steady collaborations."],
        ["Contact B — Open", "Just say hi. We are curious to hear what you are building."],
        ["Contact C — In Touch", "Built for thoughtful conversations and project clarity."],
      ]),
    },
    showPages: { type: "boolean", default: true },
    pagesLabel: { type: "text", default: "Pages" },
    pageTitle: { type: "text", default: "Homepages" },
    pageLinks: {
      type: "list",
      fields: { label: "text", note: "text", href: "link" },
      default: titled([
        ["Service", "Clearly outline your services in a modular way."],
        ["Pricing", "Help visitors quickly understand your offer."],
        ["Blog", "Position yourself as a thought leader and boost SEO."],
      ]),
    },
    showStories: { type: "boolean", default: true },
    storiesLabel: { type: "text", default: "Customer Stories" },
    storiesNote: { type: "text", default: "A highly advanced CMS setup for showcasing case studies." },
    storiesLinks: { type: "list", fields: { label: "text", href: "link" }, default: group(["North Shore Arts", "Halyard", "Saltbox Bakery"]) },
    showExplore: { type: "boolean", default: true },
    explore: { type: "text", default: "Explore more" },
    exploreHref: { type: "link", default: "#" },
    storyTitle: { type: "text", default: "Customer stories" },
    showAll: { type: "boolean", default: true },
    allLabel: { type: "text", default: "Show all" },
    allHref: { type: "link", default: "#" },
    showCases: { type: "boolean", default: true },
    cases: {
      type: "list",
      fields: { title: "text", href: "link", image: "image" },
      default: [
        { title: "Read case study", href: "#", image: photo("1438761681033-6461ffad8d80", "Portrait of a person in a knit sweater") },
        { title: "Read case study", href: "#", image: photo("1507003211169-0a1dd7228f2d", "Portrait of a person in glasses") },
      ],
    },
    showMenu: { type: "boolean", default: true },
    showButtons: { type: "boolean", default: true },
    buttons: { type: "buttons", max: 1, default: [{ title: "Get Started", href: "#", variant: "dark" }] },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  tree: {
    role: "section",
    style: {
      base: {
        position: "sticky", top: "0", "z-index": "30",
        "border-bottom-width": "1px", "border-bottom-style": "solid", "border-bottom-color": t("section")["border-bottom-color"],
        ...t("section"),
      },
    },
    children: [{
      role: "gutter",
      children: [{
        role: "container", size: "large",
        children: [{
          tag: "div", key: "bar", attrs: { "data-blok-menu": "", "data-blok-drops": "" },
          style: {
            base: {
              display: "grid", "grid-template-columns": "1fr auto", "align-items": "center",
              "column-gap": "1rem", "row-gap": "0rem", "padding-top": "0.85rem", "padding-bottom": "0.85rem",
            },
            lg: { "grid-template-columns": "auto 1fr auto" },
          },
          children: [
            {
              tag: "a", key: "brand", bind: "brand", href: "brandHref", if: "showBrand",
              style: {
                base: {
                  "grid-column-start": "1", "grid-column-end": "2", "grid-row-start": "1",
                  "font-family": "token(font-display)", "font-size": "1.125rem", "line-height": "1", "font-weight": "600",
                  "letter-spacing": "-0.03em", "text-decoration": "none", color: "inherit",
                },
              },
            },
            {
              tag: "div", key: "tools",
              style: {
                base: { display: "flex", "align-items": "center", "column-gap": "1rem", "grid-column-start": "2", "grid-column-end": "3", "grid-row-start": "1" },
                lg: { "grid-column-start": "3", "grid-column-end": "4" },
              },
              children: [
                {
                  tag: "div", key: "toggle", if: "showMenu", attrs: { "data-blok-menu-toggle": "" },
                  style: {
                    base: { display: "flex", cursor: "pointer", ...t("toggle"), "font-family": "token(font-mono)", "font-size": "0.8125rem", "line-height": "1", "letter-spacing": "0.08em", "text-transform": "uppercase" },
                    lg: { display: "none" },
                  },
                  children: [
                    { tag: "div", key: "menu-open", text: "Menu", attrs: { "data-blok-menu-open": "" } },
                    { tag: "div", key: "menu-close", text: "Close", attrs: { "data-blok-menu-close": "", hidden: "" } },
                  ],
                },
                { tag: "div", key: "actions", repeat: "buttons", if: "showButtons", style: { base: { display: "flex" } } },
              ],
            },
            {
              tag: "div", key: "panel", attrs: { "data-blok-menu-panel": "" },
              style: {
                base: {
                  display: "none", "flex-direction": "column", "align-items": "stretch", "justify-content": "flex-start",
                  "row-gap": "0.25rem", "column-gap": "0rem", "padding-top": "0.75rem", "padding-bottom": "0.5rem",
                  "grid-column-start": "1", "grid-column-end": "3", "grid-row-start": "2",
                },
                lg: {
                  display: "flex", "flex-direction": "row", "align-items": "center", "justify-content": "center",
                  "column-gap": "0.35rem", "row-gap": "0rem", "padding-top": "0rem", "padding-bottom": "0rem",
                  "grid-column-start": "2", "grid-column-end": "3", "grid-row-start": "1",
                },
              },
              children: [
                barDrop("overview", "overviewLabel", {
                  tag: "div", key: "overview-panel", attrs: { "data-blok-drop-panel": "" },
                  style: sheet("overview-panel", false),
                  children: [
                    titledLinks("overview", "overviewLinks"),
                    nest("services", "servicesLabel", "servicesNote"),
                  ],
                }),
                barDrop("layout", "layoutLabel", {
                  tag: "div", key: "layout-panel", attrs: { "data-blok-drop-panel": "" },
                  style: sheet("layout-panel", true),
                  children: [
                    column("home", "homeTitle", "homeLinks", nest("scale", "scaleLabel", "scaleNote")),
                    column("about", "aboutTitle", "aboutLinks"),
                    column("contact", "contactTitle", "contactLinks"),
                  ],
                }),
                barDrop("pages", "pagesLabel", {
                  tag: "div", key: "pages-panel", attrs: { "data-blok-drop-panel": "" },
                  style: sheet("pages-panel", true),
                  children: [
                    {
                      tag: "div", key: "page-col",
                      style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", width: "100%", "min-width": "0rem" }, lg: { width: "18rem" } },
                      children: [
                        kicker("page", "pageTitle"),
                        titledLinks("page", "pageLinks"),
                        nest("stories", "storiesLabel", "storiesNote"),
                        {
                          tag: "a", key: "explore", bind: "explore", href: "exploreHref", if: "showExplore",
                          style: {
                            base: {
                              display: "inline-flex", "align-items": "center", "column-gap": "0.4rem", "margin-top": "1.25rem",
                              "text-decoration": "none", color: "inherit", "font-size": "0.9375rem", "line-height": "1.2", "font-weight": "600",
                              "padding-top": "0.7rem", "padding-right": "1rem", "padding-bottom": "0.7rem", "padding-left": "1rem",
                              ...border(t("explore")["border-top-color"]), ...pill,
                            },
                          },
                        },
                      ],
                    },
                    {
                      tag: "div", key: "story-col",
                      style: { base: { display: "flex", "flex-direction": "column", width: "100%", "min-width": "0rem", "flex-grow": "0" }, lg: { "flex-grow": "1" } },
                      children: [
                        {
                          tag: "div", key: "story-bar",
                          style: { base: { display: "flex", "align-items": "center", "justify-content": "space-between", "column-gap": "1rem" } },
                          children: [
                            kicker("story", "storyTitle"),
                            {
                              tag: "a", key: "show-all", bind: "allLabel", href: "allHref", if: "showAll",
                              style: { base: { "text-decoration": "none", "font-family": "token(font-mono)", "font-size": "0.75rem", "line-height": "1.4", "letter-spacing": "0.08em", "text-transform": "uppercase", "margin-bottom": "1rem", ...t("show-all") } },
                            },
                          ],
                        },
                        {
                          tag: "div", key: "story-cards", repeat: "cases", if: "showCases",
                          style: {
                            base: { display: "flex", "flex-direction": "column", "row-gap": "1rem", "column-gap": "0rem" },
                            lg: { "flex-direction": "row", "column-gap": "1rem", "row-gap": "0rem" },
                          },
                          children: [{
                            tag: "a", key: "story-card", href: "item.href",
                            style: { base: { position: "relative", display: "block", width: "100%", "min-width": "0rem", "text-decoration": "none", overflow: "hidden", ...radius("token(radius-card)") } },
                            children: [
                              {
                                tag: "img", key: "story-image", bind: "item.image",
                                style: { base: { display: "block", width: "100%", height: "12rem", "object-fit": "cover" }, lg: { height: "16rem" } },
                              },
                              {
                                tag: "div", key: "story-caption", bind: "item.title",
                                style: { base: { position: "absolute", left: "1rem", bottom: "1rem", color: "token(surface)", "font-size": "0.9375rem", "line-height": "1.3", "font-weight": "600" } },
                              },
                            ],
                          }],
                        },
                      ],
                    },
                  ],
                }),
              ],
            },
          ],
        }],
      }],
    }],
  },
};
