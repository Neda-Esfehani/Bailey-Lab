import { PageHero } from '@/components/Hero';
import { Section } from '@/components/ui';
import { site } from '@/data/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Contact',
  description:
    'Contact the Bailey Lab at the Research Institute of the McGill University Health Centre and McGill University, Montreal, Quebec, Canada.',
  path: '/contact',
});

function DetailBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-line pt-6">
      <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
        {title}
      </h2>
      <div className="mt-3 text-base leading-relaxed text-ink-soft">{children}</div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="[Introductory paragraph to be added.] Enquiries about research, collaborations, media and trainee positions are all welcome."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-10 lg:col-span-7">
            <DetailBlock title="Lab address">
              <address className="not-italic">
                {site.name}
                <br />
                {site.institution.institute}
                <br />
                {site.contact.addressLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </address>
              <p className="mt-4">
                <a
                  href={site.contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-accent-700 underline decoration-accent-200 underline-offset-4 transition-colors hover:decoration-accent-600"
                >
                  View location on a map
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </p>
            </DetailBlock>

            <DetailBlock title="General enquiries">
              <p>
                <a
                  href={site.socials.email}
                  className="link-underline font-medium text-accent-700"
                >
                  {site.contact.labEmail}
                </a>
              </p>
              <p className="mt-1.5 text-sm text-ink-muted">{site.contact.phone}</p>
            </DetailBlock>

            <DetailBlock title="Principal Investigator">
              <p className="font-medium text-ink">{site.contact.piName}</p>
              <p className="mt-1.5">
                <a
                  href={`mailto:${site.contact.piEmail}`}
                  className="link-underline text-accent-700"
                >
                  {site.contact.piEmail}
                </a>
              </p>
            </DetailBlock>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-card border border-line bg-canvas p-8">
              <h2 className="font-display text-lg font-semibold">Institutional links</h2>
              <ul className="mt-5 space-y-3">
                {site.institutionalLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ink-soft underline decoration-line-strong underline-offset-4 transition-colors duration-200 hover:text-accent-700 hover:decoration-accent-600"
                    >
                      {link.label}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>

              <h2 className="mt-9 font-display text-lg font-semibold">Profiles</h2>
              <ul className="mt-5 space-y-3">
                <li>
                  <a
                    href={site.socials.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-soft underline decoration-line-strong underline-offset-4 transition-colors duration-200 hover:text-accent-700 hover:decoration-accent-600"
                  >
                    Google Scholar
                  </a>
                </li>
                <li>
                  <a
                    href={site.socials.pubmed}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-soft underline decoration-line-strong underline-offset-4 transition-colors duration-200 hover:text-accent-700 hover:decoration-accent-600"
                  >
                    PubMed
                  </a>
                </li>
                <li>
                  <a
                    href={site.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-soft underline decoration-line-strong underline-offset-4 transition-colors duration-200 hover:text-accent-700 hover:decoration-accent-600"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>

              <p className="mt-9 border-t border-line pt-6 text-sm leading-relaxed text-ink-muted">
                All contact details on this page are placeholders and must be replaced in{' '}
                <code className="rounded bg-paper px-1.5 py-0.5">data/site.ts</code>{' '}
                before publication.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
