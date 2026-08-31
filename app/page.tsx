import { CTASection } from '@/components/CTASection';
import { Hero } from '@/components/Hero';
import { NewsCard } from '@/components/NewsCard';
import { PersonCard } from '@/components/PersonCard';
import { PublicationPreview } from '@/components/PublicationItem';
import { Placeholder } from '@/components/Placeholder';
import { ResearchCard } from '@/components/ResearchCard';
import { SectionHeading } from '@/components/SectionHeading';
import { ArrowLink, ButtonLink, Section } from '@/components/ui';
import { latestNews } from '@/data/news';
import { teamPreview } from '@/data/people';
import { featuredPublications } from '@/data/publications';
import { featuredTheme, researchThemes } from '@/data/research';
import { site } from '@/data/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({ path: '/' });

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero */}
      <Hero
        eyebrow={`${site.institution.instituteShort} · ${site.institution.university}`}
        title={site.name}
        tagline={site.tagline}
        description="Understanding how genomic and epigenomic alterations shape cancer progression, metastasis and therapeutic response."
        actions={[
          { label: 'Explore Our Research', href: '/research' },
          { label: 'Meet the Team', href: '/people', variant: 'secondary' },
        ]}
      />

      {/* 2 — Lab introduction */}
      <Section labelledBy="intro-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              id="intro-heading"
              eyebrow="About the lab"
              title="Understanding cancer through the genome"
            />
          </div>
          <div className="lg:col-span-7">
            <p className="max-w-prose text-lg leading-relaxed text-ink-soft">
              [Lab description to be added.] This paragraph will introduce the Bailey
              Lab — the questions the group works on, the balance of experimental and
              computational approaches used, and the clinical setting the research sits
              within at the {site.institution.institute}.
            </p>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-ink-muted">
              [Additional context to be added.] A second paragraph can describe
              collaborations across the {site.institution.instituteShort} and{' '}
              {site.institution.university}, training philosophy, and the lab&apos;s
              commitment to open, reproducible science.
            </p>
            <div className="mt-8">
              <ArrowLink href="/research">Learn more about our research</ArrowLink>
            </div>
          </div>
        </div>
      </Section>

      {/* 3 — Research themes */}
      <Section tone="canvas" labelledBy="themes-heading">
        <SectionHeading
          id="themes-heading"
          eyebrow="Research"
          title="Three connected research directions"
          description="[Short overview of the lab’s research programme to be added.]"
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {researchThemes.map((theme) => (
            <ResearchCard key={theme.id} theme={theme} />
          ))}
        </div>
      </Section>

      {/* 4 — Featured research */}
      <Section labelledBy="featured-heading">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Placeholder
              src={featuredTheme.image}
              alt={featuredTheme.imageAlt}
              ratio="wide"
              className="shadow-card"
            />
          </div>
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
              Featured research · {featuredTheme.title}
            </p>
            <h2
              id="featured-heading"
              className="mt-4 text-3xl font-semibold leading-[1.12] tracking-[-0.02em] sm:text-4xl"
            >
              [Featured project title to be added]
            </h2>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-ink-soft">
              [Featured research description to be added.] This block highlights one
              project or research direction at a time. Replace the text, image and link
              in <code className="rounded bg-canvas px-1.5 py-0.5 text-sm">data/research.ts</code>{' '}
              to feature something new.
            </p>
            <div className="mt-9">
              <ButtonLink href={`/research#${featuredTheme.id}`}>Learn More</ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* 5 — Team preview */}
      <Section tone="canvas" labelledBy="team-heading">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            id="team-heading"
            eyebrow="People"
            title="The team"
            description="[Short description of the lab’s team to be added.]"
          />
          <ArrowLink href="/people" className="pb-2">
            Meet the full team
          </ArrowLink>
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {teamPreview.map((person) => (
            <PersonCard key={person.id} person={person} compact />
          ))}
        </div>
      </Section>

      {/* 6 — Latest publications */}
      <Section labelledBy="publications-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              id="publications-heading"
              eyebrow="Publications"
              title="Latest publications"
            />
            <div className="mt-8">
              <ArrowLink href="/publications">View all publications</ArrowLink>
            </div>
          </div>
          <div className="lg:col-span-8">
            {featuredPublications.map((publication) => (
              <PublicationPreview key={publication.id} publication={publication} />
            ))}
          </div>
        </div>
      </Section>

      {/* 7 — Latest news */}
      <Section tone="canvas" labelledBy="news-heading">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading id="news-heading" eyebrow="News" title="Latest news" />
          <ArrowLink href="/news" className="pb-2">
            View all news
          </ArrowLink>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {latestNews.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </Section>

      {/* 8 — Join the lab */}
      <CTASection
        eyebrow="Join us"
        title="Interested in joining the Bailey Lab?"
        description="[Short recruitment message to be added.] The lab welcomes enquiries from prospective graduate students, postdoctoral fellows, research staff and undergraduate researchers."
        actions={[
          { label: 'View Opportunities', href: '/join' },
          { label: 'Contact Us', href: '/contact', variant: 'secondary' },
        ]}
      />
    </>
  );
}
