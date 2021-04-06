/**
 * @format
 */

import {AppRegistry} from 'react-native';
import APP from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';

enableScreens()
// 关闭全部黄色警告
console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => APP);
