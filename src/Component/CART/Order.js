import React,{Component} from 'react';
import Firebase from '../../API/Firebase';
import * as firebase from 'firebase';
import {connect} from 'react-redux';
var datetime= new Date();
import {
    View,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Text,
    Image,
    Dimensions,
    Alert
} from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;
import LogoStore from '../../Image/logostore.png';
let database, bill;

class Order extends Component{
    constructor(props){
        super(props);
        this.state = {
            hoTen: '',
            email:'',
            sdt: '',
            diaChi: '',
        };
        database = firebase.database();
    }
    subMit(){
        bill = database.ref('Order');
        let billdetail = bill.push();
        if(this.props.listCart.totalPrice.value !== 0){
            billdetail.set({
                HoTen: this.state.hoTen,
                NgayDat: new Date().toLocaleString(),
                SDT:this.state.sdt,
                DiaChi: this.state.diaChi,
                TongTien : this.props.listCart.totalPrice,
                CTHD: this.props.listCart.data,
                TinhTrang:'Đã nhận đơn hàng'
                });
            this.props.navigation.goBack() && this.props.navigation.navigate('TabHome') ;
            Alert.alert('','Đặt hàng thành công')
        }else {
            Alert.alert('','Giỏ hàng trống !!')
        }
    }
    render(){
        const {wrapper, inputStyle, viewInput, buttonStyle, textStyle, imgStyle} = styles;
        console.log('kiemtra',this.props.listCart)
        return(
            <View style = {wrapper} >
                <View style={viewInput}>
                    <Image source={LogoStore} style={imgStyle}/>
                </View>
                <View style={viewInput}>
                    <TextInput
                        placeholder="Họ tên"
                        onChangeText={(value) => this.setState({ hoTen: value })}
                        value={this.state.hoTen}
                        style={inputStyle} />
                   {/* <TextInput
                        placeholder="Email"
                        onChangeText={(value) => this.setState({ email: value })}
                        value={this.state.email}
                        style={inputStyle} />*/}
                    <TextInput
                        placeholder="Số điện thoại"
                        onChangeText={(value) => this.setState({ sdt: value })}
                        value={this.state.sdt}
                        style={inputStyle} />
                    <TextInput
                        placeholder="Địa chỉ"
                        onChangeText={(value) => this.setState({ diaChi: value })}
                        value={this.state.diaChi}
                        style={inputStyle} />
                </View>

                <View style={viewInput}>
                    <TouchableOpacity
                        onPress={this.subMit.bind(this)}
                        style={buttonStyle}
                    >
                        <Text style={textStyle}>Đặt hàng</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }

}

const styles = StyleSheet.create({
   wrapper: {
       flex: 1,
        backgroundColor:'#f3f3f3'
   },
    inputStyle:{
        height: 50,
        color: '#2080ee',
        backgroundColor: '#e9e9e9',
        marginBottom: 10,
        borderRadius: 5,
        paddingLeft: 30,
        width: 380
    },
    imgStyle:{
        width: DEVICE_WIDTH / 4,
        height: DEVICE_WIDTH /4,
    },
    viewInput:{
       justifyContent:'center',
        alignItems:'center',
        padding: 10
    },
    buttonStyle:{
       height:40,
       width: 200,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'red',
        borderRadius: 3,
    },
    textStyle: {
       color:'white',
        fontWeight: '600',
        fontSize: 16,
    }
});
const mapSTB = (state) => ({
    listCart : state.listCart
});
export default connect(mapSTB)(Order)