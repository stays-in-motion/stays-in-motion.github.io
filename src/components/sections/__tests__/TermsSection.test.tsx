import { describe, expect, test } from 'bun:test';
import { render, screen } from '@testing-library/react';
import { TermsSection } from '../TermsSection';
import { MOVA_LINKS, MOVA_SUPPORT_EMAIL } from '@/constants/links';
import '../../../test-setup';

describe('TermsSection', () => {
  test('references the Apple Standard EULA without inventing a custom license', () => {
    render(<TermsSection />);

    expect(screen.getByRole('heading', { name: /mova terms of service/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /standard eula/i })).toHaveAttribute('href', MOVA_LINKS.appleStandardEula);
  });

  test('describes the shipped subscription and safety facts', () => {
    render(<TermsSection />);

    expect(screen.getByText(/monthly and yearly auto-renewing subscriptions/i)).toBeInTheDocument();
    expect(screen.getByText(/planning assistance, not medical advice/i)).toBeInTheDocument();
    expect(screen.getByText(/only upload or submit material you are permitted to use/i)).toBeInTheDocument();
  });

  test('links to canonical privacy and support destinations', () => {
    render(<TermsSection />);

    expect(screen.getByRole('link', { name: /privacy policy/i })).toHaveAttribute('href', MOVA_LINKS.privacy);
    expect(screen.getByRole('link', { name: MOVA_SUPPORT_EMAIL })).toHaveAttribute('href', MOVA_LINKS.supportEmail);
  });
});
