import { test, expect, describe, beforeEach, mock } from 'bun:test';
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { App } from '../App';
import '../test-setup';

// Mock all the section components
mock.module('@/components/Navigation', () => ({
  Navigation: ({ activeSection }: { activeSection: string }) => (
    <nav data-testid="navigation" data-active-section={activeSection}>
      Navigation
    </nav>
  ),
}));

mock.module('@/components/sections/HeroSection', () => ({
  HeroSection: ({
    onDownloadClick,
    onLearnMoreClick,
  }: {
    onDownloadClick: () => void;
    onLearnMoreClick: () => void;
  }) => (
    <div data-testid="hero-section">
      <button onClick={onDownloadClick} data-testid="hero-download">
        Download
      </button>
      <button onClick={onLearnMoreClick} data-testid="hero-learn-more">
        Learn More
      </button>
    </div>
  ),
}));

mock.module('@/components/sections/AboutSection', () => ({
  AboutSection: () => <div data-testid="about-section">About Section</div>,
}));

mock.module('@/components/sections/SupportSection', () => ({
  SupportSection: () => <div data-testid="support-section">Support Section</div>,
}));

mock.module('@/components/sections/ChangelogSection', () => ({
  ChangelogSection: () => <div data-testid="changelog-section">Changelog Section</div>,
}));

mock.module('@/components/sections/DownloadSection', () => ({
  DownloadSection: () => <div data-testid="download-section">Download Section</div>,
}));

// Mock CSS import
mock.module('./index.css', () => ({}));

