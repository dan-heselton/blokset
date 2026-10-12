// Office cards: a photograph, the address, the hours, and a directions link.
import { mono, pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  card: { "background-color": "panel" },
  city: { color: "fg" },
  address: { color: "muted" },
  hours: { color: "muted" },
  directions: { color: "fg" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1200&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "contact-03",
  prefix: "contact3",
  name: "Contact / Offices",
  category: "contact",
  description: "Location cards with a photograph, address, hours, and a directions link.",

  props: {
    ...headerProps({
      eyebrow: "Visit",
      heading: "Two rooms, one studio",
      description: "Rockport is the workshop. Gloucester is where we meet clients.",
    }),
    showHours: { type: "boolean", default: true, description: "Show the hours on each card." },
    offices: {
      type: "list",
      fields: { city: "text", address: "text", hours: "text", directions: "text", href: "link", image: "image" },
      default: [
        {
          city: "Rockport",
          address: "12 Harbor Way, Rockport, MA 01966",
          hours: "Mon–Fri, 9–5",
          directions: "Directions",
          href: "https://maps.google.com/?q=12+Harbor+Way+Rockport+MA",
          image: shot("1501594907352-04cda38ebc29", "Harbor water and a low pier"),
        },
        {
          city: "Gloucester",
          address: "48 Main Street, Gloucester, MA 01930",
          hours: "Tue–Thu, by appointment",
          directions: "Directions",
          href: "https://maps.google.com/?q=48+Main+Street+Gloucester+MA",
          image: shot("1497366216548-37526070297c", "A bright room with a long table"),
        },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] },
    reveal: { preset: "fade-up", targets: ["card"] },
  },

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
            tag: "div", key: "grid", repeat: "offices",
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "grid-column-gap": "1.25rem", "grid-row-gap": "1.25rem" },
              lg: { "grid-template-columns": "1fr 1fr" },
            },
            children: [
              {
                tag: "div", key: "card",
                style: { base: { display: "flex", "flex-direction": "column", overflow: "hidden", ...radius("token(radius-card)"), ...t("card") } },
                children: [
                  {
                    tag: "div", key: "photo",
                    style: { base: { overflow: "hidden", "aspect-ratio": "16 / 10" } },
                    children: [
                      { tag: "img", key: "photo-image", bind: "item.image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } },
                    ],
                  },
                  {
                    tag: "div", key: "copy",
                    style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.6rem", ...pad("1.5rem") }, lg: pad("1.75rem") },
                    children: [
                      { tag: "h3", key: "city", bind: "item.city", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1.15", "font-weight": "600", "letter-spacing": "-0.03em", ...t("city") } } },
                      { tag: "p", key: "address", bind: "item.address", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1.0625rem", "line-height": "1.5", ...t("address") } } },
                      { tag: "div", key: "hours", bind: "item.hours", if: "showHours", style: { base: { ...mono(), "letter-spacing": "0.04em", "text-transform": "none", ...t("hours") } } },
                      { tag: "a", key: "directions", bind: "item.directions", href: "item.href", style: { base: { "margin-top": "0.5rem", "font-size": "0.9375rem", "line-height": "1.4", "text-decoration": "underline", "text-underline-offset": "0.25em", ...t("directions") } } },
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
