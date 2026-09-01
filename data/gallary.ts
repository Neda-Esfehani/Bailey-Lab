/**
 * Lab photo gallery.
 *
 * Add images to public/images/gallery, then add entries below.
 * Newest years appear first.
 */

export type GalleryItem = {
  /** Unique identifier for this photo. */
  id: string;
  year: number;
  /** Example: '/images/gallery/photo-1.jpg' */
  image: string;
  /** Description of the image for accessibility. */
  imageAlt: string;
  /** Text displayed beneath the image. */
  caption: string;
};

export type GalleryYearGroup = {
  year: number;
  items: GalleryItem[];
};

export const gallery: GalleryItem[] = [
  // Uncomment after adding your image and replacing the text:
   {
     id: 'photo-1',
     year: 2026,
     image: '/images/news/aki-histrader.jpg',
     imageAlt: 'Aki Kirbizakis celebrating the acceptance of the Histrader paper',
     caption: 'Aki\'s Histrader paper got accepted!',
   },
];

/** Newest year first; same-year photos keep their array order. */
export function gallerySorted(): GalleryItem[] {
  return [...gallery].sort((a, b) => b.year - a.year);
}

/** Groups photos under their year, newest year first. */
export function galleryByYear(): GalleryYearGroup[] {
  const groups = new Map<number, GalleryItem[]>();

  for (const item of gallerySorted()) {
    const items = groups.get(item.year);

    if (items) {
      items.push(item);
    } else {
      groups.set(item.year, [item]);
    }
  }

  return Array.from(groups, ([year, items]) => ({
    year,
    items,
  }));
}

/** First three photos in gallery order, for the homepage. */
export const latestGallery: GalleryItem[] =
  gallerySorted().slice(0, 3);
