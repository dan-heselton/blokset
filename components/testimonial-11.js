// Two rows of short quote cards drifting in opposite directions.
import { pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  "card-1": { "background-color": "panel" },
  "card-2": { "background-color": "panel" },
  "quote-1": { color: "fg" },
  "quote-2": { color: "fg" },
  "name-1": { color: "muted" },
  "name-2": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);

const line = (quote, name) => ({ quote, name });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "testimonial-11",
  prefix: "testimonial11",
  name: "Testimonial / Quote Marquee",
  category: "testimonial",
  description: "Two full-bleed rows of short quotes, drifting in opposite directions.",

  props: {
    ...headerProps({
      eyebrow: "In their words",
      heading: "Notes from the last few years",
      description: "Short lines. The longer versions live on the project pages.",
    }),
    quotesTop: {
      type: "list",
      fields: { quote: "text", name: "text" },
      default: [
        line("Still looks considered.", "North Shore Arts"),
        line("Our editors actually use it.", "Tidewater Supply"),
        line("No deck. A working site.", "Halyard"),
        line("The person on the call did the work.", "Saltbox Bakery"),
      ],
    },
    showSecondRow: { type: "boolean", default: true, description: "Show the second, reverse row." },
    quotesBottom: {
      type: "list",
      fields: { quote: "text", name: "text" },
      default: [
        line("Fixed price. Kept it.", "Ledgewood"),
        line("Launch day was not an empty CMS.", "Pasture"),
        line("We still open it every week.", "Harbor Lab"),
        line("Type that feels like the place.", "Fieldnotes"),
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] },
  },

  tree: {
    role: "section",
    style: { base: { overflow: "hidden", ...t("section") } },
    children: [
      {
        role: "section-padding", size: "large",
        children: [
          {
            role: "gutter",
            children: [{ role: "container", size: "large", children: [header({ t, layout: "split" })] }],
          },
          {
            tag: "div", key: "rows",
            style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.75rem", "margin-top": "2.5rem" }, lg: { "margin-top": "3.5rem", "row-gap": "1rem" } },
            children: [
              row(1, "quotesTop", { "data-blok-marquee": "", "data-blok-speed": "40" }),
              row(2, "quotesBottom", { "data-blok-marquee": "", "data-blok-speed": "32", "data-blok-direction": "reverse" }),
            ],
          },
        ],
      },
    ],
  },
};

function row(n, prop, attrs) {
  return {
    tag: "div", key: `row-${n}`, ...(n === 2 ? { if: "showSecondRow" } : {}),
    style: { base: { overflow: "hidden" } },
    children: [
      {
        tag: "div", key: `track-${n}`, repeat: prop, attrs,
        style: { base: { display: "flex", width: "max-content" } },
        children: [
          {
            tag: "div", key: `card-${n}`,
            style: {
              base: {
                display: "flex", "flex-direction": "column", "justify-content": "space-between", "row-gap": "1.25rem",
                "flex-shrink": "0", width: "16rem", "margin-right": "0.75rem", ...pad("1.25rem"), ...radius("token(radius-card)"), ...t(`card-${n}`),
              },
              lg: { width: "22rem", "margin-right": "1rem", ...pad("1.5rem") },
            },
            children: [
              {
                tag: "p", key: `quote-${n}`, bind: "item.quote",
                style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.25rem", "line-height": "1.3", "font-weight": "500", "letter-spacing": "-0.02em", ...t(`quote-${n}`) } },
              },
              { tag: "div", key: `name-${n}`, bind: "item.name", style: { base: { "font-family": "token(font-mono)", "font-size": "0.75rem", "letter-spacing": "0.06em", "text-transform": "uppercase", ...t(`name-${n}`) } } },
            ],
          },
        ],
      },
    ],
  };
}
