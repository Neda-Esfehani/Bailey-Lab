import Link from 'next/link';
import { contactNavItem, navItems, site } from '@/data/site';

const externalLinks = [
  { label: 'Email', href: site.socials.email },
  { label: 'Google Scholar', href: site.socials.googleScholar },
  { label: 'PubMed', href: site.socials.pubmed },
  { label: 'LinkedIn', href: site.socials.linkedin },
];

/** Placeholder institutional logo tile. Swap for an <img> once assets exist. */
function LogoPlaceholder({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label={`${label} logo placeholder`}
      className="flex h-14 min-w-[9rem] items-center justify-center rounded-lg border border-line px-4 text-center text-[0.7rem] font-medium uppercase tracking-[0.12em] text-ink-faint"
    >
      {label}
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

        {/* Institutional logos — replace with real assets in /public/logos */}
        <div className="mt-14 flex flex-wrap items-center gap-4 border-t border-line pt-10">
          <LogoPlaceholder label="RI-MUHC logo" />
          <LogoPlaceholder label="McGill University logo" />
        </div>

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
