// Webflow clipboard payload (@webflow/XscpData). Pasting it in the Designer creates the elements and
// classes. Webflow is desktop-first (main → medium → small), so each mobile-first style is resolved
// per breakpoint and only the differences are written to smaller breakpoints.
import { createHash, randomUUID } from "node:crypto";
import { resolveComponent, motionAttrs, defaultsOf, nodeVisible, defaultSelection, nodeClasses, mapButtonVariant } from "../core/resolve.js";
import { webflowOrder } from "../core/webflow-order.js";
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

// Designer copies an image into the destination asset library only when the paste names it
// and gives a download URL. The id is a hash of the URL so the same photo stays one asset
// across pastes. A zero-byte record is skipped, so a build that measured the file also sends
// its size and dimensions. s3Url is what Designer fetches when the asset is not already on
// the destination site; without it the image element pastes and the file never lands in Assets.
const ASSET_SITE = "000000000000000000000000";
const ASSET_STAMP = "2020-01-01T00:00:00.000Z";

function assetId(url) {
  return createHash("sha256").update(url).digest("hex").slice(0, 24);
}

function assetFile(url) {
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return { mimeType: "image/jpeg", origFileName: "image.jpg" };
  }
  const parts = parsed.pathname.split("/").filter(Boolean);
  const last = parts.at(-1) || "";
  const named = last.match(/\.(jpe?g|png|webp|gif|svg)$/i)?.[1]?.toLowerCase();
  const format = named || parts.find((part) => /^(png|jpe?g|webp|gif|svg)$/i.test(part))?.toLowerCase() || "jpg";
  const ext = format === "jpeg" ? "jpg" : format;
  const mimeType = {
    jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", webp: "image/webp", gif: "image/gif", svg: "image/svg+xml",
  }[format] || "image/jpeg";
  let stem = last.replace(/\.(jpe?g|png|webp|gif|svg)$/i, "");
  if (!stem || /^(png|jpe?g|webp|gif|svg)$/i.test(stem)) {
    stem = (parsed.searchParams.get("text") || "image").replace(/[^\w.-]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
  }
  return { mimeType, origFileName: `${stem || "image"}.${ext}` };
}

function assetRecord(url, meta) {
  const id = assetId(url);
  const file = assetFile(url);
  const record = {
    _id: id,
    cdnUrl: url,
    s3Url: url,
    siteId: ASSET_SITE,
    origFileName: file.origFileName,
    fileName: `${id}_${file.origFileName}`,
    mimeType: meta?.mimeType || file.mimeType,
    fileSize: meta?.fileSize || 0,
    createdOn: ASSET_STAMP,
    updatedOn: ASSET_STAMP,
    thumbUrl: url,
    variants: [],
    isHD: false,
    translationLoading: false,
    isFromWellKnownFolder: false,
    localizedSettings: {},
  };
  if (meta?.alt) record.alt = meta.alt;
  if (meta?.width && meta?.height) {
    record.width = meta.width;
    record.height = meta.height;
  }
  if (meta?.fileHash) record.fileHash = meta.fileHash;
  return record;
}

