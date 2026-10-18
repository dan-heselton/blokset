// CSS longhands (mobile-first) → Figma auto-layout fields.
// Anything that cannot be represented is listed in `dropped` instead of being discarded quietly.

export const FIGMA_BREAKPOINTS = [
  { id: "mobile", label: "Mobile", width: 390, height: 844, source: "base" },
  { id: "tablet", label: "Tablet", width: 768, height: 1024, source: "md" },
  { id: "desktop", label: "Desktop", width: 1440, height: 900, source: "lg" },
];

export const VIEWPORTS = Object.fromEntries(FIGMA_BREAKPOINTS.map((bp) => [bp.id, { width: bp.width, height: bp.height }]));

/** CSS properties Figma cannot represent. Position is included only for sticky and fixed. */
export const UNSUPPORTED_PROPS = new Set([
  "cursor",
  "pointer-events",
  "user-select",
  "touch-action",
  "filter",
  "clip-path",
  "isolation",
  "perspective",
  "backface-visibility",
  "transform",
  "transform-style",
  "scroll-snap-align",
  "scroll-snap-type",
  "font-variant-numeric",
  "text-indent",
  "text-overflow",
  "text-underline-offset",
  "object-position",
  "box-sizing",
  "background-size",
  "background-position",
  "background-repeat",
  "grid-auto-flow",
  "grid-template-rows",
  "align-content",
  "justify-items",
  "list-style",
  "list-style-type",
  "outline",
  "clip",
  "word-break",
  "overflow-wrap",
  "vertical-align",
  "border-collapse",
  "border-spacing",
  "table-layout",
  "appearance",
  "caret-color",
  "resize",
  "float",
  "clear",
  "content",
  "text-wrap",
  "transition",
  "accent-color",
  "position",
  "margin-top",
  "margin-right",
  "margin-bottom",
  "margin-left",
]);

const REM = 16;

const round = (n) => Math.round(n * 100) / 100;

/** Flatten `{ base, md, lg }` into one map per breakpoint. Later breakpoints keep earlier values. */
export function flattenStyle(style = {}) {
  const mobile = { ...(style.base || {}) };
  const tablet = { ...mobile, ...(style.md || {}) };
  const desktop = { ...tablet, ...(style.lg || {}) };
  return { mobile, tablet, desktop };
}

/** Parse a grid template into tracks. Returns null when a track is not one Figma can build. */
function expandRepeats(text) {
  let out = "";
  for (let i = 0; i < text.length; i++) {
    if (text.slice(i, i + 7).toLowerCase() !== "repeat(") {
      out += text[i];
      continue;
    }
    let depth = 0;
    let end = i;
    for (; end < text.length; end++) {
      if (text[end] === "(") depth += 1;
      else if (text[end] === ")") {
        depth -= 1;
        if (depth === 0) break;
      }
    }
    const inner = text.slice(i + 7, end);
    const comma = firstTopComma(inner);
    const count = comma < 0 ? "" : inner.slice(0, comma).trim();
    const track = comma < 0 ? "" : inner.slice(comma + 1).trim();
    if (/^\d+$/.test(count) && track) out += Array.from({ length: Number(count) }, () => track).join(" ");
    else out += text.slice(i, end + 1);
    i = end;
  }
  return out;
}

function firstTopComma(text) {
  let depth = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "(") depth += 1;
    else if (text[i] === ")") depth -= 1;
    else if (text[i] === "," && depth === 0) return i;
  }
  return -1;
}

export function parseGridTemplate(value) {
  const text = expandRepeats(String(value ?? "").trim());
  if (!text) return null;
  const repeated = text.match(/^repeat\(\s*(\d+)\s*,\s*(.+)\)\s*$/);
  if (repeated) {
    const track = parseTrack(repeated[2].trim());
    if (!track) return null;
    return Array.from({ length: Number(repeated[1]) }, () => ({ ...track }));
  }
  const parts = splitTracks(text);
  if (!parts.length) return null;
  const tracks = [];
  for (const part of parts) {
    const track = parseTrack(part);
    if (!track) return null;
    tracks.push(track);
  }
  return tracks;
}

