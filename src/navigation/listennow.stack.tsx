import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { useTranslation } from 'react-i18next';
import {
  EpisodeDetailScreen,
  EpisodeListScreen,
  ListenNowScreen,
  PodcastDetailScreen,
} from '../screens';
import { screenOptions } from './screenOptions';

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
    <ListenNow.Navigator
      initialRouteName="ListenNow"
      // @ts-expect-error: screens doesn't expect symbols yet
      screenOptions={{
        ...screenOptions,
        headerTitle: t('Listen Now'),
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
