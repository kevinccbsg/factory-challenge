import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ToleranceIcons } from './ToleranceIcons';
import { Status } from './status';

describe('ToleranceIcons', () => {
  it('renders ToleranceIcons status OK', () => {
    render(<ToleranceIcons value={Status.OK} />);

    const element = screen.getByRole('img');
    expect(element.ariaLabel).toContain('success');
  });

  it('renders ToleranceIcons status WARNING', () => {
    render(<ToleranceIcons value={Status.WARNING} />);

    const element = screen.getByRole('img');
    expect(element.ariaLabel).toContain('warning');
  });

  it('renders ToleranceIcons status ERROR', () => {
    render(<ToleranceIcons value={Status.ERROR} />);

    const element = screen.getByRole('img');
    expect(element.ariaLabel).toContain('error');
  });
});