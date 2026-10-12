// A centered serif headline with circular photographs drifting around it.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  heading: { color: "fg" },
  description: { color: "muted" },
  proof: { "background-color": "panel", color: "fg" },
  "badge-fast": { "background-color": "glyph", color: "fg" },
  "badge-rate": { "background-color": "panel", color: "fg" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=800&q=80`, alt });
const parked = { position: "relative", top: "auto", right: "auto", bottom: "auto", left: "auto" };

function circle(n, depth, prop, box) {
  return {
    tag: "div", key: `frame-${n}`, if: "showImages", attrs: { "data-blok-pointer-layer": "", "data-blok-depth": depth },
    style: {
      base: { ...parked, "z-index": "1", overflow: "hidden", "flex-shrink": "0", width: "5.5rem", height: "5.5rem", "margin-top": "0rem", ...radius("999px") },
      lg: { position: "absolute", "margin-top": "0rem", width: "7.5rem", height: "7.5rem", ...box },
    },
    children: [
      { tag: "img", key: `image-${n}`, bind: prop, style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } },
    ],
  };
}

function badge(key, depth, bind, themeKey, box) {
  return {
    tag: "div", key, bind, if: "showBadges", attrs: { "data-blok-pointer-layer": "", "data-blok-depth": depth },
    style: {
      base: { ...parked, "z-index": "2", display: "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", width: "auto", height: "auto", "margin-top": "0rem", ...mono(), ...radius("999px"), "padding-top": "0.45rem", "padding-bottom": "0.45rem", "padding-left": "0.7rem", "padding-right": "0.7rem", ...t(themeKey) },
      lg: { position: "absolute", "margin-top": "0rem", ...box },
    },
  };
}

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-32",
  prefix: "hero32",
  name: "Hero / Floating circles",
  category: "hero",
  description: "A centered serif headline with a proof pill, and circular photographs that follow the pointer. On a phone the circles sit in one row.",

  props: {
    showProof: { type: "boolean", default: true, description: "Show the proof pill." },
    proof: { type: "text", default: "Maya Chen and the shop next door" },
    avatars: {
      type: "list",
      fields: { image: "image" },
      default: [
        { image: shot("1494790108377-be9c29b29330", "Portrait of a woman smiling") },
        { image: shot("1507003211169-0a1dd7228f2d", "Portrait of a man") },
        { image: shot("1438761681033-6461ffad8d80", "Portrait of a woman outdoors") },
      ],
    },
    heading: { type: "text", default: "Work you can point at." },
    showDescription: { type: "boolean", default: true, description: "Show the line under the headline." },
    description: { type: "text", default: "Pages for studios, shops, and the front desk. Updates in an afternoon, not a quarter." },
    showButtons: { type: "boolean", default: true, description: "Show the action buttons." },
    buttons: {
      type: "buttons",
      max: 2,
      default: [
        { title: "Get started", href: "#", variant: "dark" },
        { title: "Learn more", href: "#", variant: "secondary" },
      ],
    },
    showImages: { type: "boolean", default: true, description: "Show the circular photographs." },
    image1: { type: "image", priority: true, default: shot("1534528741775-53994a69daeb", "Portrait of a woman in warm light") },
    image2: { type: "image", default: shot("1472099645785-5658abf4ff4e", "Portrait of a man in a dark shirt") },
    image3: { type: "image", default: shot("1522202176988-66273c2fd55f", "Two people working at a laptop") },
    image4: { type: "image", default: shot("1544005313-94ddf0286df2", "Portrait of a woman facing the camera") },
    showBadges: { type: "boolean", default: true, description: "Show the two floating labels." },
    badgeFast: { type: "text", default: "Since 2014" },
    badgeRate: { type: "text", default: "18 Main Street" },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["proof", "heading", "description", "actions"] } },

  tree: {
    role: "section",
    attrs: { "data-blok-pointer": "" },
    style: {
      base: { position: "relative", overflow: "hidden", "min-height": "0px", ...t("section") },
      lg: { "min-height": "100svh" },
    },
    children: [
      shell({
        tag: "div", key: "component",
        style: {
          base: { position: "relative", "z-index": "3", display: "flex", "flex-direction": "column", "align-items": "center", "row-gap": "1.25rem", "text-align": "center", "padding-top": "0rem", "padding-bottom": "0rem" },
          lg: { "padding-top": "6rem", "padding-bottom": "6rem" },
        },
        children: [
          {
            tag: "div", key: "proof", if: "showProof",
            style: { base: { display: "inline-flex", "align-items": "center", "column-gap": "0.7rem", ...radius("999px"), "padding-top": "0.35rem", "padding-bottom": "0.35rem", "padding-left": "0.4rem", "padding-right": "0.9rem", ...t("proof") } },
            children: [
              {
                tag: "div", key: "faces", repeat: "avatars",
                style: { base: { display: "flex", "padding-left": "0.45rem" } },
                children: [{
                  tag: "div", key: "face",
                  style: { base: { overflow: "hidden", "flex-shrink": "0", width: "1.85rem", height: "1.85rem", "margin-left": "-0.45rem", "border-top-width": "2px", "border-right-width": "2px", "border-bottom-width": "2px", "border-left-width": "2px", "border-top-style": "solid", "border-right-style": "solid", "border-bottom-style": "solid", "border-left-style": "solid", "border-top-color": "token(surface)", "border-right-color": "token(surface)", "border-bottom-color": "token(surface)", "border-left-color": "token(surface)", ...radius("999px") } },
                  children: [{ tag: "img", key: "face-image", bind: "item.image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } }],
                }],
              },
              { tag: "div", key: "proof-text", bind: "proof", style: { base: { "font-size": "0.9rem", "line-height": "1.3", "font-weight": "600" } } },
            ],
          },
          {
            tag: "h1", key: "heading", bind: "heading",
            style: {
              base: { "margin-top": "0", "margin-bottom": "0", "max-width": "14ch", "font-family": "token(font-serif)", "font-size": "3rem", "line-height": "1.02", "font-weight": "500", "letter-spacing": "-0.03em", ...t("heading") },
              md: { "font-size": "4.25rem" },
              lg: { "font-size": "5.25rem" },
            },
          },
          {
            tag: "p", key: "description", bind: "description", if: "showDescription",
            style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "34rem", "font-size": "1.05rem", "line-height": "1.55", ...t("description") } },
          },
          {
            tag: "div", key: "actions", repeat: "buttons", if: "showButtons",
            style: { base: { display: "flex", "flex-wrap": "wrap", "justify-content": "center", "column-gap": "0.75rem", "row-gap": "0.75rem" } },
          },
        ],
      }, { size: "medium" }),
      {
        tag: "div", key: "orbit",
        style: {
          base: { position: "relative", top: "auto", right: "auto", bottom: "auto", left: "auto", "z-index": "1", display: "flex", "flex-wrap": "wrap", "justify-content": "center", "align-items": "center", "column-gap": "0.6rem", "row-gap": "0.6rem", "padding-top": "0.5rem", "padding-bottom": "1.5rem", "padding-left": "5%", "padding-right": "5%" },
          lg: { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", display: "block", "padding-top": "0rem", "padding-bottom": "0rem", "padding-left": "0rem", "padding-right": "0rem" },
        },
        children: [
          circle("1", "0.45", "image1", { top: "10%", left: "6%" }),
          circle("2", "-0.35", "image2", { top: "12%", left: "82%" }),
          circle("3", "0.28", "image3", { top: "68%", left: "8%" }),
          circle("4", "-0.22", "image4", { top: "64%", left: "78%" }),
          badge("badge-fast", "0.15", "badgeFast", "badge-fast", { top: "42%", left: "3%" }),
          badge("badge-rate", "-0.18", "badgeRate", "badge-rate", { top: "40%", left: "74%" }),
        ],
      },
    ],
  },
};
