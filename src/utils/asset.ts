/**
 * Resolves a path to a file in `public/` against Vite's configured base URL.
 *
 * Vite automatically prepends `base` to asset references inside index.html
 * and to anything imported as a module, but it does NOT rewrite plain
 * string literals used at runtime in application code (e.g.
 * `<img src="/images/foo.webp" />`). On a GitHub Pages *project* site
 * (served from `/<repo-name>/...`), those un-rewritten absolute paths
 * resolve to the wrong URL. This helper fixes that everywhere images are
 * referenced from data files or components.
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL ?? "/";
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
}
