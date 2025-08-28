/**
 * Navigation utilities for smooth scrolling and section management
 * Consolidates navigation logic used across components
 */

/**
 * Smooth scroll to a section by ID
 */
export function scrollToSection(sectionId: string, offset: number = 80): void {
  const element = document.getElementById(sectionId);
  if (!element) {
    console.warn(`Element with ID "${sectionId}" not found`);
    return;
  }

  const elementPosition = element.offsetTop - offset;
  window.scrollTo({
    top: elementPosition,
    behavior: 'smooth',
  });
}

/**
 * Scroll to top of page
 */
export function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

/**
 * Get current scroll position
 */
export function getScrollPosition(): number {
  return window.pageYOffset || document.documentElement.scrollTop;
}

/**
 * Check if element is in viewport
 */
export function isElementInViewport(element: Element, offset: number = 0): boolean {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  return rect.top >= -offset && rect.bottom <= windowHeight + offset;
}

/**
 * Get the currently active section based on scroll position
 */
export function getCurrentActiveSection(sectionIds: string[], offset: number = 100): string | null {
  const scrollPosition = getScrollPosition() + offset;

  for (let i = sectionIds.length - 1; i >= 0; i--) {
    const element = document.getElementById(sectionIds[i]);
    if (element && element.offsetTop <= scrollPosition) {
      return sectionIds[i];
    }
  }

  return sectionIds[0] || null;
}

/**
 * Section configuration for navigation
 */
export interface NavigationSection {
  id: string;
  label: string;
  href: string;
}

/**
 * Default navigation sections
 */
export const DEFAULT_SECTIONS: NavigationSection[] = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'support', label: 'Support', href: '#support' },
  { id: 'download', label: 'Download', href: '#download' },
];

/**
 * Handle navigation click with smooth scrolling
 */
export function handleNavigationClick(event: Event, sectionId: string, offset: number = 80): void {
  event.preventDefault();
  scrollToSection(sectionId, offset);
}

/**
 * Set up scroll spy for navigation highlighting
 */
export function createScrollSpy(
  sectionIds: string[],
  callback: (activeSection: string | null) => void,
  offset: number = 100,
): () => void {
  const handleScroll = (): void => {
    const activeSection = getCurrentActiveSection(sectionIds, offset);
    callback(activeSection);
  };

  // Initial check
  handleScroll();

  // Add scroll listener
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}

/**
 * Debounce function for scroll events
 */
export function debounce<T extends (...args: any[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function for scroll events
 */
export function throttle<T extends (...args: any[]) => void>(func: T, limit: number): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * External link handlers
 */
export function openExternalLink(url: string): void {
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function openEmail(email: string, subject?: string, body?: string): void {
  const params = new URLSearchParams();
  if (subject) params.append('subject', subject);
  if (body) params.append('body', body);

  const mailto = `mailto:${email}${params.toString() ? '?' + params.toString() : ''}`;
  window.location.href = mailto;
}

/**
 * Check if device supports smooth scrolling
 */
export function supportsSmoothScroll(): boolean {
  return 'scrollBehavior' in document.documentElement.style;
}

/**
 * Polyfill for smooth scrolling on unsupported browsers
 */
export function scrollToSectionPolyfill(targetPosition: number, duration: number = 300): void {
  const startPosition = getScrollPosition();
  const distance = targetPosition - startPosition;
  const startTime = Date.now();

  function animateScroll(): void {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function (ease-out)
    const easeOutCubic = 1 - Math.pow(1 - progress, 3);
    const currentPosition = startPosition + distance * easeOutCubic;

    window.scrollTo(0, currentPosition);

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
}

/**
 * Enhanced scroll to section with polyfill support
 */
export function scrollToSectionEnhanced(sectionId: string, offset: number = 80, duration: number = 300): void {
  const element = document.getElementById(sectionId);
  if (!element) {
    console.warn(`Element with ID "${sectionId}" not found`);
    return;
  }

  const targetPosition = element.offsetTop - offset;

  if (supportsSmoothScroll()) {
    scrollToSection(sectionId, offset);
  } else {
    scrollToSectionPolyfill(targetPosition, duration);
  }
}
