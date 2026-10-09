// Work index: huge project names in ruled rows. On desktop, hovering a row reveals its image
// floating under the cursor. On touch and smaller screens the image is simply hidden.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";

const paint = themeBase("dark", { "background-color": "bg", color: "fg" });
const muted = themeBase("dark", { color: "muted" }).color;
const line = themeBase("dark", { "border-top-color": "line" })["border-top-color"];

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "work-02",
  prefix: "work2",
  name: "Work / Hover-Reveal Index",
  category: "work",
  description: "Dark project index with oversized names. Hovering a row floats its image under the cursor (desktop).",

  props: {
    eyebrow: { type: "text", default: "Selected work", description: "Small label above the heading." },
    heading: { type: "text", default: "Recent projects" },
    showAllLink: { type: "boolean", default: true, description: "Show the link to all projects." },
    allLabel: { type: "text", default: "All projects →" },
    allHref: { type: "link", default: "#" },
    showMeta: { type: "boolean", default: true, description: "Show each project's meta line." },
    showYear: { type: "boolean", default: true, description: "Show each project's year." },
    showImages: { type: "boolean", default: true, description: "Show the hover image for each project." },
    projects: {
      type: "list",
      fields: { title: "text", meta: "text", year: "text", href: "link", image: "image" },
      default: [
        { title: "Tidewater Supply", meta: "Brand · Commerce", year: "2026", href: "#", image: { src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=900&q=80", alt: "Golden Gate Bridge in fog above the bay" } },
        { title: "North Shore Arts", meta: "Webflow · CMS", year: "2026", href: "#", image: { src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=900&q=80", alt: "Sunlit room with a wooden chair and pale walls" } },
        { title: "Halyard", meta: "Product site · Motion", year: "2025", href: "#", image: { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80", alt: "Bright open office with long white desks" } },
        { title: "Saltbox Bakery", meta: "Identity · Web", year: "2025", href: "#", image: { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80", alt: "Restaurant dining room with set tables" } },
        { title: "Ledgewood Architects", meta: "Portfolio · Astro", year: "2024", href: "#", image: { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80", alt: "Glass skyscraper against a clear blue sky" } },
      ],
    },
  },

  variants: {
    theme: themeVariant({
      default: "dark",
      options: ["dark", "light", "accent"],
      map: {
        section: { "background-color": "bg", color: "fg" },
        eyebrow: { color: "muted" },
        heading: { color: "fg" },
        "all-link": { color: "fg" },
        list: { "border-bottom-color": "line" },
        row: { color: "fg", "border-top-color": "line" },
        index: { color: "muted" },
        meta: { color: "muted" },
        year: { color: "muted" },
      },
    }),
    size: {
      label: "Size",
      default: "large",
      options: {
        large: null,
        compact: {
          label: "Compact",
          styles: {
            name: {
              base: { "font-size": "1.75rem" },
              md: { "font-size": "2.25rem" },
              lg: { "font-size": "3rem" },
            },
            row: {
              base: { "padding-top": "1rem", "padding-bottom": "1rem" },
              lg: { "padding-top": "1.25rem", "padding-bottom": "1.25rem" },
            },
            media: { base: { width: "14rem", height: "10rem" } },
          },
        },
      },
    },
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.1, targets: ["eyebrow", "heading", "all-link"] },
    reveal: { preset: "fade-up", targets: ["row"] },
  },

  tree: {
    role: "section",
    style: { base: paint },
    children: [
      { role: "gutter", children: [{ role: "container", size: "large", children: [{ role: "section-padding", size: "large", children: [
        {
          tag: "div", key: "component",
          style: { base: { display: "flex", "flex-direction": "column", "row-gap": "3rem" }, lg: { "row-gap": "4rem" } },
          children: [
            {
              tag: "div", key: "header",
              style: {
                base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "justify-content": "flex-start", "row-gap": "1.5rem" },
                md: { "flex-direction": "row", "align-items": "flex-end", "justify-content": "space-between" },
              },
              children: [
                {
                  tag: "div", key: "title",
                  children: [
                    { tag: "div", key: "eyebrow", bind: "eyebrow", style: { base: { ...mono(muted), "margin-bottom": "1rem" } } },
                    {
                      tag: "h2", key: "heading", bind: "heading",
                      style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "2.25rem", "line-height": "1.05", "font-weight": "600", "letter-spacing": "-0.025em", color: paint.color }, md: { "font-size": "3rem" } },
                    },
                  ],
                },
                { tag: "a", key: "all-link", href: "allHref", bind: "allLabel", if: "showAllLink", style: { base: { color: paint.color, "font-family": "token(font-mono)", "font-size": "0.875rem", "letter-spacing": "0.04em", "text-decoration": "underline", "text-underline-offset": "0.3em" } } },
              ],
            },
            {
              tag: "div", key: "list", repeat: "projects", attrs: { "data-blok-hover-reveal": "" },
              style: { base: { position: "relative", "border-bottom-width": "1px", "border-bottom-style": "solid", "border-bottom-color": line } },
              children: [
                {
                  tag: "a", key: "row", href: "item.href", attrs: { "data-blok-hover-row": "" },
                  style: {
                    base: { display: "flex", "flex-wrap": "wrap", "align-items": "baseline", "column-gap": "1.5rem", "row-gap": "0.5rem", "padding-top": "1.5rem", "padding-bottom": "1.5rem", "border-top-width": "1px", "border-top-style": "solid", "border-top-color": line, color: paint.color, "text-decoration": "none" },
                    md: { "flex-wrap": "nowrap" },
                    lg: { "padding-top": "2rem", "padding-bottom": "2rem" },
                  },
                  children: [
                    { tag: "div", key: "index", bind: "@index", decorative: true, style: { base: { ...mono(muted), width: "2.5rem", "flex-shrink": "0" } } },
                    {
                      tag: "h3", key: "name", bind: "item.title",
                      style: {
                        base: { "flex-grow": "1", "flex-basis": "0%", "min-width": "0", "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "2.25rem", "line-height": "1", "font-weight": "500", "letter-spacing": "-0.035em" },
                        md: { "font-size": "3.5rem" },
                        lg: { "font-size": "5rem" },
                      },
                    },
                    {
                      tag: "div", key: "meta", bind: "item.meta", if: "showMeta",
                      style: {
                        base: { width: "100%", "padding-left": "4rem", "font-family": "token(font-mono)", "font-size": "0.8125rem", "letter-spacing": "0.04em", color: muted, "white-space": "nowrap" },
                        md: { width: "auto", "padding-left": "0" },
                      },
                    },
                    { tag: "div", key: "year", bind: "item.year", if: "showYear", style: { base: { display: "none", "font-family": "token(font-mono)", "font-size": "0.8125rem", color: muted }, md: { display: "block" } } },
                    {
                      tag: "div", key: "media", decorative: true, if: "showImages", attrs: { "data-blok-hover-media": "" },
                      style: {
                        base: { display: "none", position: "absolute", top: "0", left: "0", "z-index": "2", width: "20rem", height: "14rem", overflow: "hidden", ...radius("0.375rem"), "pointer-events": "none", opacity: "0", visibility: "hidden" },
                        lg: { display: "block" },
                      },
                      children: [
                        { tag: "img", key: "image", bind: "item.image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ] }] }] },
    ],
  },
};
