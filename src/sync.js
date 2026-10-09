// Turn a Webflow `get_styles` export into a class snapshot Blokset can paste back verbatim.

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
    variables: {
      ...variablesFromExport(input && !Array.isArray(input) ? input.variables : undefined),
      ...variablesFromExport(options.variables),
    },
  };
}

function variableRecords(input) {
  if (!input) return [];
  if (Array.isArray(input)) return input;
  if (Array.isArray(input.variables)) return input.variables;
  if (Array.isArray(input.result)) return input.result;
  return [];
}

/** Name → `{ id, type }` from a variables export, a `variables` array, or an existing name map. */
export function variablesFromExport(input) {
  if (!input || typeof input !== "object") return {};
  const listed = variableRecords(input);
  if (listed.length || Array.isArray(input) || Array.isArray(input.variables) || Array.isArray(input.result)) {
    const variables = {};
    for (const item of listed) {
      if (!item || typeof item !== "object") continue;
      if (item.selector || item.selector_name || item.properties || item.style_name || item.main) continue;
      const name = item.name || item.variable_name;
      const id = item.id || item.variable_id || item._id;
      if (!name || !id) continue;
      variables[String(name)] = { id: String(id), type: String(item.type || item.variable_type || "") };
    }
    return variables;
  }
  const variables = {};
  for (const [name, value] of Object.entries(input)) {
    if (value && typeof value === "object" && value.id && !value.main) {
      variables[name] = { id: String(value.id), type: String(value.type || "") };
    }
  }
  return variables;
}

/**
 * Resolve `token.webflow` names against a site variable map.
 * A name becomes that variable's id. An id already in the map is kept.
 * With no variables loaded, the string is used as an id.
 * @param {Record<string, string | { value?: string, css?: string, webflow?: string }>} tokens
 * @param {Record<string, { id: string }>} [variables]
 */
export function bindTokenVariables(tokens = {}, variables = {}) {
  const known = Object.values(variables);
  const next = {};
  for (const [name, raw] of Object.entries(tokens)) {
    if (!raw || typeof raw !== "object" || !raw.webflow) {
      next[name] = raw;
      continue;
    }
    const ref = String(raw.webflow);
    if (variables[ref]?.id) next[name] = { ...raw, webflow: variables[ref].id };
    else if (known.some((item) => item.id === ref) || known.length === 0) next[name] = { ...raw, webflow: ref };
    else throw new Error(`Webflow variable "${ref}" for token "${name}" was not in the site snapshot.`);
  }
  return next;
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
