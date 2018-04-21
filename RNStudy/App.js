/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
   StyleSheet,
 } from 'react-native';
import SimpleApp from './Main'

export default class App extends Component<{}> {
  render() {
    return <SimpleApp />;

  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
