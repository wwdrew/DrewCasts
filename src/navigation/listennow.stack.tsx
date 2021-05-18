import React from 'react';
import { Platform, PlatformColor } from 'react-native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { useTranslation } from 'react-i18next';
import {
  EpisodeDetailScreen,
  EpisodeListScreen,
  ListenNowScreen,
  PodcastDetailScreen,
} from '../screens';

export type ListenNowStackParams = {
  EpisodeDetail: undefined;
  EpisodeList: undefined;
  ListenNow: undefined;
  PodcastDetail: undefined;
};

const ListenNow = createNativeStackNavigator<ListenNowStackParams>();

const ListenNowStack = () => {
  const { t } = useTranslation();

  return (
    // @ts-expect-error: screens doesn't expect symbols yet
    <ListenNow.Navigator
      initialRouteName="ListenNow"
      screenOptions={{
        headerLargeTitle: true,
        headerTitle: t('Listen Now'),
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
      <ListenNow.Screen name="EpisodeDetail" component={EpisodeDetailScreen} />
      <ListenNow.Screen
        name="EpisodeList"
        component={EpisodeListScreen}
        options={{
          headerTitle: t('Episode List'),
        }}
      />
      <ListenNow.Screen name="ListenNow" component={ListenNowScreen} />
      <ListenNow.Screen name="PodcastDetail" component={PodcastDetailScreen} />
    </ListenNow.Navigator>
  );
};

export default ListenNowStack;
