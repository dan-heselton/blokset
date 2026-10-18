// Builds Blokset Figma documents into components. No imports: the build copies this file to
// figma-plugin/code.js, which is the plugin's main thread. The UI fetches JSON and posts it here.

var BLOKSET = "blokset";
var BUILDER = "4";

var WEIGHTS = {
  300: ["Light"],
  400: ["Regular", "Roman"],
  500: ["Medium"],
  600: ["Semi Bold", "SemiBold", "Medium"],
  700: ["Bold"],
};

function titleCase(value) {
  var text = String(value || "Components");
  return text.slice(0, 1).toUpperCase() + text.slice(1);
}

function post(message) {
  figma.ui.postMessage(message);
}

function variantName(properties) {
  var parts = [];
  for (var key in properties) parts.push(key + "=" + properties[key]);
  return parts.join(", ");
}

var BREAKPOINT_ORDER = ["Desktop", "Tablet", "Mobile"];
var VARIANT_GAP = 80;

function variantProps(name) {
  var props = {};
  var parts = String(name || "").split(", ");
  for (var i = 0; i < parts.length; i++) {
    var eq = parts[i].indexOf("=");
    if (eq === -1) continue;
    props[parts[i].slice(0, eq)] = parts[i].slice(eq + 1);
  }
  return props;
}

function layoutVariantGrid(set) {
  if (!set || !set.children) return;
  var children = [];
  for (var i = 0; i < set.children.length; i++) {
    if (set.children[i].type === "COMPONENT") children.push(set.children[i]);
  }
  if (!children.length) return;
  var parsed = [];
  for (var c = 0; c < children.length; c++) parsed.push({ node: children[c], props: variantProps(children[c].name) });
  var columnKey = parsed[0].props.Breakpoint != null ? "Breakpoint" : null;
  if (!columnKey) {
    for (var key in parsed[0].props) {
      columnKey = key;
      break;
    }
  }
  var rowKeys = [];
  for (var prop in parsed[0].props) if (prop !== columnKey) rowKeys.push(prop);
  function rowId(props) {
    var parts = [];
    for (var r = 0; r < rowKeys.length; r++) parts.push(props[rowKeys[r]] || "");
    return parts.join("\n");
  }
  var columns = [];
  var rows = [];
  function add(list, value) {
    if (list.indexOf(value) === -1) list.push(value);
  }
  for (var p = 0; p < parsed.length; p++) {
    add(columns, columnKey ? parsed[p].props[columnKey] || "" : "");
    add(rows, rowId(parsed[p].props));
  }
  if (columnKey === "Breakpoint") {
    columns.sort(function (a, b) {
      var ia = BREAKPOINT_ORDER.indexOf(a);
      var ib = BREAKPOINT_ORDER.indexOf(b);
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    });
  }
  var colWidth = {};
  var rowHeight = {};
  for (var n = 0; n < parsed.length; n++) {
    var item = parsed[n];
    var col = columnKey ? item.props[columnKey] || "" : "";
    var row = rowId(item.props);
    colWidth[col] = Math.max(colWidth[col] || 0, item.node.width || 0);
    rowHeight[row] = Math.max(rowHeight[row] || 0, item.node.height || 0);
  }
  var colX = {};
  var x = 0;
  for (var ci = 0; ci < columns.length; ci++) {
    colX[columns[ci]] = x;
    x += (colWidth[columns[ci]] || 0) + VARIANT_GAP;
  }
  var rowY = {};
  var y = 0;
  for (var ri = 0; ri < rows.length; ri++) {
    rowY[rows[ri]] = y;
    y += (rowHeight[rows[ri]] || 0) + VARIANT_GAP;
  }
  for (var m = 0; m < parsed.length; m++) {
    var placed = parsed[m];
    var placedCol = columnKey ? placed.props[columnKey] || "" : "";
    placed.node.x = colX[placedCol] || 0;
    placed.node.y = rowY[rowId(placed.props)] || 0;
  }
}

function rgb(color) {
  if (!color || color.r == null) return { r: 0.2, g: 0.2, b: 0.2 };
  return { r: color.r, g: color.g, b: color.b };
}

function opacityOf(color) {
  return color && color.a != null ? color.a : 1;
}

function trySet(fn) {
  try {
    fn();
  } catch (error) {
    /* Figma rejects some combinations (FILL before a parent exists, grid span past the edge). */
  }
}

async function loadFont(family, weight, italic) {
  var styles = WEIGHTS[weight] || WEIGHTS[Math.round(weight / 100) * 100] || WEIGHTS[400];
  if (italic) styles = styles.map(function (style) { return style + " Italic"; }).concat(["Italic"]);
  var families = [family, "Inter"];
  for (var f = 0; f < families.length; f++) {
    for (var s = 0; s < styles.length; s++) {
      try {
        var font = { family: families[f], style: styles[s] };
        await figma.loadFontAsync(font);
        return font;
      } catch (error) {
        /* try the next installed face */
      }
    }
    try {
      var regular = { family: families[f], style: "Regular" };
      await figma.loadFontAsync(regular);
      return regular;
    } catch (error) {
      /* try Inter */
    }
  }
  var fallback = { family: "Inter", style: "Regular" };
  await figma.loadFontAsync(fallback);
  return fallback;
}