function splitTracks(text) {
  const parts = [];
  let current = "";
  let depth = 0;
  for (const char of text) {
    if (char === "(") depth += 1;
    if (char === ")") depth -= 1;
    if (/\s/.test(char) && depth === 0) {
      if (current) parts.push(current);
      current = "";
      continue;
    }
    current += char;
  }
  if (current) parts.push(current);
  return parts;
}

function parseTrack(token) {
  const text = token.trim();
  const minmax = text.match(/^minmax\(\s*([^,]+)\s*,\s*([^)]+)\)$/);
  if (minmax) return parseTrack(minmax[2]);
  if (text === "auto") return { type: "AUTO" };
  const fr = text.match(/^([0-9.]+)fr$/);
  if (fr) return { type: "FLEX", weight: Number(fr[1]) };
  const px = lengthPx(text);
  if (px != null) return { type: "FIXED", value: px };
  return null;
}

/** A px length, or null when the value is not a plain px/rem/0. */
export function lengthPx(value) {
  const text = String(value ?? "").trim();
  if (text === "0") return 0;
  const px = text.match(/^(-?[0-9.]+)px$/);
  if (px) return round(Number(px[1]));
  const rem = text.match(/^(-?[0-9.]+)rem$/);
  if (rem) return round(Number(rem[1]) * REM);
  return null;
}

/**
 * Resolve one CSS length against a breakpoint viewport and, for percentages, a parent width.
 * @returns {{ px: number } | { percent: number } | null}
 */
export function resolveLength(value, { viewport, parent, fontSize } = {}) {
  const text = String(value ?? "").trim();
  const plain = lengthPx(text);
  if (plain != null) return { px: plain };
  const percent = text.match(/^(-?[0-9.]+)%$/);
  if (percent) {
    const valuePercent = Number(percent[1]);
    if (parent != null) return { px: round((valuePercent / 100) * parent) };
    return { percent: valuePercent };
  }
  const vw = text.match(/^(-?[0-9.]+)vw$/);
  if (vw && viewport) return { px: round((Number(vw[1]) / 100) * viewport.width) };
  const vh = text.match(/^(-?[0-9.]+)(?:svh|vh)$/);
  if (vh && viewport) return { px: round((Number(vh[1]) / 100) * viewport.height) };
  const ch = text.match(/^(-?[0-9.]+)ch$/);
  if (ch) return { px: round(Number(ch[1]) * ((fontSize || 16) * 0.5)) };
  const em = text.match(/^(-?[0-9.]+)em$/);
  if (em) return { px: round(Number(em[1]) * (fontSize || 16)) };
  if (text.startsWith("calc(") && text.endsWith(")")) return evalCalc(text.slice(5, -1), { viewport, parent });
  const clamp = text.match(/^clamp\(([\s\S]+)\)$/);
  if (clamp) {
    const parts = splitArgs(clamp[1]);
    if (parts.length === 3) {
      const min = resolveLength(parts[0], { viewport, parent, fontSize });
      const pref = resolveLength(parts[1], { viewport, parent, fontSize });
      const max = resolveLength(parts[2], { viewport, parent, fontSize });
      if (min?.px != null && max?.px != null) {
        const preferred = pref?.px != null ? pref.px : min.px;
        return { px: round(Math.min(max.px, Math.max(min.px, preferred))) };
      }
    }
  }
  return null;
}

function evalCalc(expr, ctx) {
  let next = expr;
  if (ctx.viewport) {
    next = next.replace(/(-?[0-9.]+)(?:svh|vh)/g, (_, n) => String((Number(n) / 100) * ctx.viewport.height));
    next = next.replace(/(-?[0-9.]+)vw/g, (_, n) => String((Number(n) / 100) * ctx.viewport.width));
  }
  next = next.replace(/(-?[0-9.]+)rem/g, (_, n) => String(Number(n) * REM));
  next = next.replace(/(-?[0-9.]+)px/g, (_, n) => n);
  next = next.replace(/(-?[0-9.]+)%/g, (_, n) => {
    if (ctx.parent == null) return "PERCENT";
    return String((Number(n) / 100) * ctx.parent);
  });
  if (next.includes("PERCENT") || /[a-zA-Z]/.test(next)) return null;
  if (!/^[\d\s.+\-*/()]+$/.test(next)) return null;
  let value;
  try {
    value = Function(`"use strict"; return (${next})`)();
  } catch {
    return null;
  }
  if (typeof value !== "number" || !Number.isFinite(value)) return null;
  return { px: round(value) };
}

