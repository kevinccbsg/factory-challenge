import { render, screen } from '@testing-library/react';
import { describe, it, vitest } from 'vitest';

import { FeatureTable } from './FeatureTable';
import { Status } from '../ToleranceIcons/status';

describe('FeatureTable', () => {
  it.only('renders FeatureTable', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vitest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        computedStyle: vitest.fn(),
        addListener: vitest.fn(),
        removeListener: vitest.fn(),
        addEventListener: vitest.fn(),
        removeEventListener: vitest.fn(),
        dispatchEvent: vitest.fn(),
      })),
    });

    render(<FeatureTable data={[]} status={Status.ERROR} title="Example" />);

    screen.debug();

    // check if App components renders headline
  });
});