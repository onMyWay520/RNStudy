
/* "use strict" --- 严格模式
* - 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
  - 消除代码运行的一些不安全之处，保证代码运行的安全；
  - 提高编译器效率，增加运行速度；
  - 为未来新版本的Javascript做好铺垫。
* */
"use strict"
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    ListView,
} from 'react-native';
export default class ListViewLearn extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
    }
    render() {
        var dataSource = this.state.dataSource;
        return (
            <ListView
                dataSource={dataSource}
                renderRow={this.renderEvalation}
            />
        );
    }

    renderEvalation(data){
        return(
            <Text style = {styles.tv_name}>{data}</Text>
        );
    }

}

const styles= StyleSheet.create({
    tv_name:{
        fontSize:20,
        color:"red",
        backgroundColor:'yellow',
        marginTop:30,
        textAlign:'center',
        height:40
    },
});