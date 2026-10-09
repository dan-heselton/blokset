// Shared primitives used across components. Variant styles hold only what differs from the base.
const sides = (prop, value) =>
  Object.fromEntries(["top", "right", "bottom", "left"].map((s) => [prop.replace("*", s), value]));
const corners = (value) =>
  Object.fromEntries(["top-left", "top-right", "bottom-left", "bottom-right"].map((c) => [`border-${c}-radius`, value]));

export const button = {
  base: {
    base: {
      display: "inline-flex",
      "align-items": "center",
      "justify-content": "center",
      "padding-top": "0.75rem",
      "padding-bottom": "0.75rem",
      "padding-left": "1.5rem",
      "padding-right": "1.5rem",
      ...corners("token(radius)"),
      ...sides("border-*-width", "1px"),
      ...sides("border-*-style", "solid"),
      ...sides("border-*-color", "token(button-bg)"),
      "background-color": "token(button-bg)",
      color: "token(button-fg)",
      "font-size": "1rem",
      "font-weight": "600",
      "line-height": "1.2",
      "text-decoration": "none",
    },
  },
  variants: {
    primary: null,
    dark: { base: { "background-color": "token(ink)", color: "token(surface)", ...sides("border-*-color", "token(ink)") } },
    secondary: { base: { "background-color": "transparent", color: "token(ink)", ...sides("border-*-color", "token(ink)") } },
    "secondary-alt": {
      base: { "background-color": "transparent", color: "token(text-inverse)", ...sides("border-*-color", "token(text-inverse)") },
    },
  },
};
