// Forge motion runtime core. This file is embedded verbatim into two builds:
//   forge-shared/motion.js         ESM, imports gsap from npm (React, Astro, bundlers)
//   forge-shared/motion.global.js  IIFE, uses window.gsap from a CDN (Webflow, plain HTML, vanilla)
// Keep it free of import/export statements.
//
// Behaviours are opt-in through data attributes, so they work identically on every platform:
//   data-forge-enter="fade-up|fade" [data-forge-delay="0.1"]   entrance when scrolled into view
//   data-forge-scroll="parallax" [data-forge-strength="0.15"]   scroll-linked parallax
//   data-forge-marquee [data-forge-speed="60"]                  infinite horizontal loop (px/s)
//   data-forge-count                                            count up the first number in the text
//   data-forge-split="words"                                    words brighten as you scroll through
//   data-forge-hover-reveal (list) > data-forge-hover-row > data-forge-hover-media   cursor-follow image
function createForgeMotion(gsap, ScrollTrigger) {
  if (!gsap || typeof window === "undefined") return { init() {} };
  if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
  const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const once = (el, name) => {
    if (el.dataset["forge" + name + "Ready"]) return false;
    el.dataset["forge" + name + "Ready"] = "1";
    return true;
  };
  const presets = {
    "fade-up": { from: { opacity: 0, y: 28 }, to: { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" } },
    fade: { from: { opacity: 0 }, to: { opacity: 1, duration: 0.8, ease: "power2.out" } },
  };

  function enter(el) {
    const p = presets[el.dataset.forgeEnter];
    if (!p || reduced()) return;
    const to = { ...p.to, delay: parseFloat(el.dataset.forgeDelay || "0") };
    if (ScrollTrigger) to.scrollTrigger = { trigger: el, start: "top 90%", once: true };
    gsap.fromTo(el, p.from, to);
  }

  function parallax(el) {
    if (!ScrollTrigger || reduced()) return;
    const strength = parseFloat(el.dataset.forgeStrength || "0.15");
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
    const speed = parseFloat(track.dataset.forgeSpeed || "60");
    const distance = track.scrollWidth / 2;
    const tween = gsap.to(track, { x: -distance, duration: distance / speed, ease: "none", repeat: -1 });
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
    list.querySelectorAll("[data-forge-hover-row]").forEach((row) => {
      const media = row.querySelector("[data-forge-hover-media]");
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

  function init(root) {
    const scope = root || document;
    const all = (sel) => {
      const found = Array.from(scope.querySelectorAll(sel));
      if (scope.matches && scope.matches(sel)) found.unshift(scope);
      return found;
    };
    all("[data-forge-marquee]").forEach((el) => once(el, "Marquee") && marquee(el));
    all("[data-forge-split]").forEach((el) => once(el, "Split") && split(el));
    all("[data-forge-count]").forEach((el) => once(el, "Count") && count(el));
    all("[data-forge-enter]").forEach((el) => once(el, "Enter") && enter(el));
    all('[data-forge-scroll="parallax"]').forEach((el) => once(el, "Parallax") && parallax(el));
    all("[data-forge-hover-reveal]").forEach((el) => once(el, "Hover") && hoverReveal(el));
    if (ScrollTrigger) ScrollTrigger.refresh();
  }

  return { init };
}
