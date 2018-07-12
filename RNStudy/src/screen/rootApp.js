import React, {Component} from 'react';

import LCCountDownButton from "./LCCountDownButton"
// var ReactNative = require('react-native');
// var {
//     View,
//     StyleSheet,
//     Image,
//
// } = ReactNative;

export default class rootApp extends Component {

    render() {

        return (
            <LCCountDownButton frameStyle={{top:44 * 3 + 4,right:10,width:120,height:36,position:'absolute'}}
                               beginText='获取验证码'
                               endText='再次获取验证码'
                               count={10}
                               // pressAction={this._countDownButtonPressed()}
                               changeWithCount={(count)=> count + 's后重新获取'}
                               id='register'
                               ref={(e)=>{this.countDownButton=e}}
            />

        )


    }
    _countDownButtonPressed(){
//触发倒计时
        this.countDownButton.startCountDown();

//请求发送验证码
        fetch('请求验证码')
            .then()
            .catch()
    }



}

