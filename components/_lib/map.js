// A street map of Rockport, the kind of view a navigation map shows. The pin sits on the town.
import { inset0, radius } from "./themes.js";

const SRC = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/export?bbox=-70.6453,42.6457,-70.5953,42.6657&bboxSR=4326&imageSR=4326&size=1600,900&format=jpg&f=image";

/** Image prop for the Rockport street map. */
export const rockportMapImage = {
  type: "image",
  default: {
    src: SRC,
    alt: "A street map of Rockport, with the harbor to the east and the town in the center",
  },
};

/**
 * Map frame, pin, and credit. `extra` merges onto the frame so a section can set its height.
 * The pin is the center of the map, on the town.
 */
export function rockportMap(extra = {}) {
  return {
    tag: "div", key: "map",
    style: {
      base: {
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "16rem",
        "flex-shrink": "0",
        "background-color": "token(surface-2)",
        ...radius("token(radius-card)"),
        ...(extra.base || {}),
      },
      ...(extra.md ? { md: extra.md } : {}),
      ...(extra.lg ? { lg: extra.lg } : {}),
    },
    children: [
      {
        tag: "img", key: "basemap", bind: "map",
        style: { base: { ...inset0, width: "100%", height: "100%", "object-fit": "cover" } },
      },
      {
        tag: "div", key: "pin", decorative: true,
        style: {
          base: {
            position: "absolute",
            left: "50%",
            top: "50%",
            "z-index": "2",
            display: "flex",
            "align-items": "center",
            "justify-content": "center",
            width: "1.35rem",
            height: "1.35rem",
            "margin-left": "-0.675rem",
            "margin-top": "-0.675rem",
            "background-color": "token(button-bg)",
            "box-shadow": "0 1px 4px rgba(0, 0, 0, 0.35)",
            ...radius("50%"),
          },
        },
        children: [{
          tag: "div", key: "pin-dot", decorative: true,
          style: { base: { width: "0.7rem", height: "0.7rem", "background-color": "token(accent)", ...radius("50%") } },
        }],
      },
      {
        tag: "div", key: "credit", text: "© Esri", decorative: true,
        style: {
          base: {
            position: "absolute",
            right: "0.4rem",
            bottom: "0.4rem",
            "z-index": "2",
            "padding-top": "0.1rem",
            "padding-bottom": "0.1rem",
            "padding-left": "0.35rem",
            "padding-right": "0.35rem",
            "background-color": "token(button-bg)",
            color: "token(ink-muted)",
            "font-family": "token(font-mono)",
            "font-size": "0.625rem",
            "line-height": "1.4",
            ...radius("0.25rem"),
          },
        },
      },
    ],
  };
}
