import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { App } from '../App';
import { INSTRUCTOR_OFFER } from '@/constants/offer';
import { MOVA_LINKS } from '@/constants/links';
import '../test-setup';

beforeEach(() => {
  Object.assign(globalThis, { localStorage: window.localStorage });
  window.localStorage.clear();
});
afterEach(cleanup);

describe('instructor website journey', () => {
  test('orders the real workflow, access and support sections', () => {
    const { container } = render(<App />);
    expect([...container.querySelectorAll('main > section')].map((s) => s.id)).toEqual([
      'hero',
      'about',
      'download',
      'support',
      'privacy',
      'changelog',
    ]);
    expect(screen.getByTestId('illustrative-plan')).toBeInTheDocument();
    expect(screen.getByTestId('hero-preview-cta')).toHaveAttribute('href', INSTRUCTOR_OFFER.href);
  });

  test('keeps canonical legal/support links and current iPhone access', () => {
    render(<App />);
    for (const link of screen.getAllByRole('link', { name: /privacy policy/i })) {
      expect(link).toHaveAttribute('href', MOVA_LINKS.privacy);
    }
    for (const link of screen.getAllByRole('link', { name: /terms of service/i })) {
      expect(link).toHaveAttribute('href', MOVA_LINKS.terms);
    }
    expect(screen.getAllByRole('link', { name: 'support@staysinmotion.com' })[0]).toHaveAttribute(
      'href',
      MOVA_LINKS.supportEmail,
    );
    expect(screen.getByTestId('iphone-app-store-link')).toHaveAttribute('href', INSTRUCTOR_OFFER.appStoreHref);
    expect(screen.queryByText(/legacy converter|original spotify-to-seconds/i)).not.toBeInTheDocument();
  });

  test('real navigation and support controls preserve the offer and example', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Navigate to Support section' }));
    fireEvent.click(screen.getByRole('button', { name: 'Technical' }));
    expect(screen.getByText('Technical Support')).toBeInTheDocument();
    expect(screen.getByTestId('offer-preview-cta')).toHaveAttribute('href', INSTRUCTOR_OFFER.href);
    expect(screen.getByTestId('illustrative-plan')).toBeInTheDocument();
  });
});
