// One spec → a Figma document the Blokset plugin can build.
// Theme groups become variable modes. Every other group, plus Breakpoint, becomes a variant.
import { createHash } from "node:crypto";
import { allUtilities, mapButtonVariant } from "../core/resolve.js";
import { button as buttonPrimitive } from "../core/primitives.js";
import { PALETTES } from "../../components/_lib/themes.js";
import { animationPrompt } from "./motion-prompt.js";
import {
  FIGMA_BREAKPOINTS,
  VIEWPORTS,
  cssToFigma,
  flattenStyle,
  figmaVariantCount,
  lengthPx,
  parseColor,
} from "../core/figma-style.js";

const BUTTON_LABEL = {
  primary: "Primary",
  dark: "Dark",
  secondary: "Secondary",
  "secondary-alt": "Secondary alt",
};

const DEFAULT_FONTS = {
  "font-display": "Inter Tight",
  "font-serif": "Newsreader",
  "font-mono": "Roboto Mono",
};

const TEXT_TAGS = new Set(["h1", "h2", "h3", "h4", "p"]);

export function fontsOf(ctx) {
  return { ...DEFAULT_FONTS, ...(ctx.config.figma?.fonts || {}) };
}

function nodeKey(node) {
  if (node.role === "section") return node.key || "section";
  return node.key || node.role;
}

function optionLabel(group, option) {
  const opt = group.options[option];
  const label = opt?.label || option.slice(0, 1).toUpperCase() + option.slice(1);
  return label.replace(/,/g, " ");
}

/** Variant axes that are not a color theme. */
export function layoutAxes(spec) {
  const axes = [];
  for (const [name, group] of Object.entries(spec.variants || {})) {
    if (name === "theme" || group?.palette) continue;
    const options = Object.keys(group.options || {});
    if (options.length < 2) continue;
    const values = options.map((option) => optionLabel(group, option));
    const unique = values.map((value, index) => (values.indexOf(value) === index ? value : `${value} (${options[index]})`));
    axes.push({
      name,
      label: (group.label || name.slice(0, 1).toUpperCase() + name.slice(1)).replace(/,/g, " "),
      options: options.map((option, index) => ({ id: option, value: unique[index] })),
      default: group.default,
    });
  }
  return axes;
}

function axisProperties(axes) {
  return [
    { name: "Breakpoint", values: FIGMA_BREAKPOINTS.map((bp) => bp.label) },
    ...axes.map((axis) => ({ name: axis.label, values: axis.options.map((option) => option.value) })),
  ];
}

function selectionProperties(axes, selection, breakpoint) {
  const props = { Breakpoint: breakpoint.label };
  for (const axis of axes) {
    const chosen = selection[axis.name] ?? axis.default;
    const option = axis.options.find((item) => item.id === chosen) || axis.options[0];
    props[axis.label] = option.value;
  }
  return props;
}

function keysIn(node, into = new Set()) {
  const key = nodeKey(node);
  if (key) into.add(key);
  for (const child of node.children || []) keysIn(child, into);
  return into;
}

function axesTouching(spec, keys) {
  return layoutAxes(spec).filter((axis) => {
    const group = spec.variants[axis.name];
    return axis.options.some((option) => {
      const styles = group.options[option.id]?.styles || {};
      return Object.keys(styles).some((key) => keys.has(key));
    });
  });
}

function foldMargin(style) {
  const margin = style.margin;
  if (!margin) return style;
  style.padding = {
    top: (style.padding?.top || 0) + (margin.top || 0),
    right: (style.padding?.right || 0) + (margin.right || 0),
    bottom: (style.padding?.bottom || 0) + (margin.bottom || 0),
    left: (style.padding?.left || 0) + (margin.left || 0),
  };
  delete style.margin;
  return style;
}

/**
 * @param {Set<string>} dropped
 */
function paintNode(spec, specNode, resolvedNode, selection, breakpoint, parentWidth, dropped) {
  const key = nodeKey(specNode);
  let source = specNode.style || {};
  if (specNode.role && specNode.role !== "section") {
    const role = spec.framework.roles[specNode.role](specNode.size, spec.prefix);
    source = typeof role === "string" ? allUtilities({ framework: spec.framework, config: spec.config })[role] || {} : role.style || {};
  }
  const css = { ...flattenStyle(source)[breakpoint.id] };
  for (const [group, option] of Object.entries(selection)) {
    const extra = spec.variants?.[group]?.options?.[option]?.styles?.[key];
    if (extra) Object.assign(css, flattenStyle(extra)[breakpoint.id]);
  }
  const themeSlots = spec.variants?.theme?.palette?.map?.[key] || {};
  const { style, dropped: lost } = cssToFigma(css, {
    viewport: { width: breakpoint.width, height: breakpoint.height },
    parent: parentWidth,
    themeSlots,
  });
  for (const prop of lost) dropped.add(prop);
  return foldMargin(style);
}

