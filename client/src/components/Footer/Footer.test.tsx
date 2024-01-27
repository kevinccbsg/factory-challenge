import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Footer } from './Footer';

describe('Footer', () => {
  it('renders Footer', () => {
    render(<Footer />);

    expect(screen.getByRole('contentinfo')).toHaveTextContent('kevinccbsg');
  });
});
