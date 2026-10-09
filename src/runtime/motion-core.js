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
//   data-blok-hover-reveal (list) > data-blok-hover-row > data-blok-hover-media   cursor-follow image
//   data-blok-marquee data-blok-direction="reverse"           marquee running the other way
//   data-blok-split="rise"                                     words rise out of a mask on enter
//   data-blok-reveal="clip"                                    image wipes in from the bottom on enter
//   data-blok-trail > data-blok-trail-item (images)           images spawn along the cursor path
//   data-blok-stack > data-blok-stack-card                    sticky cards scale down as the next one lands (stay opaque)
//   data-blok-hscroll > data-blok-hscroll-track               pinned horizontal scroll (desktop)
//   data-blok-accordion > data-blok-acc-item > [-trigger, -panel]   accessible accordion
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
//   data-blok-swap > [-figure, -row] [data-blok-src] [data-blok-alt]
//   data-blok-meters > [data-blok-meter] [data-blok-value]   bars fill on enter
//   data-blok-cycle > [-current, -word]                        rotates words; still under reduced motion
//   data-blok-scrub > [-main, -thumb]                          thumbnail filmstrip
function createBloksetMotion(gsap, ScrollTrigger) {
  if (!gsap || typeof window === "undefined") return { init() {} };
  if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
  const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const once = (el, name) => {
    if (el.dataset["blok" + name + "Ready"]) return false;
    el.dataset["blok" + name + "Ready"] = "1";
    return true;
  };
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
    track.addEventListener("pointerenter", () => gsap.to(tween, { timeScale: 0.25, duration: 0.6 }));
    track.addEventListener("pointerleave", () => gsap.to(tween, { timeScale: 1, duration: 0.6 }));
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

  function split(el) {
    if (el.dataset.blokSplit === "rise") return rise(el);
    const words = el.textContent.trim().split(/\s+/);
    el.setAttribute("aria-label", el.textContent.trim());
    el.innerHTML = words.map((w) => `<span aria-hidden="true" style="display:inline-block;text-indent:0">${w.replace(/&/g, "&amp;").replace(/</g, "&lt;")}</span>`).join(" ");
    if (reduced() || !ScrollTrigger) return;
    gsap.fromTo(
      el.children,
      { opacity: 0.16 },
      { opacity: 1, ease: "none", stagger: 0.08, scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 50%", scrub: 0.6 } }
    );
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

  const esc = (w) => w.replace(/&/g, "&amp;").replace(/</g, "&lt;");

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
    const items = Array.from(area.querySelectorAll("[data-blok-trail-item]"));
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

  // Cards are sticky in CSS; here each one shrinks and dims as the next card covers it.
  function stack(list) {
    if (!ScrollTrigger || reduced()) return;
    const cards = Array.from(list.querySelectorAll("[data-blok-stack-card]"));
    cards.forEach((card, idx) => {
      gsap.set(card, { zIndex: idx + 1, transformOrigin: "50% 0%" });
      const next = cards[idx + 1];
      if (!next) return;
      // Scale only. Opacity would let the card underneath show through the one on top.
      gsap.to(card, {
        scale: 0.94, ease: "none", transformOrigin: "50% 0%",
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
    const items = Array.from(root.querySelectorAll("[data-blok-acc-item]"));
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
      set(item, idx === 0, false);
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
    const labels = Array.from(root.querySelectorAll("[data-blok-billing-label]"));
    const prices = Array.from(root.querySelectorAll("[data-blok-price]"));
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
    const handle = root.querySelector("[data-blok-compare-handle]");
    if (!after || !handle) return;
    let pct = 50;
    handle.setAttribute("role", "slider");
    handle.setAttribute("tabindex", "0");
    handle.setAttribute("aria-valuemin", "0");
    handle.setAttribute("aria-valuemax", "100");
    handle.setAttribute("aria-label", root.dataset.blokCompareLabel || "Before and after comparison");
    const apply = () => {
      after.style.clipPath = `inset(0 0 0 ${pct}%)`;
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
    const triggers = Array.from(root.querySelectorAll("[data-blok-tab]"));
    const panels = Array.from(root.querySelectorAll("[data-blok-tab-panel]"));
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
    const slides = Array.from(root.querySelectorAll("[data-blok-slide]"));
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

  function filterGrid(root) {
    const chips = Array.from(root.querySelectorAll("[data-blok-filter-chip]"));
    const cards = Array.from(root.querySelectorAll("[data-blok-filter-card]"));
    const apply = (group) => {
      chips.forEach((chip) => chip.setAttribute("aria-pressed", String((chip.dataset.blokFilterChip || "all") === group)));
      cards.forEach((card) => { card.hidden = !(group === "all" || card.dataset.blokGroup === group); });
    };
    chips.forEach((chip) => pressable(chip, () => apply(chip.dataset.blokFilterChip || "all")));
    apply("all");
  }

  function spotlight(root) {
    const img = root.querySelector("[data-blok-spotlight-figure] img");
    const rows = Array.from(root.querySelectorAll("[data-blok-spotlight-row]"));
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
    const cards = Array.from(root.querySelectorAll("[data-blok-expand-card]"));
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

  function swap(root) {
    const img = root.querySelector("[data-blok-swap-figure] img");
    const rows = Array.from(root.querySelectorAll("[data-blok-swap-row]"));
    rows.forEach((row) => {
      const apply = () => {
        rows.forEach((r) => r.setAttribute("aria-current", String(r === row)));
        fadeSwap(img, row.dataset.blokSrc, row.dataset.blokAlt || "");
      };
      row.addEventListener("mouseenter", apply);
      pressable(row, apply);
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
    const words = Array.from(root.querySelectorAll("[data-blok-cycle-word]")).map((el) => el.textContent.trim()).filter(Boolean);
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
    const thumbs = Array.from(root.querySelectorAll("[data-blok-scrub-thumb]"));
    const show = (thumb) => {
      const source = thumb.querySelector("img");
      if (!source) return;
      thumbs.forEach((t) => t.setAttribute("aria-current", String(t === thumb)));
      fadeSwap(img, source.currentSrc || source.src, source.alt);
    };
    thumbs.forEach((thumb) => pressable(thumb, () => show(thumb)));
    if (thumbs[0]) thumbs[0].setAttribute("aria-current", "true");
  }

  function init(root) {
    const scope = root || document;
    const all = (sel) => {
      const found = Array.from(scope.querySelectorAll(sel));
      if (scope.matches && scope.matches(sel)) found.unshift(scope);
      return found;
    };
    all("[data-blok-marquee]").forEach((el) => once(el, "Marquee") && marquee(el));
    all("[data-blok-split]").forEach((el) => once(el, "Split") && split(el));
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
    all("[data-blok-swap]").forEach((el) => once(el, "Swap") && swap(el));
    all("[data-blok-meters]").forEach((el) => once(el, "Meters") && meters(el));
    all("[data-blok-cycle]").forEach((el) => once(el, "Cycle") && cycle(el));
    all("[data-blok-scrub]").forEach((el) => once(el, "Scrub") && scrub(el));
    if (ScrollTrigger) ScrollTrigger.refresh();
  }

  return { init };
}
