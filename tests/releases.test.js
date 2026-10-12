import { test } from "node:test";
import assert from "node:assert/strict";
import { assignReleases } from "../src/gallery/releases.js";

const source = [
  { id: "1", label: "Release 1", ids: ["hero-05", "cta-08"] },
  { id: "2", label: "Release 2", ids: ["nav-01"] },
  { id: "3", label: "Release 3", ids: [] },
];

test("a listed component stays in the release that names it", () => {
  const releases = assignReleases(["hero-05", "cta-08", "nav-01"], source);
  assert.deepEqual(releases.map((release) => ({ id: release.id, ids: release.ids })), [
    { id: "1", ids: ["hero-05", "cta-08"] },
    { id: "2", ids: ["nav-01"] },
  ]);
});

test("a component that is not listed joins the latest release", () => {
  const releases = assignReleases(["hero-05", "banner-01"], source);
  assert.deepEqual(releases.find((release) => release.id === "3").ids, ["banner-01"]);
  assert.deepEqual(releases.find((release) => release.id === "1").ids, ["hero-05"]);
});
