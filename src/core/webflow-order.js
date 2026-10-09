// Property order Webflow stores on a class. Learned from 1,115 classes (2,232 property lists)
// on a live Client-First site: known properties sort into this sequence, and anything else
// keeps its original order after them. A different order counts as a different class.
export const WEBFLOW_PROPERTY_ORDER = [
  "filter", "overflow-x", "position", "left", "top", "right", "overflow-y", "bottom", "z-index", "display",
  "visibility", "overflow", "width", "height", "max-height", "max-width", "min-height", "min-width",
  "margin-top", "margin-right", "margin-bottom", "float", "margin-left", "padding-top", "padding-right",
  "padding-bottom", "padding-left", "flex-direction", "justify-content", "justify-items", "flex-wrap",
  "align-items", "flex-grow", "aspect-ratio", "align-content", "flex-shrink", "align-self", "grid-auto-flow",
  "grid-auto-columns", "grid-auto-rows", "grid-column-gap", "flex-basis", "grid-row-gap", "border-top-style",
  "border-top-width", "border-top-color", "border-right-style", "border-right-width", "border-right-color",
  "border-bottom-style", "border-bottom-width", "border-bottom-color", "border-left-style", "grid-template-columns",
  "border-left-width", "border-left-color", "border-top-left-radius", "border-top-right-radius",
  "border-bottom-left-radius", "border-bottom-right-radius", "opacity", "pointer-events", "background-color",
  "font-family", "box-shadow", "background-image", "background-position", "font-style", "background-size",
  "transition-property", "transform", "transition-duration", "transition-timing-function", "color", "font-size",
  "line-height", "object-fit", "grid-template-rows", "font-weight", "text-align", "letter-spacing", "white-space",
  "cursor", "text-decoration", "column-gap", "grid-column-end", "text-transform", "grid-column-start",
  "grid-row-end", "row-gap", "background-clip", "background-repeat", "clear", "font-variant-numeric",
  "grid-row-start", "object-position", "text-indent", "text-underline-offset",
];

const RANK = new Map(WEBFLOW_PROPERTY_ORDER.map((name, index) => [name, index]));

/** Known properties in Webflow's order. Unknown properties stay in their original order, after the known ones. */
export function webflowOrder(props = {}) {
  const known = [];
  const unknown = [];
  for (const entry of Object.entries(props)) {
    if (RANK.has(entry[0])) known.push(entry);
    else unknown.push(entry);
  }
  known.sort((a, b) => RANK.get(a[0]) - RANK.get(b[0]));
  return Object.fromEntries([...known, ...unknown]);
}
