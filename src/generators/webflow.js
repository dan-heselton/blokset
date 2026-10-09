// Webflow clipboard payload (@webflow/XscpData). Pasting it in the Designer creates the elements and
// classes. Webflow is desktop-first (main → medium → small), so each mobile-first style is resolved
// per breakpoint and only the differences are written to smaller breakpoints.
import { randomUUID } from "node:crypto";
import { resolveComponent, motionAttrs, defaultsOf, nodeVisible, defaultSelection, nodeClasses, mapButtonVariant } from "../core/resolve.js";
import { staticRef } from "./markup.js";

const TYPE = {
  section: { type: "Section", data: { tag: "section", grid: { active: false, type: "section" } } },
  div: { type: "Block", data: { tag: "div", text: false } },
  h1: { type: "Heading", data: { tag: "h1" } },
  h2: { type: "Heading", data: { tag: "h2" } },
  h3: { type: "Heading", data: { tag: "h3" } },
  h4: { type: "Heading", data: { tag: "h4" } },
  p: { type: "Paragraph", data: {} },
};

const diff = (next, prev) => Object.fromEntries(Object.entries(next).filter(([k, v]) => prev[k] !== v));

export function generateWebflow(spec, ctx, resolved = resolveComponent(spec, ctx), options = {}) {
  const { tokens } = ctx;
  const toStyleLess = (obj) => Object.entries(obj).map(([k, v]) => `${k}: ${tokens.literal(v)};`).join(" ");
  const breakpointStyles = (style = { base: {} }) => {
    const mobile = { ...style.base };
    const tablet = { ...mobile, ...(style.md || {}) };
    const desktop = { ...tablet, ...(style.lg || {}) };
    const variants = {};
    const medium = diff(tablet, desktop);
    const small = diff(mobile, tablet);
    if (Object.keys(medium).length) variants.medium = { styleLess: toStyleLess(medium) };
    if (Object.keys(small).length) variants.small = { styleLess: toStyleLess(small) };
    return { styleLess: toStyleLess(desktop), variants };
  };
  const defaults = { ...defaultsOf(spec), ...(options.values || {}) };
  const selection = { ...defaultSelection(spec), ...(options.selection || {}) };

  // ---- Styles: every class chain gets a record; combos are children of their parent chain ----
  const styles = [];
  const chainId = new Map();
  const ensureChain = (chain, style) => {
    const key = chain.join(".");
    if (chainId.has(key)) {
      if (style) Object.assign(styles.find((s) => s._id === chainId.get(key)), breakpointStyles(style));
      return chainId.get(key);
    }
    const parentId = chain.length > 1 ? ensureChain(chain.slice(0, -1)) : null;
    const s = {
      _id: randomUUID(), fake: false, type: "class", name: chain.at(-1), namespace: "",
      comb: chain.length > 1 ? "&" : "", ...breakpointStyles(style), children: [], selector: null,
    };
    styles.push(s);
    chainId.set(key, s._id);
    if (parentId) styles.find((p) => p._id === parentId).children.push(s._id);
    return s._id;
  };
  // Only button variants this component actually uses.
  const usedChains = new Set();
  for (const [name, p] of Object.entries(spec.props)) {
    if (p.type === "buttons") {
      for (const b of defaults[name] || []) usedChains.add(resolved.buttonChains[mapButtonVariant(resolved, selection, b.variant)].join("."));
    }
  }
  for (const r of resolved.rules) {
    if (r.kind === "button-variant" && !usedChains.has(r.classes.join("."))) continue;
    ensureChain(r.classes, r.style);
  }
  const variantStyle = (base, mod) => resolved.rules.find((r) => r.kind === "variant" && r.classes[0] === base && r.classes[1] === mod)?.style;
  const classIds = (chain) => {
    for (let i = 0; i < chain.length; i++) {
      const part = chain.slice(0, i + 1);
      ensureChain(part, i === 0 ? undefined : variantStyle(chain[0], part[i]));
    }
    return chain.map((_, i) => chainId.get(chain.slice(0, i + 1).join(".")));
  };

  // ---- Nodes ----
  const nodes = [];
  const motion = motionAttrs(spec);
  const textNode = (v) => {
    const id = randomUUID();
    nodes.push({ _id: id, text: true, v: String(v ?? "") });
    return id;
  };
  const xattr = (n) => [
    ...Object.entries({ ...(motion[n.key] || {}), ...(n.attrs || {}) }).map(([name, value]) => ({ name, value })),
    ...(n.decorative ? [{ name: "aria-hidden", value: "true" }] : []),
  ];
  const hrefOf = (n, scope) =>
    n.href.startsWith("item.") || n.href.split(".")[0] in spec.props ? staticRef(n.href, defaults, scope) : n.href;

  function build(n, scope = null) {
    if (!nodeVisible(n, defaults)) return null;
    const id = randomUUID();
    const base = { _id: id, tag: n.tag, classes: classIds(nodeClasses(n, selection)), children: [] };

    if (n.tag === "img") {
      const img = staticRef(n.bind, defaults, scope) || {};
      const prop = spec.props[n.bind];
      nodes.push({
        ...base, type: "Image",
        data: {
          attr: { src: img.src, alt: img.alt ?? "", loading: prop?.priority ? "eager" : "lazy", width: "auto", height: "auto" },
          img: { id: "" }, srcsetDisabled: false, sizes: [], xattr: xattr(n),
        },
      });
      return id;
    }

    let el;
    if (n.tag === "a") {
      const hasElements = n.children.length > 0 || n.repeat;
      el = { ...base, type: "Link", data: { block: hasElements ? "block" : "", button: false, link: { mode: "external", url: hrefOf(n, scope) }, xattr: xattr(n) } };
    } else {
      const t = TYPE[n.tag];
      if (!t) throw new Error(`No Webflow mapping for <${n.tag}>`);
      el = { ...base, type: t.type, data: { ...t.data, xattr: xattr(n) } };
      if (n.tag === "div" && (n.bind || n.text !== undefined)) el.data.text = true;
    }

    if (n.bind) el.children.push(textNode(staticRef(n.bind, defaults, scope)));
    else if (n.text !== undefined) el.children.push(textNode(n.text));

    const prop = n.repeat && spec.props[n.repeat];
    if (prop?.type === "buttons") {
      for (const b of defaults[n.repeat]) {
        const bid = randomUUID();
        nodes.push({
          _id: bid, type: "Link", tag: "a",
          classes: classIds(resolved.buttonChains[mapButtonVariant(resolved, selection, b.variant)]),
          children: [textNode(b.title)],
          data: { button: true, block: "", link: { mode: "external", url: b.href ?? "#" } },
        });
        el.children.push(bid);
      }
    } else if (prop?.type === "list") {
      defaults[n.repeat].forEach((item, index) => {
        const child = build(n.children[0], { item, index });
        if (child) el.children.push(child);
      });
    } else {
      n.children.forEach((c) => {
        const child = build(c, scope);
        if (child) el.children.push(child);
      });
    }
    nodes.push(el);
    return id;
  }

  const rootId = build(resolved.tree);
  nodes.sort((a, b) => (a._id === rootId ? -1 : b._id === rootId ? 1 : 0));

  return {
    type: "@webflow/XscpData",
    payload: { nodes, styles, assets: [], ix1: [], ix2: { interactions: [], events: [], actionLists: [] } },
    meta: { unlinkedSymbolCount: 0, droppedLinks: 0, dynBindRemovedCount: 0, dynListBindRemovedCount: 0, paginationRemovedCount: 0 },
  };
}
