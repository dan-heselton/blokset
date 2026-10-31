// Full-bleed project film: one case study at a time with previous and next.
import { inset0, mono, pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  slides: { "background-color": "panel" },
  "slide-year": { color: "muted" },
  "slide-summary": { color: "muted" },
  prev: { color: "fg", "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line" },
  next: { color: "fg", "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line" },
};
const t = (key) => themeBase("dark", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1800&q=80`, alt });
const control = (key) => ({
  base: {
    ...mono(), cursor: "pointer", ...pad("0.75rem"),
    "border-top-width": "1px", "border-right-width": "1px", "border-bottom-width": "1px", "border-left-width": "1px",
    "border-top-style": "solid", "border-right-style": "solid", "border-bottom-style": "solid", "border-left-style": "solid",
    ...radius("999px"), ...t(key),
  },
});

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "carousel-05",
  prefix: "carousel5",
  name: "Work / Project film",
  category: "carousel",
  collection: "marketing",
  description: "Full project slides with a photograph, title, year, and a short summary. Previous and next advance the film.",

  props: {
    ...headerProps({
      eyebrow: "Selected work",
      heading: "One project at a time",
      description: "A short film of the work. Use the arrows, or let them advance on their own.",
    }),
    projects: {
      type: "list",
      fields: { title: "text", year: "text", summary: "text", href: "link", image: "image" },
      default: [
        {
          title: "North Shore Arts",
          year: "2026",
          summary: "Programs, exhibitions, and a visit page the staff can edit.",
          href: "#",
          image: shot("1519710164239-da123dc03ef4", "Sunlit room with a wooden chair"),
        },
        {
          title: "Tidewater Supply",
          year: "2026",
          summary: "A catalog the shop floor trusts, with stock that updates overnight.",
          href: "#",
          image: shot("1501594907352-04cda38ebc29", "Harbor pier"),
        },
        {
          title: "Halyard",
          year: "2025",
          summary: "A product site with motion that stays quiet until you ask for it.",
          href: "#",
          image: shot("1497366216548-37526070297c", "Bright studio"),
        },
        {
          title: "Ledgewood Architects",
          year: "2024",
          summary: "A portfolio architects respect and clients can skim in a minute.",
          href: "#",
          image: shot("1486406146926-c627a92ad1ab", "Glass tower"),
        },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "dark", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description", "carousel"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" } },
        children: [
          header({ t, layout: "split" }),
          {
            tag: "div", key: "carousel", attrs: { "data-blok-carousel": "" },
            style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1.25rem" } },
            children: [
              {
                tag: "div", key: "slides", repeat: "projects",
                style: { base: { position: "relative", overflow: "hidden", ...radius("token(radius-card)"), ...t("slides") } },
                children: [{
                  tag: "div", key: "slide", attrs: { "data-blok-slide": "" },
                  style: {
                    base: {
                      display: "grid", "grid-template-columns": "minmax(0, 1fr)", "min-height": "22rem",
                    },
                    lg: { "grid-template-columns": "1.35fr 1fr", "min-height": "28rem" },
                  },
                  children: [
                    {
                      tag: "div", key: "slide-media",
                      style: { base: { position: "relative", overflow: "hidden", "min-height": "14rem" }, lg: { "min-height": "0px" } },
                      children: [
                        { tag: "img", key: "slide-image", bind: "item.image", style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } } },
                      ],
                    },
                    {
                      tag: "div", key: "slide-copy",
                      style: {
                        base: {
                          display: "flex", "flex-direction": "column", "justify-content": "flex-end", "row-gap": "0.85rem",
                          ...pad("1.5rem"),
                        },
                        lg: { ...pad("2.25rem") },
                      },
                      children: [
                        { tag: "div", key: "slide-year", bind: "item.year", style: { base: { ...mono(), ...t("slide-year") } } },
                        {
                          tag: "h3", key: "slide-title", bind: "item.title",
                          style: {
                            base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "2rem", "line-height": "1.05", "font-weight": "600", "letter-spacing": "-0.03em" },
                            lg: { "font-size": "2.75rem" },
                          },
                        },
                        { tag: "p", key: "slide-summary", bind: "item.summary", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "28rem", "font-size": "1.0625rem", "line-height": "1.55", ...t("slide-summary") } } },
                        {
                          tag: "a", key: "slide-link", href: "item.href", text: "View project",
                          style: {
                            base: {
                              display: "inline-flex", "align-items": "center", "align-self": "flex-start",
                              "margin-top": "0.5rem", "text-decoration": "underline", "text-underline-offset": "4px",
                              "font-size": "0.9375rem", "font-weight": "600", color: "inherit",
                            },
                          },
                        },
                      ],
                    },
                  ],
                }],
              },
              {
                tag: "div", key: "controls",
                style: { base: { display: "flex", "column-gap": "0.5rem" } },
                children: [
                  { tag: "div", key: "prev", text: "Previous", attrs: { "data-blok-carousel-prev": "" }, style: control("prev") },
                  { tag: "div", key: "next", text: "Next", attrs: { "data-blok-carousel-next": "" }, style: control("next") },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
