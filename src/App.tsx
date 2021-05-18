import { enableScreens } from 'react-native-screens';

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './navigation';

enableScreens();

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  </QueryClientProvider>
);

export default App;
