import React from 'react';
import { Platform, PlatformColor } from 'react-native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { useTranslation } from 'react-i18next';
import {
  EpisodeDetailScreen,
  PodcastDetailScreen,
  SearchScreen,
} from '../screens';

export type SearchStackParams = {
  EpisodeDetail: undefined;
  PodcastDetail: undefined;
  Search: undefined;
};

const Search = createNativeStackNavigator<SearchStackParams>();

const SearchStack = () => {
  const { t } = useTranslation();

  return (
    // @ts-expect-error: screens doesn't expect symbols yet
    <Search.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerLargeTitle: true,
        headerTitle: t('Search'),
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
      <Search.Screen name="Search" component={SearchScreen} />
      <Search.Screen name="PodcastDetail" component={PodcastDetailScreen} />
      <Search.Screen name="EpisodeDetail" component={EpisodeDetailScreen} />
    </Search.Navigator>
  );
};

export default SearchStack;
