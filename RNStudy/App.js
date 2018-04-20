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
    Image
} from 'react-native';

const instructions = Platform.select({
  ios: '从今天开始编程RN\n' +
    '好好学习，早日成为大神',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
      let pic = {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      };
    return (
        <Image source={pic} style={{width: 193, height: 110}} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
    study: {
        fontSize: 24,
        textAlign: 'center',
        margin: 5,
    },
  instructions: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 5,
      fontSize:18
  },
});
