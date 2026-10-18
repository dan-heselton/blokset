// Blokset motion runtime core. This file is embedded verbatim into two builds:
//   blokset/motion.js         ESM, imports gsap from npm (React, Astro, bundlers)
//   blokset/motion.global.js  IIFE, uses window.gsap from a CDN (Webflow, plain HTML, vanilla)
// Keep it free of import/export statements.
//
// Behaviours are opt-in through data attributes, so they work identically on every platform:
//   data-blok-enter="fade-up|fade" [data-blok-delay="0.1"]   entrance when scrolled into view
//   data-blok-scroll="parallax" [data-blok-strength="0.15"]   scroll-linked parallax
//   data-blok-marquee [data-blok-speed="60"]                  infinite horizontal loop (px/s)
//   data-blok-count                                            count up the first number in the text
//   data-blok-split="words"                                    words brighten as you scroll through
//   data-blok-split="chars"                                    characters rise out of a mask on enter
//   data-blok-split="lines"                                    lines rise out of a mask on enter
//   data-blok-split="fill"                                     characters brighten as you scroll through
//   data-blok-split="scrub"                                    characters lift and fade in, scrubbed by scroll
//   data-blok-scramble                                         glyphs resolve into the text; replays on hover
//   data-blok-depth="0.2"                                      scroll parallax at this speed (negative allowed)
//   data-blok-pointer > data-blok-pointer-layer [data-blok-depth]  layers follow the cursor
//   data-blok-scroll="zoom"                                    image scales from 1.25 to 1 across the section
//   data-blok-expand-media                                     pinned media grows from an inset card (desktop)
//   data-blok-velocity                                         on a marquee track: scroll speed skews and boosts it
//   data-blok-hover-reveal (list) > data-blok-hover-row > data-blok-hover-media   cursor-follow image
//   data-blok-marquee data-blok-direction="reverse"           marquee running the other way
//   data-blok-split="rise"                                     words rise out of a mask on enter
//   data-blok-reveal="clip"                                    image wipes in from the bottom on enter
//   data-blok-trail > data-blok-trail-item (images)           images spawn along the cursor path
//   data-blok-stack > data-blok-stack-card                    sticky cards scale down as the next one lands (stay opaque)
//   data-blok-hscroll > data-blok-hscroll-track               pinned horizontal scroll (desktop)
//   data-blok-accordion > data-blok-acc-item > [-trigger, -panel]   accessible accordion
//   data-blok-switches > data-blok-switch [data-blok-reset]        permission cell toggles
//   data-blok-billing > [data-blok-billing-toggle], [data-blok-price data-blok-alt]  price toggle
//   data-blok-compare > [data-blok-compare-after, data-blok-compare-handle]           before/after
//   data-blok-progress                                         fills (scaleY) as its parent scrolls past
//   data-blok-fit                                              text scales to fill its container width
//   data-blok-tabs > [-tab, -tab-panel]                        tab switcher
//   data-blok-carousel > [-slide, -prev, -next]                one-slide carousel
//   data-blok-filter > [-chip="all"|group, -card] [data-blok-group]
//   data-blok-spotlight > [-figure, -row] [data-blok-src] [data-blok-alt]
//   data-blok-expand > [-card > -trigger, -panel]              click to expand, others close
//   data-blok-lightbox > [-item, -dialog, -image, -caption, -close]
//   data-blok-guide[="curve"|"elbow"|"step"] > [-tab, -panel, -hotspot, -node]
//                                                              timeline tabs; SVG line to the hotspot (curve|elbow|step)
//   data-blok-sheet > [-item, -panel, -dialog, -mount, -close] full-page rich modal
//   data-blok-modes > [-mode, -modes-panel]                   list / grid / gallery switcher
//   data-blok-curve > [-slide, -prev, -next]                   perspective carousel
//   data-blok-swap[="reveal"] > [-figure, -row] [data-blok-src] [data-blok-alt]
//                                                              reveal keeps the figure closed until hover or focus
//   data-blok-slider > data-blok-slider-track > data-blok-slider-card
//     [data-blok-slider-prev, data-blok-slider-next, data-blok-slider-count, data-blok-slider-dot]
//     data-blok-slider-index                         index runs through every card
//   data-blok-range > [data-blok-range-fill, data-blok-range-thumb] [data-blok-range-readout]
//   data-blok-step > [data-blok-step-dec, data-blok-step-inc, data-blok-step-value]
//   data-blok-choices [data-blok-multi] > data-blok-choice
//   data-blok-panels > data-blok-panel [data-blok-panel-go, data-blok-panel-prev, data-blok-panel-next, data-blok-panel-count]
//   data-blok-plan [data-blok-sum, data-blok-seat-hint]
//   data-blok-compare-before  data-blok-compare-set
//   data-blok-sides > data-blok-side [data-blok-side-dot]      alternate sides from the lg breakpoint
//   data-blok-open > data-blok-open-stage > data-blok-open-half > data-blok-open-word
//                                                              scroll pulls the halves apart (desktop)
//   data-blok-steps > data-blok-steps-still [data-blok-steps-trigger]
//                                                              pinned wipe through stills; click when triggers exist
//   data-blok-columns > data-blok-columns-item
//     [data-blok-columns-label, data-blok-columns-media]       one column opens; the others shrink
//   data-blok-deck > data-blok-deck-card                       click or swipe sends the top card back
//   data-blok-lens > data-blok-lens-reveal                     drag a circle; arrow keys move it
//   data-blok-flip > [data-blok-flip-front, data-blok-flip-back]  click turns the card over
//   data-blok-read > data-blok-read-line                       the line under the pointer brightens
//   data-blok-tilt > data-blok-tilt-card                       a card tilts toward the pointer, then eases back
//   data-blok-grow > data-blok-grow-tile                       the hovered tile widens; below lg the row stacks
//   data-blok-meters > [data-blok-meter] [data-blok-value]   bars fill on enter
//   data-blok-cycle > [-current, -word]                        rotates words; still under reduced motion
//   data-blok-scrub > [-main, -thumb]                          thumbnail filmstrip
//   data-blok-menu[="overlay"] > data-blok-menu-toggle, data-blok-menu-panel
//     [data-blok-menu-open, data-blok-menu-close]              menu; overlay stays closed on desktop
//   data-blok-drops > data-blok-drop > [data-blok-drop-trigger, data-blok-drop-panel]
//     [data-blok-drop-icon] [data-blok-drop-mark] [data-blok-drop-label]
//                                                              dropdown; mark fades in; label swaps to inverse when open
//                                                              hover on a fine pointer, click otherwise; arrow keys move a level
//   data-blok-peek > data-blok-peek-card > data-blok-peek-media
//                                                              the card under the pointer reveals its media; the first starts open
function createBloksetMotion(gsap, ScrollTrigger) {
  if (!gsap || typeof window === "undefined") return { init() {} };
  if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
  const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const once = (el, name) => {
    if (el.dataset["blok" + name + "Ready"]) return false;
    el.dataset["blok" + name + "Ready"] = "1";
    return true;
  };
  const q = (el, sel) => [...el.querySelectorAll(sel)];
  const presets = {
    "fade-up": { from: { opacity: 0, y: 28 }, to: { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" } },
    fade: { from: { opacity: 0 }, to: { opacity: 1, duration: 0.8, ease: "power2.out" } },
  };

  function enter(el) {
    const p = presets[el.dataset.blokEnter];
    if (!p || reduced()) return;
    const to = { ...p.to, delay: parseFloat(el.dataset.blokDelay || "0") };
    if (ScrollTrigger) to.scrollTrigger = { trigger: el, start: "top 90%", once: true };
    gsap.fromTo(el, p.from, to);
  }

  function parallax(el) {
    if (!ScrollTrigger || reduced()) return;
    const strength = parseFloat(el.dataset.blokStrength || "0.15");
    const section = el.closest("section") || el.parentElement;
    gsap.set(el, { scale: 1 + strength });
    gsap.to(el, {
      yPercent: strength * 50,
      ease: "none",
      scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: true },
    });
  }

  function marquee(track) {
    // Duplicate the items once so the loop is seamless, then slide by exactly half the width.
    Array.from(track.children).forEach((child) => {
      const clone = child.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      track.appendChild(clone);
    });
    if (reduced()) return;
    const speed = parseFloat(track.dataset.blokSpeed || "60");
    const distance = track.scrollWidth / 2;
    const reverse = track.dataset.blokDirection === "reverse";
    const tween = reverse
      ? gsap.fromTo(track, { x: -distance }, { x: 0, duration: distance / speed, ease: "none", repeat: -1 })
      : gsap.to(track, { x: -distance, duration: distance / speed, ease: "none", repeat: -1 });
    track.addEventListener("pointerenter", () => gsap.to(tween, { timeScale: 0.25, duration: 0.6, overwrite: "auto" }));
    track.addEventListener("pointerleave", () => gsap.to(tween, { timeScale: 1, duration: 0.6, overwrite: "auto" }));
    if (track.hasAttribute("data-blok-velocity") && ScrollTrigger) velocity(track, tween);
  }

  // Scroll speed briefly boosts a marquee and skews the track. Resting state returns when scrolling stops.
  function velocity(track, tween) {
    let reset;
    const settle = () => {
      gsap.to(tween, { timeScale: 1, duration: 0.6, overwrite: "auto" });
      gsap.to(track, { skewX: 0, duration: 0.6, overwrite: "auto" });
    };
    ScrollTrigger.create({
      trigger: track.closest("section") || track,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        const boost = gsap.utils.clamp(-8, 8, self.getVelocity() / 900);
        gsap.to(tween, { timeScale: 1 + Math.abs(boost), duration: 0.2, overwrite: "auto" });
        gsap.to(track, { skewX: boost, duration: 0.2, overwrite: "auto" });
        clearTimeout(reset);
        reset = setTimeout(settle, 140);
      },
    });
  }

  function count(el) {
    const original = el.textContent;
    const match = original.match(/-?\d[\d,]*(\.\d+)?/);
    if (!match || reduced()) return;
    const target = parseFloat(match[0].replace(/,/g, ""));
    const decimals = match[1] ? match[1].length - 1 : 0;
    const before = original.slice(0, match.index);
    const after = original.slice(match.index + match[0].length);
    const fmt = (n) => before + n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + after;
    const state = { n: 0 };
    el.textContent = fmt(0);
    gsap.to(state, {
      n: target,
      duration: 1.8,
      ease: "power2.out",
      onUpdate: () => (el.textContent = fmt(state.n)),
      onComplete: () => (el.textContent = original),
      scrollTrigger: ScrollTrigger ? { trigger: el, start: "top 85%", once: true } : undefined,
    });
  }

  const esc = (w) => w.replace(/&/g, "&amp;").replace(/</g, "&lt;");

  // One splitter for every text mode. Reduced motion keeps the original text node.
  function split(el) {
    if (reduced()) return;
    const mode = el.dataset.blokSplit || "words";
    if (mode === "rise") return rise(el);
    if (mode === "chars") return charEnter(el);
    if (mode === "lines") return lineEnter(el);
    if (mode === "fill") return charFill(el);
    if (mode === "scrub") return charScrub(el);
    const words = el.textContent.trim().split(/\s+/);
    el.setAttribute("aria-label", el.textContent.trim());
    el.innerHTML = words.map((w) => `<span aria-hidden="true" style="display:inline-block;text-indent:0">${esc(w)}</span>`).join(" ");
    if (!ScrollTrigger) return;
    gsap.fromTo(
      el.children,
      { opacity: 0.16 },
      { opacity: 1, ease: "none", stagger: 0.08, scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 50%", scrub: 0.6 } }
    );
  }

  // Characters stay inside nowrap word wrappers so a line never breaks mid-word.
  function charSpans(el, mask) {
    const text = el.textContent.trim();
    el.setAttribute("aria-label", text);
    const word = (chars) => `<span aria-hidden="true" style="display:inline-block;white-space:nowrap">${chars}</span>`;
    const ch = (c) => mask
      ? `<span style="display:inline-block;overflow:hidden;vertical-align:bottom"><span style="display:inline-block;padding-bottom:0.12em;margin-bottom:-0.12em">${esc(c)}</span></span>`
      : `<span style="display:inline-block">${esc(c)}</span>`;
    el.innerHTML = text.split(/\s+/).filter(Boolean).map((w) => word([...w].map(ch).join(""))).join(" ");
    return q(el, mask ? "span>span>span" : "span>span");
  }

  function enterTween(el, targets, from, extra) {
    const box = el.getBoundingClientRect();
    const inView = box.bottom > 0 && box.top < window.innerHeight * 0.92;
    // Already on screen: a ScrollTrigger created after init()'s refresh (line splits
    // wait for fonts) does not emit onEnter, so the from state would stay put.
    return gsap.fromTo(targets, from, {
      ...extra,
      delay: parseFloat(el.dataset.blokDelay || "0"),
      scrollTrigger: ScrollTrigger && !inView ? { trigger: el, start: "top 90%", once: true } : undefined,
    });
  }

  function charEnter(el) {
    const inners = charSpans(el, true);
    if (!inners.length) return;
    enterTween(el, inners, { yPercent: 110 }, { yPercent: 0, duration: 0.9, ease: "power4.out", stagger: 0.018 });
  }

  function charFill(el) {
    const inners = charSpans(el, false);
    if (!inners.length || !ScrollTrigger) return;
    gsap.fromTo(inners, { opacity: 0.18 }, {
      opacity: 1, ease: "none", stagger: 0.03,
      scrollTrigger: { trigger: el, start: "top 75%", end: "bottom 40%", scrub: 0.5 },
    });
  }

  function charScrub(el) {
    const inners = charSpans(el, true);
    if (!inners.length || !ScrollTrigger) return;
    gsap.fromTo(inners, { yPercent: 120, opacity: 0 }, {
      yPercent: 0, opacity: 1, ease: "none", stagger: 0.03,
      scrollTrigger: { trigger: el, start: "top 95%", end: "top 40%", scrub: true },
    });
  }

  // Group wrapped words into line masks. Re-measures after fonts load and on resize.
  function lineEnter(el) {
    const text = el.textContent.trim();
    if (!text) return;
    let tween = null;
    const kill = () => {
      if (!tween) return;
      if (tween.scrollTrigger) tween.scrollTrigger.kill();
      tween.kill();
      tween = null;
    };
    const build = (animate) => {
      kill();
      el.setAttribute("aria-label", text);
      el.innerHTML = text.split(/\s+/).filter(Boolean).map((w) => `<span aria-hidden="true" style="display:inline-block">${esc(w)}</span>`).join(" ");
      void el.offsetWidth;
      const groups = [];
      let top = null;
      let group = [];
      for (const word of el.children) {
        const y = word.getBoundingClientRect().top;
        if (top != null && y - top > 2) {
          groups.push(group);
          group = [];
        }
        top = y;
        group.push(word.textContent);
      }
      if (group.length) groups.push(group);
      el.innerHTML = groups.map((line) => `<span aria-hidden="true" style="display:block;overflow:hidden;padding-bottom:0.08em;margin-bottom:-0.08em"><span style="display:block;white-space:nowrap">${line.map(esc).join(" ")}</span></span>`).join("");
      const inner = el.querySelectorAll(":scope > span > span");
      if (!animate) { gsap.set(inner, { yPercent: 0 }); return; }
      tween = enterTween(el, inner, { yPercent: 110 }, { yPercent: 0, duration: 1, ease: "power4.out", stagger: 0.08 });
    };
    const start = () => build(true);
    if (document.fonts && document.fonts.status !== "loaded") document.fonts.ready.then(start, start);
    else start();
    let timer;
    window.addEventListener("resize", () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const inView = el.getBoundingClientRect().top < window.innerHeight;
        const played = tween && tween.progress() > 0;
        build(played || inView ? false : true);
      }, 150);
    });
  }

  function scramble(el) {
    const original = el.textContent;
    const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let tween = null;
    const play = (scroll) => {
      if (reduced()) { el.textContent = original; return; }
      if (tween) {
        if (tween.scrollTrigger) tween.scrollTrigger.kill();
        tween.kill();
      }
      const state = { i: 0 };
      const to = {
        i: original.length,
        duration: 1.15,
        ease: "power2.out",
        onUpdate: () => {
          const n = Math.floor(state.i);
          let out = "";
          for (let c = 0; c < original.length; c++) {
            const ch = original[c];
            out += c < n || /\s/.test(ch) ? ch : glyphs[Math.floor(Math.random() * glyphs.length)];
          }
          el.textContent = out;
        },
        onComplete: () => { el.textContent = original; },
      };
      if (scroll && ScrollTrigger) to.scrollTrigger = { trigger: el, start: "top 85%", once: true };
      tween = gsap.to(state, to);
    };
    play(true);
    el.addEventListener("pointerenter", () => play(false));
  }

  function depth(el) {
    if (!ScrollTrigger || reduced() || el.closest("[data-blok-pointer]")) return;
    const speed = parseFloat(el.dataset.blokDepth || "0.15");
    if (!speed) return;
    gsap.to(el, {
      yPercent: speed * 50,
      ease: "none",
      scrollTrigger: { trigger: el.closest("section") || el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
    });
  }

  function pointer(root) {
    if (reduced() || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const movers = q(root, "[data-blok-pointer-layer]").map((layer) => {
      const amount = parseFloat(layer.dataset.blokDepth || "0.2") * 70;
      return {
        x: gsap.quickTo(layer, "x", { duration: 0.7, ease: "power3.out" }),
        y: gsap.quickTo(layer, "y", { duration: 0.7, ease: "power3.out" }),
        amount,
      };
    });
    if (!movers.length) return;
    root.addEventListener("pointermove", (e) => {
      const r = root.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
      movers.forEach((m) => { m.x(dx * m.amount); m.y(dy * m.amount); });
    });
    root.addEventListener("pointerleave", () => movers.forEach((m) => { m.x(0); m.y(0); }));
  }

  function zoom(el) {
    if (!ScrollTrigger || reduced()) return;
    gsap.set(el, { transformOrigin: "50% 50%" });
    gsap.fromTo(el, { scale: 1.25 }, {
      scale: 1, ease: "none",
      scrollTrigger: { trigger: el.closest("section") || el, start: "top bottom", end: "bottom top", scrub: true },
    });
  }

  // Desktop: pin the section and grow the media from the inset card in CSS to the section edges.
  function expandMedia(el) {
    if (!ScrollTrigger || reduced()) return;
    const section = el.closest("section") || el.parentElement;
    gsap.matchMedia().add("(min-width: 992px)", () => {
      gsap.fromTo(el, {
        top: "12%", right: "12%", bottom: "12%", left: "12%", borderRadius: "1rem",
      }, {
        top: "0%", right: "0%", bottom: "0%", left: "0%", borderRadius: "0rem", ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "+=120%", pin: true, scrub: 0.6 },
      });
    });
  }

  function hoverReveal(list) {
    const canHover = window.matchMedia("(hover: hover) and (min-width: 992px)");
    let active = null;
    const move = (e) => {
      if (!active) return;
      const r = list.getBoundingClientRect();
      gsap.to(active, { x: e.clientX - r.left, y: e.clientY - r.top, duration: reduced() ? 0 : 0.5, ease: "power3.out" });
    };
    list.querySelectorAll("[data-blok-hover-row]").forEach((row) => {
      const media = row.querySelector("[data-blok-hover-media]");
      if (!media) return;
      gsap.set(media, { xPercent: -50, yPercent: -50, autoAlpha: 0, scale: 0.85 });
      row.addEventListener("pointerenter", (e) => {
        if (!canHover.matches) return;
        active = media;
        const r = list.getBoundingClientRect();
        gsap.set(media, { x: e.clientX - r.left, y: e.clientY - r.top });
        gsap.to(media, { autoAlpha: 1, scale: 1, duration: reduced() ? 0 : 0.4, ease: "power3.out" });
      });
      row.addEventListener("pointerleave", () => {
        gsap.to(media, { autoAlpha: 0, scale: 0.85, duration: reduced() ? 0 : 0.3, ease: "power2.in" });
        if (active === media) active = null;
      });
    });
    list.addEventListener("pointermove", move);
  }

  // Words rise out of an overflow mask, staggered.
  function rise(el) {
    const text = el.textContent.trim();
    el.setAttribute("aria-label", text);
    el.innerHTML = text
      .split(/\s+/)
      .map((w) => `<span aria-hidden="true" style="display:inline-block;overflow:hidden;vertical-align:top;padding-bottom:0.08em;margin-bottom:-0.08em"><span style="display:inline-block">${esc(w)}</span></span>`)
      .join(" ");
    if (reduced()) return;
    const inner = el.querySelectorAll("span > span");
    gsap.fromTo(inner, { yPercent: 110 }, {
      yPercent: 0, duration: 1, ease: "power4.out", stagger: 0.06, delay: parseFloat(el.dataset.blokDelay || "0"),
      scrollTrigger: ScrollTrigger ? { trigger: el, start: "top 92%", once: true } : undefined,
    });
  }

  function clipReveal(el) {
    if (reduced()) return;
    gsap.fromTo(el, { clipPath: "inset(100% 0% 0% 0%)" }, {
      clipPath: "inset(0% 0% 0% 0%)", duration: 1.3, ease: "power4.inOut", delay: parseFloat(el.dataset.blokDelay || "0"),
      scrollTrigger: ScrollTrigger ? { trigger: el, start: "top 90%", once: true } : undefined,
    });
  }

  // Images appear along the cursor path and fade out, one after another.
  function trail(area) {
    const items = q(area, "[data-blok-trail-item]");
    if (!items.length || !window.matchMedia("(hover: hover) and (min-width: 768px)").matches || reduced()) return;
    let i = 0, last = null, z = 10;
    const gap = parseFloat(area.dataset.blokTrailGap || "90");
    items.forEach((it) => gsap.set(it, { xPercent: -50, yPercent: -50, autoAlpha: 0 }));
    area.addEventListener("pointermove", (e) => {
      const r = area.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      if (last && Math.hypot(x - last.x, y - last.y) < gap) return;
      last = { x, y };
      const it = items[i++ % items.length];
      gsap.killTweensOf(it);
      gsap.set(it, { x, y, zIndex: z++, autoAlpha: 1, scale: 0.6, rotate: gsap.utils.random(-8, 8) });
      gsap.to(it, { scale: 1, duration: 0.5, ease: "power3.out" });
      gsap.to(it, { autoAlpha: 0, scale: 0.9, duration: 0.6, delay: 0.7, ease: "power2.in" });
    });
  }

  // Cards are sticky in CSS. Each one scales down as the next covers it and stays fully opaque.
  function stack(list) {
    if (!ScrollTrigger || reduced()) return;
    const cards = q(list, "[data-blok-stack-card]");
    cards.forEach((card, idx) => {
      gsap.set(card, { zIndex: idx + 1, opacity: 1, transformOrigin: "50% 0%" });
      const next = cards[idx + 1];
      if (!next) return;
      gsap.to(card, {
        scale: 0.94, opacity: 1, ease: "none", transformOrigin: "50% 0%",
        scrollTrigger: { trigger: next, start: "top 85%", end: "top 25%", scrub: true },
      });
    });
  }

  // Desktop: pin the section and translate the track sideways. Mobile keeps native swipe.
  function hscroll(wrap) {
    const track = wrap.querySelector("[data-blok-hscroll-track]");
    if (!track || !ScrollTrigger || reduced()) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 992px)", () => {
      const distance = () => Math.max(0, track.scrollWidth - wrap.clientWidth);
      gsap.set(track, { overflow: "visible" });
      const tween = gsap.to(track, {
        x: () => -distance(), ease: "none",
        scrollTrigger: { trigger: wrap, start: "top top", end: () => "+=" + distance(), pin: true, scrub: 0.5, invalidateOnRefresh: true },
      });
      return () => { tween.scrollTrigger && tween.scrollTrigger.kill(); tween.kill(); gsap.set(track, { clearProps: "all" }); };
    });
  }

  // Accordion: panels are open without JS; JS collapses all but the first and animates height.
  function accordion(root) {
    const items = q(root, "[data-blok-acc-item]");
    const single = root.dataset.blokAccordion !== "multi";
    const set = (item, open, animate) => {
      const trigger = item.querySelector("[data-blok-acc-trigger]");
      const panel = item.querySelector("[data-blok-acc-panel]");
      const icon = item.querySelector("[data-blok-acc-icon]");
      if (!trigger || !panel) return;
      trigger.setAttribute("aria-expanded", String(open));
      panel.setAttribute("aria-hidden", String(!open));
      const d = animate && !reduced() ? 0.45 : 0;
      gsap.to(panel, { height: open ? "auto" : 0, opacity: open ? 1 : 0, duration: d, ease: "power3.inOut", overwrite: true });
      if (icon) gsap.to(icon, { rotate: open ? 45 : 0, duration: d, ease: "power3.inOut" });
    };
    items.forEach((item, idx) => {
      const trigger = item.querySelector("[data-blok-acc-trigger]");
      const panel = item.querySelector("[data-blok-acc-panel]");
      if (!trigger || !panel) return;
      const id = "blok-acc-" + Math.random().toString(36).slice(2, 8);
      panel.id = id;
      trigger.setAttribute("role", "button");
      trigger.setAttribute("tabindex", "0");
      trigger.setAttribute("aria-controls", id);
      gsap.set(panel, { overflow: "hidden" });
      const explicit = items.some((other) => other.querySelector("[data-blok-acc-trigger]")?.getAttribute("aria-expanded") === "true");
      set(item, explicit ? trigger.getAttribute("aria-expanded") === "true" : idx === 0, false);
      const toggle = () => {
        const open = trigger.getAttribute("aria-expanded") !== "true";
        if (open && single) items.forEach((other) => other !== item && set(other, false, true));
        set(item, open, true);
      };
      trigger.addEventListener("click", toggle);
      trigger.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
      });
    });
  }

  // Monthly/yearly toggle: swaps each [data-blok-price] with its data-blok-alt value.
  function billing(root) {
    const toggle = root.querySelector("[data-blok-billing-toggle]");
    const knob = root.querySelector("[data-blok-billing-knob]");
    const labels = q(root, "[data-blok-billing-label]");
    const prices = q(root, "[data-blok-price]");
    prices.forEach((p) => (p.dataset.blokMain = p.textContent));
    if (!toggle) return;
    toggle.setAttribute("role", "switch");
    toggle.setAttribute("tabindex", "0");
    let alt = false;
    const render = () => {
      toggle.setAttribute("aria-checked", String(alt));
      if (knob) gsap.to(knob, { x: alt ? knob.parentElement.clientWidth - knob.offsetWidth - 2 * knob.offsetLeft : 0, duration: reduced() ? 0 : 0.3, ease: "power3.out" });
      labels.forEach((l, i) => gsap.to(l, { opacity: (i === 1) === alt ? 1 : 0.45, duration: 0.2 }));
      prices.forEach((p) => {
        const next = alt ? p.dataset.blokAlt : p.dataset.blokMain;
        if (reduced()) { p.textContent = next; return; }
        gsap.to(p, { yPercent: -30, opacity: 0, duration: 0.15, onComplete: () => {
          p.textContent = next;
          gsap.fromTo(p, { yPercent: 30, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.25 });
        } });
      });
    };
    const flip = () => { alt = !alt; render(); };
    toggle.addEventListener("click", flip);
    toggle.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); } });
    labels.forEach((l, i) => l.addEventListener("click", () => { if ((i === 1) !== alt) flip(); }));
    labels.forEach((l, i) => gsap.set(l, { opacity: i === 0 ? 1 : 0.45 }));
    toggle.setAttribute("aria-checked", "false");
  }

  // Before/after: drag, click or use arrow keys to move the divider.
  function compare(root) {
    const after = root.querySelector("[data-blok-compare-after]");
    const before = root.querySelector("[data-blok-compare-before]");
    const handle = root.querySelector("[data-blok-compare-handle]");
    if ((!after && !before) || !handle) return;
    let pct = 50;
    handle.setAttribute("role", "slider");
    handle.setAttribute("tabindex", "0");
    handle.setAttribute("aria-valuemin", "0");
    handle.setAttribute("aria-valuemax", "100");
    handle.setAttribute("aria-label", root.dataset.blokCompareLabel || "Before and after comparison");
    const apply = () => {
      if (after) after.style.clipPath = `inset(0 0 0 ${pct}%)`;
      if (before) before.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
      handle.style.left = pct + "%";
      handle.setAttribute("aria-valuenow", String(Math.round(pct)));
    };
    const fromEvent = (e) => {
      const r = root.getBoundingClientRect();
      pct = Math.min(100, Math.max(0, ((e.clientX - r.left) / r.width) * 100));
      apply();
    };
    let dragging = false;
    root.addEventListener("pointerdown", (e) => { dragging = true; root.setPointerCapture(e.pointerId); fromEvent(e); });
    root.addEventListener("pointermove", (e) => dragging && fromEvent(e));
    root.addEventListener("pointerup", () => (dragging = false));
    root.addEventListener("pointercancel", () => (dragging = false));
    handle.addEventListener("keydown", (e) => {
      const step = e.shiftKey ? 10 : 2;
      if (e.key === "ArrowLeft") pct = Math.max(0, pct - step);
      else if (e.key === "ArrowRight") pct = Math.min(100, pct + step);
      else if (e.key === "Home") pct = 0;
      else if (e.key === "End") pct = 100;
      else return;
      e.preventDefault();
      apply();
    });
    const host = root.parentElement;
    if (host) {
      host.addEventListener("blok-range", (e) => { if (typeof e.detail === "number") { pct = e.detail; apply(); } });
      q(host, "[data-blok-compare-set]").forEach((btn) => btn.addEventListener("click", () => { pct = +btn.dataset.blokCompareSet || 0; apply(); }));
    }
    apply();
    if (!reduced() && ScrollTrigger) {
      const state = { p: 12 };
      gsap.to(state, { p: 50, duration: 1.4, ease: "power3.inOut", onUpdate: () => { pct = state.p; apply(); },
        scrollTrigger: { trigger: root, start: "top 75%", once: true } });
    }
  }

  // A line that fills as its parent scrolls through the viewport.
  function progress(el) {
    if (!ScrollTrigger || reduced()) { gsap.set(el, { scaleY: 1 }); return; }
    gsap.fromTo(el, { scaleY: 0, transformOrigin: "50% 0%" }, {
      scaleY: 1, ease: "none",
      scrollTrigger: { trigger: el.parentElement, start: "top 65%", end: "bottom 65%", scrub: true },
    });
  }

  // Scale a single line of text so it spans its container exactly (measured as inline content).
  function fit(el) {
    const resize = () => {
      el.style.fontSize = "";
      el.style.whiteSpace = "nowrap";
      el.style.display = "inline-block";
      const parent = el.parentElement;
      const cs = getComputedStyle(parent);
      const available = parent.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      const size = parseFloat(getComputedStyle(el).fontSize);
      const width = el.getBoundingClientRect().width;
      if (width > 0) el.style.fontSize = (size * available * 0.995) / width + "px";
    };
    resize();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(resize);
    window.addEventListener("resize", resize);
  }

  function pressable(el, fn) {
    if (!el) return;
    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "0");
    el.addEventListener("click", fn);
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fn(); }
    });
  }

  function fadeSwap(img, src, alt) {
    if (!img || !src || img.getAttribute("src") === src) return;
    const apply = () => { img.src = src; if (alt != null) img.alt = alt; };
    if (reduced()) { apply(); return; }
    gsap.to(img, { opacity: 0, duration: 0.18, overwrite: true, onComplete: () => { apply(); gsap.to(img, { opacity: 1, duration: 0.28, overwrite: true }); } });
  }

  function tabs(root) {
    const triggers = q(root, "[data-blok-tab]");
    const panels = q(root, "[data-blok-tab-panel]");
    const show = (index, animate) => {
      triggers.forEach((tab, i) => {
        tab.setAttribute("aria-pressed", String(i === index));
        gsap.to(tab, { opacity: i === index ? 1 : 0.45, duration: animate && !reduced() ? 0.25 : 0, overwrite: true });
      });
      panels.forEach((panel, i) => {
        const on = i === index;
        panel.hidden = !on;
        if (on && animate && !reduced()) gsap.fromTo(panel, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out", overwrite: true });
      });
    };
    triggers.forEach((tab, i) => pressable(tab, () => show(i, true)));
    show(0, false);
  }

  function carousel(root) {
    const slides = q(root, "[data-blok-slide]");
    const prev = root.querySelector("[data-blok-carousel-prev]");
    const next = root.querySelector("[data-blok-carousel-next]");
    if (!slides.length) return;
    let index = 0;
    let timer = 0;
    const stop = () => { if (timer) clearInterval(timer); timer = 0; };
    const show = (i, animate) => {
      index = (i + slides.length) % slides.length;
      slides.forEach((slide, n) => {
        const on = n === index;
        slide.hidden = !on;
        if (on && animate && !reduced()) gsap.fromTo(slide, { opacity: 0, x: 16 }, { opacity: 1, x: 0, duration: 0.4, ease: "power3.out", overwrite: true });
      });
    };
    const start = () => {
      stop();
      if (reduced() || slides.length < 2) return;
      timer = setInterval(() => show(index + 1, true), 5000);
    };
    pressable(prev, () => { stop(); show(index - 1, true); });
    pressable(next, () => { stop(); show(index + 1, true); });
    show(0, false);
    start();
  }

  function shot(el) {
    const s = getComputedStyle(el);
    return { backgroundColor: s.backgroundColor, color: s.color, borderTopColor: s.borderTopColor, borderRightColor: s.borderRightColor, borderBottomColor: s.borderBottomColor, borderLeftColor: s.borderLeftColor, transform: s.transform };
  }

  function filterGrid(root) {
    const chips = q(root, "[data-blok-filter-chip]");
    const cards = q(root, "[data-blok-filter-card]");
    let paper = "#fff", node = root;
    for (; node; node = node.parentElement) {
      const bg = getComputedStyle(node).backgroundColor;
      if (bg && bg !== "rgba(0, 0, 0, 0)") { paper = bg; break; }
    }
    if (!root.dataset.blokSnapped && chips.some((chip) => chip.getAttribute("aria-pressed") === "true")) {
      root.dataset.blokSnapped = "1";
      const onChip = chips.find((chip) => chip.getAttribute("aria-pressed") === "true") || chips[0];
      const offChip = chips.find((chip) => chip !== onChip) || chips[0];
      root._on = shot(onChip);
      root._off = shot(offChip);
    }
    const apply = (group) => {
      chips.forEach((chip) => {
        const on = (chip.dataset.blokFilterChip || "all") === group;
        chip.setAttribute("aria-pressed", String(on));
        if (root._on) Object.assign(chip.style, on ? root._on : root._off);
        else {
          if (!chip.dataset.blokInk) chip.dataset.blokInk = getComputedStyle(chip).color;
          chip.style.backgroundColor = on ? chip.dataset.blokInk : "";
          chip.style.color = on ? paper : "";
        }
      });
      cards.forEach((card) => {
        const show = group === "all" || card.dataset.blokGroup === group;
        card.hidden = !show;
        card.style.display = show ? "" : "none";
      });
    };
    chips.forEach((chip) => pressable(chip, () => apply(chip.dataset.blokFilterChip || "all")));
    apply("all");
  }

  function spotlight(root) {
    const img = root.querySelector("[data-blok-spotlight-figure] img");
    const rows = q(root, "[data-blok-spotlight-row]");
    if (!img || !rows.length || !ScrollTrigger) return;
    const activate = (row) => {
      rows.forEach((r) => r.setAttribute("aria-current", String(r === row)));
      fadeSwap(img, row.dataset.blokSrc, row.dataset.blokAlt || "");
    };
    rows.forEach((row) => {
      ScrollTrigger.create({
        trigger: row,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => { if (self.isActive) activate(row); },
      });
    });
  }

  function expand(root) {
    const cards = q(root, "[data-blok-expand-card]");
    const set = (card, open, animate) => {
      const trigger = card.querySelector("[data-blok-expand-trigger]");
      const panel = card.querySelector("[data-blok-expand-panel]");
      if (!trigger || !panel) return;
      trigger.setAttribute("aria-expanded", String(open));
      const d = animate && !reduced() ? 0.4 : 0;
      gsap.to(panel, { height: open ? "auto" : 0, opacity: open ? 1 : 0, duration: d, ease: "power3.inOut", overwrite: true });
    };
    cards.forEach((card, idx) => {
      const trigger = card.querySelector("[data-blok-expand-trigger]");
      const panel = card.querySelector("[data-blok-expand-panel]");
      if (!trigger || !panel) return;
      gsap.set(panel, { overflow: "hidden" });
      set(card, idx === 0, false);
      const toggle = () => {
        const open = trigger.getAttribute("aria-expanded") !== "true";
        if (open) cards.forEach((other) => other !== card && set(other, false, true));
        set(card, open, true);
      };
      pressable(trigger, toggle);
    });
  }

  function lightbox(root) {
    const dialog = root.querySelector("[data-blok-lightbox-dialog]");
    const img = root.querySelector("[data-blok-lightbox-image]");
    const caption = root.querySelector("[data-blok-lightbox-caption]");
    const close = root.querySelector("[data-blok-lightbox-close]");
    if (!dialog || !img) return;
    const shut = () => { dialog.hidden = true; };
    const open = (item) => {
      const source = item.querySelector("img");
      if (!source) return;
      img.src = source.currentSrc || source.src;
      img.alt = source.alt;
      if (caption) caption.textContent = item.dataset.blokCaption || source.alt;
      dialog.hidden = false;
      if (!reduced()) gsap.fromTo(dialog, { opacity: 0 }, { opacity: 1, duration: 0.3, overwrite: true });
    };
    root.querySelectorAll("[data-blok-lightbox-item]").forEach((item) => pressable(item, () => open(item)));
    pressable(close, shut);
    dialog.addEventListener("click", (e) => { if (e.target === dialog) shut(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !dialog.hidden) shut(); });
  }

  function guide(root) {
    const T = q(root, "[data-blok-guide-tab]"), P = q(root, "[data-blok-guide-panel]"), H = q(root, "[data-blok-guide-hotspot]");
    if (!T.length) return;
    if (getComputedStyle(root).position === "static") root.style.position = "relative";
    const mode = (root.getAttribute("data-blok-guide") || "curve").toLowerCase();
    let s = root.querySelector("svg[data-blok-guide-line]");
    if (!s) {
      s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      s.setAttribute("data-blok-guide-line", "");
      s.setAttribute("aria-hidden", "true");
      s.style.cssText = "position:absolute;inset:0;width:100%;height:100%;pointer-events:none;overflow:visible;z-index:1";
      const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
      p.setAttribute("fill", "none");
      p.setAttribute("stroke", "currentColor");
      p.setAttribute("stroke-width", mode === "step" ? "2" : "1.5");
      p.setAttribute("stroke-linecap", "round");
      p.setAttribute("stroke-linejoin", "round");
      if (mode === "step") p.setAttribute("stroke-dasharray", "0.1 6");
      s.appendChild(p);
      root.appendChild(s);
    }
    const path = s.querySelector("path");
    const box = (el) => {
      const rootBox = root.getBoundingClientRect(), elBox = el.getBoundingClientRect();
      return {
        l: elBox.left - rootBox.left, r: elBox.right - rootBox.left,
        cx: elBox.left + elBox.width / 2 - rootBox.left, cy: elBox.top + elBox.height / 2 - rootBox.top,
      };
    };
    const dFor = (x0, y0, x1, y1) => {
      const mid = x0 + (x1 - x0) * 0.5;
      if (mode === "elbow") {
        // Orthogonal gutter path: out from the node, down/up the gutter, into the hotspot.
        return `M ${x0} ${y0} L ${mid} ${y0} L ${mid} ${y1} L ${x1} ${y1}`;
      }
      if (mode === "step") {
        // Stepped polyline with a deeper horizontal run — closer to the OG guide drawings.
        const xA = x0 + (x1 - x0) * 0.28;
        const xB = x0 + (x1 - x0) * 0.72;
        const yMid = y0 + (y1 - y0) * 0.5;
        return `M ${x0} ${y0} L ${xA} ${y0} L ${xA} ${yMid} L ${xB} ${yMid} L ${xB} ${y1} L ${x1} ${y1}`;
      }
      return `M ${x0} ${y0} C ${mid} ${y0}, ${mid} ${y1}, ${x1} ${y1}`;
    };
    const show = (i, anim) => {
      T.forEach((t, n) => t.setAttribute("aria-pressed", String(n === i)));
      P.forEach((p, n) => { p.hidden = n !== i; });
      H.forEach((h, n) => {
        const on = n === i;
        h.style.opacity = on ? "1" : ".35";
        if (anim && on && !reduced()) {
          gsap.fromTo(h, { scale: 0.7 }, { scale: 1, duration: 0.35, ease: "back.out(2)", overwrite: true });
        }
      });
      const tab = T[i], hot = H[i] || H[0];
      if (!path || !tab || !hot || !matchMedia("(min-width:992px)").matches) { if (path) path.setAttribute("d", ""); return; }
      const node = tab.querySelector("[data-blok-guide-node]") || tab;
      const a = box(node), b = box(hot);
      // Attach to the side of the node that faces the hotspot so the stroke stays in the gutter.
      const fromLeft = b.cx < a.cx;
      const x0 = fromLeft ? a.l : a.r, y0 = a.cy, x1 = b.cx, y1 = b.cy;
      path.setAttribute("d", dFor(x0, y0, x1, y1));
      if (anim && !reduced()) {
        let len = 240;
        try { len = path.getTotalLength(); } catch {}
        if (mode === "step") {
          gsap.fromTo(path, { opacity: 0, strokeDasharray: "0.1 6", strokeDashoffset: 24 }, {
            opacity: 1, strokeDashoffset: 0, duration: 0.45, ease: "power2.out", overwrite: true,
          });
        } else if (mode === "elbow") {
          gsap.fromTo(path, { strokeDasharray: len, strokeDashoffset: len }, {
            strokeDashoffset: 0, duration: 0.7, ease: "power2.inOut", overwrite: true,
          });
        } else {
          gsap.fromTo(path, { strokeDasharray: len, strokeDashoffset: len }, {
            strokeDashoffset: 0, duration: 0.55, ease: "power3.out", overwrite: true,
          });
        }
      }
    };
    T.forEach((t, i) => pressable(t, () => show(i, true)));
    addEventListener("resize", () => show(Math.max(0, T.findIndex((t) => t.getAttribute("aria-pressed") === "true")), false));
    show(0, false);
  }

  function sheet(root) {
    const d = root.querySelector("[data-blok-sheet-dialog]"), m = root.querySelector("[data-blok-sheet-mount]");
    const I = q(root, "[data-blok-sheet-item]"), P = q(root, "[data-blok-sheet-panel]");
    if (!d || !m || !I.length || !P.length) return;
    P.forEach((p) => { p.hidden = true; });
    let a = -1;
    const park = (i) => { if (i >= 0 && P[i]) { P[i].hidden = true; root.appendChild(P[i]); } };
    const shut = () => { d.hidden = true; park(a); a = -1; document.documentElement.style.overflow = ""; };
    const open = (i) => {
      const p = P[i];
      if (!p) return;
      if (a !== i) park(a);
      a = i;
      m.replaceChildren(p);
      p.hidden = false;
      d.hidden = false;
      document.documentElement.style.overflow = "hidden";
      if (!reduced()) gsap.fromTo(d, { opacity: 0 }, { opacity: 1, duration: 0.35, overwrite: true });
    };
    I.forEach((item, i) => pressable(item, () => open(i)));
    pressable(root.querySelector("[data-blok-sheet-close]"), shut);
    d.addEventListener("click", (e) => { if (e.target === d) shut(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !d.hidden) shut(); });
  }

  function modes(root) {
    const T = q(root, "[data-blok-mode]"), P = q(root, "[data-blok-modes-panel]");
    if (!T.length || !P.length) return;
    const show = (name, anim) => {
      T.forEach((t) => t.setAttribute("aria-pressed", String((t.dataset.blokMode || "") === name)));
      P.forEach((p) => {
        const on = (p.dataset.blokModesPanel || "") === name;
        p.hidden = !on;
        if (on && anim && !reduced()) gsap.fromTo(p, { opacity: 0 }, { opacity: 1, duration: 0.3, overwrite: true });
      });
    };
    T.forEach((t) => pressable(t, () => show(t.dataset.blokMode || "list", true)));
    show((T.find((t) => t.getAttribute("aria-pressed") === "true") || T[0]).dataset.blokMode || "list", false);
  }

  function curve(root) {
    const S = q(root, "[data-blok-slide]");
    if (S.length < 2) return;
    let i = 0;
    const paint = (anim) => S.forEach((slide, n) => {
      let side = ((n - i) % S.length + S.length) % S.length;
      if (side > S.length / 2) side -= S.length;
      const abs = Math.abs(side);
      slide.hidden = false;
      slide.setAttribute("aria-hidden", String(abs > 1));
      // Center stays opaque and on top so side cards never ghost through it.
      // Neighbors stay solid (dimmed with brightness); only far cards drop opacity.
      gsap.to(slide, {
        xPercent: side * 38,
        rotateY: side * -22,
        z: abs ? (abs === 1 ? -60 : -160) : 48,
        opacity: abs > 1 ? 0.42 : 1,
        scale: abs ? (abs === 1 ? 0.88 : 0.78) : 1,
        zIndex: abs === 0 ? 30 : Math.max(1, 18 - abs * 4),
        filter: abs === 0 ? "brightness(1)" : abs === 1 ? "brightness(0.82)" : "brightness(0.65)",
        duration: anim && !reduced() ? 0.55 : 0,
        ease: "power3.out",
        overwrite: true,
        transformPerspective: 1200,
      });
    });
    pressable(root.querySelector("[data-blok-curve-prev]") || root.querySelector("[data-blok-carousel-prev]"), () => { i = (i - 1 + S.length) % S.length; paint(true); });
    pressable(root.querySelector("[data-blok-curve-next]") || root.querySelector("[data-blok-carousel-next]"), () => { i = (i + 1) % S.length; paint(true); });
    paint(false);
  }

  function swap(root) {
    const figure = root.querySelector("[data-blok-swap-figure]");
    const img = figure ? figure.querySelector("img") : null;
    const rows = q(root, "[data-blok-swap-row]");
    const reveal = root.dataset.blokSwap === "reveal";
    const measure = () => {
      if (!figure) return 0;
      const prev = figure.style.height;
      figure.style.height = "";
      const height = figure.offsetHeight;
      figure.style.height = prev;
      return height;
    };
    const paint = (open, animate) => {
      if (!figure) return;
      figure.setAttribute("aria-hidden", String(!open));
      const height = open ? measure() : 0;
      const opacity = open ? 1 : 0;
      if (!animate || reduced()) gsap.set(figure, { height, opacity, overflow: "hidden" });
      else gsap.to(figure, { height, opacity, overflow: "hidden", duration: open ? 0.45 : 0.28, ease: "power3.out", overwrite: true });
    };
    if (reveal && figure) {
      gsap.set(figure, { overflow: "hidden" });
      paint(false, false);
      window.addEventListener("resize", () => {
        if (figure.getAttribute("aria-hidden") === "false") paint(true, false);
      });
      const shut = () => {
        rows.forEach((r) => r.setAttribute("aria-current", "false"));
        paint(false, true);
      };
      root.addEventListener("mouseleave", shut);
      root.addEventListener("focusout", (e) => { if (!root.contains(e.relatedTarget)) shut(); });
      const toggle = root.querySelector("[data-blok-menu-toggle]");
      const panel = root.querySelector("[data-blok-menu-panel]");
      if (toggle && panel) {
        toggle.addEventListener("click", () => {
          requestAnimationFrame(() => {
            if (panel.hidden || getComputedStyle(panel).display === "none") shut();
          });
        });
      }
    }
    rows.forEach((row) => {
      const apply = () => {
        rows.forEach((r) => r.setAttribute("aria-current", String(r === row)));
        fadeSwap(img, row.dataset.blokSrc, row.dataset.blokAlt || "");
        if (reveal) paint(true, true);
      };
      row.addEventListener("mouseenter", apply);
      if (row.tagName === "A") row.addEventListener("focus", apply);
      else pressable(row, apply);
    });
  }

  function meters(root) {
    root.querySelectorAll("[data-blok-meter]").forEach((bar) => {
      const value = Math.max(0, Math.min(100, parseFloat(bar.dataset.blokValue) || 0)) / 100;
      gsap.set(bar, { transformOrigin: "0% 50%" });
      if (reduced() || !ScrollTrigger) { gsap.set(bar, { scaleX: value }); return; }
      gsap.fromTo(bar, { scaleX: 0 }, {
        scaleX: value, duration: 1.1, ease: "power3.out",
        scrollTrigger: { trigger: bar, start: "top 85%" },
      });
    });
  }

  function cycle(root) {
    const current = root.querySelector("[data-blok-cycle-current]");
    const words = q(root, "[data-blok-cycle-word]").map((el) => el.textContent.trim()).filter(Boolean);
    if (!current || words.length < 2 || reduced()) return;
    let i = Math.max(0, words.indexOf(current.textContent.trim()));
    setInterval(() => {
      i = (i + 1) % words.length;
      gsap.to(current, {
        opacity: 0, y: -8, duration: 0.22, overwrite: true,
        onComplete: () => {
          current.textContent = words[i];
          gsap.fromTo(current, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.32, ease: "power3.out", overwrite: true });
        },
      });
    }, 2200);
  }

  function scrub(root) {
    const img = root.querySelector("[data-blok-scrub-main]");
    const thumbs = q(root, "[data-blok-scrub-thumb]");
    const show = (thumb) => {
      const source = thumb.querySelector("img");
      if (!source) return;
      thumbs.forEach((t) => t.setAttribute("aria-current", String(t === thumb)));
      fadeSwap(img, source.currentSrc || source.src, source.alt);
    };
    thumbs.forEach((thumb) => pressable(thumb, () => show(thumb)));
    if (thumbs[0]) thumbs[0].setAttribute("aria-current", "true");
  }

  // Bar menus show their links from the lg breakpoint up. Overlay menus stay closed until opened.
  function menu(root) {
    const toggle = root.querySelector("[data-blok-menu-toggle]");
    const panel = root.querySelector("[data-blok-menu-panel]");
    if (!panel) return;
    const overlay = root.dataset.blokMenu === "overlay";
    const desktop = window.matchMedia("(min-width: 992px)");
    const openLabel = root.querySelector("[data-blok-menu-open]");
    const closeLabel = root.querySelector("[data-blok-menu-close]");
    let open = false;
    const paint = (next, animate) => {
      open = next;
      if (toggle) {
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      }
      panel.setAttribute("aria-hidden", String(!open));
      if (openLabel) openLabel.hidden = open;
      if (closeLabel) closeLabel.hidden = !open;
      if (overlay) document.body.style.overflow = open ? "hidden" : "";
      const links = panel.querySelectorAll("a");
      if (!open) {
        const finish = () => {
          if (open) return;
          panel.hidden = true;
          panel.style.display = "";
        };
        if (animate && overlay && !reduced()) gsap.to(panel, { opacity: 0, duration: 0.2, overwrite: true, onComplete: finish });
        else finish();
        return;
      }
      panel.hidden = false;
      panel.style.display = "flex";
      if (!animate || reduced()) return;
      gsap.fromTo(panel, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power3.out", overwrite: true });
      if (overlay) {
        gsap.fromTo(links, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.06, ease: "power3.out", overwrite: true });
        const first = panel.querySelector("a");
        if (first) first.focus();
      }
    };
    const wantsOpen = () => !overlay && desktop.matches;
    if (toggle) {
      toggle.addEventListener("click", (e) => e.stopPropagation());
      pressable(toggle, () => { if (!wantsOpen()) paint(!open, true); });
    }
    panel.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      if (!wantsOpen()) paint(false, false);
    }));
    document.addEventListener("click", (e) => {
      if (open && !wantsOpen() && !root.contains(e.target)) paint(false, true);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && open && !wantsOpen()) { paint(false, true); if (toggle) toggle.focus(); }
    });
    desktop.addEventListener("change", () => paint(wantsOpen(), false));
    paint(wantsOpen(), false);
  }

  // One panel open per level. A nested drop stays inside its parent.
  // Fine pointers can hover; everyone else clicks, and a nested panel stacks under its trigger.
  function drops(root) {
    const items = q(root, "[data-blok-drop]");
    if (!items.length) return;
    const desktop = window.matchMedia("(min-width: 992px) and (hover: hover) and (pointer: fine)");
    const parentOf = (item) => (item.parentElement ? item.parentElement.closest("[data-blok-drop]") : null);
    const parts = (item) => ({
      trigger: item.querySelector(":scope > [data-blok-drop-trigger]"),
      panel: item.querySelector(":scope > [data-blok-drop-panel]"),
      icon: item.querySelector(":scope > [data-blok-drop-trigger] [data-blok-drop-icon]"),
      mark: item.querySelector(":scope > [data-blok-drop-trigger] [data-blok-drop-mark]"),
      label: item.querySelector(":scope > [data-blok-drop-trigger] [data-blok-drop-label]"),
    });
    const set = (item, open, animate) => {
      const { trigger, panel, icon, mark, label } = parts(item);
      if (!trigger || !panel) return;
      trigger.setAttribute("aria-expanded", String(open));
      panel.setAttribute("aria-hidden", String(!open));
      const dur = !animate || reduced() ? 0 : 0.2;
      if (icon) gsap.to(icon, { rotate: open ? 45 : 0, duration: dur, overwrite: true });
      if (mark) gsap.to(mark, { opacity: open ? 1 : 0, duration: dur, overwrite: true });
      if (label) {
        const openColor = getComputedStyle(root).getPropertyValue("--blok-surface").trim() || "#f4f1ea";
        const shutColor = getComputedStyle(root).getPropertyValue("--blok-ink").trim() || "#141414";
        gsap.to(label, { color: open ? openColor : shutColor, duration: dur, overwrite: true });
      }
      if (!open) {
        const finish = () => {
          if (trigger.getAttribute("aria-expanded") === "true") return;
          panel.hidden = true;
          panel.style.display = "";
        };
        if (animate && !reduced()) gsap.to(panel, { opacity: 0, y: 6, duration: 0.16, overwrite: true, onComplete: finish });
        else finish();
        return;
      }
      panel.hidden = false;
      panel.style.display = "flex";
      if (animate && !reduced()) gsap.fromTo(panel, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.22, ease: "power3.out", overwrite: true });
    };
    const closeTree = (item, animate) => {
      items.forEach((other) => { if (other !== item && item.contains(other)) set(other, false, animate); });
      set(item, false, animate);
    };
    const closeSiblings = (item, animate) => {
      const parent = parentOf(item);
      items.forEach((other) => { if (other !== item && parentOf(other) === parent) closeTree(other, animate); });
    };
    const openItem = (item, animate) => {
      closeSiblings(item, animate);
      set(item, true, animate);
    };
    const deepest = () => items.find((item) => {
      const trigger = parts(item).trigger;
      if (!trigger || trigger.getAttribute("aria-expanded") !== "true") return false;
      return !items.some((other) => other !== item && item.contains(other) && parts(other).trigger?.getAttribute("aria-expanded") === "true");
    });
    items.forEach((item) => {
      const { trigger } = parts(item);
      if (!trigger) return;
      trigger.setAttribute("aria-haspopup", "true");
      trigger.addEventListener("click", (e) => e.stopPropagation());
      pressable(trigger, () => {
        if (trigger.getAttribute("aria-expanded") === "true") { closeTree(item, true); return; }
        openItem(item, true);
      });
      item.addEventListener("mouseenter", () => { if (desktop.matches) openItem(item, true); });
      item.addEventListener("mouseleave", () => { if (desktop.matches) closeTree(item, true); });
      set(item, false, false);
    });
    document.addEventListener("click", () => items.forEach((item) => { if (!parentOf(item)) closeTree(item, true); }));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const item = deepest();
        if (!item) return;
        const { trigger } = parts(item);
        closeTree(item, true);
        if (trigger) trigger.focus();
        return;
      }
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const trigger = e.target.closest && e.target.closest("[data-blok-drop-trigger]");
      if (!trigger || !root.contains(trigger)) return;
      const item = trigger.parentElement;
      if (!item || !items.includes(item)) return;
      if (e.key === "ArrowRight") {
        const nested = items.find((other) => other !== item && item.contains(other));
        if (!nested) return;
        e.preventDefault();
        if (trigger.getAttribute("aria-expanded") !== "true") openItem(item, true);
        openItem(nested, true);
        parts(nested).trigger?.focus();
        return;
      }
      const parent = parentOf(item);
      if (!parent) return;
      e.preventDefault();
      closeTree(item, true);
      parts(parent).trigger?.focus();
    });
  }

  // The card under the pointer shows its media. The first card starts open.
  function peek(root) {
    const cards = q(root, "[data-blok-peek-card]");
    if (!cards.length) return;
    const paint = (active, animate) => {
      cards.forEach((card) => {
        const media = card.querySelector("[data-blok-peek-media]");
        const on = card === active;
        card.setAttribute("aria-current", String(on));
        if (!media) return;
        media.setAttribute("aria-hidden", String(!on));
        gsap.to(media, { opacity: on ? 1 : 0, duration: !animate || reduced() ? 0 : 0.35, overwrite: true });
      });
    };
    cards.forEach((card) => {
      if (!card.hasAttribute("tabindex")) card.tabIndex = 0;
      card.addEventListener("mouseenter", () => paint(card, true));
      card.addEventListener("focusin", () => paint(card, true));
    });
    paint(cards[0], false);
  }

  // One card on a phone, several with a peek on a wide screen. Previous, next, and a short swipe.
  /* saas:start */
  function range(el) {
    const fill = el.querySelector("[data-blok-range-fill]");
    const thumb = el.querySelector("[data-blok-range-thumb]");
    const min = +el.dataset.min || 0;
    const max = +el.dataset.max || 100;
    let value = +el.dataset.value || min;
    const read = el.parentElement && el.parentElement.querySelector("[data-blok-range-readout]");
    const paint = () => {
      const pct = max === min ? 0 : ((value - min) / (max - min)) * 100;
      if (fill) fill.style.width = pct + "%";
      if (thumb) thumb.style.left = pct + "%";
      if (read) read.textContent = read.textContent.replace(/-?\d+/, String(value));
      el.setAttribute("aria-valuenow", String(value));
      el.dispatchEvent(new CustomEvent("blok-range", { bubbles: true, detail: value }));
    };
    const from = (e) => {
      const box = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (e.clientX - box.left) / (box.width || 1)));
      value = Math.round(min + p * (max - min));
      paint();
    };
    el.addEventListener("pointerdown", (e) => { el.setPointerCapture(e.pointerId); from(e); });
    el.addEventListener("pointermove", (e) => { if (el.hasPointerCapture(e.pointerId)) from(e); });
  }

  function step(group) {
    const out = group.querySelector("[data-blok-step-value]");
    if (!out) return;
    let n = parseInt(out.textContent, 10) || 0;
    const min = +(group.dataset.min || 0);
    const max = +(group.dataset.max || 99);
    const delta = +(group.dataset.step || 1);
    const set = (dir) => {
      n = Math.min(max, Math.max(min, n + dir * delta));
      out.textContent = String(n);
      group.dispatchEvent(new CustomEvent("blok-step", { bubbles: true }));
    };
    pressable(group.querySelector("[data-blok-step-dec]"), () => set(-1));
    pressable(group.querySelector("[data-blok-step-inc]"), () => set(1));
  }

  function choices(group) {
    const opts = q(group, "[data-blok-choice]");
    if (opts.length < 2) return;
    const selected = (el) => ["aria-checked", "aria-pressed", "aria-selected"].some((name) => el.getAttribute(name) === "true") || (el.getAttribute("aria-current") && el.getAttribute("aria-current") !== "false");
    const on = opts.find(selected) || opts[0];
    const off = opts.find((el) => el !== on) || on;
    const onSnap = shot(on);
    const offSnap = shot(off);
    const mark = /^\s*✓/.test(on.textContent || "");
    const multi = group.hasAttribute("data-blok-multi");
    const paint = (el, active) => {
      Object.assign(el.style, active ? onSnap : offSnap);
      el.setAttribute("aria-checked", String(active));
      el.setAttribute("aria-pressed", String(active));
      if (!mark || el.children.length) return;
      const bare = (el.textContent || "").replace(/^✓\s*/, "");
      el.textContent = active ? "✓ " + bare : bare;
    };
    opts.forEach((el) => el.addEventListener("click", () => {
      if (multi) paint(el, el.getAttribute("aria-pressed") !== "true");
      else opts.forEach((opt) => paint(opt, opt === el));
      group.dispatchEvent(new CustomEvent("blok-choice", { bubbles: true }));
    }));
  }

  function panels(root) {
    const items = q(root, "[data-blok-panel]");
    if (items.length < 2) return;
    let index = Math.max(0, items.findIndex((el) => el.style.display !== "none"));
    const triggers = q(root, "[data-blok-panel-go]");
    const count = root.querySelector("[data-blok-panel-count]");
    const show = (n) => {
      index = (n + items.length) % items.length;
      items.forEach((el, i) => { el.style.display = i === index ? (el.dataset.display || "") : "none"; });
      if (count) {
        const sample = (count.dataset.fmt || count.textContent).split("/");
        count.dataset.fmt = count.dataset.fmt || count.textContent;
        const width = (part) => (sample[part] || "").trim().length || 1;
        count.textContent = String(index + 1).padStart(width(0), "0") + " / " + String(items.length).padStart(width(1), "0");
      }
      triggers.forEach((el, i) => {
        const on = i === index;
        el.setAttribute("aria-selected", String(on));
        el.setAttribute("aria-current", String(on));
      });
    };
    triggers.forEach((el, i) => el.addEventListener("click", () => show(i)));
    const prev = root.querySelector("[data-blok-panel-prev]");
    const next = root.querySelector("[data-blok-panel-next]");
    if (prev) prev.addEventListener("click", () => show(index - 1));
    if (next) next.addEventListener("click", () => show(index + 1));
    show(index);
  }

  function plan(root) {
    const total = root.querySelector("[data-blok-sum]");
    if (!total) return;
    const calc = () => {
      const tiers = q(root, "[data-base]");
      const tier = tiers.find((el) => el.getAttribute("aria-checked") === "true") || tiers[0];
      const base = +(tier && tier.dataset.base || 0);
      const seat = +(tier && tier.dataset.seat || 0);
      let crew = 0;
      let office = 0;
      let extra = 0;
      q(root, "[data-blok-step]").forEach((group) => {
        const n = parseInt(group.querySelector("[data-blok-step-value]")?.textContent || "0", 10) || 0;
        if (group.dataset.kind === "office") office = n;
        else crew = n;
      });
      q(root, "[data-extra]").forEach((el) => { if (el.getAttribute("aria-pressed") === "true") extra += +el.dataset.extra || 0; });
      total.textContent = "$" + (base + crew * seat + office * 10 + extra);
      const hint = root.querySelector("[data-blok-seat-hint]");
      if (hint) hint.textContent = "$" + seat + " each on this plan";
    };
    root.addEventListener("blok-step", calc);
    root.addEventListener("blok-choice", calc);
  }
  function switches(root) {
    const cells = q(root, "[data-blok-switch]");
    const status = root.querySelector("[role=status]");
    const reset = root.querySelector("[data-blok-reset]");
    const zero = status ? status.textContent : "";
    const paint = (el) => {
      const on = el.getAttribute("aria-checked") === "true";
      const flipped = String(on) !== el.dataset.default;
      el.textContent = on ? (el.dataset.onMark || "✓") : (el.dataset.offMark || "—");
      el.style.backgroundColor = on ? el.dataset.onBg : el.dataset.offBg;
      el.style.color = on ? el.dataset.onFg : el.dataset.offFg;
      const border = flipped ? el.dataset.flipBorder : (on ? el.dataset.onBorder : el.dataset.offBorder);
      el.style.borderTopColor = border;
      el.style.borderRightColor = border;
      el.style.borderBottomColor = border;
      el.style.borderLeftColor = border;
      if (el.parentElement && el.dataset.flipCell) el.parentElement.style.backgroundColor = flipped ? el.dataset.flipCell : "transparent";
    };
    const recount = () => {
      const n = cells.filter((el) => String(el.getAttribute("aria-checked") === "true") !== el.dataset.default).length;
      if (status) status.textContent = n === 0 ? zero : n + (n === 1 ? " change" : " changes") + " from the defaults.";
      if (reset) reset.style.display = n ? (reset.dataset.display || "inline-flex") : "none";
    };
    const toggle = (el) => {
      el.setAttribute("aria-checked", String(el.getAttribute("aria-checked") !== "true"));
      paint(el);
      recount();
    };
    cells.forEach((el) => {
      el.addEventListener("click", () => toggle(el));
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(el); }
      });
    });
    if (reset) {
      const shown = getComputedStyle(reset).display;
      reset.dataset.display = shown === "none" ? "inline-flex" : shown;
      reset.addEventListener("click", () => {
        cells.forEach((el) => { el.setAttribute("aria-checked", el.dataset.default); paint(el); });
        recount();
      });
    }
    recount();
  }

  /* saas:end */

  function slider(root) {
    const track = root.querySelector("[data-blok-slider-track]");
    const prev = root.querySelector("[data-blok-slider-prev]");
    const next = root.querySelector("[data-blok-slider-next]");
    const count = root.querySelector("[data-blok-slider-count]");
    const dots = q(root, "[data-blok-slider-dot]");
    const indexMode = root.hasAttribute("data-blok-slider-index");
    if (!track) return;
    const cards = () => q(track, "[data-blok-slider-card]");
    const view = track.parentElement || root;
    let index = 0;
    const gap = () => {
      const styles = getComputedStyle(track);
      const value = parseFloat(styles.columnGap || styles.gap || "0");
      return Number.isFinite(value) ? value : 0;
    };
    const step = () => {
      const card = cards()[0];
      if (!card) return 0;
      return card.getBoundingClientRect().width + gap();
    };
    const maxIndex = () => {
      if (indexMode) return Math.max(0, cards().length - 1);
      const amount = step();
      if (!amount) return 0;
      const visible = Math.max(1, Math.floor((view.clientWidth + gap()) / amount));
      return Math.max(0, cards().length - visible);
    };
    const paint = (animate) => {
      const limit = maxIndex();
      index = Math.max(0, Math.min(index, limit));
      const x = -(index * step());
      if (!animate || reduced()) gsap.set(track, { x });
      else gsap.to(track, { x, duration: 0.55, ease: "power3.out", overwrite: true });
      if (prev) {
        const off = index <= 0;
        prev.setAttribute("aria-disabled", String(off));
        gsap.set(prev, { opacity: off ? 0.35 : 1 });
      }
      if (next) {
        const off = index >= limit;
        next.setAttribute("aria-disabled", String(off));
        gsap.set(next, { opacity: off ? 0.35 : 1 });
      }
      if (count) {
        const total = cards().length;
        count.textContent = String(index + 1).padStart(2, "0") + " / " + String(total).padStart(2, "0");
      }
      dots.forEach((dot, i) => {
        const on = i === index;
        dot.setAttribute("aria-selected", String(on));
        if (dot.dataset.wOn) dot.style.width = on ? dot.dataset.wOn : dot.dataset.wOff;
        if (dot.dataset.bgOn) dot.style.backgroundColor = on ? dot.dataset.bgOn : dot.dataset.bgOff;
      });
      if (indexMode) cards().forEach((card, i) => gsap.set(card, { opacity: i < index ? 0.25 : 1 }));
    };
    const go = (dir) => { index += dir; paint(true); };
    pressable(prev, () => { if (index > 0) go(-1); });
    pressable(next, () => { if (index < maxIndex()) go(1); });
    dots.forEach((dot, i) => dot.addEventListener("click", () => { index = Math.min(i, maxIndex()); paint(true); }));
    if (indexMode) {
      root.tabIndex = 0;
      root.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight" && index < maxIndex()) go(1);
        else if (e.key === "ArrowLeft" && index > 0) go(-1);
      });
    }
    let startX = 0;
    let dragging = false;
    track.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      dragging = true;
      startX = e.clientX;
    });
    const end = (e) => {
      if (!dragging) return;
      dragging = false;
      const dx = e.clientX - startX;
      if (Math.abs(dx) < (indexMode ? 40 : 48)) return;
      if (dx < 0 && index < maxIndex()) go(1);
      else if (dx > 0 && index > 0) go(-1);
    };
    track.addEventListener("pointerup", end);
    track.addEventListener("pointercancel", () => { dragging = false; });
    window.addEventListener("resize", () => paint(false));
    paint(false);
  }

  // From the lg breakpoint, odd items sit on the left of a center line and even items on the right.
  function sides(list) {
    const items = q(list, "[data-blok-side]");
    const desktop = window.matchMedia("(min-width: 992px)");
    const apply = () => {
      items.forEach((item, i) => {
        const dot = item.querySelector("[data-blok-side-dot]");
        const left = i % 2 === 0;
        if (!desktop.matches) {
          item.style.width = "";
          item.style.marginLeft = "";
          item.style.marginRight = "";
          if (dot) { dot.style.left = ""; dot.style.right = ""; }
          return;
        }
        item.style.width = "calc(50% - 2.5rem)";
        item.style.marginLeft = left ? "0" : "auto";
        item.style.marginRight = left ? "auto" : "0";
        if (dot) {
          dot.style.left = left ? "auto" : "-3rem";
          dot.style.right = left ? "-3rem" : "auto";
        }
      });
    };
    apply();
    desktop.addEventListener("change", apply);
  }

  const mq = window.matchMedia("(min-width: 992px)");
  const wide = () => mq.matches;

  /* paste-omit:start */
  // Desktop: scroll pulls two copies of one word apart. Reduced motion stacks the word over the photo.
  function openWord(r) {
    const stage = r.querySelector("[data-blok-open-stage]") || r;
    const halves = q(r, "[data-blok-open-half]");
    const words = halves.map((el) => el.querySelector("[data-blok-open-word]"));
    if (halves.length < 2) return;
    const media = [...stage.children].find((el) => !el.hasAttribute("data-blok-open-half"));
    const fit = () => words.forEach((el) => {
      if (!el) return;
      if (!wide()) return (el.style.fontSize = "");
      const width = stage.clientWidth;
      el.style.fontSize = "100px";
      if (!el.scrollWidth || !width) return;
      el.style.fontSize = (width / el.scrollWidth) * 100 + "px";
      const drawn = el.getBoundingClientRect().width;
      if (drawn) el.style.fontSize = (parseFloat(el.style.fontSize) * width / drawn) + "px";
    });
    if (reduced()) {
      if (!wide()) return;
      gsap.set(halves, { clearProps: "transform" });
      Object.assign(r.style, { height: "auto", minHeight: "0", overflow: "visible" });
      Object.assign(stage.style, { height: "auto", overflow: "visible" });
      halves[1].style.display = "none";
      Object.assign(halves[0].style, { position: "relative", width: "100%", overflow: "visible", inset: "auto", padding: "3rem 4vw 1rem" });
      if (words[0]) Object.assign(words[0].style, { position: "relative", fontSize: "4.5rem", transform: "none", whiteSpace: "normal", inset: "auto" });
      if (media) Object.assign(media.style, { position: "relative", width: "100%", height: "auto", inset: "auto" });
      return;
    }
    fit();
    window.addEventListener("resize", fit);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
    if (!ScrollTrigger) return;
    gsap.matchMedia().add("(min-width: 992px)", () => {
      fit();
      const tl = gsap.timeline({ scrollTrigger: { trigger: r, start: "top top", end: "+=90%", pin: true, scrub: true } });
      tl.to(halves[0], { xPercent: -100, ease: "none" }, 0).to(halves[1], { xPercent: 100, ease: "none" }, 0);
      return () => tl.scrollTrigger.kill();
    });
  }

  // Pinned wipe on a wide screen. Triggers, when present, also jump to a still.
  function steps(r) {
    const stills = q(r, "[data-blok-steps-still]"), triggers = q(r, "[data-blok-steps-trigger]"), n = stills.length;
    if (!n) return;
    let index = -1, scroller = null;
    const paint = (pos) => {
      const at = Math.min(n - 1, Math.max(0, pos)), base = at | 0, active = Math.round(at);
      stills.forEach((el, i) => {
        el.style.zIndex = i + 1;
        el.style.clipPath = "inset(" + (i <= base ? 0 : i === base + 1 ? (1 - (at - base)) * 100 : 100) + "% 0 0 0)";
      });
      if (active === index) return;
      index = active;
      triggers.forEach((el, i) => { el.setAttribute("aria-pressed", i === active); el.style.opacity = i === active ? 1 : 0.45; });
    };
    const phone = () => (triggers.length ? paint(0) : stills.forEach((el) => { el.style.clipPath = ""; }));
    triggers.forEach((el, i) => pressable(el, () => {
      if (scroller && wide() && !reduced()) window.scrollTo({ top: scroller.start + (scroller.end - scroller.start) * i / Math.max(1, n - 1), behavior: "smooth" });
      else paint(i);
    }));
    if (reduced() || !ScrollTrigger) return phone();
    const mm = gsap.matchMedia();
    mm.add("(min-width: 992px)", () => {
      paint(0);
      scroller = ScrollTrigger.create({
        trigger: r, start: "top top", pin: true, scrub: true,
        end: () => "+=" + Math.max(1, n - 1) * window.innerHeight * 0.85,
        onUpdate: (self) => paint(self.progress * (n - 1)),
      });
      return () => { scroller.kill(); scroller = null; phone(); };
    });
    mm.add("(max-width: 991px)", phone);
  }

  // One column opens. Hover or focus on a wide screen; click everywhere.
  function columns(r) {
    const items = q(r, "[data-blok-columns-item]");
    if (!items.length) return;
    let active = 0;
    const paint = (animate) => {
      const dur = reduced() || !animate ? 0 : 0.45;
      items.forEach((item, i) => {
        const on = i === active, media = item.querySelector("[data-blok-columns-media]"), label = item.querySelector("[data-blok-columns-label]");
        item.setAttribute("aria-expanded", on);
        if (label) label.style.writingMode = wide() && !on ? "vertical-rl" : "horizontal-tb";
        if (wide()) {
          if (media) media.style.height = "";
          gsap.to(item, { flexGrow: on ? 5 : 1, duration: dur, overwrite: true });
          if (media) gsap.to(media, { opacity: on ? 1 : 0, duration: dur, overwrite: true });
        } else {
          item.style.flexGrow = "";
          if (media) gsap.to(media, { height: on ? "auto" : 0, opacity: on ? 1 : 0, duration: dur, overwrite: true });
        }
      });
    };
    items.forEach((item, i) => {
      const open = () => { active = i; paint(1); };
      pressable(item, open);
      item.onmouseenter = () => wide() && open();
      item.onfocusin = open;
    });
    paint(0);
    mq.addEventListener("change", () => paint(0));
  }

  // Click or a short horizontal swipe sends the top card to the back.
  function deck(r) {
    const cards = q(r, "[data-blok-deck-card]");
    if (cards.length < 2) return;
    let top = 0, x0 = 0, y0 = 0, ignore = false;
    const paint = (animate) => {
      const dur = reduced() || !animate ? 0 : 0.45;
      cards.forEach((card, i) => {
        const order = (i - top + cards.length) % cards.length;
        gsap.to(card, { zIndex: cards.length - order, y: order * 14, scale: 1 - order * 0.045, opacity: order > 3 ? 0 : 1, duration: dur, overwrite: true });
      });
    };
    const go = (dir) => { top = (top + dir + cards.length) % cards.length; paint(1); };
    cards.forEach((card) => pressable(card, () => (ignore ? (ignore = false) : go(1))));
    r.style.touchAction = "pan-y";
    r.onpointerdown = (e) => { x0 = e.clientX; y0 = e.clientY; };
    r.onpointerup = (e) => {
      const dx = e.clientX - x0;
      if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(e.clientY - y0)) return;
      ignore = true; go(dx < 0 ? 1 : -1); setTimeout(() => { ignore = false; });
    };
    paint(0);
  }

  // Drag a circle to reveal the second photograph. Arrow keys move it.
  function lens(r) {
    const reveal = r.querySelector("[data-blok-lens-reveal]");
    if (!reveal) return;
    let x = 50, y = 46, drag = false;
    const apply = () => { reveal.style.clipPath = "circle(88px at " + x + "% " + y + "%)"; };
    const at = (e) => {
      const b = r.getBoundingClientRect();
      x = Math.min(100, Math.max(0, (e.clientX - b.left) / b.width * 100));
      y = Math.min(100, Math.max(0, (e.clientY - b.top) / b.height * 100));
      apply();
    };
    r.onpointerdown = (e) => { drag = true; r.setPointerCapture(e.pointerId); at(e); };
    r.onpointermove = (e) => drag && at(e);
    r.onpointerup = r.onpointercancel = () => { drag = false; };
    r.style.touchAction = "none";
    r.tabIndex = 0;
    r.setAttribute("role", "application");
    r.setAttribute("aria-label", "Drag to reveal the second photograph");
    r.onkeydown = (e) => {
      const step = e.shiftKey ? 8 : 4, key = e.key;
      if (key === "ArrowLeft") x = Math.max(0, x - step);
      else if (key === "ArrowRight") x = Math.min(100, x + step);
      else if (key === "ArrowUp") y = Math.max(0, y - step);
      else if (key === "ArrowDown") y = Math.min(100, y + step);
      else return;
      e.preventDefault();
      apply();
    };
    apply();
  }

  function flipCard(r) {
    const front = r.querySelector("[data-blok-flip-front]"), back = r.querySelector("[data-blok-flip-back]");
    let on = false;
    const paint = (animate) => {
      if (front) front.setAttribute("aria-hidden", on);
      if (back) back.setAttribute("aria-hidden", !on);
      r.setAttribute("aria-pressed", on);
      gsap.to(r, { rotateY: on ? 180 : 0, duration: animate && !reduced() ? 0.6 : 0, overwrite: true });
    };
    gsap.set(r, { transformPerspective: 1000, transformStyle: "preserve-3d" });
    paint(0);
    pressable(r, () => { on = !on; paint(1); });
  }

  function readLines(r) {
    const lines = q(r, "[data-blok-read-line]");
    if (!lines.length || reduced()) return gsap.set(lines, { opacity: 1 });
    const dim = () => gsap.to(lines, { opacity: 0.28, duration: 0.25, overwrite: true });
    const focus = (line) => { dim(); gsap.to(line, { opacity: 1, duration: 0.25, overwrite: true }); };
    lines.forEach((line) => { line.tabIndex = 0; line.onmouseenter = line.onfocusin = line.onpointerdown = () => focus(line); });
    r.onmouseleave = dim;
    dim();
  }

  // Each card leans toward the pointer. Reduced motion and coarse pointers stay flat.
  function tilt(root) {
    const cards = q(root, "[data-blok-tilt-card]");
    if (!cards.length || reduced() || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const lean = (card, x, y) => gsap.to(card, { rotateY: x, rotateX: y, duration: reduced() ? 0 : 0.45, ease: "power3.out", overwrite: "auto" });
    cards.forEach((card) => {
      gsap.set(card, { transformPerspective: 800, transformStyle: "preserve-3d" });
      card.addEventListener("pointermove", (e) => {
        const box = card.getBoundingClientRect();
        const px = (e.clientX - box.left) / box.width - 0.5;
        const py = (e.clientY - box.top) / box.height - 0.5;
        lean(card, px * 10, py * -8);
      });
      card.addEventListener("pointerleave", () => lean(card, 0, 0));
    });
  }

  // The hovered or focused tile widens. Below the lg breakpoint the row stacks and stays still.
  function grow(root) {
    const tiles = q(root, "[data-blok-grow-tile]");
    if (!tiles.length) return;
    const paint = (active, animate) => {
      if (!wide()) {
        gsap.set(tiles, { clearProps: "flexGrow" });
        return;
      }
      const dur = reduced() || !animate ? 0 : 0.45;
      tiles.forEach((tile) => {
        const on = active && tile === active;
        gsap.to(tile, { flexGrow: on ? 2.6 : active ? 0.72 : 1, duration: dur, overwrite: true });
      });
    };
    tiles.forEach((tile) => {
      if (!tile.hasAttribute("tabindex")) tile.tabIndex = 0;
      tile.addEventListener("mouseenter", () => paint(tile, true));
      tile.addEventListener("focusin", () => paint(tile, true));
    });
    root.addEventListener("mouseleave", () => paint(null, true));
    root.addEventListener("focusout", (e) => { if (!root.contains(e.relatedTarget)) paint(null, true); });
    paint(null, false);
    mq.addEventListener("change", () => paint(null, false));
  }
  /* paste-omit:end */

  function init(root) {
    const scope = root || document;
    const all = (sel) => {
      const found = q(scope, sel);
      if (scope.matches && scope.matches(sel)) found.unshift(scope);
      return found;
    };
    all("[data-blok-marquee]").forEach((el) => once(el, "Marquee") && marquee(el));
    all("[data-blok-split]").forEach((el) => once(el, "Split") && split(el));
    all("[data-blok-scramble]").forEach((el) => once(el, "Scramble") && scramble(el));
    all("[data-blok-depth]").forEach((el) => once(el, "Depth") && depth(el));
    all("[data-blok-pointer]").forEach((el) => once(el, "Pointer") && pointer(el));
    all('[data-blok-scroll="zoom"]').forEach((el) => once(el, "Zoom") && zoom(el));
    all("[data-blok-expand-media]").forEach((el) => once(el, "ExpandMedia") && expandMedia(el));
    all("[data-blok-count]").forEach((el) => once(el, "Count") && count(el));
    all("[data-blok-enter]").forEach((el) => once(el, "Enter") && enter(el));
    all('[data-blok-scroll="parallax"]').forEach((el) => once(el, "Parallax") && parallax(el));
    all("[data-blok-hover-reveal]").forEach((el) => once(el, "Hover") && hoverReveal(el));
    all('[data-blok-reveal="clip"]').forEach((el) => once(el, "Clip") && clipReveal(el));
    all("[data-blok-trail]").forEach((el) => once(el, "Trail") && trail(el));
    all("[data-blok-stack]").forEach((el) => once(el, "Stack") && stack(el));
    all("[data-blok-hscroll]").forEach((el) => once(el, "Hscroll") && hscroll(el));
    all("[data-blok-accordion]").forEach((el) => once(el, "Accordion") && accordion(el));
    all("[data-blok-billing]").forEach((el) => once(el, "Billing") && billing(el));
    all("[data-blok-compare]").forEach((el) => once(el, "Compare") && compare(el));
    all("[data-blok-progress]").forEach((el) => once(el, "Progress") && progress(el));
    all("[data-blok-fit]").forEach((el) => once(el, "Fit") && fit(el));
    all("[data-blok-tabs]").forEach((el) => once(el, "Tabs") && tabs(el));
    all("[data-blok-carousel]").forEach((el) => once(el, "Carousel") && carousel(el));
    all("[data-blok-filter]").forEach((el) => once(el, "Filter") && filterGrid(el));
    all("[data-blok-spotlight]").forEach((el) => once(el, "Spotlight") && spotlight(el));
    all("[data-blok-expand]").forEach((el) => once(el, "Expand") && expand(el));
    all("[data-blok-lightbox]").forEach((el) => once(el, "Lightbox") && lightbox(el));
    all("[data-blok-guide]").forEach((el) => once(el, "Guide") && guide(el));
    all("[data-blok-sheet]").forEach((el) => once(el, "Sheet") && sheet(el));
    all("[data-blok-modes]").forEach((el) => once(el, "Modes") && modes(el));
    all("[data-blok-curve]").forEach((el) => once(el, "Curve") && curve(el));
    all("[data-blok-swap]").forEach((el) => once(el, "Swap") && swap(el));
    all("[data-blok-meters]").forEach((el) => once(el, "Meters") && meters(el));
    all("[data-blok-cycle]").forEach((el) => once(el, "Cycle") && cycle(el));
    all("[data-blok-scrub]").forEach((el) => once(el, "Scrub") && scrub(el));
    all("[data-blok-menu]").forEach((el) => once(el, "Menu") && menu(el));
    all("[data-blok-drops]").forEach((el) => once(el, "Drops") && drops(el));
    all("[data-blok-peek]").forEach((el) => once(el, "Peek") && peek(el));
    /* saas:start */
    all("[data-blok-range]").forEach((el) => once(el, "Range") && range(el));
    all("[data-blok-step]").forEach((el) => once(el, "Step") && step(el));
    all("[data-blok-choices]").forEach((el) => once(el, "Choices") && choices(el));
    all("[data-blok-panels]").forEach((el) => once(el, "Panels") && panels(el));
    all("[data-blok-plan]").forEach((el) => once(el, "Plan") && plan(el));
    all("[data-blok-switches]").forEach((el) => once(el, "Switches") && switches(el));
    /* saas:end */
    all("[data-blok-slider]").forEach((el) => once(el, "Slider") && slider(el));
    all("[data-blok-sides]").forEach((el) => once(el, "Sides") && sides(el));
    /* paste-omit:start */
    [
      ["[data-blok-open]", "Open", openWord],
      ["[data-blok-steps]", "Steps", steps],
      ["[data-blok-columns]", "Columns", columns],
      ["[data-blok-deck]", "Deck", deck],
      ["[data-blok-lens]", "Lens", lens],
      ["[data-blok-flip]", "Flip", flipCard],
      ["[data-blok-read]", "Read", readLines],
      ["[data-blok-tilt]", "Tilt", tilt],
      ["[data-blok-grow]", "Grow", grow],
    ].forEach(([sel, name, fn]) => all(sel).forEach((el) => once(el, name) && fn(el)));
    /* paste-omit:end */
    if (ScrollTrigger) ScrollTrigger.refresh();
  }

  return { init };
}
