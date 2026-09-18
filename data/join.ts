/**
 * Recruitment content for /join.
 *
 * ⚠️ IMPORTANT: the application instructions below are PLACEHOLDERS.
 * They must be reviewed and approved by the lab — and checked against
 * RI-MUHC and McGill graduate-admissions policy — before this page is
 * made public.
 */

export type Opening = {
  id: string;
  title: string;
  /** Short status line, e.g. 'Accepting applications'. */
  status: string;
  description: string;
  /** Bullet list of expectations or requirements. */
  points?: string[];
};
export const openings: Opening[] = [
  {
    id: 'graduate-students',
    title: 'Graduate Students',
    status: '[Recruitment status to be confirmed]',
    description:
      '[Description to be added.] This section will describe opportunities for MSc and PhD students, the graduate programmes through which students join the lab at McGill University, and the expected background.',
    points: [
      '[Programme / department affiliation to be confirmed]',
      '[Expected background or skills]',
      '[Funding information to be confirmed]',
    ],
  },
  {
    id: 'postdoctoral-fellows',
    title: 'Postdoctoral Fellows',
    status: '[Recruitment status to be confirmed]',
    description:
      '[Description to be added.] This section will describe postdoctoral opportunities, the research directions available and the fellowship support the lab can help candidates apply for.',
    points: [
      '[Expected background or skills]',
      '[Fellowship / funding routes to be confirmed]',
      '[Start date expectations]',
    ],
  },
  {
    id: 'research-assistants',
    title: 'Research Assistants',
    status: '[Recruitment status to be confirmed]',
    description:
      '[Description to be added.] This section will describe research assistant and technician positions, including the wet-lab and computational roles the lab recruits for.',
    points: ['[Expected background or skills]', '[Contract details to be confirmed]'],
  },
  {
    id: 'undergraduate-students',
    title: 'Undergraduate Students',
    status: '[Recruitment status to be confirmed]',
    description:
      '[Description to be added.] This section will describe undergraduate research projects, summer studentships and course-credit research opportunities.',
    points: ['[Eligible programmes]', '[Application timing]'],
  },
];

export const howToApply = {
  intro:
    'We welcome applications from prospective graduate students, postdoctoral fellows, and undergraduate students. Please complete the form below to submit your profile — we review applications on a rolling basis.',
  steps: [
    'Fill out the application form, including your contact information and the position(s) you are interested in.',
    'Attach your CV/resume where the form requests it.',
    'Briefly describe your research interests and why you would like to join the lab.',
    'We aim to respond to complete applications within 2–3 weeks.',
  ],
  formUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSeMxuKYnZ03sXE_uUlpq8NFf9qwMAO2-juhPL75FZibjRxrNA/viewform',
  /** Rendered as a prominent notice on the page. Remove once approved. */
};
