import React, {Component} from 'react';
import Firebase from 'daCosmetic/src/API/Firebase';
import {
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Text,
    Alert
} from 'react-native';

export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            verifypassword: ''
        }
    }

    removeEmail() {
        this.setState({ email: '' })
    }
    registerUser() {
        const { email, password, verifypassword } = this.state;
        if(password === verifypassword) {
            Firebase.auth().createUserWithEmailAndPassword(email, password).then(() =>{
                Alert.alert(
                    'Thông Báo',
                    'Đăng ký thành công: \n' + this.state.email, [
                        { text: 'OK', onPress: this.props.gotoSignIn() },
                    ],
                    { cancelable: false })
            }).catch(function(error) {
                if(error){
                    switch (error.code){
                        case'auth/weak-password':
                            Alert.alert('Thông báo','Mật khẩu của bạn quá ngắn !');
                            break;
                        case'auth/email-already-in-use':
                            Alert.alert('Thông báo','Tài khoản của bạn đã được sử dụng !');
                            break;
                        case'auth/invalid-email':
                            Alert.alert('Thông báo','Email tạo không đúng !');
                            break;
                    }
                }
                else{

                }
            });
        }
        else (
            Alert.alert(
                'Thông Báo',
                'Xác nhận mật khẩu không đúng !', [
                    { text: 'OK'},
                ],
                { cancelable: false })
        )

    }
    render(){
        return (
            <View>
                <TextInput
                    underlineColorAndroid='rgba(0,0,0,0)' placeholder="Email"
                    onChangeText={(value) => this.setState({ email: value })}
                    value={this.state.email}
                    style={styles.inputstyle} />
                <TextInput
                    underlineColorAndroid='rgba(0,0,0,0)' placeholder="Mật khẩu"
                    onChangeText={(value) => this.setState({ password: value })}
                    value={this.state.password}
                    style={styles.inputstyle}
                    secureTextEntry={true} />
                <TextInput
                    underlineColorAndroid='rgba(0,0,0,0)' placeholder="Xác nhận mật khẩu"
                    onChangeText={(value) => this.setState({ verifypassword: value })}
                    value={this.state.verifypassword}
                    style={styles.inputstyle}
                    secureTextEntry={true} />
                <TouchableOpacity onPress={this.registerUser.bind(this)}  style={styles.sigupbutton}>
                    <Text style={{ color: '#fff', fontWeight: '800' }} >
                        ĐĂNG KÝ
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
        color: '#050f2c',
        backgroundColor: 'rgba(214, 214, 215, 0.17)',
        marginBottom: 10,
        borderRadius: 10,
        paddingLeft: 30,
        width: 300
    },
})
