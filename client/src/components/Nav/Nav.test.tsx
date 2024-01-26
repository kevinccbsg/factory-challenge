import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import { Nav } from './Nav';

describe('Nav', () => {
  it('renders Nav', () => {
    render(<Nav />);

    screen.debug();

    // check if App components renders headline
  });
});