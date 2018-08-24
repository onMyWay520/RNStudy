/**
 *  头部搜索框组件
 */


import React, {Component} from 'react';
import  {
  StyleSheet,
  View,
  TextInput,
} from 'react-native';

export default class search extends Component {

  render() {

    return (
      <View style={styles.flex_1}>
        <TextInput style={[styles.flex_1, styles.input]} {...this.props}/>
      </View>
    );

  }

};

const styles = StyleSheet.create({
  flex_1: {
    flex: 1
  },
  input: {
    borderWidth: 1,
    height: 40,
    borderColor: '#DDD',
    paddingLeft: 5
  }
});
