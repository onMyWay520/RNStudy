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
    TextInput
} from 'react-native';

export default class App extends Component<{}> {
    constructor(props){
        super(props);
        this.state={text:''};
    }
  render() {
    return (
        // row column
        <View style={{flex:1,flexDirection:'column',justifyContent:'space-between', alignItems:'center'}} >
            <View style={{width:50,height:50,backgroundColor:'blue'}}/>
            <View style={{width:100,height:100,backgroundColor:'red'}}/>
            <TextInput style={{height:40,width:200}} placeholder='hello world la la' onChangeText={(text)=>this.setState({text})}/>
            <Text style={{padding: 10, fontSize: 42}}>
                {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
            </Text>
        </View>

    );
  }
}