export function generateWebflow(spec, ctx, resolved = resolveComponent(spec, ctx), options = {}) {
  const { tokens } = ctx;
  const fonts = ctx.config.webflow?.fonts || {};
  const synced = ctx.config.webflow?.styles || {};
  const cssValue = (value) => {
    if (value && typeof value === "object" && value.id) return `@var_${value.id}`;
    const bound = tokens.webflow(value);
    if (bound && typeof bound === "object" && bound.id) return `@var_${bound.id}`;
    return String(bound);
  };
  const withoutUnmappedFont = (props) => {
    const next = {};
    for (const [key, value] of Object.entries(props || {})) {
      if (key !== "font-family") {
        next[key] = value;
        continue;
      }
      const token = String(value).match(/^token\(([\w-]+)\)$/)?.[1];
      if (token && tokens.entries[token]?.webflow) next[key] = value;
      else if (token && fonts[token]) next[key] = fonts[token];
    }
    return next;
  };
  const toStyleLess = (props, ordered) =>
    Object.entries(ordered ? webflowOrder(props) : props).map(([key, value]) => `${key}: ${cssValue(value)};`).join(" ");
  const breakpointStyles = (style = { base: {} }) => {
    const mobileRaw = { ...(style.base || {}) };
    const tabletRaw = { ...mobileRaw, ...(style.md || {}) };
    const desktopRaw = { ...tabletRaw, ...(style.lg || {}) };
    const mobile = withoutUnmappedFont(mobileRaw);
    const tablet = withoutUnmappedFont(tabletRaw);
    const desktop = withoutUnmappedFont(desktopRaw);
    const variants = {};
    const medium = diff(tablet, desktop);
    const small = diff(mobile, tablet);
    if (Object.keys(medium).length) variants.medium = { styleLess: toStyleLess(medium, true) };
    if (Object.keys(small).length) variants.small = { styleLess: toStyleLess(small, true) };
    return { styleLess: toStyleLess(desktop, true), variants };
  };
  const storedStyles = (stored) => {
    const variants = {};
    for (const breakpoint of ["medium", "small", "tiny"]) {
      if (stored[breakpoint] && Object.keys(stored[breakpoint]).length) {
        variants[breakpoint] = { styleLess: toStyleLess(stored[breakpoint], false) };
      }
    }
    return { styleLess: toStyleLess(stored.main || {}, false), variants };
  };
  const defaults = { ...defaultsOf(spec), ...(options.values || {}) };
  const selection = { ...defaultSelection(spec), ...(options.selection || {}) };

  // ---- Styles: every class chain gets a record; combos are children of their parent chain ----
  const styles = [];
  const chainId = new Map();
  const ensureChain = (chain, style) => {
    const key = chain.join(".");
    const stored = synced[key];
    if (chainId.has(key)) {
      if (!stored && style) Object.assign(styles.find((s) => s._id === chainId.get(key)), breakpointStyles(style));
      return chainId.get(key);
    }
    const parentId = chain.length > 1 ? ensureChain(chain.slice(0, -1)) : null;
    const s = {
      _id: randomUUID(), fake: false, type: "class", name: chain.at(-1), namespace: "",
      comb: chain.length > 1 ? "&" : "", ...(stored ? storedStyles(stored) : breakpointStyles(style)), children: [], selector: null,
    };
    styles.push(s);
    chainId.set(key, s._id);
    if (parentId) styles.find((p) => p._id === parentId).children.push(s._id);
    return s._id;
  };
  // Styles are created only for chains a pasted element actually uses.
  const byChain = new Map(resolved.rules.map((rule) => [rule.classes.join("."), rule.style]));
  const styleFor = (chain) => byChain.get(chain.join(".")) || (chain.length > 2 ? byChain.get(`${chain[0]}.${chain.at(-1)}`) : undefined);
  const classIds = (chain) => {
    for (let i = 0; i < chain.length; i++) ensureChain(chain.slice(0, i + 1), styleFor(chain.slice(0, i + 1)));
    return chain.map((_, i) => chainId.get(chain.slice(0, i + 1).join(".")));
  };

  // ---- Nodes ----
  const nodes = [];
  const assets = [];
  const assetByUrl = new Map();
  const claim = (src, alt) => {
    if (typeof src !== "string" || !src) return "";
    const existing = assetByUrl.get(src);
    if (existing) return existing;
    const asset = assetRecord(src, { ...ctx.demoImages?.get(src), alt });
    assetByUrl.set(src, asset._id);
    assets.push(asset);
    return asset._id;
  };
  const motion = motionAttrs(spec);
  const textNode = (v) => {
    const id = randomUUID();
    nodes.push({ _id: id, text: true, v: String(v ?? "") });
    return id;
  };
  const xattr = (n, scope) => [
    ...Object.entries({ ...(motion[n.key] || {}), ...(n.attrs || {}) }).map(([name, value]) => {
      const resolved = typeof value === "string" && value.startsWith("=") ? String(staticRef(value.slice(1), defaults, scope) ?? "") : value;
      if (name === "data-blok-src") claim(resolved);
      return { name, value: resolved };
    }),
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
          img: { id: claim(img.src, img.alt) }, srcsetDisabled: false, sizes: [], xattr: xattr(n, scope),
        },
      });
      return id;
    }

    let el;
    if (n.tag === "a") {
      const hasElements = n.children.length > 0 || n.repeat;
      el = { ...base, type: "Link", data: { block: hasElements ? "block" : "", button: false, link: { mode: "external", url: hrefOf(n, scope) }, xattr: xattr(n, scope) } };
    } else {
      const t = TYPE[n.tag];
      if (!t) throw new Error(`No Webflow mapping for <${n.tag}>`);
      el = { ...base, type: t.type, data: { ...t.data, xattr: xattr(n, scope) } };
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
    payload: { nodes, styles, assets, ix1: [], ix2: { interactions: [], events: [], actionLists: [] } },
    meta: { unlinkedSymbolCount: 0, droppedLinks: 0, dynBindRemovedCount: 0, dynListBindRemovedCount: 0, paginationRemovedCount: 0 },
  };
}
