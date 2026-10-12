// A single line and a link. It sits above the page, not inside a navigation bar.
import { themeBase, themeVariant } from "./_lib/themes.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  message: { color: "fg" },
  link: { color: "fg" },
};
const t = (key) => themeBase("light", THEME[key]);

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "banner-01",
  prefix: "banner1",
  name: "Announcement / Bar",
  category: "banner",
  description: "One line and a link across the top of the page. It is not a navigation bar.",

  props: {
    message: { type: "text", default: "New projects open the first week of each month." },
    showLink: { type: "boolean", default: true },
    link: { type: "text", default: "Start a project" },
    href: { type: "link", default: "#" },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade", stagger: 0.06, targets: ["message", "link"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [{
      role: "gutter",
      children: [{
        role: "container", size: "large",
        children: [{
          tag: "div", key: "bar",
          style: {
            base: {
              display: "flex", "flex-wrap": "wrap", "align-items": "center", "justify-content": "center",
              "column-gap": "1rem", "row-gap": "0.35rem", "padding-top": "0.7rem", "padding-bottom": "0.7rem",
            },
          },
          children: [
            {
              tag: "p", key: "message", bind: "message",
              style: { base: { "margin-top": "0", "margin-bottom": "0", "font-size": "0.9375rem", "line-height": "1.4", "text-align": "center", ...t("message") } },
            },
            {
              tag: "a", key: "link", bind: "link", href: "href", if: "showLink",
              style: { base: { "font-size": "0.9375rem", "line-height": "1.4", "font-weight": "600", "text-decoration": "underline", ...t("link") } },
            },
          ],
        }],
      }],
    }],
  },
};
