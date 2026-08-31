import { ButtonLink } from './ui';

type Action = { label: string; href: string; variant?: 'primary' | 'secondary' };

/** Dark full-width call-to-action band. Used at the foot of most pages. */
export function CTASection({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  actions: Action[];
}) {
  return (
    <section className="bg-ink text-white">
      <div className="container-page py-20 sm:py-24">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h2>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-white/70">
            {description}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {actions.map((action) => (
              <ButtonLink
                key={action.href}
                href={action.href}
                variant={action.variant ?? 'primary'}
                className={
                  action.variant === 'secondary'
                    ? 'border-white/25 bg-transparent text-white hover:border-white hover:text-white'
                    : ''
                }
              >
                {action.label}
              </ButtonLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
