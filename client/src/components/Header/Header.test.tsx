import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Header } from './Header';
import { Status } from '../ToleranceIcons/status';

describe('Header', () => {
  it('renders headline', () => {
    render(<Header status={Status.OK} title="Gear" />);

    expect(screen.getByRole('heading')).toHaveTextContent('Gear');
    const element = screen.getByRole('img');
    expect(element.className).toContain('anticon-check-circle');
  });
});
