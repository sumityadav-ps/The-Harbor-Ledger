/** Join a path with Astro base (safe when BASE_URL has no trailing slash). */
export function withBase(path = ''): string {
  const raw = import.meta.env.BASE_URL || '/';
  const base = raw.endsWith('/') && raw.length > 1 ? raw.slice(0, -1) : raw;
  if (!path || path === '/') return base === '' ? '/' : base;
  const clean = path.replace(/^\//, '');
  if (base === '/') return `/${clean}`;
  return `${base}/${clean}`;
}
