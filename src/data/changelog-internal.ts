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
    version: '2.0.0',
    date: '2025-08-03',
    title: 'Authentication & User Features (Build 22)',
    type: 'major',
    features: [
      'Optional user authentication system with Supabase (login, register, logout)',
      "User-specific saved playlist 'conversions' with custom names for reuse",
      'Saved conversions management: view, copy, delete with loading states',
      'Enhanced navigation: landing page → auth options → converter/dashboard',
      'Guest mode preserved for unauthenticated users with proper exit/entry',
      'Avatar system: 8 preset emoji avatars with AsyncStorage persistence',
    ],
    improvements: [
      "Improved converter UX: 'Convert' button that becomes 'Clear' after success",
      "Polished UI: theme toggle positioning, 'Coming Soon' sections, Title Case headers",
      'Comprehensive testing infrastructure with Vitest and auth logic coverage',
      'Authentication persistence: users stay logged in across app restarts',
      "Accurate duration display: saved conversions show precise time (e.g., '4m 23s')",
      'Enhanced keyboard UX: tap anywhere to dismiss keyboard on input screens',
      "Email app integration: 'Open Email' button after registration for seamless verification",
      'Production environment validation and error handling for TestFlight deployment',
      "Button text clarity: 'Load' → 'Copy', 'Get Timer' → 'Convert', navigation improvements",
    ],
    bugfixes: [
      'Fixed authentication state persistence across app restarts',
      'Resolved saved conversion duration formatting',
      'Improved error handling for network failures',
    ],
  },
  {
    version: '1.0.0',
    date: '2025-07-26',
    title: 'Basic Playlist Converter (Submitted)',
    type: 'major',
    features: [
      'Core functionality: Convert Spotify playlist JSON to Seconds Interval trainer JSON',
      'Creates intervals matching exact song durations from playlists',
      'Basic UI for file upload and conversion',
      'Guest mode for unauthenticated usage',
    ],
    improvements: [
      'Minimal viable product for interval training',
      'File-based routing with expo-router',
      'NativeWind v4 styling system',
      'Dark/light theme support',
    ],
  },
];
