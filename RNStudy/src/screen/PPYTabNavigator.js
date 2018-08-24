import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';
import Color from "../common/Color";
import TabBarItemComponent from "../widgets/TabBarItemComponent";
import MovieListScreen from "./MovieListScreen";
import scrollTopTabView from  "./scrollTopTabView"
import   SearchView  from  "./SearchView"
import ListViewLearn  from "./ListViewLearn"
export default class PPYTabNavigator extends Component {

    constructor(props) {
        super(props);
        StatusBar.setBarStyle('default')
    }
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <Navigator/>
        )
    }
}

const Tab = TabNavigator(
    {
        First: {
            screen: ListViewLearn,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '正在热映',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItemComponent
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../../assets/image/playing.png')}
                        selectedImage={require('../../assets/image/playing-active.png')}
                    />
                )
            }),

        },
        Second: {
            screen: scrollTopTabView,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '即将上映',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItemComponent
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../../assets/image/coming.png')}
                        selectedImage={require('../../assets/image/coming-active.png')}
                    />
                )
            })
        },
        third: {
            screen: SearchView,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '搜索',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItemComponent
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../../assets/image/playing.png')}
                        selectedImage={require('../../assets/image/playing-active.png')}
                    />
                )
            }),

        },
        Forth: {
            screen: MovieListScreen,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '即将上映',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItemComponent
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../../assets/image/coming.png')}
                        selectedImage={require('../../assets/image/coming-active.png')}
                    />
                )
            })
        },
    },

    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        lazy: true,
        tabBarOptions: {
            activeTintColor: Color.themeColor,
            inactiveTintColor: '#888888',
            style: {backgroundColor: '#ffffff'}
        }
    }
);

const Navigator = StackNavigator(
    {
        Tab: {screen: Tab},
    },
    {
        navigationOptions: {
            headerBackTitle: null,
            headerTintColor: '#ffffff',
            headerStyle: {backgroundColor: Color.themeColor},
            showIcon: true
        }
    }
);
