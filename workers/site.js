/**
 * Blokset site Worker: waitlist API, invite-only sessions, admin dash, gate for library routes.
 */

import { mcpResponse } from "./mcp.js";

const ADMIN_EMAILS = new Set(["dan@danheselton.com"]);

const GATED = [
  /^\/gallery(\.html)?$/,
  /^\/pricing(\.html)?$/,
  /^\/compare(\.html)?$/,
  /^\/admin(\.html)?$/,
  /^\/specimens(\/|$)/,
  /^\/data(\/|$)/,
];

const COOKIE = "blokset_session";
const SESSION_DAYS = 30;
const INVITE_DAYS = 14;

/**
 * @param {Request} request
 * @param {Env} env
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS" && (url.pathname.startsWith("/api/") || url.pathname === "/mcp")) {
      return cors(new Response(null, { status: 204 }));
    }

    if (url.pathname === "/mcp") {
      if (request.method !== "POST") return cors(new Response("Method Not Allowed", { status: 405 }));
      try {
        return cors(await mcpResponse(request, env));
      } catch (error) {
        console.error(JSON.stringify({ err: String(error?.message || error) }));
        return cors(new Response(JSON.stringify({ jsonrpc: "2.0", id: null, error: { code: -32603, message: "Server error" } }), {
          status: 500,
          headers: { "Content-Type": "application/json; charset=utf-8" },
        }));
      }
    }

    try {
      if (url.pathname === "/api/waitlist" && request.method === "POST") {
        return cors(await handleWaitlist(request, env));
      }
      if (url.pathname === "/api/login" && request.method === "POST") {
        return cors(await handleLogin(request, env));
      }
      if (url.pathname === "/api/logout" && request.method === "POST") {
        return cors(await handleLogout());
      }
      if (url.pathname === "/api/invite/accept" && request.method === "POST") {
        return cors(await handleAcceptInvite(request, env));
      }
      if (url.pathname === "/api/admin/invite" && request.method === "POST") {
        return cors(await handleAdminInvite(request, env, url));
      }
      if (url.pathname === "/api/admin/people" && request.method === "GET") {
        return cors(await handleAdminPeople(request, env, url));
      }
      if (url.pathname === "/api/session" && request.method === "GET") {
        return cors(await handleSession(request, env));
      }
    } catch (error) {
      console.error(JSON.stringify({ err: String(error?.message || error) }));
      return cors(json({ error: "Server error" }, 500));
    }

    if (isAdminPath(url.pathname)) {
      const session = await readSession(request, env);
      if (!session) {
        const login = new URL("/login", url);
        login.searchParams.set("next", "/admin");
        return Response.redirect(login.toString(), 302);
      }
      if (!isAdmin(session.email)) {
        return Response.redirect(new URL("/", url).toString(), 302);
      }
    } else if (GATED.some((re) => re.test(url.pathname))) {
      const session = await readSession(request, env);
      if (!session) {
        const login = new URL("/login", url);
        login.searchParams.set("next", url.pathname);
        return Response.redirect(login.toString(), 302);
      }
    }

    return env.ASSETS.fetch(request);
  },
};

/**
 * @typedef {{ STORE: KVNamespace, ASSETS: Fetcher, SESSION_SECRET: string, ADMIN_SECRET?: string, MCP_KEY?: string }} Env
 */

/** @param {string} pathname */
function isAdminPath(pathname) {
  return /^\/admin(\.html)?$/.test(pathname);
}

/** @param {string} email */
function isAdmin(email) {
  return ADMIN_EMAILS.has(normalizeEmail(email));
}

/** @param {Request} request @param {Env} env */
async function requireAdmin(request, env) {
  const auth = request.headers.get("Authorization") || "";
  const secret = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (env.ADMIN_SECRET && secret && secret === env.ADMIN_SECRET) {
    return { email: "cli@local", via: "secret" };
  }
  const session = await readSession(request, env);
  if (session && isAdmin(session.email)) return { email: session.email, via: "session" };
  return null;
}

/** @param {Request} request @param {Env} env */
async function handleWaitlist(request, env) {
  const body = await readBody(request);
  if (body.get("bot-field")) return json({ ok: true });
  const email = normalizeEmail(body.get("email"));
  if (!email) return json({ error: "Email required" }, 400);
  const plan = String(body.get("plan") || "Solo").slice(0, 32);
  const key = `waitlist:${email}`;
  const existing = await env.STORE.get(key);
  if (!existing) {
    await env.STORE.put(key, JSON.stringify({ email, plan, at: new Date().toISOString() }));
  }
  return json({ ok: true });
}

/** @param {Request} request @param {Env} env */
async function handleLogin(request, env) {
  const body = await readBody(request);
  const email = normalizeEmail(body.get("email"));
  const password = body.get("password") || "";
  if (!email || password.length < 8) return json({ error: "Email or password is wrong." }, 401);
  const raw = await env.STORE.get(`user:${email}`);
  if (!raw) return json({ error: "Email or password is wrong." }, 401);
  const user = JSON.parse(raw);
  const ok = await verifyPassword(password, user.salt, user.hash);
  if (!ok) return json({ error: "Email or password is wrong." }, 401);
  return withSession(json({ ok: true, email, admin: isAdmin(email) }), email, env);
}

