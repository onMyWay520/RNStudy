import React,{Component} from  'react';
import LoginView from './LoginView'
import PPYTabNavigator  from  './PPYTabNavigator'
import RegisterScreen from './RegisterScreen'
import {
    StackNavigator,
} from 'react-navigation';

export  default class   rootApp extends Component{

    render(){

        return ( <SimpleApp />)


    }
}
const SimpleApp = StackNavigator({
    LoginView:{screen: LoginView},
    PPYTabNavigator: { screen: PPYTabNavigator },
    RegisterScreen: { screen: RegisterScreen },
});