/** @returns {{ r: number, g: number, b: number, a: number } | { token: string } | null} */
export function parseColor(value) {
  const text = String(value ?? "").trim();
  const token = text.match(/^token\(([\w-]+)\)$/);
  if (token) return { token: token[1] };
  if (text === "transparent") return { r: 0, g: 0, b: 0, a: 0 };
  if (text === "inherit" || text === "currentcolor") return null;
  const hex = text.match(/^#([0-9a-f]{3,8})$/i);
  if (hex) return hexColor(hex[1]);
  const rgb = text.match(/^rgba?\(\s*([^)]+)\)$/i);
  if (rgb) {
    const parts = rgb[1].split(/[\s,/]+/).filter(Boolean).map(Number);
    if (parts.length < 3 || parts.slice(0, 3).some((n) => Number.isNaN(n))) return null;
    return {
      r: round(parts[0] / 255),
      g: round(parts[1] / 255),
      b: round(parts[2] / 255),
      a: parts.length > 3 ? parts[3] : 1,
    };
  }
  return null;
}

function hexColor(hex) {
  const full = hex.length === 3 || hex.length === 4
    ? [...hex].map((c) => c + c).join("")
    : hex;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  const a = full.length >= 8 ? parseInt(full.slice(6, 8), 16) / 255 : 1;
  return { r: round(r / 255), g: round(g / 255), b: round(b / 255), a: round(a) };
}

function paint(color, themeSlot) {
  if (themeSlot) return { theme: themeSlot };
  return color;
}

const ALIGN = {
  "flex-start": "MIN",
  start: "MIN",
  center: "CENTER",
  "flex-end": "MAX",
  end: "MAX",
  baseline: "BASELINE",
  stretch: "MIN",
};

const JUSTIFY = {
  "flex-start": "MIN",
  start: "MIN",
  center: "CENTER",
  "flex-end": "MAX",
  end: "MAX",
  "space-between": "SPACE_BETWEEN",
};

function pxOf(value, ctx) {
  const resolved = resolveLength(value, ctx);
  return resolved && "px" in resolved ? resolved.px : null;
}

function placement(start, end) {
  const read = (value) => {
    if (value == null || value === "") return null;
    const span = String(value).match(/^span\s+(\d+)$/);
    if (span) return { span: Number(span[1]) };
    const line = Number(value);
    if (Number.isFinite(line)) return { line };
    return null;
  };
  const from = read(start);
  const to = read(end);
  let span = 1;
  let index = null;
  if (from?.span) span = from.span;
  else if (to?.span) span = to.span;
  else if (from?.line != null && to?.line != null) span = Math.max(1, to.line - from.line);
  if (from?.line != null) index = from.line - 1;
  return { span, index };
}

/**
 * Translate one flat CSS map into Figma fields.
 * `themeSlots` maps a CSS property to a semantic theme variable (`bg`, `fg`, …).
 * Percentage lengths use `parent` as the containing width.
 */