function variableColor(variable, byId) {
  if (!variable) return { r: 0.2, g: 0.2, b: 0.2, a: 1 };
  var mode = Object.keys(variable.valuesByMode)[0];
  var value = variable.valuesByMode[mode];
  if (value && value.type === "VARIABLE_ALIAS" && byId[value.id]) return variableColor(byId[value.id], byId);
  if (value && value.r != null) return value;
  return { r: 0.2, g: 0.2, b: 0.2, a: 1 };
}

function paintFor(color, ctx) {
  var resolved = color;
  var variable = null;
  if (color && color.theme) variable = ctx.theme[color.theme];
  else if (color && color.token) variable = ctx.primitives[color.token];
  if (variable) resolved = variableColor(variable, ctx.byId);
  var paint = { type: "SOLID", color: rgb(resolved), opacity: opacityOf(resolved) };
  if (variable && figma.variables) paint = figma.variables.setBoundVariableForPaint(paint, "color", variable);
  return paint;
}

function fillsFor(list, ctx) {
  var paints = [];
  for (var i = 0; i < (list || []).length; i++) {
    var fill = list[i];
    if (fill.type === "SOLID") paints.push(paintFor(fill.color, ctx));
    else if (fill.type === "GRADIENT_LINEAR") {
      paints.push({
        type: "GRADIENT_LINEAR",
        gradientTransform: fill.gradientTransform,
        gradientStops: (fill.stops || []).map(function (stop) {
          var color = stop.color && stop.color.r != null ? stop.color : { r: 0, g: 0, b: 0, a: 1 };
          return { position: stop.position, color: { r: color.r, g: color.g, b: color.b, a: opacityOf(color) } };
        }),
      });
    }
  }
  return paints;
}

function applyFrameChrome(node, style, ctx) {
  if (!style) return;
  if (node.type !== "TEXT") {
    trySet(function () { node.fills = style.fills && style.fills.length ? fillsFor(style.fills, ctx) : []; });
  }
  if (style.strokes && (style.strokes.top || style.strokes.right || style.strokes.bottom || style.strokes.left)) {
    trySet(function () {
      node.strokes = [paintFor(style.strokes.color, ctx)];
      node.strokeTopWeight = style.strokes.top || 0;
      node.strokeRightWeight = style.strokes.right || 0;
      node.strokeBottomWeight = style.strokes.bottom || 0;
      node.strokeLeftWeight = style.strokes.left || 0;
    });
  }
  if (style.radius) {
    var corners = ["topLeft", "topRight", "bottomRight", "bottomLeft"];
    for (var c = 0; c < corners.length; c++) {
      var corner = corners[c];
      var value = style.radius[corner];
      var px = value && value.token ? 8 : value || 0;
      trySet(function () { node[corner + "Radius"] = px; });
      if (value && value.token && ctx.primitives[value.token]) {
        trySet(function () { node.setBoundVariable(corner + "Radius", ctx.primitives[value.token]); });
      }
    }
  }
  if (style.effects && style.effects.length) {
    trySet(function () {
      node.effects = style.effects.map(function (effect) {
        return {
          type: "DROP_SHADOW",
          color: { r: rgb(effect.color).r, g: rgb(effect.color).g, b: rgb(effect.color).b, a: opacityOf(effect.color) },
          offset: effect.offset || { x: 0, y: 0 },
          radius: effect.radius || 0,
          spread: effect.spread || 0,
          visible: true,
          blendMode: "NORMAL",
        };
      });
    });
  }
  if (style.opacity != null) trySet(function () { node.opacity = style.opacity; });
  if (style.clipsContent) trySet(function () { node.clipsContent = true; });
  if (style.blendMode) trySet(function () { node.blendMode = style.blendMode; });
  if (style.visible === false) trySet(function () { node.visible = false; });
  if (style.minWidth != null) trySet(function () { node.minWidth = style.minWidth; });
  if (style.maxWidth != null) trySet(function () { node.maxWidth = style.maxWidth; });
  if (style.minHeight != null) trySet(function () { node.minHeight = style.minHeight; });
  if (style.maxHeight != null) trySet(function () { node.maxHeight = style.maxHeight; });
}