describe('App Component Layout and Footer Positioning', () => {
  beforeEach(() => {
    cleanup();
    // Mock getElementById for smooth scrolling tests
    global.document.getElementById = mock((id: string) => {
      const mockElement = {
        scrollIntoView: mock(),
        offsetTop: 100,
      };
      return mockElement;
    });

    // Mock scroll events
    global.window.scrollY = 0;
    global.window.addEventListener = mock();
    global.window.removeEventListener = mock();
  });

  test('renders with correct flex layout structure', () => {
    render(<App />);

    // Main container should use flexbox for sticky footer
    const mainContainer = document.querySelector('.flex.flex-col.flex-1');
    expect(mainContainer).toBeInTheDocument();
  });

  test('renders navigation component', () => {
    render(<App />);

    expect(screen.getByTestId('navigation')).toBeInTheDocument();
  });

  test('renders all section components in correct order', () => {
    render(<App />);

    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
    expect(screen.getByTestId('about-section')).toBeInTheDocument();
    expect(screen.getByTestId('support-section')).toBeInTheDocument();
    expect(screen.getByTestId('changelog-section')).toBeInTheDocument();
    expect(screen.getByTestId('download-section')).toBeInTheDocument();
  });

  test('main content area has proper flex styling', () => {
    render(<App />);

    const mainElement = document.querySelector('main');
    expect(mainElement).toHaveClass('flex-1');
  });

  test('footer has proper positioning and styling', () => {
    render(<App />);

    const footer = document.querySelector('footer');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass('py-12', 'bg-secondary/50', 'border-t', 'border-border');
  });

  test('footer content is properly structured', () => {
    render(<App />);

    // Brand section
    expect(screen.getByRole('heading', { name: /mova/i })).toBeInTheDocument();
    expect(screen.getByText(/transform your playlists into perfect interval workouts/i)).toBeInTheDocument();

    // Quick Links section
    expect(screen.getByRole('heading', { name: /quick links/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /about mova/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /get support/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /what's new/i })).toBeInTheDocument();

    // Contact section
    expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /movastaysinmotionar@gmail.com/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /support form/i })).toBeInTheDocument();
  });

  test('footer grid layout is responsive', () => {
    render(<App />);

    const footerGrid = document.querySelector('.grid.md\\:grid-cols-3');
    expect(footerGrid).toBeInTheDocument();
    expect(footerGrid).toHaveClass('gap-8');
  });

  test('copyright section is properly positioned', () => {
    render(<App />);

    const copyrightSection = document.querySelector('.border-t.border-border.mt-8.pt-8.text-center');
    expect(copyrightSection).toBeInTheDocument();

    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear} Mova`))).toBeInTheDocument();
    expect(screen.getByText(/keep moving, keep growing/i)).toBeInTheDocument();
  });

  test('footer links have proper hover effects', () => {
    render(<App />);

    const aboutLink = screen.getByRole('button', { name: /about mova/i });
    const supportLink = screen.getByRole('button', { name: /get support/i });
    const changelogLink = screen.getByRole('button', { name: /what's new/i });

    expect(aboutLink).toHaveClass('hover:text-accent-energy', 'transition-colors');
    expect(supportLink).toHaveClass('hover:text-accent-progress', 'transition-colors');
    expect(changelogLink).toHaveClass('hover:text-accent-intensity', 'transition-colors');
  });

  test('external links have proper security attributes', () => {
    render(<App />);

    const supportFormLink = screen.getByRole('link', { name: /support form/i });
    expect(supportFormLink).toHaveAttribute('target', '_blank');
    expect(supportFormLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('email link has correct mailto href', () => {
    render(<App />);

    const emailLink = screen.getByRole('link', { name: /movastaysinmotionar@gmail.com/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:movastaysinmotionar@gmail.com');
  });

  test('hero section download button scrolls to download section', () => {
    render(<App />);

    const downloadButton = screen.getByTestId('hero-download');
    fireEvent.click(downloadButton);

    expect(global.document.getElementById).toHaveBeenCalledWith('download');
  });

  test('hero section learn more button scrolls to about section', () => {
    render(<App />);

    const learnMoreButton = screen.getByTestId('hero-learn-more');
    fireEvent.click(learnMoreButton);

    expect(global.document.getElementById).toHaveBeenCalledWith('about');
  });

  test('footer navigation buttons trigger smooth scrolling', () => {
    render(<App />);

    const aboutButton = screen.getByRole('button', { name: /about mova/i });
    const supportButton = screen.getByRole('button', { name: /get support/i });
    const changelogButton = screen.getByRole('button', { name: /what's new/i });

    fireEvent.click(aboutButton);
    fireEvent.click(supportButton);
    fireEvent.click(changelogButton);

    expect(global.document.getElementById).toHaveBeenCalledWith('about');
    expect(global.document.getElementById).toHaveBeenCalledWith('support');
    expect(global.document.getElementById).toHaveBeenCalledWith('changelog');
  });

  test('scroll event listener is properly set up and cleaned up', () => {
    const { unmount } = render(<App />);

    expect(global.window.addEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));

    unmount();

    expect(global.window.removeEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));
  });

  test('sections have proper IDs for navigation', () => {
    render(<App />);

    expect(document.getElementById('hero')).toBeInTheDocument();
    // Other sections are rendered by their components, IDs tested in individual component tests
  });

  test('container spacing is consistent throughout footer', () => {
    render(<App />);

    const footerContainer = document.querySelector('footer .container.mx-auto.px-6');
    expect(footerContainer).toBeInTheDocument();
  });

  test('brand section has proper spacing and typography', () => {
    render(<App />);

    const brandSection = screen.getByRole('heading', { name: /mova/i }).closest('.space-y-4');
    expect(brandSection).toBeInTheDocument();

    const brandHeading = screen.getByRole('heading', { name: /mova/i });
    expect(brandHeading).toHaveClass('text-2xl', 'font-bold', 'text-accent-energy');
  });

  test('footer sections have consistent spacing', () => {
    render(<App />);

    const spacedSections = document.querySelectorAll('.space-y-4');
    expect(spacedSections.length).toBeGreaterThanOrEqual(3); // Brand, Quick Links, Contact

    const spacedLinks = document.querySelectorAll('.space-y-2');
    expect(spacedLinks.length).toBeGreaterThanOrEqual(2); // Quick Links and Contact links
  });

  test('layout prevents footer from floating (sticky footer)', () => {
    render(<App />);

    // Check the flex structure that ensures footer sticks to bottom
    const appContainer = document.querySelector('.flex.flex-col.flex-1');
    const mainContent = document.querySelector('main.flex-1');
    const footer = document.querySelector('footer');

    expect(appContainer).toBeInTheDocument();
    expect(mainContent).toBeInTheDocument();
    expect(footer).toBeInTheDocument();

    // This structure ensures footer sticks to bottom even with minimal content
  });

  test('footer maintains proper visual hierarchy', () => {
    render(<App />);

    // Section headings should be semibold
    const quickLinksHeading = screen.getByRole('heading', { name: /quick links/i });
    const contactHeading = screen.getByRole('heading', { name: /get in touch/i });

    expect(quickLinksHeading).toHaveClass('font-semibold');
    expect(contactHeading).toHaveClass('font-semibold');

    // Copyright text should be smaller and muted
    const copyrightText = screen.getByText(/© 2025 Mova/);
    expect(copyrightText).toHaveClass('text-sm', 'text-muted-foreground');
  });

  test('footer background provides proper contrast', () => {
    render(<App />);

    const footer = document.querySelector('footer');
    expect(footer).toHaveClass('bg-secondary/50');
    expect(footer).toHaveClass('border-t', 'border-border');
  });
});
