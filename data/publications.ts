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
    id: 'pub-2024-uxs1',
    title: 'HiChIP-Based Epigenomic Footprinting Identifies a Promoter Variant of UXS1 That Confers Genetic Susceptibility to Gastroesophageal Cancer',
    authors: 'Gnanapragasam A, Kirbizakis E, Li A, ... **Bailey SD**, et al.',
    journal: 'Cancer Research',
    year: 2024,
    doi: '10.1158/0008-5472.CAN-23-2397',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/38748784/',
    featured: true,
  },
  {
    id: 'pub-2024-enhancer-duplications',
    title: 'Chromatin interaction maps identify oncogenic targets of enhancer duplications in cancer',
    authors: 'Song Y, Li F, Wang S, ... **Bailey SD**, Zhang X',
    journal: 'Genome Research',
    year: 2024,
    doi: '10.1101/gr.278418.123',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/39424324/',
    featured: true,
  },
  {
    id: 'pub-2024-enhancer-hijacking',
    title: '3D genomic analysis reveals novel enhancer-hijacking caused by complex structural alterations that drive oncogene overexpression',
    authors: 'Mortenson KL, Dawes C, Wilson ER, ... **Bailey SD**, et al.',
    journal: 'Nature Communications',
    year: 2024,
    doi: '10.1038/s41467-024-50387-w',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/39033128/',
    featured: true,
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
