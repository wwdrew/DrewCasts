import React from 'react';
import {
  Platform,
  PlatformColor,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { ScrollList } from '@components';

import { AppStackParamList, TabStackParamList } from '@navigation';

const upNextItems: Podcast[] = [
  {
    id: 1,
    title: 'Brooklyn 99: The Podcast',
    notes: 'This is the podcast',
    date: new Date().toISOString(),
  },
];

type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'ListenNow'>,
  StackNavigationProp<AppStackParamList>
>;

interface Props {
  navigation: ProfileScreenNavigationProp;
}

const ListenNowScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Pressable onPress={() => navigation.navigate('Introduction')}>
          <Text style={styles.text}>Open Onboarding</Text>
        </Pressable>
        <ScrollList
          heading={t('Up Next')}
          onPress={() => console.log('Up Next')}
          size="large"
          items={upNextItems}
        />
        <ScrollList
          heading={t('Latest Episodes')}
          onPress={() => console.log('Latest Episodes')}
          rows={3}
          items={[]}
        />
        <ScrollList
          heading={t('Recently Played')}
          subheading={t('Episodes you have listened to')}
          onPress={() => console.log('Recently Played')}
          items={[]}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListenNowScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: PlatformColor('systemBackground'),
      },
      android: {
        backgroundColor: PlatformColor('@android:color/background_dark'),
      },
    }),
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    ...Platform.select({
      ios: {
        color: PlatformColor('label'),
      },
      android: { color: PlatformColor('@android:color/primary_text_dark') },
    }),
  },
});
