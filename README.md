# Component Forge

One component spec → **React, Astro, HTML + CSS, vanilla JS and a Webflow paste**, in whatever class
framework a project uses (Client-First, BEM, Flowkit, or your own). Same structure, same class
names and the same motion everywhere.

```bash
npm install
npm run dev        # gallery at http://localhost:4400, live reload
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
forge.config.js    per-project settings: framework, tokens, utilities, button classes
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
npm run add -- hero-05 stats-04 --target astro --out ../site/src/components/forge
# React / Next
npm run add -- work-02 --target react --out ./app/components/forge --framework bem
# With a client project's own config
npm run add -- cta-08 --target astro --out ../client/src/forge --config ../client/forge.config.js
```

Each target is a drop-in folder: the components plus `forge-shared/` (tokens, utilities and button
CSS, and the motion runtime). Import `forge-shared/index.css` once in your layout and `npm i gsap`
if you use components with motion.

```astro
---
import "./forge/forge-shared/index.css";
import Stats04 from "./forge/Stats04.astro";
---
<Stats04 heading="By the numbers" stats={data.stats} />
```

- **React**: typed props + defaults, `"use client"` only when the component has motion.
- **Astro**: typed `Props`, motion loaded via a bundled `<script>`.
- **HTML + CSS**: static markup with default content; `index.html` is a working demo page.
- **Vanilla JS**: `render(props)` returns HTML, `mount(target, props)` inserts it and starts motion.
- **Webflow**: use the gallery's *Copy to Webflow* button (Chrome, normal tab), then paste in the
  Designer. Paste `dist/<framework>/webflow/footer-code.html` once into Site settings → Footer
  for motion.

## Per-project config

`forge.config.js` is where projects differ:

```js
export default {
  framework: "client-first",
  tokens: {
    accent: "#2f6bff",                                  // new value
    ink: { value: "#141414", css: "var(--color-text)" }, // map to the project's own variable
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
the paste on the classes the site already has.

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
| Tokens | `components/_lib/themes.js` keeps light, dark, and accent on the same slots. `dist/<framework>/webflow/variables.json` is a Forge collection of Color, Size, and FontFamily variables. |

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

`height: auto` on hero-05 sets the component's `min-height` to `0px` and adds `4rem` of vertical padding. The features-20 note card uses the `card` palette slot, so it stays visible on a dark section.

## Class Sync

Webflow creates `features12_heading 2` when a pasted class does not match the one stored on the site.
Two things it treats as different, even when the values match: property order, and `font-family` for
a font the project does not have installed. Forge writes properties in Webflow's stored order, and
omits `font-family` unless `webflow.fonts` names a font installed on the site. Code outputs still
use the CSS variables.

```js
webflow: {
  snapshot: "../webflow-sync/example.json",
  fonts: { "font-display": "Inter Tight" },
}
```

Export the site's styles with Webflow's `get_styles` (`include_properties: true`, breakpoints
`main`, `medium`, `small`, `tiny`), then save a snapshot and build with that site's config:

```bash
node src/cli.js sync styles.json --out webflow-sync/example.json --site <id>
node src/cli.js build --config sites/example.config.js
```

`sites/example.config.js` is a Client-First config that builds the Webflow target only. When a
snapshot is loaded, the build prints `reused N / new 0` per component. A class that exists in the
snapshot is pasted with that class's stored styles, including breakpoint variants and variable
references (`@var_variable-…`).

## Motion runtime

Attributes, not per-component JS, so behaviour is identical in Webflow and code:
`data-forge-enter`, `data-forge-scroll="parallax"`, `data-forge-marquee`, `data-forge-count`,
`data-forge-split="words"`, `data-forge-hover-reveal`. Everything respects `prefers-reduced-motion`.

## Roadmap

1. Push the Forge variable collection into a live Webflow site (class sync already pastes stored styles)
2. Figma: plugin that builds auto-layout components + variables from the same specs
3. Tailwind output for React/Astro
4. shadcn-style registry (`npx shadcn add <url>/hero-05`)
5. Sanity schema generation from spec props
