import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native'
import MainView from  "../screen/MainView"
import SectionListScreen  from "../screen/SectionListScreen"
import {DesignColor} from '../utils/DesignColor';
import {tabBar} from '../image/tabBar';

const Tab = createBottomTabNavigator();

export const HomeBottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName='HomePage'
            backBehavior={'initialRoute'}
            tabBarOptions={{
                activeTintColor: DesignColor.mainColor,
                inactiveTintColor: '#909099'
            }}
        >
            <Tab.Screen
                name='HomePage'
                component={MainView}
                options={{
                    title: '首页',
                    tabBarIcon: ({focused}) => (
                        <TabIcon focused={focused}
                                 normalSource={tabBar.home}
                                 activeSource={tabBar.home_active}/>
                    )
                }}
            />
            <Tab.Screen
                name='TaskCenter'
                component={SectionListScreen}
                options={{
                    title: '工作台',
                    tabBarIcon: ({focused}) => (
                        <TabIcon focused={focused}
                                 normalSource={tabBar.friend}
                                 activeSource={tabBar.friend_active}/>
                    )
                }}
            />
            <Tab.Screen
                name='Mine'
                component={SectionListScreen}
                options={{
                    title: '我的',
                    tabBarIcon: ({focused}) => (
                        <TabIcon focused={focused}
                                 normalSource={tabBar.my}
                                 activeSource={tabBar.my_active}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
};

const TabIcon = ({focused, normalSource, activeSource}) => {
    const source = focused ? activeSource : normalSource;
    return (
        <View style={styles.tab}>
            <Image style={styles.tabBarIcon} source={source}/>
        </View>
    )
};

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabBarIcon: {
        width: 24,
        height: 24
    }
});
