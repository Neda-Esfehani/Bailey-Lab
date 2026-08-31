/**
 * Lab members.
 *
 * ⚠️ PLACEHOLDER PEOPLE — no real lab members have been invented.
 * Replace each entry with a real person, or delete the entry.
 *
 * To add a member:
 *   1. Drop a square photo (≥600×600, .jpg or .webp) in /public/images/people/
 *   2. Add an object below with `photo: '/images/people/<filename>'`
 *   3. Set `group` to one of the PersonGroup values — that decides the section
 *      it appears in on /people.
 */

export type PersonGroup =
  | 'pi'
  | 'postdoc'
  | 'graduate'
  | 'staff'
  | 'undergraduate'
  | 'alumni';

export type Person = {
  /** Stable unique key. */
  id: string;
  name: string;
  /** Job title, e.g. 'Postdoctoral Fellow'. */
  role: string;
  group: PersonGroup;
  /** Path under /public, e.g. '/images/people/jane-doe.jpg'. Omit for a placeholder avatar. */
  photo?: string;
  /** 1–3 sentences. */
  bio?: string;
  /** Short keyword list rendered as tags. */
  interests?: string[];
  email?: string;
  linkedin?: string;
  scholar?: string;
  website?: string;
  /** Alumni only: where they went next. */
  currentPosition?: string;
};

/** Section headings and intro copy for /people, in display order. */
export const personGroups: {
  id: PersonGroup;
  title: string;
  description?: string;
}[] = [
  { id: 'pi', title: 'Principal Investigator' },
  { id: 'postdoc', title: 'Postdoctoral Fellows' },
  { id: 'graduate', title: 'Graduate Students' },
  { id: 'staff', title: 'Research Staff' },
  { id: 'undergraduate', title: 'Undergraduate Students' },
  { id: 'alumni', title: 'Alumni' },
];

export const people: Person[] = [
  {
    id: 'principal-investigator',
    name: '[PI Name], PhD',
    role: 'Principal Investigator',
    group: 'pi',
    bio: '[Member biography to be added.] This section will hold a short biography of the Principal Investigator, including training background, current appointments at the RI-MUHC and McGill University, and the overall direction of the lab.',
    interests: [
      '[Research interest 1]',
      '[Research interest 2]',
      '[Research interest 3]',
    ],
    email: 'mailto:[pi-email@example.com]',
    scholar: 'https://scholar.google.com/',
    linkedin: 'https://www.linkedin.com/',
  },

  {
    id: 'postdoc-1',
    name: '[Postdoctoral Fellow Name]',
    role: 'Postdoctoral Fellow',
    group: 'postdoc',
    bio: '[Member biography]',
    interests: ['[Interest]', '[Interest]'],
    email: 'mailto:[email@example.com]',
  },
  {
    id: 'postdoc-2',
    name: '[Postdoctoral Fellow Name]',
    role: 'Postdoctoral Fellow',
    group: 'postdoc',
    bio: '[Member biography]',
    interests: ['[Interest]', '[Interest]'],
  },

  {
    id: 'grad-1',
    name: '[Graduate Student Name]',
    role: 'PhD Student',
    group: 'graduate',
    bio: '[Member biography]',
    interests: ['[Interest]', '[Interest]'],
  },
  {
    id: 'grad-2',
    name: '[Graduate Student Name]',
    role: 'PhD Student',
    group: 'graduate',
    bio: '[Member biography]',
    interests: ['[Interest]'],
  },
  {
    id: 'grad-3',
    name: '[Graduate Student Name]',
    role: 'MSc Student',
    group: 'graduate',
    bio: '[Member biography]',
    interests: ['[Interest]'],
  },

  {
    id: 'staff-1',
    name: '[Research Staff Name]',
    role: 'Research Associate',
    group: 'staff',
    bio: '[Member biography]',
  },
  {
    id: 'staff-2',
    name: '[Research Staff Name]',
    role: 'Bioinformatician',
    group: 'staff',
    bio: '[Member biography]',
  },

  {
    id: 'undergrad-1',
    name: '[Undergraduate Student Name]',
    role: 'Undergraduate Researcher',
    group: 'undergraduate',
    bio: '[Member biography]',
  },
  {
    id: 'undergrad-2',
    name: '[Undergraduate Student Name]',
    role: 'Undergraduate Researcher',
    group: 'undergraduate',
    bio: '[Member biography]',
  },

  {
    id: 'alumni-1',
    name: '[Alumni Name]',
    role: 'Former Postdoctoral Fellow',
    group: 'alumni',
    currentPosition: '[Current position to be added]',
  },
  {
    id: 'alumni-2',
    name: '[Alumni Name]',
    role: 'Former PhD Student',
    group: 'alumni',
    currentPosition: '[Current position to be added]',
  },
];

export const principalInvestigator: Person | undefined = people.find(
  (person) => person.group === 'pi',
);

export function peopleInGroup(group: PersonGroup): Person[] {
  return people.filter((person) => person.group === group);
}

/** Members shown in the homepage team preview (PI first, then the next few). */
export const teamPreview: Person[] = people
  .filter((person) => person.group !== 'alumni')
  .slice(0, 4);
