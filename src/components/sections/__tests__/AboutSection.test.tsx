import { afterEach, test, expect, describe } from 'bun:test';
import { cleanup, render, screen } from '@testing-library/react';
import { AboutSection } from '../AboutSection';
import '../../../test-setup';

afterEach(cleanup);

describe('AboutSection', () => {
  test('labels the manually written outline as illustrative rather than an app result', () => {
    render(<AboutSection />);

    const example = screen.getByTestId('illustrative-plan');
    expect(example).toBeInTheDocument();
    expect(screen.getByText(/illustrative plan · manually written/i)).toBeInTheDocument();
    expect(
      screen.getByText(/not an app screenshot, a generated result or a complete workout to teach/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/no model was run to produce this example/i)).toBeInTheDocument();
  });

  test('shows the three outline sections and instructor review reminder', () => {
    render(<AboutSection />);

    expect(screen.getByRole('heading', { name: /a 30-minute class outline/i })).toBeInTheDocument();
    expect(screen.getByText('Warm-up')).toBeInTheDocument();
    expect(screen.getByText('Main section')).toBeInTheDocument();
    expect(screen.getByText('Cool-down')).toBeInTheDocument();
    expect(
      screen.getByText(/check exercise selection, timing, transitions and participant needs/i),
    ).toBeInTheDocument();
  });
});
