# Blokset

One component spec → React, Astro, HTML/CSS, vanilla JS, Webflow, and Figma, in any class framework.

```bash
npm install
npm run dev        # site at http://localhost:4400, gallery at /gallery, live reload
npm run check      # tests + strict TypeScript on the React output + Astro compile
```

## Components

| id | what it is |
|---|---|
| `hero-05` | Full-height image hero with overlay and parallax |
| `features-12` | Sticky intro beside a ruled, numbered feature list |
| `features-20` | Bento grid: image card, count-up stat, dark note, tag strip |
| `stats-04` | Oversized numerals that count up on scroll, ruled 1→2→4 columns |
| `work-02` | Dark project index; hovering a row floats its image under the cursor |
| `testimonial-07` | Huge pull quote on a color field; words brighten as you scroll |
| `cta-08` | Closing CTA with a full-bleed marquee that slows on hover |

## Project layout

```
components/        one spec per component (the only place you design)
frameworks/        class-naming profiles: client-first, bem, flowkit (draft), _template
blokset.config.js    per-project settings: framework, tokens, utilities, button classes
src/
  core/            validate, resolve (spec + framework + config), tokens, css
  generators/      markup emitter, React/Astro/HTML/vanilla, Webflow clipboard JSON
  runtime/         motion runtime (one core → ESM + global builds)
  gallery/         gallery page
  cli.js, dev.js   commands and dev server
tests/             node:test suite
.cursor/rules/     spec-writing and architecture rules for Cursor's agent
```

## Using components in a project

```bash
# Astro
npm run add -- hero-05 stats-04 --target astro --out ../site/src/components/blokset
# React / Next
npm run add -- work-02 --target react --out ./app/components/blokset --framework bem
# With a client project's own config
npm run add -- cta-08 --target astro --out ../client/src/blokset --config ../client/blokset.config.js
```

Each target is a drop-in folder: the components plus `blokset/` (tokens, utilities and button
CSS, and the motion runtime). Import `blokset/index.css` once in your layout and `npm i gsap`
if you use components with motion.

```astro
---
import "./blokset/blokset/index.css";
import Stats04 from "./blokset/Stats04.astro";
---
<Stats04 heading="By the numbers" stats={data.stats} />
```

- **React**: typed props + defaults, `"use client"` only when the component has motion.
- **Astro**: typed `Props`, motion loaded via a bundled `<script>`.
- **HTML + CSS**: static markup with default content; `index.html` is a working demo page.
- **Vanilla JS**: `render(props)` returns HTML, `mount(target, props)` inserts it and starts motion.
- **Webflow**: use the gallery's *Copy to Webflow* button (Chrome, normal tab), then paste in the
  Designer. Paste `dist/<framework>/webflow/footer-code.html` once into Site settings → Footer
  for motion. That one snippet runs every component. Delete any older footer snippet first.
- **Figma**: set the gallery output to Figma and choose *Copy for Figma*, then paste that into the
  Blokset plugin. The plugin builds the component in the open file. See below.

## Per-project config

`blokset.config.js` is where projects differ:

```js
export default {
  framework: "client-first",
  tokens: {
    accent: "#2f6bff",                                  // new value
    ink: { value: "#141414", css: "var(--color-text)", webflow: "Text Primary" }, // code uses css; Webflow uses the site variable
  },
  utilities: {
    // match the project's values so Webflow reuses classes instead of creating "… 2"
    "padding-section-large": { base: { "padding-top": "4rem", "padding-bottom": "4rem" },
      md: { "padding-top": "6rem", "padding-bottom": "6rem" }, lg: { "padding-top": "7rem", "padding-bottom": "7rem" } },
  },
  classes: {
    button: {
      base: "button",
      variants: { dark: "is-dark", "secondary-alt": ["is-secondary", "is-alternate"] }, // combo chains
      styles: "none", // the project already styles its buttons
    },
  },
};
```

Webflow renames a pasted class when the project has one with the same name and different styles
(`button 2`). Matching `utilities`, using `styles: "none"` for buttons, and Class Sync (below) keep
the paste on the classes the site already has. A variable id from another site does not stay a
variable after paste — Webflow turns it into a plain color — so bindings have to come from the
site you are pasting into.

## Adding a framework

Copy `frameworks/_template.js`. A profile decides the section class, element class pattern, what the
four layout roles (`gutter`, `container`, `section-padding`, `section`) become, global utility
values, and the button modifier pattern. Flowkit ships as a draft; Lumos and others need their
class names confirmed against the framework's own cloneable.

## Adding a component