export function cssToFigma(css = {}, { viewport, parent, themeSlots = {} } = {}) {
  const ctx = { viewport, parent };
  const dropped = [];
  const drop = (prop) => {
    if (!dropped.includes(prop)) dropped.push(prop);
  };
  const style = {
    layoutMode: "NONE",
    layoutWrap: "NO_WRAP",
    primaryAxisAlignItems: "MIN",
    counterAxisAlignItems: "MIN",
    itemSpacing: 0,
    counterAxisSpacing: 0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
    layoutPositioning: "AUTO",
    layoutSizingHorizontal: "HUG",
    layoutSizingVertical: "HUG",
    layoutGrow: 0,
    layoutAlign: "INHERIT",
    opacity: 1,
    clipsContent: false,
    visible: true,
    fills: [],
    radius: null,
    strokes: null,
    effects: [],
    zIndex: null,
  };

  const display = css.display;
  const direction = css["flex-direction"] || "row";
  if (display === "flex" || css["flex-direction"] || css["flex-wrap"]) {
    style.layoutMode = direction === "column" ? "VERTICAL" : "HORIZONTAL";
    if (direction === "row-reverse") style.reverse = true;
    if (css["flex-wrap"] === "wrap") style.layoutWrap = "WRAP";
    if (!css["align-items"]) style.stretchChildren = true;
  } else if (display === "grid" || css["grid-template-columns"]) {
    style.layoutMode = "GRID";
  } else if (display === "inline-block") {
    style.layoutMode = "HORIZONTAL";
  } else if (display === "block") {
    style.layoutMode = "VERTICAL";
  }
  if (display === "none") style.visible = false;

  if (css["justify-content"] && JUSTIFY[css["justify-content"]]) style.primaryAxisAlignItems = JUSTIFY[css["justify-content"]];
  else if (css["justify-content"]) drop("justify-content");
  if (css["align-items"] && ALIGN[css["align-items"]]) {
    style.counterAxisAlignItems = ALIGN[css["align-items"]];
    if (css["align-items"] === "stretch") style.stretchChildren = true;
  } else if (css["align-items"]) drop("align-items");
  if (css["align-self"] && ALIGN[css["align-self"]]) style.layoutAlign = ALIGN[css["align-self"]] === "BASELINE" ? "MIN" : ALIGN[css["align-self"]];
  else if (css["align-self"]) drop("align-self");

  const columnGap = pxOf(css["column-gap"] ?? css["grid-column-gap"], ctx);
  const rowGap = pxOf(css["row-gap"] ?? css["grid-row-gap"], ctx);
  if (style.layoutMode === "VERTICAL") {
    style.itemSpacing = rowGap ?? 0;
    style.counterAxisSpacing = columnGap ?? 0;
  } else if (style.layoutMode === "HORIZONTAL") {
    style.itemSpacing = columnGap ?? rowGap ?? 0;
    style.counterAxisSpacing = rowGap ?? 0;
  }

  if (style.layoutMode === "GRID") {
    const tracks = parseGridTemplate(css["grid-template-columns"] || "1fr");
    if (!tracks) drop("grid-template-columns");
    else {
      style.grid = {
        columns: tracks,
        columnGap: columnGap ?? 0,
        rowGap: rowGap ?? 0,
      };
    }
  }

  const columnPlace = placement(css["grid-column-start"], css["grid-column-end"]);
  const rowPlace = placement(css["grid-row-start"], css["grid-row-end"]);
  if (css["grid-column-start"] || css["grid-column-end"] || css["grid-row-start"] || css["grid-row-end"]) {
    style.gridChild = {
      columnSpan: columnPlace.span,
      rowSpan: rowPlace.span,
      ...(columnPlace.index != null ? { column: columnPlace.index } : {}),
      ...(rowPlace.index != null ? { row: rowPlace.index } : {}),
    };
  }

  for (const [side, prop] of [["top", "padding-top"], ["right", "padding-right"], ["bottom", "padding-bottom"], ["left", "padding-left"]]) {
    if (css[prop] == null) continue;
    const px = pxOf(css[prop], ctx);
    if (px == null) drop(prop);
    else style.padding[side] = px;
  }

  const margin = {};
  let marginAutoX = css["margin-left"] === "auto" && css["margin-right"] === "auto";
  for (const [side, prop] of [["top", "margin-top"], ["right", "margin-right"], ["bottom", "margin-bottom"], ["left", "margin-left"]]) {
    if (css[prop] == null || css[prop] === "0" || css[prop] === "0px" || css[prop] === "0rem") continue;
    if (css[prop] === "auto") continue;
    const px = pxOf(css[prop], ctx);
    if (px == null || px < 0) drop(prop);
    else margin[side] = px;
  }
  if (Object.keys(margin).length) style.margin = { top: 0, right: 0, bottom: 0, left: 0, ...margin };
  if (marginAutoX) style.layoutAlign = "CENTER";

  applySize(style, css, ctx, drop);

  if (css.position === "absolute") {
    style.layoutPositioning = "ABSOLUTE";
    applyAbsolute(style, css, ctx, drop);
  } else if (css.position === "sticky" || css.position === "fixed") drop("position");

  if (css["z-index"] != null && css["z-index"] !== "auto") {
    const z = Number(css["z-index"]);
    if (Number.isFinite(z)) style.zIndex = z;
    else drop("z-index");
  }

  const background = css["background-color"];
  if (background != null) {
    const color = parseColor(background);
    if (color) style.fills.push({ type: "SOLID", color: paint(color, themeSlots["background-color"]) });
    else if (background !== "transparent" && background !== "inherit") drop("background-color");
  }
  if (css["background-image"]) {
    const gradient = parseGradient(css["background-image"], themeSlots);
    if (gradient) style.fills.push(gradient);
    else drop("background-image");
  }

  const stroke = readStrokes(css, themeSlots, drop);
  if (stroke) style.strokes = stroke;

  const radius = readRadius(css, drop);
  if (radius) style.radius = radius;

  if (css["box-shadow"]) {
    const effect = parseShadow(css["box-shadow"]);
    if (effect) style.effects.push(effect);
    else drop("box-shadow");
  }

  if (css.opacity != null && css.opacity !== "1") {
    const opacity = Number(css.opacity);
    if (Number.isFinite(opacity)) style.opacity = opacity;
    else drop("opacity");
  }
  if (css.overflow === "hidden" || css["overflow-x"] === "hidden" || css["overflow-y"] === "hidden") style.clipsContent = true;
  if (css.visibility === "hidden") style.visible = false;
  if (css["mix-blend-mode"] === "difference") style.blendMode = "DIFFERENCE";
  else if (css["mix-blend-mode"]) drop("mix-blend-mode");

  const aspect = String(css["aspect-ratio"] || "");
  const ratio = aspect.match(/^([0-9.]+)\s*\/\s*([0-9.]+)$/);
  if (ratio) style.aspectRatio = { x: Number(ratio[1]), y: Number(ratio[2]) };
  else if (aspect && aspect !== "auto") drop("aspect-ratio");

  if (css["object-fit"] === "contain") style.imageScale = "FIT";
  else if (css["object-fit"] === "cover" || css["object-fit"] === "fill") style.imageScale = "FILL";
  else if (css["object-fit"]) drop("object-fit");

  if (css["flex-grow"] != null) {
    const grow = Number(css["flex-grow"]);
    if (grow > 0) {
      style.layoutGrow = 1;
      style.layoutSizingHorizontal = "FILL";
    }
  }
  if (css["flex-basis"] === "100%" || css["flex-basis"] === "0%" || css["flex-basis"] === "0px") {
    if (Number(css["flex-grow"] || 0) > 0 || css["flex-basis"] === "100%") style.layoutSizingHorizontal = "FILL";
  }

  const text = readText(css, themeSlots, ctx, drop);
  if (text) style.text = text;

  for (const prop of Object.keys(css)) {
    if (HANDLED.has(prop) || UNSUPPORTED_PROPS.has(prop)) {
      if (UNSUPPORTED_PROPS.has(prop) && !IGNORED_WHEN_PRESENT.has(prop)) {
        if (prop === "position" && css.position !== "sticky" && css.position !== "fixed") continue;
        if (prop.startsWith("margin-") && !dropped.includes(prop)) continue;
        if (!dropped.includes(prop) && prop !== "position" && !prop.startsWith("margin-")) drop(prop);
        if (prop === "position" && (css.position === "sticky" || css.position === "fixed") && !dropped.includes(prop)) drop(prop);
      }
      continue;
    }
    if (!dropped.includes(prop)) drop(prop);
  }

  return { style, dropped };
}

