// Westway segmented pill track: each tab opens an image mega menu via drops.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  track: { "background-color": "panel", color: "fg", "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line" },
  wordmark: { color: "fg" },
  tab: { color: "fg" },
  "tab-mark": { "background-color": "fg" },
  "tab-label": { color: "fg" },
  mega: { "background-color": "bg", "border-top-color": "line" },
  "mega-title": { color: "muted" },
  "mega-link": { color: "fg" },
  "feature-title": { color: "fg" },
  "feature-note": { color: "muted" },
  counter: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1200&q=80`, alt });
const pill = {
  "border-top-left-radius": "999px", "border-top-right-radius": "999px",
  "border-bottom-right-radius": "999px", "border-bottom-left-radius": "999px",
};
const link = (label, href = "#") => ({ label, href });

function megaColumn(id, titleProp, listProp) {
  return {
    tag: "div", key: `${id}-col`,
    style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.35rem", "min-width": "0rem" }, lg: { "min-width": "9.5rem" } },
    children: [
      {
        tag: "div", key: `${id}-title`, bind: titleProp,
        style: {
          base: {
            ...mono(), "font-size": "0.6875rem", "line-height": "1.4", "letter-spacing": "0.1em",
            "text-transform": "uppercase", "margin-bottom": "0.35rem", ...t("mega-title"),
          },
        },
      },
      {
        tag: "div", key: `${id}-links`, repeat: listProp,
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.15rem" } },
        children: [{
          tag: "a", key: `${id}-link`, bind: "item.label", href: "item.href",
          style: { base: { "text-decoration": "none", "font-size": "1rem", "line-height": "1.45", ...t("mega-link") } },
        }],
      },
    ],
  };
}

function megaFeature(id, imageProp, titleProp, noteProp, hrefProp) {
  return {
    tag: "a", key: `${id}-feature`, href: hrefProp,
    style: {
      base: {
        display: "flex", "flex-direction": "column", "row-gap": "0.55rem", "text-decoration": "none",
        width: "100%", "margin-left": "0",
      },
      lg: { width: "16rem", "margin-left": "auto" },
    },
    children: [
      {
        tag: "img", key: `${id}-feature-image`, bind: imageProp,
        style: { base: { display: "block", width: "100%", height: "8.5rem", "object-fit": "cover", ...radius("0.85rem") }, lg: { height: "10rem" } },
      },
      { tag: "div", key: `${id}-feature-title`, bind: titleProp, style: { base: { "font-size": "0.9375rem", "line-height": "1.35", "font-weight": "600", ...t("feature-title") } } },
      { tag: "div", key: `${id}-feature-note`, bind: noteProp, style: { base: { "font-size": "0.8125rem", "line-height": "1.4", ...t("feature-note") } } },
    ],
  };
}

function tabDrop(id, labelProp, titleA, listA, titleB, listB, feature) {
  return {
    tag: "div", key: id, attrs: { "data-blok-drop": "mega" },
    style: { base: { position: "static", width: "100%" }, lg: { width: "auto" } },
    children: [
      {
        tag: "div", key: `${id}-trigger`, attrs: { "data-blok-drop-trigger": "" },
        style: {
          base: {
            position: "relative", display: "flex", "align-items": "center", "justify-content": "center",
            cursor: "pointer",
            "padding-top": "0.65rem", "padding-right": "1.15rem", "padding-bottom": "0.65rem", "padding-left": "1.15rem",
            "border-top-width": "1px", "border-right-width": "1px", "border-bottom-width": "1px", "border-left-width": "1px",
            "border-top-style": "solid", "border-right-style": "solid", "border-bottom-style": "solid", "border-left-style": "solid",
            "border-top-color": "token(line)", "border-right-color": "token(line)", "border-bottom-color": "token(line)", "border-left-color": "token(line)",
            ...pill, ...t("tab"),
          },
        },
        children: [
          {
            tag: "div", key: `${id}-mark`, decorative: true, attrs: { "data-blok-drop-mark": "" },
            style: {
              base: {
                position: "absolute", top: "0", right: "0", bottom: "0", left: "0", opacity: "0", "z-index": "0",
                "pointer-events": "none", ...pill, ...t("tab-mark"),
              },
            },
          },
          {
            tag: "div", key: `${id}-label`, bind: labelProp, attrs: { "data-blok-drop-label": "" },
            style: {
              base: {
                position: "relative", "z-index": "1",
                ...mono(), "font-size": "0.6875rem", "letter-spacing": "0.1em", "text-transform": "uppercase",
                "font-weight": "600", ...t("tab-label"),
              },
            },
          },
        ],
      },
      {
        tag: "div", key: `${id}-panel`, attrs: { "data-blok-drop-panel": "" },
        style: {
          base: {
            display: "none", position: "static", top: "auto", right: "auto", left: "auto", width: "100%", "z-index": "8",
            "flex-direction": "column", "align-items": "stretch", "justify-content": "flex-start",
            "row-gap": "1.5rem", "column-gap": "0rem",
            "padding-top": "1.5rem", "padding-right": "1.25rem", "padding-bottom": "1.5rem", "padding-left": "1.25rem",
            "border-top-left-radius": "0rem", "border-top-right-radius": "0rem",
            "border-bottom-right-radius": "0rem", "border-bottom-left-radius": "0rem",
            "border-top-width": "1px", "border-right-width": "0px", "border-bottom-width": "0px", "border-left-width": "0px",
            "border-top-style": "solid", "border-right-style": "solid", "border-bottom-style": "solid", "border-left-style": "solid",
            "border-top-color": t("mega")["border-top-color"],
            "border-right-color": "token(line)", "border-bottom-color": "token(line)", "border-left-color": "token(line)",
            ...t("mega"),
          },
          lg: {
            position: "absolute", top: "calc(100% + 0.85rem)", right: "0", left: "0", width: "auto",
            "flex-direction": "row", "align-items": "flex-start", "column-gap": "2.5rem", "row-gap": "0rem",
            "padding-top": "2rem", "padding-right": "2rem", "padding-bottom": "2rem", "padding-left": "2rem",
            "border-top-left-radius": "1.25rem", "border-top-right-radius": "1.25rem",
            "border-bottom-right-radius": "1.25rem", "border-bottom-left-radius": "1.25rem",
            "border-top-width": "1px", "border-right-width": "1px", "border-bottom-width": "1px", "border-left-width": "1px",
            "border-top-color": "token(line)", "border-right-color": "token(line)", "border-bottom-color": "token(line)", "border-left-color": "token(line)",
          },
        },
        children: [
          megaColumn(`${id}-a`, titleA, listA),
          megaColumn(`${id}-b`, titleB, listB),
          megaFeature(id, feature.image, feature.title, feature.note, feature.href),
        ],
      },
    ],
  };
}

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "nav-10",
  prefix: "nav10",
  name: "Nav / Westway mega",
  category: "nav",
  description: "A Westway segmented pill track. Each tab opens a mega panel with link columns and a featured image card.",

  props: {
    showWordmark: { type: "boolean", default: true },
    wordmark: { type: "text", default: "Westway" },
    aboutLabel: { type: "text", default: "About" },
    aboutTitleA: { type: "text", default: "Company" },
    aboutLinksA: { type: "list", fields: { label: "text", href: "link" }, default: [link("Story"), link("Leadership"), link("Careers")] },
    aboutTitleB: { type: "text", default: "Coverage" },
    aboutLinksB: { type: "list", fields: { label: "text", href: "link" }, default: [link("Ports"), link("Hubs"), link("Partners")] },
    aboutFeature: { type: "image", default: photo("1586528116311-ad8dd3c8310d", "Freight trucks on a highway at dusk") },
    aboutFeatureTitle: { type: "text", default: "Built for lanes that stay readable" },
    aboutFeatureNote: { type: "text", default: "How Westway runs ocean and air as one picture." },
    aboutFeatureHref: { type: "link", default: "#" },
    resultsLabel: { type: "text", default: "Results" },
    resultsTitleA: { type: "text", default: "Impact" },
    resultsLinksA: { type: "list", fields: { label: "text", href: "link" }, default: [link("Transit times"), link("On-time score"), link("Case studies")] },
    resultsTitleB: { type: "text", default: "Reports" },
    resultsLinksB: { type: "list", fields: { label: "text", href: "link" }, default: [link("Q4 brief"), link("Lane map"), link("Benchmarks")] },
    resultsFeature: { type: "image", default: photo("1501594907352-04cda38ebc29", "Harbor pier at dusk") },
    resultsFeatureTitle: { type: "text", default: "Performance Results" },
    resultsFeatureNote: { type: "text", default: "Twenty percent faster on priority ocean lanes." },
    resultsFeatureHref: { type: "link", default: "#" },
    servicesLabel: { type: "text", default: "Services" },
    servicesTitleA: { type: "text", default: "Freight" },
    servicesLinksA: { type: "list", fields: { label: "text", href: "link" }, default: [link("Ocean"), link("Air"), link("Intermodal")] },
    servicesTitleB: { type: "text", default: "Ops" },
    servicesLinksB: { type: "list", fields: { label: "text", href: "link" }, default: [link("Warehousing"), link("Customs"), link("Last mile")] },
    servicesFeature: { type: "image", default: photo("1469474968028-56623f02e42e", "Open landscape under a wide sky") },
    servicesFeatureTitle: { type: "text", default: "Westway Air Freight" },
    servicesFeatureNote: { type: "text", default: "Priority ships with global coverage." },
    servicesFeatureHref: { type: "link", default: "#" },
    companyLabel: { type: "text", default: "Company" },
    companyTitleA: { type: "text", default: "People" },
    companyLinksA: { type: "list", fields: { label: "text", href: "link" }, default: [link("Team"), link("Culture"), link("Open roles")] },
    companyTitleB: { type: "text", default: "Press" },
    companyLinksB: { type: "list", fields: { label: "text", href: "link" }, default: [link("News"), link("Brand"), link("Contact")] },
    companyFeature: { type: "image", default: photo("1581091226825-a6a2a5aee158", "Worker with a hard hat and radio") },
    companyFeatureTitle: { type: "text", default: "Operators on every lane" },
    companyFeatureNote: { type: "text", default: "Meet the crews behind the cutouts." },
    companyFeatureHref: { type: "link", default: "#" },
    networkLabel: { type: "text", default: "Network" },
    networkTitleA: { type: "text", default: "Regions" },
    networkLinksA: { type: "list", fields: { label: "text", href: "link" }, default: [link("Americas"), link("EMEA"), link("APAC")] },
    networkTitleB: { type: "text", default: "Tools" },
    networkLinksB: { type: "list", fields: { label: "text", href: "link" }, default: [link("Tracking"), link("API"), link("Schedules")] },
    networkFeature: { type: "image", default: photo("1519710164239-da123dc03ef4", "Sunlit room with a wooden chair") },
    networkFeatureTitle: { type: "text", default: "Global supply chain map" },
    networkFeatureNote: { type: "text", default: "Ports, hubs, and bonded partners in one view." },
    networkFeatureHref: { type: "link", default: "#" },
    showCounter: { type: "boolean", default: true },
    counter: { type: "text", default: "03 / 06" },
  },

  variants: {
    theme: themeVariant({
      default: "light",
      options: ["light", "dark", "accent"],
      map: {
        section: THEME.section,
        track: THEME.track,
        wordmark: THEME.wordmark,
        counter: THEME.counter,
      },
    }),
  },

  tree: {
    role: "section",
    style: { base: { position: "relative", "z-index": "40", ...t("section") } },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "justify-content": "center", position: "relative" } },
        children: [{
          tag: "div", key: "track", attrs: { "data-blok-drops": "" },
          style: {
            base: {
              position: "relative",
              display: "flex", "flex-direction": "column", "align-items": "stretch", "justify-content": "flex-start",
              "row-gap": "0.75rem", "column-gap": "0rem",
              width: "100%", "max-width": "56rem",
              "padding-top": "0.65rem", "padding-right": "0.65rem", "padding-bottom": "0.65rem", "padding-left": "0.65rem",
              "border-top-width": "1px", "border-right-width": "1px", "border-bottom-width": "1px", "border-left-width": "1px",
              "border-top-style": "solid", "border-right-style": "solid", "border-bottom-style": "solid", "border-left-style": "solid",
              ...pill, ...t("track"),
            },
            lg: {
              "flex-direction": "row", "align-items": "center", "justify-content": "space-between",
              "column-gap": "1.25rem", "row-gap": "0rem",
              "padding-top": "0.5rem", "padding-right": "0.75rem", "padding-bottom": "0.5rem", "padding-left": "0.75rem",
            },
          },
          children: [
            {
              tag: "div", key: "wordmark", bind: "wordmark", if: "showWordmark",
              style: {
                base: { "font-family": "token(font-display)", "font-size": "1.125rem", "font-weight": "700", "padding-left": "0.35rem", "flex-shrink": "1", ...t("wordmark") },
                lg: { "padding-left": "0.5rem", "flex-shrink": "0" },
              },
            },
            {
              tag: "div", key: "tabs",
              style: {
              base: {
                display: "flex", "flex-direction": "column", "flex-wrap": "nowrap", "align-items": "stretch",
                "justify-content": "flex-start", "row-gap": "0.35rem", "column-gap": "0.35rem",
                "flex-grow": "1", width: "100%",
              },
              lg: {
                "flex-direction": "row", "flex-wrap": "wrap", "align-items": "center", "justify-content": "center",
                "column-gap": "0.5rem", "row-gap": "0.5rem", width: "auto",
              },
            },
            children: [
                tabDrop(
                  "about", "aboutLabel",
                  "aboutTitleA", "aboutLinksA", "aboutTitleB", "aboutLinksB",
                  { image: "aboutFeature", title: "aboutFeatureTitle", note: "aboutFeatureNote", href: "aboutFeatureHref" },
                ),
                tabDrop(
                  "results", "resultsLabel",
                  "resultsTitleA", "resultsLinksA", "resultsTitleB", "resultsLinksB",
                  { image: "resultsFeature", title: "resultsFeatureTitle", note: "resultsFeatureNote", href: "resultsFeatureHref" },
                ),
                tabDrop(
                  "services", "servicesLabel",
                  "servicesTitleA", "servicesLinksA", "servicesTitleB", "servicesLinksB",
                  { image: "servicesFeature", title: "servicesFeatureTitle", note: "servicesFeatureNote", href: "servicesFeatureHref" },
                ),
                tabDrop(
                  "company", "companyLabel",
                  "companyTitleA", "companyLinksA", "companyTitleB", "companyLinksB",
                  { image: "companyFeature", title: "companyFeatureTitle", note: "companyFeatureNote", href: "companyFeatureHref" },
                ),
                tabDrop(
                  "network", "networkLabel",
                  "networkTitleA", "networkLinksA", "networkTitleB", "networkLinksB",
                  { image: "networkFeature", title: "networkFeatureTitle", note: "networkFeatureNote", href: "networkFeatureHref" },
                ),
              ],
            },
            {
              tag: "div", key: "counter", bind: "counter", if: "showCounter",
              style: {
                base: { ...mono(), "font-size": "0.75rem", "text-align": "center", "padding-right": "0.35rem", "flex-shrink": "1", ...t("counter") },
                lg: { "text-align": "right", "flex-shrink": "0", "padding-right": "0.5rem" },
              },
            },
          ],
        }],
      }),
    ],
  },
};
