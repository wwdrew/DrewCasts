import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

const IntroductionScreen = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t('Welcome to DrewCasts')}</Text>
    </View>
  );
};

export default IntroductionScreen;
