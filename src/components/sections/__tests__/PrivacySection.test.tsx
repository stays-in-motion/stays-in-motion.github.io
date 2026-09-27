import { describe, expect, test } from 'bun:test';
import { render, screen } from '@testing-library/react';
import { PrivacySection } from '../PrivacySection';
import '../../../test-setup';

describe('PrivacySection', () => {
  test('describes the current product data flow', () => {
    render(<PrivacySection />);

    expect(screen.getByRole('heading', { name: /privacy policy/i })).toBeInTheDocument();
    expect(screen.getByText('Supabase')).toBeInTheDocument();
    expect(screen.getByText('RevenueCat and Apple')).toBeInTheDocument();
    expect(screen.getByText('Cloudflare AI Gateway and OpenAI')).toBeInTheDocument();
    expect(screen.getByText('Apple Music, MusicBrainz, and Spotify')).toBeInTheDocument();
  });

  test('states that archive is not permanent deletion', () => {
    render(<PrivacySection />);

    expect(screen.getByText(/it is not permanent account deletion/i)).toBeInTheDocument();
  });

  test('provides the canonical support address', () => {
    render(<PrivacySection />);

    const supportLink = screen.getByRole('link', { name: 'support@staysinmotion.com' });
    expect(supportLink).toHaveAttribute('href', 'mailto:support@staysinmotion.com');
  });

  test('standalone page links back to support', () => {
    render(<PrivacySection standalone />);

    expect(screen.getByRole('link', { name: /back to mova support/i })).toHaveAttribute('href', '/');
  });
});
