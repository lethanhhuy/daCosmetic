import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,TouchableOpacity,
    Image
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Account extends Component {
    render(){
        const {wrapper, TopAcc, BottAcc, flexColumn, txtStyles, infoContainer} = styles;
        return (
            < View style={wrapper}>

                <View style={TopAcc}>
                  <Image style={{width:100, height:100}}
                     source={require('daCosmetic/src/Image/guest.png')}
                   />
                     <Text style={styles.text_acc}>Chế độ khách</Text>
                </View>

                <View style={BottAcc}>
                        <TouchableOpacity >
                            <View style={flexColumn} >
                                <Ionicons name='ios-contact' size={28} color='#eb4d67'/>
                                <Text style={txtStyles} >Liên Hệ</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{borderTopWidth:1,borderColor:'#D6D6D6'}}/>
                        <TouchableOpacity >
                            <View style={flexColumn} >
                                <Ionicons name="ios-settings" size={28} color='#eb4d67'/>
                                <Text style={txtStyles}>Cài Đặt</Text>
                            </View>
                        </TouchableOpacity>
                    <View style={{borderTopWidth:1,borderColor:'#D6D6D6'}}/>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('MyLogIn')}>
                            <View style={flexColumn}>
                                <MaterialCommunityIcons name="login" size={28} color='#eb4d67'/>
                                <Text style={txtStyles}>Đăng Nhập</Text>
                            </View>
                        </TouchableOpacity>
                    <View style={{borderTopWidth:1,borderColor:'#D6D6D6'}}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
    },

    BottAcc:{
        padding: 10,
        flex: 1.5,
        margin: 10,
        backgroundColor:'#FFF',
        marginTop: 0,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,

    },
    TopAcc:{
        flex:3.5,
        marginTop:20,
        alignItems:'center'
    },
    flexColumn:{
        flexDirection:'row',
        height: 50,
        marginTop: 0,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    txtStyles:{
        fontSize:16,
        color:'#eb4d67',

    },
    text_acc:{
      fontSize:17,
      color:'#eb4d67',
      fontWeight: 'bold',
      fontFamily: 'Avenir'
    }
});
