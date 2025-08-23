import { test, expect, describe, beforeEach, mock } from 'bun:test';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { SupportSection } from '../components/sections/SupportSection';
import { DownloadSection } from '../components/sections/DownloadSection';
import '../test-setup';

// Mock external dependencies
mock.module('@/assets/qr-app-store.png', () => ({
  default: '/mock-qr-code.png',
}));

mock.module('lucide-react', () => ({
  HelpCircle: () => <div data-testid="help-circle">HelpCircle</div>,
  User: () => <div data-testid="user">User</div>,
  Settings: () => <div data-testid="settings">Settings</div>,
  Play: () => <div data-testid="play">Play</div>,
  Mail: () => <div data-testid="mail">Mail</div>,
  MessageSquare: () => <div data-testid="message-square">MessageSquare</div>,
  Smartphone: () => <div data-testid="smartphone">Smartphone</div>,
  Tablet: () => <div data-testid="tablet">Tablet</div>,
  Monitor: () => <div data-testid="monitor">Monitor</div>,
}));

describe('Component Integration Tests', () => {
  beforeEach(() => {
    cleanup();
    if (global.window.open) {
      (global.window.open as any).mockClear();
    }
    Object.defineProperty(global.window, 'location', {
      value: { href: '' },
      writable: true,
    });
  });

  describe('SupportSection and DownloadSection Integration', () => {
    test('both sections can be rendered together without conflicts', () => {
      render(
        <div>
          <SupportSection />
          <DownloadSection />
        </div>,
      );

      // Both sections should be present
      expect(screen.getByRole('heading', { name: /how can we help/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /ready to get moving/i })).toBeInTheDocument();
    });

    test('external link handlers work independently', () => {
      render(
        <div>
          <SupportSection />
          <DownloadSection />
        </div>,
      );

      // Test SupportSection email link
      const supportEmailButton = screen.getByRole('button', { name: /send email/i });
      fireEvent.click(supportEmailButton);
      expect(global.window.location.href).toBe('mailto:movastaysinmotionar@gmail.com');

      // Reset location
      Object.defineProperty(global.window, 'location', {
        value: { href: '' },
        writable: true,
      });

      // Test DownloadSection App Store link
      const appStoreButton = screen.getByRole('button', { name: /app store/i });
      fireEvent.click(appStoreButton);
      expect(global.window.open).toHaveBeenCalledWith(
        'https://apps.apple.com/us/app/mova-fitness-instruction/id6738900718',
        '_blank',
      );
    });

    test('both sections maintain proper accessibility', () => {
      render(
        <div>
          <SupportSection />
          <DownloadSection />
        </div>,
      );

      // Check that both sections have proper regions
      const sections = screen.getAllByRole('region');
      expect(sections.length).toBe(2);

      // Check for proper heading hierarchy
      const mainHeadings = screen.getAllByRole('heading', { level: 2 });
      expect(mainHeadings.length).toBe(2);
    });

    test("interactive elements don't interfere with each other", () => {
      render(
        <div>
          <SupportSection />
          <DownloadSection />
        </div>,
      );

      // Test SupportSection tab switching
      const technicalTab = screen.getByRole('button', { name: /technical/i });
      fireEvent.click(technicalTab);
      expect(screen.getByRole('heading', { name: /technical support/i })).toBeInTheDocument();

      // DownloadSection should still be functional
      const appStoreButton = screen.getByRole('button', { name: /app store/i });
      expect(appStoreButton).toBeInTheDocument();
      fireEvent.click(appStoreButton);
      expect(global.window.open).toHaveBeenCalled();
    });
  });

  describe('Responsive Design Integration', () => {
    test('components adapt to different screen sizes', () => {
      render(
        <div>
          <SupportSection />
          <DownloadSection />
        </div>,
      );

      // Check for responsive classes
      const responsiveGrids = document.querySelectorAll('.md\\:grid-cols-3, .md\\:grid-cols-4');
      expect(responsiveGrids.length).toBeGreaterThan(0);

      const responsiveFlexContainers = document.querySelectorAll('.sm\\:flex-row');
      expect(responsiveFlexContainers.length).toBeGreaterThan(0);
    });
  });

  describe('Animation Integration', () => {
    test('scroll reveal animations are properly applied across components', () => {
      render(
        <div>
          <SupportSection />
          <DownloadSection />
        </div>,
      );

      // Both components should use scroll-reveal animations
      const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
      expect(scrollRevealElements.length).toBeGreaterThan(0);
    });

    test('hover animations work independently', () => {
      render(
        <div>
          <SupportSection />
          <DownloadSection />
        </div>,
      );

      // Check for hover transition classes
      const hoverElements = document.querySelectorAll('.hover\\:scale-105, .hover\\:shadow-md');
      expect(hoverElements.length).toBeGreaterThan(0);
    });
  });

  describe('Content Consistency', () => {
    test('both sections use consistent design system colors', () => {
      render(
        <div>
          <SupportSection />
          <DownloadSection />
        </div>,
      );

      // Check for accent color usage
      expect(document.querySelector('.text-accent-energy')).toBeInTheDocument();
      expect(document.querySelector('.bg-accent-energy, .text-accent-energy')).toBeInTheDocument();
    });

    test('typography scale is consistent across sections', () => {
      render(
        <div>
          <SupportSection />
          <DownloadSection />
        </div>,
      );

      // Main headings should use similar scales
      const mainHeadings = screen.getAllByRole('heading', { level: 2 });
      mainHeadings.forEach((heading) => {
        expect(heading.className).toMatch(/text-4xl|text-5xl/);
      });
    });

    test('spacing and layout patterns are consistent', () => {
      render(
        <div>
          <SupportSection />
          <DownloadSection />
        </div>,
      );

      // Both should use py-20 for section spacing
      const sections = document.querySelectorAll('.py-20');
      expect(sections.length).toBe(2);

      // Both should use container mx-auto px-6 pattern
      const containers = document.querySelectorAll('.container.mx-auto.px-6');
      expect(containers.length).toBe(2);
    });
  });

  describe('Error Handling Integration', () => {
    test('components handle missing data gracefully', () => {
      // This tests that components don't break when rendered together
      // even if some data might be missing
      const { container } = render(
        <div>
          <SupportSection />
          <DownloadSection />
        </div>,
      );

      expect(container).toBeInTheDocument();
      expect(container.children.length).toBe(1);
    });
  });

  describe('Performance Considerations', () => {
    test("components don't create excessive DOM nodes", () => {
      const { container } = render(
        <div>
          <SupportSection />
          <DownloadSection />
        </div>,
      );

      // Check that the DOM tree isn't excessively deep or wide
      const allElements = container.querySelectorAll('*');
      expect(allElements.length).toBeLessThan(500); // Reasonable limit
    });

    test('event listeners are properly isolated', () => {
      render(
        <div>
          <SupportSection />
          <DownloadSection />
        </div>,
      );

      // Each component should handle its own events without interference
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);

      // Test that clicking one button doesn't affect others
      const firstButton = buttons[0];
      const initialButtonCount = buttons.length;

      fireEvent.click(firstButton);

      // Button count should remain the same (no unintended state changes)
      const newButtons = screen.getAllByRole('button');
      expect(newButtons.length).toBe(initialButtonCount);
    });
  });
});
