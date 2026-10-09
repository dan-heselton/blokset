// Design tokens. Specs reference them as token(name). Projects override them in forge.config.js,
// either with a new value or by mapping to an existing CSS variable: { value: "#111", css: "var(--text)" }.
export const defaultTokens = {
  // Surfaces
  surface: "#f4f1ea",
  "surface-2": "#e8e2d4",
  ink: "#141414",
  accent: "#ff5b2e",
  // Text
  "ink-muted": "#5c5a55",
  "text-inverse": "#ffffff",
  "surface-muted": "rgba(244, 241, 234, 0.62)",
  // Lines & overlays
  line: "rgba(20, 20, 20, 0.14)",
  "line-inverse": "rgba(244, 241, 234, 0.16)",
  overlay: "rgba(0, 0, 0, 0.5)",
  // Type
  "font-display": "'Inter Tight', system-ui, sans-serif",
  "font-mono": "ui-monospace, 'SF Mono', Menlo, monospace",
  // Buttons
  "button-bg": "#ffffff",
  "button-fg": "#141414",
  radius: "0.5rem",
  "radius-card": "1rem",
};

const TOKEN_RE = /token\(([\w-]+)\)/g;

export function createTokens(overrides = {}) {
  const entries = {};
  for (const [name, v] of Object.entries({ ...defaultTokens, ...overrides })) {
    entries[name] = typeof v === "string" ? { value: v } : v;
  }
  const get = (name) => {
    if (!entries[name]) throw new Error(`Unknown token "${name}". Define it in src/core/tokens.js or forge.config.js.`);
    return entries[name];
  };
  return {
    entries,
    /** For CSS outputs: a CSS variable (ours, or the project's mapped one). */
    css: (v) => String(v).replace(TOKEN_RE, (_, n) => get(n).css ?? `var(--forge-${n})`),
    /** For Webflow: the literal value. */
    literal: (v) => String(v).replace(TOKEN_RE, (_, n) => get(n).value),
    /** :root block for tokens that aren't mapped onto project variables. */
    rootCss: () =>
      `:root {\n${Object.entries(entries)
        .filter(([, t]) => !t.css)
        .map(([n, t]) => `  --forge-${n}: ${t.value};`)
        .join("\n")}\n}\n`,
  };
}
