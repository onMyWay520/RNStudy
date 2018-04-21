/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
   StyleSheet,
    Text,
    View
 } from 'react-native';
// import SimpleApp from './Main'
import TabBar from "react-native-nav-tabbar";
export default class App extends Component<{}> {
  render() {
    // return <SimpleApp />;
      return (
          <View style={styles.container}>
              <TabBar>
                  <TabBar.Item
                      icon={require('./images/Home.png')}
                      selectedIcon={require('./images/HomeActive.png')}
                      title="Home"
                  >
                      <View style={styles.textContent}>
                          <Text style={{fontSize: 18}}>Home</Text>
                      </View>
                  </TabBar.Item>
                  <TabBar.Item>
                      <View style={styles.textContent}>
                          <Text style={{fontSize: 18}}>Friend</Text>
                      </View>
                  </TabBar.Item>
                  <TabBar.Item
                      icon={require('./images/My.png')}
                      selectedIcon={require('./images/MyActive.png')}
                      title="Me"
                  >
                      <View style={styles.textContent}>
                          <Text style={{fontSize: 18}}>Me</Text>
                      </View>
                  </TabBar.Item>
              </TabBar>
          </View>
      );

  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
