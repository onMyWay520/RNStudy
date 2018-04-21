
import {
    View,
    Button,
    StyleSheet,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import React, {Component} from 'react';
import  Profile from './Profile'
class Main extends React.Component {
    static navigationOptions = {
        title: '首页'
    };
    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <Button
                    onPress={() => navigate('Profile')}
                    title="详情"

                />
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});
export  const SimpleApp = StackNavigator({
    Main: { screen: Main },
    Profile: { screen: Profile },
});
module.exports = SimpleApp;