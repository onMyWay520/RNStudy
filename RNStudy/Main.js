
import {
    View,
    Button,
    StyleSheet,

} from 'react-native';
import { StackNavigator } from 'react-navigation';
import React, {Component} from 'react';
import  Profile from './Profile'
import Detail from './Detail'
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
                    color="red"
                    accessibilityLabel="Learn more about this purple button"


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
    Detail: { screen: Detail },
});
module.exports = SimpleApp;