// Webflow component manifests for a later native-component pass.
// Clipboard JSON still builds the paste; this file describes props, bindings, and variant styles.
import { resolveComponent } from "../core/resolve.js";

const diff = (next, prev) => Object.fromEntries(Object.entries(next).filter(([k, v]) => prev[k] !== v));

function variableType(name, value) {
  const text = String(value);
  if (name.startsWith("font-") || /font-family|monospace|sans-serif|serif|system-ui/.test(text)) return "FontFamily";
  if (/^(#|rgba?\(|hsla?\()/i.test(text.trim())) return "Color";
  return "Size";
}

function classFor(spec, framework, key) {
  if (key === "section") return framework.sectionClass(spec.prefix);
  return framework.elementClass(spec.prefix, key);
}

/** Element bindings for content props: text, image, link, visibility, buttons. */
function bindings(spec) {
  const found = [];
  const walk = (node) => {
    const bind = node.bind;
    if (bind && bind !== "@index" && !String(bind).startsWith("item.")) {
      const kind = node.tag === "img" ? "image" : node.tag === "a" && node.href === bind ? "link" : "text";
      found.push({ prop: bind, key: node.key, kind });
    }
    if (node.href && node.href in spec.props) found.push({ prop: node.href, key: node.key, kind: "link" });
    if (node.repeat && spec.props[node.repeat]?.type === "buttons") found.push({ prop: node.repeat, key: node.key, kind: "buttons" });
    if (node.if) {
      const invert = String(node.if).startsWith("!");
      found.push({ prop: invert ? String(node.if).slice(1) : String(node.if), key: node.key, kind: "visibility" });
    }
    for (const child of node.children || []) walk(child);
  };
  walk(spec.tree);
  return found;
}

function bindsTo(rows, framework, spec) {
  return rows.map((row) => ({ element: classFor(spec, framework, row.key), kind: row.kind }));
}

function variantStyles(spec, ctx, group, option, opt) {
  if (!opt?.styles) return [];
  const { framework, tokens } = ctx;
  const styles = [];
  for (const [key, style] of Object.entries(opt.styles)) {
    const elementClass = classFor(spec, framework, key);
    const mod = framework.variantClass({ prefix: spec.prefix, key, elementClass, group, option });
    const mobile = { ...(style.base || {}) };
    const tablet = { ...mobile, ...(style.md || {}) };
    const desktop = { ...tablet, ...(style.lg || {}) };
    const levels = [
      ["main", desktop],
      ["medium", diff(tablet, desktop)],
      ["small", diff(mobile, tablet)],
    ];
    for (const [breakpoint_id, props] of levels) {
      if (!Object.keys(props).length) continue;
      const print = (value) => {
        const bound = tokens.webflow(value);
        return bound && typeof bound === "object" && bound.id ? `@var_${bound.id}` : String(bound);
      };
      const properties = Object.fromEntries(Object.entries(props).map(([name, value]) => [name, print(value)]));
      styles.push({ style_name: `${elementClass}.${mod}`, breakpoint_id, properties });
    }
  }
  return styles;
}

/**
 * One component's native-component manifest.
 * List props are unsupported (a CMS Collection List). Buttons expand into text, link, and visibility.
 */
export function componentManifest(spec, ctx, resolved = resolveComponent(spec, ctx)) {
  const found = bindings(spec);
  const props = [];
  const unsupported = [];
  const buttonKeys = new Set(found.filter((row) => row.kind === "buttons").map((row) => row.key));

  for (const [name, prop] of Object.entries(spec.props)) {
    const rows = found.filter((row) => row.prop === name);
    if (prop.type === "list") {
      unsupported.push({ prop: name, name, type: "list", note: "Use a CMS Collection List." });
      continue;
    }
    if (prop.type === "boolean") {
      const visibility = rows.filter((row) => row.kind === "visibility");
      props.push({
        prop: name,
        name,
        type: "boolean",
        label: visibility.some((row) => buttonKeys.has(row.key)) ? "Show Buttons" : prop.description,
        default: prop.default,
        trueLabel: "Show",
        falseLabel: "Hide",
        description: prop.description,
        bindsTo: bindsTo(visibility, ctx.framework, spec),
      });
      continue;
    }
    if (prop.type === "image") {
      const images = rows.filter((row) => row.kind === "image");
      props.push({
        prop: name,
        name,
        type: "image",
        default: prop.default?.src ?? "",
        description: prop.description,
        bindsTo: bindsTo(images, ctx.framework, spec),
      });
      props.push({
        prop: name,
        name: `${name}Alt`,
        type: "altText",
        default: prop.default?.alt ?? "",
        description: prop.description ? `${prop.description} Alt text.` : "Alt text.",
        bindsTo: bindsTo(images, ctx.framework, spec),
      });
      continue;
    }
    if (prop.type === "buttons") {
      const host = rows.find((row) => row.kind === "buttons");
      const alreadyToggled = found.some((row) => row.kind === "visibility" && row.key === host?.key);
      if (!alreadyToggled) {
        props.push({
          prop: name,
          name: "showButtons",
          type: "boolean",
          label: "Show Buttons",
          default: true,
          trueLabel: "Show",
          falseLabel: "Hide",
          bindsTo: host ? bindsTo([host], ctx.framework, spec).map((row) => ({ ...row, kind: "visibility" })) : [],
        });
      }
      prop.default.forEach((button, index) => {
        const n = index + 1;
        const element = host ? classFor(spec, ctx.framework, host.key) : undefined;
        props.push({
          prop: name,
          name: `${name}${n}Text`,
          type: "textContent",
          label: `Button ${n}`,
          default: button.title,
          bindsTo: element ? [{ element, kind: "text" }] : [],
        });
        props.push({
          prop: name,
          name: `${name}${n}Link`,
          type: "link",
          label: `Button ${n} link`,
          default: button.href ?? "#",
          bindsTo: element ? [{ element, kind: "link" }] : [],
        });
      });
      continue;
    }
    const kind = prop.type === "link" ? "link" : "text";
    props.push({
      prop: name,
      name,
      type: prop.type === "link" ? "link" : "textContent",
      default: prop.default,
      description: prop.description,
      bindsTo: bindsTo(rows.filter((row) => row.kind === kind || (kind === "text" && row.kind === "text")), ctx.framework, spec),
    });
  }

  const variants = [];
  for (const [group, def] of Object.entries(spec.variants || {})) {
    for (const [option, opt] of Object.entries(def.options)) {
      variants.push({
        group,
        option,
        label: opt?.label || def.label,
        styles: variantStyles(spec, ctx, group, option, opt),
      });
    }
  }

  return { id: spec.id, name: spec.name, props, unsupported, variants };
}

/** Design tokens as a Webflow variable collection. */
export function variablesManifest(ctx) {
  return {
    collection: "Blokset",
    variables: Object.entries(ctx.tokens.entries).map(([name, token]) => ({
      name,
      type: variableType(name, token.value),
      value: token.value,
      ...(token.webflow ? { id: token.webflow } : {}),
    })),
  };
}
