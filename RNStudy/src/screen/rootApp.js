import React, {Component} from 'react';
import Swiper from 'react-native-swiper';
var ReactNative = require('react-native');
var {
    View,
    StyleSheet,
    ScrollView,
    Image,
    Text

} = ReactNative;
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var banner = [
    'http://oweq6in8r.bkt.clouddn.com/about.jpg',
    'http://oweq6in8r.bkt.clouddn.com/liuliangqiu.jpg',
    'http://oweq6in8r.bkt.clouddn.com/rn.jpeg',
];
export default class rootApp extends Component {

    render() {

          return  <Swiper style={styles.wrapper} showsButtons={false}>
                <View style={styles.slide1}>
                    <Text style={styles.text}> 1 </Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>2</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>3</Text>
                </View>
            </Swiper>
    }





}

// 样式
var  styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }


});

