import { withBasePath } from '@/lib/paths';

type Ratio = 'square' | 'photo' | 'wide' | 'panorama';

const ratioClass: Record<Ratio, string> = {
  square: 'aspect-square',
  photo: 'aspect-[4/3]',
  wide: 'aspect-[16/10]',
  panorama: 'aspect-[21/9]',
};

/**
 * Renders a real image when `src` is given, and a clearly-labelled placeholder
 * when it is not. This is what keeps the skeleton looking finished before any
 * photography or figures exist.
 *
 * The placeholder graphic is a faint, non-literal grid — deliberately not a
 * DNA helix or other stock biotech motif.
 */
export function Placeholder({
  src,
  alt,
  label = '[Scientific image]',
  ratio = 'wide',
  className = '',
  rounded = true,
  priority = false,
}: {
  src?: string;
  alt?: string;
  label?: string;
  ratio?: Ratio;
  className?: string;
  rounded?: boolean;
  priority?: boolean;
}) {
  const shape = `${ratioClass[ratio]} ${rounded ? 'rounded-card' : ''}`;

  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- static export: no image optimizer available on GitHub Pages
      <img
        src={withBasePath(src)}
        alt={alt ?? ''}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`${shape} w-full object-cover bg-canvas ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt ?? label}
      className={`${shape} relative w-full overflow-hidden border border-line bg-canvas ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(15,97,105,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,97,105,0.10) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div aria-hidden="true" className="absolute inset-0 grid place-items-center p-4">
        <span className="rounded-full border border-line-strong bg-paper/85 px-3 py-1 text-center text-[0.7rem] font-medium uppercase tracking-[0.14em] text-ink-muted">
          {label}
        </span>
      </div>
    </div>
  );
}

/** Circular avatar variant used by PersonCard. */
export function AvatarPlaceholder({
  src,
  name,
  className = '',
}: {
  src?: string;
  name: string;
  className?: string;
}) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- static export: no image optimizer available on GitHub Pages
      <img
        src={withBasePath(src)}
        alt={`Portrait of ${name}`}
        loading="lazy"
        decoding="async"
        className={`aspect-square w-full rounded-card object-cover bg-canvas ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`Placeholder portrait for ${name}`}
      className={`aspect-square w-full rounded-card border border-line bg-canvas grid place-items-center ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 64 64"
        className="h-1/3 w-1/3 text-ink-faint"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <circle cx="32" cy="24" r="11" />
        <path d="M10 58c3.5-12 11.5-18 22-18s18.5 6 22 18" />
      </svg>
    </div>
  );
}