Ask Cursor: *"Create a pricing component with three tiers"*. The rules in `.cursor/rules/` teach
it the spec format. Then check it at 390px and 1440px in the gallery and run `npm run check`.

## Everything is a prop

Images, optional regions, and layout choices are props. The same spec drives code, a Webflow paste,
a native-component manifest, and the theme tokens.

| surface | what you get |
|---|---|
| Code | React, Astro, and vanilla take the props. A boolean omits its element. Each variant group is a typed prop, and kebab-case group names become camelCase. |
| Webflow paste | The gallery's Copy to Webflow pastes the combination selected in the component bar. Hidden toggles are left out of the paste. |
| Native component | `dist/<framework>/webflow/<id>.component.json` maps text, link, boolean, and image props (image plus alt text). Lists are noted as a CMS Collection List. |
| Tokens | `components/_lib/themes.js` keeps light, dark, and accent on the same slots. `dist/<framework>/webflow/variables.json` is a Blokset collection of Color, Size, and FontFamily variables. |

```jsx
<Features12 theme="dark" showEyebrow={false} />
```

```js
import { mount } from "./features-12.js";
mount("#features-12", { theme: "dark", showEyebrow: false });
```

| component | images | toggles | variants |
|---|---|---|---|
| hero-05 | background (`priority`) | showEyebrow (off) and its text, showButtons | align: left/center · overlay: subtle/medium/strong · height: screen/auto |
| features-12 | intro image (off) | showEyebrow, showButtons, showImage, showNumbers | theme: light/dark/accent |
| features-20 | feature card image | showDescription, showStat, showNote, showTags | theme: light/dark · statStyle: accent-card/ink-card/outline-card |
| stats-04 | wide image (off, 4:3 to 21:9) | showEyebrow, showDescription, showImage | theme: light/dark/accent · columns: four/three |
| work-02 | image per project | showAllLink, showMeta, showYear, showImages | theme: dark/light/accent · size: large/compact |
| testimonial-07 | avatar, logo (off) | showEyebrow, showAvatar, showLogo | theme: accent/light/dark · size: large/medium |
| cta-08 | background image (off) | showStatus, showMarquee, showImage, showButtons | theme: dark/accent/light |
| hero-11 | tall side image + caption | showEyebrow, showButtons, showMeta, showImage, showCaption | theme · image side |
| hero-14 | cursor trail (list) | showEyebrow, showDescription, showButtons, showHint | theme · headline size |
| logos-02 | logos (two lists) | showLabel, showSecondRow | theme |
| process-03 | per step | header parts, showNumbers, showImages | theme · image side |
| gallery-05 | per frame | header parts, showCaptions, showCounter | theme · frame shape |
| compare-01 | before + after | header parts, showLabels, showNotes | theme · frame |
| timeline-02 | per milestone | header parts, showImages | theme |
| pricing-06 | — | showToggle, showSaveBadge, showFeaturedLabel | theme · featured plan |
| faq-04 | contact portrait | showEyebrow, showDescription, showContact, showButtons | theme · layout |
| footer-04 | logo | showLogo, showButtons, showColumns, showWordmark, showLegal | theme · wordmark |
| tabs-01 | image per service | header parts | theme |
| carousel-01 | — | header parts | theme |
| filter-01 | image per project | header parts | theme |
| features-31 | sticky image | header parts | theme |
| features-35 | — | header parts | theme · columns |
| gallery-08 | frames, plus the open image | header parts | theme |
| features-37 | figure | header parts | theme · image side |
| stats-08 | — | header parts | theme |
| hero-18 | — | showEyebrow, showDescription, showButtons | theme |
| gallery-11 | main frame and thumbs | header parts, showCaption | theme |
| features-03 | — | header parts | theme · columns |
| features-07 | checklist image | header parts, showImage | theme · image side |
| features-09 | image per card | header parts | theme · columns |
| features-15 | — | header parts | theme · columns |
| features-18 | — | header parts | theme |
| features-23 | two photographs | header parts, showCaptions | theme |
| features-25 | — | header parts | theme · columns |
| logos-03 | logos | showLabel | theme |
| team-01 | portrait per person | header parts | theme |
| posts-01 | image per article | header parts | theme · columns |

`height: auto` on hero-05 sets the component's `min-height` to `0px` and adds `4rem` of vertical padding. The features-20 note card uses the `card` palette slot, so it stays visible on a dark section.

## Class Sync

Webflow creates `features12_heading 2` when a pasted class does not match the one stored on the site.
Two things it treats as different, even when the values match: property order, and `font-family` for
a font the project does not have installed. Blokset writes properties in Webflow's stored order, and
omits `font-family` unless `webflow.fonts` names a font installed on the site. Code outputs still
use the CSS variables.