function instanceStyle(style) {
  return {
    layoutMode: "NONE",
    layoutSizingHorizontal: style.layoutSizingHorizontal,
    layoutSizingVertical: style.layoutSizingVertical,
    layoutGrow: style.layoutGrow || 0,
    layoutAlign: style.layoutAlign || "INHERIT",
    layoutPositioning: "AUTO",
    ...(style.width != null ? { width: style.width } : {}),
    ...(style.height != null ? { height: style.height } : {}),
    ...(style.minWidth != null ? { minWidth: style.minWidth } : {}),
    ...(style.maxWidth != null ? { maxWidth: style.maxWidth } : {}),
    ...(style.minHeight != null ? { minHeight: style.minHeight } : {}),
    ...(style.maxHeight != null ? { maxHeight: style.maxHeight } : {}),
    ...(style.gridChild ? { gridChild: style.gridChild } : {}),
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
    fills: [],
    opacity: 1,
    clipsContent: false,
    visible: true,
  };
}

function contentWidth(style, parentWidth) {
  const pad = (style.padding?.left || 0) + (style.padding?.right || 0);
  let width = parentWidth;
  if (style.layoutSizingHorizontal === "FIXED" && style.width != null) width = style.width;
  else if (style.maxWidth != null) width = Math.min(parentWidth, style.maxWidth);
  return Math.max(0, width - pad);
}

function textValue(spec, bind, item) {
  if (bind === "@index") return item?.index || "01";
  if (String(bind).startsWith("item.")) return item?.fields?.[bind.slice(5)] ?? "";
  const prop = spec.props[bind];
  if (!prop) return "";
  if (prop.type === "text" || prop.type === "link") return String(prop.default ?? "");
  return "";
}

function imageValue(spec, bind, item) {
  if (String(bind).startsWith("item.")) {
    const value = item?.fields?.[bind.slice(5)];
    return value && typeof value === "object" ? value : { src: "", alt: "" };
  }
  const prop = spec.props[bind];
  return prop?.type === "image" ? { src: prop.default?.src || "", alt: prop.default?.alt || "" } : { src: "", alt: "" };
}

