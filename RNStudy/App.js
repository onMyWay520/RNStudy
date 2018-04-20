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
    TextInput,
    ScrollView,
    Image
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
        <ScrollView>
            <Text style={{fontSize:30}}>Scroll me </Text>
            <Image source={require('./img/favicon.png')} />
            <Image source={require('./img/favicon.png')} />
            <Image source={require('./img/favicon.png')} />
            <Image source={require('./img/favicon.png')} />
            <Image source={require('./img/favicon.png')} />
            <Text style={{fontSize:50}}>If you like</Text>
            <Image source={require('./img/favicon.png')} />
            <Image source={require('./img/favicon.png')} />
            <Image source={require('./img/favicon.png')} />
            <Image source={require('./img/favicon.png')} />
            <Image source={require('./img/favicon.png')} />
        </ScrollView>

    );
  }
}

