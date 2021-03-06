import React, {Component} from 'react';
import {View, FlatList, Image, Text, TouchableOpacity, StyleSheet, Alert,BackHandler} from 'react-native';
import {backToHome, navigate} from '../navigation/RootNavigation';
import storage from '../utils/Storage';
import {tokenKey} from '../utils/ConstantUtils';
import {Routers} from '../navigation/RouteStack';
import {ToastShow} from '../utils/ToastUtils';
export const data = [
  {
    image:require('../../src/image/beer.png'),
    title:'啤酒',
  },
  {
    image:require('../../src/image/bread.png'),
    title:'面包',
  },
  {
    image:require('../../src/image/cake.png'),
    title:'蛋糕',
  },
  {
    image:require('../../src/image/candy.png'),
    title:'糖果',
  },
  {
    image:require('../../src/image/chili.png'),
    title:'辣椒',
  },
  {
    image:require('../../src/image/chips.png'),
    title:'薯条',
  },
  {
    image:require('../../src/image/drink.png'),
    title:'饮料',
  },
  {
    image:require('../../src/image/egg.png'),
    title:'鸡蛋',
  },
  {
    image:require('../../src/image/ham.png'),
    title:'火腿',
  },
  {
    image:require('../../src/image/hotdog.png'),
    title:'热狗',
  },
  {
    image:require('../../src/image/icecream.png'),
    title:'冰激凌',
  },
  {
    image:require('../../src/image/icesucker.png'),
    title:'冰棍',
  },
  {
    image:require('../../src/image/lemon.png'),
    title:'柠檬',
  },
  {
    image:require('../../src/image/mushroom.png'),
    title:'蘑菇',
  },
  {
    image:require('../../src/image/orange.png'),
    title:'橘子',
  },
  {
    image:require('../../src/image/pizza.png'),
    title:'披萨',
  },
  {
    image:require('../../src/image/radish.png'),
    title:'萝卜',
  },
  {
    image:require('../../src/image/watermelon.png'),
    title:'西瓜',
  },
];

export default class SimpleListScreen extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {


  }
  _onRefresh(){

  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
            data={data}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => this._renderRow(item)}
        />
      </View>
    )
  }
  _renderRow = (item) => {
    return (
      <TouchableOpacity style={styles.cellContainer} onPress={() => {
        Alert.alert(
            item.title,
          '',
          [
            {text: 'OK', onPress: () => {}},
          ]
        )
      }}>
        <Image source={item.image} style={styles.image}/>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cellContainer: {
    borderBottomWidth: 1,
    borderColor: '#dcdcdc',
    flexDirection:'row',
    alignItems:'center',
    padding:15
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    marginLeft: 15,
  }
});
