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

// Public US App Store history/official lookup checked October 17, 2026.
// Dates use Apple's published UTC calendar dates, not internal preparation dates.
export const changelogData: ChangelogEntry[] = [
  {
    version: '0.2.1',
    date: '2026-10-15',
    title: 'Personalized Class Planning',
    type: 'major',
    features: [
      'Create fitness classes with a guided class builder',
      'Review structured workout intervals and music guidance',
      'Save generated classes and reopen them for editing',
      'Manage Mova Pro access from Settings',
      'Request account deletion with a receipt and completion confirmation',
    ],
    improvements: ['Improved sign-in, class import errors, and generation feedback'],
  },
  {
    version: '0.2.0',
    date: '2025-08-03',
    title: 'Accounts and Saved Playlists',
    type: 'minor',
    features: ['Create an account and save playlists'],
  },
];
