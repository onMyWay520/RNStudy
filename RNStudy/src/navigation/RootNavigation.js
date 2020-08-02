import {createStackNavigator, HeaderBackButton, TransitionPresets} from '@react-navigation/stack';
import {CommonActions, StackActions, TabActions} from '@react-navigation/native';
import * as React from 'react';
import {Routers} from './RouteStack';
import {Image, View} from 'react-native';
import {base} from '../image/base';
import {titleHeight} from '../utils/ScreenUtils';
import {DesignColor} from '../utils/DesignColor';
import StringUtils from '../utils/StringUtils';
import lodash from 'lodash';

export const navigationRef = React.createRef();
export const isMountedRef = React.createRef();

const RootStack = createStackNavigator();

/**
 * 自定义导航栏返回键
 * @returns {*}
 * @constructor
 */
const LeftImage = () => {
    return <View
        style={{
            width: 30,
            height: 30,
            marginLeft: Platform.OS === 'ios' ? 10 : 0,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
        <Image

            source= {base.ic_back_black}

            resizeMode={'center'}
            style={{
                width: 10,
                height: 17
            }}/>
    </View>;
};

export const MyRootStack = ({initParams}) => {
    return (
        <RootStack.Navigator
            initialRouteName={initParams.initialRouteName }
            screenOptions={{
                gestureEnabled: true,
                cardOverlayEnabled: true,
                ...TransitionPresets.SlideFromRightIOS
            }}
        >
            {
                Object.keys(Routers).map((key) => {
                    Routers[key].name = key.toString();
                    let obj = Routers[key];
                    let pageAnimation = obj.pageAnimation || {};
                    return <RootStack.Screen
                        key={key.toString()}
                        name={key.toString()}
                        component={obj.component}
                        options={(route) => {

                            return {
                                title: obj.title,
                                headerTitleStyle: [{
                                    fontSize: 18, color: 'white', fontWeight: 'normal',
                                }, Platform.OS === 'ios' ? {} : {fontFamily: ''}],
                                headerTitleAlign: 'center',
                                headerShown: !StringUtils.isEmpty(obj.title),
                                headerBackTitle: '',
                                headerTruncatedBackTitle: '',
                                headerBackTitleVisible: false,
                                headerLeft: () => <HeaderBackButton
                                    labelVisible={false}
                                    onPress={() => goBack()}
                                    backImage={() => <LeftImage/>}/>,
                                headerStyle: {
                                    height: titleHeight,
                                    borderWidth: 0,
                                    backgroundColor: DesignColor.mainColor,
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
                            };
                        }}
                    />;
                })
            }
        </RootStack.Navigator>
    );
};

/**
 * 回到首页某个tab
 * @param routeName
 * @param params
 */
export const backToHome = (routeName, params) => {
    if (isMountedRef.current && navigationRef.current) {
        // 先判断是否在tab页面，不在就先回到栈底
        if (navigationRef.current?.canGoBack()) {
            // 清空并重新加载首页
            navigationRef.current?.dispatch(state => {
                return CommonActions.reset({
                    ...state,
                    index: 0,
                    routes: [state.routes[0]]
                });
            });
        }
        navigationRef.current?.dispatch(TabActions.jumpTo(routeName, params));
    }
};

/**
 * 页面回退,由于导航栏返回键是自定义的，因此点击返回键会默认走这个方法，
 * 当然也可以在这个方法中做其他处理，如webview的场景，不结束webview，
 * 返回webview里面的上一个网页，需在此自定义判断
 */
export const goBack = () => {
    if (isMountedRef.current && navigationRef.current) {
        if (navigationRef.current?.canGoBack()) {
            navigationRef.current?.goBack();
        } else {
            // 混合模式下，结束当前RN容器
            // NativeModules.commModule.finishRN();
        }
    }
};

/**
 * 页面导航，一般情况都使用这个导航
 * @param routeName
 * @param params
 */
export const navigate = (routeName, params) => {
    if (isMountedRef.current && navigationRef.current) {
        navigationRef.current?.navigate(routeName.name, params);
    }
};

/**
 * 页面导航，需要同一个页面同时存在时可用，普通场景不建议使用
 * @param routeName
 * @param params
 */
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

/**
 * 用新的页面替换当前页面
 * @param routeName
 * @param params
 */
export const replace = (routeName, params) => {
    if (isMountedRef.current && navigationRef.current) {
        navigationRef.current?.dispatch(StackActions.replace(routeName.name, params));
    }
};

/**
 * 替换指定页面
 * @param routeName
 * @param params
 * @param key
 */
export const replaceOne = (routeName, params, key) => {
    if (isMountedRef.current && navigationRef.current) {
        navigationRef.current?.dispatch({
            ...StackActions.replace(routeName.name, params),
            source: key
        });
    }
};

/**
 * 回退n个页面
 * @param n
 */
export const pop = (n = 1) => {
    if (isMountedRef.current && navigationRef.current) {
        navigationRef.current?.dispatch(StackActions.pop(n));
    }
};

/**
 * 回到栈底
 */
export const popToTop = () => {
    if (isMountedRef.current && navigationRef.current) {
        navigationRef.current?.dispatch(StackActions.popToTop());
    }
};

