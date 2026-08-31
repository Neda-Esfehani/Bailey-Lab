import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ease-subtle';

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    'bg-accent-600 text-white hover:bg-accent-700 active:bg-accent-800 shadow-sm hover:shadow-md',
  secondary:
    'border border-line-strong bg-paper text-ink hover:border-accent-600 hover:text-accent-700',
  ghost: 'text-ink hover:text-accent-700',
};

/** Internal or external call-to-action button. */
export function ButtonLink({
  href,
  variant = 'primary',
  className = '',
  children,
  ...rest
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, 'href' | 'className' | 'children'>) {
  const classes = `${buttonBase} ${buttonVariants[variant]} ${className}`;
  const isExternal = /^(https?:|mailto:|tel:)/i.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith('http')
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

/** Small "Learn more →" style text link with an animated arrow. */
export function ArrowLink({
  href,
  children,
  className = '',
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700 transition-colors duration-200 hover:text-accent-800 ${className}`}
    >
      <span className="underline decoration-accent-200 underline-offset-4 transition-colors group-hover:decoration-accent-600">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="transition-transform duration-200 ease-subtle group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}

/** Muted uppercase category / metadata tag. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-canvas px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-ink-muted">
      {children}
    </span>
  );
}

/** Alternating page section wrapper — handles vertical rhythm in one place. */
export function Section({
  children,
  tone = 'paper',
  className = '',
  id,
  labelledBy,
}: {
  children: ReactNode;
  tone?: 'paper' | 'canvas' | 'ink';
  className?: string;
  id?: string;
  labelledBy?: string;
}) {
  const tones = {
    paper: 'bg-paper',
    canvas: 'bg-canvas',
    ink: 'bg-ink text-white',
  } as const;

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${tones[tone]} py-20 sm:py-24 lg:py-28 ${className}`}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}
