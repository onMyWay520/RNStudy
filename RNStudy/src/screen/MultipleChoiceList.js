import React, {Component} from 'react';
import {
  Button,
  Dimensions,
  Image,
  ListView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const {width, height} = Dimensions.get('window');

var collectionArray = [
  {collectItem: 'collectItem1'},
  {collectItem: 'collectItem2'},
  {collectItem: 'collectItem3'},
  {collectItem: 'collectItem4'},
  {collectItem: 'collectItem5'},
  {collectItem: 'collectItem6'},
  {collectItem: 'collectItem7'},
  {collectItem: 'collectItem8'},
  {collectItem: 'collectItem9'},
  {collectItem: 'collectItem10'},
];

export default class MultipleChoiceList extends Component {
  static navigationOptions = ({navigation, screenProps}) => ({
    headerRight: (
      <Button
        color="#3281DD"
        onPress={() => navigation.state.params.showFunction()}
        title="编辑"
      />
    ),
    title: '多选实现22',
    //https://blog.csdn.net/runrun117/article/details/80351236
  });

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
      isEdit: false,
      isChecked: false,
      isAllSelect: false,
      isShowBottom: false,
      selectMap: new Map(),
      // preIndex: 0 // 声明点击上一个按钮的索引  **** 单选逻辑 ****
    };
    // this.editClick()
  }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(collectionArray),
    });
    // DeviceEventEmitter.emit('edit’,editClick())
    // this.subscription = DeviceEventEmitter.addListener('edit’,this.editClick)

    // this.props.navigation.setParams({navigatePress:this.showFunction()})
  }

  render() {
    let temp = [...this.state.selectMap.values()];
    let isChecked = temp.length === this.state.dataSource._cachedRowCount;

    return (
      <View style={{flex: 1}}>
        {/*<View style={{width: width, height: 64, backgroundColor:"red",*/}
        {/*justifyContent:"flex-end", paddingRight: 20, flexDirection:'row', alignItems:"center"}}>*/}
        {/*<TouchableOpacity onPress={() => this.editClick()}>*/}
        {/*<Text>编辑</Text>*/}
        {/*</TouchableOpacity>*/}
        {/*</View>*/}

        <ListView
          renderRow={this.renderRow}
          dataSource={this.state.dataSource}></ListView>
        {
          // this.state.isShowBottom == true ?
          <View
            style={{
              width: width,
              height: 49,
              backgroundColor: '#FFF',
              justifyContent: 'space-between',
              paddingRight: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={() => this.allSelect(isChecked)}>
              <Image
                style={{marginLeft: 10, width: 30, height: 30}}
                source={
                  isChecked
                    ? require('../image/icon_check.png')
                    : require('../image/icon_no_check.png')
                }
              />
              <Text style={{marginLeft: 10, color: '#cc3341', marginTop: 10}}>
                全选
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.deleteItem()}>
              <Text style={{marginRight: 20, color: '#cc3341'}}>删除</Text>
            </TouchableOpacity>
          </View>
          // : null
        }
      </View>
    );
  }

  renderRow = (rowData, sectionID, rowID) => {
    // cell样式

    let map = this.state.selectMap;
    let isChecked = map.has(parseInt(rowID));
    // 选中的时候, 判断上一个索引不等于rowID的时候,不让他选中   **** 单选逻辑 ****
    // let isChecked = parseInt(rowID) == this.state.preIndex ?  map.has(parseInt(rowID)) : false; // 将rowID转成Int,然后将Int类型的ID当做Key传给Map

    return (
      <View
        style={{
          width: width,
          height: 60,
          backgroundColor: '#EEEEDD',
          flexDirection: 'row',
          alignItems: 'center',

          marginBottom: 10,
          marginLeft: this.state.isEdit ? 40 : 0,
        }}>
        {
          // this.state.isEdit ?
          <TouchableOpacity
            style={{positionvfdcfdxcd: 'absolute'}}
            onPress={() =>
              this.selectItem(parseInt(rowID), rowData.collectItem, isChecked)
            }>
            <Image
              source={
                isChecked
                  ? require('../image/icon_check.png')
                  : require('../image/icon_no_check.png')
              }
              style={{width: 25, height: 25, left: 20, alignItems: 'center'}}
            />
          </TouchableOpacity>
          // : null
        }
        <Text style={{fontSize: 18, color: 'red', left: 60}}>
          {rowData.collectItem}
        </Text>
      </View>
    );
  };

  editClick = () => {
    // 编辑
    this.setState(
      {
        isEdit: !this.state.isEdit,
        selectMap: new Map(),
      },
      () => {
        this.setState({
          isShowBottom: this.state.isEdit ? true : false,
        });
      },
    );
  };

  deleteItem = () => {
    // 删除
    let {selectMap} = this.state;
    let valueArr = [...selectMap.values()];
    let keyArr = [...selectMap.keys()];
    alert('删除' + valueArr);
  };

  allSelect = isChecked => {
    // 全选
    this.setState({
      isAllSelect: !isChecked,
    });
    if (isChecked) {
      // 如果已经勾选了,则取消选中
      let {selectMap} = this.state;
      selectMap = new Map();
      this.setState({selectMap});
    } else {
      // 没有勾选的, 全部勾选
      let newMap = new Map();
      for (let key = 0; key < collectionArray.length; key++) {
        let value = collectionArray[key].collectItem; // 拿到数组的collectItem
        newMap.set(key, value); // 第一个key, 第二个是value
      }
      this.setState({selectMap: newMap});
    }
  };

  selectItem = (key, value, isChecked) => {
    // 单选

    this.setState(
      {
        isChecked: !this.state.isChecked,
        // preIndex: key  //  **** 单选逻辑 ****
      },
      () => {
        let map = this.state.selectMap;
        if (isChecked) {
          map.delete(key, value); // 再次点击的时候,将map对应的key,value删除
        } else {
          // map = new Map() // ------>   **** 单选逻辑 ****
          map.set(key, value); // 勾选的时候,重置一下map的key和value
        }
        this.setState({selectMap: map});
      },
    );
  };
  showFunction = () => {
    alert('1234');
  };
}
