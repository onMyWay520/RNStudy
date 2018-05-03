import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    RefreshControl,
    ActivityIndicator
} from 'react-native';


//import Dimensions from 'Dimensions';

//const {width, height} = Dimensions.get('window');
var pageNo=1 ;
//每页显示数据的条数
const pageSize = 10;
//页面总数据数
var dataUrl = 'https://api.douban.com/v2/movie/top250?count=30';
/*{"count": 1, "start": 0, "total": 250, "subjects": [{"rating": {"max": 10, "average": 9.6, "stars": "50", "min": 0},
"genres": ["\u72af\u7f6a", "\u5267\u60c5"], "title": "\u8096\u7533\u514b\u7684\u6551\u8d4e", "casts": [{"alt": "https:\/\/movie.douban.com\/celebrity\/1054521\/",
"avatars": {"small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p17525.jpg",
 "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p17525.jpg",
  "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p17525.jpg"},
   "name": "\u8482\u59c6\u00b7\u7f57\u5bbe\u65af", "id": "1054521"}, {"alt": "https:\/\/movie.douban.com\/celebrity\/1054534\/",
   "avatars": {"small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p34642.jpg",
    "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p34642.jpg",
    "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p34642.jpg"},
     "name": "\u6469\u6839\u00b7\u5f17\u91cc\u66fc", "id": "1054534"}, {"alt": "https:\/\/movie.douban.com\/celebrity\/1041179\/",
      "avatars": {"small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p5837.jpg",
      "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p5837.jpg",
      "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p5837.jpg"},
      "name": "\u9c8d\u52c3\u00b7\u5188\u987f", "id": "1041179"}],
       "collect_count": 1275001, "original_title": "The Shawshank Redemption", "subtype": "movie",
        "directors": [{"alt": "https:\/\/movie.douban.com\/celebrity\/1047973\/",
        "avatars": {"small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p230.jpg",
         "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p230.jpg",
         "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p230.jpg"},
         "name": "\u5f17\u5170\u514b\u00b7\u5fb7\u62c9\u90a6\u7279", "id": "1047973"}], "year": "1994",
          "images": {"small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p480747492.jpg",
          "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p480747492.jpg",
           "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p480747492.jpg"},
           "alt": "https:\/\/movie.douban.com\/subject\/1292052\/", "id": "1292052"}],
           "title": "\u8c46\u74e3\u7535\u5f71Top250"}*/
export default class ListViewFetch extends Component {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged : (row1, row2) =>  row1 !== row2});
        this.state = {
            dataSource : ds,
            isLoading:false,
            refreshing:false,
            isMoreloading:true
        }
    }

    componentDidMount(){//render渲染之后，React会根据Virtual DOM来生成真实DOM，生成完毕后会调用该函数
        // 菊花加载
        this.setState({
            isLoading:true,
        })

        this.fetchData();
    }


    fetchData(refresh){//刷新数据

        if(refresh){
            this.setState({
                refreshing:true
            });
        }

        fetch(dataUrl)
            .then((response) => response.json())
            .then((data) => {
                let dataList = data.subjects;
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(dataList),
                    isLoading:false,
                    refreshing:false
                })

            })
            .catch((err) => {
                console.log(err)
            })
            .done()
    }

    _renderRow(data){
        return (
            <View style={styles.cellBoxStyle}>
                <Image source={{uri:data.images.large}} style={{width:100,height:100}} />
                <Text style={styles.cellTxt}>{data.title}</Text>
            </View>
        )
    }
    // 刷新操作
    reloadNewData(){
        this.fetchData(true)
    }

    // 上拉加载更多
    renderFooter(){
        if(this.state.isMoreloading){
            return(
                <View style={{marginVertical: 10}}>
                    <ActivityIndicator color="red"/>
                </View>
            )
        }else{
            return(
                <View style={{marginVertical: 10,justifyContent:'center',alignItems:'center'}}>
                    <Text>没有更多了。</Text>
                </View>
            )
        }

    }

    // 滑动到做底下的时候
    _toEnd(){

        setTimeout(() => {
            this.setState({
                isMoreloading:false,
                pageNo: this.state.pageNo +1

            })
        },2000)
    }

    render() {

        let viewList;
        if(this.state.isLoading){
            viewList = (
                <ActivityIndicator
                    size="large"
                    color='red'
                    style={{marginTop:50}}
                />
            )
        }else{
            viewList = (
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(data) => this._renderRow(data)}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.reloadNewData.bind(this)}
                            colors={['red','orange']}
                        />}
                    //renderFooter页头与页脚会在每次渲染过程中都重新渲染（如果提供了这些属性）。如果它们重绘的性能开销很大，
                    // 把他们包装到一个StaticContainer或者其它恰当的结构中。页脚会永远在列表的最底部，而页头会在最顶部。
                    renderFooter={()=>this.renderFooter()}
                    //onEndReached当所有的数据都已经渲染过，并且列表被滚动到距离最底部不足onEndReachedThreshold个像素的距离时调用。
                    // 原生的滚动事件会被作为参数传递。
                    onEndReached={ ()=>this._toEnd() }
                />
            )
        }

        return (
            <View style={styles.container}>


                {/*练习下拉刷新，上拉加载组件，此处渲染视图*/}
                {viewList}
            </View>
        )

    }



}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cellBoxStyle:{
        flex: 1,
        flexDirection:'row',
        backgroundColor: 'white',
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        marginVertical: 3,
        borderColor: '#dddddd',
        borderStyle: null,
        borderWidth: 0.5,
        borderRadius: 2,
        shadowColor: 'gray',    // 设置阴影
        shadowOffset: {width:0.5, height: 0.5},
        shadowOpacity: 0.4,   // 透明度
        shadowRadius: 1,
        elevation:2   //   高度，设置Z轴，可以产生立体效果
    },
    cellTxt:{
        fontSize:16,
        color:'red',
       marginLeft:20
    }
})