function applyAutoLayout(node, style) {
  if (!style) return;
  var mode = style.layoutMode || "NONE";
  if (mode === "NONE") return;
  trySet(function () { node.layoutMode = mode === "GRID" ? "NONE" : mode; });
  if (mode === "GRID") {
    trySet(function () {
      node.layoutMode = "GRID";
      node.gridColumnCount = (style.grid && style.grid.columns && style.grid.columns.length) || 1;
      node.gridAutoTracks = "ROWS";
      node.gridColumnGap = style.grid ? style.grid.columnGap || 0 : 0;
      node.gridRowGap = style.grid ? style.grid.rowGap || 0 : 0;
    });
    trySet(function () {
      var columns = (style.grid && style.grid.columns) || [];
      var sizes = node.gridColumnSizes.slice();
      for (var i = 0; i < sizes.length && i < columns.length; i++) {
        sizes[i] = columns[i].type === "FIXED" ? { type: "FIXED", value: columns[i].value } : { type: "FLEX" };
      }
      node.gridColumnSizes = sizes;
    });
  }
  var pad = style.padding || { top: 0, right: 0, bottom: 0, left: 0 };
  trySet(function () {
    node.paddingTop = pad.top || 0;
    node.paddingRight = pad.right || 0;
    node.paddingBottom = pad.bottom || 0;
    node.paddingLeft = pad.left || 0;
    node.itemSpacing = style.itemSpacing || 0;
    node.counterAxisSpacing = style.counterAxisSpacing || 0;
    node.primaryAxisAlignItems = style.primaryAxisAlignItems || "MIN";
    node.counterAxisAlignItems = style.counterAxisAlignItems || "MIN";
    if (style.layoutWrap === "WRAP") node.layoutWrap = "WRAP";
  });
  var fixedW = style.layoutSizingHorizontal === "FIXED" && style.width != null;
  var fixedH = style.layoutSizingVertical === "FIXED" && style.height != null;
  if (fixedW || fixedH) {
    var width = fixedW ? Math.max(1, style.width) : Math.max(1, node.width || 100);
    var height = fixedH ? Math.max(1, style.height) : Math.max(1, node.height || 100);
    trySet(function () { node.resize(width, height); });
  }
  var vertical = mode === "VERTICAL";
  if (mode === "HORIZONTAL" || mode === "VERTICAL") {
    var primary = vertical ? style.layoutSizingVertical : style.layoutSizingHorizontal;
    var counter = vertical ? style.layoutSizingHorizontal : style.layoutSizingVertical;
    trySet(function () { node.primaryAxisSizingMode = primary === "FIXED" ? "FIXED" : "AUTO"; });
    trySet(function () { node.counterAxisSizingMode = counter === "HUG" ? "AUTO" : "FIXED"; });
  }
  if (style.aspectRatio && style.aspectRatio.x && style.aspectRatio.y) {
    trySet(function () { node.targetAspectRatio = style.aspectRatio; });
  }
}

function finishText(node, style) {
  var text = style.text || {};
  var wrap = text.wrap !== false;
  if (!wrap) {
    trySet(function () { node.textAutoResize = "WIDTH_AND_HEIGHT"; });
    return;
  }
  var width = style.width || style.maxWidth || 0;
  if (!width && node.parent && node.parent.width) {
    width = Math.max(1, node.parent.width - (node.parent.paddingLeft || 0) - (node.parent.paddingRight || 0));
  }
  if (width > 0) trySet(function () { node.resize(Math.max(1, width), Math.max(1, node.height || 1)); });
  trySet(function () { node.textAutoResize = "HEIGHT"; });
  if (style.layoutSizingHorizontal) trySet(function () { node.layoutSizingHorizontal = style.layoutSizingHorizontal; });
  if (style.layoutSizingVertical) trySet(function () { node.layoutSizingVertical = style.layoutSizingVertical === "FIXED" ? "FIXED" : "HUG"; });
}

function applyChild(node, desc, parent) {
  var style = desc.style || {};
  trySet(function () { node.layoutAlign = style.layoutAlign || "INHERIT"; });
  trySet(function () { node.layoutGrow = style.layoutGrow || 0; });
  if (style.layoutSizingHorizontal) trySet(function () { node.layoutSizingHorizontal = style.layoutSizingHorizontal; });
  if (style.layoutSizingVertical) trySet(function () { node.layoutSizingVertical = style.layoutSizingVertical; });
  if (node.type === "TEXT") finishText(node, style);
  if (style.layoutPositioning === "ABSOLUTE") {
    trySet(function () { node.layoutPositioning = "ABSOLUTE"; });
    if (style.constraints) trySet(function () { node.constraints = style.constraints; });
    if (style.x != null) trySet(function () { node.x = style.x; });
    if (style.y != null) trySet(function () { node.y = style.y; });
  }
  if (parent && parent.layoutMode === "GRID" && style.gridChild) {
    var span = Math.max(1, Math.min(style.gridChild.columnSpan || 1, parent.gridColumnCount || 1));
    trySet(function () { node.gridColumnSpan = span; });
    if ((style.gridChild.rowSpan || 1) > 1) trySet(function () { node.gridRowSpan = style.gridChild.rowSpan; });
    if (style.gridChild.column != null && style.gridChild.row != null) {
      trySet(function () { node.setGridChildPosition(style.gridChild.row, style.gridChild.column); });
    }
  }
}

async function paintText(node, desc, ctx) {
  var text = (desc.style && desc.style.text) || {};
  var family = "Inter";
  if (text.fontFamily && text.fontFamily.token) family = (ctx.fonts && ctx.fonts[text.fontFamily.token]) || family;
  else if (text.fontFamily && text.fontFamily.family) family = text.fontFamily.family;
  var font = await loadFont(family, text.fontWeight || 400, text.italic);
  node.fontName = font;
  node.characters = desc.characters == null ? "" : String(desc.characters);
  if (text.fontSize) trySet(function () { node.fontSize = text.fontSize; });
  if (text.lineHeight) trySet(function () { node.lineHeight = text.lineHeight; });
  if (text.letterSpacing) trySet(function () { node.letterSpacing = text.letterSpacing; });
  if (text.textCase) trySet(function () { node.textCase = text.textCase; });
  if (text.textDecoration) trySet(function () { node.textDecoration = text.textDecoration; });
  if (text.textAlignHorizontal) trySet(function () { node.textAlignHorizontal = text.textAlignHorizontal; });
  if (text.color) trySet(function () { node.fills = [paintFor(text.color, ctx)]; });
  trySet(function () { node.textAutoResize = text.wrap === false ? "WIDTH_AND_HEIGHT" : "HEIGHT"; });
  applyFrameChrome(node, desc.style, ctx);
}