const HANDLED = new Set([
  "display", "flex-direction", "flex-wrap", "flex-grow", "flex-shrink", "flex-basis",
  "justify-content", "align-items", "align-self",
  "column-gap", "row-gap", "grid-column-gap", "grid-row-gap",
  "grid-template-columns", "grid-auto-rows",
  "grid-column-start", "grid-column-end", "grid-row-start", "grid-row-end",
  "padding-top", "padding-right", "padding-bottom", "padding-left",
  "margin-top", "margin-right", "margin-bottom", "margin-left",
  "width", "height", "min-width", "max-width", "min-height", "max-height",
  "position", "top", "right", "bottom", "left", "z-index",
  "background-color", "background-image",
  "border-top-width", "border-right-width", "border-bottom-width", "border-left-width",
  "border-top-style", "border-right-style", "border-bottom-style", "border-left-style",
  "border-top-color", "border-right-color", "border-bottom-color", "border-left-color",
  "border-top-left-radius", "border-top-right-radius", "border-bottom-right-radius", "border-bottom-left-radius",
  "box-shadow", "opacity", "overflow", "overflow-x", "overflow-y", "visibility", "mix-blend-mode",
  "aspect-ratio", "object-fit",
  "color", "font-family", "font-size", "font-weight", "font-style", "line-height", "letter-spacing",
  "text-align", "text-transform", "text-decoration", "white-space",
]);

