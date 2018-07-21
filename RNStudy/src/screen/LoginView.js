import React,{Component} from  'react';
import  {
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
} from  'react-native'
import PPYTabNavigator from './PPYTabNavigator'
import RegisterScreen from './RegisterScreen'
// import {
//     StackNavigator,
// } from 'react-navigation';

var dimensions=require('Dimensions');
var  {width}=dimensions.get('window');
export  default class   LoginView extends Component{

    static navigationOptions = ({navigation, screenProps}) => ({
        //左侧标题
        headerTitle: '登录',
        //设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题
        headerBackTitle: null,
        //顶部标题栏的样式
        headerStyle: styles.headerStyle,
        //顶部标题栏文字的样式
        headerTitleStyle: styles.headerTitleStyle,
    });
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.circleImage} source={require('../../assets/image/Loginlogo.png')}/>
               <TextInput style={styles.phoneTextInput} placeholder={'请输入您的手机号'}
               />
                {/*密码*/}
                <TextInput
                    style={styles.pswTextInput}
                    placeholder={'请输入登录密码'}
                    secureTextEntry={true}/>
                {/*登录*/}
                <TouchableOpacity style={styles.btnStyle} onPress={
                    () =>{
                        this.props.navigation.navigate('PPYTabNavigator')
                        }

                }>
                    <Text style={styles.loginText}>登录</Text>
                </TouchableOpacity>
                <View style={styles.forgetViewStyle}>
                    <Text style={styles.forgetTextStyle}>忘记密码</Text>

                    <TouchableOpacity style={styles.registerTextStyle} onPress={
                        () =>{
                            this.props.navigation.navigate('RegisterScreen')
                        }

                    }>
                    <Text>还没有账号，赶紧注册</Text>
                    </TouchableOpacity>
                </View>


            </View>
        )
    }
}

const styles=StyleSheet.create(
       {
        container:{
            flex:1,
            flexDirection:'column',
            backgroundColor:'white',
            alignItems:'center',
        },
        circleImage:{
            width:200,
            height:80,
            marginTop:60
        },
           phoneTextInput:{
               height:40,
               width:width-40,
               marginTop:50,
               marginBottom:10,
               textAlign:'left',
               marginLeft:10,
               borderRadius:5,
               borderWidth:1,
               borderColor:'#4398ff',
               fontSize:18

           },
        pswTextInput:{
            height:40,
            width:width-40,
            marginTop:20,
            marginBottom:10,
            textAlign:'left',
            marginLeft:10,
            borderRadius:5,
            borderWidth:1,
            borderColor:'#4398ff',
            fontSize:18

        },
        btnStyle:{
            height:50,
            width:width-30,
            borderRadius:5,
            marginTop:20,
            backgroundColor:'#2a7fd5',
            justifyContent:'center'
        },
        loginText:{
        textAlign:'center',
        color:'white',
            fontSize:18
       },
           forgetTextStyle:{

           marginTop:10,
               height:15,
               width:60,
               fontSize:14,
               color:'blue',
               marginLeft:20,
               textAlign:'left',
               textDecorationLine: 'underline',


           },
        forgetViewStyle:{
            height:50,
            width:width,
            marginTop:10,
            flexDirection:'row',

},
           registerTextStyle:{
               height:15,
               width:160,
               fontSize:14,
               color:'black',
               marginLeft:180,
               marginTop:10,
               textDecorationLine: 'underline',


           }



    });