import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;
import SignIn from'./SignIn';
import SignUp from'./SignUp';
import LogoStore from 'daCosmetic/src/Image/logostore.png';

export default class SignOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            email: '',
            password: '',
            isSigIN: true,
        };
    }

    gotoSignIn() {
        this.setState({ isSigIN: true });
    }
    signIn() {
        this.setState({ isSigIN: true });
    }
    signUp() {
        this.setState({ isSigIN: false });
    }
    gotoBack(){
        this.props.navigation.goBack();
    }
    render(){
        const  {wrapper, imgStyle, txtStyle,  inactiveStyle, activeStyle} = styles;
        const { isSigIN } = this.state;
        const mainJSX = isSigIN ? <SignIn gotoBack={this.gotoBack.bind(this)}/> : <SignUp gotoSignIn={this.gotoSignIn.bind(this)} />;
        return (
            <View style={wrapper}>
                <Image source={LogoStore} style={imgStyle}/>
                <Text style={txtStyle} >#CosmeticStore</Text>
                <View>
                    {mainJSX}
                </View>
                <View style={{ flexDirection: 'row', width: 300, paddingTop: 20 }}>
                    <TouchableOpacity onPress={this.signIn.bind(this)} style={styles.signin}>
                        <Text style={isSigIN ? activeStyle : inactiveStyle} >
                            ĐĂNG NHẬP
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.signUp.bind(this)} style={styles.signup}>
                        <Text style={!isSigIN ? activeStyle : inactiveStyle}>
                            ĐĂNG KÝ
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor: '#FAFAFA',
        flexDirection: 'column',
        alignItems:'center',
    },
    imgStyle:{
        width: DEVICE_WIDTH / 3,
        height: DEVICE_WIDTH /3,
    },
    txtStyle: {
        fontSize: 18,
        fontFamily: 'Avenir',
        color: '#ff6791',
        fontWeight: '800',
    },
    inactiveStyle: {
        color: '#D7D7D7'
    },
    activeStyle: {
        color: '#ff6791'
    },
    signin: {
        backgroundColor: '#fff',
        alignItems: 'center',
        flex: 1,
        paddingVertical: 15,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginRight: 0.5
    },
    signup: {
        backgroundColor: '#fff',
        alignItems: 'center',
        flex: 1,
        paddingVertical: 15,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        marginLeft: 0.5
    },
});