/** Present on the node but deliberately not listed as dropped when the value is a no-op. */
const IGNORED_WHEN_PRESENT = new Set(["margin-top", "margin-right", "margin-bottom", "margin-left", "position"]);

function applySize(style, css, ctx, drop) {
  const fontSize = lengthPx(css["font-size"]) ?? 16;
  const sized = { ...ctx, fontSize };
  const width = css.width;
  const height = css.height;
  if (width != null && width !== "auto") {
    if (width === "100%") style.layoutSizingHorizontal = "FILL";
    else if (width === "max-content" || width === "min-content" || width === "fit-content") style.layoutSizingHorizontal = "HUG";
    else {
      const resolved = resolveLength(width, sized);
      if (resolved?.px != null) {
        style.layoutSizingHorizontal = "FIXED";
        style.width = Math.max(0, resolved.px);
      } else drop("width");
    }
  }
  if (height != null && height !== "auto") {
    if (height === "100%") style.layoutSizingVertical = "FILL";
    else {
      const resolved = resolveLength(height, sized);
      if (resolved?.px != null) {
        style.layoutSizingVertical = "FIXED";
        style.height = Math.max(0, resolved.px);
      } else drop("height");
    }
  }
  for (const [prop, key] of [["min-width", "minWidth"], ["max-width", "maxWidth"], ["min-height", "minHeight"], ["max-height", "maxHeight"]]) {
    if (css[prop] == null || css[prop] === "none" || css[prop] === "auto") continue;
    const em = String(css[prop]).match(/^([0-9.]+)em$/);
    const resolved = em ? { px: round(Number(em[1]) * fontSize) } : resolveLength(css[prop], sized);
    if (resolved?.px != null) style[key] = Math.max(0, resolved.px);
    else drop(prop);
  }
}

function applyAbsolute(style, css, ctx, drop) {
  const side = (prop) => {
    if (css[prop] == null || css[prop] === "auto") return null;
    const resolved = resolveLength(css[prop], ctx);
    if (resolved?.px == null) {
      drop(prop);
      return null;
    }
    return resolved.px;
  };
  const top = side("top");
  const right = side("right");
  const bottom = side("bottom");
  const left = side("left");
  const horizontal = left != null && right != null ? "STRETCH" : right != null && left == null ? "MAX" : "MIN";
  const vertical = top != null && bottom != null ? "STRETCH" : bottom != null && top == null ? "MAX" : "MIN";
  style.constraints = { horizontal, vertical };
  style.x = left ?? 0;
  style.y = top ?? 0;
  if (horizontal === "STRETCH") style.layoutSizingHorizontal = "FILL";
  if (vertical === "STRETCH") style.layoutSizingVertical = "FILL";
}

function readStrokes(css, themeSlots, drop) {
  const sides = ["top", "right", "bottom", "left"];
  const weights = {};
  let color = null;
  let any = false;
  for (const side of sides) {
    const width = css[`border-${side}-width`];
    if (width == null) continue;
    any = true;
    const px = lengthPx(width);
    if (px == null) drop(`border-${side}-width`);
    else weights[side] = px;
    const raw = css[`border-${side}-color`];
    if (raw) {
      const parsed = parseColor(raw);
      const slot = themeSlots[`border-${side}-color`];
      if (parsed || slot) color = paint(parsed || { r: 0, g: 0, b: 0, a: 1 }, slot);
      else drop(`border-${side}-color`);
    }
  }
  if (!any) return null;
  return {
    color: color || { r: 0, g: 0, b: 0, a: 1 },
    top: weights.top || 0,
    right: weights.right || 0,
    bottom: weights.bottom || 0,
    left: weights.left || 0,
  };
}

