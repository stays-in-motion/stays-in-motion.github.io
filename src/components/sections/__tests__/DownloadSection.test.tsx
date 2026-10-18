import { afterEach, test, expect, describe } from 'bun:test';
import { cleanup, render, screen } from '@testing-library/react';
import { DownloadSection } from '../DownloadSection';
import { INSTRUCTOR_OFFER } from '@/constants/offer';
import '../../../test-setup';

afterEach(cleanup);

describe('DownloadSection', () => {
  test('offers a preview request and states availability clearly', () => {
    render(<DownloadSection />);

    const section = screen.getByRole('region', { name: /bring your next class idea/i });
    const cta = screen.getByTestId('offer-preview-cta');
    expect(section).toHaveAttribute('id', 'download');
    expect(cta).toHaveAttribute('href', INSTRUCTOR_OFFER.href);
    expect(cta).toHaveTextContent(INSTRUCTOR_OFFER.cta);
    expect(screen.getByText(INSTRUCTOR_OFFER.availability)).toBeInTheDocument();
    expect(screen.queryByText(/buy now|subscribe today|download the planner/i)).not.toBeInTheDocument();
  });

  test('links the released iPhone planner accurately without claiming new preview features', () => {
    render(<DownloadSection />);

    const appLink = screen.getByTestId('iphone-app-store-link');
    expect(appLink).toHaveAttribute('href', INSTRUCTOR_OFFER.appStoreHref);
    expect(appLink).toHaveTextContent(/mova for iphone on the app store/i);
    expect(screen.getByText(INSTRUCTOR_OFFER.appStoreDescription)).toBeInTheDocument();
    expect(screen.queryByText(/legacy converter|original spotify-to-seconds/i)).not.toBeInTheDocument();
  });

  test('uses a responsive two-column layout and distinct section labels', () => {
    render(<DownloadSection />);

    expect(screen.getByRole('region')).toHaveClass('py-20');
    expect(screen.getByRole('region').firstElementChild).toHaveClass('grid', 'md:grid-cols-2', 'gap-10');
    expect(screen.getByRole('heading', { name: /mova for iphone/i })).toBeInTheDocument();
  });
});
