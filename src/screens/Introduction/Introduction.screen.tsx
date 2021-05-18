import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

const IntroductionScreen = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t('Welcome to DrewCasts')}</Text>
    </View>
  );
};

export default IntroductionScreen;
