import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { FeatureTable } from './FeatureTable';
import { Status } from '../ToleranceIcons/status';

describe('FeatureTable', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vitest.fn().mockImplementation(query => ({
        matches: true,
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
  });

  it('renders empty FeatureTable', () => {
    render(<FeatureTable data={[]} status={Status.ERROR} title="Example" />);

    expect(screen.getByText('Control')).toBeInTheDocument();
    expect(screen.getByText('deviation')).toBeInTheDocument();
    expect(screen.getByText('dev out of tolerance')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent('Example');
  });

  it('renders FeatureTable', () => {
    const sampleData = [
      {
        key: 'id',
        control: 'Control 01',
        deviation: 1,
        devOutOftol: 0.5,
        status: Status.ERROR,
      },
      // Add more sample data as needed
    ];
    render(<FeatureTable data={sampleData} status={Status.ERROR} title="Example" />);

    expect(screen.getByText('Control')).toBeInTheDocument();
    expect(screen.getByText('deviation')).toBeInTheDocument();
    expect(screen.getByText('dev out of tolerance')).toBeInTheDocument();
    expect(screen.getByText('Control 01')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('0.5')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent('Example');
    const element = screen.getAllByRole('img');
    expect(element[1].ariaLabel).toContain('error');
    expect(element[0].ariaLabel).toContain('error');
  });
});