function walk(spec, specNode, resolvedNode, selection, breakpoint, parentWidth, dropped, item) {
  const key = nodeKey(specNode);
  const name = resolvedNode?.classes?.[0] || key || "frame";
  const style = paintNode(spec, specNode, resolvedNode || { classes: [name] }, selection, breakpoint, parentWidth, dropped);
  const block = specNode.role || specNode.children?.length || specNode.repeat;
  if (style.layoutMode === "NONE" && block && specNode.tag !== "img") {
    style.layoutMode = "VERTICAL";
    style.stretchChildren = true;
  }
  if (specNode.role === "section") {
    style.layoutSizingHorizontal = "FIXED";
    style.width = breakpoint.width;
    if (style.layoutMode === "NONE") style.layoutMode = "VERTICAL";
    style.stretchChildren = true;
  }
  if (style.layoutSizingHorizontal === "FILL" && style.maxWidth != null && parentWidth) {
    style.layoutSizingHorizontal = "FIXED";
    style.width = Math.min(parentWidth, style.maxWidth);
  }
  if (style.aspectRatio?.x && style.aspectRatio?.y && style.layoutSizingVertical !== "FIXED") {
    const basis = style.layoutSizingHorizontal === "FIXED" && style.width != null ? style.width : parentWidth;
    if (basis > 0) {
      style.height = Math.max(1, Math.round((basis * style.aspectRatio.y) / style.aspectRatio.x));
      style.layoutSizingVertical = "FIXED";
    }
  }
  const nextWidth = contentWidth(style, specNode.role === "section" ? breakpoint.width : parentWidth);

  const prop = specNode.repeat ? spec.props[specNode.repeat] : null;
  if (prop?.type === "buttons") {
    const theme = spec.variants?.theme?.default;
    const buttonSelection = theme ? { ...selection, theme } : selection;
    return {
      type: "frame",
      key,
      name,
      style,
      ...(specNode.if ? { visibleProperty: String(specNode.if).replace(/^!/, ""), visibleInvert: String(specNode.if).startsWith("!") } : {}),
      children: (prop.default || []).map((button) => ({
        type: "button",
        name: "button",
        variant: BUTTON_LABEL[mapButtonVariant({ buttonMaps: spec.buttonMaps }, buttonSelection, button.variant || "primary")] || "Primary",
        label: button.title || "Button",
        href: button.href || "#",
      })),
    };
  }

  if (prop?.type === "list") {
    const template = specNode.children?.[0];
    const templateResolved = resolvedNode?.children?.[0];
    const subId = `${spec.id}/${template.key}`;
    const templateStyle = paintNode(spec, template, templateResolved || { classes: [template.key] }, selection, breakpoint, nextWidth, dropped);
    return {
      type: "frame",
      key,
      name,
      style,
      ...(specNode.if ? { visibleProperty: String(specNode.if).replace(/^!/, ""), visibleInvert: String(specNode.if).startsWith("!") } : {}),
      children: (prop.default || []).map((fields, index) => ({
        type: "instance",
        name: template.key,
        componentId: subId,
        variant: {},
        overrides: { ...fields, index: String(index + 1).padStart(2, "0") },
        style: instanceStyle(templateStyle),
      })),
    };
  }

  const boundText = specNode.bind && specNode.tag !== "img";
  const literal = specNode.text != null && specNode.tag !== "img";
  if ((TEXT_TAGS.has(specNode.tag) || literal || boundText) && specNode.tag !== "img" && !specNode.children?.length) {
    const characters = specNode.bind ? textValue(spec, specNode.bind, item) : String(specNode.text ?? "");
    const textProperty = propertyName(spec, specNode.bind, item);
    if (style.maxWidth && style.layoutSizingHorizontal === "HUG") {
      style.layoutSizingHorizontal = "FIXED";
      style.width = style.maxWidth;
    }
    return {
      type: "text",
      key,
      name,
      tag: specNode.tag,
      style,
      characters,
      ...(textProperty ? { textProperty } : {}),
      ...(specNode.if ? { visibleProperty: String(specNode.if).replace(/^!/, ""), visibleInvert: String(specNode.if).startsWith("!") } : {}),
    };
  }

  if (specNode.tag === "img") {
    const image = imageValue(spec, specNode.bind, item);
    return {
      type: "image",
      key,
      name,
      style,
      image,
      ...(String(specNode.bind || "").startsWith("item.") ? { imageField: specNode.bind.slice(5) } : {}),
      ...(specNode.if ? { visibleProperty: String(specNode.if).replace(/^!/, ""), visibleInvert: String(specNode.if).startsWith("!") } : {}),
    };
  }

  const children = (specNode.children || []).map((child, index) =>
    walk(spec, child, resolvedNode?.children?.[index], selection, breakpoint, nextWidth, dropped, item),
  );
  children.forEach((child, index) => {
    child._order = index;
  });
  children.sort((a, b) => (a.style?.zIndex ?? 0) - (b.style?.zIndex ?? 0) || a._order - b._order);
  for (const child of children) delete child._order;
  if (style.stretchChildren && style.layoutMode !== "GRID") {
    const cross = style.layoutMode === "HORIZONTAL" ? "layoutSizingVertical" : "layoutSizingHorizontal";
    for (const child of children) {
      if (!child.style || child.style.layoutPositioning === "ABSOLUTE") continue;
      if (child.style[cross] === "HUG" && child.style.layoutAlign === "INHERIT") child.style[cross] = "FILL";
    }
  }

  return {
    type: "frame",
    key,
    name,
    ...(specNode.tag ? { tag: specNode.tag } : {}),
    ...(specNode.role ? { role: specNode.role } : {}),
    style,
    ...(specNode.if ? { visibleProperty: String(specNode.if).replace(/^!/, ""), visibleInvert: String(specNode.if).startsWith("!") } : {}),
    children,
  };
}

function propertyName(spec, bind, item) {
  if (!bind || bind === "@index") return item ? "index" : null;
  if (String(bind).startsWith("item.")) return bind.slice(5);
  const prop = spec.props[bind];
  if (prop?.type === "text" || prop?.type === "link") return bind;
  return null;
}

function propertiesFromTree(spec, tree, { item = false, fields = null, sample = null } = {}) {
  const props = [];
  const seen = new Set();
  const add = (prop) => {
    if (seen.has(prop.name + prop.type)) return;
    seen.add(prop.name + prop.type);
    props.push(prop);
  };
  const walkProps = (node) => {
    if (!node || node.repeat && spec.props[node.repeat]?.type === "list") {
      if (node?.if) add(booleanProp(spec, node.if));
      return;
    }
    if (node.bind && node.tag !== "img") {
      const name = propertyName(spec, node.bind, item ? { fields: {}, index: "01" } : null);
      if (name && (item || spec.props[name]?.type === "text" || spec.props[name]?.type === "link" || name === "index")) {
        const source = item ? fields?.[name] : spec.props[name];
        add({
          name,
          type: "TEXT",
          default: name === "index" ? "01" : String(item ? sample?.[name] ?? "" : source?.default ?? ""),
          description: item ? "" : source?.description || "",
        });
      }
    }
    if (node.if) add(booleanProp(spec, node.if));
    for (const child of node.children || []) walkProps(child);
  };
  walkProps(tree);
  return props;
}

