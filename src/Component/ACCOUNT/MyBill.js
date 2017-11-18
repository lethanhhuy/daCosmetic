import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    FlatList
} from'react-native';
export default class MyBill extends Component{

    _renderItem(item){
        console.log(item);

        return(
            <View style={{flex: 1, flexDirection:'row', paddingBottom:10}}>
                <Image style={{width: 100, height: 100,borderRadius: 5}} source={{uri: item.item.image}}/>
                <View style={{flexDirection:'column', marginLeft: 15}}>
                    <Text style={{color:'orange'}}>{item.item.name}</Text>
                    <Text style={{color:'black'}}>Số lượng: {item.item.qty}</Text>
                    <Text style={{color:'black'}}>Giá tiền: {item.item.price.text} đ</Text>
                    <Text style={{color:'red'}}>Thành tiền: {(item.item.price.value * item.item.qty).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')} đ</Text>
                </View>
            </View>

        );
    }
    render(){

        return(
            <View style={{flex: 1, padding: 10}}>
                <FlatList
                    data={this.props.navigation.state.params}
                    keyExtractor = {(item,index) => item.name}
                    renderItem = {(item) => this._renderItem(item)}
                />
            </View>
        );
    }
}