// Dev-only waitlist page mockups. Each composition uses interactive catalog sections
// and the shared email form. features-46 (the Class Sync card deck) is never used here.
import { resolveComponent } from "../core/resolve.js";
import { generateHtml } from "../generators/code.js";
import { SHOT_IDS } from "./shots.js";

/**
 * @param {import("../types").ComponentSpec[]} specs
 * @param {import("../types").BuildContext} ctx
 * @param {string} id
 * @param {Record<string, unknown>} values
 * @param {Record<string, string>} [selection]
 */
function section(specs, ctx, id, values, selection = {}) {
  const spec = specs.find((item) => item.id === id);
  if (!spec) throw new Error(`Mock page uses ${id}, which is not in the catalog`);
  return generateHtml(spec, ctx, resolveComponent(spec, ctx), { values, selection });
}

/** @param {import("../types").ComponentSpec[]} specs @param {string} id @param {"wide"|"phone"} frame */
function shot(specs, id, frame) {
  const spec = specs.find((item) => item.id === id);
  if (!spec) throw new Error(`Mock page shows ${id}, which is not in the catalog`);
  // Absolute paths so mock pages under /mocks/ still resolve site assets.
  return { src: `/shots/${id}-${frame}.jpg`, alt: `Screenshot of the ${spec.name} section` };
}

const WAITLIST_COPY = {
  heading: "Join the list. Paste when we open.",
  description: "Billing is not open yet. Leave your email and the full library opens for you when it is. Same section in Webflow, Figma, and code — on the classes the site already has.",
  hint: "Move the cursor. Every frame is a section from the gallery.",
};

/** Component ids used by any mock composition (for CSS bundling). */
export const MOCK_IDS = [
  "hero-14", "gallery-05", "cta-11",
  "hero-25", "bento-04", "statement-01",
  "hero-21", "statement-03", "cta-08",
  "hero-23", "bento-08", "gallery-14",
  "hero-54", "carousel-04", "process-03",
  "hero-11", "gallery-11", "features-37",
  "hero-53", "bento-02", "timeline-02",
  "footer-04",
];

/**
 * @typedef {{ id: string, title: string, blurb: string, body: (specs: import("../types").ComponentSpec[], ctx: import("../types").BuildContext, form: string, footer: string) => string }} MockDef
 */

