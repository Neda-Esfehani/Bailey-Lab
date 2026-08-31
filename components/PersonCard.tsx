import type { Person } from '@/data/people';
import { AvatarPlaceholder } from './Placeholder';

/** Small labelled profile links (email, LinkedIn, Scholar, website). */
function ProfileLinks({ person, compact = false }: { person: Person; compact?: boolean }) {
  const links = [
    person.email ? { label: 'Email', href: person.email } : null,
    person.scholar ? { label: 'Google Scholar', href: person.scholar } : null,
    person.linkedin ? { label: 'LinkedIn', href: person.linkedin } : null,
    person.website ? { label: 'Website', href: person.website } : null,
  ].filter(Boolean) as { label: string; href: string }[];

  if (links.length === 0) return null;

  return (
    <ul className={`flex flex-wrap gap-x-4 gap-y-2 ${compact ? 'mt-4' : 'mt-6'}`}>
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            {...(link.href.startsWith('http')
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
            className="text-xs font-medium uppercase tracking-[0.1em] text-ink-muted underline decoration-line-strong underline-offset-4 transition-colors duration-200 hover:text-accent-700 hover:decoration-accent-600"
          >
            {link.label}
            <span className="sr-only"> — {person.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

/**
 * Standard grid card for lab members.
 * `compact` (used in the homepage team preview) shows photo, name and role only,
 * which keeps a row of cards evenly sized regardless of bio length.
 */
export function PersonCard({
  person,
  compact = false,
}: {
  person: Person;
  compact?: boolean;
}) {
  return (
    <article className="group flex flex-col">
      <div className="overflow-hidden rounded-card">
        <AvatarPlaceholder
          src={person.photo}
          name={person.name}
          className="transition-transform duration-500 ease-subtle group-hover:scale-[1.03]"
        />
      </div>
      <h3 className="mt-5 text-base font-semibold leading-snug">{person.name}</h3>
      <p className="mt-1 text-sm text-accent-700">{person.role}</p>
      {person.currentPosition ? (
        <p className="mt-2 text-sm text-ink-muted">{person.currentPosition}</p>
      ) : null}
      {!compact && person.bio ? (
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{person.bio}</p>
      ) : null}
      {!compact && person.interests && person.interests.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {person.interests.map((interest) => (
            <li
              key={interest}
              className="rounded-full bg-canvas px-2.5 py-1 text-[0.7rem] text-ink-muted"
            >
              {interest}
            </li>
          ))}
        </ul>
      ) : null}
      {!compact ? <ProfileLinks person={person} compact /> : null}
    </article>
  );
}

/** Larger two-column profile used for the Principal Investigator. */
export function PrincipalInvestigatorCard({ person }: { person: Person }) {
  return (
    <article className="grid gap-10 md:grid-cols-12 md:gap-12">
      <div className="md:col-span-4 lg:col-span-3">
        <AvatarPlaceholder src={person.photo} name={person.name} />
      </div>
      <div className="md:col-span-8 lg:col-span-9">
        <h3 className="text-2xl font-semibold tracking-[-0.015em] sm:text-3xl">
          {person.name}
        </h3>
        <p className="mt-2 text-base text-accent-700">{person.role}</p>
        {person.bio ? (
          <p className="mt-5 max-w-prose text-base leading-relaxed text-ink-soft">
            {person.bio}
          </p>
        ) : null}
        {person.interests && person.interests.length > 0 ? (
          <div className="mt-6">
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
              Research interests
            </h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {person.interests.map((interest) => (
                <li
                  key={interest}
                  className="rounded-full border border-line bg-canvas px-3 py-1 text-sm text-ink-soft"
                >
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <ProfileLinks person={person} />
      </div>
    </article>
  );
}
