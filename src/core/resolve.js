// Turns a spec + framework profile + project config into concrete elements and style rules.
import { button as buttonPrimitive } from "./primitives.js";
import { assertValid } from "./validate.js";

/**
 * rules: [{ classes: string[], style, kind: "utility" | "button" | "button-variant" | "component" }]
 * A rule with several classes is a combo chain (".button.is-dark").
 */
export function resolveComponent(spec, ctx) {
  assertValid(spec);
  const { framework: fw, config } = ctx;
  const utilities = allUtilities(ctx);
  const rules = [];
  const seen = new Set();
  const addRule = (classes, style, kind, extra = {}) => {
    const id = classes.join(".");
    if (seen.has(id)) return;
    seen.add(id);
    rules.push({ classes, style, kind, ...extra });
  };

  const toNode = (n) => {
    let cls;
    let style = n.style;
    let kind = "component";
    let tag = n.tag || "div";
    if (n.role === "section") {
      tag = "section";
      cls = fw.sectionClass(spec.prefix);
    } else if (n.role) {
      const r = fw.roles[n.role](n.size, spec.prefix);
      if (typeof r === "string") {
        cls = r;
        style = utilities[r];
        kind = "utility";
        if (!style) throw new Error(`${fw.name}: no utility styles defined for "${r}"`);
      } else {
        cls = r.class;
        style = r.style;
      }
    } else {
      cls = fw.elementClass(spec.prefix, n.key);
    }
    if (style) addRule([cls], style, kind);
    return {
      tag,
      key: n.key ?? n.role,
      classes: [cls],
      bind: n.bind,
      text: n.text,
      href: n.href,
      repeat: n.repeat,
      decorative: n.decorative,
      attrs: n.attrs,
      if: n.if,
      children: (n.children || []).map(toNode),
    };
  };
  const tree = toNode(spec.tree);

  const buttons = resolveButtons(ctx);
  if (usesButtons(spec) && buttons.styles !== "none") {
    for (const r of buttonRules(buttons)) addRule(r.classes, r.style, r.kind, { variant: r.variant });
  }

  const byKey = new Map();
  const index = (specNode, resolvedNode, isRoot) => {
    if (isRoot) byKey.set("section", resolvedNode);
    (specNode.children || []).forEach((child, i) => index(child, resolvedNode.children[i], false));
    if (isRoot) {
      if (specNode.key && specNode.key !== "section" && !byKey.has(specNode.key)) byKey.set(specNode.key, resolvedNode);
    } else if (specNode.key) byKey.set(specNode.key, resolvedNode);
  };
  index(spec.tree, tree, true);

  const buttonMaps = {};
  if (!fw.variantClass && spec.variants && Object.keys(spec.variants).length) {
    throw new Error(`${fw.name}: framework profile is missing variantClass()`);
  }
  for (const [group, def] of Object.entries(spec.variants || {})) {
    for (const [option, opt] of Object.entries(def.options)) {
      if (!opt) continue;
      if (opt.buttons) {
        buttonMaps[group] ??= {};
        buttonMaps[group][option] = opt.buttons;
      }
      for (const [key, style] of Object.entries(opt.styles || {})) {
        const node = key === "section" ? tree : byKey.get(key);
        if (!node) throw new Error(`${spec.id}: variant ${group}.${option} styles unknown key "${key}"`);
        const elementClass = node.classes[0];
        const modClass = fw.variantClass({ prefix: spec.prefix, key: node.key, elementClass, group, option });
        node.mods ??= {};
        node.mods[group] ??= {};
        node.mods[group][option] = modClass;
        addRule([elementClass, modClass], style, "variant", { group, option });
      }
    }
  }

  const order = { utility: 0, button: 1, "button-variant": 2, component: 3, variant: 4 };
  rules.sort((a, b) => order[a.kind] - order[b.kind]);
  return { tree, rules, buttonChains: buttons.chains, buttonMaps };
}

export const camel = (name) => name.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());

/** `{ theme: "light", align: "left" }` from each group's default. */
export function defaultSelection(spec) {
  return Object.fromEntries(Object.entries(spec.variants || {}).map(([group, def]) => [group, def.default]));
}

