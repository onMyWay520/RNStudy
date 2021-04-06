import BasePage from './BasePage';
import {View} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';
import deviceInfo from 'react-native-device-info';
import ProgressView from '../component/ProgressView';
import {DesignColor} from '../utils/DesignColor';
import StringUtils from '../utils/StringUtils';

export default class WebviewPage extends BasePage {

    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
        };
        this.setTitle(this.params.title || '加载中...');
    }

    render() {
        const {uri, html} = this.params;
        let source = {uri};
        if (html && !StringUtils.isEmpty(html)) {
            source.html = html;
        }
        return (
            <View style={{flex: 1, overflow: 'hidden', backgroundColor: DesignColor.bgColor}}>
                <ProgressView progress={this.state.progress}/>
                <WebView
                    style={{flex: 1, backgroundColor: DesignColor.bgColor, opacity: 0.99}}
                    source={source}
                    onLoadEnd={this._onLoadEnd}
                    onLoadProgress={this._onLoadProgress}
                    applicationNameForUserAgent={deviceInfo.getApplicationName() + '/' + deviceInfo.getVersion()}
                    scalesPageToFit={true}
                    cacheEnabled={true}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    messagingEnabled={true}
                    sharedCookiesEnabled={true}
                    mixedContentMode={'always'}
                    originWhitelist={['*']}
                    showsVerticalScrollIndicator={false}/>
            </View>
        );
    }

    _onLoadProgress = ({nativeEvent}) => {
        this.setState({
            progress: nativeEvent.progress,
        });
    };

    _onLoadEnd = ({nativeEvent}) => {
        console.log(nativeEvent);
        this.setTitle(this.params.title || '详情');
    };
}
