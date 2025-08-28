/**
 * Navigation hook for the marketing site
 * Consolidates scroll behavior and section management
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import {
  scrollToSection,
  scrollToTop,
  getCurrentActiveSection,
  createScrollSpy,
  handleNavigationClick,
  throttle,
  DEFAULT_SECTIONS,
  type NavigationSection,
} from '../utils/navigation';

export interface UseNavigationOptions {
  sections?: NavigationSection[];
  offset?: number;
  throttleDelay?: number;
}

/**
 * Hook for navigation state and scroll management
 */
export function useNavigation(options: UseNavigationOptions = {}) {
  const { sections = DEFAULT_SECTIONS, offset = 80, throttleDelay = 100 } = options;

  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const cleanupRef = useRef<(() => void) | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  /**
   * Navigate to a section
   */
  const navigateToSection = useCallback(
    (sectionId: string) => {
      setIsScrolling(true);
      scrollToSection(sectionId, offset);

      // Clear scrolling state after animation
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    },
    [offset],
  );

  /**
   * Navigate to top
   */
  const navigateToTop = useCallback(() => {
    setIsScrolling(true);
    scrollToTop();

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  }, []);

  /**
   * Handle navigation click events
   */
  const handleNavClick = useCallback(
    (event: Event, sectionId: string) => {
      handleNavigationClick(event, sectionId, offset);
      setActiveSection(sectionId);
    },
    [offset],
  );

  /**
   * Get navigation items with active state
   */
  const navigationItems = sections.map((section) => ({
    ...section,
    isActive: activeSection === section.id,
    onClick: (event: Event) => handleNavClick(event, section.id),
  }));

  /**
   * Set up scroll spy
   */
  useEffect(() => {
    const sectionIds = sections.map((s) => s.id);

    const throttledCallback = throttle((active: string | null) => {
      if (!isScrolling) {
        setActiveSection(active);
      }
    }, throttleDelay);

    cleanupRef.current = createScrollSpy(sectionIds, throttledCallback, offset);

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
      }
    };
  }, [sections, offset, isScrolling, throttleDelay]);

  /**
   * Cleanup timeouts on unmount
   */
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return {
    activeSection,
    isScrolling,
    navigationItems,
    navigateToSection,
    navigateToTop,
    handleNavClick,
    sections,
  };
}

/**
 * Hook for mobile navigation state
 */
export function useMobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const open = useCallback(() => {
    setIsAnimating(true);
    setIsOpen(true);
    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    setTimeout(() => setIsAnimating(false), 300);
  }, []);

  const close = useCallback(() => {
    setIsAnimating(true);
    setIsOpen(false);
    // Restore body scroll
    document.body.style.overflow = '';

    setTimeout(() => setIsAnimating(false), 300);
  }, []);

  const toggle = useCallback(() => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  }, [isOpen, open, close]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        close();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      // Cleanup body scroll on unmount
      document.body.style.overflow = '';
    };
  }, [isOpen, close]);

  return {
    isOpen,
    isAnimating,
    open,
    close,
    toggle,
  };
}

/**
 * Hook for scroll position tracking
 */
export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollY = window.pageYOffset;

      setScrollY(currentScrollY);

      if (currentScrollY > lastScrollYRef.current) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollYRef.current) {
        setScrollDirection('up');
      }

      lastScrollYRef.current = currentScrollY;
    }, 16); // ~60fps

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Set initial value
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isScrolled = scrollY > 50;
  const isScrolledToBottom = scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10;

  return {
    scrollY,
    scrollDirection,
    isScrolled,
    isScrolledToBottom,
  };
}

/**
 * Hook for hash-based navigation (URL fragments)
 */
export function useHashNavigation() {
  const [hash, setHash] = useState('');

  useEffect(() => {
    const updateHash = () => {
      setHash(window.location.hash);
    };

    // Set initial hash
    updateHash();

    // Listen for hash changes
    window.addEventListener('hashchange', updateHash);
    window.addEventListener('popstate', updateHash);

    return () => {
      window.removeEventListener('hashchange', updateHash);
      window.removeEventListener('popstate', updateHash);
    };
  }, []);

  const navigateToHash = useCallback((newHash: string) => {
    const hashWithoutHash = newHash.startsWith('#') ? newHash.slice(1) : newHash;
    window.location.hash = hashWithoutHash;
    scrollToSection(hashWithoutHash);
  }, []);

  const clearHash = useCallback(() => {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
    setHash('');
  }, []);

  return {
    hash,
    currentSection: hash.replace('#', ''),
    navigateToHash,
    clearHash,
  };
}

/**
 * Hook for smooth scroll behavior detection
 */
export function useSmoothScroll() {
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    setIsSupported('scrollBehavior' in document.documentElement.style);
  }, []);

  return { isSupported };
}