async function handleLogout() {
  const res = json({ ok: true });
  res.headers.append("Set-Cookie", `${COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`);
  return res;
}

/** @param {Request} request @param {Env} env */
async function handleAcceptInvite(request, env) {
  const body = await readBody(request);
  const token = String(body.get("token") || "").trim();
  const password = body.get("password") || "";
  if (!token || password.length < 8) return json({ error: "Password must be at least 8 characters." }, 400);
  const raw = await env.STORE.get(`invite:${token}`);
  if (!raw) return json({ error: "Invite is invalid or expired." }, 400);
  const invite = JSON.parse(raw);
  if (invite.exp && Date.now() > invite.exp) {
    await env.STORE.delete(`invite:${token}`);
    return json({ error: "Invite is invalid or expired." }, 400);
  }
  const email = normalizeEmail(invite.email);
  if (!email) return json({ error: "Invite is invalid or expired." }, 400);
  const { salt, hash } = await hashPassword(password);
  await env.STORE.put(`user:${email}`, JSON.stringify({ email, salt, hash, at: new Date().toISOString() }));
  await env.STORE.delete(`invite:${token}`);
  await env.STORE.delete(`invited:${email}`);
  return withSession(json({ ok: true, email, admin: isAdmin(email) }), email, env);
}

/** @param {Request} request @param {Env} env @param {URL} url */
async function handleAdminInvite(request, env, url) {
  const admin = await requireAdmin(request, env);
  if (!admin) return json({ error: "Unauthorized" }, 401);
  const body = await readBody(request);
  const email = normalizeEmail(body.get("email"));
  if (!email) return json({ error: "Email required" }, 400);
  if (await env.STORE.get(`user:${email}`)) {
    return json({ error: "That email already has access.", email }, 409);
  }
  const previous = await env.STORE.get(`invited:${email}`);
  if (previous) {
    try {
      const prev = JSON.parse(previous);
      if (prev.token) await env.STORE.delete(`invite:${prev.token}`);
    } catch {
      /* ignore */
    }
  }
  const token = crypto.randomUUID().replace(/-/g, "") + crypto.randomUUID().replace(/-/g, "");
  const exp = Date.now() + INVITE_DAYS * 24 * 60 * 60 * 1000;
  const ttl = INVITE_DAYS * 24 * 60 * 60;
  await env.STORE.put(`invite:${token}`, JSON.stringify({ email, exp }), { expirationTtl: ttl });
  await env.STORE.put(`invited:${email}`, JSON.stringify({ email, token, exp, by: admin.email, at: new Date().toISOString() }), {
    expirationTtl: ttl,
  });
  const inviteUrl = new URL("/login", url.origin);
  inviteUrl.searchParams.set("invite", token);
  if (isAdmin(email)) inviteUrl.searchParams.set("next", "/admin");
  return json({ ok: true, email, inviteUrl: inviteUrl.toString() });
}

/** @param {Request} request @param {Env} env @param {URL} url */
async function handleAdminPeople(request, env, url) {
  const admin = await requireAdmin(request, env);
  if (!admin) return json({ error: "Unauthorized" }, 401);

  const [waitlistKeys, userKeys, invitedKeys] = await Promise.all([
    listAll(env.STORE, "waitlist:"),
    listAll(env.STORE, "user:"),
    listAll(env.STORE, "invited:"),
  ]);

  /** @type {Map<string, { email: string, plan?: string, waitlistedAt?: string, status: string, inviteUrl?: string, invitedAt?: string, userAt?: string, admin?: boolean }>} */
  const people = new Map();

  for (const key of waitlistKeys) {
    const raw = await env.STORE.get(key.name);
    if (!raw) continue;
    const row = JSON.parse(raw);
    const email = normalizeEmail(row.email || key.name.slice("waitlist:".length));
    if (!email) continue;
    people.set(email, {
      email,
      plan: row.plan || "Solo",
      waitlistedAt: row.at || null,
      status: "waitlist",
      admin: isAdmin(email),
    });
  }

  for (const key of invitedKeys) {
    const raw = await env.STORE.get(key.name);
    if (!raw) continue;
    const row = JSON.parse(raw);
    const email = normalizeEmail(row.email || key.name.slice("invited:".length));
    if (!email) continue;
    const inviteUrl = row.token ? `${url.origin}/login?invite=${row.token}${isAdmin(email) ? "&next=%2Fadmin" : ""}` : null;
    const prev = people.get(email) || { email, status: "invited", admin: isAdmin(email) };
    people.set(email, {
      ...prev,
      status: "invited",
      invitedAt: row.at || null,
      inviteUrl,
      admin: isAdmin(email),
    });
  }

  for (const key of userKeys) {
    const raw = await env.STORE.get(key.name);
    if (!raw) continue;
    const row = JSON.parse(raw);
    const email = normalizeEmail(row.email || key.name.slice("user:".length));
    if (!email) continue;
    const prev = people.get(email) || { email, status: "active", admin: isAdmin(email) };
    people.set(email, {
      ...prev,
      status: "active",
      userAt: row.at || null,
      inviteUrl: undefined,
      admin: isAdmin(email),
    });
  }

  const list = [...people.values()].sort((a, b) => {
    if (a.admin !== b.admin) return a.admin ? -1 : 1;
    const rank = { waitlist: 0, invited: 1, active: 2 };
    const ra = rank[a.status] ?? 9;
    const rb = rank[b.status] ?? 9;
    if (ra !== rb) return ra - rb;
    return a.email.localeCompare(b.email);
  });

  return json({ ok: true, admin: admin.email, people: list });
}

