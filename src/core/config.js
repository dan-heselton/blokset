import { readdirSync, existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { createTokens } from "./tokens.js";
import { bindTokenVariables, variablesFromExport } from "../sync.js";

export const ROOT = resolve(new URL("../..", import.meta.url).pathname);
export const ALL_TARGETS = ["react", "astro", "html", "vanilla", "webflow", "figma"];

const load = async (file) => (await import(pathToFileURL(file).href)).default;

export async function loadConfig(configPath) {
  if (!configPath) {
    const current = join(ROOT, "blokset.config.js");
    // A root *.config.js other than blokset.config.js is the file from before the rename.
    const previous = readdirSync(ROOT).find((name) => name.endsWith(".config.js") && name !== "blokset.config.js");
    if (!existsSync(current) && previous) {
      console.warn(`Rename ${previous} to blokset.config.js`);
      configPath = join(ROOT, previous);
    } else configPath = current;
  }
  const user = existsSync(configPath) ? await load(configPath) : {};
  const config = {
    framework: "client-first",
    targets: ALL_TARGETS,
    tokens: {},
    utilities: {},
    classes: {},
    ...user,
  };
  config.frameworks = [...new Set([config.framework, ...(user.frameworks ?? [])])];
  const webflow = { ...(config.webflow || {}) };
  const configDir = dirname(configPath);
  let variables = {};
  if (typeof webflow.variables === "string") {
    const file = resolve(configDir, webflow.variables);
    if (!existsSync(file)) throw new Error(`Webflow variables not found: ${file}`);
    variables = variablesFromExport(JSON.parse(readFileSync(file, "utf8")));
  }
  if (webflow.snapshot) {
    const file = resolve(configDir, webflow.snapshot);
    if (!existsSync(file)) throw new Error(`Webflow snapshot not found: ${file}`);
    const snapshot = JSON.parse(readFileSync(file, "utf8"));
    webflow.styles = snapshot.styles || {};
    variables = { ...variablesFromExport(snapshot.variables), ...variables };
  }
  webflow.variables = variables;
  config.webflow = webflow;
  config.tokens = bindTokenVariables(config.tokens, variables);
  return config;
}

export async function loadFrameworks() {
  const dir = join(ROOT, "frameworks");
  const out = {};
  for (const f of readdirSync(dir).filter((f) => f.endsWith(".js") && !f.startsWith("_"))) {
    const fw = await load(join(dir, f));
    out[fw.name] = fw;
  }
  return out;
}

export async function loadComponents(ids) {
  const dir = join(ROOT, "components");
  const specs = [];
  for (const f of readdirSync(dir).filter((f) => f.endsWith(".js") && !f.startsWith("_")).sort()) {
    const spec = await load(join(dir, f));
    if (!ids || ids.includes(spec.id)) specs.push(spec);
  }
  // Order like a page: hero first, CTA last, anything new in between.
  const order = ["hero", "logos", "features", "process", "stats", "gallery", "work", "compare", "timeline", "testimonial", "pricing", "faq", "tabs", "carousel", "filter", "team", "posts", "cta", "footer"];
  const rank = (s) => (order.includes(s.category) ? order.indexOf(s.category) : order.length - 1.5);
  return specs.sort((a, b) => rank(a) - rank(b) || a.id.localeCompare(b.id));
}

/** Everything a generator needs for one framework. */
export function createContext(config, framework) {
  return { config, framework, tokens: createTokens(config.tokens) };
}
