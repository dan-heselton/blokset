// Dev server: serves dist/gallery and rebuilds on change. Each rebuild runs in a fresh process so
// edited specs are re-imported cleanly, then connected browsers reload over server-sent events.
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { watch, existsSync, readFileSync } from "node:fs";
import { join, extname, normalize } from "node:path";
import { spawn } from "node:child_process";
import { ROOT } from "./core/config.js";
import { mcpResponse } from "../workers/mcp.js";

const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".svg": "image/svg+xml", ".jpg": "image/jpeg", ".png": "image/png", ".webp": "image/webp" };
const ROUTES = {
  "/": "/index.html",
  "/pricing": "/pricing.html",
  "/gallery": "/gallery.html",
  "/compare": "/compare.html",
  "/login": "/login.html",
  "/admin": "/admin.html",
  "/mocks": "/mocks/index.html",
};

function mcpKey() {
  if (process.env.MCP_KEY) return process.env.MCP_KEY;
  try {
    const line = readFileSync(join(ROOT, ".dev.vars"), "utf8").split("\n").find((entry) => entry.startsWith("MCP_KEY="));
    return line ? line.slice("MCP_KEY=".length).trim() : "";
  } catch {
    return "";
  }
}

function figmaPath(url) {
  const rest = url.slice("/figma/".length);
  if (rest === "index.json") return join(ROOT, "dist/figma/index.json");
  const [framework, ...file] = rest.split("/");
  if (!framework || !/^[\w-]+$/.test(framework) || !file.length) return null;
  const name = file.join("/");
  if (name.includes("..")) return null;
  return join(ROOT, "dist", framework, "figma", name);
}

function rebuild() {
  return new Promise((done) => {
    const started = Date.now();
    const p = spawn(process.execPath, [join(ROOT, "src/cli.js"), "build", "--dev"], { cwd: ROOT, stdio: ["ignore", "pipe", "pipe"] });
    let err = "";
    p.stderr.on("data", (d) => (err += d));
    p.on("close", (code) => {
      if (code === 0) console.log(`\x1b[32m✓\x1b[0m rebuilt in ${Date.now() - started}ms`);
      else console.log(`\x1b[31m✗ build failed\x1b[0m${err}`);
      done(code === 0);
    });
  });
}

export async function startDev({ port }) {
  await rebuild();
  const clients = new Set();
  const root = join(ROOT, "dist/gallery");

  createServer(async (req, res) => {
    const url = decodeURIComponent((req.url || "/").split("?")[0]);
    const headers = {
      "access-control-allow-origin": req.headers.origin || "*",
      "access-control-allow-private-network": "true",
      "access-control-allow-methods": "GET, POST, OPTIONS",
      "access-control-allow-headers": req.headers["access-control-request-headers"] || "*",
      vary: "Origin",
      "cache-control": "no-store",
    };
    if (req.method === "OPTIONS") {
      res.writeHead(204, headers).end();
      return;
    }
    if (req.method === "POST" && url === "/mcp") {
      const chunks = [];
      for await (const chunk of req) chunks.push(chunk);
      const request = new Request(`http://localhost${url}`, {
        method: "POST",
        headers: req.headers,
        body: Buffer.concat(chunks),
      });
      const response = await mcpResponse(request, {
        MCP_KEY: mcpKey(),
        ASSETS: {
          async fetch(assetRequest) {
            const name = new URL(assetRequest.url).pathname.replace(/^\//, "");
            const file = join(root, name);
            if (!file.startsWith(root)) return new Response("missing", { status: 404 });
            try {
              return new Response(await readFile(file), { headers: { "content-type": "application/json" } });
            } catch {
              return new Response("missing", { status: 404 });
            }
          },
        },
      });
      const responseHeaders = { ...headers, "content-type": response.headers.get("content-type") || "application/json" };
      res.writeHead(response.status, responseHeaders).end(Buffer.from(await response.arrayBuffer()));
      return;
    }
    if (req.method === "POST" && (url === "/api/waitlist" || url === "/")) {
      const chunks = [];
      for await (const chunk of req) chunks.push(chunk);
      const raw = Buffer.concat(chunks).toString();
      const params = raw.trim().startsWith("{")
        ? new URLSearchParams(Object.entries(JSON.parse(raw)).map(([k, v]) => [k, String(v ?? "")]))
        : new URLSearchParams(raw);
      if (params.get("email")) {
        console.log(`library list: ${params.get("plan") || "Solo"} <${params.get("email")}>`);
        res.writeHead(200, { ...headers, "content-type": "application/json; charset=utf-8" }).end(JSON.stringify({ ok: true }));
        return;
      }
      res.writeHead(400, headers).end(JSON.stringify({ error: "Bad request" }));
      return;
    }
    if (url === "/__reload") {
      res.writeHead(200, { ...headers, "content-type": "text/event-stream", "cache-control": "no-cache", connection: "keep-alive" });
      res.write(": connected\n\n");
      clients.add(res);
      req.on("close", () => clients.delete(res));
      return;
    }
    const mapped = ROUTES[url];
    let path = url.startsWith("/figma/") ? figmaPath(url) : normalize(join(root, mapped || url));
    if (path && !url.startsWith("/figma/") && !existsSync(path) && !extname(path)) {
      const html = `${path}.html`;
      if (existsSync(html)) path = html;
    }
    const allowed = path && (url.startsWith("/figma/") ? path.startsWith(join(ROOT, "dist")) : path.startsWith(root));
    if (!allowed || !existsSync(path)) {
      res.writeHead(404, headers).end("Not found");
      return;
    }
    let body;
    try {
      body = await readFile(path);
    } catch (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404, headers).end("Not found");
        return;
      }
      throw err;
    }
    res.writeHead(200, { ...headers, "content-type": TYPES[extname(path)] || "application/octet-stream" });
    res.end(body);
  }).listen(port, () => console.log(`\n  Blokset → http://localhost:${port}\n  Gallery → http://localhost:${port}/gallery\n  Mocks   → http://localhost:${port}/mocks\n  Watching components/, frameworks/, src/, blokset.config.js\n`));

  let timer;
  let building = false;
  const trigger = () => {
    clearTimeout(timer);
    timer = setTimeout(async () => {
      if (building) return trigger();
      building = true;
      const ok = await rebuild();
      building = false;
      if (ok) for (const c of clients) c.write("data: reload\n\n");
    }, 120);
  };
  for (const dir of ["components", "frameworks", "src"]) {
    watch(join(ROOT, dir), { recursive: true }, (_event, file) => {
      const name = String(file || "");
      // Skip generated/demo bitmaps, but rebuild when marketing shots/art/marks change.
      if (/\.(png|jpe?g|webp|gif)$/i.test(name) && !/(^|\/)site\/(shots|art|marks|brand)\//.test(name.replace(/\\/g, "/"))) return;
      trigger();
    });
  }
  watch(ROOT, (_event, file) => {
    if (file && String(file).endsWith(".config.js")) trigger();
  });
}
