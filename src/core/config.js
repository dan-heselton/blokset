import { readdirSync, existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { createTokens } from "./tokens.js";

export const ROOT = resolve(new URL("../..", import.meta.url).pathname);
export const ALL_TARGETS = ["react", "astro", "html", "vanilla", "webflow"];

const load = async (file) => (await import(pathToFileURL(file).href)).default;

export async function loadConfig(configPath = join(ROOT, "forge.config.js")) {
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
  if (config.webflow?.snapshot) {
    const file = resolve(dirname(configPath), config.webflow.snapshot);
    if (!existsSync(file)) throw new Error(`Webflow snapshot not found: ${file}`);
    const snapshot = JSON.parse(readFileSync(file, "utf8"));
    config.webflow = { ...config.webflow, styles: snapshot.styles || {} };
  }
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
  const order = ["hero", "features", "stats", "work", "testimonial", "cta"];
  const rank = (s) => (order.includes(s.category) ? order.indexOf(s.category) : order.length - 1.5);
  return specs.sort((a, b) => rank(a) - rank(b) || a.id.localeCompare(b.id));
}

/** Everything a generator needs for one framework. */
export function createContext(config, framework) {
  return { config, framework, tokens: createTokens(config.tokens) };
}
