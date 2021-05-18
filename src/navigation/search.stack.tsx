import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { useTranslation } from 'react-i18next';

import {
  EpisodeDetailScreen,
  PodcastDetailScreen,
  SearchScreen,
} from '@screens';

import { screenOptions } from './screenOptions';

export type SearchStackParams = {
  EpisodeDetail: undefined;
  PodcastDetail: undefined;
  Search: undefined;
};

const Search = createNativeStackNavigator<SearchStackParams>();

const SearchStack = () => {
  const { t } = useTranslation();

  return (
    <Search.Navigator
      initialRouteName="Search"
      // @ts-expect-error: screens doesn't expect symbols yet
      screenOptions={{
        ...screenOptions,
        headerTitle: t('Search'),
      }}>
      <Search.Screen name="Search" component={SearchScreen} />
      <Search.Screen name="PodcastDetail" component={PodcastDetailScreen} />
      <Search.Screen name="EpisodeDetail" component={EpisodeDetailScreen} />
    </Search.Navigator>
  );
};

export default SearchStack;
