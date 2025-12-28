import { render, type RenderOptions } from '@testing-library/react';
import type { ReactElement } from 'react';

// Custom render function that can be extended with providers if needed
export function renderWithProviders(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return render(ui, {
    // Can add providers here in the future (theme, router, etc.)
    ...options,
  });
}

// Mock data generators for tests
export const mockChangelogEntry = {
  version: '1.0.0',
  date: 'January 1, 2024',
  type: 'major' as const,
  title: 'Test Release',
  features: ['Test feature'],
  improvements: ['Test improvement'],
  bugfixes: ['Test bugfix'],
  breaking: ['Test breaking change'],
};

// Helper to mock window.matchMedia for responsive tests
export function mockMatchMedia(matches: boolean = false) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => {},
    }),
  });
}

// Helper to mock reduced motion preference
export function mockReducedMotion(preferReduced: boolean = true) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => {
      if (query === '(prefers-reduced-motion: reduce)') {
        return {
          matches: preferReduced,
          media: query,
          onchange: null,
          addListener: () => {},
          removeListener: () => {},
          addEventListener: () => {},
          removeEventListener: () => {},
          dispatchEvent: () => {},
        };
      }
      return {
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => {},
      };
    },
  });
}

// Helper to mock smooth scrolling
export function mockSmoothScroll() {
  Element.prototype.scrollIntoView = function (options) {
    // Mock implementation that doesn't actually scroll
    return;
  };
}

// Helper to create mock functions for external links
export function mockExternalLinks() {
  Object.defineProperty(window, 'open', {
    writable: true,
    value: () => null,
  });

  Object.defineProperty(window, 'location', {
    writable: true,
    value: {
      href: '',
      assign: () => {},
      reload: () => {},
    },
  });
}

// Re-export everything from @testing-library/react
export * from '@testing-library/react';
