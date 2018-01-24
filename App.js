/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button, Alert
} from 'react-native';

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  generateError = () => {
    var test;
    test.color;
  }

  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.welcome}>
          Rollbar Example
        </Text>
        <View style={styles.loginButton} >
          <Button onPress={this.generateError} title='Generates an Error' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d3d3d3',
    color: '#8a2be2'
  },

  welcome: {
    fontSize: 22,
    color: '#8a2be2',
    marginTop: 10
  },

  loginButton: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#fff'
  }
});
