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
    '[Application instructions to be added.] The steps below are placeholders showing the intended structure of this section.',
  steps: [
    '[Step 1 — e.g. what to send and to which address]',
    '[Step 2 — e.g. which documents to attach]',
    '[Step 3 — e.g. what to include in the subject line]',
    '[Step 4 — e.g. expected response time]',
  ],
  /** Rendered as a prominent notice on the page. Remove once approved. */
  approvalNotice:
    'These application instructions are placeholder content and require review and approval by the Bailey Lab before publication.',
};
