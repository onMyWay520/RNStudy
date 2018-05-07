import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';
import Color from "../common/Color";
import TabBarItemComponent from "../widgets/TabBarItemComponent";
import MovieListScreen from "./MovieListScreen";

export default class RootView extends Component {
  
  constructor(props) {
    super(props);
    StatusBar.setBarStyle('light-content')
  }
  
  render() {
    return (
      <Navigator/>
    )
  }
}

const Tab = TabNavigator(
  {
    First: {//每一个页面的配置
      screen: MovieListScreen,//当前选项卡加载的页面
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '正在热映',
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarItemComponent
            tintColor={tintColor}
            focused={focused}
            normalImage={require('../../assets/image/playing.png')}
            selectedImage={require('../../assets/image/playing-active.png')}
          />
        )
      }),
      
    },
    Second: {
      screen: MovieListScreen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '即将上映',
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarItemComponent
            tintColor={tintColor}
            focused={focused}
            normalImage={require('../../assets/image/coming.png')}
            selectedImage={require('../../assets/image/coming-active.png')}
          />
        )
      })
    }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',//   //设置TabNavigator的位置
    swipeEnabled: false,   //是否允许在标签之间进行滑动
    animationEnabled: false,//是否在更改标签时显示动画
    lazy: true, // 是否懒加载
    tabBarOptions: {
        showIcon: true,//是否显示图标，默认关闭
        showLabel: true,//是否显示label，默认开启
      activeTintColor: Color.themeColor,//label和icon的前景色 活跃状态下（选中）
      inactiveTintColor: '#888888',//label和icon的前景色 活跃状态下（未选中）
      style: {backgroundColor: '#ffffff'} //TabNavigator 的背景颜色

    },
      //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
      backBehavior: "none",
  }
);
//生成路由关系
const Navigator = StackNavigator(
  {
    Tab: {screen: Tab},
  },
  {
    navigationOptions: {//屏幕导航的默认选项
    //  headerBackTitle: null,
      headerTintColor: '#ffffff',
      headerStyle: {backgroundColor: Color.themeColor},
     // showIcon: true
    }
  }
);

