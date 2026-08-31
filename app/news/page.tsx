import { PageHero } from '@/components/Hero';
import { NewsCard } from '@/components/NewsCard';
import { Section } from '@/components/ui';
import { newsSorted } from '@/data/news';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'News',
  description:
    'News and updates from the Bailey Lab — publications, awards, conferences, grants and lab announcements.',
  path: '/news',
});

export default function NewsPage() {
  const items = newsSorted();

  return (
    <>
      <PageHero
        eyebrow="News"
        title="News & updates"
        description="[Introductory paragraph to be added.] Announcements, publications, awards and events from the Bailey Lab."
      />

      <Section>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.id} className="flex">
              <NewsCard item={item} headingLevel="h2" />
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
