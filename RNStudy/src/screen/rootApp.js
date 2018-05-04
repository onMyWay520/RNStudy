/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { NavigatorIOS } from 'react-native';
import RootScene from "./RootScene";

type Props = {};
export default class rootApp extends Component<Props> {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: RootScene,
          title: 'ListViewExample'
        }}
        style={{flex: 1}}
      />
    );
  }
  
}
