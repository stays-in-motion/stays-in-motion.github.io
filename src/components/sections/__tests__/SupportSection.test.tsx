import { test, expect, describe, beforeEach, mock } from 'bun:test';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { SupportSection } from '../SupportSection';
import '../../../test-setup';

// Mock lucide-react icons
mock.module('lucide-react', () => ({
  HelpCircle: ({ size, className }: { size?: number; className?: string }) => (
    <div data-testid="help-circle-icon" data-size={size} className={className}>
      HelpCircle
    </div>
  ),
  User: ({ size, className }: { size?: number; className?: string }) => (
    <div data-testid="user-icon" data-size={size} className={className}>
      User
    </div>
  ),
  Settings: ({ size, className }: { size?: number; className?: string }) => (
    <div data-testid="settings-icon" data-size={size} className={className}>
      Settings
    </div>
  ),
  Play: ({ size, className }: { size?: number; className?: string }) => (
    <div data-testid="play-icon" data-size={size} className={className}>
      Play
    </div>
  ),
  Mail: ({ size, className }: { size?: number; className?: string }) => (
    <div data-testid="mail-icon" data-size={size} className={className}>
      Mail
    </div>
  ),
  MessageSquare: ({ size, className }: { size?: number; className?: string }) => (
    <div data-testid="message-square-icon" data-size={size} className={className}>
      MessageSquare
    </div>
  ),
}));

