// Three ways to reach the studio: email, phone, and the street address, each a real link.
import { mono, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  "email-col": { "border-top-color": "line" },
  "phone-col": { "border-top-color": "line" },
  "address-col": { "border-top-color": "line" },
  "email-label": { color: "muted" },
  "phone-label": { color: "muted" },
  "address-label": { color: "muted" },
  email: { color: "fg" },
  phone: { color: "fg" },
  address: { color: "fg" },
  note: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "contact-01",
  prefix: "contact1",
  name: "Contact / Details",
  category: "contact",
  description: "Email, phone, and address as links, with a short note on when to expect a reply.",

  props: {
    ...headerProps({
      eyebrow: "Contact",
      heading: "Write, call, or stop by",
      description: "The studio is in Rockport. Most projects start with an email.",
    }),
    emailLabel: { type: "text", default: "Email" },
    email: { type: "text", default: "hello@studio.co" },
    emailHref: { type: "link", default: "mailto:hello@studio.co" },
    phoneLabel: { type: "text", default: "Phone" },
    phone: { type: "text", default: "(978) 555-0148" },
    phoneHref: { type: "link", default: "tel:+19785550148" },
    addressLabel: { type: "text", default: "Studio" },
    address: { type: "text", default: "12 Harbor Way, Rockport, MA" },
    addressHref: { type: "link", default: "https://maps.google.com/?q=12+Harbor+Way+Rockport+MA" },
    showNote: { type: "boolean", default: true, description: "Show the reply note under the columns." },
    note: { type: "text", default: "We reply within one business day. New projects usually start the following month." },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description", "email-col", "phone-col", "address-col", "note"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" }, lg: { "row-gap": "4rem" } },
        children: [
          header({ t, layout: "split" }),
          {
            tag: "div", key: "columns",
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "grid-column-gap": "2rem", "grid-row-gap": "2rem" },
              lg: { "grid-template-columns": "1fr 1fr 1fr" },
            },
            children: [
              channel("email", "emailLabel", "email", "emailHref"),
              channel("phone", "phoneLabel", "phone", "phoneHref"),
              channel("address", "addressLabel", "address", "addressHref"),
            ],
          },
          { tag: "p", key: "note", bind: "note", if: "showNote", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "32rem", "font-size": "1.0625rem", "line-height": "1.6", ...t("note") } } },
        ],
      }),
    ],
  },
};

function channel(key, label, value, href) {
  return {
    tag: "div", key: `${key}-col`,
    style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.75rem", "padding-top": "1.25rem", "border-top-width": "1px", "border-top-style": "solid", "border-top-color": t(`${key}-col`)["border-top-color"] } },
    children: [
      { tag: "div", key: `${key}-label`, bind: label, style: { base: { ...mono(), ...t(`${key}-label`) } } },
      {
        tag: "a", key, bind: value, href,
        style: {
          base: { "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.2", "font-weight": "500", "letter-spacing": "-0.02em", "text-decoration": "none", ...t(key) },
          lg: { "font-size": "1.85rem" },
        },
      },
    ],
  };
}
