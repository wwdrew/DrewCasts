import { Platform, PlatformColor } from 'react-native';

export const screenOptions = {
  headerLargeTitle: true,
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
};
