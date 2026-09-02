import { PageHero } from '@/components/Hero';
import { GalleryCard } from '@/components/GalleryCard';
import { Section } from '@/components/ui';
import { galleryByYear } from '@/data/gallary';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Gallery',
  description: 'Snapshots from the Bailey Lab community, research and training.',
  path: '/gallery',
});

export default function GalleryPage() {
  const groups = galleryByYear();

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Inside the Bailey Lab"
        description="Snapshots from the people, science and shared moments that make the lab a collaborative research community."
        backgroundImage="/logos/morbius.png"
      />

      <Section>
        {groups.length > 0 ? (
          <div className="space-y-16">
            {groups.map((group) => (
              <section key={group.year} aria-labelledby={`gallery-year-${group.year}`}>
                <h2 id={`gallery-year-${group.year}`} className="text-2xl font-semibold tracking-[-0.02em]">
                  {group.year}
                </h2>
                <div className="mt-7 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((item) => (
                    <GalleryCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="rounded-card border border-dashed border-line-strong bg-canvas px-6 py-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">Gallery coming soon</p>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
              Lab photographs and research moments will appear here as the gallery is assembled.
            </p>
          </div>
        )}
      </Section>
    </>
  );
}
