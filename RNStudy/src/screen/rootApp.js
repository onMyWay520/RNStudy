import React, {Component} from 'react';
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
    constructor(props) {
        super(props);
        this.state = {
            //当前显示的下标
            position: 0,
        }
    }
    static  defaultProps={
        duration:3000
    }
    render() {

        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}//隐藏水平指示器
                    pagingEnabled={true}
                    ref="scrollView"
                    //手指按下的时候，停止计时器
                    // onTouchStart={() => clearInterval(this.timer)}
                    //滚动动画结束时调用此函数。一帧滚动结束
                    onMomentumScrollEnd={(v) => this.onAnimationEnd(v)}>
                    {/*显示轮播图的图片内容*/}
                    {this.renderItem()}
                </ScrollView>
                 <View style={styles.indicator}>
                 {this.getIndicators()}
                 </View>
            </View>

        );
    }
    //v 则为scrollView对象
    onAnimationEnd(v) {
        //1.求出水平方向的偏移量
        var offsetX = v.nativeEvent.contentOffset.x;
        //2.根据偏移量求出当前的页数  width为图片的宽度（banner的宽度 ）
        var position = Math.round(offsetX / width);
        //3.更新状态机, 刷新圆点
        this.setState({
            position: position
        });
    }
    renderItem(){
        var images = [];
        for (var i = 0; i < banner.length; i++) {
            images.push(
                <View key={i}>
                    {/*将图片的宽度设置为屏幕宽度*/}
                    {<Image source={{uri: banner[i]}} style={styles.image}/>}
                </View>
            );
        }
        return images;

    }
    //在循环创建圆点时判断添加的点是不是当前显示的页面，如果是的话则用选中的样式
    getIndicators() {
        var circles = [];
        for (var i = 0; i < banner.length; i++) {
            circles.push(
                <Text key={i} style={i === this.state.position ? styles.selected : styles.unselected}>&bull;</Text>
            );
        }
        return circles;
    }
    componentDidMount(){
        //开启定时器
        this.startTimer()
    };

    componentWillUnmount() {
        clearInterval(this.timer)
    }
    //开启定时器
    startTimer(){
        //1.拿到scrollView
        var scrollView = this.refs.scrollView;
        //2.添加定时器
        this.timer = setInterval(()=>{
            //设置圆点的下标
            var curr = this.state.position;
            if (curr + 1 > banner.length - 1) {
                curr = 0;
            } else {
                curr++;
            }
            //更新状态机，更新当前下标
            this.setState({
                position: curr,
            });
            //滚动ScrollView，1.求出水平方向的平移量  offsetX = curr * width
           scrollView.scrollTo({x: curr * width, y: 0, animated: true})
        }, this.props.duration);

    };

}

// 样式
var  styles = StyleSheet.create({
    container: {
        marginTop: 0,
    },
    image: {
        width: width,
        height: 240,
    },
    //底部指示器的样式
    indicator: {
        width: width,
        height: 40,
        position: 'absolute',
        bottom: 0,//放置在底部
        backgroundColor: 'rgba(0,0,0,0.5)',
        flexDirection: 'row',
        alignItems: 'center',
    },
    unselected: {
        marginLeft: 10,
        fontSize: 40,//也就是圆点的大小
        color: 'white'
    },
    selected: {
        marginLeft: 10,
        fontSize: 40,
        color: 'red'
    },
});

