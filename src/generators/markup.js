// One tree emitter for every text-based target.
//   react   → JSX with {expressions}, className, key on list items
//   astro   → JSX-like Astro template, class
//   vanilla → JS template literal with ${esc(expressions)}
//   static  → plain HTML using the spec's default content
import { motionAttrs, defaultsOf } from "../core/resolve.js";

export const INDEX_EXPR = 'String(index + 1).padStart(2, "0")';
const ind = (d) => "  ".repeat(d);

export const escapeHtml = (s) =>
  String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const escapeTemplate = (s) => String(s).replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");

/** Look up a binding against default content: "heading", "item.title", "image.src", "@index". */
export function staticRef(ref, defaults, scope) {
  if (ref === "@index") return String(scope.index + 1).padStart(2, "0");
  const [root, ...path] = ref.split(".");
  let v = root === "item" ? scope?.item : defaults[root];
  for (const p of path) v = v?.[p];
  return v;
}

const isRef = (ref, spec) => ref === "@index" || ref.startsWith("item.") || ref.split(".")[0] in spec.props;

export function renderMarkup(spec, resolved, mode, startDepth = 0) {
  const defaults = defaultsOf(spec);
  const motion = motionAttrs(spec);
  const jsx = mode === "react" || mode === "astro";
  const classAttr = mode === "react" ? "className" : "class";

  const expr = (ref) => (ref === "@index" ? INDEX_EXPR : ref);
  const text = (ref, scope) => {
    if (mode === "static") return escapeHtml(staticRef(ref, defaults, scope));
    if (jsx) return `{${expr(ref)}}`;
    return `\${esc(${expr(ref)})}`;
  };
  const literalText = (s) => (mode === "vanilla" ? escapeTemplate(escapeHtml(s)) : jsx ? escapeHtml(s).replace(/[{}]/g, (c) => `{"${c}"}`) : escapeHtml(s));
  const attr = (name, ref, scope, fallback) => {
    if (mode === "static") return ` ${name}="${escapeHtml(staticRef(ref, defaults, scope) ?? fallback ?? "")}"`;
    const e = fallback !== undefined ? `${expr(ref)} ?? ${JSON.stringify(fallback)}` : expr(ref);
    if (jsx) return ` ${name}={${e}}`;
    return ` ${name}="\${esc(${e})}"`;
  };

  const buttonClassExpr = 'buttonClass[button.variant ?? "primary"] ?? buttonClass.primary';
  const buttons = (name, depth) => {
    const pad = ind(depth);
    if (mode === "static") {
      return defaults[name]
        .map((b) => `${pad}<a href="${escapeHtml(b.href ?? "#")}" class="${resolved.buttonChains[b.variant ?? "primary"].join(" ")}">${escapeHtml(b.title)}</a>`)
        .join("\n");
    }
    if (mode === "react") {
      return `${pad}{${name}.map((button, index) => (\n${pad}  <a key={index} href={button.href ?? "#"} className={${buttonClassExpr}}>\n${pad}    {button.title}\n${pad}  </a>\n${pad}))}`;
    }
    if (mode === "astro") {
      return `${pad}{${name}.map((button) => (\n${pad}  <a href={button.href ?? "#"} class={${buttonClassExpr}}>{button.title}</a>\n${pad}))}`;
    }
    return `${pad}\${${name}.map((button) => \`<a href="\${esc(button.href ?? "#")}" class="\${${buttonClassExpr}}">\${esc(button.title)}</a>\`).join("")}`;
  };

  const list = (node, depth) => {
    const pad = ind(depth);
    const [tpl] = node.children;
    if (mode === "static") {
      return defaults[node.repeat].map((item, index) => el(tpl, depth, { item, index }, true)).join("\n");
    }
    const inner = el(tpl, depth + 1, { dynamic: true }, true);
    if (jsx) return `${pad}{${node.repeat}.map((item, index) => (\n${inner}\n${pad}))}`;
    return `${pad}\${${node.repeat}.map((item, index) => \`\n${inner}\n${pad}\`).join("")}`;
  };

  function el(node, depth, scope = null, templateRoot = false) {
    const pad = ind(depth);
    let a = ` ${classAttr}="${node.classes.join(" ")}"`;
    if (templateRoot && mode === "react") a += " key={index}";
    if (node.decorative) a += ` aria-hidden="true"`;
    for (const [k, v] of Object.entries({ ...(motion[node.key] || {}), ...(node.attrs || {}) })) {
      a += v === "" ? ` ${k}` : ` ${k}="${escapeHtml(v)}"`;
    }

    if (node.tag === "img") {
      const prop = spec.props[node.bind];
      const eager = prop?.type === "image" && prop.priority;
      a += attr("src", `${node.bind}.src`, scope) + attr("alt", `${node.bind}.alt`, scope, "");
      a += eager ? ` loading="eager" ${mode === "react" ? "fetchPriority" : "fetchpriority"}="high"` : ` loading="lazy"`;
      a += ` decoding="async"`;
      return `${pad}<img${a}${jsx ? " />" : ">"}`;
    }
    if (node.tag === "a" && node.href) {
      a += isRef(node.href, spec) ? attr("href", node.href, scope) : ` href="${escapeHtml(node.href)}"`;
    }

    const open = `${pad}<${node.tag}${a}>`;
    const close = `</${node.tag}>`;
    if (node.bind) return `${open}${text(node.bind, scope)}${close}`;
    if (node.text !== undefined) return `${open}${literalText(node.text)}${close}`;

    const prop = node.repeat && spec.props[node.repeat];
    if (prop?.type === "buttons") return `${open}\n${buttons(node.repeat, depth + 1)}\n${pad}${close}`;
    if (prop?.type === "list") return `${open}\n${list(node, depth + 1)}\n${pad}${close}`;
    if (!node.children.length) return `${open}${close}`;
    return `${open}\n${node.children.map((c) => el(c, depth + 1, scope)).join("\n")}\n${pad}${close}`;
  }

  return el(resolved.tree, startDepth);
}
