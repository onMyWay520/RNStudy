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
  View
} from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}
export default class App extends Component<{}> {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
          <Greeting name='张三' />
          <Greeting name='李四' />
          <Greeting name='王五' />
      </View>
    );
  }
}

