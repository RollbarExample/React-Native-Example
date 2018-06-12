import { AppRegistry } from 'react-native';
import App from './App';

import { Client, Configuration } from 'rollbar-react-native'

  const rollbar = new Client(new Configuration('d6a4de1fe4514a408b227471c1475dc0', {
    payload: {
      client: {
        javascript: {
          source_map_enabled: true,
          code_version: '1234566.android',
          environment: 'production'
        }
      }
    }
  }));
AppRegistry.registerComponent('RollbarExample', () => App);
