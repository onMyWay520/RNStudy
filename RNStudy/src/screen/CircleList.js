import React from 'react';
import {View} from 'react-native';
import RadioGroup from './RadioGroup';
import BasePage from './BasePage';
export default class CircleList extends BasePage {
  constructor(props) {
    super(props);
    this.state = {
      sexArray: [
        {
          title: '男',
          image: require('../image/icon_no_check.png'),
          image2: require('../image/icon_check.png'),
        },
        {
          title: '女',
          image: require('../image/icon_no_check.png'),
          image2: require('../image/icon_check.png'),
        },
        {
          title: '你猜',
          image: require('../image/icon_no_check.png'),
          image2: require('../image/icon_check.png'),
        },
      ],
    };
  }

  render() {
    return (
      <View style={{height: 44, flex: 1}}>
        <RadioGroup
          style={{flexDirection: 'row'}} //整个组件的样式----这样可以垂直和水平
          conTainStyle={{height: 84, width: 100}} //图片和文字的容器样式
          imageStyle={{width: 25, height: 25}} //图片样式
          textStyle={{color: 'black'}} //文字样式
          selectIndex={''} //空字符串,表示不选中,数组索引表示默认选中
          data={this.state.sexArray} //数据源
          onPress={(index, item) => {
            alert(item.title);
          }}
        />
        <RadioGroup
          style={{flexDirection: 'column'}} //整个组件的样式----这样可以垂直和水平
          conTainStyle={{height: 84, width: 60}} //图片和文字的容器样式
          imageStyle={{width: 25, height: 25}} //图片样式
          textStyle={{color: 'black'}} //文字样式
          selectIndex={''} //空字符串,表示不选中,数组索引表示默认选中
          data={this.state.sexArray} //数据源
          onPress={(index, item) => {
            alert(item.title);
          }}
        />
      </View>
    );
  }
}
