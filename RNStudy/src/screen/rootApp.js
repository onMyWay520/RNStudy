<<<<<<< HEAD
import React, {Component} from 'react';
import { StackNavigator, TabNavigator, TabBarBottom,SwitchNavigator } from 'react-navigation';
import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";
import LoginScreen from "./LoginScreen";
import  LoginView from  "./LoginView"
import  RootView  from  "./RootView"
import   RegisterScreen from "./RegisterScreen"
export default class RootApp extends Component {

    render() {
        // return <Navigator/>
        return <App/>
    }
}

const App = StackNavigator({
    Login: {screen: LoginView},
    RootView: {screen: RootView},
    RegisterScreen: {screen: RegisterScreen}

});
// const App= SwitchNavigator(
//     {
//         Login: LoginView,
//         RootView : RootView,
//     },
//     {
//         initialRouteName: 'LoginView',
//     }
// );
const Tab = TabNavigator(
    {
        First: {screen: FirstScreen},
        Second: {screen: SecondScreen}
    },
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',//设置TabNavigator的位置
        animationEnabled: false,//是否在更改标签时显示动画
        swipeEnabled: false,//是否允许在标签之间进行滑动
    }
);

const Navigator = StackNavigator(
    {
        Tab: {screen: Tab},
        Login: {screen: LoginScreen}
    },
    {
        navigationOptions: { //配置每一个选项卡的样式
            headerBackTitle: null,
            showIcon: true
        }
    }
);
=======
import React,{Component} from  'react';
import  LoginView from './LoginView'
import PPYTabNavigator  from  './PPYTabNavigator'
import RegisterScreen from './RegisterScreen'
import {
    StackNavigator,
    NavigationActions
} from 'react-navigation';
import  {

    AsyncStorage
} from  'react-native'
export  default class   rootApp extends Component{
    //构造函数
    constructor(props) {
        super(props);
        this.state = {
            userPhone:"",
            password:""
        }
    }

    componentDidMount(){
        var keys = ["userPhone","password"];
        var  that=this;
        // debugger
        //根据键数组查询保存的键值对
        AsyncStorage.multiGet(keys, function(errs, result){
            //如果发生错误，这里直接返回（return）防止进入下面的逻辑
            if(errs){
                return;
            }

            //得到的结果是二维数组（result[i][0]表示我们存储的键，result[i][1]表示我们存储的值）

                that.setState({
                    userPhone:(result[0][1]!=null)?result[0][1]:'',
                    password:(result[1][1]!=null)?result[1][1]:''


                });


        });
    }
    render(){

        console.log(this.state.userPhone);
        if(this.state.userPhone) {
            console.log(this.state.userPhone);

            return ( <SimpleApp />)
        }
        else {
            console.log('12345');

            return ( <SimpleApp2 />)

        }



    }
}

const SimpleApp = StackNavigator({

    PPYTabNavigator: { screen: PPYTabNavigator },
    RegisterScreen: { screen: RegisterScreen },

});
const SimpleApp2 = StackNavigator({

     LoginView:{screen: LoginView},
     PPYTabNavigator: { screen: PPYTabNavigator },
     RegisterScreen: { screen: RegisterScreen },


});
const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'PPYTabNavigator'}),
        NavigationActions.navigate({ routeName: 'RegisterScreen'})
    ]
})


>>>>>>> basicStudy
