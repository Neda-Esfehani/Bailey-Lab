import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

// Required by `output: 'export'` — this route is generated at build time.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${site.url.replace(/\/$/, '')}/sitemap.xml`,
  };
}
