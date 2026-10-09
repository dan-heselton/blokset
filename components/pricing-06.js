// Pricing with a monthly/yearly switch. Prices flip with a small roll animation; the middle plan is
// featured. Each plan's features are their own list, so every card is editable independently.
import { themeVariant, themeBase, radius, pad, mono, border } from "./_lib/themes.js";
import { header, headerProps, HEADER_THEME, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  "toggle-track": { "background-color": "panel" },
  "toggle-knob": { "background-color": "fg" },
  "plan-1": { "border-top-color": "line", "border-bottom-color": "line", "border-left-color": "line", "border-right-color": "line" },
  "plan-3": { "border-top-color": "line", "border-bottom-color": "line", "border-left-color": "line", "border-right-color": "line" },
  "plan-1-description": { color: "muted" },
  "plan-3-description": { color: "muted" },
  "plan-1-period": { color: "muted" },
  "plan-3-period": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);

const planProps = (n, { name, price, alt, description, features, cta, variant }) => ({
  [`plan${n}Name`]: { type: "text", default: name },
  [`plan${n}Price`]: { type: "text", default: price, description: "Monthly price shown by default" },
  [`plan${n}PriceYearly`]: { type: "text", default: alt, description: "Price shown when the toggle is on yearly" },
  [`plan${n}Period`]: { type: "text", default: "/ month" },
  [`plan${n}Description`]: { type: "text", default: description },
  [`plan${n}Features`]: { type: "list", fields: { text: "text" }, default: features.map((text) => ({ text })) },
  [`plan${n}Buttons`]: { type: "buttons", max: 1, default: [{ title: cta, href: "#", variant }] },
});

