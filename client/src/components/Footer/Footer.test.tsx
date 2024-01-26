import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import { Footer } from './Footer';

describe('Footer', () => {
  it('renders Footer', () => {
    render(<Footer />);

    screen.debug();

    // check if App components renders headline
  });
});