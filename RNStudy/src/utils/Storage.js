/**
 * @overview React Native's AsyncStorage 的简单封装 .
 * @license MIT
 */
import AsyncStorage from '@react-native-community/async-storage';

/**
 * 通过key获取 value
 * @param {String|Array} key A key or array of keys
 * @return {Promise}
 */
const getData = (key) => {
    if (!Array.isArray(key)) {
        return AsyncStorage.getItem(key).then(value => {
            return JSON.parse(value);
        });
    } else {
        return AsyncStorage.multiGet(key).then(values => {
            return values.map(value => {
                return JSON.parse(value[1] || JSON.stringify(''));
            });
        });
    }
};

/**
 * 通过key保存 value
 * @param  {String|Array} key The key or an array of key/value pairs
 * @param  {Any} value The value to save
 * @return {Promise}
 */
const storeData = (key, value) => {
    if (!checkKey(key)) {
        console.warn('save key rules must be @[privateModule]/[keyname]');
        return;
    }

    if (!Array.isArray(key)) {
        return AsyncStorage.setItem(key, JSON.stringify(value || ''));
    } else {
        let pairs = key.map(function (pair) {
            return [pair[0], JSON.stringify(pair[1] || '')];
        });
        if (pairs && pairs.length > 0) {
            return AsyncStorage.multiSet(pairs);
        }
        return;
    }
};

//key规则 @[privateModule]/[keyname]
const checkKey = (key) => {
    let regex = /@[a-z]+\/[a-z]+/;
    return regex.test(key);
};

/**
 * 通过key删除 value
 * @param  {String|Array} key The key or an array of keys to be deleted
 * @return {Promise}
 */
const deleted = (key) => {
    if (Array.isArray(key)) {
        return AsyncStorage.multiRemove(key);
    } else {
        return AsyncStorage.removeItem(key);
    }
};

/**
 * 获取所有的key
 * @return {Promise} A promise which when it resolves gets passed the saved keys in AsyncStorage.
 */
const keys = () => {
    return AsyncStorage.getAllKeys();
};

const storage = {
    getData, storeData, deleted, keys
};

export default storage;
