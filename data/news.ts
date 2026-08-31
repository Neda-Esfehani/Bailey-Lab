/**
 * News and lab updates.
 *
 * ⚠️ PLACEHOLDER CONTENT — no real awards, grants or events have been invented.
 *
 * To add an item, append an object below. `newsSorted()` orders by date
 * (newest first), so the array order does not matter.
 */

export type NewsCategory =
  | 'Publication'
  | 'Award'
  | 'Conference'
  | 'Lab News'
  | 'Grant';

export type NewsItem = {
  id: string;
  title: string;
  /** ISO date, e.g. '2026-05-14'. */
  date: string;
  category: NewsCategory;
  description: string;
  /** Path under /public/images/news, e.g. '/images/news/retreat.jpg'. Omit for a placeholder. */
  image?: string;
  imageAlt?: string;
  /** Optional external link (paper, press release, event page). */
  link?: string;
};

export const news: NewsItem[] = [
  {
    id: 'news-1',
    title: '[News headline to be added]',
    date: '2026-06-02',
    category: 'Publication',
    description:
      '[News description to be added.] A short summary of the update, two or three sentences long.',
    imageAlt: 'Placeholder image for a lab news item',
  },
  {
    id: 'news-2',
    title: '[News headline to be added]',
    date: '2026-04-18',
    category: 'Award',
    description:
      '[News description to be added.] A short summary of the update, two or three sentences long.',
    imageAlt: 'Placeholder image for a lab news item',
  },
  {
    id: 'news-3',
    title: '[News headline to be added]',
    date: '2026-03-05',
    category: 'Conference',
    description:
      '[News description to be added.] A short summary of the update, two or three sentences long.',
    imageAlt: 'Placeholder image for a lab news item',
  },
  {
    id: 'news-4',
    title: '[News headline to be added]',
    date: '2026-01-22',
    category: 'Lab News',
    description:
      '[News description to be added.] A short summary of the update, two or three sentences long.',
    imageAlt: 'Placeholder image for a lab news item',
  },
  {
    id: 'news-5',
    title: '[News headline to be added]',
    date: '2025-11-09',
    category: 'Grant',
    description:
      '[News description to be added.] A short summary of the update, two or three sentences long.',
    imageAlt: 'Placeholder image for a lab news item',
  },
  {
    id: 'news-6',
    title: '[News headline to be added]',
    date: '2025-09-30',
    category: 'Publication',
    description:
      '[News description to be added.] A short summary of the update, two or three sentences long.',
    imageAlt: 'Placeholder image for a lab news item',
  },
];

export function newsSorted(): NewsItem[] {
  return [...news].sort((a, b) => b.date.localeCompare(a.date));
}

/** The three most recent items, for the homepage. */
export const latestNews: NewsItem[] = newsSorted().slice(0, 3);

/** Consistent, locale-stable date formatting (avoids server/client mismatch). */
export function formatNewsDate(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
