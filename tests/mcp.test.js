import { test } from "node:test";
import assert from "node:assert/strict";
import { authorized, mcpResponse } from "../workers/mcp.js";
import { libraryCatalog } from "../src/site/library.js";

const KEY = "test-key";

function envWith(catalog, data) {
  return {
    MCP_KEY: KEY,
    ASSETS: {
      async fetch(request) {
        const path = new URL(request.url).pathname;
        if (path === "/data/library.json") return Response.json(catalog);
        const id = path.match(/^\/data\/([a-z0-9-]+)\.json$/)?.[1];
        if (id && data[id]) return Response.json(data[id]);
        return new Response("missing", { status: 404 });
      },
    },
  };
}

function post(body, headers = {}) {
  return new Request("https://blokset.dev/mcp", {
    method: "POST",
    headers: { "content-type": "application/json", authorization: `Bearer ${KEY}`, ...headers },
    body: JSON.stringify(body),
  });
}

const catalog = libraryCatalog([
  {
    id: "hero-05",
    name: "Hero / Image",
    category: "hero",
    description: "Full-height image hero",
    props: { heading: { type: "text" } },
    variants: { theme: {} },
  },
  {
    id: "bento-24",
    name: "Bento / Built to move",
    category: "bento",
    description: "A dark frame",
    props: {},
    variants: {},
  },
]);

const data = {
  "hero-05": {
    outputs: {
      "client-first": { html: "<section>hero</section>", react: "export function Hero() {}" },
    },
  },
};

test("library catalog marks the free set and keeps prop names", () => {
  const hero = catalog.components.find((item) => item.id === "hero-05");
  const bento = catalog.components.find((item) => item.id === "bento-24");
  assert.equal(hero.free, true);
  assert.equal(bento.free, false);
  assert.deepEqual(hero.props, [{ name: "heading", type: "text" }]);
  assert.deepEqual(hero.variants, ["theme"]);
});

test("mcp rejects a missing or wrong key", async () => {
  const env = envWith(catalog, data);
  const open = await mcpResponse(post({ jsonrpc: "2.0", id: 1, method: "ping" }, { authorization: "" }), env);
  assert.equal(open.status, 401);
  const wrong = await mcpResponse(post({ jsonrpc: "2.0", id: 1, method: "ping" }, { authorization: "Bearer nope" }), env);
  assert.equal(wrong.status, 401);
  assert.equal(authorized(new Request("https://blokset.dev/mcp", { headers: { "x-api-key": KEY } }), KEY), true);
});

test("mcp lists and fetches one gallery section", async () => {
  const env = envWith(catalog, data);
  const init = await mcpResponse(post({
    jsonrpc: "2.0",
    id: 1,
    method: "initialize",
    params: { protocolVersion: "2025-03-26", capabilities: {}, clientInfo: { name: "test", version: "0" } },
  }), env);
  const initialized = await init.json();
  assert.equal(initialized.result.serverInfo.name, "blokset-gallery");

  const listed = await mcpResponse(post({
    jsonrpc: "2.0",
    id: 2,
    method: "tools/call",
    params: { name: "gallery_list", arguments: { query: "bento" } },
  }), env);
  const listBody = await listed.json();
  const sections = JSON.parse(listBody.result.content[0].text);
  assert.equal(sections.count, 1);
  assert.equal(sections.components[0].id, "bento-24");

  const got = await mcpResponse(post({
    jsonrpc: "2.0",
    id: 3,
    method: "tools/call",
    params: { name: "gallery_get", arguments: { id: "hero-05", target: "html" } },
  }), env);
  const code = JSON.parse((await got.json()).result.content[0].text);
  assert.equal(code.code, "<section>hero</section>");
  assert.equal(code.framework, "client-first");
});

test("mcp acknowledges notifications and hides unknown sections", async () => {
  const env = envWith(catalog, data);
  const note = await mcpResponse(post({ jsonrpc: "2.0", method: "notifications/initialized" }), env);
  assert.equal(note.status, 202);
  const missing = await mcpResponse(post({
    jsonrpc: "2.0",
    id: 4,
    method: "tools/call",
    params: { name: "gallery_get", arguments: { id: "nope", target: "html" } },
  }), env);
  const body = await missing.json();
  assert.equal(body.result.isError, true);
});
