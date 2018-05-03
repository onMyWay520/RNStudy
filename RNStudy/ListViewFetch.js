
'use strict';
import React, { Component } from 'react';
import {
    View,
    ListView,
    Text,
    StyleSheet,
} from 'react-native';
import PullRefreshScrollView from './PullRefreshScrollView';
export default class ListViewFetch extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var  dataArr=[];
        for (var  i=0; i<10;i++){

            dataArr.push(
                'Row'+i,

            )
        }
        this.data = dataArr;
        this.state = {
            dataSource: ds.cloneWithRows(this.data),

        }
    }

    onRefresh(PullRefresh){
        console.log('refresh');


        setTimeout(function(){
            PullRefresh.onRefreshEnd();
        },2000);

    }

    onLoadMore(PullRefresh) {
        var self = this;
        setTimeout(function(){

            self.data = self.data.concat(['我是新数据']);//concat() 方法用于连接两个或多个数组。
            self.setState({
                dataSource: self.state.dataSource.cloneWithRows(self.data)
            });
            // PullRefresh.onLoadMoreEnd(); uncomment to end loadmore确保下一页没有数据的时候在调用这个方法
        },2000);

        console.log('onLoadMore');
    }

    render() {


        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textStyle}>我是标题</Text>
                </View>

                <ListView

                    renderScrollComponent={(props) => <PullRefreshScrollView
                        onRefresh={(PullRefresh)=>this.onRefresh(PullRefresh)}
                        onLoadMore={(PullRefresh)=>this.onLoadMore(PullRefresh)}
                        useLoadMore={1}{...props} />}

                    dataSource={this.state.dataSource}
                    renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
                    renderRow={(rowData) => <View style={styles.rowItem}><Text style={{fontSize:20}}>{rowData}</Text></View>}
                />
            </View>

        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textStyle:{
        fontSize:18,
        textAlign:'center',
        color:'white',
        marginTop:24
    },
    header:{
        height:64,
        backgroundColor: '#2a7fd5',
    },
    rowItem:{
        flex:1,
        height:60,
        alignItems:'center',
        justifyContent:'center'
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC',
    },
});
