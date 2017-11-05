import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,TouchableOpacity,
    Image,
    AsyncStorage
} from 'react-native';
import global from 'daCosmetic/src/API/global';
import Firebase from 'daCosmetic/src/API/Firebase';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Account extends Component {
    constructor(props) {
        super(props);
        this.state = { user: null };
        global.onSignIn = this.onSignIn.bind(this);
    }
    onSignIn(user) {this.setState({ user });
    }
    componentWillMount(){
        AsyncStorage.getItem('user_data').then(function (user_data_json) {
            let user_data = JSON.parse(user_data_json);
            if(user_data !== null){
                Firebase.auth().signInWithCustomToken(user_data.token).then(function (authData) {
                    console.log(authData)
                }).catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (errorCode === 'auth/invalid-custom-token') {
                        alert('The token you provided is not valid.');
                    } else {
                        console.error(error);
                    }
                });
            }else{
            }
        })
    }
    render(){
        const {wrapper, TopAcc, BottAcc, flexColumn, txtStyles,} = styles;
        const logOutJSX = (
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
        )
        const logInJSX = (
            < View style={wrapper}>
                <View style={TopAcc}>
                    <Image style={{width:100, height:100}}
                           source={require('daCosmetic/src/Image/guest.png')}
                    />
                    <Text style={styles.text_acc}>{user}</Text>
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
                    <TouchableOpacity >
                        <View style={flexColumn}>
                            <MaterialCommunityIcons name="login" size={28} color='#eb4d67'/>
                            <Text style={txtStyles}>Đăng Xuất</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{borderTopWidth:1,borderColor:'#D6D6D6'}}/>
                </View>
            </View>
        )
        const { user } = this.state;
        const mainJSX = this.state.user ? logInJSX : logOutJSX;
        return (
            <View style={{flex:1}}>
                {mainJSX}
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
