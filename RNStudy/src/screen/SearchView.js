import React, {Component} from 'react';
import Search from '../common/search';
import Swiper from 'react-native-swiper';
import ImagePicker from 'react-native-image-picker';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    ListView,
    Alert,
    PixelRatio

} from 'react-native';
import CountDownTimer from 'react_native_countdowntimer'
import {data} from "./SimpleListScreen";
var Dimensions = require('Dimensions');
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
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            // dataSource: ds.cloneWithRows([]),                // 承载搜索到的 movies 信息数组
            keywords: '',                                // 搜索关键字
            // show: false
            // 控制 loading 动画开关
            dataSource: ds.cloneWithRows(data),
            avatarSource: null

        };

    }


    render() {

        return (
            <ScrollView style={styles.flex_1}>

                <View style={[styles.search, styles.row]}>

                    <View style={styles.flex_1}>
                        <Search placeholder="请输入电影的名称" onChangeText={this._changeText.bind(this)} />
                    </View>

                    <TouchableOpacity style={styles.btn} onPress={this._search.bind(this)}>
                        <Text style={styles.fontFFF}>搜索</Text>
                    </TouchableOpacity>

                </View>

                {this._renderSwiper()}
                <ListView showsVerticalScrollIndicator={false}
                          showsHorizontalScrollIndicator={true}
                          horizontal={true}
                          backgroundColor={'red'}
                          contentContainerStyle={styles.listView}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                />
                <View style={styles.container}>
                    <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                        <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 30}]}>
                            { this.state.avatarSource === null ? <Text>选择照片</Text> :
                                <Image style={styles.avatar} source={this.state.avatarSource} />
                            }
                        </View>
                    </TouchableOpacity>


                </View>
                <CountDownTimer
                    //date={new Date(parseInt(endTime))}
                    date="2018-10-28T00:00:00+00:00"
                    days={{plural: '天 ',singular: 'day '}}
                    hours=':'
                    mins=':'
                    segs=''
                    daysStyle={styles.time}
                    hoursStyle={styles.time}
                    minsStyle={styles.time}
                    secsStyle={styles.time}
                    // firstColonStyle={styles.colon}
                    // secondColonStyle={styles.colon}
                />

                </ScrollView>


        );

    }

    // 页面加载完成后，获取数据
    componentDidMount() {
        // this._getData();
    }

  //  搜索框中内容变化时触发
    _changeText(val) {
        this.setState({
            keywords: val
        });
        console.log(val)
    }

  //  搜素按钮点击后触发，获取数据
    _search() {

      alert(this.state.keywords)
        // this._getData();
    }

//创建轮播
    _renderSwiper() {
       return(
           <Swiper  showsButtons={false} autoplay={true} height={80}
                    backgroundColor={'green'}
                    dot={<View style={{backgroundColor:'rgba(0,0,0,.5)', width: 8, height: 8,borderRadius: 4 }} />}
                    activeDot={<View style={{backgroundColor: 'yellow', width: 8, height: 8, borderRadius: 4 }} />}

                    paginationStyle={{
                        top:185, left: null, right: 200
                    }}>
               <View style={styles.slide1} >
                   <Image
                       style={styles.swiperImage}
                       source={{uri:banner[0]}}
                   />

               </View>
               <View style={styles.slide1} >
                   <Image
                       style={styles.swiperImage}
                       source={{uri:banner[1]}}
                   />
               </View>
           </Swiper>
       )
    }
    //cell单元格
    _renderRow = (rowData) => {
        return (
            <TouchableOpacity style={styles.cellContainer} onPress={() => {
                Alert.alert(
                    rowData.title,
                    '',
                    [
                        {text: 'OK', onPress: () => {}},
                    ]
                )
            }}>
                <Image source={rowData.image} style={styles.image}/>
                <Text style={styles.title}>{rowData.title}</Text>
            </TouchableOpacity>
        )
    }
    //选择图片
     selectPhotoTapped() {
         const options = {
             title: '选择图片',
             cancelButtonTitle: '取消',
             takePhotoButtonTitle: '拍照',
             chooseFromLibraryButtonTitle: '选择照片',
             // customButtons: [
             //     {name: 'fb', title: 'Choose Photo from Facebook'},
             // ],
             cameraType: 'back',
             mediaType: 'photo',
             videoQuality: 'high',
             durationLimit: 10,
             maxWidth: 300,
             maxHeight: 300,
             quality: 0.8,
             angle: 0,
             allowsEditing: false,
             noData: false,
             storageOptions: {
                 skipBackup: true
             }
         };
         ImagePicker.showImagePicker(options, (response) => {
             console.log('Response = ', response);

             if (response.didCancel) {
                 console.log('User cancelled photo picker');
             }
             else if (response.error) {
                 console.log('ImagePicker Error: ', response.error);
             }
             else if (response.customButton) {
                 console.log('User tapped custom button: ', response.customButton);
             }
             else {
                 let source = {uri: response.uri};

                 // You can also display the image using data:
                 // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                 this.setState({
                     avatarSource: source
                 });
             }
         });
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

    slide1: {
        justifyContent: 'center',
        alignItems: 'center',
        width:width,
        height:200

    },
    swiperImage: {
        width:width,
        flex:1
    },
    listView: {
        flexDirection:'row',
        height:250,
        // flex:1
        // flexWrap:'wrap',//允许换行
        // justifyContent:'space-between',//平均分布在该行
        // paddingLeft: 20,
        // paddingRight: 20,
    },
    cellContainer: {
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 6,
        borderWidth: 1,
        borderColor:'#dcdcdc',
        width:80,
        height: 100,
        marginTop: 10,
    },
    image: {
        width: 60,
        height: 60,
    },
    title: {
        marginTop: 0,
    },
    avatarContainer: {
            borderColor: '#9B9B9B',
             borderWidth: 1 / PixelRatio.get(),
             justifyContent: 'center',
            alignItems: 'center'
    },

       avatar: {
        borderRadius: 50,
           width: 100,
           height: 100
    }


});