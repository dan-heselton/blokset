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
      children: (n.children || []).map(toNode),
    };
  };
  const tree = toNode(spec.tree);

  const buttons = resolveButtons(ctx);
  if (usesButtons(spec) && buttons.styles !== "none") {
    for (const r of buttonRules(buttons)) addRule(r.classes, r.style, r.kind, { variant: r.variant });
  }
  const order = { utility: 0, button: 1, "button-variant": 2, component: 3 };
  rules.sort((a, b) => order[a.kind] - order[b.kind]);
  return { tree, rules, buttonChains: buttons.chains };
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
