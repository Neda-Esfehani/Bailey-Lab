import { CTASection } from '@/components/CTASection';
import { PageHero } from '@/components/Hero';
import { Placeholder } from '@/components/Placeholder';
import { Section } from '@/components/ui';
import { researchThemes } from '@/data/research';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Research',
  description:
    'Research themes of the Bailey Lab: cancer genomics, epigenomics and gene regulation, and computational cancer biology.',
  path: '/research',
});

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Research"
        description="[Introductory paragraph to be added.] This paragraph will describe the overall research programme of the Bailey Lab and how the three themes below connect."
      />

      {/* On-page navigation between themes */}
      <nav aria-label="Research themes" className="border-b border-line bg-paper">
        <div className="container-page">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 py-5">
            {researchThemes.map((theme) => (
              <li key={theme.id}>
                <a
                  href={`#${theme.id}`}
                  className="text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-accent-700"
                >
                  {theme.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {researchThemes.map((theme, index) => (
        <Section
          key={theme.id}
          id={theme.id}
          tone={index % 2 === 0 ? 'paper' : 'canvas'}
          labelledBy={`${theme.id}-heading`}
          className="scroll-mt-24"
        >
          <div
            className={`grid items-start gap-10 lg:grid-cols-12 lg:gap-16 ${
              index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
            }`}
          >
            <div className="lg:col-span-6">
              <Placeholder
                src={theme.image}
                alt={theme.imageAlt}
                ratio="photo"
                className="shadow-card"
              />
            </div>

            <div className="lg:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                {theme.category}
              </p>
              <h2
                id={`${theme.id}-heading`}
                className="mt-4 text-3xl font-semibold leading-[1.12] tracking-[-0.02em] sm:text-4xl"
              >
                {theme.title}
              </h2>

              {theme.longDescription.map((paragraph, paragraphIndex) => (
                <p
                  key={paragraphIndex}
                  className="mt-5 max-w-prose text-base leading-relaxed text-ink-soft"
                >
                  {paragraph}
                </p>
              ))}

              {theme.highlights && theme.highlights.length > 0 ? (
                <div className="mt-8">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                    Key questions and approaches
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {theme.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-base leading-relaxed text-ink-soft"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {/* Space reserved for future project listings under each theme. */}
              <div className="mt-10 rounded-card border border-dashed border-line-strong p-6">
                <h3 className="text-sm font-semibold text-ink">Projects</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  [Project summaries to be added.] Individual projects, datasets and
                  software released under this theme can be listed here.
                </p>
              </div>
            </div>
          </div>
        </Section>
      ))}

      <CTASection
        eyebrow="Collaborate"
        title="Interested in working with us?"
        description="[Short collaboration message to be added.] The lab welcomes collaborations across the RI-MUHC, McGill University and beyond."
        actions={[
          { label: 'Contact Us', href: '/contact' },
          { label: 'View Opportunities', href: '/join', variant: 'secondary' },
        ]}
      />
    </>
  );
}
