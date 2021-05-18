import React from 'react';
import { Platform, PlatformColor, StyleSheet, Text, View } from 'react-native';

interface Props {
  item: Podcast;
}

const PodcastItem = ({ item }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );
};

export default PodcastItem;

const styles = StyleSheet.create({
  container: {},
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
});
