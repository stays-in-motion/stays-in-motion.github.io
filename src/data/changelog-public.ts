export interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  type: 'major' | 'minor' | 'patch';
  features?: string[];
  improvements?: string[];
  bugfixes?: string[];
  breaking?: string[];
}

export const changelogData: ChangelogEntry[] = [
  {
    version: '0.2.1',
    date: '2026-09-27',
    title: 'Personalized Class Planning',
    type: 'major',
    features: [
      'Build personalized fitness classes from guided style, timing, intensity, equipment, and music choices',
      'Review structured workout intervals and music guidance before teaching',
      'Save generated classes and reopen them for editing',
      'Use optional uploaded training documents to personalize class guidance',
      'Manage Mova Pro purchases, restores, and subscription access in the app',
    ],
    improvements: [
      'Clearer generation, sign-in, and class-import feedback',
      'More reliable entitlement and account-state handling',
      'Updated privacy and support information for the current product',
    ],
    bugfixes: [
      'Improved generated-class validation and duration handling',
      'Improved saved-class navigation and release acceptance coverage',
    ],
  },
  {
    version: '0.2.0',
    date: '2026-01-25',
    title: 'Class Builder Foundations',
    type: 'minor',
    features: [
      'Account-based fitness class library',
      'Structured class editing and playback',
      'Music recommendations aligned to class timing',
    ],
    improvements: ['Streamlined navigation and dark and light appearance support'],
  },
];
