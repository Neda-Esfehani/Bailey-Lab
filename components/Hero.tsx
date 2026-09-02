import { Placeholder } from './Placeholder';
import { ButtonLink } from './ui';
import { withBasePath } from '@/lib/paths';

type HeroAction = { label: string; href: string; variant?: 'primary' | 'secondary' };

/**
 * Homepage hero — large type on the left, scientific visual on the right.
 * Collapses to a single stacked column below `lg`.
 */
export function Hero({
  eyebrow,
  title,
  tagline,
  description,
  actions = [],
  image,
  imageAlt,
}: {
  eyebrow?: string;
  title: string;
  tagline: string;
  description: string;
  actions?: HeroAction[];
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="hero-shell relative overflow-hidden border-b border-line bg-paper">
      {/* Very subtle grid wash — keeps the hero from feeling empty without decoration. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(22,25,29,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(22,25,29,0.045) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(70% 60% at 30% 0%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(70% 60% at 30% 0%, black, transparent)',
        }}
      />

      <div className="container-page relative py-20 sm:py-24 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="animate-fade-up lg:col-span-6">
            {eyebrow ? (
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                {eyebrow}
              </p>
            ) : null}

            <h1 className="text-5xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              {title}
            </h1>

            <p className="mt-6 max-w-xl font-display text-xl font-medium leading-snug text-ink-soft sm:text-2xl">
              {tagline}
            </p>

            <p className="mt-5 max-w-prose text-base leading-relaxed text-ink-muted sm:text-lg">
              {description}
            </p>

            {actions.length > 0 ? (
              <div className="mt-10 flex flex-wrap gap-3">
                {actions.map((action) => (
                  <ButtonLink
                    key={action.href}
                    href={action.href}
                    variant={action.variant ?? 'primary'}
                  >
                    {action.label}
                  </ButtonLink>
                ))}
              </div>
            ) : null}
          </div>

          <div className="animate-fade-in lg:col-span-6">
            <Placeholder
              src={image}
              alt={imageAlt}
              label="[Scientific image]"
              ratio="photo"
              priority
              className="shadow-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Compact hero used at the top of every interior page. */
export function PageHero({
  eyebrow,
  title,
  description,
  backgroundImage,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  backgroundImage?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-canvas">
      {backgroundImage ? (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${withBasePath(backgroundImage)})` }}
          />
          <div aria-hidden="true" className="absolute inset-0 bg-ink/75" />
        </>
      ) : null}
      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        <div className={`max-w-3xl animate-fade-up ${backgroundImage ? 'text-white' : ''}`}>
          {eyebrow ? (
            <p className={`mb-4 text-xs font-semibold uppercase tracking-[0.18em] ${backgroundImage ? 'text-accent-200' : 'text-accent-600'}`}>
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className={`mt-6 max-w-prose text-lg leading-relaxed ${backgroundImage ? 'text-white/85' : 'text-ink-soft'}`}>
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
