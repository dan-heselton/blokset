// Site-specific build. `blokset sync <styles.json> --out webflow-sync/example.json --site <id>`
// writes the snapshot this config points at. Add `--variables <file>` or include `variables`
// in that export, then `blokset build --config sites/example.config.js` pastes classes as the
// site stores them and binds mapped tokens to that site's variable ids.
/** @type {import("../src/types").BloksetConfig} */
export default {
  framework: "client-first",
  targets: ["webflow"],
  tokens: {
    // ink: { value: "#141414", css: "var(--color-text)", webflow: "Text Primary" },
  },
  webflow: {
    snapshot: "../webflow-sync/example.json",
    // variables: "../webflow-sync/example-variables.json",
    fonts: {},
  },
};
