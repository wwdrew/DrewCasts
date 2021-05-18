import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { useTranslation } from 'react-i18next';
import {
  EpisodeDetailScreen,
  LibraryScreen,
  PodcastDetailScreen,
} from '../screens';
import { screenOptions } from './screenOptions';

export type LibraryStackParams = {
  EpisodeDetail: undefined;
  Library: undefined;
  PodcastDetail: undefined;
};

const Library = createNativeStackNavigator<LibraryStackParams>();

const LibraryStack = () => {
  const { t } = useTranslation();

  return (
    <Library.Navigator
      initialRouteName="Library"
      // @ts-expect-error: screens doesn't expect symbols yet
      screenOptions={{
        ...screenOptions,
        headerTitle: t('Library'),
      }}>
      <Library.Screen name="Library" component={LibraryScreen} />
      <Library.Screen name="EpisodeDetail" component={EpisodeDetailScreen} />
      <Library.Screen name="PodcastDetail" component={PodcastDetailScreen} />
    </Library.Navigator>
  );
};

export default LibraryStack;
