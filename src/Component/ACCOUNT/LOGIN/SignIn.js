import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native';

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
    }
    render(){
        const { email, password } = this.state;
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
        color: '#fff',
        backgroundColor: 'rgba(214, 214, 215, 0.17)',
        marginBottom: 10,
        borderRadius: 10,
        paddingLeft: 30,
        width: 300
    },
})