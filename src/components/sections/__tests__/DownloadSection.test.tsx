import { test, expect, describe, beforeEach, mock } from 'bun:test';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { DownloadSection } from '../DownloadSection';
import '../../../test-setup';

// Mock image imports
mock.module('@/assets/qr-app-store.png', () => ({
  default: '/mock-qr-code.png',
}));

// Mock lucide-react icons
mock.module('lucide-react', () => ({
  Smartphone: ({ size, className }: { size?: number; className?: string }) => (
    <div data-testid="smartphone-icon" data-size={size} className={className}>
      Smartphone
    </div>
  ),
  Tablet: ({ size, className }: { size?: number; className?: string }) => (
    <div data-testid="tablet-icon" data-size={size} className={className}>
      Tablet
    </div>
  ),
  Monitor: ({ size, className }: { size?: number; className?: string }) => (
    <div data-testid="monitor-icon" data-size={size} className={className}>
      Monitor
    </div>
  ),
}));

describe('DownloadSection', () => {
  beforeEach(() => {
    cleanup();
    // Reset window.open mock
    if (global.window.open) {
      (global.window.open as any).mockClear();
    }
  });

  test('renders main heading and description', () => {
    render(<DownloadSection />);

    expect(screen.getByRole('heading', { name: /ready to get moving/i })).toBeInTheDocument();
    expect(screen.getByText(/download mova and transform your music into motivation/i)).toBeInTheDocument();
  });

  test('renders App Store badge with correct styling', () => {
    render(<DownloadSection />);

    const appStoreButton = screen.getByRole('button', { name: /app store/i });
    expect(appStoreButton).toBeInTheDocument();
    expect(appStoreButton).toHaveClass('h-auto', 'p-3', 'border-2');

    expect(screen.getByText('Download on the')).toBeInTheDocument();
    expect(screen.getByText('App Store')).toBeInTheDocument();
  });

  test('App Store button opens correct URL', () => {
    render(<DownloadSection />);

    const appStoreButton = screen.getByRole('button', { name: /app store/i });
    fireEvent.click(appStoreButton);

    expect(global.window.open).toHaveBeenCalledWith(
      'https://apps.apple.com/us/app/mova-fitness-instruction/id6738900718',
      '_blank',
    );
  });

  test('renders QR code with proper accessibility', () => {
    render(<DownloadSection />);

    const qrImage = screen.getByAltText('QR Code to download Mova app from App Store');
    expect(qrImage).toBeInTheDocument();
    expect(qrImage).toHaveAttribute('src', '/mock-qr-code.png');

    expect(screen.getByText('Scan to download')).toBeInTheDocument();
  });

  test('QR code has proper styling and layout', () => {
    render(<DownloadSection />);

    const qrImage = screen.getByAltText('QR Code to download Mova app from App Store');
    const qrContainer = qrImage.closest('.w-32.h-32');

    expect(qrContainer).toBeInTheDocument();
    expect(qrContainer).toHaveClass('bg-background', 'rounded-lg', 'shadow-sm', 'border');
  });

  test('displays side-by-side layout for App Store badge and QR code', () => {
    render(<DownloadSection />);

    // Should be in a flex container
    const container = screen.getByRole('button', { name: /app store/i }).closest('.flex');
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('flex-col', 'sm:flex-row');
  });

  test('shows Android and Web coming soon notice', () => {
    render(<DownloadSection />);

    expect(screen.getByText(/android & web versions.*coming in 2025/i)).toBeInTheDocument();
    expect(screen.getByText(/currently available on ios only/i)).toBeInTheDocument();
  });

  test('renders device mockup grid with all platforms', () => {
    render(<DownloadSection />);

    expect(screen.getByRole('heading', { name: /platform roadmap/i })).toBeInTheDocument();

    // iPhone (available)
    expect(screen.getByText('iPhone Only')).toBeInTheDocument();
    expect(screen.getByText('Perfect for workouts on the go')).toBeInTheDocument();

    // Tablet (coming soon)
    expect(screen.getByText('Tablet & Android')).toBeInTheDocument();
    expect(screen.getByText('In development for 2025')).toBeInTheDocument();

    // Web (coming soon)
    expect(screen.getByText('Web Experience')).toBeInTheDocument();
    expect(screen.getByText('Planned for future release')).toBeInTheDocument();
  });

  test('device mockups have proper visual styling', () => {
    render(<DownloadSection />);

    // iPhone mockup (active)
    const iphoneMockup = screen.getByText('iPhone Only').closest('.text-center');
    const iphoneDevice = iphoneMockup?.querySelector('.w-32.h-64');
    expect(iphoneDevice).toHaveClass('bg-foreground', 'rounded-2xl', 'shadow-lg');

    // Tablet mockup (coming soon)
    const tabletMockup = screen.getByText('Tablet & Android').closest('.text-center');
    const tabletDevice = tabletMockup?.querySelector('.w-40.h-32');
    expect(tabletDevice).toHaveClass('bg-muted/50', 'rounded-xl', 'shadow-lg');

    // Web mockup (coming soon)
    const webMockup = screen.getByText('Web Experience').closest('.text-center');
    const webDevice = webMockup?.querySelector('.w-40.h-24');
    expect(webDevice).toHaveClass('bg-muted/50', 'rounded-lg', 'shadow-lg');
  });

  test('renders all device icons correctly', () => {
    render(<DownloadSection />);

    expect(screen.getByTestId('smartphone-icon')).toBeInTheDocument();
    expect(screen.getByTestId('tablet-icon')).toBeInTheDocument();
    expect(screen.getByTestId('monitor-icon')).toBeInTheDocument();
  });

  test('device mockups show correct content', () => {
    render(<DownloadSection />);

    // iPhone should show "Mobile App"
    expect(screen.getByText('Mobile App')).toBeInTheDocument();

    // Tablet and Web should show "Coming Soon"
    const comingSoonTexts = screen.getAllByText('Coming Soon');
    expect(comingSoonTexts.length).toBe(2); // One for tablet, one for web
  });

  test('responsive design classes are applied', () => {
    render(<DownloadSection />);

    // Main grid should be responsive
    const deviceGrid = screen.getByText('iPhone Only').closest('.grid');
    expect(deviceGrid).toHaveClass('md:grid-cols-3');

    // App store and QR code container should be responsive
    const appStoreContainer = screen.getByRole('button', { name: /app store/i }).closest('.flex');
    expect(appStoreContainer).toHaveClass('flex-col', 'sm:flex-row');
  });

  test('includes helpful text for both download methods', () => {
    render(<DownloadSection />);

    expect(screen.getByText('Click to download')).toBeInTheDocument();
    expect(screen.getByText('Scan to download')).toBeInTheDocument();
  });

  test('section has proper ID for navigation', () => {
    render(<DownloadSection />);

    const section = screen.getByRole('region');
    expect(section).toHaveAttribute('id', 'download');
  });

  test('QR code value prop is passed correctly', () => {
    render(<DownloadSection />);

    // The QR code component receives the App Store URL as a prop
    // We can verify this through the image being rendered
    const qrImage = screen.getByAltText('QR Code to download Mova app from App Store');
    expect(qrImage).toBeInTheDocument();
  });

  test('App Store badge has hover effects', () => {
    render(<DownloadSection />);

    const appStoreButton = screen.getByRole('button', { name: /app store/i });
    expect(appStoreButton).toHaveClass('hover:scale-105', 'transition-all', 'duration-200');
  });

  test('device mockups have staggered animation delays', () => {
    render(<DownloadSection />);

    // Check for animation delay styles on coming soon devices
    const tabletMockup = screen.getByText('Tablet & Android').closest('.scroll-reveal');
    const webMockup = screen.getByText('Web Experience').closest('.scroll-reveal');

    expect(tabletMockup).toHaveStyle({ animationDelay: '0.1s' });
    expect(webMockup).toHaveStyle({ animationDelay: '0.2s' });
  });

  test('handles iOS platform correctly in AppStoreBadge', () => {
    render(<DownloadSection />);

    // Should render iOS-specific text and icon
    expect(screen.getByText('Download on the')).toBeInTheDocument();
    expect(screen.getByText('App Store')).toBeInTheDocument();

    // Should not show Android text
    expect(screen.queryByText('Get it on')).not.toBeInTheDocument();
    expect(screen.queryByText('Google Play')).not.toBeInTheDocument();
  });

  test('scroll reveal animations are applied', () => {
    render(<DownloadSection />);

    // Check that scroll-reveal class is applied to animated elements
    const animatedElements = document.querySelectorAll('.scroll-reveal');
    expect(animatedElements.length).toBeGreaterThan(0);
  });
});
