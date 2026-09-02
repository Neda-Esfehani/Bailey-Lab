/**
 * Site-wide settings, navigation and contact details.
 *
 * ⚠️ PLACEHOLDER CONTENT — every value marked with […] must be replaced with
 * real, lab-approved information before the site goes live.
 */

export const site = {
  name: 'Bailey Lab',
  defaultTitle: 'Bailey Lab | Cancer Genomics & Epigenomics',
  tagline: 'Decoding the regulatory genome of cancer',
  description:
    'The Bailey Lab at the RI-MUHC and McGill University uses genomics, epigenomics and bioinformatics to study gastroesophageal cancer, metastasis, chemoresistance and regulatory alterations.',

  /**
   * Public URL of the deployed site. Used for canonical links and OpenGraph.
   * Replace when the final domain is known.
   */
  url: 'https://neda-esfehani.github.io/Bailey-Lab',
  ogImage: '/images/og-default.png',

  institution: {
    institute: 'Research Institute of the McGill University Health Centre',
    instituteShort: 'RI-MUHC',
    university: 'McGill University',
    city: 'Montreal, Quebec, Canada',
  },

  /** ⚠️ Placeholder — do not publish until confirmed by the lab. */
  contact: {
    labEmail: '[lab-email@example.com]',
    piName: 'Swneke D. Bailey, PhD',
    piEmail: 'swneke.bailey@mcgill.ca',
    phone: '(514) 934-1934',
    addressLines: [
      'RI-MUHC',
      '1001 Bd Décarie',
      'E02.4126',
      'Montréal, QC H4A 3J1',
      'Canada',
    ],
    /** Replace with a real Google Maps / OpenStreetMap link for the building. */
    mapUrl: 'https://maps.google.com/?q=Research+Institute+McGill+University+Health+Centre',
  },

  /** ⚠️ Placeholder profile links. */
  socials: {
    email: 'mailto:[lab-email@example.com]',
    googleScholar: 'https://scholar.google.co.uk/',
    pubmed: 'https://pubmed.ncbi.nlm.nih.gov/',
    linkedin: 'https://www.linkedin.com/',
  },

  institutionalLinks: [
    { label: 'RI-MUHC', href: 'https://rimuhc.ca/' },
    { label: 'McGill University', href: 'https://www.mcgill.ca/' },
    { label: 'MUHC', href: 'https://muhc.ca/' },
  ],
} as const;

export type NavItem = { label: string; href: string };

/** Primary navigation. Order here is the order rendered in the navbar and footer. */
export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research' },
  { label: 'People', href: '/people' },
  { label: 'Publications', href: '/publications' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Join Us', href: '/join' },
];

export const contactNavItem: NavItem = { label: 'Contact', href: '/contact' };
