/**
 * Animation utilities for scroll reveals and transitions
 * Consolidates animation logic used across sections
 */

/**
 * CSS for scroll reveal animations
 */
export const SCROLL_REVEAL_STYLES = `
  .scroll-reveal {
    animation: fade-in-up 0.8s ease-out;
  }
  
  .scroll-reveal-delayed {
    animation: fade-in-up 0.8s ease-out 0.2s both;
  }
  
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fade-in-left {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes fade-in-right {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes scale-in {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .animate-fade-in-left {
    animation: fade-in-left 0.8s ease-out;
  }
  
  .animate-fade-in-right {
    animation: fade-in-right 0.8s ease-out;
  }
  
  .animate-scale-in {
    animation: scale-in 0.6s ease-out;
  }
`;

/**
 * Injects scroll reveal styles into the document
 */
export function injectScrollRevealStyles(): void {
  // Check if styles are already injected
  if (document.querySelector('#scroll-reveal-styles')) {
    return;
  }

  const styleElement = document.createElement('style');
  styleElement.id = 'scroll-reveal-styles';
  styleElement.textContent = SCROLL_REVEAL_STYLES;
  document.head.appendChild(styleElement);
}

/**
 * Animation delay classes for staggered reveals
 */
export const ANIMATION_DELAYS = {
  none: '',
  short: 'delay-100',
  medium: 'delay-200',
  long: 'delay-300',
  extraLong: 'delay-500',
} as const;

/**
 * Creates staggered animation delays for multiple elements
 */
export function createStaggeredDelays(count: number, baseDelay: number = 100): string[] {
  return Array.from({ length: count }, (_, i) => `delay-[${baseDelay + i * 100}ms]`);
}

/**
 * Intersection Observer for scroll-triggered animations
 */
export function createScrollObserver(
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {},
): IntersectionObserver {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
}

/**
 * Adds scroll reveal animation to elements when they come into view
 */
export function observeElementsForReveal(
  selector: string = '.scroll-reveal',
  animationClass: string = 'opacity-100 translate-y-0',
): IntersectionObserver | null {
  if (typeof window === 'undefined') return null;

  const elements = document.querySelectorAll(selector);
  if (elements.length === 0) return null;

  // Initially hide elements
  elements.forEach((el) => {
    if (el instanceof HTMLElement) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    }
  });

  const observer = createScrollObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target instanceof HTMLElement) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  });

  elements.forEach((el) => observer.observe(el));
  return observer;
}

/**
 * Particle animation configurations
 */
export interface ParticleConfig {
  size: 'sm' | 'md' | 'lg';
  color: 'energy' | 'progress' | 'intensity';
  position: string;
  animation: string;
  delay?: string;
}

export const PARTICLE_SIZES = {
  sm: 'w-1 h-1',
  md: 'w-2 h-2',
  lg: 'w-3 h-3',
} as const;

export const PARTICLE_COLORS = {
  energy: 'bg-accent-energy',
  progress: 'bg-accent-progress',
  intensity: 'bg-accent-intensity',
} as const;

/**
 * Generates particle configurations for animated backgrounds
 */
export function generateParticleConfigs(count: number = 12): ParticleConfig[] {
  const configs: ParticleConfig[] = [];
  const colors: Array<'energy' | 'progress' | 'intensity'> = ['energy', 'progress', 'intensity'];
  const sizes: Array<'sm' | 'md' | 'lg'> = ['sm', 'md', 'lg'];
  const animations = ['animate-bounce', 'animate-pulse', 'animate-ping'];

  for (let i = 0; i < count; i++) {
    configs.push({
      size: sizes[i % sizes.length],
      color: colors[i % colors.length],
      position: `top-[${Math.random() * 100}%] left-[${Math.random() * 100}%]`,
      animation: animations[i % animations.length],
      delay: `delay-[${Math.random() * 2000}ms]`,
    });
  }

  return configs;
}

/**
 * Clean up animations and observers
 */
export function cleanupAnimations(): void {
  // Remove injected styles
  const styleElement = document.querySelector('#scroll-reveal-styles');
  if (styleElement) {
    styleElement.remove();
  }
}

/**
 * Hook for using animations (to be used in React components)
 */
export interface UseAnimationsReturn {
  injectStyles: () => void;
  observeElements: (selector?: string) => IntersectionObserver | null;
  cleanup: () => void;
}

/**
 * Animation utilities bundle for React components
 */
export function useAnimations(): UseAnimationsReturn {
  return {
    injectStyles: injectScrollRevealStyles,
    observeElements: observeElementsForReveal,
    cleanup: cleanupAnimations,
  };
}
