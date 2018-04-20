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

export default class App extends Component<{}> {
  render() {
    return (
        <View style={{flex:1}} >
            {/*<View style={{width:50,height:50,backgroundColor:'blue'}}/>*/}
            {/*<View style={{width:100,height:100,backgroundColor:'red'}}/>*/}
            <View style={{flex:1,backgroundColor:'blue'}}/>
            <View style={{flex:2,backgroundColor:'red'}}/>
        </View>

    );
  }
}

