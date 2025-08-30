/**
 * Color mapping utilities for consistent theming
 * Provides accent color mappings used across components
 */

/**
 * Accent color types used throughout the application
 */
export type AccentColorType = 'energy' | 'progress' | 'intensity';

/**
 * Text color mappings for accent types
 */
export const ACCENT_TEXT_COLORS: Record<AccentColorType, string> = {
  energy: 'text-accent-energy',
  progress: 'text-accent-progress',
  intensity: 'text-accent-intensity',
} as const;

/**
 * Background color mappings for accent types
 */
export const ACCENT_BG_COLORS: Record<AccentColorType, string> = {
  energy: 'bg-accent-energy',
  progress: 'bg-accent-progress',
  intensity: 'bg-accent-intensity',
} as const;

/**
 * Border color mappings for accent types
 */
export const ACCENT_BORDER_COLORS: Record<AccentColorType, string> = {
  energy: 'border-accent-energy',
  progress: 'border-accent-progress',
  intensity: 'border-accent-intensity',
} as const;

/**
 * Ring color mappings for accent types (focus states)
 */
export const ACCENT_RING_COLORS: Record<AccentColorType, string> = {
  energy: 'ring-accent-energy',
  progress: 'ring-accent-progress',
  intensity: 'ring-accent-intensity',
} as const;

/**
 * Get text color class for accent type
 */
export function getAccentTextColor(type: AccentColorType): string {
  return ACCENT_TEXT_COLORS[type];
}

/**
 * Get background color class for accent type
 */
export function getAccentBgColor(type: AccentColorType): string {
  return ACCENT_BG_COLORS[type];
}

/**
 * Get border color class for accent type
 */
export function getAccentBorderColor(type: AccentColorType): string {
  return ACCENT_BORDER_COLORS[type];
}

/**
 * Get ring color class for accent type
 */
export function getAccentRingColor(type: AccentColorType): string {
  return ACCENT_RING_COLORS[type];
}

/**
 * Get all color classes for an accent type
 */
export function getAccentColorSet(type: AccentColorType) {
  return {
    text: getAccentTextColor(type),
    bg: getAccentBgColor(type),
    border: getAccentBorderColor(type),
    ring: getAccentRingColor(type),
  };
}

/**
 * Theme color mappings for different contexts
 */
export const THEME_COLORS = {
  primary: {
    50: 'var(--primary-50)',
    100: 'var(--primary-100)',
    500: 'var(--primary-500)',
    600: 'var(--primary-600)',
    700: 'var(--primary-700)',
    900: 'var(--primary-900)',
  },
  secondary: {
    50: 'var(--secondary-50)',
    100: 'var(--secondary-100)',
    200: 'var(--secondary-200)',
    300: 'var(--secondary-300)',
    400: 'var(--secondary-400)',
    500: 'var(--secondary-500)',
  },
  muted: {
    foreground: 'var(--muted-foreground)',
  },
} as const;

/**
 * Status color mappings
 */
export const STATUS_COLORS = {
  success: {
    text: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-50 dark:bg-green-900/20',
    border: 'border-green-200 dark:border-green-800',
  },
  warning: {
    text: 'text-yellow-600 dark:text-yellow-400',
    bg: 'bg-yellow-50 dark:bg-yellow-900/20',
    border: 'border-yellow-200 dark:border-yellow-800',
  },
  error: {
    text: 'text-red-600 dark:text-red-400',
    bg: 'bg-red-50 dark:bg-red-900/20',
    border: 'border-red-200 dark:border-red-800',
  },
  info: {
    text: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-200 dark:border-blue-800',
  },
} as const;

/**
 * Get status color classes
 */
export function getStatusColors(status: keyof typeof STATUS_COLORS) {
  return STATUS_COLORS[status];
}

/**
 * Gradient mappings for accent types
 */
export const ACCENT_GRADIENTS: Record<AccentColorType, string> = {
  energy: 'from-accent-energy to-accent-energy/60',
  progress: 'from-accent-progress to-accent-progress/60',
  intensity: 'from-accent-intensity to-accent-intensity/60',
} as const;

/**
 * Get gradient class for accent type
 */
export function getAccentGradient(type: AccentColorType): string {
  return `bg-gradient-to-r ${ACCENT_GRADIENTS[type]}`;
}

/**
 * Color opacity utilities
 */
export const OPACITY_VARIANTS = {
  5: '5',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  60: '60',
  70: '70',
  80: '80',
  90: '90',
} as const;

/**
 * Apply opacity to color class
 */
export function withOpacity(colorClass: string, opacity: keyof typeof OPACITY_VARIANTS): string {
  return `${colorClass}/${OPACITY_VARIANTS[opacity]}`;
}

/**
 * Random accent color picker for animations/particles
 */
export function getRandomAccentType(): AccentColorType {
  const types: AccentColorType[] = ['energy', 'progress', 'intensity'];
  return types[Math.floor(Math.random() * types.length)];
}

/**
 * Color palette for data visualization
 */
export const CHART_COLORS = [
  'var(--accent-energy)',
  'var(--accent-progress)',
  'var(--accent-intensity)',
  'var(--primary-500)',
  'var(--secondary-400)',
] as const;

/**
 * Get chart color by index
 */
export function getChartColor(index: number): string {
  return CHART_COLORS[index % CHART_COLORS.length];
}
