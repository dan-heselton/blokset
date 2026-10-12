// Search results by place. Chips leave one place on the page. Each card carries that place's photograph.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  chip: { color: "fg", "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line" },
  "chip-all": { color: "fg", "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line" },
  body: { color: "fg" },
  team: { color: "muted" },
  type: { color: "muted" },
};
const t = (key) => themeBase("light", THEME[key]);
const shot = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=900&q=80`, alt });
const chipStyle = {
  base: {
    ...mono(),
    cursor: "pointer",
    "padding-top": "0.55rem",
    "padding-bottom": "0.55rem",
    "padding-left": "0.9rem",
    "padding-right": "0.9rem",
    "border-top-width": "1px",
    "border-right-width": "1px",
    "border-bottom-width": "1px",
    "border-left-width": "1px",
    "border-top-style": "solid",
    "border-right-style": "solid",
    "border-bottom-style": "solid",
    "border-left-style": "solid",
    "border-top-left-radius": "999px",
    "border-top-right-radius": "999px",
    "border-bottom-right-radius": "999px",
    "border-bottom-left-radius": "999px",
  },
};

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "careers-08",
  prefix: "careers8",
  name: "Careers / Search Places",
  category: "careers",
  description: "Search results for open roles, filtered by place. Each card shows the room, the job, the team, and the type.",

  props: {
    ...headerProps({
      eyebrow: "Open roles",
      heading: "Search by place",
      description: "Rockport, the harbor desk, or remote. A chip leaves only the roles that sit there. The card leans as you move across it.",
    }),
    groups: {
      type: "list",
      fields: { label: "text", group: "text" },
      default: [
        { label: "Rockport", group: "rockport" },
        { label: "The harbor", group: "harbor" },
        { label: "Remote", group: "remote" },
      ],
    },
    roles: {
      type: "list",
      fields: { group: "text", title: "text", team: "text", type: "text", href: "link", image: "image" },
      default: [
        { group: "rockport", title: "Webflow developer", team: "Build", type: "Full-time", href: "#webflow-developer", image: shot("1519710164239-da123dc03ef4", "A sunlit room with a wooden chair") },
        { group: "rockport", title: "Brand designer", team: "Design", type: "Contract", href: "#brand-designer", image: shot("1519710164239-da123dc03ef4", "A sunlit room with a wooden chair") },
        { group: "rockport", title: "Art director", team: "Design", type: "Full-time", href: "#art-director", image: shot("1519710164239-da123dc03ef4", "A sunlit room with a wooden chair") },
        { group: "harbor", title: "Studio producer", team: "Build", type: "Full-time", href: "#studio-producer", image: shot("1497366216548-37526070297c", "A long desk in a bright studio") },
        { group: "harbor", title: "Project lead", team: "Strategy", type: "Full-time", href: "#project-lead", image: shot("1497366216548-37526070297c", "A long desk in a bright studio") },
        { group: "remote", title: "Content editor", team: "Strategy", type: "Part-time", href: "#content-editor", image: shot("1500530855697-b586d89ba3ee", "Open green hills under a pale sky") },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "filter", attrs: { "data-blok-filter": "" },
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2rem" }, lg: { "row-gap": "2.75rem" } },
        children: [
          header({ t, layout: "split" }),
          {
            tag: "div", key: "chips",
            style: { base: { display: "flex", "flex-wrap": "wrap", "align-items": "center", "column-gap": "0.5rem", "row-gap": "0.5rem" } },
            children: [
              { tag: "div", key: "chip-all", text: "All", attrs: { "data-blok-filter-chip": "all" }, style: { ...chipStyle, base: { ...chipStyle.base, ...t("chip-all") } } },
              {
                tag: "div", key: "chip-row", repeat: "groups",
                style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "0.5rem", "row-gap": "0.5rem" } },
                children: [
                  { tag: "div", key: "chip", bind: "item.label", attrs: { "data-blok-filter-chip": "=item.group" }, style: { ...chipStyle, base: { ...chipStyle.base, ...t("chip") } } },
                ],
              },
            ],
          },
          {
            tag: "div", key: "grid", repeat: "roles", attrs: { "data-blok-tilt": "" },
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "grid-column-gap": "1.25rem", "grid-row-gap": "1.75rem" },
              md: { "grid-template-columns": "1fr 1fr", "grid-column-gap": "1.5rem", "grid-row-gap": "2rem" },
              lg: { "grid-template-columns": "1fr 1fr 1fr", "grid-column-gap": "1.5rem", "grid-row-gap": "2rem" },
            },
            children: [{
              tag: "div", key: "card", attrs: { "data-blok-filter-card": "", "data-blok-group": "=item.group", "data-blok-tilt-card": "" },
              children: [{
                tag: "a", key: "body", href: "item.href",
                style: { base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "0.85rem", "text-decoration": "none", ...t("body") } },
                children: [
                  {
                    tag: "img", key: "photo", bind: "item.image",
                    style: { base: { display: "block", width: "100%", height: "12rem", "object-fit": "cover", ...radius("token(radius-card)") } },
                  },
                  {
                    tag: "h3", key: "title", bind: "item.title",
                    style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.15", "font-weight": "600", "letter-spacing": "-0.03em" } },
                  },
                  {
                    tag: "div", key: "meta",
                    style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "1rem", "row-gap": "0.25rem" } },
                    children: [
                      { tag: "div", key: "team", bind: "item.team", style: { base: { ...mono(), "letter-spacing": "0.04em", ...t("team") } } },
                      { tag: "div", key: "type", bind: "item.type", style: { base: { "font-size": "0.9375rem", "line-height": "1.4", ...t("type") } } },
                    ],
                  },
                ],
              }],
            }],
          },
        ],
      }),
    ],
  },
};
