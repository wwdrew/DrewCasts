import React from 'react';
import { describe, expect, it } from '@jest/globals';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from '@navigation';
import { fireEvent, render } from '@testing-library/react-native';

describe('opening the app for the first time', () => {
  it('opens on the Listen Now screen', async () => {
    const { findByText } = render(
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>,
    );

    const navHeading = await findByText(/Listen Now/i);
    const upNextHeading = await findByText(/Up Next/i);
    const latestEpisodesHeading = await findByText(/Latest Episodes/i);
    const recentlyPlayedHeading = await findByText(/Recently Played/i);

    expect(navHeading).toBeTruthy();
    expect(upNextHeading).toBeTruthy();
    expect(latestEpisodesHeading).toBeTruthy();
    expect(recentlyPlayedHeading).toBeTruthy();
  });

  it('navigates to the Onboarding screen', async () => {
    const { findByText } = render(
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>,
    );

    const browseTabButton = await findByText(/Open Onboarding/i);

    expect(browseTabButton).toBeTruthy();

    fireEvent.press(browseTabButton);

    const browseScreenHeading = await findByText(/Welcome to Drewcasts/i);

    expect(browseScreenHeading).toBeTruthy();
  });
});
