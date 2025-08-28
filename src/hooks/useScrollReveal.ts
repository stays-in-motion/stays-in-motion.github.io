/**
 * Scroll reveal animation hook for the marketing site
 * Consolidates scroll-triggered animation logic
 */

import { useEffect, useRef, useCallback } from 'react';
import {
  injectScrollRevealStyles,
  createScrollObserver,
  observeElementsForReveal,
  cleanupAnimations,
} from '../utils/animations';

export interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
  selector?: string;
  autoInject?: boolean;
}

/**
 * Hook for scroll reveal animations
 */
export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    animationClass = 'scroll-reveal',
    selector = '.scroll-reveal',
    autoInject = true,
  } = options;

  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<Set<Element>>(new Set());

  /**
   * Initialize scroll reveal
   */
  const initialize = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Inject styles if auto-inject is enabled
    if (autoInject) {
      injectScrollRevealStyles();
    }

    // Clean up existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Find elements to animate
    const elements = document.querySelectorAll(selector);
    elementsRef.current.clear();

    if (elements.length === 0) return;

    // Create intersection observer
    observerRef.current = createScrollObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            // Add animation class
            entry.target.classList.add(animationClass);

            // Trigger reveal animation
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';

            // Stop observing this element
            observerRef.current?.unobserve(entry.target);
            elementsRef.current.delete(entry.target);
          }
        });
      },
      { threshold, rootMargin },
    );

    // Set up initial styles and start observing
    elements.forEach((element) => {
      if (element instanceof HTMLElement) {
        // Set initial hidden state
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';

        // Start observing
        observerRef.current?.observe(element);
        elementsRef.current.add(element);
      }
    });
  }, [threshold, rootMargin, animationClass, selector, autoInject]);

  /**
   * Manually trigger reveal for specific element
   */
  const revealElement = useCallback(
    (element: HTMLElement) => {
      element.classList.add(animationClass);
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';

      if (observerRef.current) {
        observerRef.current.unobserve(element);
      }
      elementsRef.current.delete(element);
    },
    [animationClass],
  );

  /**
   * Add new elements to be observed
   */
  const observeElements = useCallback(
    (newSelector?: string) => {
      const selectorToUse = newSelector || selector;
      const elements = document.querySelectorAll(selectorToUse);

      elements.forEach((element) => {
        if (element instanceof HTMLElement && !elementsRef.current.has(element)) {
          // Set initial hidden state
          element.style.opacity = '0';
          element.style.transform = 'translateY(30px)';
          element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';

          // Start observing
          observerRef.current?.observe(element);
          elementsRef.current.add(element);
        }
      });
    },
    [selector],
  );

  /**
   * Reset and re-initialize
   */
  const reset = useCallback(() => {
    // Clean up
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
    elementsRef.current.clear();

    // Re-initialize
    initialize();
  }, [initialize]);

  /**
   * Reveal all elements immediately
   */
  const revealAll = useCallback(() => {
    elementsRef.current.forEach((element) => {
      if (element instanceof HTMLElement) {
        revealElement(element);
      }
    });
  }, [revealElement]);

  // Initialize on mount
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timeout = setTimeout(initialize, 100);
    return () => clearTimeout(timeout);
  }, [initialize]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      elementsRef.current.clear();

      if (autoInject) {
        cleanupAnimations();
      }
    };
  }, [autoInject]);

  return {
    initialize,
    reset,
    revealElement,
    revealAll,
    observeElements,
    isActive: !!observerRef.current,
    elementCount: elementsRef.current.size,
  };
}

/**
 * Hook for delayed scroll reveal (with stagger effect)
 */
export function useStaggeredScrollReveal(options: UseScrollRevealOptions & { staggerDelay?: number } = {}) {
  const { staggerDelay = 100, ...revealOptions } = options;
  const scrollReveal = useScrollReveal(revealOptions);
  const staggerTimeoutsRef = useRef<NodeJS.Timeout[]>([]);

  /**
   * Reveal elements with stagger effect
   */
  const revealWithStagger = useCallback(
    (elements: HTMLElement[]) => {
      // Clear existing timeouts
      staggerTimeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
      staggerTimeoutsRef.current = [];

      elements.forEach((element, index) => {
        const timeout = setTimeout(() => {
          scrollReveal.revealElement(element);
        }, index * staggerDelay);

        staggerTimeoutsRef.current.push(timeout);
      });
    },
    [scrollReveal.revealElement, staggerDelay],
  );

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      staggerTimeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  return {
    ...scrollReveal,
    revealWithStagger,
  };
}

/**
 * Hook for scroll reveal with custom animations
 */
export function useCustomScrollReveal<T extends HTMLElement = HTMLElement>(
  customAnimation: (element: T) => void,
  options: Omit<UseScrollRevealOptions, 'animationClass'> = {},
) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<Set<T>>(new Set());

  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', selector = '.scroll-reveal' } = options;

  const initialize = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Clean up existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const elements = document.querySelectorAll(selector);
    elementsRef.current.clear();

    if (elements.length === 0) return;

    observerRef.current = createScrollObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            customAnimation(entry.target as T);
            observerRef.current?.unobserve(entry.target);
            elementsRef.current.delete(entry.target as T);
          }
        });
      },
      { threshold, rootMargin },
    );

    elements.forEach((element) => {
      if (element instanceof HTMLElement) {
        observerRef.current?.observe(element);
        elementsRef.current.add(element as T);
      }
    });
  }, [threshold, rootMargin, selector, customAnimation]);

  useEffect(() => {
    const timeout = setTimeout(initialize, 100);
    return () => clearTimeout(timeout);
  }, [initialize]);

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      elementsRef.current.clear();
    };
  }, []);

  return {
    initialize,
    elementCount: elementsRef.current.size,
  };
}
