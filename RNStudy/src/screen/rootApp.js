import React, {Component} from 'react';
// import CountDownButton from './countDownButton'

import LCCountDownButton from "./LCCountDownButton"
// import CountDownTimer from 'react_native_countdowntimer'
import {
    StyleSheet,

} from 'react-native';

export default class rootApp extends Component {

    render() {

        return (
            //<CountDownTimer
                //date={new Date(parseInt(endTime))}
                // date="2018-11-28T00:00:00+00:00"
                // days={{plural: 'Days ',singular: 'day '}}
                // hours=':'
                // mins=':'
                // segs=''
                //
                // daysStyle={styles.time}
                // hoursStyle={styles.time}
                // minsStyle={styles.time}
                // secsStyle={styles.time}
                // firstColonStyle={styles.colon}
                // secondColonStyle={styles.colon}
            // />

            <LCCountDownButton frameStyle={{top:44 * 3 + 4,right:10,width:120,height:36,position:'absolute'}}
                               beginText='获取验证码'
                               endText='再次获取验证码'
                               count={10}
                               pressAction={()=>{this.countDownButton.startCountDown()}}
                               changeWithCount={(count)=> count + 's后重新获取'}
                               id='register'
                               ref={(e)=>{this.countDownButton=e}}
            />


        )

    }

}

const styles = StyleSheet.create({

    cardItemTimeRemainTxt: {
        fontSize: 20,
        color: '#ee394b'
    },
    container: {
        backgroundColor: '#000',
        padding: 5,
        borderRadius: 5,
        flexDirection: 'row',
        marginTop:20
    },
    text: {
        fontSize: 30,
        color: '#FFF',
        marginLeft: 7,
    },
    //时间文字
    time: {
        marginTop:100,
        paddingHorizontal: 3,
        backgroundColor: 'rgba(85, 85, 85, 1)',
        fontSize: 12,
        color: 'white',
        marginHorizontal: 3,
        borderRadius: 2,
    },
    //冒号
    colon: {
        marginTop:100,
        fontSize: 12, color: 'rgba(85, 85, 85, 1)'
    },

    cardItemMask:{
        position: 'absolute',
        top: 15,
        right:10,
        backgroundColor: 'transparent'
    }
});