function booleanProp(spec, expr) {
  const name = String(expr).replace(/^!/, "");
  const prop = spec.props[name];
  return { name, type: "BOOLEAN", default: prop ? !!prop.default : true, description: prop?.description || "" };
}

function buildComponent(spec, resolved, { id, name, tree, item = false, fields = null, sample = null, axes }) {
  const dropped = new Set();
  const variantProperties = axisProperties(axes);
  const selections = selectionsOf(axes);
  const variants = [];
  for (const breakpoint of FIGMA_BREAKPOINTS) {
    for (const selection of selections) {
      const properties = selectionProperties(axes, selection, breakpoint);
      const root = walk(
        spec,
        tree,
        resolved.tree,
        selection,
        breakpoint,
        breakpoint.width,
        dropped,
        item ? { fields: sample || {}, index: "01" } : null,
      );
      variants.push({ properties, tree: root });
    }
  }
  const defaults = {};
  for (const axis of axes) {
    const option = axis.options.find((itemOption) => itemOption.id === axis.default) || axis.options[0];
    defaults[axis.label] = option.value;
  }
  return {
    id,
    name,
    item,
    properties: propertiesFromTree(spec, tree, { item, fields, sample }),
    axes,
    variantProperties,
    defaultVariant: { Breakpoint: "Desktop", ...defaults },
    variants,
    dropped: [...dropped].sort(),
  };
}

function selectionsOf(axes) {
  let selections = [{}];
  for (const axis of axes) {
    selections = selections.flatMap((selection) => axis.options.map((option) => ({ ...selection, [axis.name]: option.id })));
  }
  return selections;
}

function findLists(spec, specNode, resolvedNode, found = []) {
  if (specNode.repeat && spec.props[specNode.repeat]?.type === "list" && specNode.children?.[0]) {
    found.push({
      prop: spec.props[specNode.repeat],
      template: specNode.children[0],
      resolved: resolvedNode?.children?.[0],
    });
    return found;
  }
  (specNode.children || []).forEach((child, index) => findLists(spec, child, resolvedNode?.children?.[index], found));
  return found;
}

function attachInstanceVariants(node, parentProps, components) {
  if (!node) return;
  if (node.type === "instance") {
    const sub = components.find((component) => component.id === node.componentId);
    if (sub) {
      const variant = {};
      for (const axis of sub.variantProperties) {
        if (parentProps[axis.name]) variant[axis.name] = parentProps[axis.name];
      }
      node.variant = variant;
    }
  }
  for (const child of node.children || []) attachInstanceVariants(child, parentProps, components);
}

/**
 * Figma document for one component.
 * `resolved` is the default-framework resolution (class names and button maps).
 */
export function generateFigma(spec, ctx, resolved) {
  const specForPaint = {
    ...spec,
    framework: ctx.framework,
    config: ctx.config,
    buttonMaps: resolved.buttonMaps,
  };
  const lists = findLists(spec, spec.tree, resolved.tree);
  const components = [];
  for (const list of lists) {
    const keys = keysIn(list.template);
    const axes = axesTouching(spec, keys);
    const fauxResolved = { tree: list.resolved || { classes: [ctx.framework.elementClass(spec.prefix, list.template.key)], children: [] } };
    components.push(buildComponent(specForPaint, fauxResolved, {
      id: `${spec.id}/${list.template.key}`,
      name: `${spec.name} / ${list.template.key}`,
      tree: list.template,
      item: true,
      fields: list.prop.fields,
      sample: list.prop.default?.[0] || {},
      axes,
    }));
  }
  const main = buildComponent(specForPaint, resolved, {
    id: spec.id,
    name: spec.name,
    tree: spec.tree,
    axes: layoutAxes(spec),
  });
  for (const variant of main.variants) attachInstanceVariants(variant.tree, variant.properties, components);
  components.unshift(main);

  const dropped = [...new Set(components.flatMap((component) => component.dropped))].sort();
  for (const component of components) delete component.dropped;
  const motion = animationPrompt(spec);
  const doc = {
    blokset: 1,
    framework: ctx.framework.name,
    meta: {
      id: spec.id,
      name: spec.name,
      category: spec.category,
      description: spec.description,
      motion: motion.length > 1800 ? `${motion.slice(0, 1800)}…` : motion,
    },
    fonts: fontsOf(ctx),
    components,
    dropped,
  };
  doc.hash = createHash("sha256").update(JSON.stringify(doc)).digest("hex").slice(0, 16);
  return doc;
}

