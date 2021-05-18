import React from 'react';
import { Platform, PlatformColor } from 'react-native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { useTranslation } from 'react-i18next';
import {
  EpisodeDetailScreen,
  LibraryScreen,
  PodcastDetailScreen,
} from '../screens';

export type LibraryStackParams = {
  EpisodeDetail: undefined;
  Library: undefined;
  PodcastDetail: undefined;
};

const Library = createNativeStackNavigator<LibraryStackParams>();

const LibraryStack = () => {
  const { t } = useTranslation();

  return (
    // @ts-expect-error: screens doesn't expect symbols yet
    <Library.Navigator
      initialRouteName="Library"
      screenOptions={{
        headerLargeTitle: true,
        headerTitle: t('Library'),
        headerStyle: {
          ...Platform.select({
            ios: {
              backgroundColor: PlatformColor('systemBackground'),
            },
            android: {
              backgroundColor: PlatformColor('@android:color/background_dark'),
            },
          }),
        },
        headerTintColor: Platform.select({
          ios: PlatformColor('label'),
          android: PlatformColor('@android:color/primary_text_dark'),
        }),
        headerTitleStyle: Platform.select({
          ios: PlatformColor('systemPurple'),
          android: PlatformColor('@android:color/holo_purple'),
        }),
      }}>
      <Library.Screen name="Library" component={LibraryScreen} />
      <Library.Screen name="EpisodeDetail" component={EpisodeDetailScreen} />
      <Library.Screen name="PodcastDetail" component={PodcastDetailScreen} />
    </Library.Navigator>
  );
};

export default LibraryStack;
