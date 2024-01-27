import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Nav } from './Nav';

describe('Nav', () => {
  it('renders Nav', () => {
    render(<Nav />);

    expect(screen.getByRole('heading')).toHaveTextContent('Factory');
  });
});
