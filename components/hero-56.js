// A headline and proof line, a photograph with a time card, and a logo line underneath.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  heading: { color: "fg" },
  description: { color: "muted" },
  trust: { color: "muted" },
  logo: { color: "muted" },
  avatar: { "border-top-color": "bg", "border-right-color": "bg", "border-bottom-color": "bg", "border-left-color": "bg" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1400&q=80`, alt });
const pill = {
  "border-top-left-radius": "999px", "border-top-right-radius": "999px",
  "border-bottom-right-radius": "999px", "border-bottom-left-radius": "999px",
};

function segment(key, grow, color) {
  return {
    tag: "div", key, decorative: true,
    style: { base: { height: "100%", "flex-grow": grow, "flex-basis": "0px", "background-color": color } },
  };
}

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "hero-56",
  prefix: "hero56",
  name: "Hero / Proof video",
  category: "hero",
  description: "A headline, two actions, and a proof line. The photograph carries a pause mark and a time card. A logo line runs underneath.",

  props: {
    heading: { type: "text", default: "The AI that gets your Flow" },
    showDescription: { type: "boolean", default: true },
    description: { type: "text", default: "Every part of your stack decoded and transformed into crystal-clear explanations." },
    showButtons: { type: "boolean", default: true },
    buttons: {
      type: "buttons",
      max: 2,
      default: [
        { title: "Get Started", href: "#", variant: "dark" },
        { title: "Book a demo", href: "#", variant: "secondary" },
      ],
    },
    showAvatars: { type: "boolean", default: true },
    avatars: {
      type: "list",
      fields: { image: "image" },
      default: [
        { image: photo("1500648767791-00dcc994a43e", "Portrait of Noah Voss") },
        { image: photo("1507003211169-0a1dd7228f2d", "Portrait of Eli Hart") },
        { image: photo("1494790108377-be9c29b29330", "Portrait of Maren Okafor") },
      ],
    },
    showTrust: { type: "boolean", default: true },
    trust: { type: "text", default: "8,500+ developers already using Nerdstack" },
    showImage: { type: "boolean", default: true },
    image: { type: "image", priority: true, default: photo("1497366216548-37526070297c", "Two people working at a laptop") },
    showCard: { type: "boolean", default: true },
    cardTitle: { type: "text", default: "Time distribution" },
    cardValue: { type: "text", default: "24 total cycles" },
    cardFile: { type: "text", default: "AuthService.ts" },
    showLogos: { type: "boolean", default: true },
    logos: {
      type: "list",
      fields: { name: "text" },
      default: ["terra-tory", "Sophia", "For:Human", "FRANCO", "Harbor", "Mor"].map((name) => ({ name })),
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: { enter: { preset: "fade-up", stagger: 0.08, targets: ["heading", "description"] } },

  tree: {
    role: "section",
    style: { base: { overflow: "hidden", ...t("section") } },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "3rem" } },
        children: [
          {
            tag: "div", key: "split",
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "align-items": "center", "row-gap": "2.5rem", "column-gap": "0rem" },
              lg: { "grid-template-columns": "1fr 1.1fr", "column-gap": "3rem", "row-gap": "0rem" },
            },
            children: [
              {
                tag: "div", key: "copy",
                style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "1.25rem" } },
                children: [
                  {
                    tag: "h1", key: "heading", bind: "heading",
                    style: {
                      base: { "margin-top": "0", "margin-bottom": "0", "max-width": "16rem", "font-family": "token(font-display)", "font-size": "3rem", "line-height": "1", "font-weight": "600", "letter-spacing": "-0.04em", ...t("heading") },
                      lg: { "font-size": "4.25rem" },
                    },
                  },
                  {
                    tag: "p", key: "description", bind: "description", if: "showDescription",
                    style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "26rem", "font-size": "1.0625rem", "line-height": "1.6", ...t("description") } },
                  },
                  { tag: "div", key: "actions", repeat: "buttons", if: "showButtons", style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "0.6rem", "row-gap": "0.6rem" } } },
                  {
                    tag: "div", key: "proof",
                    style: { base: { display: "flex", "align-items": "center", "column-gap": "0.85rem", "margin-top": "0.5rem" } },
                    children: [
                      {
                        tag: "div", key: "avatars", repeat: "avatars", if: "showAvatars",
                        style: { base: { display: "flex", "align-items": "center", "padding-left": "0.55rem" } },
                        children: [{
                          tag: "img", key: "avatar", bind: "item.image",
                          style: {
                            base: {
                              display: "block", width: "2rem", height: "2rem", "margin-left": "-0.55rem", "object-fit": "cover",
                              "border-top-width": "2px", "border-right-width": "2px", "border-bottom-width": "2px", "border-left-width": "2px",
                              "border-top-style": "solid", "border-right-style": "solid", "border-bottom-style": "solid", "border-left-style": "solid",
                              ...t("avatar"), ...pill,
                            },
                          },
                        }],
                      },
                      { tag: "div", key: "trust", bind: "trust", if: "showTrust", attrs: { "data-blok-count": "" }, style: { base: { "font-size": "0.875rem", "line-height": "1.4", ...t("trust") } } },
                    ],
                  },
                ],
              },
              {
                tag: "div", key: "stage", if: "showImage",
                style: { base: { position: "relative", width: "100%" } },
                children: [
                  {
                    tag: "img", key: "image", bind: "image",
                    style: { base: { display: "block", width: "100%", height: "20rem", "object-fit": "cover", ...radius("token(radius-card)") }, lg: { height: "26rem" } },
                  },
                  {
                    tag: "div", key: "pause", decorative: true, text: "II",
                    style: {
                      base: {
                        position: "absolute", top: "50%", left: "50%", display: "flex", "align-items": "center", "justify-content": "center",
                        width: "2.75rem", height: "2.75rem", "margin-top": "-1.4rem", "margin-left": "-1.4rem",
                        "background-color": "token(surface)", color: "token(ink)", "font-size": "0.75rem", "font-weight": "600", "letter-spacing": "0.08em",
                        ...pill,
                      },
                    },
                  },
                  {
                    tag: "div", key: "time", if: "showCard",
                    style: {
                      base: {
                        position: "relative", right: "auto", bottom: "auto", display: "flex", "flex-direction": "column", "row-gap": "0.65rem",
                        width: "100%", "max-width": "18rem", "margin-top": "-3rem", "margin-left": "auto", "margin-right": "1rem",
                        "background-color": "token(ink)", color: "token(surface)",
                        "padding-top": "0.9rem", "padding-right": "1rem", "padding-bottom": "0.9rem", "padding-left": "1rem",
                        ...radius("token(radius-card)"),
                      },
                      lg: { position: "absolute", right: "1rem", bottom: "1rem", "margin-top": "0rem" },
                    },
                    children: [
                      { tag: "div", key: "time-title", bind: "cardTitle", style: { base: { ...mono(), "font-size": "0.6875rem", opacity: "0.7" } } },
                      { tag: "div", key: "time-value", bind: "cardValue", attrs: { "data-blok-count": "" }, style: { base: { "font-size": "0.9375rem", "line-height": "1.3", "font-weight": "600" } } },
                      {
                        tag: "div", key: "meter",
                        style: { base: { display: "flex", width: "100%", height: "0.4rem", overflow: "hidden", ...pill } },
                        children: [
                          segment("seg-explain", "3", "token(accent)"),
                          segment("seg-debug", "2", "token(surface)"),
                          segment("seg-review", "2", "token(surface-2)"),
                          segment("seg-docs", "1", "token(line)"),
                        ],
                      },
                      {
                        tag: "div", key: "legend",
                        style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "0.65rem", "row-gap": "0.25rem" } },
                        children: [
                          { tag: "div", key: "legend-explain", text: "Explain", style: { base: { "font-size": "0.6875rem", "line-height": "1.3", opacity: "0.75" } } },
                          { tag: "div", key: "legend-debug", text: "Debug", style: { base: { "font-size": "0.6875rem", "line-height": "1.3", opacity: "0.75" } } },
                          { tag: "div", key: "legend-review", text: "Review", style: { base: { "font-size": "0.6875rem", "line-height": "1.3", opacity: "0.75" } } },
                          { tag: "div", key: "legend-docs", text: "Docs", style: { base: { "font-size": "0.6875rem", "line-height": "1.3", opacity: "0.75" } } },
                        ],
                      },
                      { tag: "div", key: "time-file", bind: "cardFile", style: { base: { "font-family": "token(font-mono)", "font-size": "0.75rem", "line-height": "1.4" } } },
                    ],
                  },
                ],
              },
            ],
          },
          {
            tag: "div", key: "logos", repeat: "logos", if: "showLogos", attrs: { "data-blok-marquee": "", "data-blok-speed": "36" },
            style: { base: { display: "flex", width: "max-content", "align-items": "center" } },
            children: [{
              tag: "div", key: "logo", bind: "item.name",
              style: { base: { "flex-shrink": "0", "padding-right": "2.5rem", "font-family": "token(font-display)", "font-size": "1.25rem", "line-height": "1", "font-weight": "600", "letter-spacing": "-0.03em", ...t("logo") } },
            }],
          },
        ],
      }),
    ],
  },
};
