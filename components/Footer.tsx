import Link from 'next/link';
import { contactNavItem, navItems, site } from '@/data/site';
import { withBasePath } from '@/lib/paths';

const externalLinks = [
  { label: 'Email', href: site.socials.email },
  { label: 'Google Scholar', href: site.socials.googleScholar },
  { label: 'PubMed', href: site.socials.pubmed },
  { label: 'LinkedIn', href: site.socials.linkedin },
];

function FundingLogo({ label, src }: { label: string; src: string }) {
  return (
    <div className="flex min-h-36 items-center justify-center rounded-lg border border-line bg-white px-5 py-5">
      {/* Static hosting does not provide Next image optimization. */}
      <img
        src={withBasePath(src)}
        alt={label}
        loading="lazy"
        decoding="async"
        className="max-h-24 w-auto max-w-full object-contain"
      />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Identity + address */}
          <div className="lg:col-span-5">
            <p className="font-display text-xl font-bold tracking-[-0.01em]">
              {site.name}
            </p>
            <address className="mt-4 not-italic text-sm leading-relaxed text-ink-soft">
              {site.institution.institute}
              <br />
              {site.institution.university}
              <br />
              {site.institution.city}
            </address>
          </div>

          {/* Site navigation */}
          <nav aria-label="Footer" className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {[...navItems, contactNavItem].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-soft transition-colors duration-200 hover:text-accent-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* External profiles */}
          <div className="lg:col-span-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
              Connect
            </h2>
            <ul className="mt-4 space-y-2.5">
              {externalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.href.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="text-sm text-ink-soft transition-colors duration-200 hover:text-accent-700"
                  >
                    {link.label}
                    <span className="sr-only"> — {site.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section className="mt-14 border-t border-line pt-10" aria-labelledby="funding-heading">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-600">Support & partnerships</p>
              <h2 id="funding-heading" className="mt-2 text-lg font-semibold text-ink">
                Research made possible by our funders and institutions
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-ink-muted">
              We are grateful to the organizations supporting cancer research, training and care.
            </p>
          </div>
          <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            <FundingLogo label="Canadian Cancer Society" src="/logos/CCS_logo.svg" />
            <FundingLogo label="Canadian Institutes of Health Research" src="/logos/cihr_logo.jpg" />
            <FundingLogo label="Fonds de recherche du Québec" src="/logos/frq_logo.png" />
            <FundingLogo label="McGill University Health Centre" src="/logos/rimuhc_logo.jpg" />
            <FundingLogo label="McGill University" src="/logos/mcgill_logo.png" />
          </div>
        </section>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-8 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}, {site.institution.instituteShort}.
            All rights reserved.
          </p>
          <p>Website content is placeholder material pending lab review.</p>
        </div>
      </div>
    </footer>
  );
}
