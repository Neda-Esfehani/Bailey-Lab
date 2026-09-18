import { CTASection } from '@/components/CTASection';
import { PageHero } from '@/components/Hero';
import { SectionHeading } from '@/components/SectionHeading';
import { ButtonLink, Section } from '@/components/ui';
import { howToApply } from '@/data/join';
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
        description="Join a curious team decoding cancer biology through genomics, epigenomics and collaboration."
      />

      <Section tone="canvas" labelledBy="apply-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              id="apply-heading"
              eyebrow="Applications"
              title="How to Apply"
              description={howToApply.intro}
            />
          </div>

          <div className="lg:col-span-7">
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

            <div className="mt-10 rounded-card border border-accent-200 bg-paper p-6 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-600">
                Ready to apply?
              </p>
              <p className="mt-2 text-base font-semibold text-ink">
                Submit your profile through the Bailey Lab application form.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                The form will guide you through your contact information, interests and CV upload.
              </p>
              <ButtonLink href={howToApply.formUrl} className="mt-5">
                Open the application form
              </ButtonLink>
            </div>

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
        title="Have questions?"
        description="Prospective applicants are welcome to get in touch if they would like to discuss the lab or the application process."
        actions={[{ label: 'Contact Us', href: '/contact' }]}
      />
    </>
  );
}
