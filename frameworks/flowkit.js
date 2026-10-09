/**
 * Webflow Flowkit — DRAFT.
 * From Flowkit's docs: underscores separate a component from its parts (card_body), hyphenated combo
 * modifiers (is-secondary, on-inverse), and utilities as property_value (padding-top_xxlarge).
 * Flowkit styles everything with Webflow variables; until variable sync exists, values here are
 * literals. Verify structure class names against a Flowkit cloneable before relying on this.
 * @type {import("../src/types").FrameworkProfile}
 */
export default {
  name: "flowkit",
  label: "Flowkit (draft)",
  sectionClass: (prefix) => `${prefix}_section`,
  elementClass: (prefix, key) => `${prefix}_${key}`,
  roles: {
    gutter: () => "padding-horizontal_medium",
    container: (size = "large") => `container_${size}`,
    "section-padding": (size = "large") => `padding-vertical_${size === "large" ? "xxlarge" : "xlarge"}`,
  },
  utilities: {
    "padding-horizontal_medium": { base: { "padding-left": "5%", "padding-right": "5%" } },
    container_large: { base: { width: "100%", "max-width": "80rem", "margin-left": "auto", "margin-right": "auto" } },
    container_medium: { base: { width: "100%", "max-width": "64rem", "margin-left": "auto", "margin-right": "auto" } },
    container_small: { base: { width: "100%", "max-width": "48rem", "margin-left": "auto", "margin-right": "auto" } },
    "padding-vertical_xxlarge": {
      base: { "padding-top": "4rem", "padding-bottom": "4rem" },
      md: { "padding-top": "6rem", "padding-bottom": "6rem" },
      lg: { "padding-top": "8rem", "padding-bottom": "8rem" },
    },
    "padding-vertical_xlarge": {
      base: { "padding-top": "3rem", "padding-bottom": "3rem" },
      md: { "padding-top": "4rem", "padding-bottom": "4rem" },
      lg: { "padding-top": "5rem", "padding-bottom": "5rem" },
    },
  },
  button: {
    base: "button",
    modifier: (variant) => ({ "secondary-alt": "on-inverse", dark: "is-dark", secondary: "is-secondary" })[variant] ?? `is-${variant}`,
  },
};
