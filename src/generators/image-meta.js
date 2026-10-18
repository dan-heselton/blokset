// Demo photos are remote URLs. Webflow Designer only keeps a pasted image when the clipboard
// asset has a real size, so the build measures each file once and caches the bytes locally.
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { ROOT } from "../core/config.js";

const CACHE = join(ROOT, ".cache/demo-images");

/** @param {import("../types").ComponentSpec[]} specs */
export function collectImageUrls(specs) {
  const urls = new Set();
  const visit = (value) => {
    if (!value || typeof value !== "object") return;
    if (typeof value.src === "string" && /^https:\/\//.test(value.src)) urls.add(value.src);
    for (const child of Object.values(value)) visit(child);
  };
  for (const spec of specs) visit(spec.props);
  return [...urls];
}

/** Width and height from the file header. Returns null when the format is not one we read. */
export function imageSize(buffer) {
  const buf = Buffer.isBuffer(buffer) ? buffer : Buffer.from(buffer);
  if (buf.length >= 24 && buf.toString("ascii", 1, 4) === "PNG") {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20), mimeType: "image/png" };
  }
  if (buf.length >= 10 && buf.toString("ascii", 0, 3) === "GIF") {
    return { width: buf.readUInt16LE(6), height: buf.readUInt16LE(8), mimeType: "image/gif" };
  }
  if (buf.length >= 4 && buf[0] === 0xff && buf[1] === 0xd8) {
    let offset = 2;
    while (offset + 8 < buf.length) {
      if (buf[offset] !== 0xff) break;
      const marker = buf[offset + 1];
      if (marker === 0xd8 || marker === 0xd9) {
        offset += 2;
        continue;
      }
      const length = buf.readUInt16BE(offset + 2);
      const startOfFrame = marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
      if (startOfFrame) {
        return { width: buf.readUInt16BE(offset + 7), height: buf.readUInt16BE(offset + 5), mimeType: "image/jpeg" };
      }
      offset += 2 + length;
    }
  }
  if (buf.length >= 30 && buf.toString("ascii", 0, 4) === "RIFF" && buf.toString("ascii", 8, 12) === "WEBP") {
    if (buf.toString("ascii", 12, 16) === "VP8X") {
      return {
        width: 1 + buf.readUIntLE(24, 3),
        height: 1 + buf.readUIntLE(27, 3),
        mimeType: "image/webp",
      };
    }
  }
  const text = buf.length < 200_000 ? buf.toString("utf8") : "";
  if (text.includes("<svg")) {
    const box = text.match(/viewBox=["']\s*[\d.]+\s+[\d.]+\s+([\d.]+)\s+([\d.]+)/);
    const width = Number(text.match(/\bwidth=["']([\d.]+)/)?.[1] || box?.[1]);
    const height = Number(text.match(/\bheight=["']([\d.]+)/)?.[1] || box?.[2]);
    if (width > 0 && height > 0) return { width: Math.round(width), height: Math.round(height), mimeType: "image/svg+xml" };
  }
  return null;
}

function measured(url, bytes, mimeType) {
  const size = imageSize(bytes);
  return {
    fileSize: bytes.length,
    fileHash: createHash("md5").update(bytes).digest("hex"),
    mimeType: size?.mimeType || mimeType || "application/octet-stream",
    ...(size ? { width: size.width, height: size.height } : {}),
    cdnUrl: url,
  };
}

/**
 * @param {import("../types").ComponentSpec[]} specs
 * @param {{ log?: (line: string) => void, cacheDir?: string, fetchImpl?: typeof fetch }} [options]
 * @returns {Promise<Map<string, { fileSize: number, fileHash: string, mimeType: string, width?: number, height?: number }>>}
 */
export async function loadDemoImages(specs, { log = () => {}, cacheDir = CACHE, fetchImpl = fetch } = {}) {
  const urls = collectImageUrls(specs);
  /** @type {Map<string, ReturnType<typeof measured>>} */
  const images = new Map();
  mkdirSync(cacheDir, { recursive: true });
  const pending = [];
  for (const url of urls) {
    const id = createHash("sha256").update(url).digest("hex");
    const file = join(cacheDir, id);
    if (existsSync(file)) {
      images.set(url, measured(url, readFileSync(file)));
      continue;
    }
    pending.push(url);
  }

  let failed = 0;
  const queue = pending.slice();
  const workers = Array.from({ length: Math.min(8, queue.length) }, async () => {
    while (queue.length) {
      const url = queue.shift();
      if (!url) return;
      try {
        const response = await fetchImpl(url, { signal: AbortSignal.timeout(20000), redirect: "follow" });
        if (!response.ok) throw new Error(String(response.status));
        const bytes = Buffer.from(await response.arrayBuffer());
        if (!bytes.length) throw new Error("empty");
        const id = createHash("sha256").update(url).digest("hex");
        writeFileSync(join(cacheDir, id), bytes);
        images.set(url, measured(url, bytes, response.headers.get("content-type")?.split(";")[0]));
      } catch {
        failed += 1;
      }
    }
  });
  await Promise.all(workers);
  const cached = urls.length - pending.length;
  log(`✓ demo images   ${images.size} measured${cached ? ` (${cached} cached)` : ""}${failed ? `, ${failed} unavailable` : ""}`);
  return images;
}
