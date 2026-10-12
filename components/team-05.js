// Leadership cards: a large portrait, a short bio, and two ways to reach the person.
import { mono, pad, radius, themeBase, themeVariant } from "./_lib/themes.js";
import { HEADER_THEME, header, headerProps, shell } from "./_lib/blocks.js";

const THEME = {
  section: { "background-color": "bg", color: "fg" },
  ...HEADER_THEME,
  name: { color: "fg" },
  role: { color: "muted" },
  bio: { color: "muted" },
  email: { color: "fg" },
  linkedin: { color: "fg" },
};
const t = (key) => themeBase("light", THEME[key]);
const photo = (id, alt) => ({ src: `https://images.unsplash.com/photo-${id}?w=1000&q=80`, alt });

/** @type {import("../src/types").ComponentSpec} */
export default {
  id: "team-05",
  prefix: "team5",
  name: "Team / Leadership",
  category: "team",
  description: "Large portraits with a short bio and email and LinkedIn links. Two columns on a desktop.",

  props: {
    ...headerProps({
      eyebrow: "Partners",
      heading: "Who runs the studio",
      description: "Four people. You will meet at least two of them before a contract.",
    }),
    showBio: { type: "boolean", default: true, description: "Show the bio under each name." },
    showLinks: { type: "boolean", default: true, description: "Show the email and LinkedIn links." },
    people: {
      type: "list",
      fields: { name: "text", role: "text", bio: "text", email: "text", emailHref: "link", linkedin: "text", linkedinHref: "link", image: "image" },
      default: [
        {
          name: "Maren Okafor",
          role: "Design",
          bio: "Leads identity and the first visual pass. Previously in-house at a museum press.",
          email: "maren@studio.co",
          emailHref: "mailto:maren@studio.co",
          linkedin: "LinkedIn",
          linkedinHref: "#",
          image: photo("1494790108377-be9c29b29330", "Portrait of Maren Okafor"),
        },
        {
          name: "Eli Hart",
          role: "Webflow",
          bio: "Builds the CMS and the classes the next developer has to live with.",
          email: "eli@studio.co",
          emailHref: "mailto:eli@studio.co",
          linkedin: "LinkedIn",
          linkedinHref: "#",
          image: photo("1507003211169-0a1dd7228f2d", "Portrait of Eli Hart"),
        },
        {
          name: "June Pell",
          role: "Strategy",
          bio: "Writes the brief before anyone opens a file. Keeps the scope honest.",
          email: "june@studio.co",
          emailHref: "mailto:june@studio.co",
          linkedin: "LinkedIn",
          linkedinHref: "#",
          image: photo("1438761681033-6461ffad8d80", "Portrait of June Pell"),
        },
        {
          name: "Noah Voss",
          role: "Engineering",
          bio: "Owns motion, performance, and the bits that are not a Webflow class.",
          email: "noah@studio.co",
          emailHref: "mailto:noah@studio.co",
          linkedin: "LinkedIn",
          linkedinHref: "#",
          image: photo("1500648767791-00dcc994a43e", "Portrait of Noah Voss"),
        },
      ],
    },
  },

  variants: {
    theme: themeVariant({ default: "light", options: ["light", "dark", "accent"], map: THEME }),
  },

  motion: {
    enter: { preset: "fade-up", stagger: 0.08, targets: ["eyebrow", "heading", "description"] },
    reveal: { preset: "fade-up", targets: ["card"] },
  },

  tree: {
    role: "section",
    style: { base: t("section") },
    children: [
      shell({
        tag: "div", key: "component",
        style: { base: { display: "flex", "flex-direction": "column", "row-gap": "2.5rem" }, lg: { "row-gap": "3.5rem" } },
        children: [
          header({ t, layout: "split" }),
          {
            tag: "div", key: "grid", repeat: "people",
            style: {
              base: { display: "grid", "grid-template-columns": "1fr", "grid-column-gap": "1.5rem", "grid-row-gap": "2.5rem" },
              lg: { "grid-template-columns": "1fr 1fr", "grid-column-gap": "2rem", "grid-row-gap": "3rem" },
            },
            children: [
              {
                tag: "div", key: "card",
                style: { base: { display: "flex", "flex-direction": "column", "row-gap": "1.25rem" } },
                children: [
                  {
                    tag: "div", key: "portrait",
                    style: { base: { overflow: "hidden", "aspect-ratio": "4 / 5", ...radius("token(radius-card)") } },
                    children: [
                      { tag: "img", key: "portrait-image", bind: "item.image", style: { base: { display: "block", width: "100%", height: "100%", "object-fit": "cover" } } },
                    ],
                  },
                  {
                    tag: "div", key: "copy",
                    style: { base: { display: "flex", "flex-direction": "column", "row-gap": "0.75rem", ...pad({ top: "0", right: "0.25rem", bottom: "0", left: "0.25rem" }) } },
                    children: [
                      { tag: "h3", key: "name", bind: "item.name", style: { base: { "margin-top": "0", "margin-bottom": "0", "font-family": "token(font-display)", "font-size": "1.75rem", "line-height": "1.15", "font-weight": "600", "letter-spacing": "-0.03em", ...t("name") } } },
                      { tag: "div", key: "role", bind: "item.role", style: { base: { ...mono(), ...t("role") } } },
                      { tag: "p", key: "bio", bind: "item.bio", if: "showBio", style: { base: { "margin-top": "0.25rem", "margin-bottom": "0", "max-width": "32rem", "font-size": "1.0625rem", "line-height": "1.55", ...t("bio") } } },
                      {
                        tag: "div", key: "links", if: "showLinks",
                        style: { base: { display: "flex", "flex-wrap": "wrap", "column-gap": "1.25rem", "row-gap": "0.5rem", "margin-top": "0.35rem" } },
                        children: [
                          { tag: "a", key: "email", bind: "item.email", href: "item.emailHref", style: { base: { "font-size": "0.9375rem", "line-height": "1.4", "text-decoration": "underline", "text-underline-offset": "0.25em", ...t("email") } } },
                          { tag: "a", key: "linkedin", bind: "item.linkedin", href: "item.linkedinHref", style: { base: { "font-size": "0.9375rem", "line-height": "1.4", "text-decoration": "underline", "text-underline-offset": "0.25em", ...t("linkedin") } } },
                        ],
                      },
                    ],
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
