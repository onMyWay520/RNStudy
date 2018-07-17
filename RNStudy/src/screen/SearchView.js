import React, {Component} from 'react';
import Search from '../common/search';
// import Util from '../common/util';
// import ServiceURL from '../common/Service';
import  {
    StyleSheet,
    Text,
    View,

    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';

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
        // this._getData();
    }


};

const styles = StyleSheet.create({

    flex_1: {
        flex: 1,
        marginTop: 5,
        height: 50,
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


});