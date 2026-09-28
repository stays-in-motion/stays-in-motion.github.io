import { MOVA_ACCOUNT_DELETION_COPY } from '@/constants/account-deletion';
import { describe, expect, test } from 'bun:test';
import { render, screen } from '@testing-library/react';
import { PrivacySection } from '../PrivacySection';
import { MOVA_LINKS } from '@/constants/links';
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

  test('explains a pending request, manual completion, retained records, and historical archive', () => {
    render(<PrivacySection />);

    for (const copy of [
      MOVA_ACCOUNT_DELETION_COPY.initiation,
      MOVA_ACCOUNT_DELETION_COPY.receipt,
      MOVA_ACCOUNT_DELETION_COPY.fulfillment,
      MOVA_ACCOUNT_DELETION_COPY.retainedRecords,
      MOVA_ACCOUNT_DELETION_COPY.billingWarning,
      MOVA_ACCOUNT_DELETION_COPY.historicalArchive,
    ]) {
      expect(screen.getByText(copy)).toBeInTheDocument();
    }
    expect(screen.getByText(/including saved classes, templates, uploaded documents/i)).toBeInTheDocument();
    expect(
      screen.getByText(/removed from the deletion-request record after that notice is confirmed/i),
    ).toBeInTheDocument();
    expect(screen.queryByText(/linked support form/i)).not.toBeInTheDocument();
  });

  test('provides the canonical support address', () => {
    render(<PrivacySection />);

    const supportLink = screen.getByRole('link', { name: 'support@staysinmotion.com' });
    expect(supportLink).toHaveAttribute('href', 'mailto:support@staysinmotion.com');
  });

  test('standalone page links back to support', () => {
    render(<PrivacySection standalone />);

    expect(screen.getByRole('link', { name: /back to mova support/i })).toHaveAttribute('href', MOVA_LINKS.home);
  });
});
