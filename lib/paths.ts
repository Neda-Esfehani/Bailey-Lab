/**
 * Prefix a public asset path with the deployment base path.
 *
 * Next.js rewrites <Link href> automatically, but NOT plain string paths to
 * files in /public (image `src`, favicons, downloadable PDFs). Always wrap
 * those with this helper so the site works both at
 * `username.github.io/bailey-lab-website/` and at a custom domain root.
 *
 *   <img src={withBasePath('/images/people/jane-doe.jpg')} />
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function withBasePath(path: string): string {
  if (!path) return path;
  // Leave absolute URLs (https://…, mailto:, //cdn…) untouched.
  if (/^([a-z][a-z0-9+.-]*:|\/\/)/i.test(path)) return path;
  const normalised = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${normalised}`;
}