const plan = (n, featured) => {
  const k = (s) => `plan-${n}-${s}`;
  const dim = (s) => (featured ? {} : t(k(s)));
  return {
    tag: "div", key: `plan-${n}`,
    style: {
      base: {
        display: "flex", "flex-direction": "column", "row-gap": "1.75rem", ...pad("1.75rem"), ...radius("token(radius-card)"),
        ...(featured
          ? { "background-color": "token(ink)", color: "token(surface)", ...border("token(ink)") }
          : { ...border("transparent"), ...t(`plan-${n}`) }),
      },
      lg: pad("2.25rem"),
    },
    children: [
      {
        tag: "div", key: k("top"),
        style: { base: { display: "flex", "justify-content": "space-between", "align-items": "center", "min-height": "1.75rem" } },
        children: [
          { tag: "h3", key: k("name"), bind: `plan${n}Name`, style: { base: { "margin-top": "0", "margin-bottom": "0", ...mono() } } },
          ...(featured ? [{ tag: "div", key: "badge", bind: "featuredLabel", if: "showFeaturedLabel", style: { base: { ...mono("token(ink)"), "padding-top": "0.3rem", "padding-bottom": "0.3rem", "padding-left": "0.6rem", "padding-right": "0.6rem", "background-color": "token(accent)", ...radius("999px") } } }] : []),
        ],
      },
      {
        tag: "div", key: k("price-row"),
        style: { base: { display: "flex", "align-items": "baseline", "column-gap": "0.5rem" } },
        children: [
          {
            tag: "div", key: k("price"), bind: `plan${n}Price`, attrs: { "data-blok-price": "", "data-blok-alt": `=plan${n}PriceYearly` },
            style: { base: { display: "inline-block", "font-family": "token(font-display)", "font-size": "3.5rem", "line-height": "1", "font-weight": "500", "letter-spacing": "-0.05em", "font-variant-numeric": "tabular-nums" }, lg: { "font-size": "4.25rem" } },
          },
          { tag: "div", key: k("period"), bind: `plan${n}Period`, style: { base: { "font-size": "0.9375rem", ...(featured ? { color: "token(surface-muted)" } : dim("period")) } } },
        ],
      },
      { tag: "p", key: k("description"), bind: `plan${n}Description`, style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "0.9375rem", "line-height": "1.55", ...(featured ? { color: "token(surface-muted)" } : dim("description")) } } },
      {
        tag: "div", key: k("features"), repeat: `plan${n}Features`,
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.75rem", "flex-grow": "1" } },
        children: [
          {
            tag: "div", key: k("feature"),
            style: { base: { display: "flex", "column-gap": "0.75rem", "font-size": "0.9375rem", "line-height": "1.45" } },
            children: [
              { tag: "div", key: k("check"), text: "✓", decorative: true, style: { base: { color: featured ? "token(accent)" : "inherit", "font-weight": "700" } } },
              { tag: "div", key: k("feature-text"), bind: "item.text" },
            ],
          },
        ],
      },
      { tag: "div", key: k("actions"), repeat: `plan${n}Buttons`, style: { base: { display: "flex", "flex-direction": "column" } } },
    ],
  };
};

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "pricing-06",
  prefix: "pricing6",
  name: "Pricing / Billing Toggle",
  category: "pricing",
  description: "Three plans with a monthly/yearly switch that rolls the prices. Featured middle plan in ink or accent; two themes.",

  props: {
    ...headerProps({ eyebrow: "Pricing", heading: "Simple plans for growing teams", description: "Start small and scale when it's working. Switch to yearly and get two months free." }),
    showToggle: { type: "boolean", default: true },
    monthlyLabel: { type: "text", default: "Monthly" },
    yearlyLabel: { type: "text", default: "Yearly" },
    showSaveBadge: { type: "boolean", default: true },
    saveLabel: { type: "text", default: "2 months free" },
    showFeaturedLabel: { type: "boolean", default: true },
    featuredLabel: { type: "text", default: "Most popular" },
    ...planProps(1, { name: "Starter", price: "$49", alt: "$41", description: "For a single landing page that needs to look sharp.", features: ["1 page, 5 sections", "Webflow hosting setup", "Basic SEO", "Email support"], cta: "Choose Starter", variant: "secondary" }),
    ...planProps(2, { name: "Studio", price: "$149", alt: "$124", description: "For small businesses with a real site and a CMS to run.", features: ["Up to 10 pages", "CMS collections", "Motion & interactions", "Monthly care plan", "Priority support"], cta: "Choose Studio", variant: "primary" }),
    ...planProps(3, { name: "Partner", price: "$399", alt: "$332", description: "For teams that ship often and want a design partner on call.", features: ["Unlimited pages", "Design system & components", "Quarterly strategy sessions", "Same-day responses"], cta: "Talk to us", variant: "secondary" }),
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark"], map: THEME }),
    featuredStyle: {
      label: "Featured plan color",
      default: "ink-plan",
      options: {
        "ink-plan": null,
        "accent-plan": {
          styles: {
            "plan-2": { base: { "background-color": "token(accent)", color: "token(ink)", ...border("token(accent)") } },
            "plan-2-period": { base: { color: "token(ink-soft)" } },
            "plan-2-description": { base: { color: "token(ink-soft)" } },
            "plan-2-check": { base: { color: "token(ink)" } },
            badge: { base: { "background-color": "token(ink)", color: "token(accent)" } },
          },
          buttons: { primary: "dark" },
        },
      },
    },
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.1, targets: ["eyebrow", "heading", "description", "toggle-row"] },
    reveal: { preset: "fade-up", targets: ["plan-1", "plan-2", "plan-3"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component", attrs: { "data-blok-billing": "" },
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" }, lg: { "row-gap": "3.5rem" } },
        children: [
          header({ t, layout: "center" }),
          {
            tag: "div", key: "toggle-row", if: "showToggle",
            style: { base: { display: "flex", "flex-wrap": "wrap", "align-items": "center", "justify-content": "center", "column-gap": "0.875rem", "row-gap": "0.75rem" } },
            children: [
              { tag: "div", key: "monthly", bind: "monthlyLabel", attrs: { "data-blok-billing-label": "" }, style: { base: { "font-weight": "600", cursor: "pointer" } } },
              {
                tag: "div", key: "toggle-track", attrs: { "data-blok-billing-toggle": "", "aria-label": "Bill yearly" },
                style: { base: { position: "relative", width: "3.25rem", height: "1.75rem", cursor: "pointer", ...radius("999px"), ...t("toggle-track") } },
                children: [{ tag: "div", key: "toggle-knob", attrs: { "data-blok-billing-knob": "" }, style: { base: { position: "absolute", top: "0.25rem", left: "0.25rem", width: "1.25rem", height: "1.25rem", ...radius("50%"), ...t("toggle-knob") } } }],
              },
              { tag: "div", key: "yearly", bind: "yearlyLabel", attrs: { "data-blok-billing-label": "" }, style: { base: { "font-weight": "600", cursor: "pointer" } } },
              { tag: "div", key: "save", bind: "saveLabel", if: "showSaveBadge", style: { base: { ...mono("token(accent)"), "margin-left": "0.25rem" } } },
            ],
          },
          {
            tag: "div", key: "plans",
            style: {
              base: { display: "grid", "grid-template-columns": "minmax(0, 1fr)", "column-gap": "1rem", "row-gap": "1rem", "align-items": "stretch" },
              lg: { "grid-template-columns": "repeat(3, minmax(0, 1fr))" },
            },
            children: [plan(1, false), plan(2, true), plan(3, false)],
          },
        ],
      }),
    ],
  },
};
