import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Routers} from '../navigation/RouteStack';
import {navigate} from '../navigation/RootNavigation';
import storage from '../utils/Storage';
import {tokenKey} from '../utils/ConstantUtils';
import BasePage from './BasePage';

const items = [
    {
        title: 'Simple List',
        detail: '单行列表，无分组',
    },
    {
        title: 'Grid Layout',
        detail: '网格列表',
    },
    {
        title: 'Section List 1',
        detail: '分组列表，嵌套View实现网格',
    },
    {
        title: 'Section List 2',
        detail: '分组列表，嵌套ListView实现网格',
    },
    {
        title: '单选实现',
        detail: '单选',
    },
    {
        title: '多选实现',
        detail: '多选',
    },
    {
        title: '侧滑',
        detail: '侧滑删除',
    },
    {
        title: 'webView',
        detail: 'webview',
    },
];

export default class MainView extends BasePage {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
        };
        this.setHeaderVisible(true)
    }

    componentDidMount() {
        storage.getData(tokenKey).then(token => {
            if (!token) {
                navigate(Routers.LoginView, {callback: this._onRefresh});
            } else {
                this._onRefresh();
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={items}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({item, index}) => this._renderRow(item, index)}
                />
            </View>
        );
    }

    //从数据源(Data source)中接受一条数据，以及它和它所在section的ID。返回一个可渲染的组件来为这行数据进行渲染。
    // 默认情况下参数中的数据就是放进数据源中的数据本身，不过也可以提供一些转换器。
    _renderRow = (item, index) => {
        return (
            <TouchableOpacity
                style={styles.cellContainer}
                onPress={() => {
                    this.itemPressed(index);
                }}>
                <Text style={styles.titleLabel}>{item.title}</Text>
                <Text style={styles.detailLabel}>{item.detail}</Text>
            </TouchableOpacity>
        );
    };
    itemPressed(index: Number) {
        //item点击事件
        switch (index) {
            case 0:
                navigate(Routers.SimpleListScreen);
                break;
            case 1:
                navigate(Routers.GridLayoutScreen);
                break;
            case 2:
                navigate(Routers.SectionListScreen);
                break;
            case 3:

                break;
            case 4:
                navigate(Routers.CircleList);
                break;
            case 5:
                // navigate(Routers.MultipleChoiceList);
                break;
            case 6:
                // navigate(Routers.listViewSwipe);
                break;
            case 7:
                navigate(Routers.WebviewPage,{uri:'https://www.baidu.com'});
                break;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cellContainer: {
        padding: 16,
        borderBottomWidth: 1,
        borderColor: '#dcdcdc',
    },
    titleLabel: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    detailLabel: {
        fontSize: 13,
        color: '#999999',
        marginTop: 10,
    },

});
