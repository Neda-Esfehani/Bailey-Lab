import Link from 'next/link';
import type { ResearchTheme } from '@/data/research';
import { Placeholder } from './Placeholder';

/**
 * Research theme card. The whole card is one link target (via a stretched
 * overlay) so it is a single, descriptive tab stop for keyboard users.
 */
export function ResearchCard({ theme }: { theme: ResearchTheme }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-card border border-line bg-paper transition-all duration-300 ease-subtle hover:-translate-y-1 hover:border-line-strong hover:shadow-card-hover focus-within:-translate-y-1 focus-within:shadow-card-hover">
      <div className="overflow-hidden">
        <Placeholder
          src={theme.image}
          alt={theme.imageAlt}
          ratio="wide"
          rounded={false}
          className="transition-transform duration-500 ease-subtle group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-7">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent-600">
          {theme.category}
        </p>
        <h3 className="mt-3 text-xl font-semibold leading-snug tracking-[-0.01em]">
          <Link
            href={`/research#${theme.id}`}
            className="before:absolute before:inset-0 before:content-['']"
          >
            {theme.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
          {theme.description}
        </p>
        <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700">
          Learn More
          <span
            aria-hidden="true"
            className="transition-transform duration-200 ease-subtle group-hover:translate-x-1"
          >
            →
          </span>
        </p>
      </div>
    </article>
  );
}
