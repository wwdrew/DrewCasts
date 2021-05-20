import React from 'react';
import { Platform, PlatformColor } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { useTranslation } from 'react-i18next';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  BrowseStack,
  LibraryStack,
  ListenNowStack,
  SearchStack,
} from '@navigation';

export type TabStackParamList = {
  ListenNow: undefined;
  Browse: undefined;
  Library: undefined;
  Search: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabStack = () => {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      tabBarOptions={{
        // @ts-expect-error: types are incomplete for PlatformColor
        activeTintColor: Platform.select({
          ios: PlatformColor('systemPurple'),
          android: PlatformColor('@android:color/holo_purple'),
        }),
        style: {
          backgroundColor: Platform.select({
            ios: PlatformColor('systemBackground'),
            android: PlatformColor('@android:color/background_dark'),
          }),
        },
      }}>
      <Tab.Screen
        name="ListenNow"
        component={ListenNowStack}
        options={{
          tabBarLabel: t('Listen Now'),
          tabBarIcon: ({ color, size }) => (
            <Icon name="play" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Browse"
        component={BrowseStack}
        options={{
          tabBarLabel: t('Browse'),
          tabBarIcon: ({ color, size }) => (
            <Icon name="appstore1" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryStack}
        options={{
          tabBarLabel: t('Library'),
          tabBarIcon: ({ color, size }) => (
            <EntypoIcon name="archive" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarLabel: t('Search'),
          tabBarIcon: ({ color, size }) => (
            <Icon name="search1" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