/** @param {KVNamespace} store @param {string} prefix */
async function listAll(store, prefix) {
  /** @type {Array<{ name: string }>} */
  const keys = [];
  let cursor;
  do {
    const page = await store.list({ prefix, cursor, limit: 1000 });
    keys.push(...page.keys);
    cursor = page.list_complete ? undefined : page.cursor;
  } while (cursor);
  return keys;
}

/** @param {Request} request @param {Env} env */
async function handleSession(request, env) {
  const session = await readSession(request, env);
  if (!session) return json({ email: null, admin: false });
  return json({ email: session.email, admin: isAdmin(session.email) });
}

/** @param {Request} request @param {Env} env */
async function readSession(request, env) {
  const cookie = parseCookie(request.headers.get("Cookie") || "")[COOKIE];
  if (!cookie || !env.SESSION_SECRET) return null;
  const parts = cookie.split(".");
  if (parts.length !== 3) return null;
  const [emailB64, expStr, sig] = parts;
  const payload = `${emailB64}.${expStr}`;
  const expected = await hmac(env.SESSION_SECRET, payload);
  if (!timingSafeEqual(sig, expected)) return null;
  const exp = Number(expStr);
  if (!Number.isFinite(exp) || Date.now() > exp) return null;
  let email;
  try {
    email = normalizeEmail(atob(emailB64));
  } catch {
    return null;
  }
  if (!email) return null;
  const user = await env.STORE.get(`user:${email}`);
  if (!user) return null;
  return { email };
}

/** @param {Response} res @param {string} email @param {Env} env */
async function withSession(res, email, env) {
  const exp = Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000;
  const emailB64 = btoa(email);
  const payload = `${emailB64}.${exp}`;
  const sig = await hmac(env.SESSION_SECRET, payload);
  const value = `${payload}.${sig}`;
  res.headers.append(
    "Set-Cookie",
    `${COOKIE}=${value}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${SESSION_DAYS * 24 * 60 * 60}`
  );
  return res;
}

/** @param {Request} request */
async function readBody(request) {
  const type = request.headers.get("Content-Type") || "";
  if (type.includes("application/json")) {
    const data = await request.json().catch(() => ({}));
    const params = new URLSearchParams();
    for (const [k, v] of Object.entries(data || {})) params.set(k, String(v ?? ""));
    return params;
  }
  const text = await request.text();
  return new URLSearchParams(text);
}

/** @param {string | null} value */
function normalizeEmail(value) {
  const email = String(value || "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "";
  return email;
}

/** @param {unknown} data @param {number} [status] */
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

/** @param {Response} res */
function cors(res) {
  const headers = new Headers(res.headers);
  headers.set("Access-Control-Allow-Origin", headers.get("Access-Control-Allow-Origin") || "*");
  headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return new Response(res.body, { status: res.status, headers });
}

/** @param {string} cookie */
function parseCookie(cookie) {
  /** @type {Record<string, string>} */
  const out = {};
  for (const part of cookie.split(";")) {
    const i = part.indexOf("=");
    if (i === -1) continue;
    out[part.slice(0, i).trim()] = part.slice(i + 1).trim();
  }
  return out;
}

/** @param {string} secret @param {string} payload */
async function hmac(secret, payload) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

/** @param {string} a @param {string} b */
function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let out = 0;
  for (let i = 0; i < a.length; i++) out |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return out === 0;
}

/** @param {string} password */
async function hashPassword(password) {
  const saltBytes = crypto.getRandomValues(new Uint8Array(16));
  const salt = [...saltBytes].map((b) => b.toString(16).padStart(2, "0")).join("");
  const hash = await derive(password, saltBytes);
  return { salt, hash };
}

/** @param {string} password @param {string} saltHex @param {string} hashHex */
async function verifyPassword(password, saltHex, hashHex) {
  const saltBytes = new Uint8Array(saltHex.match(/.{2}/g).map((h) => parseInt(h, 16)));
  const hash = await derive(password, saltBytes);
  return timingSafeEqual(hash, hashHex);
}

/** @param {string} password @param {Uint8Array} saltBytes */
async function derive(password, saltBytes) {
  const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt: saltBytes, iterations: 100_000, hash: "SHA-256" },
    base,
    256
  );
  return [...new Uint8Array(bits)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
