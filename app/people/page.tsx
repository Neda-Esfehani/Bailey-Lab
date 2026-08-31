import { CTASection } from '@/components/CTASection';
import { PageHero } from '@/components/Hero';
import { PersonCard, PrincipalInvestigatorCard } from '@/components/PersonCard';
import { SectionHeading } from '@/components/SectionHeading';
import { Section } from '@/components/ui';
import { peopleInGroup, personGroups, principalInvestigator } from '@/data/people';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'People',
  description:
    'Members of the Bailey Lab at the RI-MUHC and McGill University — principal investigator, postdoctoral fellows, graduate students, research staff, undergraduates and alumni.',
  path: '/people',
});

export default function PeoplePage() {
  const groups = personGroups.filter((group) => group.id !== 'pi');

  return (
    <>
      <PageHero
        eyebrow="People"
        title="Our team"
        description="[Introductory paragraph to be added.] This paragraph will introduce the people who make up the Bailey Lab and the training environment they work in."
      />

      {principalInvestigator ? (
        <Section labelledBy="pi-heading">
          <SectionHeading
            id="pi-heading"
            eyebrow="Principal Investigator"
            title="Leading the lab"
            className="mb-14"
          />
          <PrincipalInvestigatorCard person={principalInvestigator} />
        </Section>
      ) : null}

      {groups.map((group, index) => {
        const members = peopleInGroup(group.id);
        if (members.length === 0) return null;

        const isAlumni = group.id === 'alumni';

        return (
          <Section
            key={group.id}
            id={group.id}
            tone={index % 2 === 0 ? 'canvas' : 'paper'}
            labelledBy={`${group.id}-heading`}
          >
            <SectionHeading
              id={`${group.id}-heading`}
              title={group.title}
              description={group.description}
            />

            {isAlumni ? (
              <ul className="mt-12 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                {members.map((person) => (
                  <li key={person.id} className="border-t border-line pt-5">
                    <p className="text-base font-semibold">{person.name}</p>
                    <p className="mt-1 text-sm text-accent-700">{person.role}</p>
                    {person.currentPosition ? (
                      <p className="mt-1.5 text-sm text-ink-muted">
                        {person.currentPosition}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {members.map((person) => (
                  <PersonCard key={person.id} person={person} />
                ))}
              </div>
            )}
          </Section>
        );
      })}

      <CTASection
        eyebrow="Join us"
        title="Become part of the team"
        description="[Short recruitment message to be added.] The lab welcomes enquiries from prospective trainees at every stage."
        actions={[
          { label: 'View Opportunities', href: '/join' },
          { label: 'Contact Us', href: '/contact', variant: 'secondary' },
        ]}
      />
    </>
  );
}
