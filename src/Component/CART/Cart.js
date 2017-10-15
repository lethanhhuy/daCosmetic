import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
export default class Cart extends Component {

    render(){
        const {TotalTitle, TotalButton, wrapper } = styles;
        return (
            <View style={wrapper}>
                <View style={{ flex: 9}}>
                </View>
                <View style={{ flex: 1}}>
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
        backgroundColor: '#e6ffff',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TotalTitle: {
        color: '#1a1a1a',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    },
});
