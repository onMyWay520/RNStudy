
import React, { Component } from 'react';
import { NavigatorIOS } from 'react-native';
import MainView from "./MainView";

export default class ListViewLearn extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: MainView,
                    title: 'ListViewExample',
                    rightButtonTitle:'右侧'

                }}
                style={{flex: 1}}
            />
        );
    }

}