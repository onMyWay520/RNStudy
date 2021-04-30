import React from 'react';
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {data} from './SimpleListScreen';
import BasePage from './BasePage';

export default class GridLayoutScreen extends BasePage {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          contentContainerStyle={styles.listView}
          data={data}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => this._renderRow(item)}
        />
      </View>
    );
  }

  _renderRow = rowData => {
    return (
      <TouchableOpacity
        style={styles.cellContainer}
        onPress={() => {
          Alert.alert(rowData.title, '', [
            {
              text: 'OK',
              onPress: () => {},
            },
          ]);
        }}>
        <Image source={rowData.image} style={styles.image} />
        <Text style={styles.title}>{rowData.title}</Text>
      </TouchableOpacity>
    );
  };
}

const styles = StyleSheet.create({
  listView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  cellContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    width: 100,
    height: 100,
    marginTop: 20,
  },
  image: {
    width: 60,
    height: 60,
  },
  title: {
    marginTop: 10,
  },
});
