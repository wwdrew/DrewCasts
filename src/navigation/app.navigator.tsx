import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import TabStack from './tabs.navigator';
import { IntroductionScreen } from '../screens';

export type AppStackParamList = {
  Landing: undefined;
  Introduction: undefined;
};

const App = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => (
  <App.Navigator
    initialRouteName="Landing"
    screenOptions={{
      headerShown: false,
      stackPresentation: 'modal',
    }}>
    <App.Screen name="Landing" component={TabStack} />
    <App.Screen name="Introduction" component={IntroductionScreen} />
  </App.Navigator>
);

export default AppStack;
