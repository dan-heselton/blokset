const TAGS = new Set(["div", "h1", "h2", "h3", "h4", "p", "a", "img"]);
const ROLES = new Set(["section", "gutter", "container", "section-padding"]);
const SHORTHANDS = new Set(["padding", "margin", "inset", "border", "gap", "border-radius", "background", "font", "flex", "grid-column", "grid-row", "border-top", "border-bottom", "border-left", "border-right"]);

/** Returns a list of human-readable problems. Empty list = valid. */
export function validateSpec(spec) {
  const errors = [];
  const err = (m) => errors.push(m);
  for (const k of ["id", "prefix", "name", "props", "tree"]) if (!spec[k]) err(`missing "${k}"`);
  if (errors.length) return errors;
  if (spec.tree.role !== "section") err(`tree root must be { role: "section" }`);

  const keys = new Set();
  const checkStyle = (where, style) => {
    if (!style) return;
    const base = style.base || {};
    for (const bp of ["base", "md", "lg"]) {
      for (const prop of Object.keys(style[bp] || {})) {
        if (SHORTHANDS.has(prop)) err(`${where}: use longhand properties instead of "${prop}"`);
        if (bp !== "base" && !(prop in base)) err(`${where}: "${prop}" is set at ${bp} but missing from base`);
      }
    }
  };
  const checkRef = (where, ref, fields, kind = "text") => {
    if (ref === "@index") { if (!fields) err(`${where}: @index only works inside a list`); return; }
    if (ref.startsWith("item.")) {
      const f = ref.slice(5);
      if (!fields) err(`${where}: "${ref}" used outside a list`);
      else if (!fields[f]) err(`${where}: list has no field "${f}"`);
      else if (kind === "image" && fields[f] !== "image") err(`${where}: field "${f}" is not an image`);
      return;
    }
    const p = spec.props[ref];
    if (!p) err(`${where}: unknown prop "${ref}"`);
    else if (kind === "image" && p.type !== "image") err(`${where}: prop "${ref}" is not an image`);
  };

  const checkIf = (n, where, { root = false, itemTemplate = false } = {}) => {
    if (n.if == null) return;
    if (root) err(`${where}: "if" is not allowed on the section root`);
    if (itemTemplate) err(`${where}: "if" is not allowed on a list's item template; put it inside the template`);
    const name = String(n.if).startsWith("!") ? String(n.if).slice(1) : String(n.if);
    const prop = spec.props[name];
    if (!prop || prop.type !== "boolean") err(`${where}: "if" must name a boolean prop`);
  };

  const walk = (n, fields, { root = false, itemTemplate = false } = {}) => {
    const where = n.key ? `node "${n.key}"` : `role "${n.role}"`;
    checkIf(n, where, { root, itemTemplate });
    if (n.role) {
      if (!ROLES.has(n.role)) err(`${where}: unknown role`);
    } else {
      if (!TAGS.has(n.tag)) err(`${where}: unsupported tag "${n.tag}"`);
      if (!n.key) err(`an element is missing "key"`);
      if (!/^[a-z][a-z0-9-]*$/.test(n.key || "")) err(`${where}: key must be lowercase kebab-case`);
    }
    if (n.key) { if (keys.has(n.key)) err(`duplicate key "${n.key}"`); keys.add(n.key); }
    checkStyle(where, n.style);

    if (n.tag === "img") { if (!n.bind) err(`${where}: img needs bind`); else checkRef(where, n.bind, fields, "image"); }
    else if (n.bind) checkRef(where, n.bind, fields);
    if (n.tag === "a") { if (!n.href) err(`${where}: <a> needs href`); else if (n.href in spec.props || n.href.startsWith("item.")) checkRef(where, n.href, fields); }

    if (n.repeat) {
      const p = spec.props[n.repeat];
      if (!p) err(`${where}: repeat refers to unknown prop "${n.repeat}"`);
      else if (p.type === "buttons") { if (n.children?.length) err(`${where}: a buttons repeat has no children`); }
      else if (p.type === "list") {
        if (fields) err(`${where}: nested lists aren't supported`);
        if (n.children?.length !== 1) err(`${where}: a list repeat needs exactly one child (the item template)`);
        n.children?.forEach((c) => walk(c, p.fields, { itemTemplate: true }));
        return;
      } else err(`${where}: repeat must point at a buttons or list prop`);
    }
    (n.children || []).forEach((c) => walk(c, fields));
  };
  walk(spec.tree, null, { root: true });

  for (const t of ["enter", "reveal", "scroll"]) {
    for (const k of spec.motion?.[t]?.targets || []) if (!keys.has(k)) err(`motion.${t}: unknown key "${k}"`);
  }
  return errors;
}

export function assertValid(spec) {
  const errors = validateSpec(spec);
  if (errors.length) throw new Error(`Component "${spec.id}" is invalid:\n  - ${errors.join("\n  - ")}`);
}
