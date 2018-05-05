import React, {Component} from 'react';
import {View, ListView, TouchableOpacity, Image, Text, StyleSheet, Alert} from 'react-native';
import {data} from "./SimpleListScreen";

export const vegetables = [
  {
    image:require('../../src/image/chili.png'),
    title:'辣椒',
  },
  {
    image:require('../../src/image/mushroom.png'),
    title:'蘑菇',
  },
  {
    image:require('../../src/image/radish.png'),
    title:'萝卜',
  },
];
export const fruits = [
  {
    image:require('../../src/image/lemon.png'),
    title:'柠檬',
  },
  {
    image:require('../../src/image/orange.png'),
    title:'橘子',
  },
  {
    image:require('../../src/image/watermelon.png'),
    title:'西瓜',
  },
];
export const others = [
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
    image:require('../../src/image/pizza.png'),
    title:'披萨',
  },
];

export default class SectionListScreen extends Component {
  
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2//多个section
    });
    let data = [vegetables, fruits, [others]];
    this.state = {
      dataSource: ds.cloneWithRowsAndSections(data)
    }
  }
  
  render() {
    return (
      <View style={{flex: 1}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          renderSectionHeader={this._renderSectionHeader}//区头
        />
      </View>
    )
  }
  
  _renderRow = (item, sectionId) => {
    let sectionIndex = Number(sectionId);
    if (sectionIndex === 2) {
      return (
        <View style={styles.gridContainer}>
          {
            item.map((itemData, index) => {
              return (
                <TouchableOpacity key={index} style={styles.gridItem} onPress={() => {
                    Alert.alert(
                        itemData.title,
                        '',
                        [
                            {text: 'OK', onPress: () => {}},
                        ]
                    )
                }}>
                  <Image source={itemData.image} style={styles.gridImage}/>
                  <Text style={styles.gridTitle}>{itemData.title}</Text>
                </TouchableOpacity>
              )
            })
          }
        </View>

      )
    }
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
  };
  
  _renderSectionHeader = (sectionData, sectionId) => {
    let sectionIndex = Number(sectionId);
    let category = '';
    switch (sectionIndex) {
      case 0:
        category = '蔬菜';
        break;
      case 1:
        category = '水果';
        break;
      case 2:
        category = '其它';
        break;
    }
    return (
      <View style={styles.sectionHeader}>
        <Text>{category}</Text>
      </View>
    )
  };
}

export const styles = StyleSheet.create({
  sectionHeader: {
    padding: 10,//内边距
    backgroundColor: '#f0f0f0'
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
  },
  gridContainer: {
    flexDirection:'row', //横向
    flexWrap:'wrap',//换行
    justifyContent:'space-between',//伸缩项目会平均分布在主轴线上
    paddingLeft: 30,
    paddingRight: 30,
  },
  gridItem: {//其他品类的单元格样式
    alignItems:'center',//伸缩项目向交叉轴的中间位置靠起
    justifyContent:'center',//伸缩项目会平均地分布在主轴线里
    borderRadius: 6,
    borderWidth: 1,
    borderColor:'#dcdcdc',
    width:100,
    height: 100,
    marginTop: 20,
  },
  gridImage: {
    width: 60,
    height: 60,
  },
  gridTitle: {
    marginTop: 10
  }
});