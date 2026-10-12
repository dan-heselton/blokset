// Search results by team. Chips hide the other teams. The row is the link.
import { mono, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  chip: { color: "fg", "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line" },
  "chip-all": { color: "fg", "border-top-color": "line", "border-right-color": "line", "border-bottom-color": "line", "border-left-color": "line" },
  list: { "border-bottom-color": "line" },
  row: { color: "fg", "border-top-color": "line" },
  line: { color: "muted" },
  team: { color: "muted" },
  place: { color: "muted" },
  type: { color: "muted" },
  opened: { color: "muted" },
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
  id: "careers-07",
  prefix: "careers7",
  name: "Careers / Search Teams",
  category: "careers",
  description: "Search results for open roles, filtered by team. On a wide screen, resting on a row shows the room. Each row is the job.",

  props: {
    ...headerProps({
      eyebrow: "Open roles",
      heading: "Search by team",
      description: "Six roles are open. Choose a team and the other rows leave. On a wide screen, rest on a row to see the room.",
    }),
    groups: {
      type: "list",
      fields: { label: "text", group: "text" },
      default: [
        { label: "Build", group: "build" },
        { label: "Design", group: "design" },
        { label: "Strategy", group: "strategy" },
      ],
    },
    roles: {
      type: "list",
      fields: { group: "text", title: "text", line: "text", team: "text", place: "text", type: "text", opened: "text", href: "link", image: "image" },
      default: [
        { group: "build", title: "Webflow developer", line: "Build the pages the designers hand over, and stay on them after launch.", team: "Build", place: "Rockport", type: "Full-time", opened: "Opened in March", href: "#webflow-developer", image: shot("1519710164239-da123dc03ef4", "A sunlit room with a wooden chair") },
        { group: "build", title: "Studio producer", line: "Keep the week honest: who is in the room, what is due, and what is stuck.", team: "Build", place: "The harbor", type: "Full-time", opened: "Opened in May", href: "#studio-producer", image: shot("1497366216548-37526070297c", "A long desk in a bright studio") },
        { group: "design", title: "Brand designer", line: "Marks, type, and pages a client can publish without calling us.", team: "Design", place: "Rockport", type: "Contract", opened: "Opened in April", href: "#brand-designer", image: shot("1519710164239-da123dc03ef4", "A sunlit room with a wooden chair") },
        { group: "design", title: "Art director", line: "Set the look of a project before the first layout, and stay for the review.", team: "Design", place: "Rockport", type: "Full-time", opened: "Opened in January", href: "#art-director", image: shot("1486406146926-c627a92ad1ab", "A glass building against a clear sky") },
        { group: "strategy", title: "Content editor", line: "Write the lines the site actually says, and cut the ones that do not earn a place.", team: "Strategy", place: "Remote", type: "Part-time", opened: "Opened in February", href: "#content-editor", image: shot("1500530855697-b586d89ba3ee", "Open green hills under a pale sky") },
        { group: "strategy", title: "Project lead", line: "Hold the brief, the hours, and the date we said we would ship.", team: "Strategy", place: "The harbor", type: "Full-time", opened: "Opened in June", href: "#project-lead", image: shot("1497366216548-37526070297c", "A long desk in a bright studio") },
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
            tag: "div", key: "list", repeat: "roles", attrs: { "data-blok-hover-reveal": "" },
            style: { base: { position: "relative", "border-bottom-width": "1px", "border-bottom-style": "solid", ...t("list") } },
            children: [{
              tag: "div", key: "result", attrs: { "data-blok-filter-card": "", "data-blok-group": "=item.group" },
              children: [{
                tag: "a", key: "row", href: "item.href", attrs: { "data-blok-hover-row": "" },
                style: {
                  base: { display: "flex", "flex-direction": "column", "align-items": "flex-start", "row-gap": "0.55rem", "column-gap": "0rem", "padding-top": "1.35rem", "padding-bottom": "1.35rem", "border-top-width": "1px", "border-top-style": "solid", "text-decoration": "none", ...t("row") },
                  md: { "row-gap": "0.4rem" },
                },
                children: [
                  {
                    tag: "div", key: "top",
                    style: { base: { display: "flex", "flex-wrap": "wrap", "align-items": "baseline", "justify-content": "space-between", "column-gap": "1rem", "row-gap": "0.35rem", width: "100%" } },
                    children: [
                      {
                        tag: "h3", key: "title", bind: "item.title",
                        style: {
                          base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.5rem", "line-height": "1.15", "font-weight": "600", "letter-spacing": "-0.03em" },
                          md: { "font-size": "1.75rem" },
                        },
                      },
                      { tag: "div", key: "opened", bind: "item.opened", style: { base: { ...mono(), "letter-spacing": "0.04em", ...t("opened") } } },
                    ],
                  },
                  { tag: "p", key: "line", bind: "item.line", style: { base: { "margin-top": "0", "margin-bottom": "0", "max-width": "40rem", "font-size": "1.0625rem", "line-height": "1.5", ...t("line") } } },
                  {
                    tag: "div", key: "meta",
                    style: { base: { display: "flex", "flex-wrap": "wrap", "align-items": "baseline", "column-gap": "1.25rem", "row-gap": "0.25rem" } },
                    children: [
                      { tag: "div", key: "team", bind: "item.team", style: { base: { "font-size": "0.9375rem", "line-height": "1.4", ...t("team") } } },
                      { tag: "div", key: "place", bind: "item.place", style: { base: { "font-size": "0.9375rem", "line-height": "1.4", ...t("place") } } },
                      { tag: "div", key: "type", bind: "item.type", style: { base: { "font-size": "0.9375rem", "line-height": "1.4", ...t("type") } } },
                    ],
                  },
                  {
                    tag: "div", key: "media", decorative: true, attrs: { "data-blok-hover-media": "" },
                    style: {
                      base: { display: "none", position: "absolute", top: "0", left: "0", "z-index": "2", width: "16rem", height: "11rem", overflow: "hidden", "pointer-events": "none", opacity: "0", visibility: "hidden", ...radius("token(radius-card)") },
                      lg: { display: "block" },
                    },
                    children: [
                      { tag: "img", key: "photo", bind: "item.image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } },
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
