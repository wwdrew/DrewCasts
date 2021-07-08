import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

const IntroductionScreen = () => {
  const { t } = useTranslation();

  const { isLoading, isError, data, error } = useQuery<{ name: string }>(
    'user',
    async () => {
      try {
        const response = await fetch('http://mytest.api/login');

        if (!response.ok) {
          throw new Error(`Failed: ${response.status}`);
        }

        return await response.json();
      } catch (err) {
        throw new Error(err);
      }
    },
  );

  if (isLoading) {
    console.log('LOADING');
    return null;
  }

  if (isError) {
    console.log({ error });
    return null;
  }

  if (!data) {
    console.log('No data');
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>{t('Welcome to DrewCasts')}</Text>
      <Text>{data.name}</Text>
    </View>
  );
};

export default IntroductionScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    borderWidth: 2,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
