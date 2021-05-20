import React from 'react';
import {
  Platform,
  PlatformColor,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { StackNavigationProp } from '@react-navigation/stack';

import { ScrollList } from '@components';
import { BrowseStackParams } from '@navigation';

type BrowseScreenNavigationProp = StackNavigationProp<
  BrowseStackParams,
  'Browse'
>;

interface Props {
  navigation: BrowseScreenNavigationProp;
}

const BrowseScreen = ({}: Props) => {
  const { t } = useTranslation();
  const data: Podcast[] = [];

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
