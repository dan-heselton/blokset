// Which release a component belongs to. The list lives in git; file dates are not consulted.
import { releases } from "../../components/_releases.js";

/**
 * @param {string[]} ids
 * @param {{ id: string, label: string, ids: string[] }[]} [source]
 * @returns {{ id: string, label: string, ids: string[] }[]}
 */
export function assignReleases(ids, source = releases) {
  const named = new Map();
  for (const release of source) {
    for (const id of release.ids) if (!named.has(id)) named.set(id, release.id);
  }
  const latest = source.at(-1);
  const buckets = source.map((release) => ({ id: release.id, label: release.label, ids: [] }));
  const byId = new Map(buckets.map((bucket) => [bucket.id, bucket]));
  for (const id of ids) {
    const releaseId = named.get(id) || latest?.id;
    if (releaseId && byId.has(releaseId)) byId.get(releaseId).ids.push(id);
  }
  return buckets.filter((bucket) => bucket.ids.length);
}
