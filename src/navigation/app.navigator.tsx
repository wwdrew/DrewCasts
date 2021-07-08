import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { TabStack } from '@navigation';
import { IntroductionScreen } from '@screens';

import { TabStackParamList } from './tabs.navigator';
import { NavigatorScreenParams } from '@react-navigation/native';

export type AppStackParamList = {
  Landing: NavigatorScreenParams<TabStackParamList>;
  Introduction: undefined;
};

const App = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => (
  <App.Navigator
    initialRouteName="Introduction"
    screenOptions={{
      headerShown: false,
      stackPresentation: 'modal',
    }}>
    <App.Screen name="Landing" component={TabStack} />
    <App.Screen name="Introduction" component={IntroductionScreen} />
  </App.Navigator>
);

export default AppStack;
