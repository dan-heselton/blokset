// Compact gallery catalog written to dist/gallery/data/library.json.
// The MCP reads this. The component source stays in components/.
import { FREE_IDS } from "./free.js";

const free = new Set(FREE_IDS);

/**
 * @param {import("../types").ComponentSpec[]} specs
 */
export function libraryCatalog(specs) {
  return {
    components: specs.map((spec) => ({
      id: spec.id,
      name: spec.name,
      category: spec.category,
      description: spec.description,
      free: free.has(spec.id),
      props: Object.entries(spec.props || {}).map(([name, def]) => ({ name, type: def.type || "text" })),
      variants: Object.keys(spec.variants || {}),
    })),
  };
}
