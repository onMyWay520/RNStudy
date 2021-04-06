/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {isMountedRef, MyRootStack, navigationRef} from './src/navigation/RootNavigation';

// Gets the current screen from navigation state
const getActiveRouteName = state => {
    const route = state.routes[state.index];

    if (route.state) {
        // Dive into nested navigators
        return getActiveRouteName(route.state);
    }

    return route.name;
};

// eslint-disable-next-line no-undef
const App: () => React$Node = () => {
    const routeNameRef = React.useRef();

    React.useEffect(() => {
        const state = navigationRef.current.getRootState();
        // Save the initial route name
        routeNameRef.current = getActiveRouteName(state);
        isMountedRef.current = true;

        return () => (isMountedRef.current = false);
    }, []);

    return (
        <NavigationContainer
            style={{flex: 1}}
            ref={navigationRef}
            onStateChange={state => {
                const previousRouteName = routeNameRef.current;
                const currentRouteName = getActiveRouteName(state);
                if (previousRouteName !== currentRouteName) {
                    // 这里页面切换可以埋点
                }
                // Save the current route name for later comparision
                routeNameRef.current = currentRouteName;
            }}
        >
            <StatusBar
                translucent={true}
                backgroundColor={'transparent'}
                barStyle="dark-content"
            />
            <MyRootStack />

        </NavigationContainer>
    );
};

export default App;
