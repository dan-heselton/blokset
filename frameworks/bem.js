/**
 * Self-contained BEM. Nothing global: layout wrappers become component elements with their styles
 * inlined, so a Webflow paste can never collide with classes already in a project.
 * @type {import("../src/types").FrameworkProfile}
 */
import clientFirst from "./client-first.js";

const u = clientFirst.utilities;

export default {
  name: "bem",
  label: "BEM (self-contained)",
  sectionClass: (prefix) => prefix,
  elementClass: (prefix, key) => `${prefix}__${key}`,
  roles: {
    gutter: (_size, prefix) => ({ class: `${prefix}__gutter`, style: u["padding-global"] }),
    container: (size = "large", prefix) => ({ class: `${prefix}__container`, style: u[`container-${size}`] }),
    "section-padding": (size = "large", prefix) => ({ class: `${prefix}__spacing`, style: u[`padding-section-${size}`] }),
  },
  utilities: {},
  button: { base: "button", modifier: (variant) => `button--${variant}` },
  variantClass: ({ elementClass, option }) => `${elementClass}--${option}`,
};
