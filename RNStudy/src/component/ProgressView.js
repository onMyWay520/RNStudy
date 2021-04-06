import {ProgressView} from '@react-native-community/progress-view';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import {Platform} from 'react-native';
import React from 'react';

export default ({progress}) => {
    if (progress <= 0 || progress >= 1) {
        return null;
    }
    return Platform.OS === 'ios' ?
        <ProgressView progress={progress} progressTintColor={'#ED8B29'}/> :
        <ProgressBar progress={progress} color={'#ED8B29'} styleAttr={'Horizontal'}
                     indeterminate={false}
                     style={{height: 2.5}}/>;
}
