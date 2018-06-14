import React, {Component} from 'react';
var ReactNative = require('react-native');
var {
    SegmentedControlIOS,
    Text,
    View,
    StyleSheet,
    Alert
} = ReactNative;

export default class rootApp extends Component {
    static navigationOptions = {
        title: 'SegmentedControlIOS',
    };
    _onChange = (event)=>{
        var s = 'onChange参数属性:selectedSegmentIndex：'+
            event.nativeEvent.selectedSegmentIndex+'\n'+
            'target:'+event.nativeEvent.target+'\n'+
            'value:'+event.nativeEvent.value;
        Alert.alert(s);
    }

    onValueChange = (value)=>{
        Alert.alert('onValueChange:'+value);
    }
    render() {
        return (
            <View style={{flex:1,marginTop:20}}>
                <SegmentedControlIOS selectedIndex={1} onChange={this._onChange} onValueChange={this.onValueChange}
                                     values={['第一个','第二个','第三个','第四个']} tintColor='red'
                />
            </View>

      );
    }



}