describe('SupportSection', () => {
  beforeEach(() => {
    cleanup();
    // Reset mocks
    if (global.window.open) {
      (global.window.open as any).mockClear();
    }
    Object.defineProperty(global.window, 'location', {
      value: {
        href: '',
        assign: mock(),
        reload: mock(),
      },
      writable: true,
    });
  });

  test('renders main heading and description', () => {
    render(<SupportSection />);

    expect(screen.getByRole('heading', { name: /how can we help/i })).toBeInTheDocument();
    expect(screen.getByText(/get the support you need to make the most of your mova experience/i)).toBeInTheDocument();
  });

  test('renders all help category tabs', () => {
    render(<SupportSection />);

    expect(screen.getByRole('button', { name: /faq/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /technical/i })).toBeInTheDocument();
    expect(screen.getByText('Account')).toBeInTheDocument();
    expect(screen.getByText('Workouts')).toBeInTheDocument();
  });

  test('FAQ tab is active by default', () => {
    render(<SupportSection />);

    const faqTab = screen.getByRole('button', { name: /faq/i });
    expect(faqTab.closest('.ring-2')).toBeInTheDocument(); // Active state ring

    // FAQ content should be visible
    expect(screen.getByRole('heading', { name: /frequently asked questions/i })).toBeInTheDocument();
    expect(screen.getByText(/how do i convert a spotify playlist/i)).toBeInTheDocument();
  });

  test('clicking Technical tab switches content', () => {
    render(<SupportSection />);

    const technicalTab = screen.getByRole('button', { name: /technical/i });
    fireEvent.click(technicalTab);

    // Technical content should be visible
    expect(screen.getByRole('heading', { name: /technical support/i })).toBeInTheDocument();
    expect(screen.getByText(/system requirements/i)).toBeInTheDocument();
    expect(screen.getByText(/ios 15.1 or later required/i)).toBeInTheDocument();

    // FAQ content should no longer be visible
    expect(screen.queryByRole('heading', { name: /frequently asked questions/i })).not.toBeInTheDocument();
  });

  test('Account and Workouts tabs show coming soon content', () => {
    render(<SupportSection />);

    // These tabs are not clickable, just display "Coming Soon"
    const accountTab = screen.getByText('Account').closest('.cursor-pointer');
    const workoutsTab = screen.getByText('Workouts').closest('.cursor-pointer');

    expect(accountTab).toBeNull(); // Should not be clickable
    expect(workoutsTab).toBeNull(); // Should not be clickable

    // They should have "Coming Soon" text
    const comingSoonTexts = screen.getAllByText('Coming Soon');
    expect(comingSoonTexts.length).toBeGreaterThanOrEqual(2);
  });

  test('active tab has visual highlighting', () => {
    render(<SupportSection />);

    const faqTab = screen.getByRole('button', { name: /faq/i });
    const technicalTab = screen.getByRole('button', { name: /technical/i });

    // FAQ should be active initially
    expect(faqTab.closest('.ring-2')).toBeInTheDocument();
    expect(technicalTab.closest('.ring-2')).toBeNull();

    // Click Technical tab
    fireEvent.click(technicalTab);

    // Technical should now be active
    expect(technicalTab.closest('.ring-2')).toBeInTheDocument();
    expect(faqTab.closest('.ring-2')).toBeNull();
  });

  test('renders contact section with support form and email', () => {
    render(<SupportSection />);

    expect(screen.getByRole('heading', { name: /still need help/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /open support form/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send email/i })).toBeInTheDocument();

    expect(screen.getByText(/send message/i)).toBeInTheDocument();
    expect(screen.getByText(/email us/i)).toBeInTheDocument();
  });

  test('support form button opens external URL', () => {
    render(<SupportSection />);

    const supportFormButton = screen.getByRole('button', { name: /open support form/i });
    fireEvent.click(supportFormButton);

    expect(global.window.open).toHaveBeenCalledWith(
      'https://docs.google.com/forms/d/e/1FAIpQLSeOpCWZYp8dD2lPWSu5dPNjbx_TdKtl0UCe7t-ku3O9Zth12Q/viewform',
      '_blank',
    );
  });

  test('email button triggers mailto link', () => {
    render(<SupportSection />);

    const emailButton = screen.getByRole('button', { name: /send email/i });
    fireEvent.click(emailButton);

    expect(global.window.location.href).toBe('mailto:movastaysinmotionar@gmail.com');
  });

  test('FAQ content includes key questions and answers', () => {
    render(<SupportSection />);

    // Should be on FAQ by default
    expect(screen.getByText(/how do i convert a spotify playlist/i)).toBeInTheDocument();
    expect(screen.getByText(/simply paste your spotify playlist url/i)).toBeInTheDocument();

    expect(screen.getByText(/can i save my workout conversions/i)).toBeInTheDocument();
    expect(screen.getByText(/create an account to save/i)).toBeInTheDocument();

    expect(screen.getByText(/is there a guest mode/i)).toBeInTheDocument();
    expect(screen.getByText(/you can use the converter without creating an account/i)).toBeInTheDocument();
  });

  test('Technical content includes system requirements and troubleshooting', () => {
    render(<SupportSection />);

    const technicalTab = screen.getByRole('button', { name: /technical/i });
    fireEvent.click(technicalTab);

    expect(screen.getByText(/system requirements/i)).toBeInTheDocument();
    expect(screen.getByText(/ios 15.1 or later required/i)).toBeInTheDocument();
    expect(screen.getByText(/internet connection needed/i)).toBeInTheDocument();

    expect(screen.getByText(/common issues & solutions/i)).toBeInTheDocument();
    expect(screen.getByText(/app crashes.*force close and restart/i)).toBeInTheDocument();

    expect(screen.getByText(/performance tips/i)).toBeInTheDocument();
    expect(screen.getByText(/close other apps before converting/i)).toBeInTheDocument();
  });

  test('renders all required icons', () => {
    render(<SupportSection />);

    // Help category icons
    expect(screen.getByTestId('help-circle-icon')).toBeInTheDocument();
    expect(screen.getByTestId('settings-icon')).toBeInTheDocument();
    expect(screen.getByTestId('user-icon')).toBeInTheDocument();
    expect(screen.getByTestId('play-icon')).toBeInTheDocument();

    // Contact card icons
    expect(screen.getByTestId('message-square-icon')).toBeInTheDocument();
    expect(screen.getByTestId('mail-icon')).toBeInTheDocument();
  });

  test('hoverable categories show cursor pointer styling', () => {
    render(<SupportSection />);

    const faqTab = screen.getByRole('button', { name: /faq/i });
    const technicalTab = screen.getByRole('button', { name: /technical/i });

    expect(faqTab.closest('.cursor-pointer')).toBeInTheDocument();
    expect(technicalTab.closest('.cursor-pointer')).toBeInTheDocument();
  });

  test('includes device information request in contact section', () => {
    render(<SupportSection />);

    expect(screen.getByText(/please include your device model and operating system version/i)).toBeInTheDocument();
  });

  test('tab switching preserves other UI elements', () => {
    render(<SupportSection />);

    // Switch between tabs multiple times
    const technicalTab = screen.getByRole('button', { name: /technical/i });
    const faqTab = screen.getByRole('button', { name: /faq/i });

    fireEvent.click(technicalTab);
    fireEvent.click(faqTab);
    fireEvent.click(technicalTab);

    // Contact section should always be present
    expect(screen.getByRole('heading', { name: /still need help/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /open support form/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send email/i })).toBeInTheDocument();

    // Main heading should always be present
    expect(screen.getByRole('heading', { name: /how can we help/i })).toBeInTheDocument();
  });

  test('accessibility: has proper section structure', () => {
    render(<SupportSection />);

    const section = screen.getByRole('region');
    expect(section).toHaveAttribute('id', 'support');
  });
});
