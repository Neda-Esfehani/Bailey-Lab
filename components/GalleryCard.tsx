import type { GalleryItem } from '@/data/gallary';
import { Placeholder } from './Placeholder';

export function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <figure className="group overflow-hidden rounded-card border border-line bg-paper shadow-card transition-all duration-300 ease-subtle hover:-translate-y-1 hover:shadow-card-hover">
      <div className="overflow-hidden">
        <Placeholder
          src={item.image}
          alt={item.imageAlt}
          label="[Gallery image]"
          ratio="wide"
          rounded={false}
          className="transition-transform duration-500 ease-subtle group-hover:scale-[1.03]"
        />
      </div>
      <figcaption className="flex items-start justify-between gap-4 p-5">
        <span className="text-sm leading-relaxed text-ink-soft">{item.caption}</span>
        <span className="shrink-0 text-xs font-semibold tracking-[0.12em] text-accent-600">{item.year}</span>
      </figcaption>
    </figure>
  );
}
