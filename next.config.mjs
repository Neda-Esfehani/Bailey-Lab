/**
 * Next.js configuration — static export for GitHub Pages.
 *
 * DEPLOYMENT PATHS
 * ----------------
 * The site can be served from either location without code changes:
 *
 *  1. Project page:  https://<user>.github.io/bailey-lab-website/
 *     -> set NEXT_PUBLIC_BASE_PATH=/bailey-lab-website at build time.
 *     (The GitHub Actions workflow does this automatically.)
 *
 *  2. Custom domain (e.g. https://baileylab.ca) or a <user>.github.io root site:
 *     -> leave NEXT_PUBLIC_BASE_PATH empty.
 *
 * Always reference images/assets through `withBasePath()` in lib/paths.ts
 * so both cases keep working.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  // GitHub Pages is a static host: the Next.js image optimizer cannot run there.
  images: { unoptimized: true },
  // Emit /about/index.html instead of /about.html so static hosts resolve clean URLs.
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
