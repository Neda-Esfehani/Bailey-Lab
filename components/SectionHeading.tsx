type Props = {
  /** Small label above the heading, e.g. 'Research'. */
  eyebrow?: string;
  title: string;
  description?: string;
  /** Heading level — keeps the document outline correct on every page. */
  as?: 'h1' | 'h2' | 'h3';
  align?: 'left' | 'center';
  className?: string;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  as: Tag = 'h2',
  align = 'left',
  className = '',
  id,
}: Props) {
  const sizes =
    Tag === 'h1'
      ? 'text-4xl sm:text-5xl lg:text-6xl'
      : 'text-3xl sm:text-4xl lg:text-[2.75rem]';

  return (
    <div
      className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}
    >
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
          {eyebrow}
        </p>
      ) : null}
      <Tag id={id} className={`${sizes} font-semibold leading-[1.12] tracking-[-0.02em]`}>
        {title}
      </Tag>
      {description ? (
        <p
          className={`mt-5 text-lg leading-relaxed text-ink-soft ${align === 'center' ? 'mx-auto' : ''} max-w-prose`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