/** @type {MockDef[]} */
export const MOCKS = [
  {
    id: "trail",
    title: "Image trail",
    blurb: "Cursor trail of section frames, then a horizontal scroll, then a scramble CTA.",
    body(specs, ctx, form, footer) {
      const hero = section(specs, ctx, "hero-14", {
        showEyebrow: false,
        heading: "Paste when we open",
        showDescription: true,
        description: WAITLIST_COPY.description,
        showButtons: false,
        buttons: [],
        showHint: true,
        hint: "Move the cursor. Cut-out and notched heroes from the catalog.",
        trail: SHOT_IDS.map((id) => ({ image: shot(specs, id, "wide") })),
      }, { theme: "dark", typeSize: "large" });
      return [hero, form, footer].join("\n");
    },
  },
  {
    id: "pointer",
    title: "Pointer lean",
    blurb: "Photos follow the cursor, cards tilt, a line fills as you scroll.",
    body(specs, ctx, form, footer) {
      const hero = section(specs, ctx, "hero-25", {
        showEyebrow: true,
        eyebrow: "Blokset — waitlist",
        heading: WAITLIST_COPY.heading,
        subhead: WAITLIST_COPY.description,
        showImages: true,
        image1: shot(specs, SHOT_IDS[0], "phone"),
        image2: shot(specs, SHOT_IDS[1], "phone"),
        image3: shot(specs, SHOT_IDS[2], "phone"),
      }, { theme: "dark" });
      const tilt = section(specs, ctx, "bento-04", {
        showEyebrow: false,
        heading: "Sections that notice you",
        description: "The library is interactive on purpose. Join the list and we open it when billing starts.",
        noteTitle: "On the list",
        noteText: "One email. We write when the full catalog unlocks.",
        accentText: "Webflow · Figma · React · Astro",
        imageA: shot(specs, SHOT_IDS[3], "wide"),
        imageB: shot(specs, SHOT_IDS[4], "wide"),
      });
      const statement = section(specs, ctx, "statement-01", {
        showEyebrow: true,
        eyebrow: "Why wait",
        statement: "Paste the section. Keep the class names the site already has. Billing is not open yet — join the list and we open the library for you when it is.",
      }, { theme: "dark" });
      return [hero, form, tilt, statement, footer].join("\n");
    },
  },
  {
    id: "type",
    title: "Type rise",
    blurb: "Characters rise into the headline, lines reveal on scroll, a marquee closes.",
    body(specs, ctx, form, footer) {
      const hero = section(specs, ctx, "hero-21", {
        showEyebrow: true,
        eyebrow: "Pre-launch",
        heading: "Join before we open",
        showDescription: true,
        description: WAITLIST_COPY.description,
        showButtons: true,
        buttons: [
          { title: "Join the list", href: "#library", variant: "primary" },
          { title: "Sign in", href: "/login", variant: "secondary-alt" },
        ],
        showImage: true,
        image: shot(specs, SHOT_IDS[0], "wide"),
      }, { theme: "dark" });
      const lines = section(specs, ctx, "statement-03", {
        label: "What you get",
        lines: [
          { text: "One spec ships Webflow, Figma, React, Astro, HTML, and vanilla." },
          { text: "Class names match Client-First, BEM, or Flowkit — the system you already run." },
          { text: "Billing is not open. Join the list and the full library opens when it is." },
        ],
      }, { theme: "dark" });
      const cta = section(specs, ctx, "cta-08", {
        showStatus: true,
        status: "Billing opens soon",
        response: "We write when it does",
        showMarquee: true,
        phrases: [{ text: "Join the list" }, { text: "Keep your classes" }, { text: "Paste when ready" }],
        description: "Leave your email. The gallery stays gated until you are invited.",
        showButtons: true,
        buttons: [{ title: "Join the list", href: "#library", variant: "primary" }],
        showImage: false,
      });
      return [hero, form, lines, cta, footer].join("\n");
    },
  },
  {
    id: "depth",
    title: "Depth layers",
    blurb: "Scroll depth behind type, a drag lens, parallax photo columns.",
    body(specs, ctx, form, footer) {
      const hero = section(specs, ctx, "hero-23", {
        showEyebrow: true,
        eyebrow: "Waitlist",
        heading: WAITLIST_COPY.heading,
        showDescription: true,
        description: WAITLIST_COPY.description,
        showImages: true,
        image1: shot(specs, SHOT_IDS[0], "wide"),
        image2: shot(specs, SHOT_IDS[1], "wide"),
        image3: shot(specs, SHOT_IDS[2], "wide"),
      }, { theme: "dark" });
      const lens = section(specs, ctx, "bento-08", {
        showEyebrow: false,
        heading: "Look closer at what ships",
        description: "Drag the lens. The same sections land in Webflow without renaming your buttons.",
        image: shot(specs, SHOT_IDS[3], "wide"),
        reveal: shot(specs, SHOT_IDS[4], "wide"),
        figure: shot(specs, SHOT_IDS[5], "wide"),
        rows: [
          { title: "Webflow", text: "Paste in a normal Chrome tab.", image: shot(specs, SHOT_IDS[0], "wide") },
          { title: "Figma", text: "Build from the same spec in the plugin.", image: shot(specs, SHOT_IDS[1], "wide") },
          { title: "Code", text: "React, Astro, HTML, or vanilla.", image: shot(specs, SHOT_IDS[2], "wide") },
        ],
      });
      const columns = section(specs, ctx, "gallery-14", {
        showEyebrow: false,
        heading: "Frames from the catalog",
        description: "Three speeds of scroll. The library unlocks when billing opens.",
        column1: SHOT_IDS.slice(0, 3).map((id) => ({ image: shot(specs, id, "phone") })),
        column2: SHOT_IDS.slice(3, 6).map((id) => ({ image: shot(specs, id, "phone") })),
        column3: SHOT_IDS.slice(6, 9).map((id) => ({ image: shot(specs, id, "phone") })),
      }, { theme: "dark" });
      return [hero, form, lens, columns, footer].join("\n");
    },
  },
  {
    id: "curve",
    title: "Curve stack",
    blurb: "Curved marquee hero, curved slider, stacking process cards.",
    body(specs, ctx, form, footer) {
      const hero = section(specs, ctx, "hero-54", {
        showChip: true,
        chip: "Pre-launch waitlist",
        heading: WAITLIST_COPY.heading,
        showAction: true,
        action: "Join the list",
        actionHref: "#library",
        showImages: true,
        images: SHOT_IDS.slice(0, 6).map((id) => ({ image: shot(specs, id, "phone") })),
      }, { theme: "dark" });
      const curve = section(specs, ctx, "carousel-04", {
        showCounter: true,
        slides: SHOT_IDS.slice(0, 4).map((id) => {
          const spec = specs.find((item) => item.id === id);
          return { title: spec?.name ?? id, image: shot(specs, id, "wide") };
        }),
      }, { theme: "dark" });
      const steps = section(specs, ctx, "process-03", {
        showEyebrow: false,
        heading: "How access works",
        showDescription: true,
        description: "Join the list. We invite you. Then the gallery opens.",
        showNumbers: true,
        showImages: true,
        steps: [
          { title: "Join the list", text: "One email. Billing is not open yet.", image: shot(specs, SHOT_IDS[0], "wide") },
          { title: "Get invited", text: "We approve you and send a sign-in invite.", image: shot(specs, SHOT_IDS[1], "wide") },
          { title: "Open the gallery", text: "Browse every section and paste when you are ready.", image: shot(specs, SHOT_IDS[2], "wide") },
          { title: "Keep your classes", text: "Client-First, BEM, or Flowkit — the names you already use.", image: shot(specs, SHOT_IDS[3], "wide") },
        ],
      }, { theme: "dark" });
      return [hero, form, curve, steps, footer].join("\n");
    },
  },
  {
    id: "film",
    title: "Filmstrip",
    blurb: "Kinetic split headline, filmstrip gallery, hover-swap feature rows.",
    body(specs, ctx, form, footer) {
      const hero = section(specs, ctx, "hero-11", {
        showEyebrow: true,
        eyebrow: "Blokset waitlist",
        heading: "Paste when we open",
        description: WAITLIST_COPY.description,
        showButtons: true,
        buttons: [
          { title: "Join the list", href: "#library", variant: "dark" },
          { title: "Sign in", href: "/login", variant: "secondary" },
        ],
        showMeta: true,
        metaLeft: "Billing not open yet",
        metaRight: "Scroll ↓",
        showImage: true,
        image: shot(specs, SHOT_IDS[0], "wide"),
        showCaption: true,
        caption: "Fig. 01 — A section from the gallery",
      }, { theme: "dark" });
      const film = section(specs, ctx, "gallery-11", {
        showEyebrow: false,
        heading: "Click through the roll",
        description: "These frames are real sections. The full gallery unlocks after invite.",
        showCaption: true,
        caption: SHOT_IDS[0],
        image: shot(specs, SHOT_IDS[0], "wide"),
        frames: SHOT_IDS.slice(0, 6).map((id) => {
          const spec = specs.find((item) => item.id === id);
          return { image: shot(specs, id, "wide"), caption: spec?.name ?? id };
        }),
      }, { theme: "dark" });
      const swap = section(specs, ctx, "features-37", {
        showEyebrow: false,
        heading: "Point at a row",
        description: "Hover to preview what each output does. Join the list to unlock the rest.",
        image: shot(specs, SHOT_IDS[0], "wide"),
        features: [
          { title: "Webflow", text: "Copy to clipboard and paste in the Designer.", image: shot(specs, SHOT_IDS[0], "wide") },
          { title: "Figma", text: "Build the component in the open file.", image: shot(specs, SHOT_IDS[1], "wide") },
          { title: "Code", text: "React, Astro, HTML, or vanilla from the same spec.", image: shot(specs, SHOT_IDS[2], "wide") },
          { title: "Class systems", text: "Client-First, BEM, or Flowkit naming.", image: shot(specs, SHOT_IDS[3], "wide") },
        ],
      });
      return [hero, form, film, swap, footer].join("\n");
    },
  },
  {
    id: "orbit",
    title: "Orbit",
    blurb: "Orbiting hero, moving tiles, a timeline that tracks scroll.",
    body(specs, ctx, form, footer) {
      const hero = section(specs, ctx, "hero-53", {
        showChip: true,
        chip: "Pre-launch",
        heading: WAITLIST_COPY.heading,
        showDescription: true,
        description: WAITLIST_COPY.description,
        showAction: true,
        action: "Join the list",
        actionHref: "#library",
        showCards: true,
        cards: [
          { glyph: "01", title: "Join the list", note: "One email while billing is closed." },
          { glyph: "02", title: "Get invited", note: "We approve you, then you sign in." },
        ],
        showFaces: true,
        faceA: shot(specs, SHOT_IDS[0], "phone"),
        faceB: shot(specs, SHOT_IDS[1], "phone"),
        faceC: shot(specs, SHOT_IDS[2], "phone"),
      }, { theme: "dark" });
      const tiles = section(specs, ctx, "bento-02", {
        showEyebrow: false,
        heading: "Tiles that do not sit still",
        description: "The catalog is built for motion. Join the list — we open the gallery when billing starts.",
        copyTitle: "On the waitlist",
        copyText: "We write when Solo and Studio billing open.",
        note: "No deck. The site is the preview.",
        placeTitle: "Outputs",
        placeText: "Webflow, Figma, React, Astro, HTML, vanilla.",
        // Real photographs — section screenshots crop too hard in these tiles.
        still: { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80", alt: "A bright studio with a long desk" },
        words: ["Webflow", "Figma", "React", "Astro", "Motion"].map((label) => ({ label })),
        photos: [
          { image: { src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200&q=80", alt: "A wooden chair in a pale room" } },
          { image: { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80", alt: "Green hills under a pale sky" } },
          { image: { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80", alt: "A glass facade against a clear sky" } },
          { image: { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80", alt: "A dining room with set tables" } },
        ],
      });
      const timeline = section(specs, ctx, "timeline-02", {
        showEyebrow: false,
        heading: "From list to library",
        description: "Scroll the rail. This is the path after you join.",
        showImages: true,
        milestones: [
          { date: "Now", title: "Join the list", text: "Leave an email. Billing is not open yet.", image: shot(specs, SHOT_IDS[0], "wide") },
          { date: "Soon", title: "Invite lands", text: "We approve you and send a sign-in link.", image: shot(specs, SHOT_IDS[1], "wide") },
          { date: "Open", title: "Browse the gallery", text: "Every section, every output, ready to paste.", image: shot(specs, SHOT_IDS[2], "wide") },
          { date: "Ship", title: "Keep your classes", text: "Paste onto the names the site already has.", image: shot(specs, SHOT_IDS[3], "wide") },
        ],
      }, { theme: "dark" });
      return [hero, form, tiles, timeline, footer].join("\n");
    },
  },
];

/** @param {string} id */
export function getMock(id) {
  return MOCKS.find((mock) => mock.id === id) ?? null;
}
