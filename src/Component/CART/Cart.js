import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import CartView from 'daCosmetic/src/Component/CART/CartView';


export default class Cart extends Component {

    render(){
        const {TotalTitle, TotalButton, wrapper } = styles;
        return (
            <View style={wrapper}>
            <CartView/>
                <View style={{ flex:9}}>
                </View>
                <View style={{ flex:1}}>
                    <TouchableOpacity>
                        <View style={TotalButton}>
                                <Text style={TotalTitle}> Tổng tiền là:  </Text>
                        </View>
                    </TouchableOpacity>
                </View>


            </View>
        );
    }
}

const styles=StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    TotalButton: {
        height: 50,
        margin: 20,
        marginTop: 0,
        paddingLeft:30,
        backgroundColor: '#e6ffff',
        borderRadius: 15,
        //alignItems: 'center',
        justifyContent: 'center',

    },
    TotalTitle: {
        color: '#1a1a1a',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    },
});
