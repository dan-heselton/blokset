// A title, a kind, and a link on each row. Guides and samples, not open roles.
import { mono, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  list: { "border-bottom-color": "line" },
  row: { color: "fg", "border-top-color": "line" },
  kind: { color: "muted" },
  action: { color: "fg" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "resources-01",
  prefix: "resources1",
  name: "Resources / List",
  category: "resources",
  description: "A title, a kind, and a link on each row. Add a list item to add a guide, a sample, or a checklist.",

  props: {
    ...headerProps({
      eyebrow: "Take one",
      heading: "Notes you can keep",
      description: "Short files we send before a project starts. Add a row when there is another.",
    }),
    showKind: { type: "boolean", default: true, description: "Show the kind of file." },
    resources: {
      type: "list",
      fields: { title: "text", kind: "text", action: "text", href: "link" },
      default: [
        { title: "What we send before a kickoff", kind: "Checklist", action: "Read", href: "#" },
        { title: "A CMS an editor will actually open", kind: "Guide", action: "Read", href: "#" },
        { title: "Sample pages, before the real ones", kind: "Sample", action: "Read", href: "#" },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] },
    reveal: { preset: "fade-up", targets: ["row"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" }, lg: { "row-gap": "3.5rem" } },
        children: [
          header({ t }),
          {
            tag: "div", key: "list", repeat: "resources",
            style: { base: { "border-bottom-width": "1px", "border-bottom-style": "solid", ...t("list") } },
            children: [{
              tag: "a", key: "row", href: "item.href",
              style: {
                base: { display: "flex", "flex-wrap": "wrap", "align-items": "baseline", "column-gap": "1.5rem", "row-gap": "0.4rem", "padding-top": "1.35rem", "padding-bottom": "1.35rem", "border-top-width": "1px", "border-top-style": "solid", "text-decoration": "none", ...t("row") },
                md: { "flex-wrap": "nowrap", "align-items": "center" },
              },
              children: [
                {
                  tag: "h3", key: "title", bind: "item.title",
                  style: {
                    base: { "flex-grow": "1", "flex-basis": "100%", "min-width": "0", "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.2", "font-weight": "500", "letter-spacing": "-0.02em" },
                    md: { "flex-basis": "0%", "font-size": "1.75rem" },
                  },
                },
                { tag: "div", key: "kind", bind: "item.kind", if: "showKind", style: { base: { width: "8rem", "flex-shrink": "0", ...mono(), ...t("kind") } } },
                { tag: "div", key: "action", bind: "item.action", style: { base: { "flex-shrink": "0", "font-size": "0.9375rem", "line-height": "1.4", "font-weight": "600", ...t("action") } } },
              ],
            }],
          },
        ],
      }),
    ],
  },
};
