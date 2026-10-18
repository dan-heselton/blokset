// A landscape, a portrait that opens larger, and a short note with a signature.
import { mono, pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  heading: { color: "fg" },
  body: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1600&q=80`, alt });
const inset = { top: "0", right: "0", bottom: "0", left: "0" };

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "about-01",
  prefix: "about1",
  name: "About / Video note",
  category: "about",
  description: "A landscape photograph with a smaller portrait set into it. The portrait opens larger. A short note and a signature sit beside it.",

  props: {
    showStage: { type: "boolean", default: true },
    landscape: { type: "image", default: photo("1501594907352-04cda38ebc29", "A wooden pier over still water") },
    showPortrait: { type: "boolean", default: true },
    portrait: { type: "image", default: photo("1494790108377-be9c29b29330", "A portrait of a person outdoors") },
    caption: { type: "text", default: "A short film from the studio" },
    heading: { type: "text", default: "A practice built around clear work" },
    showBody: { type: "boolean", default: true },
    lead: { type: "text", default: "We write the structure first, then the pages. The result is a site a small team can keep." },
    support: { type: "text", default: "The motion stays in the runtime. The type stays in the spec. Nothing here depends on a one-off stylesheet." },
    showSignature: { type: "boolean", default: true },
    signature: { type: "text", default: "Smith." },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["heading", "body"] } },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component", attrs: { "data-blok-lightbox": "" },
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0rem" } },
        children: [
          {
            tag: "div", key: "grid",
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "align-items": "center", "row-gap": "2rem", "column-gap": "0rem", "padding-bottom": "0rem" },
              lg: { "grid-template-columns": "1.2fr 1fr", "column-gap": "3rem", "row-gap": "0rem", "padding-bottom": "2rem" },
            },
            children: [
              {
                tag: "div", key: "stage", if: "showStage",
                style: { base: { position: "relative", width: "100%" } },
                children: [
                  {
                    tag: "img", key: "landscape", bind: "landscape",
                    style: { base: { display: "block", width: "100%", height: "16rem", "object-fit": "cover", ...radius("token(radius-card)") }, lg: { height: "28rem" } },
                  },
                  {
                    tag: "div", key: "portrait", if: "showPortrait", attrs: { "data-blok-lightbox-item": "", "data-blok-caption": "=caption" },
                    style: {
                      base: {
                        position: "relative", top: "auto", right: "auto", bottom: "auto", left: "auto",
                        width: "8rem", height: "10rem", "margin-top": "-3rem", "margin-left": "1.25rem", cursor: "pointer", overflow: "hidden",
                        ...radius("token(radius)"),
                      },
                      lg: { position: "absolute", top: "auto", right: "1.5rem", bottom: "-2rem", left: "auto", "margin-top": "0rem", "margin-left": "0rem", width: "11rem", height: "14rem" },
                    },
                    children: [{
                      tag: "img", key: "portrait-image", bind: "portrait",
                      style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } },
                    }],
                  },
                ],
              },
              {
                tag: "div", key: "copy",
                style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "1.25rem" } },
                children: [
                  {
                    tag: "h2", key: "heading", bind: "heading",
                    style: {
                      base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-serif)", "font-size": "2.75rem", "line-height": "1.02", "font-weight": "500", "letter-spacing": "-0.03em", ...t("heading") },
                      lg: { "font-size": "3.75rem" },
                    },
                  },
                  {
                    tag: "div", key: "body", if: "showBody",
                    style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.9rem", ...t("body") } },
                    children: [
                      { tag: "p", key: "lead", bind: "lead", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.6" } } },
                      { tag: "p", key: "support", bind: "support", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "1rem", "line-height": "1.6" } } },
                    ],
                  },
                  {
                    tag: "div", key: "signature", bind: "signature", if: "showSignature",
                    style: { base: { "font-family": "token(font-serif)", "font-size": "2rem", "font-style": "italic", "line-height": "1", "font-weight": "500" } },
                  },
                ],
              },
            ],
          },
          {
            tag: "div", key: "dialog", attrs: { "data-blok-lightbox-dialog": "", hidden: "" },
            style: {
              base: {
                position: "fixed", ...inset, "z-index": "30",
                display: "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center",
                "row-gap": "1rem", "background-color": "token(overlay-strong)", ...pad("1.25rem"),
              },
            },
            children: [
              {
                tag: "div", key: "close", text: "Close", attrs: { "data-blok-lightbox-close": "" },
                style: { base: { ...mono(), cursor: "pointer", "align-self": "flex-end", color: "token(surface)" } },
              },
              {
                tag: "div", key: "dialog-media",
                style: { base: { width: "100%", "max-width": "64rem", overflow: "hidden", "aspect-ratio": "16 / 10", ...radius("token(radius-card)") } },
                children: [{ tag: "img", key: "dialog-image", bind: "portrait", attrs: { "data-blok-lightbox-image": "" }, style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } }],
              },
              { tag: "p", key: "dialog-caption", bind: "caption", attrs: { "data-blok-lightbox-caption": "" }, style: { base: { "margin-top": "0", "margin-bottom": "0", ...mono(), color: "token(surface)" } } },
            ],
          },
        ],
      }),
    ],
  },
};
