import React, {Component} from 'react';
import {Dimensions, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import LCCountDownButton from './LCCountDownButton';
import BasePage from './BasePage'
export default class RegisterScreen extends BasePage {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            password: '',
            nickname: '',
        };
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={1} style={styles.container} onPress={() => {
                Keyboard.dismiss();
            }}>
                <KeyboardAvoidingView style={{flex: 1, width: screenWidth}} behavior={'padding'}>
                    <TextInput
                        ref={(ref) => this.phoneTextField = ref}
                        style={styles.textField}
                        placeholder={'请输入手机号'}
                        returnKeyType={'next'}
                        returnKeyLabel={'next'}
                        clearButtonMode={'while-editing'}
                        keyboardType='number-pad'
                        maxLength={11}
                        autoFocus={true}
                        autoCorrect={false}
                        underlineColorAndroid={'transparent'}
                        onSubmitEditing={() => {
                            this.pwdTextField.focus();
                        }}
                        onChangeText={(text) => {
                            let str = text.replace(/[^0123456789]/, ''); // 只允许输入数字
                            this.setState({
                                phone: str,
                            });
                        }}
                        value={this.state.phone}
                    />
                    <TextInput
                        ref={(ref) => this.pwdTextField = ref}
                        style={styles.textField}
                        placeholder={'请输入验证码'}
                        returnKeyType={'next'}
                        returnKeyLabel={'next'}
                        clearButtonMode={'while-editing'}
                        keyboardType={'default'}
                        maxLength={4}
                        underlineColorAndroid={'transparent'}
                        onSubmitEditing={() => {
                            this.nickNameField.focus();
                        }}
                        onChangeText={(text) => {
                            let str = text.replace(/[^0123456789]/, ''); // 只允许输入数字
                            this.setState({password: str}); // 替换输入的空格
                        }}
                        value={this.state.password}
                    />
                    <LCCountDownButton
                        frameStyle={{top: 50 + 24, right: 20, width: 120, height: 40, position: 'absolute'}}
                        beginText='获取验证码'
                        endText='再次获取验证码'
                        count={10}
                        pressAction={() => {
                            this.countDownButton.startCountDown();
                        }}
                        changeWithCount={(count) => count + 's后重新获取'}
                        id='register'
                        ref={(e) => {
                            this.countDownButton = e;
                        }}
                    />
                    <TextInput
                        ref={(ref) => this.nickNameField = ref}
                        style={styles.textField}
                        placeholder={'请输入密码'}
                        returnKeyType={'next'}
                        returnKeyLabel={'next'}
                        clearButtonMode={'while-editing'}
                        keyboardType={'default'}
                        maxLength={12}
                        secureTextEntry={true}
                        autoCorrect={false}
                        underlineColorAndroid={'transparent'}
                        onChangeText={(text) => {
                            this.setState({nickname: text.replace(/\s/g, '')}); // 替换输入的空格
                        }}
                        value={this.state.nickname}
                    />


                    <TouchableOpacity style={styles.submitButton}>
                        <Text style={styles.submitText}>确定</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </TouchableOpacity>
        );
    }
}

const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textField: {
        backgroundColor: 'white',
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#dcdcdc',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 16,
    },
    submitButton: {
        backgroundColor: '#2a7fd5',
        height: 50,
        borderRadius: 5,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
});