/** Every combination of variant options. Specs with no variants yield one empty selection. */
export function allSelections(spec) {
  let selections = [{}];
  for (const [group, def] of Object.entries(spec.variants || {})) {
    const options = Object.keys(def.options);
    selections = selections.flatMap((sel) => options.map((option) => ({ ...sel, [group]: option })));
  }
  return selections;
}

/** Stable id for a selection, e.g. `theme=dark|align=left`. */
export function selectionKey(sel = {}) {
  return Object.entries(sel).map(([group, option]) => `${group}=${option}`).join("|");
}

/** Base classes plus the combo class for each selected option that restyles this node. */
export function nodeClasses(node, sel = {}) {
  const classes = [...(node.classes || [])];
  for (const [group, option] of Object.entries(sel)) {
    const mod = node.mods?.[group]?.[option];
    if (mod) classes.push(mod);
  }
  return classes;
}

/** Apply each selected option's button remap, in group order. */
export function mapButtonVariant(resolved, sel, variant) {
  let next = variant || "primary";
  for (const [group, option] of Object.entries(sel || {})) {
    const mapped = resolved.buttonMaps?.[group]?.[option]?.[next];
    if (mapped) next = mapped;
  }
  return next;
}

export function allUtilities(ctx) {
  return { ...ctx.framework.utilities, ...(ctx.config.utilities || {}) };
}

/** Button class chains per variant, honouring forge.config.js → classes.button. */
export function resolveButtons(ctx) {
  const { framework: fw, config } = ctx;
  const cfg = config.classes?.button ?? {};
  const base = cfg.base ?? fw.button.base;
  const chains = {};
  for (const variant of Object.keys(buttonPrimitive.variants)) {
    const custom = cfg.variants?.[variant];
    const mods = custom !== undefined
      ? [].concat(custom)
      : buttonPrimitive.variants[variant] ? [fw.button.modifier(variant)] : [];
    chains[variant] = [base, ...mods];
  }
  return { base, chains, styles: cfg.styles ?? "forge" };
}

export function buttonRules(buttons) {
  const out = [{ classes: [buttons.base], style: buttonPrimitive.base, kind: "button" }];
  for (const [variant, chain] of Object.entries(buttons.chains)) {
    if (chain.length > 1 && buttonPrimitive.variants[variant]) {
      out.push({ classes: chain, style: buttonPrimitive.variants[variant], kind: "button-variant", variant });
    }
  }
  return out;
}

export function usesButtons(spec) {
  let found = false;
  const walk = (n) => {
    if (n.repeat && spec.props[n.repeat]?.type === "buttons") found = true;
    (n.children || []).forEach(walk);
  };
  walk(spec.tree);
  return found;
}

/** data-forge-* attributes per element key, from spec.motion. */
export function motionAttrs(spec) {
  const map = {};
  const { enter, reveal, scroll } = spec.motion || {};
  (enter?.targets || []).forEach((k, i) => {
    map[k] = { "data-forge-enter": enter.preset, "data-forge-delay": (i * enter.stagger).toFixed(2) };
  });
  (reveal?.targets || []).forEach((k) => {
    map[k] = { ...(map[k] || {}), "data-forge-enter": reveal.preset };
  });
  (scroll?.targets || []).forEach((k) => {
    map[k] = { ...(map[k] || {}), "data-forge-scroll": scroll.preset, "data-forge-strength": String(scroll.strength) };
  });
  return map;
}

/** Does this component need the motion runtime at all? */
export function usesRuntime(spec) {
  if (spec.motion && Object.keys(spec.motion).length) return true;
  let found = false;
  const walk = (n) => {
    if (Object.keys(n.attrs || {}).some((a) => a.startsWith("data-forge-"))) found = true;
    (n.children || []).forEach(walk);
  };
  walk(spec.tree);
  return found;
}

export const defaultsOf = (spec) => Object.fromEntries(Object.entries(spec.props).map(([k, p]) => [k, p.default]));

/** Whether a node should render for these prop values. `if` is a boolean prop, or "!name" to invert. */
export function nodeVisible(node, values = {}) {
  if (!node?.if) return true;
  const invert = String(node.if).startsWith("!");
  const name = invert ? String(node.if).slice(1) : String(node.if);
  const on = !!values[name];
  return invert ? !on : on;
}