function tokenKind(name, value) {
  const text = String(value);
  if (name.startsWith("font-") || /font-family|monospace|sans-serif|serif|system-ui/.test(text)) return "STRING";
  if (parseColor(text) && !text.startsWith("token(")) return "COLOR";
  if (lengthPx(text) != null) return "FLOAT";
  return "STRING";
}

function fontFamily(value) {
  return String(value).split(",")[0].replace(/['"]/g, "").trim();
}

function figmaColor(value) {
  const color = parseColor(value);
  if (!color || color.token) return { r: 0, g: 0, b: 0, a: 1 };
  return color;
}

/** Variable collections: primitives, theme modes, and layout sizes per breakpoint. */
export function variablesDoc(ctx) {
  const primitives = Object.entries(ctx.tokens.entries).map(([name, token]) => {
    const type = tokenKind(name, token.value);
    const value = type === "COLOR" ? figmaColor(token.value) : type === "FLOAT" ? lengthPx(token.value) ?? 0 : fontFamily(token.value);
    return { name, type, value };
  });

  const modes = Object.keys(PALETTES);
  const slots = [...new Set(modes.flatMap((mode) => Object.keys(PALETTES[mode])))];
  const theme = slots.map((slot) => ({
    name: slot,
    type: "COLOR",
    alias: Object.fromEntries(modes.map((mode) => [mode, PALETTES[mode][slot]])),
  }));

  const layout = [];
  for (const [name, style] of Object.entries(allUtilities(ctx))) {
    const flat = flattenStyle(style);
    const props = new Set(FIGMA_BREAKPOINTS.flatMap((bp) => Object.keys(flat[bp.id] || {})));
    for (const prop of props) {
      const values = {};
      let ok = true;
      for (const bp of FIGMA_BREAKPOINTS) {
        const raw = flat[bp.id][prop];
        if (raw == null) {
          ok = false;
          break;
        }
        const px = lengthPx(raw);
        const percent = String(raw).match(/^([0-9.]+)%$/);
        if (px != null) values[bp.label] = px;
        else if (percent) values[bp.label] = Math.round((Number(percent[1]) / 100) * bp.width);
        else {
          ok = false;
          break;
        }
      }
      if (ok) layout.push({ name: `${name}/${prop}`, type: "FLOAT", values });
    }
  }

  return {
    collections: [
      { name: "Blokset/Primitives", modes: ["Value"], variables: primitives },
      {
        name: "Blokset/Theme",
        modes: modes.map((mode) => mode.slice(0, 1).toUpperCase() + mode.slice(1)),
        variables: theme.map((variable) => ({
          ...variable,
          alias: Object.fromEntries(Object.entries(variable.alias).map(([mode, token]) => [mode.slice(0, 1).toUpperCase() + mode.slice(1), token])),
        })),
      },
      { name: "Blokset/Layout", modes: FIGMA_BREAKPOINTS.map((bp) => bp.label), variables: layout },
    ],
  };
}

/** Shared button component set, built once per file. */
export function buttonDoc(ctx) {
  const viewport = VIEWPORTS.desktop;
  const baseCss = flattenStyle(buttonPrimitive.base).desktop;
  const variants = Object.entries(buttonPrimitive.variants).map(([id, extra]) => {
    const css = { ...baseCss, ...(extra ? flattenStyle(extra).desktop : {}) };
    const { style } = cssToFigma(css, { viewport, themeSlots: {} });
    return { id, name: BUTTON_LABEL[id] || id, style: foldMargin(style) };
  });
  return { name: "Blokset/Button", property: "Variant", labelProperty: "Label", variants };
}

/** Catalog the plugin lists. Component documents live at `/figma/<framework>/<id>.json`. */
export function figmaCatalog(specs, config, frameworks) {
  return {
    defaultFramework: config.framework,
    frameworks: config.frameworks.map((name) => ({ name, label: frameworks[name].label })),
    components: specs.map((spec) => ({
      id: spec.id,
      name: spec.name,
      category: spec.category,
      description: spec.description,
      variants: figmaVariantCount(spec),
    })),
  };
}

/** Small clipboard payload. The plugin fetches the document from the gallery. */
export function figmaPointer(spec, framework, selection = {}) {
  return JSON.stringify({ blokset: spec.id, framework, selection });
}
