// Type augmentations for Bun tests with @testing-library/jest-dom
// These matchers are added at runtime by @testing-library/jest-dom
// but TypeScript doesn't know about them in Bun's context

declare module 'bun:test' {
  interface Matchers<T = unknown> {
    // Add type signatures for jest-dom matchers used in our tests
    // This is a pragmatic solution - not all matchers are listed,
    // just the ones we use
    toBeInTheDocument(): this;
    toHaveClass(...classNames: string[]): this;
    toHaveAttribute(attr: string, value?: any): this;
    toBeVisible(): this;
    toBeDisabled(): this;
    toBeEnabled(): this;
    toContainElement(element: any): this;
    toContainHTML(html: string): this;
    toHaveStyle(css: any): this;
    toHaveTextContent(text: string | RegExp): this;
  }
}

export {};
