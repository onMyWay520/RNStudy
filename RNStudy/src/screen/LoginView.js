import React from 'react';
import {
  BackHandler,
  Dimensions,
  Image,
  NativeModules,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {goBack, navigate} from '../navigation/RootNavigation';
import {Routers} from '../navigation/RouteStack';
import BasePage from './BasePage';
import storage from '../utils/Storage';
import {tokenKey} from '../utils/ConstantUtils';

/**
 *使用Flexbox布局
 *
 * flexDirection   决定主轴的排列方式，默认值是竖直轴(column)方向    [column,row]
 *
 * justifyContent    决定其子元素沿着主轴的排列方式        [flex-start,center,flex-end,space-around,space-between]
 *
 * alignItems    决定其子元素沿着次轴（与主轴垂直的轴）排列方式    [flex-start,center,flex-end,stretch]
 *
 * 注意：要使stretch选项生效的话，子元素在次轴方向上不能有固定的尺寸。
 *
 */
const width = Dimensions.get('window').width;
export default class LoginView extends BasePage {
  constructor(props) {
    super(props);
    this.setHeaderVisible(false);
    this._onChangeText = this._onChangeText.bind(this);
    this.state = {
      userPhone: '',
      password: '',
    };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
  }

  onBackAndroid = () => {
    if (Platform.OS === 'ios') {
      NativeModules.RNExitApp.exitApp();
    } else {
      BackHandler.exitApp();
    }
    return true;
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.circleImage}
          source={require('../../src/image/beer.png')}
        />
        <TextInput
          style={styles.phoneTextInput}
          placeholder={'请输入您的手机号'}
          onChangeText={this.onUsernameChanged} //输入框改变触发的函数
          maxLength={11}
          keyboardType="number-pad"
          editable={true} //是否可编辑
          clearButtonMode="while-editing"
        />
        {/*密码*/}
        <TextInput
          style={styles.pswTextInput}
          placeholder={'请输入登录密码'}
          clearButtonMode="while-editing"
          secureTextEntry={true}
          onChangeText={this.onPasswordChanged} //输入框改变触发的函数
        />
        {/*登录*/}
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => {
            this.showData();
          }}>
          <Text style={styles.loginText}>登录</Text>
        </TouchableOpacity>
        <View style={styles.forgetViewStyle}>
          <Text style={styles.forgetTextStyle}>忘记密码</Text>

          <TouchableOpacity
            style={styles.registerTextStyle}
            onPress={() => {
              navigate(Routers.RegisterScreen);
            }}>
            <Text>还没有账号，赶紧注册</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _onChangeText(inputData) {
    console.log('输入的内容', inputData);
    //把获取到的内容，设置给showValue
    this.setState({userPhone: inputData});
  }

  onUsernameChanged = newUsername => {
    console.log('输入电话号', newUsername); //运行后可以在输入框随意输入内容并且查看log验证！
    this.state.userPhone = newUsername;
  };
  onPasswordChanged = newPassword => {
    console.log('输入密码', newPassword); //运行后可以在输入框随意输入内容并且查看log验证！
    this.state.password = newPassword;
  };

  showData() {
    var phoneStart = this.state.userPhone.indexOf('1');
    if (phoneStart === -1) {
      alert('请输入正确的手机号,手机号首位必须为1');
      return;
    }
    if (this.state.userPhone.length < 11) {
      alert('请输入正确的手机号,手机号不能小于11位');
      return;
    }
    if (this.state.password.length < 6) {
      alert('密码不能小于6位');
      return;
    } else {
      fetch('https://www.baidu.com', {
        method: 'GET',
      })
        .then(function (response) {
          //获取数据,数据处理

          console.log(response);
          if (response.status === 200) {
            // // console.log(this)
            setTimeout(function () {
              //直接this会被重置，需要定义一个变量，不延时会进入一个错误的页面
              storage.storeData(tokenKey, '222');
              // 回到首页，刷新首页数据
              goBack();
            }, 100);
          } else {
            alert('请求失败');
          }
        })
        .catch(function (err) {
          //错误处理
          console.log(err);
        });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  circleImage: {
    width: 200,
    height: 80,
    marginTop: 60,
  },
  phoneTextInput: {
    height: 40,
    width: width - 40,
    marginTop: 50,
    marginBottom: 10,
    textAlign: 'left',
    marginLeft: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#4398ff',
    fontSize: 18,
    paddingLeft: 16,
  },
  pswTextInput: {
    height: 40,
    width: width - 40,
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'left',
    marginLeft: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#4398ff',
    fontSize: 18,
    paddingLeft: 16,
  },
  btnStyle: {
    height: 50,
    width: width - 30,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: '#2a7fd5',
    justifyContent: 'center',
  },
  loginText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  forgetTextStyle: {
    marginTop: 10,
    height: 15,
    width: 60,
    fontSize: 14,
    color: 'blue',
    marginLeft: 20,
    textAlign: 'left',
    textDecorationLine: 'underline',
  },
  forgetViewStyle: {
    height: 50,
    width: width,
    marginTop: 10,
    flexDirection: 'row',
  },
  registerTextStyle: {
    height: 15,
    width: 160,
    fontSize: 14,
    color: 'black',
    marginLeft: 180,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});
