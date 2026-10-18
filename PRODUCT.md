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

Specs live in `components/*.js`. Class-naming profiles live in `frameworks/`. Per-project settings live in `blokset.config.js`. The marketing site and gallery are generated HTML, served at `http://localhost:4400` by `npm run dev` (the catalog is at `/gallery`). Copy to Webflow works in a normal Chrome tab. Motion needs the shared runtime and, for code targets, `gsap`.

## Capabilities and Constraints

The catalog is a dashboard of cards. A person searches by name, id, and description, then filters by category, motion, class framework, and output target. Opening a card shows that component’s full preview and the existing copy actions (Webflow paste, and React, Astro, HTML, CSS, vanilla).

Categories in the library today: hero, logos, features, process, stats, gallery, work, compare, timeline, testimonial, team, posts, pricing, faq, tabs, carousel, filter, cta, footer, contact, careers, press, statement, nav, offgrid, banner, bento, services, specs, editorial, resources, events, status. Motion behaviours in the library today: entrance, reveal, parallax, depth, pointer parallax, zoom, expand media, count-up, marquee, velocity, scroll highlight, word rise, character stagger, line reveal, text fill, text scrub, scramble, fit text, hover reveal, clip reveal, image trail, stack, horizontal scroll, accordion, billing toggle, compare, progress, tabs, carousel, filter, spotlight, expand, lightbox, hover swap, meters, rotating line, filmstrip, menu, dropdown, slider, split word, scroll steps, columns, deck, lens, flip, read, tilt, grow. Frameworks: Client-First, BEM, Flowkit. Outputs: Webflow, React, Astro, HTML, vanilla JS.

The gallery chrome is generated from `src/gallery/template.js`. Generated files under `dist/` are not hand-edited. Gallery chrome classes stay prefixed `g-` so they do not collide with component classes. Every generator change keeps `npm run check` green. Motion respects `prefers-reduced-motion`.

Undecided: whether framework and output filters change what is copied, or only which cards are shown. The global framework switch already changes copy output for every component.

## Brand Commitments

The product name is Blokset. The gallery wordmark is Blokset. Voice in the existing gallery and README is direct and technical: short sentences, real commands, no marketing claims.

## Evidence on Hand

Two hundred and forty-eight specs: `about-01`, `about-02`, `about-03`, `banner-01`, `bento-01`, `bento-02`, `bento-03`, `bento-04`, `bento-05`, `bento-06`, `bento-07`, `bento-08`, `bento-09`, `bento-10`, `bento-11`, `bento-12`, `bento-13`, `bento-14`, `bento-15`, `bento-16`, `bento-17`, `bento-18`, `bento-19`, `bento-21`, `bento-22`, `bento-23`, `bento-24`, `careers-01`, `careers-02`, `careers-03`, `careers-04`, `careers-05`, `careers-06`, `careers-07`, `careers-08`, `careers-09`, `careers-10`, `careers-11`, `careers-12`, `careers-13`, `careers-14`, `careers-15`, `careers-16`, `carousel-01`, `carousel-02`, `carousel-03`, `carousel-04`, `cases-01`, `cases-02`, `cases-03`, `changelog-01`, `changelog-02`, `changelog-03`, `compare-01`, `compare-02`, `contact-01`, `contact-03`, `cta-08`, `cta-11`, `cta-12`, `cta-13`, `cta-15`, `cta-16`, `cta-17`, `dev-01`, `dev-02`, `dev-03`, `editorial-01`, `events-01`, `faq-04`, `faq-05`, `faq-07`, `faq-08`, `faq-09`, `features-03`, `features-07`, `features-09`, `features-12`, `features-15`, `features-18`, `features-20`, `features-23`, `features-25`, `features-31`, `features-35`, `features-37`, `features-40`, `features-41`, `features-42`, `features-44`, `features-45`, `features-46`, `features-47`, `features-48`, `features-49`, `features-50`, `features-51`, `features-52`, `features-61`, `features-62`, `features-63`, `features-64`, `features-65`, `features-66`, `features-67`, `features-68`, `filter-01`, `footer-04`, `footer-05`, `footer-06`, `footer-07`, `gallery-05`, `gallery-08`, `gallery-11`, `gallery-14`, `gallery-15`, `hero-05`, `hero-11`, `hero-14`, `hero-18`, `hero-21`, `hero-23`, `hero-25`, `hero-26`, `hero-27`, `hero-28`, `hero-29`, `hero-30`, `hero-31`, `hero-32`, `hero-33`, `hero-34`, `hero-35`, `hero-36`, `hero-37`, `hero-38`, `hero-39`, `hero-40`, `hero-41`, `hero-42`, `hero-43`, `hero-44`, `hero-45`, `hero-46`, `hero-47`, `hero-52`, `hero-53`, `hero-54`, `hero-55`, `hero-56`, `hero-57`, `hero-58`, `hero-59`, `hero-60`, `hero-61`, `hero-62`, `hero-63`, `hero-64`, `hero-65`, `import-01`, `import-02`, `import-03`, `integrations-01`, `integrations-02`, `integrations-03`, `logos-02`, `logos-03`, `logos-05`, `nav-01`, `nav-02`, `nav-03`, `nav-04`, `nav-05`, `nav-06`, `nav-07`, `nav-08`, `nav-09`, `nav-10`, `offgrid-01`, `offgrid-02`, `offgrid-03`, `offgrid-04`, `offgrid-05`, `offgrid-06`, `onboard-01`, `onboard-02`, `onboard-03`, `posts-01`, `posts-02`, `press-01`, `pricing-06`, `pricing-07`, `pricing-08`, `pricing-09`, `pricing-10`, `pricing-11`, `pricing-12`, `process-03`, `process-05`, `process-06`, `resources-01`, `services-01`, `services-02`, `specs-01`, `statement-01`, `statement-03`, `stats-04`, `stats-08`, `stats-10`, `stats-11`, `stats-12`, `stats-13`, `stats-14`, `status-01`, `tabs-01`, `tabs-03`, `team-01`, `team-03`, `team-05`, `team-06`, `templates-01`, `templates-02`, `templates-03`, `testimonial-02`, `testimonial-04`, `testimonial-07`, `testimonial-09`, `testimonial-11`, `testimonial-12`, `testimonial-13`, `testimonial-14`, `timeline-02`, `timeline-03`, `timeline-04`, `timeline-05`, `timeline-06`, `trust-01`, `trust-02`, `trust-03`, `work-02`, `work-03`, `work-04`, `work-05`, `work-06`, `work-07`, `work-08`, `work-09`, `work-10`. Descriptions and names come from those files. No customer quotes, pricing, or licensing claims exist; do not invent them.

## Product Principles

- The catalog is for finding and copying, not for editing specs.
- Every filter must match a real field on the spec or a real output the generator already produces.
- Opening a card keeps the preview and copy actions that already work.
- Chrome never borrows component class names.
- Do not invent components, testimonials, or capabilities the specs do not have.
