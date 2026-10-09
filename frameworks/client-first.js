/**
 * Finsweet Client-First.
 * section_[prefix] > padding-global > container-large > padding-section-large > [prefix]_component
 *
 * Webflow renames a pasted class ("padding-global 2") when the project already has a class with the
 * same name but different styles, so these utility values must match your project. Override them per
 * project in forge.config.js → utilities instead of editing this file.
 * @type {import("../src/types").FrameworkProfile}
 */
export default {
  name: "client-first",
  label: "Client-First",
  sectionClass: (prefix) => `section_${prefix}`,
  elementClass: (prefix, key) => `${prefix}_${key}`,
  roles: {
    gutter: () => "padding-global",
    container: (size = "large") => `container-${size}`,
    "section-padding": (size = "large") => `padding-section-${size}`,
  },
  utilities: {
    "padding-global": { base: { "padding-left": "5%", "padding-right": "5%" } },
    "container-large": { base: { width: "100%", "max-width": "80rem", "margin-left": "auto", "margin-right": "auto" } },
    "container-medium": { base: { width: "100%", "max-width": "64rem", "margin-left": "auto", "margin-right": "auto" } },
    "container-small": { base: { width: "100%", "max-width": "48rem", "margin-left": "auto", "margin-right": "auto" } },
    "padding-section-large": {
      base: { "padding-top": "4rem", "padding-bottom": "4rem" },
      md: { "padding-top": "6rem", "padding-bottom": "6rem" },
      lg: { "padding-top": "8rem", "padding-bottom": "8rem" },
    },
    "padding-section-medium": {
      base: { "padding-top": "3rem", "padding-bottom": "3rem" },
      md: { "padding-top": "4rem", "padding-bottom": "4rem" },
      lg: { "padding-top": "5rem", "padding-bottom": "5rem" },
    },
  },
  button: { base: "button", modifier: (variant) => `is-${variant}` },
};
