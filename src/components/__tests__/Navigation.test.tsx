import { afterEach, beforeEach, expect, test } from 'bun:test';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { Navigation } from '../Navigation';
import { INSTRUCTOR_OFFER } from '@/constants/offer';
import '../../test-setup';

beforeEach(() => Object.assign(globalThis, { localStorage: window.localStorage }));
afterEach(cleanup);
test('centralized walkthrough action and mobile section selector remain keyboard accessible', () => {
  render(<Navigation activeSection="hero" />);
  const request = screen.getByRole('button', { name: INSTRUCTOR_OFFER.navCta });
  request.focus();
  expect(document.activeElement).toBe(request);
  fireEvent.click(request);
  const selector = screen.getByRole('combobox', { name: 'Navigate to section' });
  fireEvent.change(selector, { target: { value: 'download' } });
  expect(screen.getByRole('option', { name: 'Walkthrough & app' })).toBeInTheDocument();
});
