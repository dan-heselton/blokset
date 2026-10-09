/**
 * Copy this file to add a framework (Lumos, MAST, your agency's own…). Files starting with "_" are
 * ignored. Every component spec uses the same four roles; a profile only decides what they become.
 *
 * Role return values:
 *   "class-name"                  → a global utility; its styles come from `utilities` below
 *   { class: "x", style: {...} }  → a component-scoped wrapper with its own styles
 * @type {import("../src/types").FrameworkProfile}
 */
export default {
  name: "my-framework",
  label: "My Framework",
  sectionClass: (prefix) => `${prefix}_wrap`,
  elementClass: (prefix, key) => `${prefix}_${key}`,
  roles: {
    gutter: () => "u-gutter",
    container: (size = "large") => `u-container-${size}`,
    "section-padding": (size = "large") => `u-section-${size}`,
  },
  utilities: {
    "u-gutter": { base: { "padding-left": "5%", "padding-right": "5%" } },
    "u-container-large": { base: { width: "100%", "max-width": "80rem", "margin-left": "auto", "margin-right": "auto" } },
    "u-section-large": {
      base: { "padding-top": "4rem", "padding-bottom": "4rem" },
      md: { "padding-top": "6rem", "padding-bottom": "6rem" },
      lg: { "padding-top": "8rem", "padding-bottom": "8rem" },
    },
  },
  button: { base: "button", modifier: (variant) => `is-${variant}` },
};
