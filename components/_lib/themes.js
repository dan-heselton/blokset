// Shared theme palettes and style helpers. Folders under components/ are not components.
const sides = (prop, value) =>
  Object.fromEntries(["top", "right", "bottom", "left"].map((side) => [prop.replace("*", side), value]));

const corners = (value) =>
  Object.fromEntries(["top-left", "top-right", "bottom-left", "bottom-right"].map((corner) => [`border-${corner}-radius`, value]));

/** Palette slot names. Values are token names from src/core/tokens.js. */
export const PALETTES = {
  light: { bg: "surface", fg: "ink", muted: "ink-muted", line: "line", panel: "surface-2", glyph: "accent", card: "ink" },
  dark: { bg: "ink", fg: "surface", muted: "surface-muted", line: "line-inverse", panel: "ink-2", glyph: "accent", card: "ink-2" },
  accent: { bg: "accent", fg: "ink", muted: "ink-soft", line: "line", panel: "surface", glyph: "ink", card: "ink" },
};

/** Harborline. Marketing specs keep PALETTES. */
const SAAS_PALETTES = {
  light: { bg: "saas-canvas", fg: "saas-ink", muted: "saas-muted", line: "saas-line", panel: "saas-panel", glyph: "saas-blue", card: "saas-ink" },
  dark: { bg: "saas-ink", fg: "saas-canvas", muted: "saas-muted-inverse", line: "saas-line-inverse", panel: "saas-panel-dark", glyph: "saas-blue", card: "saas-ink" },
  accent: { bg: "saas-blue", fg: "saas-white", muted: "saas-muted-inverse", line: "saas-line-inverse", panel: "saas-ink", glyph: "saas-white", card: "saas-ink" },
};

const PALETTE_SETS = { marketing: PALETTES, saas: SAAS_PALETTES };

const BUTTON_MAPS = {
  dark: { dark: "primary", secondary: "secondary-alt" },
  light: { primary: "dark", "secondary-alt": "secondary" },
  accent: { primary: "dark", "secondary-alt": "secondary" },
};

function paletteTable(palette) {
  const table = PALETTE_SETS[palette];
  if (!table) throw new Error(`Unknown palette "${palette}"`);
  return table;
}

const slot = (theme, name, palette = "marketing") => {
  const tokenName = paletteTable(palette)[theme]?.[name];
  if (!tokenName) throw new Error(`Unknown palette slot "${name}" on theme "${theme}"`);
  return `token(${tokenName})`;
};

/**
 * Base style properties for the default theme, so the unstyled option and the variant agree.
 * @param {keyof typeof PALETTES} theme
 * @param {Record<string, string>} props CSS property → palette slot
 * @param {"marketing" | "saas"} [palette]
 */
export function themeBase(theme, props, palette = "marketing") {
  if (!paletteTable(palette)[theme]) throw new Error(`Unknown theme "${theme}"`);
  return Object.fromEntries(Object.entries(props).map(([cssProp, name]) => [cssProp, slot(theme, name, palette)]));
}

/**
 * A `theme` variant group. The default option is null (base styles). Every other option
 * overrides the mapped properties and remaps buttons for that theme.
 * Pass `palette: "saas"` for Harborline. Marketing stays the default.
 * @param {{ default: keyof typeof PALETTES, options?: string[], map: Record<string, Record<string, string>>, label?: string, palette?: "marketing" | "saas" }} input
 */
export function themeVariant({ default: fallback, options, map, label = "Color theme", palette = "marketing" }) {
  const names = options ?? Object.keys(paletteTable(palette));
  if (!names.includes(fallback)) throw new Error(`Theme default "${fallback}" is not an option`);
  /** @type {import("../../src/types").VariantGroup} */
  const group = { label, default: fallback, options: {} };
  for (const name of names) {
    if (name === fallback) {
      group.options[name] = null;
      continue;
    }
    const styles = {};
    for (const [key, props] of Object.entries(map)) {
      styles[key] = { base: themeBase(name, props, palette) };
    }
    group.options[name] = {
      label: name[0].toUpperCase() + name.slice(1),
      styles,
      buttons: BUTTON_MAPS[name],
    };
  }
  group.palette = { default: fallback, options: names.slice(), map };
  return group;
}

/** Four corner radii. Defaults to the radius token. */
export function radius(value = "token(radius)") {
  return corners(value);
}

/**
 * A cutout choice for photograph and card keys. Base styles stay on `token(radius-card)`.
 * `round` is a circle on a square frame and a pill on a wide one. `arch` is tall on top.
 * @param {string[]} keys
 */
export function shapeVariant(keys) {
  const round = Object.fromEntries(keys.map((key) => [key, { base: radius("999px") }]));
  const arch = Object.fromEntries(keys.map((key) => [key, {
    base: {
      "border-top-left-radius": "8rem",
      "border-top-right-radius": "8rem",
      "border-bottom-left-radius": "0.75rem",
      "border-bottom-right-radius": "0.75rem",
    },
  }]));
  return {
    label: "Cutout",
    default: "soft",
    options: {
      soft: null,
      round: { label: "Round", styles: round },
      arch: { label: "Arch", styles: arch },
    },
  };
}

/** Four padding longhands. A single value, or `{ top, right, bottom, left }`. */
export function pad(value) {
  if (value && typeof value === "object") {
    const top = value.top;
    const right = value.right ?? top;
    const bottom = value.bottom ?? top;
    const left = value.left ?? right;
    return { "padding-top": top, "padding-right": right, "padding-bottom": bottom, "padding-left": left };
  }
  return sides("padding-*", value);
}

/** A solid border on every side. */
export function border(color = "token(line)", width = "1px") {
  return { ...sides("border-*-width", width), ...sides("border-*-style", "solid"), ...sides("border-*-color", color) };
}

/** Absolutely fill the parent. */
export const inset0 = { position: "absolute", top: "0", right: "0", bottom: "0", left: "0" };

/** Mono label type used for eyebrows, indexes, and meta. */
export function mono(color) {
  return {
    "font-family": "token(font-mono)",
    "font-size": "0.8125rem",
    "line-height": "1.4",
    "letter-spacing": "0.08em",
    "text-transform": "uppercase",
    ...(color ? { color } : {}),
  };
}
