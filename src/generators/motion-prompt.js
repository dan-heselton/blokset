// One animation prompt per component, derived from that spec's motion only.
import { motionAttrs } from "../core/resolve.js";

function walk(node, fn) {
  if (!node || typeof node !== "object") return;
  fn(node);
  for (const child of node.children || []) walk(child, fn);
}

function elementsOf(spec) {
  const fromMotion = motionAttrs(spec);
  const elements = [];
  walk(spec.tree, (node) => {
    if (!node.key) return;
    const attrs = { ...(node.attrs || {}), ...(fromMotion[node.key] || {}) };
    if (Object.keys(attrs).some((name) => name.startsWith("data-blok-"))) elements.push({ key: node.key, attrs });
  });
  return elements;
}

const named = (keys) => (keys.length ? keys.map((key) => `"${key}"`).join(", ") : "the matching elements");
const has = (elements, name) => elements.some((el) => Object.prototype.hasOwnProperty.call(el.attrs, name));
const is = (elements, name, value) => elements.some((el) => el.attrs[name] === value);
const keys = (elements, name, value) =>
  elements.filter((el) => (value === undefined ? name in el.attrs : el.attrs[name] === value)).map((el) => el.key);
const attr = (elements, name) => elements.find((el) => el.attrs[name] != null && el.attrs[name] !== "")?.attrs[name];

const ENTER = {
  "fade-up": "opacity 0 to 1 and move up 28px, 0.9s, ease power3.out",
  fade: "opacity 0 to 1, 0.8s, ease power2.out",
};

function entrance(spec) {
  const steps = [];
  const enter = spec.motion?.enter;
  if (enter?.targets?.length) {
    const delays = enter.targets.map((key, index) => `${key} after ${(index * enter.stagger).toFixed(2)}s`);
    steps.push(
      `Entrance on ${named(enter.targets)}. When an element's top reaches 90% of the viewport, play once: ${ENTER[enter.preset] || enter.preset}. Stagger ${enter.stagger}s in this order: ${delays.join("; ")}.`,
    );
  }
  const reveal = spec.motion?.reveal;
  if (reveal?.targets?.length) {
    steps.push(
      `The same entrance on every ${named(reveal.targets)}, with no extra stagger between instances. Play once when its top reaches 90% of the viewport: ${ENTER[reveal.preset] || reveal.preset}.`,
    );
  }
  const scroll = spec.motion?.scroll;
  if (scroll?.preset === "parallax" && scroll.targets?.length) {
    const strength = scroll.strength ?? 0.15;
    steps.push(
      `Parallax on ${named(scroll.targets)}. Scale to ${1 + strength} and scrub vertical movement of ${strength * 50}% of the element's height while the section travels from top of the viewport to leaving the top. Ease none. Strength ${strength}.`,
    );
  }
  return steps;
}

