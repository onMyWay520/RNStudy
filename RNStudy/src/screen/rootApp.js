import React, {Component} from 'react';
import Swiper from 'react-native-swiper';
var ReactNative = require('react-native');
var {
    View,
    StyleSheet,
    Image,

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

        return (

             <Swiper  showsButtons={false} height={220} width={width} horizontal={true} autoplay autoplayTimeout={2}
                      dot={<View style={{backgroundColor:'rgba(0,0,0,.5)', width: 8, height: 8,borderRadius: 4}} />}
                      activeDot={<View style={{backgroundColor: 'blue', width: 8, height: 8, borderRadius: 4}} />}
                      paginationStyle={{
                          top: -350, centerX:self
                      }}
                    >
                 <View style={styles.slide1} >
                     <Image
                         style={styles.image}
                         source={{uri:banner[0]}}
                     />

                 </View>
                 <View style={styles.slide1} >
                     <Image
                         style={styles.image}
                         source={{uri:banner[1]}}
                     />
                 </View>
                 <View style={styles.slide1} >
                     <Image
                         style={styles.image}
                         source={{uri:banner[2]}}
                     />
                 </View>

            </Swiper>

        );


    }



}

// 样式
var  styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:width,
        height:200

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

    image: {
        width:width,
        flex: 1
    }

    });

