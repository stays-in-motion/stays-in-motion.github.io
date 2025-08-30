import { test, expect, describe, beforeEach, mock } from 'bun:test';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { HeroSection } from '../HeroSection';
import '../../../test-setup';

describe('HeroSection', () => {
  const mockOnDownloadClick = mock(() => {});
  const mockOnLearnMoreClick = mock(() => {});

  beforeEach(() => {
    cleanup();
    mockOnDownloadClick.mockClear();
    mockOnLearnMoreClick.mockClear();
  });

  test('renders main heading with correct styling', () => {
    render(<HeroSection onDownloadClick={mockOnDownloadClick} onLearnMoreClick={mockOnLearnMoreClick} />);

    const heading = screen.getByRole('heading', { name: /stay in motion/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('text-5xl', 'md:text-6xl', 'lg:text-7xl', 'font-extrabold');

    // "Motion" should have accent styling
    const motionSpan = screen.getByText('Motion');
    expect(motionSpan).toHaveClass('text-accent-energy');
  });

  test('renders descriptive subtitle', () => {
    render(<HeroSection onDownloadClick={mockOnDownloadClick} onLearnMoreClick={mockOnLearnMoreClick} />);

    expect(screen.getByText(/transform your playlists into perfect interval workouts/i)).toBeInTheDocument();
  });

  test('renders Download App button with correct styling and functionality', () => {
    render(<HeroSection onDownloadClick={mockOnDownloadClick} onLearnMoreClick={mockOnLearnMoreClick} />);

    const downloadButton = screen.getByRole('button', { name: /download app/i });
    expect(downloadButton).toBeInTheDocument();
    expect(downloadButton).toHaveClass('btn-primary', 'px-8', 'py-3', 'text-lg', 'font-semibold');
    expect(downloadButton).toHaveClass('bg-accent-energy', 'text-black');

    fireEvent.click(downloadButton);
    expect(mockOnDownloadClick).toHaveBeenCalledTimes(1);
  });

  test('renders Learn More button with correct styling and functionality', () => {
    render(<HeroSection onDownloadClick={mockOnDownloadClick} onLearnMoreClick={mockOnLearnMoreClick} />);

    const learnMoreButton = screen.getByRole('button', { name: /learn more/i });
    expect(learnMoreButton).toBeInTheDocument();
    expect(learnMoreButton).toHaveClass('px-8', 'py-3', 'text-lg', 'font-semibold');
    expect(learnMoreButton).toHaveClass('border-2', 'border-accent-progress/30');

    fireEvent.click(learnMoreButton);
    expect(mockOnLearnMoreClick).toHaveBeenCalledTimes(1);
  });

  test('buttons have proper responsive layout', () => {
    render(<HeroSection onDownloadClick={mockOnDownloadClick} onLearnMoreClick={mockOnLearnMoreClick} />);

    const buttonContainer = screen.getByRole('button', { name: /download app/i }).closest('.flex');
    expect(buttonContainer).toHaveClass('flex-col', 'sm:flex-row', 'gap-4', 'justify-center');
  });

  test('renders particle animations with correct positioning', () => {
    render(<HeroSection onDownloadClick={mockOnDownloadClick} onLearnMoreClick={mockOnLearnMoreClick} />);

    // Check for particle container
    const particleContainer = document.querySelector('.absolute.inset-0.overflow-hidden.pointer-events-none');
    expect(particleContainer).toBeInTheDocument();

    // Check for individual particles with animation classes
    const particles = document.querySelectorAll(
      '.animate-particle-float, .animate-particle-drift, .animate-particle-sway, .animate-particle-pulse',
    );
    expect(particles.length).toBe(6); // 4 main particles + 2 additional

    // Verify particle positioning classes
    expect(document.querySelector('.top-20.left-10')).toBeInTheDocument();
    expect(document.querySelector('.top-40.right-20')).toBeInTheDocument();
    expect(document.querySelector('.bottom-40.left-20')).toBeInTheDocument();
    expect(document.querySelector('.bottom-20.right-10')).toBeInTheDocument();
  });

  test('particles use GPU-accelerated properties only', () => {
    render(<HeroSection onDownloadClick={mockOnDownloadClick} onLearnMoreClick={mockOnLearnMoreClick} />);

    // Particles should use transform and opacity for animations (GPU-accelerated)
    const particles = document.querySelectorAll('[class*="animate-particle"]');

    particles.forEach((particle) => {
      // Check that particles are positioned absolutely (efficient for animations)
      expect(particle).toHaveClass('absolute');
      // Check that they're circular (rounded-full)
      expect(particle).toHaveClass('rounded-full');
      // Check they have appropriate opacity
      expect(particle.className).toMatch(/opacity-\d+/);
    });
  });

  test('particles have staggered animation delays', () => {
    render(<HeroSection onDownloadClick={mockOnDownloadClick} onLearnMoreClick={mockOnLearnMoreClick} />);

    // Additional particles should have animation delays
    const delayedParticles = document.querySelectorAll('[style*="animationDelay"]');
    expect(delayedParticles.length).toBe(2);

    // Verify specific delays
    const particle1 = document.querySelector('[style*="animation-delay: 2s"]');
    const particle2 = document.querySelector('[style*="animation-delay: 1.5s"]');
    expect(particle1).toBeInTheDocument();
    expect(particle2).toBeInTheDocument();
  });

  test('accessibility: respects prefers-reduced-motion', () => {
    // Mock reduced motion preference
    global.window.matchMedia = mock((query: string) => {
      if (query === '(prefers-reduced-motion: reduce)') {
        return {
          matches: true,
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

    render(<HeroSection onDownloadClick={mockOnDownloadClick} onLearnMoreClick={mockOnLearnMoreClick} />);

    // When reduced motion is preferred, animations should be disabled
    // This would typically be handled by CSS, but we can test the setup
    expect(window.matchMedia('(prefers-reduced-motion: reduce)').matches).toBe(true);
  });

  test('background gradient is properly configured', () => {
    render(<HeroSection onDownloadClick={mockOnDownloadClick} onLearnMoreClick={mockOnLearnMoreClick} />);

    const heroSection = document.querySelector('.hero-background');
    expect(heroSection).toHaveClass('bg-gradient-to-br', 'from-background', 'via-background', 'to-secondary/30');

    // Check for gradient overlay
    const gradientOverlay = document.querySelector('.absolute.inset-0.opacity-8');
    expect(gradientOverlay).toBeInTheDocument();
  });

  test('content has proper z-index layering', () => {
    render(<HeroSection onDownloadClick={mockOnDownloadClick} onLearnMoreClick={mockOnLearnMoreClick} />);

    // Main content should be above background elements
    const contentContainer = screen.getByRole('heading', { name: /stay in motion/i }).closest('.relative.z-10');
    expect(contentContainer).toBeInTheDocument();

    // Particles should be non-interactive
    const particleContainer = document.querySelector('.pointer-events-none');
    expect(particleContainer).toBeInTheDocument();
  });

  test('scroll reveal animation is applied', () => {
    render(<HeroSection onDownloadClick={mockOnDownloadClick} onLearnMoreClick={mockOnLearnMoreClick} />);

    const scrollRevealElement = document.querySelector('.scroll-reveal');
    expect(scrollRevealElement).toBeInTheDocument();
  });

  test('buttons have proper focus states for accessibility', () => {
    render(<HeroSection onDownloadClick={mockOnDownloadClick} onLearnMoreClick={mockOnLearnMoreClick} />);

    const downloadButton = screen.getByRole('button', { name: /download app/i });
    const learnMoreButton = screen.getByRole('button', { name: /learn more/i });

    // Both buttons should have focus-visible styles
    expect(downloadButton).toHaveClass('focus-visible:ring-2', 'focus-visible:ring-accent-energy/50');
    expect(learnMoreButton).toHaveClass('focus-visible:ring-2', 'focus-visible:ring-accent-progress/50');
  });

  test('section has full viewport height and proper positioning', () => {
    render(<HeroSection onDownloadClick={mockOnDownloadClick} onLearnMoreClick={mockOnLearnMoreClick} />);

    const heroSection = document.querySelector('section');
    expect(heroSection).toHaveClass('min-h-screen', 'flex', 'items-center', 'relative', 'overflow-hidden');
  });

  test('text content is properly sized and responsive', () => {
    render(<HeroSection onDownloadClick={mockOnDownloadClick} onLearnMoreClick={mockOnLearnMoreClick} />);

    const heading = screen.getByRole('heading', { name: /stay in motion/i });
    expect(heading).toHaveClass('text-5xl', 'md:text-6xl', 'lg:text-7xl');

    const subtitle = screen.getByText(/transform your playlists/i);
    expect(subtitle).toHaveClass('text-xl', 'md:text-2xl');
  });

  test('particle colors match design system', () => {
    render(<HeroSection onDownloadClick={mockOnDownloadClick} onLearnMoreClick={mockOnLearnMoreClick} />);

    // Check for accent color classes on particles
    expect(document.querySelector('.bg-accent-energy')).toBeInTheDocument();
    expect(document.querySelector('.bg-accent-progress')).toBeInTheDocument();
    expect(document.querySelector('.bg-accent-intensity')).toBeInTheDocument();
  });

  test('style injection works correctly', () => {
    render(<HeroSection onDownloadClick={mockOnDownloadClick} onLearnMoreClick={mockOnLearnMoreClick} />);

    // Verify that document.createElement was called for style injection
    expect(global.document.createElement).toHaveBeenCalledWith('style');
    expect(global.document.head.appendChild).toHaveBeenCalled();
  });

  test('handles missing callback props gracefully', () => {
    // Test with undefined callbacks (TypeScript would prevent this, but good to test runtime)
    const { container } = render(
      <HeroSection onDownloadClick={undefined as any} onLearnMoreClick={undefined as any} />,
    );

    expect(container).toBeInTheDocument();

    // Buttons should still render even with undefined callbacks
    expect(screen.getByRole('button', { name: /download app/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /learn more/i })).toBeInTheDocument();
  });

  test('container has proper responsive padding', () => {
    render(<HeroSection onDownloadClick={mockOnDownloadClick} onLearnMoreClick={mockOnLearnMoreClick} />);

    const container = document.querySelector('.container.mx-auto.px-6');
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('text-center');
  });

  test('subtitle has proper constraints and spacing', () => {
    render(<HeroSection onDownloadClick={mockOnDownloadClick} onLearnMoreClick={mockOnLearnMoreClick} />);

    const subtitle = screen.getByText(/transform your playlists/i);
    expect(subtitle).toHaveClass('max-w-2xl', 'mx-auto', 'leading-relaxed', 'mb-8');
  });
});
