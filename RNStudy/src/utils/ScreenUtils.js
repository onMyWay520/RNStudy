import {Dimensions, PixelRatio, Platform, StatusBar} from 'react-native';

// UI设计图的宽度
const designWidth = 375;
// UI设计图的高度
const designHeight = 812;

// 手机屏幕的宽度
export const width = Dimensions.get('window').width;
// 手机屏幕的高度
export const height = Dimensions.get('window').height;

// 像素比
export const pixelRatio = PixelRatio.get();

const MAX_SCREEN = Math.max(width, height);
const MIN_SCREEN = Math.min(width, height);

const iphoneX = Platform.OS === 'ios' && (MIN_SCREEN === 375.0 && MAX_SCREEN === 812.0);
const iphoneMax = Platform.OS === 'ios' && (MIN_SCREEN === 414.0 && MAX_SCREEN === 896.0);
// 计算手机屏幕宽度对应设计图宽度的单位宽度
export const unitWidth = width / designWidth;
// 计算手机屏幕高度对应设计图高度的单位高度
export const unitHeight = height / designHeight;

export const statusBarHeight = getStatusBarHeight();
export const safeAreaViewHeight = (iphoneX || iphoneMax) ? 34 : 0;
// 标题栏的高度
export const titleHeight = 44 + statusBarHeight;

// 字体缩放比例，一般情况下不用考虑。
// 当应用中的字体需要根据手机设置中字体大小改变的话需要用到缩放比例
export const fontscale = PixelRatio.getFontScale();

// 状态栏的高度
export function getStatusBarHeight() {
    if (Platform.OS == 'android') {
        return StatusBar.currentHeight;
    }
    if (iphoneX || iphoneMax) {
        return 44;
    }
    return 20;
}

export function scaleSize(size) {
    return unitWidth * size;
}
