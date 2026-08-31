import { CTASection } from '@/components/CTASection';
import { PageHero } from '@/components/Hero';
import { SectionHeading } from '@/components/SectionHeading';
import { Section } from '@/components/ui';
import { howToApply, openings } from '@/data/join';
import { site } from '@/data/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Join Us',
  description:
    'Opportunities for graduate students, postdoctoral fellows, research assistants and undergraduate students in the Bailey Lab at the RI-MUHC and McGill University.',
  path: '/join',
});

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Join us"
        title="Join the Bailey Lab"
        description="[Introductory paragraph to be added.] This paragraph will describe the lab’s training environment and the kinds of researchers it is looking for."
      />

      <Section labelledBy="openings-heading">
        <SectionHeading
          id="openings-heading"
          eyebrow="Opportunities"
          title="Positions in the lab"
          description="[Overview of current recruitment to be added.]"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {openings.map((opening) => (
            <article
              key={opening.id}
              id={opening.id}
              className="scroll-mt-24 rounded-card border border-line bg-paper p-8 transition-colors duration-300 hover:border-line-strong"
            >
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-semibold tracking-[-0.01em]">
                  {opening.title}
                </h3>
                <span className="rounded-full bg-accent-50 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-accent-700">
                  {opening.status}
                </span>
              </div>

              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                {opening.description}
              </p>

              {opening.points && opening.points.length > 0 ? (
                <ul className="mt-6 space-y-2.5">
                  {opening.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-ink-muted">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </Section>

      <Section tone="canvas" labelledBy="apply-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading id="apply-heading" eyebrow="Applications" title="How to Apply" />
          </div>

          <div className="lg:col-span-7">
            {/* Explicit reviewer-facing warning — remove once the lab approves this copy. */}
            <div
              role="note"
              className="rounded-card border-l-4 border-accent-500 bg-accent-50 p-5"
            >
              <p className="text-sm font-semibold text-accent-800">Pending lab approval</p>
              <p className="mt-1.5 text-sm leading-relaxed text-accent-900/80">
                {howToApply.approvalNotice}
              </p>
            </div>

            <p className="mt-8 max-w-prose text-base leading-relaxed text-ink-soft">
              {howToApply.intro}
            </p>

            <ol className="mt-8 space-y-5">
              {howToApply.steps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line-strong font-display text-sm font-semibold text-ink-muted"
                  >
                    {index + 1}
                  </span>
                  <span className="text-base leading-relaxed text-ink-soft">{step}</span>
                </li>
              ))}
            </ol>

            <p className="mt-8 text-sm text-ink-muted">
              General enquiries:{' '}
              <a
                href={site.socials.email}
                className="font-medium text-accent-700 underline decoration-accent-200 underline-offset-4 transition-colors hover:decoration-accent-600"
              >
                {site.contact.labEmail}
              </a>
            </p>
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="Questions"
        title="Not sure which position fits?"
        description="[Short message to be added.] Prospective applicants are welcome to get in touch to discuss possible projects before applying."
        actions={[{ label: 'Contact Us', href: '/contact' }]}
      />
    </>
  );
}
