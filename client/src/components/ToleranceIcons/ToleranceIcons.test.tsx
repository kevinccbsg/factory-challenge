import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import { ToleranceIcons } from './ToleranceIcons';
import { Status } from './status';

describe('ToleranceIcons', () => {
  it('renders ToleranceIcons', () => {
    render(<ToleranceIcons value={Status.OK} />);

    screen.debug();

    // check if App components renders headline
  });
});