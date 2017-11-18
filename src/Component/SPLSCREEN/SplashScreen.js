import React, {Component} from 'react';
import getCart from '../../API/getCart'
import {newCartList} from "../../REDUX/ACTION/CartAction";
import {connect} from 'react-redux';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';

//Setting hien thi phu hop voi do phan giai man hinh moi may
const DEVICE_WIDTH = Dimensions.get('window').width;

import LogoStore from 'daCosmetic/src/Image/logostore.png';
class SplashScreen extends Component {
    componentDidMount(){
        getCart().then(value => {
            if(value !== null){
                this.props.newCartList(value)
            }
        })
    }

    render(){
        const  {wrapper, imgStyle, txtStyle} = styles;
        return (
            <View style={wrapper}>
                <Image source={LogoStore} style={imgStyle}/>
                <Text style={txtStyle} >#CosmeticStore</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor: '#FAFAFA',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
    },
    imgStyle:{
        width: DEVICE_WIDTH / 2,
        height: DEVICE_WIDTH /2,
    },
    txtStyle: {
        fontSize: 18,
        fontFamily: 'Avenir',
        color: '#ff6791',
        fontWeight: '800',
    }
});

const mapSTP = (state) => ({
    listCart : state.listCart
});
export default connect(mapSTP,{newCartList})(SplashScreen)