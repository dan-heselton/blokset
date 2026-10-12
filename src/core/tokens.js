// Design tokens. Specs reference them as token(name). Projects override them in blokset.config.js,
// either with a new value or by mapping to an existing variable:
// { value: "#111", css: "var(--text)", webflow: "variable-id" }.
// `css` is for code outputs. `webflow` is a destination-site variable id (names are resolved
// to ids when the site snapshot loads).
export const defaultTokens = {
  // Surfaces
  surface: "#f4f1ea",
  "surface-2": "#e8e2d4",
  ink: "#141414",
  "ink-2": "#22211f",
  accent: "#ff5b2e",
  // Text
  "ink-muted": "#5c5a55",
  "ink-soft": "rgba(20, 20, 20, 0.72)",
  "text-inverse": "#ffffff",
  "surface-muted": "rgba(244, 241, 234, 0.62)",
  // Lines & overlays
  line: "rgba(20, 20, 20, 0.14)",
  "line-inverse": "rgba(244, 241, 234, 0.16)",
  overlay: "rgba(0, 0, 0, 0.5)",
  "overlay-subtle": "rgba(0, 0, 0, 0.28)",
  "overlay-strong": "rgba(0, 0, 0, 0.72)",
  "shade-strong": "rgba(20, 20, 20, 0.88)",
  "shade-mid": "rgba(20, 20, 20, 0.35)",
  "shade-clear": "rgba(20, 20, 20, 0)",
  "accent-glow": "rgba(255, 91, 46, 0.25)",
  // Type
  "font-display": "'Inter Tight', system-ui, sans-serif",
  "font-serif": "'Newsreader', Georgia, serif",
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
    entries[name] = typeof v === "string" ? { value: v } : { ...v };
  }
  const get = (name) => {
    if (!entries[name]) throw new Error(`Unknown token "${name}". Define it in src/core/tokens.js or blokset.config.js.`);
    return entries[name];
  };
  return {
    entries,
    /** For CSS outputs: a CSS variable (ours, or the project's mapped one). */
    css: (v) => String(v).replace(TOKEN_RE, (_, n) => get(n).css ?? `var(--blok-${n})`),
    /** For Webflow when the token is not bound to a site variable. */
    literal: (v) => String(v).replace(TOKEN_RE, (_, n) => get(n).value),
    /**
     * Webflow style value. A lone mapped token becomes `{ id }` so styleLess can emit `@var_id`.
     * Tokens inside a longer value (a gradient, a shadow) become `@var_id` in place.
     * Unmapped tokens stay literals.
     */
    webflow: (v) => {
      if (v && typeof v === "object") return v;
      const text = String(v ?? "");
      const only = text.match(/^token\(([\w-]+)\)$/);
      if (only) {
        const token = get(only[1]);
        if (token.webflow) return { id: token.webflow };
        return token.value;
      }
      if (!text.includes("token(")) return text;
      return text.replace(TOKEN_RE, (_, n) => {
        const token = get(n);
        return token.webflow ? `@var_${token.webflow}` : token.value;
      });
    },
    /** :root block for tokens that aren't mapped onto project variables. */
    rootCss: () =>
      `:root {\n${Object.entries(entries)
        .filter(([, t]) => !t.css)
        .map(([n, t]) => `  --blok-${n}: ${t.value};`)
        .join("\n")}\n}\n`,
  };
}
