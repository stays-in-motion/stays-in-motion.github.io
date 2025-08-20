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
    version: "2.0.0",
    date: "2025-08-03",
    title: "Your Personal Workout Library",
    type: "major",
    features: [
      "Create your account to save and organize all your converted playlists",
      "Name your workouts and access them anytime from your personal library",
      "Easily manage your saved workouts - view, reuse, or delete as needed",
      "Choose your workout style with personalized avatar options",
      "Still prefer to stay anonymous? Guest mode works exactly as before"
    ],
    improvements: [
      "Streamlined workout creation - one button to convert, another to start fresh",
      "Enhanced app design with better navigation and cleaner interface",
      "Your login stays active between app sessions - no more signing in every time",
      "Precise workout timing display shows exact duration (like '4m 23s')",
      "Improved keyboard experience - tap anywhere to dismiss and keep going",
      "Quick email verification with direct 'Open Email' button after signup",
      "More intuitive button labels throughout the app for clarity"
    ],
    bugfixes: [
      "Fixed login persistence - stay signed in between app uses",
      "Corrected workout duration display accuracy",
      "Better handling when internet connection is spotty"
    ]
  },
  {
    version: "1.0.0", 
    date: "2025-07-26",
    title: "Transform Your Playlists Into Workouts",
    type: "major",
    features: [
      "Convert any Spotify playlist into interval training sessions",
      "Each song becomes a timed workout interval matching its exact duration",
      "Simple file upload and instant conversion",
      "Use the app without creating an account"
    ],
    improvements: [
      "Clean, minimal design focused on getting you moving",
      "Smooth navigation between workout features",
      "Beautiful dark and light themes to match your preference",
      "Fast, reliable playlist processing"
    ]
  }
];