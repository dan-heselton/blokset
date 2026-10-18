import { test } from "node:test";
import assert from "node:assert/strict";
import { imageSize, collectImageUrls } from "../src/generators/image-meta.js";

test("image headers report pixel size", () => {
  const png = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==", "base64");
  assert.deepEqual(imageSize(png), { width: 1, height: 1, mimeType: "image/png" });

  const jpeg = Buffer.from([
    0xff, 0xd8,
    0xff, 0xc0, 0x00, 0x0b, 0x08, 0x00, 0x02, 0x00, 0x03, 0x01, 0x01, 0x11, 0x00,
    0xff, 0xd9,
  ]);
  assert.deepEqual(imageSize(jpeg), { width: 3, height: 2, mimeType: "image/jpeg" });
});

test("demo image urls are collected from component props", () => {
  const urls = collectImageUrls([
    { props: { image: { type: "image", default: { src: "https://images.example/a.jpg", alt: "A" } }, label: { type: "text", default: "Hi" } } },
    { props: { items: { type: "list", default: [{ image: { src: "https://images.example/a.jpg" } }, { image: { src: "https://images.example/b.png" } }] } } },
  ]);
  assert.deepEqual(urls.sort(), ["https://images.example/a.jpg", "https://images.example/b.png"]);
});
