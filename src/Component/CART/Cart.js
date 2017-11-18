import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import CartView from './CartView';


export default class Cart extends Component {

    render(){
        return (
            <View style={{flex: 1}}>
                <CartView navigation={this.props.navigation}/>
            </View>
        );
    }
}
