import { AppRegistry } from 'react-native';
import App from './App';

import { Client, Configuration } from 'rollbar-react-native'


  const rollbar = new Client(new Configuration('ACCESS_TOKEN', {
    payload: {
      client: {
        javascript: {
          source_map_enabled: true,
          code_version: 'insert_code_version_here.ios',
        }
      }
    }
  }));
AppRegistry.registerComponent('RollbarExample', () => App);
