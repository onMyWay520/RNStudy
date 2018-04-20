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
        <View>
            < Text style={styles.red} > just red</Text>
            < Text style={styles.bigBlue} > just bigBlue</Text>
            < Text style={[styles.red,styles.bigBlue] }> red, bigBlue</Text>

            < Text style={[styles.bigBlue,styles.red]} > bigBlue ,red</Text>

        </View>
    );
  }
}
const styles=StyleSheet.create({
    bigBlue:{
        color:'blue',
        fontWeight:'bold',
        fontSize:30,
    },
    red:{
        color:'red',
    }
})
