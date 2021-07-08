import 'react-native-gesture-handler';

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

import './i18n';

if (process.env.NODE_ENV === 'development') {
  require('react-native-url-polyfill/auto');
  const { server } = require('./mocks/native');
  server.listen();
}

AppRegistry.registerComponent(appName, () => App);
