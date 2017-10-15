import React, {Component} from 'react';
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
export default class SplashScreen extends Component {
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