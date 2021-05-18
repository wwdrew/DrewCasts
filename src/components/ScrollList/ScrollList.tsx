import React from 'react';
import {
  Platform,
  PlatformColor,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import PodcastItem from '../PodcastItem/PodcastItem';

interface Props {
  heading: string;
  items: Podcast[];
  onPress: () => void;
  rows?: number;
  size?: 'large' | 'small';
  subheading?: string;
}

function generateItems(items: Podcast[]) {
  return items.map(item => <PodcastItem key={item.id} item={item} />);
}

const ScrollList = ({
  heading,
  subheading,
  onPress,
  items,
}: // rows = 1,
// size = "small"
Props) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>{heading}</Text>
        <Pressable onPress={onPress}>
          <Text style={styles.seeAllLink}>{t('See All')}</Text>
        </Pressable>
      </View>
      {subheading ? <Text style={styles.subheading}>{subheading}</Text> : null}
      <View style={styles.items}>
        {items.length > 0 ? (
          generateItems(items)
        ) : (
          <Text style={styles.text}>No items to display</Text>
        )}
      </View>
    </View>
  );
};

export default ScrollList;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '700',
    ...Platform.select({
      ios: {
        color: PlatformColor('label'),
      },
      android: {
        color: PlatformColor('@android:color/primary_text_dark'),
      },
    }),
  },
  subheading: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '400',
    ...Platform.select({
      ios: {
        color: PlatformColor('secondaryLabel'),
      },
      android: {
        color: PlatformColor('@android:color/secondary_text_dark'),
      },
    }),
  },
  text: {
    ...Platform.select({
      ios: {
        color: PlatformColor('label'),
      },
      android: {
        color: PlatformColor('@android:color/primary_text_dark'),
      },
    }),
  },
  seeAllLink: {
    ...Platform.select({
      ios: {
        color: PlatformColor('systemPurple'),
      },
      android: {
        color: PlatformColor('@android:color/holo_purple'),
      },
    }),

    fontSize: 14,
  },
  items: {
    marginTop: 10,
  },
});
