import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,TouchableOpacity,
    Image,
    AsyncStorage,
    Alert
} from 'react-native';
import Firebase from 'daCosmetic/src/API/Firebase';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,

        };
    }
    componentWillMount(){
        Firebase.auth().onIdTokenChanged((user_data) => {
            AsyncStorage.getItem('user_data').then((user_data_json) => {
                user_data = user_data_json
            if(user_data !== null){
                this.setState({
                    user: JSON.parse(user_data),

                });
                //console.log(user_data);
                /*Firebase.auth().onAuthStateChanged((onAuth) => {

                });*/

            }else{
                this.setState({user: ''});

            }
        })
        });
    }
    logOut(){
            Alert.alert('Thông báo','Bạn có chắc chắn muốn thoát',[
                {text:'Có', onPress: () =>  {AsyncStorage.removeItem('user_data').then((ouAuth) => {
                    outAuth = null;
                    this.setState({user: ouAuth});
                    //console.log(outAuth);
                    Firebase.auth().signOut().then(function() {

                    }).catch(function(error) {
                        // An error happened.

                    });

                }),this.props.navigation.navigate('MyLogIn')}},{text:'Không'}])
    }
    render(){

        const {wrapper, TopAcc, BottAcc, flexColumn, txtStyles,} = styles;
        const logOutJSX = (
                <View >
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
        );
        const logInJSX = (
                    <View>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('MyBill')} >
                            <View style={flexColumn} >
                                <Ionicons name='ios-contact' size={28} color='#eb4d67'/>
                                <Text style={txtStyles} >Lịch sử đơn hàng</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{borderTopWidth:1,borderColor:'#D6D6D6'}}/>
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
                        <TouchableOpacity onPress={this.logOut.bind(this)} >
                            <View style={flexColumn}>
                                <MaterialCommunityIcons name="login" size={28} color='#eb4d67'/>
                                <Text style={txtStyles}>Đăng Xuất</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{borderTopWidth:1,borderColor:'#D6D6D6'}}/>
                    </View>);
        const { user} = this.state;
        const mainJSX = this.state.user ? logInJSX : logOutJSX;
            return (
                <View style={wrapper}>
                    <View style={TopAcc}>
                        <Image style={{width:75, height:75}}
                               source={require('daCosmetic/src/Image/guest.png')}
                        />
                        <Text style={styles.text_acc}>{user ? user.email : 'GUEST' }</Text>
                    </View>
                    <View style={BottAcc}>
                        {mainJSX}
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
        flex: 2,
        margin: 10,
        backgroundColor:'#FFF',
        marginTop: 0,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
    },
    TopAcc:{
        flex:3,
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
      fontSize:15,
      color:'#eb4d67',
      fontWeight: 'bold',
      fontFamily: 'Avenir'
    }
});
