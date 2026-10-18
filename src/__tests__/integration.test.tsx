import { afterEach, describe, expect, test } from 'bun:test';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { SupportSection } from '../components/sections/SupportSection';
import { DownloadSection } from '../components/sections/DownloadSection';
import { INSTRUCTOR_OFFER } from '@/constants/offer';
import { MOVA_ACCOUNT_DELETION_COPY } from '@/constants/account-deletion';
import { MOVA_LINKS } from '@/constants/links';
import '../test-setup';

afterEach(cleanup);

describe('support and instructor access', () => {
  test('offers a walkthrough alongside the correctly labeled current app', () => {
    render(
      <>
        <SupportSection />
        <DownloadSection />
      </>,
    );
    expect(screen.getAllByRole('region')).toHaveLength(2);
    expect(screen.getByTestId('offer-preview-cta')).toHaveAttribute('href', INSTRUCTOR_OFFER.href);
    expect(screen.getByTestId('iphone-app-store-link')).toHaveAttribute('href', INSTRUCTOR_OFFER.appStoreHref);
    expect(screen.getByText(INSTRUCTOR_OFFER.appStoreDescription)).toBeInTheDocument();
  });

  test('keeps deletion help and legal access available without changing the request CTA', () => {
    render(
      <>
        <SupportSection />
        <DownloadSection />
      </>,
    );
    fireEvent.click(screen.getByRole('button', { name: 'Account' }));
    expect(screen.getByText(MOVA_ACCOUNT_DELETION_COPY.receipt)).toBeInTheDocument();
    expect(screen.getByText(MOVA_ACCOUNT_DELETION_COPY.fulfillment)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: MOVA_ACCOUNT_DELETION_COPY.privacyLinkLabel })).toHaveAttribute(
      'href',
      MOVA_LINKS.privacy,
    );
    expect(screen.getByTestId('offer-preview-cta')).toHaveAttribute('href', INSTRUCTOR_OFFER.href);
  });

  test('switching help leaves app access intact and gives paid-but-inactive recovery', () => {
    render(
      <>
        <SupportSection />
        <DownloadSection />
      </>,
    );
    fireEvent.click(screen.getByRole('button', { name: 'Technical' }));
    expect(screen.getByText('Technical Support')).toBeInTheDocument();
    expect(screen.getByTestId('iphone-app-store-link')).toHaveAttribute('href', INSTRUCTOR_OFFER.appStoreHref);
    fireEvent.click(screen.getByRole('button', { name: 'FAQ' }));
    expect(screen.getByText(/do not purchase again to resolve activation/i)).toBeInTheDocument();
  });
});