```js
webflow: {
  snapshot: "../webflow-sync/example.json",
  fonts: { "font-display": "Inter Tight" },
},
tokens: {
  ink: { value: "#141414", css: "var(--color-text)", webflow: "Text Primary" },
  "font-display": { value: "'Inter Tight', system-ui, sans-serif", webflow: "Heading" },
},
```

Export the site's styles with Webflow's `get_styles` (`include_properties: true`, breakpoints
`main`, `medium`, `small`, `tiny`) and its variables (`name`, `id`, `type`). Save them and build
with that site's config. `token.webflow` may be a variable name from that export or an id.

```bash
node src/cli.js sync styles.json --variables variables.json --out webflow-sync/example.json --site <id>
node src/cli.js build --config sites/example.config.js
```

`sites/example.config.js` is a Client-First config that builds the Webflow target only. When a
snapshot is loaded, the build prints `reused N / new 0` per component. A class that exists in the
snapshot is pasted with that class's stored styles, including breakpoint variants and variable
references (`@var_variable-…`). A new class keeps Blokset's layout, but a mapped token is written as
`@var_<id>` so color, type, and radius follow the destination site. Unmapped colors stay Blokset
literals. Unmapped `font-family` values are omitted, which lets the site's body font inherit.
Copy to Webflow in the gallery uses whichever site the running config was synced from. Pasting
into a different site drops those variable ids.

## Figma

The same spec becomes an auto-layout component. Color themes (`themeVariant()`) are modes on the
`Blokset/Theme` variable collection, not variants. Other groups (`align`, `columns`, …) plus a
`Breakpoint` property (Desktop 1440, Tablet 768, Mobile 390) are the variants. Layer names are the
framework's class names, so a Client-First file lines up with the Webflow paste. Text and show/hide
props are component properties. A repeated list becomes a nested component with one instance per
default item. Buttons are instances of `Blokset/Button`.

```bash
npm run dev          # gallery and the JSON the plugin reads, at http://localhost:4400/figma
```

In Figma desktop: Plugins → Development → Import plugin from manifest, and choose
`figma-plugin/manifest.json`. Run `npm run build` once so `figma-plugin/code.js` exists.

Sources live in one kit file. Open that file, reload the plugin, and run **Build kit**. It fills
one page per category: sections in a row, and list parts (the figure, the cards) in a row beneath
them. **Update kit** skips a component whose content hash has not changed, and moves an existing
set onto its category page. Then in Figma choose Assets → Library → Publish. The plugin cannot
publish.

In a project file, enable that library and press **Insert**. The highlighted row places an instance
of that section from the published library, to the right of what is already on the page. Nested
parts come with the published set. A gallery paste only sets the variant (`breakpoint`, theme, and
the other axes) after the instance exists. If the library is not enabled, Insert leaves the canvas
alone and tells you to build, publish, and enable it.

`blokset.config.js` → `figma.fonts` maps a type token to a font installed in Figma
(`"font-mono": "Roboto Mono"`). Uninstalled families fall back to Inter.

Figma has no breakpoints, motion, or sticky positioning. Each breakpoint is a variant at a fixed
width. `calc()` and `svh` heights become fixed pixel values. Motion is written into the component
description, from the same note as **Copy animation prompt**. Lists have as many instances as the
spec's default array; duplicate an instance to add one.

## Motion runtime

Attributes, not per-component JS, so behaviour is identical in Webflow and code:
`data-blok-enter`, `data-blok-scroll="parallax"`, `data-blok-marquee`, `data-blok-count`,
`data-blok-split="words"`, `data-blok-hover-reveal`. Everything respects `prefers-reduced-motion`.

At the bottom of a component in the gallery, next to **Copy footer code**, **Copy animation prompt** is the motion for that component only. Paste it into Webflow or another builder to recreate the same motion on a section that is already laid out.

## Migrating from Component Forge

Pages already pasted into Webflow carry `data-forge-*` attributes and load the old footer script. After the rename they need the new footer code (`dist/<framework>/webflow/footer-code.html`) and a re-paste. Rename `forge.config.js` to `blokset.config.js`. Blokset still loads `forge.config.js` if that is the only config file, and prints a warning.

## Roadmap

1. Push the Blokset variable collection into a live Webflow site (class sync already pastes stored styles and binds mapped tokens)
2. Publish the Figma plugin and kit (the local plugin and kit build already run from these specs)
3. Tailwind output for React/Astro
4. shadcn-style registry (`npx shadcn add <url>/hero-05`)
5. Sanity schema generation from spec props
