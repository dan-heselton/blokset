// Turn a Webflow `get_styles` export into a class snapshot Forge can paste back verbatim.

const BREAKPOINTS = ["medium", "small", "tiny"];

function styleList(input) {
  if (Array.isArray(input)) return input;
  if (Array.isArray(input?.result)) return input.result;
  if (Array.isArray(input?.styles)) return input.styles;
  throw new Error("Expected a get_styles array, or { result: [...] }.");
}

function chainKey(style) {
  const selector = style.selector || style.selector_name || "";
  if (selector) return String(selector).replace(/^\./, "").split(".").filter(Boolean).join(".");
  const parents = style.parent_style_names || style.parents || [];
  const name = style.name || style.style_name;
  return [...parents, name].filter(Boolean).join(".");
}

/** Keep property order. Arrays from the API become an object; variable refs stay `{ id }`. */
function asProps(value) {
  if (!value) return null;
  const source = value.properties || value.props || value;
  if (Array.isArray(source)) {
    const props = {};
    for (const item of source) {
      const name = item.property_name || item.name;
      if (!name) continue;
      if (item.variable_as_value) props[name] = { id: item.variable_as_value };
      else if (item.property_value && typeof item.property_value === "object" && item.property_value.id) props[name] = item.property_value;
      else props[name] = item.property_value ?? item.value ?? "";
    }
    return props;
  }
  if (source && typeof source === "object") return { ...source };
  return null;
}

function breakpointProps(style, id) {
  const block = style.breakpoints?.[id];
  if (!block) return null;
  return asProps(block.properties ? block : block);
}

/**
 * @param {unknown[] | { result?: unknown[], site?: string }} input
 * @param {{ site?: string }} [options]
 */
export function snapshotFromExport(input, options = {}) {
  const styles = {};
  for (const style of styleList(input)) {
    const key = chainKey(style);
    if (!key) continue;
    const main = breakpointProps(style, "main") || asProps(style.properties) || asProps(style.base) || {};
    const record = { main };
    for (const id of BREAKPOINTS) {
      const props = breakpointProps(style, id);
      if (props) record[id] = props;
    }
    styles[key] = record;
  }
  return {
    site: options.site || input?.site || "",
    createdAt: new Date().toISOString(),
    count: Object.keys(styles).length,
    styles,
  };
}

/** Chain keys in a clipboard payload, parent first (`section_features12.is-dark`). */
export function payloadChains(payload) {
  const byId = Object.fromEntries(payload.styles.map((style) => [style._id, style]));
  const childIds = new Set(payload.styles.flatMap((style) => style.children));
  const chains = [];
  const walk = (style, prefix) => {
    const chain = [...prefix, style.name];
    chains.push(chain.join("."));
    for (const id of style.children) if (byId[id]) walk(byId[id], chain);
  };
  for (const style of payload.styles) if (!childIds.has(style._id)) walk(style, []);
  return chains;
}

/** How many pasted class chains already exist in a site snapshot. */
export function reuseCounts(payload, styles = {}) {
  const chains = payloadChains(payload);
  const reused = chains.filter((chain) => styles[chain]).length;
  return { reused, fresh: chains.length - reused, total: chains.length };
}
