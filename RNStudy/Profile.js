import {
    Text,
    View,
} from 'react-native';
import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';

class Profile extends React.Component {
    // Nav options can be defined as a function of the screen's props:
    static navigationOptions = ({navigation}) => ({
        title: `详情`,
    });

    render() {
        return (
            <View>
                <Text>哈哈哈，我是详情页 </Text>
            </View>
        );
    }
}
module.exports = Profile;
