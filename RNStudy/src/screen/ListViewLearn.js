
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
                    title: 'ListViewExample'

                }}
                style={{flex: 1}}
            />
        );
    }

}