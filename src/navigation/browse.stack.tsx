import React from 'react';
import { Platform, PlatformColor } from 'react-native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { useTranslation } from 'react-i18next';
import {
  BrowseScreen,
  EpisodeDetailScreen,
  PodcastDetailScreen,
} from '../screens';

export type BrowseStackParams = {
  Browse: undefined;
  EpisodeDetail: undefined;
  PodcastDetail: undefined;
};

const Browse = createNativeStackNavigator<BrowseStackParams>();

const BrowseStack = () => {
  const { t } = useTranslation();

  return (
    // @ts-expect-error: screens doesn't expect symbols yet
    <Browse.Navigator
      screenOptions={{
        headerLargeTitle: true,
        headerTitle: t('Browse'),
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
      <Browse.Screen name="Browse" component={BrowseScreen} />
      <Browse.Screen name="EpisodeDetail" component={EpisodeDetailScreen} />
      <Browse.Screen name="PodcastDetail" component={PodcastDetailScreen} />
    </Browse.Navigator>
  );
};

export default BrowseStack;
