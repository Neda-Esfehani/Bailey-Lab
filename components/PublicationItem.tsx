import type { Publication } from '@/data/publications';

/** Bold any author name wrapped in **double asterisks** in the data file. */
function renderAuthors(authors: string) {
  return authors.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={index} className="font-semibold text-ink">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={index}>{part}</span>
    ),
  );
}

function ResourceLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs font-medium uppercase tracking-[0.1em] text-ink-muted underline decoration-line-strong underline-offset-4 transition-colors duration-200 hover:text-accent-700 hover:decoration-accent-600"
    >
      {children}
    </a>
  );
}

/**
 * One bibliography entry. Deliberately typographic rather than a card —
 * a publication list should read like a CV, not a feed.
 */
export function PublicationItem({ publication }: { publication: Publication }) {
  const doiUrl = publication.doi ? `https://doi.org/${publication.doi}` : undefined;
  const primaryUrl = doiUrl ?? publication.pubmedUrl ?? publication.pdfUrl;

  return (
    <article className="group border-b border-line py-7 last:border-b-0">
      <h3 className="text-lg font-semibold leading-snug tracking-[-0.01em]">
        {primaryUrl ? (
          <a
            href={primaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-accent-700"
          >
            {publication.title}
          </a>
        ) : (
          publication.title
        )}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        {renderAuthors(publication.authors)}
      </p>

      <p className="mt-1.5 text-sm text-ink-soft">
        <em className="not-italic font-medium">{publication.journal}</em>
        <span aria-hidden="true"> · </span>
        {publication.year}
        {publication.note ? (
          <>
            <span aria-hidden="true"> · </span>
            <span className="text-ink-muted">{publication.note}</span>
          </>
        ) : null}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
        {doiUrl ? <ResourceLink href={doiUrl}>DOI</ResourceLink> : null}
        {publication.pubmedUrl ? (
          <ResourceLink href={publication.pubmedUrl}>PubMed</ResourceLink>
        ) : null}
        {publication.pdfUrl ? <ResourceLink href={publication.pdfUrl}>PDF</ResourceLink> : null}
      </div>
    </article>
  );
}

/** Condensed variant for the homepage "Latest publications" band. */
export function PublicationPreview({ publication }: { publication: Publication }) {
  const url = publication.doi
    ? `https://doi.org/${publication.doi}`
    : publication.pubmedUrl;

  return (
    <article className="grid gap-2 border-b border-line py-7 last:border-b-0 sm:grid-cols-12 sm:gap-6">
      <p className="font-display text-sm font-semibold text-ink-muted sm:col-span-2">
        {publication.year}
      </p>
      <div className="sm:col-span-10">
        <h3 className="text-base font-semibold leading-snug">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-accent-700"
            >
              {publication.title}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            publication.title
          )}
        </h3>
        <p className="mt-1.5 text-sm text-ink-muted">{publication.authors}</p>
        <p className="mt-1 text-sm text-ink-soft">{publication.journal}</p>
      </div>
    </article>
  );
}
