import type { Metadata } from 'next';
import { site } from '@/data/site';

/**
 * Build per-page metadata (title, description, OpenGraph, Twitter card).
 *
 * Usage in any page.tsx:
 *   export const metadata = pageMetadata({
 *     title: 'Research',
 *     description: '…',
 *     path: '/research',
 *   });
 */
export function pageMetadata({
  title,
  description,
  path = '/',
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const fullTitle = title ? `${title} | ${site.name}` : site.defaultTitle;
  const desc = description ?? site.description;
  const url = `${site.url.replace(/\/$/, '')}${path}`;

  return {
    title: fullTitle,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      siteName: site.name,
      title: fullTitle,
      description: desc,
      url,
      locale: 'en_CA',
      images: [
        {
          url: site.ogImage,
          width: 1200,
          height: 630,
          alt: site.defaultTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
      images: [site.ogImage],
    },
  };
}
