import React, {Component} from 'react';
import Search from '../common/search';
// import Util from '../common/util';
// import ServiceURL from '../common/Service';
import Swiper from 'react-native-swiper';
import  {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
// var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var banner = [
    'http://oweq6in8r.bkt.clouddn.com/about.jpg',
    'http://oweq6in8r.bkt.clouddn.com/liuliangqiu.jpg',
    'http://oweq6in8r.bkt.clouddn.com/rn.jpeg',
];

export default class  SearchView extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {

        super(props);
        // var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        //
        this.state = {
            // dataSource: ds.cloneWithRows([]),                // 承载搜索到的 movies 信息数组
            keywords: '西游记',                                // 搜索关键字
            show: false                                      // 控制 loading 动画开关
        };

    }

    render() {

        return (
            <ScrollView style={styles.flex_1}>

                  <View style={[styles.search, styles.row]}>

                    <View style={styles.flex_1}>
                        <Search placeholder="请输入电影的名称" onChangeText={this._changeText.bind(this)}/>
                    </View>

                    <TouchableOpacity style={styles.btn} onPress={this._search.bind(this)}>
                        <Text style={styles.fontFFF}>搜索</Text>
                    </TouchableOpacity>

                </View>
                {this._renderSwiper()}


            </ScrollView>
        );

    }

    // 页面加载完成后，获取数据
    componentDidMount() {
        // this._getData();
    }

    // 搜索框中内容变化时触发
    _changeText(val) {
        this.setState({
            keywords: val
        });
    }

    // 搜素按钮点击后触发，获取数据
    _search() {
        alert('1234')
        // this._getData();
    }


    _renderSwiper() {
       return(<Swiper  showsButtons={false} height={220} width={width} horizontal={true} autoplay autoplayTimeout={2}
                       dot={<View style={{backgroundColor:'rgba(0,0,0,.5)', width: 8, height: 8,borderRadius: 4}} />}
                       activeDot={<View style={{backgroundColor: 'blue', width: 8, height: 8, borderRadius: 4}} />}
                       paginationStyle={{
                           top: -350, centerX:self
                       }}>
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
       </Swiper>)
    }
};

const styles = StyleSheet.create({

    flex_1: {
        flex: 1,
        marginTop: 10,

    },

    search: {
        paddingLeft: 5,
        paddingRight: 5,

    },

    btn: {
        width: 50,
        backgroundColor: '#0091ff',
        justifyContent: 'center',
        alignItems: 'center',
    },

    fontFFF: {
        color: '#fff',
    },

    row: {
        flexDirection: 'row',
    },

    img: {
        width: 80,
        height: 110,
        resizeMode: Image.resizeMode.contain,
    },

    textWidth: {
        width: 200,
        marginLeft: 10,
    },
    slide1: {
        justifyContent: 'center',
        alignItems: 'center',
        width:width,
        height:200

    },
    image: {
        width:width,
        flex: 1
    }




});