async function paintImage(node, desc) {
  var src = desc.image && desc.image.src;
  var scale = (desc.style && desc.style.imageScale) || "FILL";
  if (!src) {
    node.fills = [{ type: "SOLID", color: { r: 0.93, g: 0.91, b: 0.88 } }];
    return;
  }
  try {
    var image = await figma.createImageAsync(src);
    node.fills = [{ type: "IMAGE", imageHash: image.hash, scaleMode: scale }];
  } catch (error) {
    node.fills = [{ type: "SOLID", color: { r: 0.93, g: 0.91, b: 0.88 } }];
  }
}

async function createChild(desc, ctx) {
  if (desc.type === "button") return createButtonInstance(desc, ctx);
  if (desc.type === "instance") return createComponentInstance(desc, ctx);
  if (desc.type === "text") {
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    var text = figma.createText();
    text.name = desc.name || "text";
    await paintText(text, desc, ctx);
    stamp(text, desc);
    return text;
  }
  var frame = figma.createFrame();
  frame.name = desc.name || "frame";
  await fill(frame, desc, ctx, false);
  return frame;
}

async function fill(node, desc, ctx, keepName) {
  if (!keepName) node.name = desc.name || node.name;
  stamp(node, desc);
  applyAutoLayout(node, desc.style);
  applyFrameChrome(node, desc.style, ctx);
  if (desc.type === "image") await paintImage(node, desc);
  if (desc.type === "text") {
    await paintText(node, desc, ctx);
    return;
  }
  var children = (desc.children || []).slice();
  if (desc.style && desc.style.reverse) children.reverse();
  for (var i = node.children.length - 1; i >= 0; i--) node.children[i].remove();
  for (var c = 0; c < children.length; c++) {
    var built = await createChild(children[c], ctx);
    node.appendChild(built);
    applyChild(built, children[c], node);
  }
}

function stamp(node, desc) {
  if (!node.setSharedPluginData) return;
  if (desc.key) node.setSharedPluginData(BLOKSET, "key", desc.key);
  if (desc.name) node.setSharedPluginData(BLOKSET, "layer", desc.name);
  if (desc.imageField) node.setSharedPluginData(BLOKSET, "image", desc.imageField);
}

function labelKey(set) {
  var defs = set.componentPropertyDefinitions || {};
  for (var key in defs) if (key.split("#")[0] === "Label" && defs[key].type === "TEXT") return key;
  return null;
}

async function createButtonInstance(desc, ctx) {
  var set = ctx.button;
  if (!set) {
    var frame = figma.createFrame();
    frame.name = "button";
    return frame;
  }
  var wanted = "Variant=" + (desc.variant || "Primary");
  var match = null;
  for (var i = 0; i < set.children.length; i++) {
    if (set.children[i].name.indexOf(wanted) === 0) match = set.children[i];
  }
  var instance = (match || set.defaultVariant).createInstance();
  instance.name = "button";
  var key = ctx.buttonLabel || labelKey(set);
  if (key) {
    var props = {};
    props[key] = desc.label || "Button";
    trySet(function () { instance.setProperties(props); });
  }
  return instance;
}

async function createComponentInstance(desc, ctx) {
  var set = ctx.sets[desc.componentId];
  if (!set) {
    var missing = figma.createFrame();
    missing.name = desc.name || "missing";
    return missing;
  }
  var match = findVariant(set, desc.variant || {});
  var instance = (match || set.defaultVariant).createInstance();
  instance.name = desc.name || set.name;
  var defs = instance.componentProperties || {};
  var next = {};
  var overrides = desc.overrides || {};
  for (var key in defs) {
    var prop = key.split("#")[0];
    if (defs[key].type === "TEXT" && overrides[prop] != null && typeof overrides[prop] !== "object") next[key] = String(overrides[prop]);
    if (defs[key].type === "VARIANT" && desc.variant && desc.variant[prop]) next[key] = desc.variant[prop];
  }
  if (Object.keys(next).length) trySet(function () { instance.setProperties(next); });
  if (overrides) await overrideImages(instance, overrides);
  return instance;
}

async function overrideImages(instance, overrides) {
  var nodes = instance.findAll(function (node) { return node.type === "FRAME" || node.type === "RECTANGLE"; });
  for (var i = 0; i < nodes.length; i++) {
    var field = nodes[i].getSharedPluginData(BLOKSET, "image") || nodes[i].getSharedPluginData(BLOKSET, "key");
    if (!field || !overrides[field] || !overrides[field].src) continue;
    try {
      var image = await figma.createImageAsync(overrides[field].src);
      nodes[i].fills = [{ type: "IMAGE", imageHash: image.hash, scaleMode: "FILL" }];
    } catch (error) {
      /* keep the component's placeholder */
    }
  }
}

