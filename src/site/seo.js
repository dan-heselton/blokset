// Shared marketing SEO: absolute URLs, head tags, and JSON-LD helpers.
import { escapeHtml } from "../generators/markup.js";

export const SITE_URL = "https://blokset.dev";
export const OG_IMAGE = `${SITE_URL}/shots/hero-46-wide.jpg`;

const esc = escapeHtml;

/** Absolute site URL for a path like `/gallery`. */
export function absoluteUrl(path = "/") {
  if (!path || path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * @param {{ title: string, description: string, path: string, image?: string, type?: string }} opts
 */
export function siteHead({ title, description, path, image = OG_IMAGE, type = "website" }) {
  const url = absoluteUrl(path);
  const img = image.startsWith("http") ? image : absoluteUrl(image.replace(/^\.\//, "/"));
  return `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="robots" content="index,follow">
<meta name="theme-color" content="#141414">
<link rel="canonical" href="${esc(url)}">
<link rel="icon" href="${SITE_URL}/favicon.ico" sizes="any">
<link rel="icon" href="${SITE_URL}/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="${SITE_URL}/apple-touch-icon.png">
<link rel="manifest" href="${SITE_URL}/site.webmanifest">
<meta property="og:type" content="${esc(type)}">
<meta property="og:site_name" content="Blokset">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${esc(url)}">
<meta property="og:image" content="${esc(img)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${esc(img)}">`;
}

export function webManifest() {
  return `${JSON.stringify({
    name: "Blokset",
    short_name: "Blokset",
    description: "Webflow components that keep your classes.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbfaf7",
    theme_color: "#141414",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
  }, null, 2)}\n`;
}

/** @param {Record<string, unknown> | Record<string, unknown>[]} data */
export function jsonLd(data) {
  return `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;
}

/** @param {number} sectionCount */
export function homeSeo(sectionCount) {
  return {
    title: "Blokset — Webflow components that keep your classes",
    description: `Paste Webflow components into Client-First, BEM, or Flowkit without renaming classes. Built for teams comparing Relume, Flowbase, BRIX, and other Webflow component libraries. ${sectionCount} sections in Webflow, Figma, and code.`,
    path: "/",
  };
}

/** @param {number} sectionCount @param {number} freeCount */
export function gallerySeo(sectionCount, freeCount) {
  return {
    title: "Webflow component gallery — Blokset",
    description: `Browse ${sectionCount} Webflow components with free paste for ${freeCount} sections. Copy for Webflow, Figma, React, Astro, HTML, or vanilla JS on the classes your site already uses.`,
    path: "/gallery",
  };
}

export function pricingSeo() {
  return {
    title: "Pricing — Blokset Webflow component library",
    description: "Free for 20 Webflow sections. Solo is $24 a month for the full library, Class Sync, Figma, and code outputs. Studio is $49 a month.",
    path: "/pricing",
  };
}

export function compareSeo() {
  return {
    title: "Blokset vs Relume, Flowbase, and BRIX — Webflow components",
    description: "Compare Blokset to Relume Library, Flowbase, and BRIX Templates. Class Sync keeps your existing classes; one spec ships Webflow, Figma, and code.",
    path: "/compare",
  };
}

/** Sitemap paths for the marketing site. */
export const SITEMAP_PATHS = ["/", "/gallery", "/pricing", "/compare"];

export function robotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

export function sitemapXml(paths = SITEMAP_PATHS) {
  const urls = paths.map((path) => `  <url>
    <loc>${esc(absoluteUrl(path))}</loc>
  </url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}
