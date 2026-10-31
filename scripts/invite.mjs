#!/usr/bin/env node
/**
 * Create an invite link for an approved waitlist email.
 * Usage: ADMIN_SECRET=… node scripts/invite.mjs you@example.com
 * Optional: SITE=https://blokset.dev
 */
const email = process.argv[2];
const site = (process.env.SITE || "https://blokset.dev").replace(/\/$/, "");
const secret = process.env.ADMIN_SECRET;
if (!email || !secret) {
  console.error("Usage: ADMIN_SECRET=… node scripts/invite.mjs email@example.com");
  process.exit(1);
}

const res = await fetch(`${site}/api/admin/invite`, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${secret}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ email }),
});
const data = await res.json().catch(() => ({}));
if (!res.ok) {
  console.error(data.error || res.statusText);
  process.exit(1);
}
console.log(data.inviteUrl);
