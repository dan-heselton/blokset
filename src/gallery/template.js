// The gallery: live previews of every component, with copy buttons for Webflow and code in any
// framework. Chrome classes are prefixed "g-" so they never collide with component classes.
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const jsonForScript = (v) => JSON.stringify(v).replace(/</g, "\\u003c");

export function renderGallery({ specs, config, frameworks, previewCss, previews, outputs, footerCode, dev }) {
  const categories = [...new Set(specs.map((s) => s.category))];
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Component Forge</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  :root {
    --g-bg: #fbfaf7; --g-panel: #ffffff; --g-fg: #141414; --g-muted: #6b6963; --g-line: #e7e3da;
    --g-accent: #141414; --g-accent-fg: #ffffff; --g-code-bg: #141414; --g-code-fg: #ece9e1; --g-chip: #f1eee6;
  }
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) {
      --g-bg: #0f0f0e; --g-panel: #171716; --g-fg: #f1eee6; --g-muted: #9c998f; --g-line: #2a2926;
      --g-accent: #f1eee6; --g-accent-fg: #141414; --g-code-bg: #0b0b0a; --g-code-fg: #e6e2d8; --g-chip: #222120;
    }
  }
  :root[data-theme="dark"] {
    --g-bg: #0f0f0e; --g-panel: #171716; --g-fg: #f1eee6; --g-muted: #9c998f; --g-line: #2a2926;
    --g-accent: #f1eee6; --g-accent-fg: #141414; --g-code-bg: #0b0b0a; --g-code-fg: #e6e2d8; --g-chip: #222120;
  }
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; scroll-padding-top: 72px; }
  body { margin: 0; background: var(--g-bg); color: var(--g-fg); font-family: Inter, system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
  img { max-width: 100%; }
  .g-top { position: sticky; top: 0; z-index: 100; display: flex; align-items: center; gap: 16px; height: 60px; padding: 0 16px;
           background: color-mix(in srgb, var(--g-bg) 88%, transparent); backdrop-filter: blur(12px); border-bottom: 1px solid var(--g-line); }
  .g-logo { display: flex; align-items: center; gap: 10px; font-family: "Inter Tight", sans-serif; font-weight: 700; font-size: 17px; letter-spacing: -0.02em; }
  .g-logo-mark { width: 22px; height: 22px; border-radius: 6px; background: var(--g-fg); position: relative; }
  .g-logo-mark::after { content: ""; position: absolute; inset: 6px; border-radius: 2px; background: #ff5b2e; }
  .g-count:where(*) { font: 500 12px/1 "JetBrains Mono", monospace; color: var(--g-muted); padding: 5px 8px; border: 1px solid var(--g-line); border-radius: 999px; }
  .g-spacer { flex: 1; }
  .g-field { display: flex; align-items: center; gap: 8px; min-width: 0; font-size: 13px; color: var(--g-muted); }
  .g-field-label { display: none; }
  .g-count { display: none; }
  @media (min-width: 560px) { .g-field-label, .g-count { display: inline; } }
  .g-select { max-width: 52vw; font: inherit; font-size: 14px; color: var(--g-fg); background: var(--g-panel); border: 1px solid var(--g-line); border-radius: 8px; padding: 7px 28px 7px 10px; }
  .g-layout { display: grid; grid-template-columns: 1fr; }
  .g-nav { display: none; }
  @media (min-width: 1100px) {
    .g-layout { grid-template-columns: 220px minmax(0, 1fr); }
    .g-nav { display: block; position: sticky; top: 60px; align-self: start; height: calc(100vh - 60px); overflow: auto; padding: 24px 16px; border-right: 1px solid var(--g-line); }
  }
  .g-nav h4 { margin: 18px 0 6px; font: 500 11px/1 "JetBrains Mono", monospace; letter-spacing: .08em; text-transform: uppercase; color: var(--g-muted); }
  .g-nav h4:first-child { margin-top: 0; }
  .g-nav a { display: block; padding: 7px 10px; margin: 0 -10px; border-radius: 6px; color: var(--g-fg); text-decoration: none; font-size: 14px; }
  .g-nav a:hover, .g-nav a:focus-visible { background: var(--g-chip); }
  .g-main { min-width: 0; padding-bottom: 80px; }
  .g-intro { padding: 40px 16px 8px; max-width: 760px; }
  .g-intro h1 { margin: 0 0 10px; font-family: "Inter Tight", sans-serif; font-size: clamp(28px, 4vw, 40px); letter-spacing: -0.03em; line-height: 1.05; }
  .g-intro p { margin: 0; color: var(--g-muted); line-height: 1.6; }
  .g-intro code, .g-help code { font-family: "JetBrains Mono", monospace; font-size: .9em; background: var(--g-chip); padding: 2px 6px; border-radius: 4px; }
  .g-item { margin: 32px 16px 0; border: 1px solid var(--g-line); border-radius: 14px; background: var(--g-panel); overflow: hidden; }
  .g-bar { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; padding: 14px 16px; border-bottom: 1px solid var(--g-line); }
  .g-title { display: flex; flex-wrap: wrap; align-items: baseline; gap: 8px 10px; }
  .g-title h2 { margin: 0; font-family: "Inter Tight", sans-serif; font-size: 17px; letter-spacing: -0.01em; }
  .g-id { font: 500 12px/1 "JetBrains Mono", monospace; color: var(--g-muted); background: var(--g-chip); padding: 4px 7px; border-radius: 5px; }
  .g-desc { width: 100%; margin: 2px 0 0; font-size: 13px; color: var(--g-muted); }
  .g-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
  .g-btn { font: inherit; font-size: 13px; font-weight: 600; padding: 8px 12px; border-radius: 8px; border: 1px solid var(--g-line); background: transparent; color: var(--g-fg); cursor: pointer; }
  .g-btn:hover { background: var(--g-chip); }
  .g-btn:focus-visible, .g-tab:focus-visible, .g-select:focus-visible { outline: 2px solid var(--g-fg); outline-offset: 2px; }
  .g-btn.is-primary { background: var(--g-accent); color: var(--g-accent-fg); border-color: var(--g-accent); }
  .g-btn.is-primary:hover { opacity: .9; }
  .g-status { font-size: 12px; color: var(--g-muted); min-height: 1em; }
  .g-code { display: none; border-bottom: 1px solid var(--g-line); background: var(--g-code-bg); }
  .g-code.is-open { display: block; }
  .g-tabs { display: flex; gap: 4px; padding: 10px 12px 0; overflow-x: auto; }
  .g-tab { font: 500 12px/1 "JetBrains Mono", monospace; padding: 8px 10px; border: 0; border-radius: 6px 6px 0 0; background: transparent; color: #9c998f; cursor: pointer; white-space: nowrap; }
  .g-tab[aria-selected="true"] { background: #232220; color: var(--g-code-fg); }
  .g-code-body { position: relative; }
  .g-code pre { margin: 0; max-height: 420px; overflow: auto; padding: 16px; background: #232220; color: var(--g-code-fg); font: 12.5px/1.6 "JetBrains Mono", monospace; tab-size: 2; }
  .g-copy-code { position: absolute; top: 10px; right: 14px; font: 600 12px/1 Inter, sans-serif; padding: 7px 10px; border-radius: 6px; border: 1px solid #3a3936; background: #141414; color: #ece9e1; cursor: pointer; }
  .g-preview { background: #fff; }
  .g-help { margin: 32px 16px 0; padding: 18px 20px; border: 1px dashed var(--g-line); border-radius: 14px; color: var(--g-muted); font-size: 14px; line-height: 1.6; }
  .g-help h3 { margin: 0 0 6px; color: var(--g-fg); font-size: 15px; }
  .g-toast { position: fixed; left: 50%; bottom: 20px; transform: translate(-50%, 20px); opacity: 0; transition: .25s; z-index: 200;
             background: var(--g-fg); color: var(--g-bg); padding: 10px 14px; border-radius: 10px; font-size: 13px; font-weight: 500; pointer-events: none; }
  .g-toast.is-on { opacity: 1; transform: translate(-50%, 0); }
  @media (min-width: 768px) { .g-intro { padding: 48px 32px 8px; } .g-item, .g-help { margin-left: 32px; margin-right: 32px; } .g-top { padding: 0 24px; } }
</style>
<style>
/* ===== Component styles (${esc(config.framework)}) ===== */
${previewCss}
</style>
</head>
<body>
<header class="g-top">
  <div class="g-logo"><span class="g-logo-mark" aria-hidden="true"></span>Forge</div>
  <span class="g-count">${specs.length} components</span>
  <span class="g-spacer"></span>
  <label class="g-field"><span class="g-field-label">Framework</span>
    <select class="g-select" id="g-framework">
      ${frameworks.map((f) => `<option value="${esc(f.name)}"${f.name === config.framework ? " selected" : ""}>${esc(f.label)}</option>`).join("")}
    </select>
  </label>
</header>
<div class="g-layout">
  <nav class="g-nav" aria-label="Components">
    ${categories.map((c) => `<h4>${esc(c)}</h4>${specs.filter((s) => s.category === c).map((s) => `<a href="#${s.id}">${esc(s.name.split(" / ")[1] || s.name)}</a>`).join("")}`).join("")}
  </nav>
  <main class="g-main">
    <div class="g-intro">
      <h1>Component library</h1>
      <p>Every component is one spec in <code>components/</code>. Pick a framework, then copy it into Webflow or grab the React, Astro, HTML or vanilla JS output. Webflow copy needs a real browser tab (Chrome), not an embedded preview.</p>
    </div>
    ${specs.map((s) => `
    <section class="g-item" id="${s.id}" aria-labelledby="${s.id}-title">
      <div class="g-bar">
        <div class="g-title">
          <h2 id="${s.id}-title">${esc(s.name)}</h2><span class="g-id">${esc(s.id)}</span>
          <p class="g-desc">${esc(s.description)}</p>
        </div>
        <div class="g-actions">
          <span class="g-status" aria-live="polite"></span>
          <button class="g-btn" data-toggle-code="${s.id}" aria-expanded="false">Code</button>
          <button class="g-btn is-primary" data-copy-webflow="${s.id}">Copy to Webflow</button>
        </div>
      </div>
      <div class="g-code" id="${s.id}-code">
        <div class="g-tabs" role="tablist">
          ${["react", "astro", "html", "css", "vanilla"].map((t, i) => `<button class="g-tab" role="tab" aria-selected="${i === 0}" data-tab="${t}" data-id="${s.id}">${{ react: "React", astro: "Astro", html: "HTML", css: "CSS", vanilla: "Vanilla JS" }[t]}</button>`).join("")}
        </div>
        <div class="g-code-body"><pre><code></code></pre><button class="g-copy-code" data-copy-code="${s.id}">Copy</button></div>
      </div>
      <div class="g-preview">
${previews[s.id]}
      </div>
    </section>`).join("\n")}
    <div class="g-help">
      <h3>Motion in Webflow</h3>
      Components with motion use the Forge runtime. Paste this once into Site settings → Custom code → Footer.
      <div style="margin-top:10px"><button class="g-btn" id="g-copy-footer">Copy footer code</button></div>
    </div>
  </main>
</div>
<div class="g-toast" id="g-toast" role="status"></div>
<script type="application/json" id="g-data">${jsonForScript({ outputs, footerCode })}</script>
<script>
(function () {
  var data = JSON.parse(document.getElementById("g-data").textContent);
  var select = document.getElementById("g-framework");
  var toastEl = document.getElementById("g-toast");
  var toastTimer;
  function toast(msg) {
    toastEl.textContent = msg; toastEl.classList.add("is-on");
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { toastEl.classList.remove("is-on"); }, 2200);
  }
  function out(id, target) { return data.outputs[id][select.value][target]; }
  function copyWith(mime, text) {
    var handler = function (e) { e.clipboardData.setData(mime, text); if (mime !== "text/plain") e.clipboardData.setData("text/plain", text); e.preventDefault(); };
    document.addEventListener("copy", handler);
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (e) {}
    document.removeEventListener("copy", handler);
    return ok;
  }
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text).then(function () { return true; }, function () { return copyWith("text/plain", text); });
    return Promise.resolve(copyWith("text/plain", text));
  }
  document.querySelectorAll("[data-copy-webflow]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var ok = copyWith("application/json", out(btn.dataset.copyWebflow, "webflow"));
      var label = select.options[select.selectedIndex].text;
      btn.closest(".g-bar").querySelector(".g-status").textContent = ok ? label + " copied" : "";
      toast(ok ? "Copied (" + label + "). Paste into the Webflow Designer." : "Copy was blocked. Open this page in a normal browser tab.");
    });
  });
  var activeTab = {};
  function renderCode(id) {
    var panel = document.getElementById(id + "-code");
    panel.querySelector("code").textContent = out(id, activeTab[id] || "react");
  }
  document.querySelectorAll("[data-toggle-code]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var id = btn.dataset.toggleCode;
      var panel = document.getElementById(id + "-code");
      var open = panel.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(open));
      if (open) renderCode(id);
    });
  });
  document.querySelectorAll(".g-tab").forEach(function (tab) {
    tab.addEventListener("click", function () {
      var id = tab.dataset.id;
      activeTab[id] = tab.dataset.tab;
      tab.parentElement.querySelectorAll(".g-tab").forEach(function (t) { t.setAttribute("aria-selected", String(t === tab)); });
      renderCode(id);
    });
  });
  document.querySelectorAll("[data-copy-code]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var id = btn.dataset.copyCode;
      copyText(out(id, activeTab[id] || "react")).then(function (ok) { toast(ok ? "Code copied" : "Copy was blocked"); });
    });
  });
  select.addEventListener("change", function () {
    document.querySelectorAll(".g-code.is-open").forEach(function (p) { renderCode(p.id.replace(/-code$/, "")); });
    toast("Copy buttons now use " + select.options[select.selectedIndex].text);
  });
  document.getElementById("g-copy-footer").addEventListener("click", function () {
    copyText(data.footerCode).then(function (ok) { toast(ok ? "Footer code copied" : "Copy was blocked"); });
  });
})();
</script>
<script src="./vendor/gsap.min.js"></script>
<script src="./vendor/ScrollTrigger.min.js"></script>
<script src="./motion.global.js"></script>
${dev ? `<script>new EventSource("/__reload").onmessage = function () { location.reload(); };</script>` : ""}
</body>
</html>
`;
}
