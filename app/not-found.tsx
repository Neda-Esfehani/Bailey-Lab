import { ButtonLink } from '@/components/ui';

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col justify-center py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
        Error 404
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-[-0.025em] sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-5 max-w-prose text-lg text-ink-soft">
        The page you are looking for does not exist or may have been moved.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/">Return home</ButtonLink>
        <ButtonLink href="/research" variant="secondary">
          Explore our research
        </ButtonLink>
      </div>
    </div>
  );
}
