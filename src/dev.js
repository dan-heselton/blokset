// Dev server: serves dist/gallery and rebuilds on change. Each rebuild runs in a fresh process so
// edited specs are re-imported cleanly, then connected browsers reload over server-sent events.
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { watch, existsSync } from "node:fs";
import { join, extname, normalize } from "node:path";
import { spawn } from "node:child_process";
import { ROOT } from "./core/config.js";

const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".svg": "image/svg+xml" };

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
    if (url === "/__reload") {
      res.writeHead(200, { "content-type": "text/event-stream", "cache-control": "no-cache", connection: "keep-alive" });
      res.write(": connected\n\n");
      clients.add(res);
      req.on("close", () => clients.delete(res));
      return;
    }
    const path = normalize(join(root, url === "/" ? "index.html" : url));
    if (!path.startsWith(root) || !existsSync(path)) {
      res.writeHead(404).end("Not found");
      return;
    }
    res.writeHead(200, { "content-type": TYPES[extname(path)] || "application/octet-stream", "cache-control": "no-store" });
    res.end(await readFile(path));
  }).listen(port, () => console.log(`\n  Blokset gallery → http://localhost:${port}\n  Watching components/, frameworks/, src/, blokset.config.js\n`));

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
  for (const dir of ["components", "frameworks", "src"]) watch(join(ROOT, dir), { recursive: true }, trigger);
  watch(ROOT, (_e, file) => file && file.endsWith(".config.js") && trigger());
}
