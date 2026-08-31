/**
 * Research themes.
 *
 * Rendered on the homepage (short form) and the /research page (long form).
 *
 * ⚠️ PLACEHOLDER CONTENT — no scientific findings have been invented.
 * Replace the description, longDescription and highlights fields with
 * lab-approved text.
 */

export type ResearchTheme = {
  /** URL fragment used for deep links, e.g. /research#cancer-genomics */
  id: string;
  title: string;
  /** One-line label shown above the title on cards. */
  category: string;
  /** Short summary — homepage cards. Keep to ~2 sentences. */
  description: string;
  /** Long form — /research page. Each string renders as a paragraph. */
  longDescription: string[];
  /** Optional bullet list of approaches / questions. */
  highlights?: string[];
  /**
   * Path to an image in /public/images/research (e.g. '/images/research/genomics.jpg').
   * Leave undefined to render a labelled placeholder instead.
   */
  image?: string;
  imageAlt?: string;
  /** Marks the theme shown in the homepage "Featured research" band. */
  featured?: boolean;
};

export const researchThemes: ResearchTheme[] = [
  {
    id: 'cancer-genomics',
    title: 'Cancer Genomics',
    category: 'Research theme 01',
    description:
      '[Short description of the lab’s cancer genomics work to be added.] Placeholder text describing the genomic alterations and patient cohorts studied by the lab.',
    longDescription: [
      '[Research description to be added.] This paragraph will introduce the lab’s cancer genomics programme — the biological questions being asked, the tumour types studied and the types of genomic data generated or analysed.',
      '[Additional context to be added.] A second paragraph can describe collaborations, patient cohorts and the translational goals of this research theme.',
    ],
    highlights: [
      '[Approach or research question 1]',
      '[Approach or research question 2]',
      '[Approach or research question 3]',
    ],
    imageAlt: 'Placeholder scientific image for the Cancer Genomics research theme',
    featured: true,
  },
  {
    id: 'epigenomics-gene-regulation',
    title: 'Epigenomics & Gene Regulation',
    category: 'Research theme 02',
    description:
      '[Short description of the lab’s epigenomics work to be added.] Placeholder text describing chromatin, enhancer and transcriptional regulation interests.',
    longDescription: [
      '[Research description to be added.] This paragraph will describe how the lab studies chromatin state, regulatory elements and transcriptional programmes in cancer.',
      '[Additional context to be added.] A second paragraph can outline the experimental and sequencing approaches used within this theme.',
    ],
    highlights: [
      '[Approach or research question 1]',
      '[Approach or research question 2]',
      '[Approach or research question 3]',
    ],
    imageAlt: 'Placeholder scientific image for the Epigenomics & Gene Regulation research theme',
  },
  {
    id: 'computational-cancer-biology',
    title: 'Computational Cancer Biology',
    category: 'Research theme 03',
    description:
      '[Short description of the lab’s computational work to be added.] Placeholder text describing method development, modelling and integrative analysis.',
    longDescription: [
      '[Research description to be added.] This paragraph will describe the computational methods, statistical models and software developed and applied in the lab.',
      '[Additional context to be added.] A second paragraph can describe data integration across modalities and open-source tools released by the lab.',
    ],
    highlights: [
      '[Approach or research question 1]',
      '[Approach or research question 2]',
      '[Approach or research question 3]',
    ],
    imageAlt: 'Placeholder scientific image for the Computational Cancer Biology research theme',
  },
];

/** The theme shown in the homepage "Featured research" band. */
export const featuredTheme: ResearchTheme =
  researchThemes.find((theme) => theme.featured) ?? researchThemes[0];
