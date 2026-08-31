import { formatNewsDate, type NewsItem } from '@/data/news';
import { Placeholder } from './Placeholder';

/**
 * `headingLevel` keeps the document outline correct: cards sit under an <h2>
 * on the homepage (so they are <h3>), but directly under the <h1> on /news.
 */
export function NewsCard({
  item,
  headingLevel = 'h3',
}: {
  item: NewsItem;
  headingLevel?: 'h2' | 'h3';
}) {
  const Heading = headingLevel;
  const isExternal = item.link?.startsWith('http');

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-card border border-line bg-paper transition-all duration-300 ease-subtle hover:-translate-y-1 hover:border-line-strong hover:shadow-card-hover focus-within:-translate-y-1 focus-within:shadow-card-hover">
      <div className="overflow-hidden">
        <Placeholder
          src={item.image}
          alt={item.imageAlt}
          label="[Image]"
          ratio="wide"
          rounded={false}
          className="transition-transform duration-500 ease-subtle group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
          <span className="rounded-full bg-accent-50 px-2.5 py-1 font-semibold uppercase tracking-[0.1em] text-accent-700">
            {item.category}
          </span>
          <time dateTime={item.date} className="text-ink-muted">
            {formatNewsDate(item.date)}
          </time>
        </div>

        <Heading className="mt-4 text-lg font-semibold leading-snug tracking-[-0.01em]">
          {item.link ? (
            <a
              href={item.link}
              {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="before:absolute before:inset-0 before:content-[''] group-hover:text-accent-700"
            >
              {item.title}
              {isExternal ? <span className="sr-only"> (opens in a new tab)</span> : null}
            </a>
          ) : (
            item.title
          )}
        </Heading>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
          {item.description}
        </p>
      </div>
    </article>
  );
}
