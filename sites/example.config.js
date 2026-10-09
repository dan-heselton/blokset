// Site-specific build. `forge sync <styles.json> --out webflow-sync/example.json --site <id>`
// writes the snapshot this config points at, then `forge build --config sites/example.config.js`
// pastes classes exactly as that site stores them.
/** @type {import("../src/types").ForgeConfig} */
export default {
  framework: "client-first",
  targets: ["webflow"],
  webflow: {
    snapshot: "../webflow-sync/example.json",
    fonts: {},
  },
};
