import React, {Component} from 'react';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import {

    StyleSheet,
} from 'react-native';
import GridLayoutScreen from "./GridLayoutScreen";
import SectionListScreen from "./SectionListScreen";
import GroupListScreen from "./GroupListScreen";
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;

export default class rootApp extends Component {

    static navigationOptions = {
        header: null
    };
    render() {
        return (

            <ScrollableTabView
                style={styles.container}
                renderTabBar={() => <DefaultTabBar />}
                tabBarUnderlineStyle={styles.lineStyle}
                tabBarActiveTextColor='#FF0000'
                onScroll={(position)=>{
                    console.log('scroll position '+position);
                }}
            >
                <GridLayoutScreen tabLabel='娱乐'  />
                <SectionListScreen tabLabel='科技'/>
                <GroupListScreen tabLabel='军事'/>
            </ScrollableTabView>
        );
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    lineStyle: {
        width:ScreenWidth/3,
        height: 2,
        backgroundColor: '#FF0000',
    },
    textStyle: {
        flex: 1,
        fontSize:20,
        marginTop:20,
        textAlign:'center',
    },

});

