# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

A designer or developer who already has a project (Webflow, React, Astro, or static HTML) and opens Blokset to find one component and copy it in. They are choosing, not authoring specs.

## Product Purpose

Blokset turns one component spec into React, Astro, HTML + CSS, vanilla JS, and a Webflow paste, using the class framework the project already uses. Success is finding the right component and leaving with the output that drops into that project.

## Positioning

The same spec, class names, and motion ship to every target. A neighboring library that only exports React, or only pastes Webflow, cannot make that claim.

## Operating Context

Specs live in `components/*.js`. Class-naming profiles live in `frameworks/`. Per-project settings live in `blokset.config.js`. The gallery is generated HTML, served at `http://localhost:4400` by `npm run dev`. Copy to Webflow works in a normal Chrome tab. Motion needs the shared runtime and, for code targets, `gsap`.

## Capabilities and Constraints

The catalog is a dashboard of cards. A person searches by name, id, and description, then filters by category, motion, class framework, and output target. Opening a card shows that component’s full preview and the existing copy actions (Webflow paste, and React, Astro, HTML, CSS, vanilla).

Categories in the library today: hero, features, stats, work, testimonial, cta. Motion behaviours in the library today: entrance, reveal, parallax, count-up, marquee, scroll-highlight (word split), hover-reveal. Frameworks: Client-First, BEM, Flowkit. Outputs: Webflow, React, Astro, HTML, vanilla JS.

The gallery chrome is generated from `src/gallery/template.js`. Generated files under `dist/` are not hand-edited. Gallery chrome classes stay prefixed `g-` so they do not collide with component classes. Every generator change keeps `npm run check` green. Motion respects `prefers-reduced-motion`.

Undecided: whether framework and output filters change what is copied, or only which cards are shown. The global framework switch already changes copy output for every component.

## Brand Commitments

The product name is Blokset. The gallery wordmark is Blokset. Voice in the existing gallery and README is direct and technical: short sentences, real commands, no marketing claims.

## Evidence on Hand

Thirty-seven specs: `hero-05`, `hero-11`, `hero-14`, `hero-18`, `logos-02`, `logos-03`, `features-03`, `features-07`, `features-09`, `features-12`, `features-15`, `features-18`, `features-20`, `features-23`, `features-25`, `features-31`, `features-35`, `features-37`, `process-03`, `stats-04`, `stats-08`, `gallery-05`, `gallery-08`, `gallery-11`, `work-02`, `compare-01`, `timeline-02`, `testimonial-07`, `pricing-06`, `faq-04`, `tabs-01`, `carousel-01`, `filter-01`, `team-01`, `posts-01`, `cta-08`, `footer-04`. Descriptions and names come from those files. No customer quotes, pricing, or licensing claims exist; do not invent them.

## Product Principles

- The catalog is for finding and copying, not for editing specs.
- Every filter must match a real field on the spec or a real output the generator already produces.
- Opening a card keeps the preview and copy actions that already work.
- Chrome never borrows component class names.
- Do not invent components, testimonials, or capabilities the specs do not have.
