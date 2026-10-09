// Types for authoring component specs, framework profiles and project config.
// Specs are plain JS; add `/** @type {import("../src/types").ComponentSpec} */` above the
// default export to get autocomplete and checking in Cursor.

export type StyleMap = Record<string, string>;

/** Mobile-first: `base`, then overrides at md (>=768px) and lg (>=992px). Longhand properties only. */
export interface ResponsiveStyle {
  base: StyleMap;
  md?: StyleMap;
  lg?: StyleMap;
}

export type FieldType = "text" | "image" | "link";
export interface ImageValue { src: string; alt?: string }
export interface ButtonItem { title: string; href?: string; variant?: ButtonVariant }
export type ButtonVariant = "primary" | "dark" | "secondary" | "secondary-alt";

export type PropSpec =
  | { type: "text"; default: string; description?: string }
  | { type: "link"; default: string; description?: string }
  | { type: "image"; default: ImageValue; priority?: boolean; description?: string }
  | { type: "boolean"; default: boolean; description?: string }
  | { type: "buttons"; default: ButtonItem[]; max?: number; description?: string }
  | { type: "list"; fields: Record<string, FieldType>; default: Record<string, any>[]; description?: string };

/** Structural layer. Its classes and styles come from the framework profile. */
export interface RoleNode {
  role: "section" | "gutter" | "container" | "section-padding";
  key?: string;
  size?: "small" | "medium" | "large";
  style?: ResponsiveStyle; // only meaningful on role: "section"
  attrs?: Record<string, string>;
  /** Boolean prop name, or "!name" to invert. Omitted when the prop is true. */
  if?: string;
  children?: SpecNode[];
}

/** Component element. Class name is built by the framework from the spec prefix + key. */
export interface ElementNode {
  tag: "div" | "h1" | "h2" | "h3" | "h4" | "p" | "a" | "img";
  key: string;
  style?: ResponsiveStyle;
  /** Prop name, "item.<field>" inside a list, or "@index" (01, 02, …). */
  bind?: string;
  /** Static text that is not editable content (separators, glyphs). */
  text?: string;
  /** For tag "a": prop name, "item.<field>", or a literal URL. */
  href?: string;
  /** Prop name of a `buttons` or `list` prop. A list node has exactly one child: the item template. */
  repeat?: string;
  /** Hidden from assistive tech (aria-hidden). */
  decorative?: boolean;
  /** Extra attributes, e.g. runtime behaviours: { "data-forge-marquee": "" }. */
  attrs?: Record<string, string>;
  /** Boolean prop name, or "!name" to invert. Omitted when the prop is true. */
  if?: string;
  children?: SpecNode[];
}

export type SpecNode = RoleNode | ElementNode;

export interface MotionSpec {
  /** Staggered entrance for these keys, played when scrolled into view. */
  enter?: { preset: "fade-up" | "fade"; stagger: number; targets: string[] };
  /** Same entrance for every instance of these keys (use for list items). */
  reveal?: { preset: "fade-up" | "fade"; targets: string[] };
  /** Scroll-linked effects. */
  scroll?: { preset: "parallax"; targets: string[]; strength: number };
}

/** One choice inside a variant group. `null` means the base styles, with no combo class. */
export interface VariantOption {
  label?: string;
  /** Style overrides keyed by element key. `"section"` is the root. */
  styles?: Record<string, ResponsiveStyle>;
  /** Remap button variants, e.g. `{ dark: "primary" }`. */
  buttons?: Record<string, string>;
}

export interface VariantGroup {
  label?: string;
  default: string;
  options: Record<string, VariantOption | null>;
}

export interface ComponentSpec {
  id: string;
  prefix: string;
  name: string;
  category: "hero" | "features" | "stats" | "work" | "testimonial" | "cta" | string;
  description: string;
  props: Record<string, PropSpec>;
  /** Theme, layout, size, and other choices. Option names become combo classes. */
  variants?: Record<string, VariantGroup>;
  motion?: MotionSpec;
  tree: RoleNode;
}

export interface FrameworkProfile {
  name: string;
  label: string;
  sectionClass: (prefix: string) => string;
  elementClass: (prefix: string, key: string) => string;
  /** Return a utility class name (styles from `utilities`) or a scoped class with its own style. */
  roles: Record<"gutter" | "container" | "section-padding", (size: string | undefined, prefix: string) => string | { class: string; style: ResponsiveStyle }>;
  utilities: Record<string, ResponsiveStyle>;
  button: { base: string; modifier: (variant: string) => string };
  /** Combo class for a variant option on one element. */
  variantClass?: (args: { prefix: string; key: string; elementClass: string; group: string; option: string }) => string;
}

export type TokenValue = string | { value: string; css?: string };

export interface ForgeConfig {
  /** Framework profile name from /frameworks. */
  framework: string;
  /** Frameworks to build in addition to the default (for the gallery and dist). */
  frameworks?: string[];
  targets?: Array<"react" | "astro" | "html" | "vanilla" | "webflow">;
  /** Override token values, or map them onto your project's CSS variables with { value, css }. */
  tokens?: Record<string, TokenValue>;
  /** Override or replace framework utility values so Webflow pastes don't collide. */
  utilities?: Record<string, ResponsiveStyle>;
  classes?: {
    button?: {
      /** Base class, e.g. "button" or "btn". */
      base?: string;
      /** Extra classes per variant, e.g. { "secondary-alt": ["is-secondary", "is-alternate"] }. */
      variants?: Partial<Record<ButtonVariant, string | string[]>>;
      /** "forge" ships button styles; "none" assumes your project already styles these classes. */
      styles?: "forge" | "none";
    };
  };
}
