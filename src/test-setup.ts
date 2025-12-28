import { beforeAll, mock } from 'bun:test';
import '@testing-library/jest-dom';

// Mock window.open and window.location for tests
beforeAll(() => {
  // Mock window.open
  global.window.open = mock(() => null);

  // Mock window.location.href setter
  Object.defineProperty(global.window, 'location', {
    value: {
      href: '',
      assign: mock(),
      reload: mock(),
    },
    writable: true,
  });

  // Mock document.createElement and DOM APIs
  const mockStyle = {
    textContent: '',
  };

  global.document.createElement = mock((tagName: string) => {
    if (tagName === 'style') {
      return {
        ...mockStyle,
        textContent: '',
      };
    }
    return {} as any;
  }) as any;

  Object.defineProperty(global.document, 'head', {
    value: {
      appendChild: mock(),
    },
    writable: true,
  });

  // Mock matchMedia for responsive tests
  global.window.matchMedia = mock((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: mock(),
    removeListener: mock(),
    addEventListener: mock(),
    removeEventListener: mock(),
    dispatchEvent: mock(),
  }));

  // Mock prefers-reduced-motion
  global.window.matchMedia = mock((query: string) => {
    if (query === '(prefers-reduced-motion: reduce)') {
      return {
        matches: false, // Default to false, can be overridden in tests
        media: query,
        onchange: null,
        addListener: mock(),
        removeListener: mock(),
        addEventListener: mock(),
        removeEventListener: mock(),
        dispatchEvent: mock(),
      };
    }
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: mock(),
      removeListener: mock(),
      addEventListener: mock(),
      removeEventListener: mock(),
      dispatchEvent: mock(),
    };
  });
});
