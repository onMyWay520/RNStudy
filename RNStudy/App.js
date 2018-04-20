/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    TextInput,
    ScrollView,
    Image,
    FlatList,
    SectionList
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
    < View style={styles.container}>

      {/*<FlatList data={[{key:'zhangsan'},{key:'lisi'},{key:'wangwu'}]}*/}
                 {/*renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}*/}
    {/*/>*/}
        <SectionList
            sections={[{title:'D',data:['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},

        ]}
            renderItem={({item})=><Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}

        />
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100
    },
    item: {
        padding: 10,
        fontSize: 30,
        height: 44,
        color:'red',
        // fontColor:'red',
    },
    sectionHeader:{
        paddingTop:2,
        paddingLeft:10,
        fontSize:20,
    }
})