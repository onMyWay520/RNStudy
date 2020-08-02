import Toast from 'react-native-root-toast';
import {NativeModules, Platform} from 'react-native'
import {durations, positions} from 'react-native-root-toast/lib/ToastContainer';
import StringUtils from './StringUtils';

export const ToastShow = (msg) => {
    if (!StringUtils.isEmpty(msg)) {
        if (Platform.OS === 'ios') {
            Toast.show(msg, {
                duration: durations.SHORT,
                position: positions.CENTER
            });
        } else {
            NativeModules.commModule.toast(msg);
        }
    }
};