function findVariant(set, properties) {
  var children = set.children || [];
  for (var i = 0; i < children.length; i++) {
    var name = children[i].name;
    var ok = true;
    for (var key in properties) if (name.indexOf(key + "=" + properties[key]) === -1) ok = false;
    if (ok) return children[i];
  }
  return null;
}

function bindProperties(node, desc, keys) {
  if (!node) return;
  var refs = {};
  if (desc.textProperty && keys[desc.textProperty]) refs.characters = keys[desc.textProperty];
  if (desc.visibleProperty && keys[desc.visibleProperty] && !desc.visibleInvert) refs.visible = keys[desc.visibleProperty];
  if (Object.keys(refs).length) trySet(function () { node.componentPropertyReferences = refs; });
  var children = desc.children || [];
  for (var i = 0; i < children.length && i < node.children.length; i++) bindProperties(node.children[i], children[i], keys);
}

function ensureProperty(set, prop) {
  var defs = set.componentPropertyDefinitions || {};
  for (var key in defs) {
    if (defs[key].type === prop.type && key.split("#")[0] === prop.name) return key;
  }
  var fallback = prop.type === "BOOLEAN" ? !!prop.default : String(prop.default == null ? "" : prop.default);
  return set.addComponentProperty(prop.name, prop.type, fallback);
}

async function buildVariant(desc, ctx) {
  var component = figma.createComponent();
  component.name = variantName(desc.properties);
  if (desc.tree) await fill(component, desc.tree, ctx, true);
  component.setSharedPluginData(BLOKSET, "variant", component.name);
  return component;
}

async function upsertSet(component, ctx, page) {
  var existing = ctx.sets[component.id] || (await findById(component.id));
  var stamp = ctx.hash + ":" + BUILDER;
  if (existing && existing.getSharedPluginData(BLOKSET, "hash") === stamp) {
    if (existing.parent !== page) page.appendChild(existing);
    layoutVariantGrid(existing);
    ctx.sets[component.id] = existing;
    return existing;
  }
  var variants = component.variants.slice().sort(function (a, b) {
    return matchScore(a.properties, component.defaultVariant) - matchScore(b.properties, component.defaultVariant);
  });
  if (!existing) {
    var created = [];
    for (var i = 0; i < variants.length; i++) created.push(await buildVariant(variants[i], ctx));
    existing = figma.combineAsVariants(created, page);
  } else {
    await figma.setCurrentPageAsync(existing.parent);
    for (var v = 0; v < variants.length; v++) {
      var name = variantName(variants[v].properties);
      var match = findVariant(existing, variants[v].properties);
      if (!match) {
        match = await buildVariant(variants[v], ctx);
        existing.appendChild(match);
      } else if (variants[v].tree) {
        await fill(match, variants[v].tree, ctx, true);
      }
      match.name = name;
      match.setSharedPluginData(BLOKSET, "variant", name);
    }
  }
  existing.name = component.name;
  var keys = {};
  for (var p = 0; p < (component.properties || []).length; p++) {
    keys[component.properties[p].name] = ensureProperty(existing, component.properties[p]);
  }
  for (var n = 0; n < variants.length; n++) {
    var variantNode = findVariant(existing, variants[n].properties);
    if (variantNode && variants[n].tree) bindProperties(variantNode, variants[n].tree, keys);
  }
  existing.setSharedPluginData(BLOKSET, "id", component.id);
  existing.setSharedPluginData(BLOKSET, "hash", stamp);
  var motion = ctx.meta && ctx.meta.motion ? "\n\n" + ctx.meta.motion : "";
  var description = ((ctx.meta && ctx.meta.description) || "") + motion;
  trySet(function () { existing.description = description.slice(0, 9000); });
  ctx.sets[component.id] = existing;
  if (existing.parent !== page) page.appendChild(existing);
  layoutVariantGrid(existing);
  return existing;
}

function matchScore(properties, wanted) {
  var score = 0;
  for (var key in wanted) if (properties[key] !== wanted[key]) score += 1;
  return score;
}

async function findById(id) {
  await figma.loadAllPagesAsync();
  var pages = figma.root.children;
  for (var p = 0; p < pages.length; p++) {
    if (pages[p].loadAsync) await pages[p].loadAsync();
    var found = pages[p].findAll(function (node) {
      return node.type === "COMPONENT_SET" && node.getSharedPluginData(BLOKSET, "id") === id;
    });
    if (found[0]) return found[0];
  }
  return null;
}

async function pageNamed(name) {
  await figma.loadAllPagesAsync();
  var pages = figma.root.children;
  for (var i = 0; i < pages.length; i++) if (pages[i].name === name) return pages[i];
  var page = figma.createPage();
  page.name = name;
  return page;
}

