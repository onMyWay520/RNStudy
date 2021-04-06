import {createStackNavigator, HeaderBackButton, TransitionPresets} from '@react-navigation/stack';
import {CommonActions, StackActions, TabActions} from '@react-navigation/native';
import * as React from 'react';
import {Routers} from './RouteStack';
import {Image, Platform, View} from 'react-native';
import {base} from '../image/base';
import {HomeBottomTab} from './HomeTab';
import {titleHeight} from '../utils/ScreenUtils';
import {DesignColor} from '../utils/DesignColor';
import StringUtils from '../utils/StringUtils';
import lodash from 'lodash';

export const navigationRef = React.createRef();
export const isMountedRef = React.createRef();

const RootStack = createStackNavigator();
export const LeftImage = ({ tintColor }) => {
    return (
        <View
            style={{
                width: 30,
                height: 30,
                marginLeft: Platform.OS === 'ios' ? 10 : 0,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Image
                source={base.ic_back_black}
                style={{
                    width: 10,
                    height: 17,
                    tintColor: tintColor ? tintColor : '#323232'
                }}
            />
        </View>
    )
}
export const MyRootStack = () => {

    return (
        <RootStack.Navigator
            initialRouteName='HomeBottomTab'
            screenOptions={{
                gestureEnabled: true,
                cardOverlayEnabled: true,
                ...TransitionPresets.SlideFromRightIOS
            }}
        >
            <RootStack.Screen
                name='HomeBottomTab'
                options={{
                    headerShown: false
                }}>
                {() => <HomeBottomTab/>}
            </RootStack.Screen>
            {
                Object.keys(Routers).map((name) => {
                    Routers[name].name = name;
                    let obj = Routers[name];
                    let pageAnimation = obj.pageAnimation || {};
                    return <RootStack.Screen
                        key={name.toString()}
                        name={name.toString()}
                        component={obj.component}
                        options={{
                            title: obj.title,
                            headerTitleAlign: 'center',
                            headerShown: !StringUtils.isEmpty(obj.title),
                            headerBackTitle: '',
                            headerBackTitleVisible: false,
                            headerLeft: () => (
                                <HeaderBackButton
                                    labelVisible={false}
                                    onPress={() => goBack()}
                                    backImage={() => <LeftImage />}
                                />
                            ),
                            headerStyle: {
                                height: titleHeight,
                                borderWidth: 0,
                                backgroundColor: DesignColor.bgColor,
                                borderBottomColor: DesignColor.bgColor,
                                borderBottomWidth: 0,
                                elevation: 0,
                                shadowOpacity: 0.85,
                                shadowRadius: 0,
                                shadowOffset: {
                                    width: 0,
                                    height: 0
                                }
                            },
                            ...pageAnimation
                        }}
                    />;
                })
            }
        </RootStack.Navigator>
    );
};

// 回到首页某个tab
export const backToHome = (routeName, params) => {
    if (isMountedRef.current && navigationRef.current) {
        // 先判断是否在tab页面，不在就先回到栈底
        if (navigationRef.current?.canGoBack()) {
            // 清空并重新加载首页
            navigationRef.current?.dispatch(CommonActions.reset({
                index: 0,
                routes: [{name: 'HomeBottomTab'}]
            }));
        }
        navigationRef.current?.dispatch(TabActions.jumpTo(routeName, params));
    }
};

// 页面回退
export const goBack = () => {
    if (isMountedRef.current && navigationRef.current) {
        if (navigationRef.current?.canGoBack()) {
            navigationRef.current?.goBack();
        }
    }
};

// 页面导航，一般情况都使用这个导航
export const navigate = (routeName, params) => {
    if (isMountedRef.current && navigationRef.current) {
        navigationRef.current?.navigate(routeName.name, params);
    }
};

// 页面导航，需要同一个页面同时存在时可用，普通场景不建议使用
export const push = (routeName, params) => {
    if (isMountedRef.current && navigationRef.current) {
        const name = routeName.name;
        navigationRef.current?.dispatch((state) => {
            // push模式防止重复跳转到同一个页面
            if (state && (name === state.routes[state.routes.length - 1].name)
                && lodash.isEqual(params, state.routes[state.routes.length - 1].params)) {
                return null;
            }
            return StackActions.push(name, params);
        });
    }
};

// 用新的页面替换当前页面
export const replace = (routeName, params) => {
    if (isMountedRef.current && navigationRef.current) {
        navigationRef.current?.dispatch(StackActions.replace(routeName.name, params));
    }
};

// 替换指定页面
export const replaceOne = (routeName, params, key) => {
    if (isMountedRef.current && navigationRef.current) {
        navigationRef.current?.dispatch({
            ...StackActions.replace(routeName.name, params),
            source: key
        });
    }
};

// 回退n个页面
export const pop = (n = 1) => {
    if (isMountedRef.current && navigationRef.current) {
        navigationRef.current?.dispatch(StackActions.pop(n));
    }
};

// 回到栈底
export const popToTop = () => {
    if (isMountedRef.current && navigationRef.current) {
        navigationRef.current?.dispatch(StackActions.popToTop());
    }
};

