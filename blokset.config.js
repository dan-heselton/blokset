// Project config. One per project: copy this file into a client project (or keep presets here) so
// generated components match that project's classes, tokens and utilities.
/** @type {import("./src/types").BloksetConfig} */
export default {
  // Class framework used for the gallery preview and `blokset add`. See /frameworks.
  framework: "client-first",
  // Also build these into dist/ and the gallery's framework switcher.
  frameworks: ["bem", "flowkit"],

  targets: ["react", "astro", "html", "vanilla", "webflow"],

  // Token overrides. A string replaces the value. An object can map the token:
  // `css` is used by code outputs, `webflow` is a destination-site variable name or id.
  // Webflow pastes use `value` until `webflow` resolves to a variable id.
  tokens: {
    // accent: "#2f6bff",
    // ink: { value: "#141414", css: "var(--color-text)" },
  },

  // Match your project's utility values so Webflow pastes reuse your classes instead of creating
  // "padding-section-large 2". Example: Relume-style section padding.
  utilities: {
    // "padding-section-large": {
    //   base: { "padding-top": "4rem", "padding-bottom": "4rem" },
    //   md: { "padding-top": "6rem", "padding-bottom": "6rem" },
    //   lg: { "padding-top": "7rem", "padding-bottom": "7rem" },
    // },
  },

  classes: {
    button: {
      // base: "button",
      // Extra classes per variant. Strings or arrays (combo chains):
      // variants: {
      //   dark: "is-dark",
      //   secondary: "is-secondary",
      //   "secondary-alt": ["is-secondary", "is-alternate"],
      // },
      // "blokset" ships button styles; "none" = your project already styles these classes.
      styles: "blokset",
    },
  },
};