async function ensureVariables(doc) {
  var ctx = { primitives: {}, theme: {}, byId: {}, themeCollection: null, themeModes: {}, fonts: doc.fonts || {} };
  var collections = (doc.variables && doc.variables.collections) || [];
  for (var c = 0; c < collections.length; c++) {
    var def = collections[c];
    var all = await figma.variables.getLocalVariableCollectionsAsync();
    var collection = null;
    for (var i = 0; i < all.length; i++) if (all[i].name === def.name) collection = all[i];
    if (!collection) collection = figma.variables.createVariableCollection(def.name);
    var modeIds = {};
    collection.renameMode(collection.modes[0].modeId, def.modes[0]);
    modeIds[def.modes[0]] = collection.modes[0].modeId;
    for (var m = 1; m < def.modes.length; m++) {
      var existing = null;
      for (var em = 0; em < collection.modes.length; em++) if (collection.modes[em].name === def.modes[m]) existing = collection.modes[em];
      modeIds[def.modes[m]] = existing ? existing.modeId : collection.addMode(def.modes[m]);
    }
    var locals = await figma.variables.getLocalVariablesAsync();
    var bucket = def.name.indexOf("Theme") !== -1 ? ctx.theme : ctx.primitives;
    for (var v = 0; v < def.variables.length; v++) {
      var spec = def.variables[v];
      var record = null;
      for (var n = 0; n < locals.length; n++) {
        if (locals[n].name === spec.name && locals[n].variableCollectionId === collection.id) record = locals[n];
      }
      if (!record) record = figma.variables.createVariable(spec.name, collection, spec.type);
      if (spec.alias) {
        for (var mode in spec.alias) {
          var target = ctx.primitives[spec.alias[mode]];
          if (target && modeIds[mode]) record.setValueForMode(modeIds[mode], figma.variables.createVariableAlias(target));
        }
      } else if (spec.values) {
        for (var valueMode in spec.values) {
          if (modeIds[valueMode]) record.setValueForMode(modeIds[valueMode], spec.values[valueMode]);
        }
      } else if (spec.value != null && modeIds[def.modes[0]]) {
        var stored = spec.type === "COLOR" ? { r: spec.value.r, g: spec.value.g, b: spec.value.b, a: spec.value.a == null ? 1 : spec.value.a } : spec.value;
        record.setValueForMode(modeIds[def.modes[0]], stored);
      }
      bucket[spec.name] = record;
      ctx.byId[record.id] = record;
    }
    if (def.name.indexOf("Theme") !== -1) {
      ctx.themeCollection = collection;
      ctx.themeModes = modeIds;
    }
  }
  return ctx;
}

function buttonVariantNamed(set, name) {
  var wanted = "Variant=" + name;
  for (var i = 0; i < set.children.length; i++) {
    if (set.children[i].name.indexOf(wanted) === 0) return set.children[i];
  }
  return null;
}

function bindButtonLabels(set, key) {
  for (var c = 0; c < set.children.length; c++) {
    var label = set.children[c].findOne(function (node) { return node.type === "TEXT"; });
    if (label) label.componentPropertyReferences = { characters: key };
  }
}

async function styleButtonComponent(component, variant, ctx) {
  await fill(component, { type: "frame", name: "button", style: variant.style, children: [] }, ctx, true);
  var text = figma.createText();
  text.name = "label";
  var fontName = await loadFont("Inter", (variant.style.text && variant.style.text.fontWeight) || 600);
  text.fontName = fontName;
  text.characters = "Button";
  if (variant.style.text && variant.style.text.fontSize) text.fontSize = variant.style.text.fontSize;
  if (variant.style.text && variant.style.text.color) text.fills = [paintFor(variant.style.text.color, ctx)];
  trySet(function () { text.textAutoResize = "WIDTH_AND_HEIGHT"; });
  component.appendChild(text);
  trySet(function () {
    text.layoutSizingHorizontal = "HUG";
    text.layoutSizingVertical = "HUG";
    component.primaryAxisSizingMode = "AUTO";
    component.counterAxisSizingMode = "AUTO";
  });
}

async function ensureButton(button, ctx) {
  if (!button) return null;
  var existing = await findById("blokset/button");
  if (existing && existing.getSharedPluginData(BLOKSET, "builder") === BUILDER) {
    layoutVariantGrid(existing);
    ctx.button = existing;
    ctx.buttonLabel = labelKey(existing);
    return existing;
  }
  var home = figma.currentPage;
  var page = await pageNamed("Blokset / Foundations");
  if (existing && existing.parent && existing.parent.type === "PAGE") page = existing.parent;
  await figma.setCurrentPageAsync(page);
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  if (!existing) {
    var components = [];
    for (var i = 0; i < button.variants.length; i++) {
      var created = figma.createComponent();
      created.name = "Variant=" + button.variants[i].name;
      await styleButtonComponent(created, button.variants[i], ctx);
      components.push(created);
    }
    existing = figma.combineAsVariants(components, page);
    existing.name = button.name || "Blokset/Button";
    existing.setSharedPluginData(BLOKSET, "id", "blokset/button");
  } else {
    for (var v = 0; v < button.variants.length; v++) {
      var match = buttonVariantNamed(existing, button.variants[v].name);
      if (!match) {
        match = figma.createComponent();
        match.name = "Variant=" + button.variants[v].name;
        await styleButtonComponent(match, button.variants[v], ctx);
        existing.appendChild(match);
      } else {
        await styleButtonComponent(match, button.variants[v], ctx);
      }
    }
  }
  var key = labelKey(existing) || existing.addComponentProperty("Label", "TEXT", "Button");
  bindButtonLabels(existing, key);
  existing.setSharedPluginData(BLOKSET, "builder", BUILDER);
  layoutVariantGrid(existing);
  ctx.button = existing;
  ctx.buttonLabel = key;
  await figma.setCurrentPageAsync(home);
  return existing;
}

