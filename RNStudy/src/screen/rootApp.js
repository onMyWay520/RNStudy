import React, {Component} from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";
import LoginScreen from "./LoginScreen";
import  LoginView from  "./LoginView"
export default class RootApp extends Component {

    render() {
        // return <Navigator/>
        return <LoginView/>
    }
}

const Tab = TabNavigator(
    {
        First: {screen: FirstScreen},
        Second: {screen: SecondScreen}
    },
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',//设置TabNavigator的位置
        animationEnabled: false,//是否在更改标签时显示动画
        swipeEnabled: false,//是否允许在标签之间进行滑动
    }
);

const Navigator = StackNavigator(
    {
        Tab: {screen: Tab},
        Login: {screen: LoginScreen}
    },
    {
        navigationOptions: { //配置每一个选项卡的样式
            headerBackTitle: null,
            showIcon: true
        }
    }
);
