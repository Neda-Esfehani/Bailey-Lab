import type { MetadataRoute } from 'next';
import { contactNavItem, navItems, site } from '@/data/site';

/** Generated at build time into /out/sitemap.xml. */
// Required by `output: 'export'` — this route is generated at build time.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, '');
  return [...navItems, contactNavItem].map((item) => ({
    url: `${base}${item.href === '/' ? '/' : `${item.href}/`}`,
    lastModified: new Date(),
    changeFrequency: item.href === '/' ? 'monthly' : 'monthly',
    priority: item.href === '/' ? 1 : 0.7,
  }));
}