function applySelection(instance, selection, component, ctx) {
  if (!selection) return;
  var defs = instance.componentProperties || {};
  var next = {};
  var axes = component.axes || [];
  for (var key in defs) {
    if (defs[key].type !== "VARIANT") continue;
    var name = key.split("#")[0];
    if (name === "Breakpoint") next[key] = selection.breakpoint || "Desktop";
    for (var a = 0; a < axes.length; a++) {
      if (axes[a].label !== name) continue;
      var chosen = selection[axes[a].name];
      if (!chosen) continue;
      for (var o = 0; o < axes[a].options.length; o++) {
        if (axes[a].options[o].id === chosen) next[key] = axes[a].options[o].value;
      }
    }
  }
  if (Object.keys(next).length) trySet(function () { instance.setProperties(next); });
  if (selection.theme && ctx.themeCollection && ctx.themeModes) {
    var mode = selection.theme.slice(0, 1).toUpperCase() + selection.theme.slice(1);
    if (ctx.themeModes[mode]) trySet(function () { instance.setExplicitVariableModeForCollection(ctx.themeCollection, ctx.themeModes[mode]); });
  }
}

function isPart(id) {
  return String(id || "").indexOf("/") !== -1;
}

function sameSpot(a, b) {
  return Math.abs(a.x - b.x) < 8 && Math.abs(a.y - b.y) < 8;
}

function placeInRow(set, page, part) {
  if (set.parent !== page) page.appendChild(set);
  var others = [];
  for (var i = 0; i < page.children.length; i++) {
    var child = page.children[i];
    if (child === set || (child.type !== "COMPONENT_SET" && child.type !== "COMPONENT")) continue;
    others.push(child);
  }
  var collided = false;
  for (var c = 0; c < others.length; c++) if (sameSpot(set, others[c])) collided = true;
  var x = 0;
  var sectionBottom = 0;
  for (var n = 0; n < others.length; n++) {
    var node = others[n];
    var nodePart = isPart(node.getSharedPluginData ? node.getSharedPluginData(BLOKSET, "id") : "");
    if (!nodePart) sectionBottom = Math.max(sectionBottom, node.y + node.height);
    if (nodePart === part) x = Math.max(x, node.x + Math.max(node.width, 200) + 96);
  }
  var y = part ? (sectionBottom > 0 ? sectionBottom + 160 : 0) : 0;
  if (x > 3600) {
    var bottom = y;
    for (var w = 0; w < others.length; w++) {
      var wrapped = others[w];
      var wrappedPart = isPart(wrapped.getSharedPluginData ? wrapped.getSharedPluginData(BLOKSET, "id") : "");
      if (wrappedPart === part) bottom = Math.max(bottom, wrapped.y + wrapped.height + 96);
    }
    x = 0;
    y = bottom;
  }
  var partsY = sectionBottom > 0 ? sectionBottom + 160 : 0;
  var onRow = part ? (sectionBottom === 0 || set.y + 8 >= partsY) : set.y + 8 < (sectionBottom > 0 ? partsY : 80);
  if (!collided && onRow) return;
  set.x = x;
  set.y = y;
}

function pushPartsBelowSections(page) {
  var sectionBottom = 0;
  var parts = [];
  for (var i = 0; i < page.children.length; i++) {
    var child = page.children[i];
    if (child.type !== "COMPONENT_SET" && child.type !== "COMPONENT") continue;
    if (isPart(child.getSharedPluginData ? child.getSharedPluginData(BLOKSET, "id") : "")) parts.push(child);
    else sectionBottom = Math.max(sectionBottom, child.y + child.height);
  }
  if (!sectionBottom || !parts.length) return;
  var y = sectionBottom + 160;
  var shift = 0;
  for (var p = 0; p < parts.length; p++) if (parts[p].y + 8 < y) shift = Math.max(shift, y - parts[p].y);
  if (!shift) return;
  for (var n = 0; n < parts.length; n++) parts[n].y += shift;
}

var LIBRARY_HELP = "Open the Blokset kit file, run Build kit, publish it as a library, and enable that library in this file.";

async function localTheme() {
  var ctx = { themeCollection: null, themeModes: {} };
  if (!figma.variables) return ctx;
  var all = await figma.variables.getLocalVariableCollectionsAsync();
  for (var i = 0; i < all.length; i++) {
    if (all[i].name !== "Blokset/Theme") continue;
    ctx.themeCollection = all[i];
    for (var m = 0; m < all[i].modes.length; m++) ctx.themeModes[all[i].modes[m].name] = all[i].modes[m].modeId;
  }
  return ctx;
}

function placeInstance(instance) {
  var page = figma.currentPage;
  var right = 0;
  for (var n = 0; n < page.children.length; n++) {
    var child = page.children[n];
    if (child === instance) continue;
    right = Math.max(right, child.x + child.width);
  }
  instance.x = right > 0 ? right + 120 : 0;
  instance.y = 0;
}

