import React from 'react';
import {Platform, SafeAreaView, View} from 'react-native';
import {DesignColor} from '../utils/DesignColor';
import DeviceInfoModule from 'react-native-device-info';
export default class BasePage extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.params = (this.props && this.props.route && this.props.route.params) || {};
        const systemVersion = parseFloat(DeviceInfoModule.getSystemVersion());
        this.iOS10 = (Platform.OS === 'ios' && systemVersion < 11);
    }

    render() {
        // 兼容iOS11以下的非安全区域
        if (this.iOS10 === true) {
            return (
                <View style={{ flex: 1, backgroundColor: this.bgColor ? this.bgColor : DesignColor.bgColor}}>
                {this._render && this._render()}
                {this._renderPopView && this._renderPopView()}
            </View>);
        }
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: this.bgColor ? this.bgColor : DesignColor.bgColor}}>
                {this._render && this._render()}
                {this._renderPopView && this._renderPopView()}
            </SafeAreaView>
        );
    }

    /**
     * 捕获错误信息
     * @param error
     * @param errorInfo
     */
    componentDidCatch(error, errorInfo) {
        console.log(JSON.stringify(error));
    }


    /**
     * 设置标题
     * @param title
     */
    setTitle(title) {
        this.props.navigation && this.props.navigation.setOptions({
            title: title
        });
    }

    /**
     * 控制标题栏显隐
     * @param visible
     */
    setHeaderVisible(visible) {
        this.props.navigation && this.props.navigation.setOptions({
            headerShown: visible
        });
    }

    /**
     * 自定义标题栏右边的布局
     * @param headerRight
     */
    setHeaderRight(headerRight) {
        this.props.navigation && this.props.navigation.setOptions({
            headerRight: headerRight
        });
    }

    hiddenRightItem() {
        this.props.navigation && this.props.navigation.setOptions({
            headerRight: null
        });
    }

    /**
     * 是否可滑动返回
     * @param enable
     */
    enableSwipeBack(enable) {
        this.props.navigation && this.props.navigation.setOptions({
            gestureEnabled: enable

        });

    }

    /**
     * 事件监听
     * @param eventName
     * @param callback
     */
    addListener(eventName, callback) {
        this.props.navigation && this.props.navigation.addListener(eventName, callback);
    }

    /**
     * 移除监听
     * @param eventName
     * @param callback
     */
    removeListener(eventName, callback) {
        this.props.navigation && this.props.navigation.removeListener(eventName, callback);
    }
}
