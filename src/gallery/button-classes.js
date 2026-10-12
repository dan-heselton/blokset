// Rewrites baked button class names in gallery copy and preview.
// Roles stay primary / dark / secondary / secondary-alt so theme remaps keep working.

export const BUTTON_ROLES = [
  { id: "primary", label: "Primary" },
  { id: "dark", label: "Dark" },
  { id: "secondary", label: "Secondary" },
  { id: "secondary-alt", label: "On inverse" },
];

const ROLE_IDS = BUTTON_ROLES.map((role) => role.id);

const chainKey = (chain) => (chain || []).join(".");
const chainText = (chain) => (chain || []).join(" ");

function pairs(from, to) {
  return ROLE_IDS.map((role) => ({
    from: chainText(from[role]),
    to: chainText(to[role]),
  }))
    .filter((pair) => pair.from && pair.from !== pair.to)
    .sort((a, b) => b.from.length - a.from.length);
}

/** Replace the `buttonClass` object in React, Astro, and vanilla output. */
export function replaceButtonClassMap(source, to) {
  if (!source) return source;
  const map = Object.fromEntries(ROLE_IDS.map((role) => [role, chainText(to[role])]));
  const printed = JSON.stringify(map, null, 2);
  return source.replace(/const buttonClass\b[\s\S]*?=\s*\{[\s\S]*?\n\}/, (match) => {
    const lead = match.slice(0, match.indexOf("=") + 1);
    return `${lead} ${printed}`;
  });
}

/** Replace exact button class attributes. Longer chains first so `button` does not eat `button is-dark`. */
export function replaceHtmlClasses(html, from, to) {
  if (!html) return html;
  let next = html;
  for (const pair of pairs(from, to)) {
    next = next.split(`class="${pair.from}"`).join(`class="${pair.to}"`);
  }
  return next;
}

/** Same replacement on a live preview subtree. */
export function rewritePreviewClasses(root, from, to) {
  if (!root) return;
  const list = pairs(from, to);
  root.querySelectorAll("[class]").forEach((el) => {
    const current = el.getAttribute("class");
    for (const pair of list) {
      if (current === pair.from) {
        el.setAttribute("class", pair.to);
        break;
      }
    }
  });
}

const indentBody = (body) =>
  String(body || "")
    .split("\n")
    .filter((line) => line.trim())
    .map((line) => (line.startsWith("  ") ? line : `  ${line}`))
    .join("\n");

/** Preview CSS for the edited chains. The checkbox does not use this; the preview stays styled. */
export function previewButtonCss(parts, chains) {
  if (!parts) return "";
  const blocks = [];
  const seen = new Set();
  for (const role of ROLE_IDS) {
    const first = chains[role]?.[0];
    if (!first || seen.has(first) || !parts.base) continue;
    seen.add(first);
    blocks.push(`.${first} {\n${indentBody(parts.base)}\n}`);
  }
  for (const role of ROLE_IDS) {
    const chain = chains[role] || [];
    if (chain.length < 2 || !parts.variants?.[role]) continue;
    blocks.push(`${chain.map((name) => `.${name}`).join("")} {\n${indentBody(parts.variants[role])}\n}`);
  }
  return blocks.join("\n");
}

const emptyStyle = () => ({ styleLess: "", variants: {} });

function levelStyle(update, index, chain, shipStyles, synced) {
  const sourceIndex = index === 0 ? 0 : index === chain.length - 1 && chain.length > 1 && update.names.length > 1 ? update.names.length - 1 : -1;
  if (sourceIndex < 0) return emptyStyle();
  const sourceKey = update.names.slice(0, sourceIndex + 1).join(".");
  if (!shipStyles && !synced.has(sourceKey)) return emptyStyle();
  const record = update.records[sourceIndex] || {};
  return {
    styleLess: record.styleLess || "",
    variants: record.variants ? structuredClone(record.variants) : {},
  };
}

/** Rebuild Webflow button combo chains. Synced chains keep their stored styles when Blokset styles are off. */
export function rewriteWebflow(serialized, { from, to, shipStyles, synced }) {
  if (!serialized) return serialized;
  const data = JSON.parse(serialized);
  const styles = data.payload.styles || [];
  const byId = new Map(styles.map((style) => [style._id, style]));
  const buttonIds = new Set();
  const updates = [];
  for (const node of data.payload.nodes || []) {
    if (!node.data?.button) continue;
    const names = (node.classes || []).map((id) => byId.get(id)?.name).filter(Boolean);
    const role = ROLE_IDS.find((id) => chainKey(from[id]) === names.join("."));
    if (!role) continue;
    node.classes.forEach((id) => buttonIds.add(id));
    updates.push({ node, names, role, records: node.classes.map((id) => byId.get(id)) });
  }
  data.payload.styles = styles.filter((style) => !buttonIds.has(style._id));
  for (const style of data.payload.styles) {
    if (style.children) style.children = style.children.filter((id) => !buttonIds.has(id));
  }
  const created = new Map();
  const keep = new Set(synced || []);
  const ensure = (chain, update) => {
    const ids = [];
    for (let i = 0; i < chain.length; i++) {
      const key = chain.slice(0, i + 1).join(".");
      if (!created.has(key)) {
        const id = globalThis.crypto.randomUUID();
        const record = {
          _id: id,
          fake: false,
          type: "class",
          name: chain[i],
          namespace: "",
          comb: i > 0 ? "&" : "",
          ...levelStyle(update, i, chain, shipStyles, keep),
          children: [],
          selector: null,
        };
        data.payload.styles.push(record);
        created.set(key, record);
        if (i > 0) created.get(chain.slice(0, i).join(".")).children.push(id);
      }
      ids.push(created.get(key)._id);
    }
    return ids;
  };
  for (const update of updates) update.node.classes = ensure(to[update.role] || [], update);
  return JSON.stringify(data);
}

export function applyButtonClasses(bundle, options) {
  return {
    ...bundle,
    react: replaceButtonClassMap(bundle.react, options.to),
    astro: replaceButtonClassMap(bundle.astro, options.to),
    vanilla: replaceButtonClassMap(bundle.vanilla, options.to),
    html: replaceHtmlClasses(bundle.html, options.from, options.to),
    webflow: rewriteWebflow(bundle.webflow, options),
  };
}
