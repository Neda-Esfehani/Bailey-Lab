/**
 * Publications.
 *
 * ⚠️ PLACEHOLDER PUBLICATIONS — none of these are real papers.
 * Replace every entry before publishing.
 *
 * To add a paper, append an object to `publications`. Order does not matter:
 * `publicationsByYear()` groups and sorts them for the /publications page.
 * Mark the papers you want on the homepage with `featured: true`.
 */

export type Publication = {
  id: string;
  title: string;
  /** Full author string as it should be displayed. Use ** ** around lab members if you want them bold — see PublicationItem. */
  authors: string;
  journal: string;
  year: number;
  /** Bare DOI, e.g. '10.1038/s41586-000-00000-0'. Rendered as a doi.org link. */
  doi?: string;
  pubmedUrl?: string;
  /** Path to a PDF in /public, or an external URL. */
  pdfUrl?: string;
  /** Optional note, e.g. 'Preprint', 'Co-first authors'. */
  note?: string;
  featured?: boolean;
};

export const publications: Publication[] = [
  {
    id: 'pub-2025-a',
    title: '[Publication title to be added]',
    authors: '[Author list to be added]',
    journal: '[Journal name]',
    year: 2025,
    doi: '10.0000/placeholder.2025.001',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/',
    featured: true,
  },
  {
    id: 'pub-2025-b',
    title: '[Publication title to be added]',
    authors: '[Author list to be added]',
    journal: '[Journal name]',
    year: 2025,
    doi: '10.0000/placeholder.2025.002',
    note: 'Preprint',
    featured: true,
  },
  {
    id: 'pub-2024-a',
    title: '[Publication title to be added]',
    authors: '[Author list to be added]',
    journal: '[Journal name]',
    year: 2024,
    doi: '10.0000/placeholder.2024.001',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/',
    featured: true,
  },
  {
    id: 'pub-2024-b',
    title: '[Publication title to be added]',
    authors: '[Author list to be added]',
    journal: '[Journal name]',
    year: 2024,
    doi: '10.0000/placeholder.2024.002',
  },
  {
    id: 'pub-2023-a',
    title: '[Publication title to be added]',
    authors: '[Author list to be added]',
    journal: '[Journal name]',
    year: 2023,
    doi: '10.0000/placeholder.2023.001',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/',
  },
  {
    id: 'pub-2023-b',
    title: '[Publication title to be added]',
    authors: '[Author list to be added]',
    journal: '[Journal name]',
    year: 2023,
  },
];

/** Publications grouped by year, newest year first. */
export function publicationsByYear(): { year: number; items: Publication[] }[] {
  const years = Array.from(new Set(publications.map((p) => p.year))).sort(
    (a, b) => b - a,
  );
  return years.map((year) => ({
    year,
    items: publications.filter((p) => p.year === year),
  }));
}

/** The three papers highlighted on the homepage. */
export const featuredPublications: Publication[] = publications
  .filter((p) => p.featured)
  .slice(0, 3);
