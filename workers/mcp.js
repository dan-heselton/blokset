// Remote MCP for the Blokset gallery. Claude sends a bearer token or x-api-key.
// Tools list sections and return the same code the gallery copy buttons use.

const PROTOCOL = "2025-03-26";
const KNOWN = new Set(["2024-11-05", "2025-03-26", "2025-06-18"]);
const TARGETS = ["react", "astro", "html", "css", "vanilla", "webflow", "figma"];

const TOOLS = [
  {
    name: "gallery_list",
    description: "List Blokset gallery sections. Filter with a text query or a category. Returns id, name, category, description, whether it is in the free set, prop names, and variant groups.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Match against id, name, category, or description." },
        category: { type: "string", description: "Exact category, such as hero, features, or pricing." },
      },
    },
  },
  {
    name: "gallery_get",
    description: "Fetch one gallery section's generated code, the same output the gallery copies. Pass a target. Framework defaults to client-first. Other frameworks are bem and flowkit. Targets are react, astro, html, css, vanilla, webflow, and figma.",
    inputSchema: {
      type: "object",
      properties: {
        id: { type: "string", description: "Section id, such as hero-05." },
        framework: { type: "string", description: "Class framework. Defaults to client-first." },
        target: { type: "string", enum: TARGETS, description: "Which gallery output to return." },
      },
      required: ["id", "target"],
    },
  },
];

/**
 * @param {Request} request
 * @param {{ MCP_KEY?: string, ASSETS: { fetch: (request: Request) => Promise<Response> } }} env
 */
export async function mcpResponse(request, env) {
  if (!authorized(request, env.MCP_KEY || "")) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
    });
  }

  let message;
  try {
    message = await request.json();
  } catch {
    return rpc(null, null, { code: -32700, message: "Parse error" }, 400);
  }
  if (!message || message.jsonrpc !== "2.0" || typeof message.method !== "string") {
    return rpc(message?.id ?? null, null, { code: -32600, message: "Invalid request" }, 400);
  }
  if (message.method.startsWith("notifications/")) {
    return new Response(null, { status: 202 });
  }

  const url = new URL(request.url);
  try {
    const result = await dispatch(message, {
      getCatalog: () => loadAsset(env, url, "/data/library.json"),
      getData: (id) => loadAsset(env, url, `/data/${id}.json`),
    });
    if (result && result.error) return rpc(message.id ?? null, null, result.error);
    return rpc(message.id ?? null, result);
  } catch (error) {
    return rpc(message.id ?? null, null, { code: -32603, message: String(error?.message || error) });
  }
}

/**
 * @param {Request} request
 * @param {string} secret
 */
export function authorized(request, secret) {
  if (!secret) return false;
  const header = request.headers.get("authorization") || "";
  const bearer = header.toLowerCase().startsWith("bearer ") ? header.slice(7).trim() : "";
  const apiKey = (request.headers.get("x-api-key") || "").trim();
  const presented = bearer || apiKey;
  return presented.length === secret.length && timingSafeEqual(presented, secret);
}

/**
 * @param {{ method: string, params?: unknown, id?: unknown }} message
 * @param {{ getCatalog: () => Promise<unknown>, getData: (id: string) => Promise<unknown> }} io
 */
async function dispatch(message, io) {
  const params = message.params && typeof message.params === "object" ? message.params : {};
  if (message.method === "initialize") {
    const requested = params.protocolVersion;
    return {
      protocolVersion: KNOWN.has(requested) ? requested : PROTOCOL,
      capabilities: { tools: { listChanged: false } },
      serverInfo: { name: "blokset-gallery", version: "1.0.0" },
      instructions: "This is the Blokset gallery. Call gallery_list to find a section, then gallery_get for one output. Do not expect the component source files.",
    };
  }
  if (message.method === "ping") return {};
  if (message.method === "tools/list") return { tools: TOOLS };
  if (message.method === "tools/call") return callTool(params, io);
  return { error: { code: -32601, message: `Method not found: ${message.method}` } };
}

/**
 * @param {Record<string, unknown>} params
 * @param {{ getCatalog: () => Promise<unknown>, getData: (id: string) => Promise<unknown> }} io
 */
async function callTool(params, io) {
  const name = params.name;
  const args = params.arguments && typeof params.arguments === "object" ? params.arguments : {};
  if (name === "gallery_list") return toolText(await listGallery(args, io));
  if (name === "gallery_get") return toolText(await getGallery(args, io));
  return toolText({ error: `Unknown tool: ${name}` }, true);
}

/**
 * @param {Record<string, unknown>} args
 * @param {{ getCatalog: () => Promise<{ components?: unknown[] } | null> }} io
 */
async function listGallery(args, io) {
  const catalog = await io.getCatalog();
  const components = Array.isArray(catalog?.components) ? catalog.components : null;
  if (!components) return { error: "Gallery catalog is not deployed yet." };
  const query = String(args.query || "").trim().toLowerCase();
  const category = String(args.category || "").trim().toLowerCase();
  const matches = components.filter((item) => {
    if (!item || typeof item !== "object") return false;
    if (category && String(item.category || "").toLowerCase() !== category) return false;
    if (!query) return true;
    const haystack = [item.id, item.name, item.category, item.description].join(" ").toLowerCase();
    return haystack.includes(query);
  });
  return { count: matches.length, components: matches };
}

/**
 * @param {Record<string, unknown>} args
 * @param {{ getData: (id: string) => Promise<unknown> }} io
 */
async function getGallery(args, io) {
  const id = String(args.id || "").trim();
  if (!/^[a-z0-9-]+$/.test(id)) return { error: "Pass a section id such as hero-05." };
  const target = String(args.target || "").trim();
  if (!TARGETS.includes(target)) return { error: `Target must be one of: ${TARGETS.join(", ")}` };
  const framework = String(args.framework || "client-first").trim();
  const data = await io.getData(id);
  const outputs = data && typeof data === "object" ? data.outputs : null;
  if (!outputs || typeof outputs !== "object") return { error: `No gallery section named ${id}.` };
  const bundle = outputs[framework];
  if (!bundle || typeof bundle !== "object") {
    return { error: `No ${framework} output for ${id}.`, frameworks: Object.keys(outputs) };
  }
  if (!(target in bundle)) return { error: `No ${target} output for ${id}.`, targets: Object.keys(bundle) };
  return { id, framework, target, code: bundle[target] };
}

/** @param {unknown} value @param {boolean} [isError] */
function toolText(value, isError = Boolean(value && typeof value === "object" && "error" in value && Object.keys(value).length <= 3)) {
  return {
    content: [{ type: "text", text: JSON.stringify(value) }],
    isError,
  };
}

/**
 * @param {{ ASSETS: { fetch: (request: Request) => Promise<Response> } }} env
 * @param {URL} pageUrl
 * @param {string} path
 */
async function loadAsset(env, pageUrl, path) {
  const response = await env.ASSETS.fetch(new Request(new URL(path, pageUrl.origin)));
  if (!response.ok) return null;
  return response.json();
}

/** @param {unknown} id @param {unknown} result @param {{ code: number, message: string }} [error] @param {number} [status] */
function rpc(id, result, error, status = 200) {
  const body = error ? { jsonrpc: "2.0", id, error } : { jsonrpc: "2.0", id, result };
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });
}

/** @param {string} a @param {string} b */
function timingSafeEqual(a, b) {
  let out = 0;
  for (let i = 0; i < a.length; i++) out |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return out === 0;
}
