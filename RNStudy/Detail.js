import {
    StyleSheet,
    FlatList,
    Text,

} from 'react-native';
import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';

class Detail extends React.Component {
    // Nav options can be defined as a function of the screen's props:
    static navigationOptions = ({navigation}) => ({
        title: `详情`,
    });
    constructor(props){
        super(props);
        this.state = {data: null};
    }

    getData (){
        fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    data: responseJson.movies,
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.getData();
    }

    render() {

        if(!this.state.data){
            return (<Text>没数据啊</Text>);
        }
        return (

            <FlatList data = {this.state.data}
                      renderItem = {({item}) => <Text style = {styles.item}>{item.title}</Text>}/>
        );
    }
}
const styles = StyleSheet.create({
    txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
    }
});
module.exports = Detail;
