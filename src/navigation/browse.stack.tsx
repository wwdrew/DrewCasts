import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { useTranslation } from 'react-i18next';
import {
  BrowseScreen,
  EpisodeDetailScreen,
  PodcastDetailScreen,
} from '../screens';
import { screenOptions } from './screenOptions';

export type BrowseStackParams = {
  Browse: undefined;
  EpisodeDetail: undefined;
  PodcastDetail: undefined;
};

const Browse = createNativeStackNavigator<BrowseStackParams>();

const BrowseStack = () => {
  const { t } = useTranslation();

  return (
    <Browse.Navigator
      // @ts-expect-error: screens doesn't expect symbols yet
      screenOptions={{
        ...screenOptions,
        headerTitle: t('Browse'),
      }}>
      <Browse.Screen name="Browse" component={BrowseScreen} />
      <Browse.Screen name="EpisodeDetail" component={EpisodeDetailScreen} />
      <Browse.Screen name="PodcastDetail" component={PodcastDetailScreen} />
    </Browse.Navigator>
  );
};

export default BrowseStack;
