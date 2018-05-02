
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
    View,
    Image,
    TouchableOpacity
} from 'react-native';
export default class ListViewLearn extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {

            dataSource:ds.cloneWithRows(this.getRows({}))//初始化数据源

        };
    }
    getRows(){
        var  dataArr=[];
        for (var  i=0; i<10;i++){

            dataArr.push(
               'Row'+i,

            )
        }
        return dataArr;


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
            <TouchableOpacity onPress = {() =>alert(data)} underlayColor = "transparent" >
            <View style={styles.rightViewStyle}>
               <Image style={styles.imageStyle}/>
               <Text style = {styles.tv_name}>{data}</Text>
           </View>

            </TouchableOpacity>


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
        height:50,
        width:200
    },
    rightViewStyle:{
        flexDirection:'row',
        borderBottomColor:'#CCCCCC',//cell的分割线
        borderBottomWidth:1
    },
    imageStyle:{
        width:80,
        height:80,
        margin:30,
        backgroundColor:'red'
    },

});