import React, {Component} from 'react';
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
    onSucess() {
        Alert.alert(
            'Thông Báo',
            'Đăng ký thành công: \n' + this.state.email, [
                { text: 'OK', onPress: this.props.gotoSignIn() },
            ],
            { cancelable: false })
    }
    onFail() {
        Alert.alert(
            'Thông Báo',
            'Đăng ký thất bại: \nTên tài khoản hoặc email bị trùng', [
                { text: 'OK', onPress: () => this.removeEmail.bind(this)},
            ],
            { cancelable: false })
    }

    removeEmail() {
        this.setState({ email: '' })
    }
    registerUser() {
        const { name, email, password } = this.state;
    }
    render(){
        return (
            <View>
                <TextInput
                    underlineColorAndroid='rgba(0,0,0,0)' placeholder="Name"
                    onChangeText={(value) => this.setState({ name: value })}
                    value={this.state.name}
                    style={styles.inputstyle} />
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
        color: '#fff',
        backgroundColor: 'rgba(214, 214, 215, 0.17)',
        marginBottom: 10,
        borderRadius: 10,
        paddingLeft: 30,
        width: 300
    },
})
