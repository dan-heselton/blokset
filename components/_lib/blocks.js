// Reusable spec fragments. They return plain spec nodes/props, so components stay data.
import { mono } from "./themes.js";

/** Theme slots for the standard header elements; merge into a component's THEME map. */
export const HEADER_THEME = {
  eyebrow: { color: "muted" },
  heading: { color: "fg" },
  description: { color: "muted" },
};

/** Props for a standard header. Pass the default copy. */
export function headerProps({ eyebrow, heading, description }) {
  return {
    showEyebrow: { type: "boolean", default: true },
    eyebrow: { type: "text", default: eyebrow },
    heading: { type: "text", default: heading },
    showDescription: { type: "boolean", default: true },
    description: { type: "text", default: description },
  };
}

const headingStyle = (size) =>
  size === "xl"
    ? { base: { "font-size": "2.75rem" }, md: { "font-size": "3.75rem" }, lg: { "font-size": "4.75rem" } }
    : { base: { "font-size": "2.25rem" }, md: { "font-size": "3rem" }, lg: { "font-size": "3.5rem" } };

/**
 * Section header: eyebrow + h2 + description.
 *   layout "split"  → title left, description right on desktop
 *   layout "stack"  → everything stacked, left aligned
 *   layout "center" → stacked and centered
 * `t(key)` returns the theme-default colors for a key.
 */
export function header({ t, layout = "split", size = "lg", extra = [] }) {
  const h = headingStyle(size);
  const center = layout === "center";
  const split = layout === "split";
  return {
    tag: "div", key: "header",
    style: {
      base: {
        display: "flex", "flex-direction": "column", "align-items": center ? "center" : "flex-start",
        "justify-content": "flex-start", "row-gap": "1.25rem", "column-gap": "0rem", "text-align": center ? "center" : "left",
      },
      ...(split ? { lg: { "flex-direction": "row", "align-items": "flex-end", "justify-content": "space-between", "column-gap": "4rem" } } : {}),
    },
    children: [
      {
        tag: "div", key: "header-title",
        style: { base: { "max-width": center ? "48rem" : "40rem" } },
        children: [
          { tag: "div", key: "eyebrow", bind: "eyebrow", if: "showEyebrow", style: { base: { ...mono(), "margin-bottom": "1.25rem", ...t("eyebrow") } } },
          {
            tag: "h2", key: "heading", bind: "heading",
            style: {
              base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "line-height": "1.02", "font-weight": "600", "letter-spacing": "-0.03em", ...h.base, ...t("heading") },
              md: h.md, lg: h.lg,
            },
          },
        ],
      },
      {
        tag: "p", key: "description", bind: "description", if: "showDescription",
        style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "28rem", "font-size": "1.0625rem", "line-height": "1.6", ...t("description") } },
      },
      ...extra,
    ],
  };
}

/** Standard layout roles wrapping a component node. */
export const shell = (component, { size = "large" } = {}) => ({
  role: "gutter",
  children: [{ role: "container", size: "large", children: [{ role: "section-padding", size, children: [component] }] }],
});

/** Merge extra per-option styles (beyond color slots) into a theme variant group. */
export function withStyles(group, extra) {
  for (const [option, styles] of Object.entries(extra)) {
    const o = group.options[option];
    if (!o) continue;
    for (const [key, style] of Object.entries(styles)) {
      o.styles[key] = { ...(o.styles[key] || {}), ...style, base: { ...(o.styles[key]?.base || {}), ...(style.base || {}) } };
    }
  }
  return group;
}
