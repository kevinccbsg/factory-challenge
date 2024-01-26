import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import { Header } from './Header';
import { Status } from '../ToleranceIcons/status';

describe('Header', () => {
  it('renders headline', () => {
    render(<Header status={Status.OK} title="Gear" />);

    screen.debug();

    // check if App components renders headline
  });
});