function readRadius(css, drop) {
  const corners = {
    topLeft: "border-top-left-radius",
    topRight: "border-top-right-radius",
    bottomRight: "border-bottom-right-radius",
    bottomLeft: "border-bottom-left-radius",
  };
  const radius = {};
  let any = false;
  for (const [key, prop] of Object.entries(corners)) {
    if (css[prop] == null) continue;
    any = true;
    const token = String(css[prop]).match(/^token\(([\w-]+)\)$/);
    const percent = String(css[prop]).match(/^([0-9.]+)%$/);
    if (token) radius[key] = { token: token[1] };
    else if (percent) radius[key] = Number(percent[1]) >= 50 ? 9999 : round((Number(percent[1]) / 100) * 64);
    else {
      const px = lengthPx(css[prop]);
      if (px == null) drop(prop);
      else radius[key] = px;
    }
  }
  if (!any) return null;
  return { topLeft: 0, topRight: 0, bottomRight: 0, bottomLeft: 0, ...radius };
}

function readText(css, themeSlots, ctx, drop) {
  const text = {};
  let any = false;
  if (css.color != null && css.color !== "inherit") {
    const color = parseColor(css.color);
    if (color || themeSlots.color) {
      text.color = paint(color || { r: 0, g: 0, b: 0, a: 1 }, themeSlots.color);
      any = true;
    } else drop("color");
  }
  const family = String(css["font-family"] || "");
  const familyToken = family.match(/^token\(([\w-]+)\)$/);
  if (familyToken) {
    text.fontFamily = { token: familyToken[1] };
    any = true;
  } else if (css["font-family"]) {
    text.fontFamily = { family: family.split(",")[0].replace(/['"]/g, "").trim() };
    any = true;
  }
  if (css["font-size"]) {
    const px = pxOf(css["font-size"], ctx);
    if (px == null) drop("font-size");
    else {
      text.fontSize = px;
      any = true;
    }
  }
  if (css["font-weight"]) {
    text.fontWeight = Number(css["font-weight"]) || 400;
    any = true;
  }
  if (css["font-style"] === "italic") {
    text.italic = true;
    any = true;
  } else if (css["font-style"] && css["font-style"] !== "normal") drop("font-style");
  if (css["line-height"]) {
    const unitless = String(css["line-height"]).match(/^([0-9.]+)$/);
    if (unitless) text.lineHeight = { unit: "PERCENT", value: round(Number(unitless[1]) * 100) };
    else {
      const px = pxOf(css["line-height"], ctx);
      if (px == null) drop("line-height");
      else text.lineHeight = { unit: "PIXELS", value: px };
    }
    any = true;
  }
  if (css["letter-spacing"]) {
    const em = String(css["letter-spacing"]).match(/^(-?[0-9.]+)em$/);
    if (em) text.letterSpacing = { unit: "PERCENT", value: round(Number(em[1]) * 100) };
    else {
      const px = pxOf(css["letter-spacing"], ctx);
      if (px == null) drop("letter-spacing");
      else text.letterSpacing = { unit: "PIXELS", value: px };
    }
    any = true;
  }
  if (css["text-align"]) {
    const align = { left: "LEFT", center: "CENTER", right: "RIGHT", justify: "JUSTIFIED" }[css["text-align"]];
    if (!align) drop("text-align");
    else {
      text.textAlignHorizontal = align;
      any = true;
    }
  }
  if (css["text-transform"]) {
    const textCase = { uppercase: "UPPER", lowercase: "LOWER", capitalize: "TITLE", none: "ORIGINAL" }[css["text-transform"]];
    if (!textCase) drop("text-transform");
    else {
      text.textCase = textCase;
      any = true;
    }
  }
  if (css["text-decoration"]) {
    text.textDecoration = css["text-decoration"] === "underline" ? "UNDERLINE" : "NONE";
    any = true;
  }
  if (css["white-space"] === "nowrap") {
    text.wrap = false;
    any = true;
  } else if (css["white-space"]) text.wrap = true;
  return any ? text : null;
}

function firstCall(text, name) {
  const start = text.toLowerCase().indexOf(`${name}(`);
  if (start < 0) return null;
  let depth = 0;
  for (let i = start; i < text.length; i++) {
    if (text[i] === "(") depth += 1;
    else if (text[i] === ")") {
      depth -= 1;
      if (depth === 0) return text.slice(start, i + 1);
    }
  }
  return null;
}

function parseGradient(value, themeSlots) {
  const text = firstCall(String(value).trim(), "linear-gradient") || String(value).trim();
  const match = text.match(/^linear-gradient\((.+)\)$/i);
  if (!match) return null;
  let body = match[1];
  let angle = 180;
  const direction = body.match(/^(to\s+(top|right|bottom|left)|-?[0-9.]+deg)\s*,\s*(.*)$/i);
  if (direction) {
    const named = { top: 0, right: 90, bottom: 180, left: 270 }[direction[2]?.toLowerCase()];
    angle = named != null ? named : parseFloat(direction[1]);
    body = direction[3];
  }
  const stops = splitArgs(body).map((part, index, all) => {
    const bits = part.trim().match(/^(.*?)(?:\s+([0-9.]+)%)?$/);
    if (!bits) return null;
    const color = parseColor(bits[1].replace(/\s+-?[0-9.]+(?:px|rem)$/, "").trim());
    if (!color) return null;
    const position = bits[2] != null ? Number(bits[2]) / 100 : index / Math.max(1, all.length - 1);
    return { color, position };
  });
  if (stops.some((stop) => !stop)) return null;
  const rad = ((angle - 90) * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  return {
    type: "GRADIENT_LINEAR",
    gradientTransform: [
      [cos, sin, 0.5 - cos / 2 - sin / 2],
      [-sin, cos, 0.5 + sin / 2 - cos / 2],
    ],
    stops: stops.map((stop) => ({
      position: stop.position,
      color: themeSlots["background-image"] ? { theme: themeSlots["background-image"] } : stop.color,
    })),
  };
}

function splitArgs(text) {
  const parts = [];
  let current = "";
  let depth = 0;
  for (const char of text) {
    if (char === "(") depth += 1;
    if (char === ")") depth -= 1;
    if (char === "," && depth === 0) {
      parts.push(current);
      current = "";
      continue;
    }
    current += char;
  }
  if (current.trim()) parts.push(current);
  return parts;
}

function parseShadow(value) {
  const layers = splitArgs(String(value)).map((part) => part.replace(/\binset\b/g, "").trim()).filter(Boolean);
  for (const layer of layers) {
    const effect = parseOneShadow(layer);
    if (effect) return effect;
  }
  return null;
}

function parseOneShadow(value) {
  const text = String(value).trim();
  const colorMatch = text.match(/(rgba?\([^)]+\)|token\([\w-]+\)|#[0-9a-f]{3,8})\s*$/i);
  if (!colorMatch) return null;
  const color = parseColor(colorMatch[1]);
  if (!color) return null;
  const lengths = text.slice(0, colorMatch.index).trim().split(/\s+/).filter(Boolean).map(lengthPx);
  if (!lengths.length || lengths.some((n) => n == null)) return null;
  return {
    type: "DROP_SHADOW",
    color,
    offset: { x: lengths[0] || 0, y: lengths[1] || 0 },
    radius: lengths[2] || 0,
    spread: lengths[3] || 0,
  };
}

/** How many Figma variants a spec becomes: non-theme options × three breakpoints. */
export function figmaVariantCount(spec) {
  let count = 1;
  for (const [name, group] of Object.entries(spec?.variants || {})) {
    if (name === "theme" || group?.palette) continue;
    const options = Object.keys(group?.options || {});
    if (options.length > 1) count *= options.length;
  }
  return count * FIGMA_BREAKPOINTS.length;
}

export function figmaVariantWarning(spec) {
  const count = figmaVariantCount(spec);
  if (count <= 48) return null;
  return `${spec.id}: ${count} Figma variants exceeds 48. Split a variant group or drop one before building the component set.`;
}
