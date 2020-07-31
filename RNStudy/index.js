import { AppRegistry } from 'react-native';
import listViewSwipe  from './src/screen/ListViewLearn';
// 关闭全部黄色警告
console.disableYellowBox = true;
AppRegistry.registerComponent('RNStudy', () => listViewSwipe);
