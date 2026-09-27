import { beforeAll, mock } from 'bun:test';
import { Window } from 'happy-dom';
import '@testing-library/jest-dom';

const testWindow = new Window({ url: 'https://staysinmotion.com/' });

Object.assign(globalThis, {
  document: testWindow.document,
  Element: testWindow.Element,
  HTMLElement: testWindow.HTMLElement,
  navigator: testWindow.navigator,
  Node: testWindow.Node,
  window: testWindow,
});

const createElement = global.document.createElement.bind(global.document);
global.document.createElement = mock((tagName: string, options?: ElementCreationOptions) =>
  createElement(tagName, options),
) as typeof global.document.createElement;

// Mock window.open and window.location for tests
beforeAll(() => {
  // Mock window.open
  global.window.open = mock(() => null);

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