async function insertFromLibrary(message) {
  var name = message.name;
  if (!name) throw new Error("Pick a component");
  if (!figma.teamLibrary || !figma.teamLibrary.getAvailableLibraryComponentsAsync) throw new Error(LIBRARY_HELP);
  var list = [];
  try {
    list = await figma.teamLibrary.getAvailableLibraryComponentsAsync();
  } catch (error) {
    throw new Error(LIBRARY_HELP);
  }
  var matches = [];
  for (var i = 0; i < list.length; i++) if (list[i].name === name) matches.push(list[i]);
  if (!matches.length) throw new Error(LIBRARY_HELP);
  var set = null;
  var component = null;
  for (var m = 0; m < matches.length && !set; m++) {
    try {
      set = await figma.importComponentSetByKeyAsync(matches[m].key);
    } catch (error) {
      try {
        component = await figma.importComponentByKeyAsync(matches[m].key);
        if (component.parent && component.parent.type === "COMPONENT_SET") set = component.parent;
      } catch (importError) {
        component = null;
      }
    }
  }
  if (!set && !component) throw new Error(LIBRARY_HELP);
  var instance = set ? set.defaultVariant.createInstance() : component.createInstance();
  instance.name = name;
  placeInstance(instance);
  applySelection(instance, message.selection || {}, { axes: message.axes || [] }, await localTheme());
  figma.currentPage.selection = [instance];
  figma.viewport.scrollAndZoomIntoView([instance]);
  return { id: name, status: "inserted", name: name };
}

async function buildDocument(message) {
  if (!message.page) throw new Error(LIBRARY_HELP);
  var doc = message.doc;
  var kit = message.kit || {};
  var ctx = await ensureVariables({ variables: kit.variables, fonts: doc.fonts || kit.fonts || {} });
  ctx.sets = {};
  ctx.hash = doc.hash;
  ctx.meta = doc.meta;
  ctx.fonts = doc.fonts || kit.fonts || ctx.fonts;
  await ensureButton(kit.button, ctx);
  var home = await pageNamed("Blokset / " + titleCase(message.page));
  await figma.setCurrentPageAsync(home);
  var components = doc.components || [];
  var built = [];
  for (var i = components.length - 1; i >= 0; i--) {
    built.push({ set: await upsertSet(components[i], ctx, home), part: isPart(components[i].id) });
  }
  for (var s = 0; s < built.length; s++) if (!built[s].part) placeInRow(built[s].set, home, false);
  for (var p = 0; p < built.length; p++) if (built[p].part) placeInRow(built[p].set, home, true);
  pushPartsBelowSections(home);
  return { id: doc.meta.id, status: "kit", name: doc.meta.name };
}

async function writeCover(count) {
  var page = await pageNamed("Blokset / Cover");
  await figma.setCurrentPageAsync(page);
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  var text = page.findOne(function (node) { return node.type === "TEXT" && node.name === "cover"; });
  if (!text) {
    text = figma.createText();
    text.name = "cover";
    page.appendChild(text);
  } else {
    await figma.loadFontAsync(text.fontName);
  }
  text.fontName = { family: "Inter", style: "Regular" };
  text.fontSize = 16;
  text.characters = "Blokset\n\nComponents built from the same specs as the code and Webflow library.\nPublish this file as a library, enable it in a project file, then insert from the plugin.\n" + count + " components. Motion is described on each component; it is not an interaction in Figma.";
  var log = await pageNamed("Blokset / Changelog");
  await figma.setCurrentPageAsync(log);
  var line = figma.createText();
  line.fontName = { family: "Inter", style: "Regular" };
  line.fontSize = 14;
  var when = new Date();
  line.characters = when.toISOString().slice(0, 10) + "  " + count + " components";
  line.x = 0;
  line.y = log.children.length * 28;
  log.appendChild(line);
}

figma.showUI(__html__, { width: 380, height: 640, themeColors: true });

async function readJson(url) {
  var response = await fetch(url);
  if (!response.ok) throw new Error(response.status + " " + url);
  return response.json();
}

figma.ui.onmessage = async function (message) {
  try {
    if (message.type === "load-json") {
      try {
        post({ type: "json", request: message.request, data: await readJson(message.url) });
      } catch (error) {
        post({ type: "json", request: message.request, error: String(error && error.message ? error.message : error) });
      }
      return;
    }
    if (message.type === "library-insert") {
      var inserted = await insertFromLibrary(message);
      post({ type: "result", id: inserted.id, status: inserted.status, name: inserted.name });
      return;
    }
    if (message.type === "upsert") {
      var result = await buildDocument(message);
      post({ type: "result", id: result.id, status: result.status, name: result.name });
      return;
    }
    if (message.type === "cover") {
      await writeCover(message.count || 0);
      post({ type: "result", id: "cover", status: "cover" });
      return;
    }
    post({ type: "result", id: "", status: "ignored" });
  } catch (error) {
    post({ type: "result", id: (message.doc && message.doc.meta && message.doc.meta.id) || message.name || "", status: "error", error: String(error && error.message ? error.message : error) });
  }
};
