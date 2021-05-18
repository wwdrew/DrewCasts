import React from 'react';
import { render } from '@testing-library/react-native';
import ListenNowScreen from '../ListenNow.screen';

import { describe, it, expect } from '@jest/globals';

describe('Listen Now screen', () => {
  it('has default components', () => {
    const { getByText } = render(<ListenNowScreen />);

    const upNext = getByText(/Up Next/i);
    const latestEpisodes = getByText(/Latest Episodes/i);
    const recentlyPlayed = getByText(/Recently Played/i);

    expect(upNext).toBeDefined();
    expect(latestEpisodes).toBeDefined();
    expect(recentlyPlayed).toBeDefined();
  });
});