function interactions(elements) {
  const steps = [];
  const add = (text) => text && steps.push(text);

  if (has(elements, "data-blok-count")) {
    add(`Count-up on ${named(keys(elements, "data-blok-count"))}. When the top reaches 85% of the viewport, count the first number from 0 to its value over 1.8s, ease power2.out, once. Keep the surrounding text.`);
  }
  if (has(elements, "data-blok-marquee")) {
    const speed = attr(elements, "data-blok-speed") || "60";
    const reverse = is(elements, "data-blok-direction", "reverse");
    add(
      `Marquee on ${named(keys(elements, "data-blok-marquee"))}. Duplicate the row so the loop is seamless, then slide by half the track width at ${speed}px per second, ease none, repeating forever${reverse ? ", in reverse" : ""}. On hover, slow to a quarter speed over 0.6s and restore on leave.`,
    );
  }
  if (has(elements, "data-blok-velocity")) {
    add(`While that marquee's section is in view, scroll velocity boosts the loop (timeScale up to 9) and skews the track between -8 and 8 degrees. Settle back over 0.6s about 140ms after scrolling stops.`);
  }
  if (is(elements, "data-blok-split", "words")) {
    add(`Scroll highlight on ${named(keys(elements, "data-blok-split", "words"))}. Split into words. Scrub each word from opacity 0.16 to 1, stagger 0.08, ease none, while the line travels from top 80% to bottom 50% of the viewport.`);
  }
  if (is(elements, "data-blok-split", "rise")) {
    add(`Word rise on ${named(keys(elements, "data-blok-split", "rise"))}. Each word starts 110% below its mask and rises to 0 over 1s, ease power4.out, stagger 0.06s. Play once when the top reaches 92% of the viewport.`);
  }
  if (is(elements, "data-blok-split", "chars")) {
    add(`Character stagger on ${named(keys(elements, "data-blok-split", "chars"))}. Characters rise from 110% inside a mask to 0 over 0.9s, ease power4.out, stagger 0.018s. Play once when the top reaches 90% of the viewport. Do not break a word across lines.`);
  }
  if (is(elements, "data-blok-split", "lines")) {
    add(`Line reveal on ${named(keys(elements, "data-blok-split", "lines"))}. Group the text into lines. Each line rises from 110% inside a mask to 0 over 1s, ease power4.out, stagger 0.08s. Play once when the top reaches 90% of the viewport.`);
  }
  if (is(elements, "data-blok-split", "fill")) {
    add(`Text fill on ${named(keys(elements, "data-blok-split", "fill"))}. Characters scrub from opacity 0.18 to 1, stagger 0.03, ease none, from top 75% to bottom 40% of the viewport.`);
  }
  if (is(elements, "data-blok-split", "scrub")) {
    add(`Text scrub on ${named(keys(elements, "data-blok-split", "scrub"))}. Characters rise from 120% and fade from 0 to 1, stagger 0.03, ease none, scrubbed while the element moves from top 95% to top 40% of the viewport.`);
  }
  if (has(elements, "data-blok-scramble")) {
    add(`Scramble on ${named(keys(elements, "data-blok-scramble"))}. On enter (top 85%) and again on hover, random glyphs resolve into the real characters over 1.15s, ease power2.out. Spaces stay put.`);
  }
  if (has(elements, "data-blok-depth")) {
    const speed = attr(elements, "data-blok-depth") || "0.15";
    add(`Depth on ${named(keys(elements, "data-blok-depth"))}. Scrub vertical movement of ${Number(speed) * 50}% of the element's height across the section, ease none. Speed ${speed}. Negative speed moves the other way. Skip a layer that already follows the pointer.`);
  }
  if (has(elements, "data-blok-pointer")) {
    add(`Pointer parallax on ${named(keys(elements, "data-blok-pointer"))}. On a fine pointer, each ${named(keys(elements, "data-blok-pointer-layer"))} follows the cursor from the center. Travel is its depth value times 70px, eased over 0.7s with power3.out. Return to rest when the pointer leaves. Desktop hover only.`);
  }
  if (is(elements, "data-blok-scroll", "zoom")) {
    add(`Zoom on ${named(keys(elements, "data-blok-scroll", "zoom"))}. Scale from 1.25 to 1, origin center, ease none, scrubbed while the section crosses the viewport.`);
  }
  if (has(elements, "data-blok-expand-media")) {
    add(`Expand media on ${named(keys(elements, "data-blok-expand-media"))}, desktop only (992px and up). Pin the section and scrub the media from a 12% inset with 1rem radius out to the section edges with no radius. Pin distance is 120% of the viewport. Ease none.`);
  }
  if (has(elements, "data-blok-reveal")) {
    add(`Clip reveal on ${named(keys(elements, "data-blok-reveal"))}. Wipe the image in from the bottom (clip from inset 100% 0 0 0 to fully open) over 1.3s, ease power4.inOut. Play once when the top reaches 90% of the viewport.`);
  }
  if (has(elements, "data-blok-trail")) {
    const gap = attr(elements, "data-blok-trail-gap") || "90";
    add(`Image trail on ${named(keys(elements, "data-blok-trail"))}. On hover at 768px and up, drop the next ${named(keys(elements, "data-blok-trail-item"))} along the cursor every ${gap}px. It scales from 0.6 to 1 over 0.5s (power3.out), tilted a few degrees, then fades and scales to 0.9 over 0.6s after a 0.7s delay.`);
  }
  if (has(elements, "data-blok-stack")) {
    add(`Stacking cards on ${named(keys(elements, "data-blok-stack"))}. Each ${named(keys(elements, "data-blok-stack-card"))} is sticky. Later cards sit above earlier ones. As the next card's top moves from 85% to 25% of the viewport, scale the card underneath from 1 to 0.94, origin top center, scrubbed, ease none. Opacity stays 1 the whole time. Do not fade or dim the cards. The top card does not scale.`);
  }
  if (has(elements, "data-blok-hscroll")) {
    add(`Horizontal scroll on ${named(keys(elements, "data-blok-hscroll"))}, desktop only (992px and up). Pin the section and scrub ${named(keys(elements, "data-blok-hscroll-track"))} left by the overflow width, ease none, scrub 0.5. The pin lasts as long as that distance. Below 992px, leave native horizontal scrolling.`);
  }
  if (has(elements, "data-blok-accordion")) {
    const multi = is(elements, "data-blok-accordion", "multi");
    add(`Accordion on ${named(keys(elements, "data-blok-accordion"))}. The first item starts open and the rest start closed. Click or Enter/Space toggles a panel's height and opacity over 0.45s, ease power3.inOut. The icon rotates to 45 degrees when open.${multi ? " Several items may stay open." : " Opening one closes the others."}`);
  }
  if (has(elements, "data-blok-billing")) {
    add(`Billing toggle on ${named(keys(elements, "data-blok-billing"))}. The switch slides over 0.3s, ease power3.out. The inactive label sits at opacity 0.45. Each price slides up and fades out over 0.15s, swaps to the other amount, then slides in from below over 0.25s.`);
  }
  if (has(elements, "data-blok-compare")) {
    add(`Before/after on ${named(keys(elements, "data-blok-compare"))}. Drag, click, or arrow keys move the divider. The after image is clipped from the left. Arrow keys step 2% (10% with Shift). On enter, the divider animates from 12% to 50% over 1.4s, ease power3.inOut, once.`);
  }
  if (has(elements, "data-blok-progress")) {
    add(`Progress on ${named(keys(elements, "data-blok-progress"))}. Scale Y from 0 to 1, origin top, ease none, scrubbed while the parent travels from top 65% to bottom 65% of the viewport.`);
  }
  if (has(elements, "data-blok-fit")) {
    add(`Fit text on ${named(keys(elements, "data-blok-fit"))}. Scale the font so one line fills the container width. Recalculate after fonts load and on resize. This is sizing, not a scroll tween.`);
  }
  if (has(elements, "data-blok-hover-reveal")) {
    add(`Hover reveal on ${named(keys(elements, "data-blok-hover-reveal"))}, at 992px and up with a fine pointer. The media for a row starts hidden at scale 0.85 and follows the cursor, centered on it. On enter it fades in and scales to 1 over 0.4s, ease power3.out, tracking the pointer over 0.5s. On leave it fades and scales back over 0.3s.`);
  }
  if (has(elements, "data-blok-tabs")) {
    add(`Tabs on ${named(keys(elements, "data-blok-tabs"))}. The first panel is visible. Selecting a tab fades the others to opacity 0.45 over 0.25s and brings the panel in from 10px below over 0.4s, ease power3.out. Hide the other panels.`);
  }
  if (has(elements, "data-blok-carousel")) {
    add(`Carousel on ${named(keys(elements, "data-blok-carousel"))}. One slide is visible. Advance every 5s. Previous and next buttons move one slide, and the incoming slide fades in from 16px to the right over 0.4s, ease power3.out. Manual navigation stops the timer.`);
  }
  if (has(elements, "data-blok-filter")) {
    add(`Filter on ${named(keys(elements, "data-blok-filter"))}. Chips show the matching cards and hide the rest. "all" shows every card. No movement, only visibility. The pressed chip is marked.`);
  }
  if (has(elements, "data-blok-spotlight")) {
    add(`Spotlight on ${named(keys(elements, "data-blok-spotlight"))}. When a row's center crosses the viewport center, swap the figure to that row's image: fade out over 0.18s, change the source, fade in over 0.28s.`);
  }
  if (has(elements, "data-blok-expand")) {
    add(`Expand on ${named(keys(elements, "data-blok-expand"))}. The first card starts open. Opening a card closes the others. The panel height and opacity animate over 0.4s, ease power3.inOut.`);
  }
  if (has(elements, "data-blok-lightbox")) {
    add(`Lightbox on ${named(keys(elements, "data-blok-lightbox"))}. Clicking an item opens the dialog with that image and fades the dialog in over 0.3s. Close from the close control, the backdrop, or Escape.`);
  }
  if (has(elements, "data-blok-swap")) {
    const reveal = is(elements, "data-blok-swap", "reveal");
    add(
      `Hover swap on ${named(keys(elements, "data-blok-swap"))}. Pointing at a row crossfades the figure to that row's image (out 0.18s, in 0.28s).${reveal ? " The figure starts closed and grows open over 0.45s, ease power3.out, then closes over 0.28s when the pointer or focus leaves." : ""}`,
    );
  }
  if (has(elements, "data-blok-meters")) {
    add(`Meters on ${named(keys(elements, "data-blok-meters"))}. Each bar scales X from 0 to its value, origin left center, over 1.1s, ease power3.out, when its top reaches 85% of the viewport.`);
  }
  if (has(elements, "data-blok-cycle")) {
    add(`Rotating line on ${named(keys(elements, "data-blok-cycle"))}. Every 2.2s the current word moves up 8px and fades out over 0.22s, then the next word rises from 8px below into place over 0.32s, ease power3.out.`);
  }
  if (has(elements, "data-blok-scrub")) {
    add(`Filmstrip on ${named(keys(elements, "data-blok-scrub"))}. Clicking a thumbnail crossfades the main image (out 0.18s, in 0.28s) and marks that thumbnail current.`);
  }
  if (has(elements, "data-blok-menu")) {
    const overlay = is(elements, "data-blok-menu", "overlay");
    add(
      overlay
        ? `Menu on ${named(keys(elements, "data-blok-menu"))}. It stays closed, including on desktop. Opening fades the panel in over 0.3s and lifts the links from 28px below over 0.55s, stagger 0.06s, ease power3.out. Closing fades the panel out over 0.2s. Escape, an outside click, or a link closes it. Lock page scroll while it is open.`
        : `Menu on ${named(keys(elements, "data-blok-menu"))}. From 992px up the links stay visible. Below that, the toggle opens and closes the panel. Escape, an outside click, or a link closes it.`,
    );
  }
  if (has(elements, "data-blok-drops")) {
    add(`Dropdown on ${named(keys(elements, "data-blok-drops"))}. One panel open at a time. On a fine pointer at 992px and up, hover opens it. Otherwise click, Enter, or Space. The panel fades and moves 6px over about 0.2s. The icon rotates to 45 degrees when open.`);
  }
  if (has(elements, "data-blok-slider")) {
    add(`Slider on ${named(keys(elements, "data-blok-slider"))}. Previous and next move the track by one card over 0.55s, ease power3.out. A button at the end of the range sits at opacity 0.35. Update the count if it is there.`);
  }
  if (has(elements, "data-blok-sides")) {
    add(`Alternate sides on ${named(keys(elements, "data-blok-sides"))} from 992px up. Odd items sit left of center and even items sit right, each about half the width. Below that, stack them full width. No tween.`);
  }
  return steps;
}

/** Prompt for rebuilding this component's motion in Webflow or anywhere else. */
export function animationPrompt(spec) {
  const steps = [...entrance(spec), ...interactions(elementsOf(spec))];
  const body = steps.length
    ? steps.map((step, index) => `${index + 1}. ${step}`).join("\n\n")
    : "This section has no motion. Do not add an entrance, a scroll effect, or a hover interaction.";
  return [
    `Animate only "${spec.name}" (${spec.id}). The section is already laid out. Recreate this motion and nothing else. Do not restyle the layout, type, or colors.`,
    "If the visitor prefers reduced motion, show the finished state immediately and skip movement.",
    "",
    body,
  ].join("\n");
}
