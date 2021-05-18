import React from 'react';
import {
  Platform,
  PlatformColor,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { StackNavigationProp } from '@react-navigation/stack';

import { BrowseStackParams } from '@navigation';
import { ScrollList } from '../../components';

type BrowseScreenNavigationProp = StackNavigationProp<
  BrowseStackParams,
  'Browse'
>;

interface Props {
  navigation: BrowseScreenNavigationProp;
}

const BrowseScreen = ({}: Props) => {
  const { isLoading, error, data } = useQuery<Podcast[], Error>(
    'repoData',
    () =>
      fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
        res => res.json(),
      ),
  );
  const { t } = useTranslation();

  if (error) {
    return <Text>An error has occurred: {error.message}</Text>;
  }

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!data) {
    return <Text>No data</Text>;
  }

  console.log({ data });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <ScrollList
          heading={t('New & Noteworthy')}
          items={data}
          onPress={() => console.log('bjgldfhkdfhk')}
        />
        {/* <Text style={styles.text}>{t("Browse")}</Text> */}
      </View>
    </SafeAreaView>
  );
};

export default BrowseScreen;

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
