#!/usr/bin/env node
// blokset build | dev | list | add <id...> --target <t> --out <dir> [--framework <f>] [--config <path>]
import { dirname, resolve, join, relative } from "node:path";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { buildProject, targetFiles, writeFiles } from "./build.js";
import { ROOT, ALL_TARGETS, loadConfig, loadFrameworks, loadComponents, createContext } from "./core/config.js";
import { snapshotFromExport } from "./sync.js";

const [cmd = "help", ...rest] = process.argv.slice(2);
const flags = {};
const positional = [];
for (let i = 0; i < rest.length; i++) {
  if (rest[i].startsWith("--")) {
    const key = rest[i].slice(2);
    const next = rest[i + 1];
    flags[key] = next && !next.startsWith("--") ? (i++, next) : true;
  } else positional.push(rest[i]);
}

const HELP = `Blokset

  blokset dev                         Gallery at http://localhost:4400 with live reload
  blokset build [--config <path>]        Build every framework × target into dist/
  blokset sync <styles.json> --out <file> [--variables <file>] [--site <id>]
                                    Save a get_styles export, and optional variables, for Class Sync
  blokset list                        List components
  blokset add <id...> --target <t> --out <dir> [--framework <f>] [--config <path>] [--no-shared]
                                    Write components into an existing project
                                    targets: ${ALL_TARGETS.join(", ")}

Examples
  blokset add hero-11 --target astro --out ../my-site/src/components/blokset
  blokset add hero-05 stats-04 --target astro --out ../my-site/src/components/blokset
  blokset add work-02 --target react --out ./app/components --framework bem
  blokset add cta-08 --target astro --out ../client/src/blokset --config ../client/blokset.config.js
`;

async function main() {
  switch (cmd) {
    case "build":
      await buildProject({ dev: Boolean(flags.dev), configPath: flags.config ? resolve(flags.config) : undefined });
      break;

    case "sync": {
      const inputPath = positional[0];
      if (!inputPath) throw new Error("blokset sync <styles.json> --out <file> [--variables <file>] [--site <id>]");
      if (!flags.out) throw new Error("--out <file> is required");
      const exported = JSON.parse(readFileSync(resolve(inputPath), "utf8"));
      const variableInput = flags.variables ? JSON.parse(readFileSync(resolve(flags.variables), "utf8")) : undefined;
      const snapshot = snapshotFromExport(exported, { site: flags.site || "", variables: variableInput });
      const out = resolve(flags.out);
      mkdirSync(dirname(out), { recursive: true });
      writeFileSync(out, JSON.stringify(snapshot, null, 2));
      const variableCount = Object.keys(snapshot.variables).length;
      console.log(`Synced ${snapshot.count} styles, ${variableCount} variables → ${relative(process.cwd(), out) || "."}`);
      break;
    }

    case "dev": {
      const { startDev } = await import("./dev.js");
      await startDev({ port: Number(flags.port) || 4400 });
      break;
    }

    case "list": {
      const specs = await loadComponents();
      const w = Math.max(...specs.map((s) => s.id.length));
      for (const s of specs) console.log(`${s.id.padEnd(w)}  ${s.category.padEnd(12)} ${s.name}`);
      break;
    }

    case "add": {
      const target = flags.target;
      if (!ALL_TARGETS.includes(target)) throw new Error(`--target must be one of: ${ALL_TARGETS.join(", ")}`);
      if (!flags.out) throw new Error("--out <dir> is required");
      if (!positional.length) throw new Error("Name at least one component id (see `blokset list`)");
      const config = await loadConfig(flags.config ? resolve(flags.config) : undefined);
      const frameworks = await loadFrameworks();
      const fw = frameworks[flags.framework || config.framework];
      if (!fw) throw new Error(`Unknown framework. Available: ${Object.keys(frameworks).join(", ")}`);
      const specs = await loadComponents(positional);
      const missing = positional.filter((id) => !specs.some((s) => s.id === id));
      if (missing.length) throw new Error(`Unknown component(s): ${missing.join(", ")}`);

      let files = targetFiles(specs, createContext(config, fw), target);
      // The demo page is for dist only; never drop it into someone's project.
      delete files["index.html"];
      if (flags["no-shared"]) files = Object.fromEntries(Object.entries(files).filter(([k]) => !k.startsWith("blokset/")));
      const out = resolve(flags.out);
      writeFiles(out, files);
      console.log(`Added ${specs.map((s) => s.id).join(", ")} (${fw.label}, ${target}) → ${relative(process.cwd(), out) || "."}`);
      for (const f of Object.keys(files)) console.log(`  ${f}`);
      if (target === "react" || target === "astro") {
        console.log(`\nNext: import "./blokset/index.css" once in your layout${specs.some((s) => s.motion) ? ", and npm i gsap" : ""}.`);
      }
      if (target === "webflow" && files["footer-code.html"]) console.log(`\nPaste footer-code.html into Webflow → Site settings → Custom code → Footer.`);
      break;
    }

    default:
      console.log(HELP);
  }
}

main().catch((e) => {
  console.error(`\n✗ ${e.message}\n`);
  process.exit(1);
});
