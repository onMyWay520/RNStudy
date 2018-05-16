import React, {Component} from 'react';
import {View, Button} from 'react-native';
import {NavigationActions} from 'react-navigation';
import BaseComponent from './BaseComponent';
import SecondScreen from  './SecondScreen'

export default class LoginScreen extends BaseComponent {
  
  static navigationOptions = {
    headerTitle: 'Login'
  };
  
  render() {
    return (
      <View style={{ flex: 1, alignItems:'center', justifyContent:'center' }}>
        <Button
          title={'点击登录'}
          onPress={() => {
            this.loginAction();
          }}
        />
      </View>
    )
  }
  
  loginAction() {
    //reset 方法会擦掉所有的导航状态，并且使用内部的新的结果替代
    let resetAction = NavigationActions.reset({
      index: 0,
      actions: [//可以指定多个action，但是要给定正确的index
        NavigationActions.navigate({routeName: 'Tab'})
        //   NavigationActions.navigate({routeName: 'SecondScreen'})

      ],
      key: null
    });
    this.props.navigation.dispatch(resetAction);//使用dispatch可以向任何navigation传递一些其他的action
  }
}