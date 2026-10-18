import { test, expect, describe, beforeEach, mock } from 'bun:test';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { HeroSection } from '../HeroSection';
import { INSTRUCTOR_OFFER } from '@/constants/offer';
import '../../../test-setup';

describe('HeroSection', () => {
  const onLearnMoreClick = mock(() => {});

  beforeEach(() => {
    cleanup();
    onLearnMoreClick.mockClear();
  });

  test('describes an instructor-reviewed planning draft without claiming completed results', () => {
    render(<HeroSection onLearnMoreClick={onLearnMoreClick} />);

    expect(screen.getByRole('heading', { name: /your next class.*ready for your edits/i })).toBeInTheDocument();
    expect(screen.getByText(/turn a class idea into a structured draft/i)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(INSTRUCTOR_OFFER.status))).toBeInTheDocument();
    expect(screen.getByText(INSTRUCTOR_OFFER.availability)).toBeInTheDocument();
  });

  test('preview CTA uses the centralized request link and has a stable selector', () => {
    render(<HeroSection onLearnMoreClick={onLearnMoreClick} />);

    const cta = screen.getByTestId('hero-preview-cta');
    expect(cta).toHaveAttribute('href', INSTRUCTOR_OFFER.href);
    expect(cta).toHaveTextContent(INSTRUCTOR_OFFER.cta);
  });

  test('learn-more control scroll action remains available', () => {
    render(<HeroSection onLearnMoreClick={onLearnMoreClick} />);

    fireEvent.click(screen.getByRole('button', { name: /see the illustrative class plan/i }));
    expect(onLearnMoreClick).toHaveBeenCalledTimes(1);
  });

  test('hero actions stack on narrow screens and sit in a row at the small breakpoint', () => {
    render(<HeroSection onLearnMoreClick={onLearnMoreClick} />);

    const actions = screen.getByTestId('hero-preview-cta').parentElement;
    expect(actions).toHaveClass('flex', 'flex-col', 'sm:flex-row', 'gap-4');
  });
});
