import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Alert,
    AsyncStorage
} from 'react-native';
import Firebase from 'daCosmetic/src/API/Firebase';
import global from 'daCosmetic/src/API/global';
import saveToken from'daCosmetic/src/API/saveToken';
var user_data;
export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }
    onsignIn() {
        const {email, password} = this.state;

        Firebase.auth().signInWithEmailAndPassword(email,password).then(function(user_data) {
            AsyncStorage.setItem('user_data', JSON.stringify(user_data));
            console.log(user_data);
            {(()=>{this.props.navigation.goBack()})()}
            /*Alert.alert('Đăng Nhập Thành Công: '+ this.state.email, null, [
                    {
                        text: 'OK',
                        onPress: ()=> {this.props.gotoBack(), global.onSignIn()}
                    },
                ],
                { cancelable: false }
            )*/
        }).catch(function(error) {
            if(error){
                switch (error.code){
                    case'auth/invalid-email':
                        Alert.alert('Thông báo','Tên email không tồn tại !')
                        break;
                    case'auth/wrong-password':
                        Alert.alert('Thông báo','Mật khẩu sai !')
                }
            }
            else{
                /*Alert.alert(
                    'Thông Báo',
                    'Đăng nhập thất bại:\nTài khoản hoặc mật khẩu không đúng !!', [
                        { text: 'OK' },
                    ],
                    { cancelable: false });*/
            }

        });
    }
    render(){
        const { email, password } = this.state;
        console.log(user_data);
        return (
            <View>
                <TextInput
                    underlineColorAndroid='rgba(0,0,0,0)' placeholder="Email"
                    onChangeText={(value) => this.setState({ email: value })}
                    value={email}
                    style={styles.inputstyle} />
                <TextInput
                    underlineColorAndroid='rgba(0,0,0,0)' placeholder="Mật khẩu"
                    onChangeText={(value) => this.setState({ password: value })}
                    value={password}
                    style={styles.inputstyle}
                    secureTextEntry={true} />
                <TouchableOpacity
                    onPress={this.onsignIn.bind(this)}
                    style={styles.sigupbutton}>
                    <Text style={{ color: '#fff', fontWeight: '800' }} >
                        ĐĂNG NHẬP
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    sigupbutton: {
        height: 40,
        //borderRadius: 10,
        //borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        //borderWidth: 1,
        marginTop: 10,
        backgroundColor: 'rgba(255, 0, 0, 0.85)'
    },
    inputstyle: {
        height: 50,
        color: '#616161',
        backgroundColor: 'rgba(214, 214, 215, 0.17)',
        marginBottom: 10,
        borderRadius: 10,
        paddingLeft: 30,
        width: 300
    },
})