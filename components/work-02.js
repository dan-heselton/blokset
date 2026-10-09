// Work index: huge project names in ruled rows. On desktop, hovering a row reveals its image
// floating under the cursor. On touch and smaller screens the image is simply hidden.

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "work-02",
  prefix: "work2",
  name: "Work / Hover-Reveal Index",
  category: "work",
  description: "Dark project index with oversized names. Hovering a row floats its image under the cursor (desktop).",

  props: {
    eyebrow: { type: "text", default: "Selected work" },
    heading: { type: "text", default: "Recent projects" },
    allLabel: { type: "text", default: "All projects →" },
    allHref: { type: "link", default: "#" },
    projects: {
      type: "list",
      fields: { title: "text", meta: "text", year: "text", href: "link", image: "image" },
      default: [
        { title: "Tidewater Supply", meta: "Brand · Commerce", year: "2026", href: "#", image: { src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=900&q=80", alt: "" } },
        { title: "North Shore Arts", meta: "Webflow · CMS", year: "2026", href: "#", image: { src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=900&q=80", alt: "" } },
        { title: "Halyard", meta: "Product site · Motion", year: "2025", href: "#", image: { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80", alt: "" } },
        { title: "Saltbox Bakery", meta: "Identity · Web", year: "2025", href: "#", image: { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80", alt: "" } },
        { title: "Ledgewood Architects", meta: "Portfolio · Astro", year: "2024", href: "#", image: { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80", alt: "" } },
      ],
    },
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.1, targets: ["eyebrow", "heading", "all-link"] },
    reveal: { preset: "fade-up", targets: ["row"] },
  },

  tree: {
    role: "section",
    style: { base: { "background-color": "token(ink)", color: "token(surface)" } },
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
                    { tag: "div", key: "eyebrow", bind: "eyebrow", style: { base: { "margin-bottom": "1rem", "font-family": "token(font-mono)", "font-size": "0.8125rem", "letter-spacing": "0.08em", "text-transform": "uppercase", color: "token(surface-muted)" } } },
                    {
                      tag: "h2", key: "heading", bind: "heading",
                      style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "2.25rem", "line-height": "1.05", "font-weight": "600", "letter-spacing": "-0.025em" }, md: { "font-size": "3rem" } },
                    },
                  ],
                },
                { tag: "a", key: "all-link", href: "allHref", bind: "allLabel", style: { base: { color: "token(surface)", "font-family": "token(font-mono)", "font-size": "0.875rem", "letter-spacing": "0.04em", "text-decoration": "underline", "text-underline-offset": "0.3em" } } },
              ],
            },
            {
              tag: "div", key: "list", repeat: "projects", attrs: { "data-forge-hover-reveal": "" },
              style: { base: { position: "relative", "border-bottom-width": "1px", "border-bottom-style": "solid", "border-bottom-color": "token(line-inverse)" } },
              children: [
                {
                  tag: "a", key: "row", href: "item.href", attrs: { "data-forge-hover-row": "" },
                  style: {
                    base: { display: "flex", "flex-wrap": "wrap", "align-items": "baseline", "column-gap": "1.5rem", "row-gap": "0.5rem", "padding-top": "1.5rem", "padding-bottom": "1.5rem", "border-top-width": "1px", "border-top-style": "solid", "border-top-color": "token(line-inverse)", color: "token(surface)", "text-decoration": "none" },
                    md: { "flex-wrap": "nowrap" },
                    lg: { "padding-top": "2rem", "padding-bottom": "2rem" },
                  },
                  children: [
                    { tag: "div", key: "index", bind: "@index", decorative: true, style: { base: { width: "2.5rem", "flex-shrink": "0", "font-family": "token(font-mono)", "font-size": "0.8125rem", color: "token(surface-muted)" } } },
                    {
                      tag: "h3", key: "name", bind: "item.title",
                      style: {
                        base: { "flex-grow": "1", "flex-basis": "0%", "min-width": "0", "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "2.25rem", "line-height": "1", "font-weight": "500", "letter-spacing": "-0.035em" },
                        md: { "font-size": "3.5rem" },
                        lg: { "font-size": "5rem" },
                      },
                    },
                    {
                      tag: "div", key: "meta", bind: "item.meta",
                      style: {
                        base: { width: "100%", "padding-left": "4rem", "font-family": "token(font-mono)", "font-size": "0.8125rem", "letter-spacing": "0.04em", color: "token(surface-muted)", "white-space": "nowrap" },
                        md: { width: "auto", "padding-left": "0" },
                      },
                    },
                    { tag: "div", key: "year", bind: "item.year", style: { base: { display: "none", "font-family": "token(font-mono)", "font-size": "0.8125rem", color: "token(surface-muted)" }, md: { display: "block" } } },
                    {
                      tag: "div", key: "media", decorative: true, attrs: { "data-forge-hover-media": "" },
                      style: {
                        base: { display: "none", position: "absolute", top: "0", left: "0", "z-index": "2", width: "20rem", height: "14rem", overflow: "hidden", "border-top-left-radius": "0.375rem", "border-top-right-radius": "0.375rem", "border-bottom-left-radius": "0.375rem", "border-bottom-right-radius": "0.375rem", "pointer-events": "none", opacity: "0", visibility: "hidden" },
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
