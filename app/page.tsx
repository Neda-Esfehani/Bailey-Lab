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
        description="Dr. Swneke Bailey’s lab combines genomics, epigenomics and bioinformatics to uncover how regulatory changes drive esophageal cancer, metastasis and treatment resistance."
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
              title="From regulatory DNA to patient care"
            />
          </div>
          <div className="lg:col-span-7">
            <p className="max-w-prose text-lg leading-relaxed text-ink-soft">
              The Bailey Lab studies how somatic alterations reshape gene regulation in cancer. By connecting high-throughput genomics with computational analysis and clinically grounded questions, the lab seeks mechanisms that can improve the survival of patients with cancers of the stomach and esophagus.
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
          description="Three linked questions guide the lab: which regulatory alterations matter, how they rewire chromatin, and how those changes can inform precision cancer care."
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
              Making the non-coding cancer genome actionable
            </h2>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-ink-soft">
              The lab combines whole-genome sequencing, epigenomic profiling and 3D genome analysis to connect structural variants and regulatory mutations to the genes and pathways that shape tumour behaviour.
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
            description="A collaborative team working across cancer biology, genomics, bioinformatics and surgical oncology."
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
        description="Dr. Bailey is currently recruiting M.Sc. students, M.Sc. non-thesis project students and Ph.D. students. Explore opportunities and get in touch."
        actions={[
          { label: 'View Opportunities', href: '/join' },
          { label: 'Contact Us', href: '/contact', variant: 'secondary' },
        ]}
      />
    </>
  );
}
