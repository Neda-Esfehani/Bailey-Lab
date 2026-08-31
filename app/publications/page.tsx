import { PageHero } from '@/components/Hero';
import { PublicationItem } from '@/components/PublicationItem';
import { Section } from '@/components/ui';
import { publicationsByYear } from '@/data/publications';
import { site } from '@/data/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Publications',
  description:
    'Peer-reviewed publications and preprints from the Bailey Lab at the RI-MUHC and McGill University.',
  path: '/publications',
});

export default function PublicationsPage() {
  const grouped = publicationsByYear();

  return (
    <>
      <PageHero
        eyebrow="Publications"
        title="Publications"
        description="[Introductory paragraph to be added.] A complete list of the lab’s peer-reviewed publications and preprints, organised by year."
      />

      {/* Jump-to-year navigation */}
      <nav aria-label="Publication years" className="border-b border-line bg-paper">
        <div className="container-page">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 py-5">
            {grouped.map(({ year }) => (
              <li key={year}>
                <a
                  href={`#year-${year}`}
                  className="text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-accent-700"
                >
                  {year}
                </a>
              </li>
            ))}
            <li className="ml-auto">
              <a
                href={site.socials.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-accent-700 underline decoration-accent-200 underline-offset-4 transition-colors hover:decoration-accent-600"
              >
                Full list on Google Scholar
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <Section>
        <div className="max-w-4xl">
          {grouped.map(({ year, items }) => (
            <section
              key={year}
              id={`year-${year}`}
              aria-labelledby={`year-${year}-heading`}
              className="scroll-mt-28 pb-14 last:pb-0"
            >
              <h2
                id={`year-${year}-heading`}
                className="border-b-2 border-ink pb-3 font-display text-2xl font-bold tracking-[-0.01em]"
              >
                {year}
              </h2>
              <div>
                {items.map((publication) => (
                  <PublicationItem key={publication.id} publication={publication} />
                ))}
              </div>
            </section>
          ))}

          <p className="mt-6 rounded-card border border-dashed border-line-strong p-5 text-sm leading-relaxed text-ink-muted">
            All entries above are placeholder records. Replace them in{' '}
            <code className="rounded bg-canvas px-1.5 py-0.5">data/publications.ts</code>.
          </p>
        </div>
      </Section>
    </>
  );
}
