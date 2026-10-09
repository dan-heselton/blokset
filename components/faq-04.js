// FAQ accordion: sticky intro with an optional portrait and contact button, beside a smooth,
// keyboard-accessible accordion. Answers are visible without JS; the runtime collapses them.
import { themeVariant, themeBase, radius, mono } from "./_lib/themes.js";
import { shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  eyebrow: { color: "muted" },
  description: { color: "muted" },
  list: { "border-bottom-color": "line" },
  item: { "border-top-color": "line" },
  icon: { color: "glyph" },
  answer: { color: "muted" },
  "contact-role": { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "faq-04",
  prefix: "faq4",
  name: "FAQ / Accordion",
  category: "faq",
  description: "Sticky intro beside a smooth, keyboard-accessible accordion. Optional contact card with portrait; split or stacked layout.",

  props: {
    showEyebrow: { type: "boolean", default: true },
    eyebrow: { type: "text", default: "FAQ" },
    heading: { type: "text", default: "Questions, answered" },
    showDescription: { type: "boolean", default: true },
    description: { type: "text", default: "The things people ask before we start. Don't see yours? We reply within one business day." },
    showContact: { type: "boolean", default: true, description: "Small contact card with portrait under the intro" },
    contactImage: { type: "image", default: { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80", alt: "Portrait of the studio lead" } },
    contactName: { type: "text", default: "Talk to a human" },
    contactRole: { type: "text", default: "hello@studio.co" },
    showButtons: { type: "boolean", default: true },
    buttons: { type: "buttons", max: 1, default: [{ title: "Ask a question", href: "#", variant: "dark" }] },
    questions: {
      type: "list",
      fields: { question: "text", answer: "text" },
      default: [
        { question: "How long does a typical website take?", answer: "Most marketing sites take six to ten weeks from kickoff to launch. Smaller refreshes can land in three or four." },
        { question: "Do you work in Webflow or code?", answer: "Both. Webflow when your team wants to edit visually, Astro or Next when you need custom logic. Same design system either way." },
        { question: "Can we update the site ourselves?", answer: "Yes. Every section is a component with clear fields, and we record short training videos for your editors." },
        { question: "What does it cost?", answer: "Projects start around $8k. You get a fixed price after the first call, with no hourly surprises." },
        { question: "Do you offer ongoing support?", answer: "A monthly care plan covers updates, small changes and performance checks, with a same-week response time." },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
    layout: {
      label: "Layout",
      default: "split",
      options: {
        split: null,
        stacked: {
          styles: {
            component: { base: { "flex-direction": "column", "align-items": "stretch", "row-gap": "3rem", "column-gap": "0rem" }, lg: { "flex-direction": "column", "align-items": "stretch", "row-gap": "4rem", "column-gap": "0rem" } },
            intro: { base: { position: "static", width: "100%" }, lg: { position: "static", width: "100%" } },
            list: { base: { "max-width": "56rem" } },
          },
        },
      },
    },
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.1, targets: ["eyebrow", "heading", "description", "contact", "actions"] },
    reveal: { preset: "fade-up", targets: ["item"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: {
          base: { display: "flex", "flex-direction": "column", "align-items": "stretch", "row-gap": "3rem", "column-gap": "0rem" },
          lg: { "flex-direction": "row", "align-items": "flex-start", "row-gap": "0rem", "column-gap": "6rem" },
        },
        children: [
          {
            tag: "div", key: "intro",
            style: { base: { position: "static", top: "auto", width: "100%", "flex-shrink": "0" }, lg: { position: "sticky", top: "6rem", width: "32%" } },
            children: [
              { tag: "div", key: "eyebrow", bind: "eyebrow", if: "showEyebrow", style: { base: { ...mono(), "margin-bottom": "1.25rem", ...t("eyebrow") } } },
              {
                tag: "h2", key: "heading", bind: "heading",
                style: { base: { "margin-top": "0", "margin-bottom": "1.25rem", "font-family": "token(font-display)", "font-size": "2.5rem", "line-height": "1.02", "font-weight": "600", "letter-spacing": "-0.03em" }, lg: { "font-size": "3.5rem" } },
              },
              { tag: "p", key: "description", bind: "description", if: "showDescription", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "26rem", "font-size": "1.0625rem", "line-height": "1.6", ...t("description") } } },
              {
                tag: "div", key: "contact", if: "showContact",
                style: { base: { display: "flex", "align-items": "center", "column-gap": "0.875rem", "margin-top": "2rem" } },
                children: [
                  { tag: "img", key: "contact-image", bind: "contactImage", style: { base: { width: "3rem", height: "3rem", "object-fit": "cover", ...radius("50%") } } },
                  {
                    tag: "div", key: "contact-text",
                    children: [
                      { tag: "div", key: "contact-name", bind: "contactName", style: { base: { "font-weight": "600", "line-height": "1.3" } } },
                      { tag: "div", key: "contact-role", bind: "contactRole", style: { base: { "font-family": "token(font-mono)", "font-size": "0.8125rem", ...t("contact-role") } } },
                    ],
                  },
                ],
              },
              { tag: "div", key: "actions", repeat: "buttons", if: "showButtons", style: { base: { display: "flex", "margin-top": "1.5rem" } } },
            ],
          },
          {
            tag: "div", key: "list", repeat: "questions", attrs: { "data-blok-accordion": "" },
            style: { base: { "flex-grow": "1", "border-bottom-width": "1px", "border-bottom-style": "solid", ...t("list") } },
            children: [
              {
                tag: "div", key: "item", attrs: { "data-blok-acc-item": "" },
                style: { base: { "border-top-width": "1px", "border-top-style": "solid", ...t("item") } },
                children: [
                  {
                    tag: "div", key: "trigger", attrs: { "data-blok-acc-trigger": "" },
                    style: { base: { display: "flex", "align-items": "flex-start", "justify-content": "space-between", "column-gap": "1.5rem", "padding-top": "1.5rem", "padding-bottom": "1.5rem", cursor: "pointer" }, lg: { "padding-top": "1.75rem", "padding-bottom": "1.75rem" } },
                    children: [
                      { tag: "h3", key: "question", bind: "item.question", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.25rem", "line-height": "1.3", "font-weight": "600", "letter-spacing": "-0.01em" }, lg: { "font-size": "1.5rem" } } },
                      { tag: "div", key: "icon", text: "+", decorative: true, attrs: { "data-blok-acc-icon": "" }, style: { base: { "flex-shrink": "0", "font-size": "1.75rem", "line-height": "1", "font-weight": "300", ...t("icon") } } },
                    ],
                  },
                  {
                    tag: "div", key: "panel", attrs: { "data-blok-acc-panel": "" },
                    children: [{ tag: "p", key: "answer", bind: "item.answer", style: { base: { "margin-top": "0", "margin-bottom": "0", "padding-bottom": "1.75rem", "max-width": "40rem", "font-size": "1.0625rem", "line-height": "1.65", ...t("answer") } } }],
                  },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
};
