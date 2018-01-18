/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Client } from 'rollbar-react-native'
import { setJSExceptionHandler, getJSExceptionHandler } from 'react-native-exception-handler';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button, Alert
} from 'react-native';

const rollbar = new Client('084353b783e84e78a14647932b859000');
export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {};
}
FunctionToOpenSecondActivity = () =>
{
    try{
      var test;
      test.color;
    }catch(e){
      rollbar.error(e);
    }
    
}

_onPressButton() {
  const reporter = (error) => {
    console.log(error); 
    rollbar.error(error);   
  };
  const errorHandler = (e, isFatal) => {
    if (isFatal) {
      reporter(e);
     
      Alert.alert(
        'Unexpected error occurred',
        `Error: ${(isFatal) ? 'Fatal:' : ''} ${e.name} ${e.message}
          This is crash.`,
        [{
          text: 'Close',
          onPress: () => {
            BackAndroid.exitApp();
          }}]);
    } else {
      console.log(e);
    }
  };
setJSExceptionHandler(errorHandler);
  setNativeExceptionHandler((errorString) => {
   //  rollbar.error(errorString);//send it to Rollbar
  });
}

  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.welcome}>
          Rollbar Example
        </Text>
        <View  style={styles.loginButton} >
        <Button   onPress={this._onPressButton} title = 'Create an Error'  />
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
    marginTop:10
  },
 
  loginButton:{
    flex:1,
    justifyContent: 'center',
    flexDirection:'column',
    alignItems: 'center',
     color: '#fff'
  }
});
