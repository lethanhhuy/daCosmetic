import React, {Component} from 'react';
import * as firebase from 'firebase';
import {
    View,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
var database;
export default  class BillDetail extends Component{
    constructor(props){
        super(props);
        _item=[];
        this.state = {
            fbItem: [],
        };
         database = firebase.database();
    }
    componentDidMount(){
        this.getItem();
    }
    getItem(){
        database.ref('Order').on('value',(snap)=>{
            _items=[];
            snap.forEach((data) => {
                _items.push(
                    {
                        hoten: data.val().HoTen,
                        diachi: data.val().DiaChi,
                        sdt: data.val().SDT,
                        ngaydat: data.val().NgayDat,
                        tinhtrang: data.val().TinhTrang,
                        tong: data.val().TongTien,
                        cthd: data.val().CTHD
                    })
            });
                this.setState({fbItem: _items})

        })
    }
    gotoDetail(data){
        this.props.navigation.navigate("MyBillDetail",data)
    }
    _renderItem(item){
        return (
            <View style={styles.billStyle} >
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.textStyle}>Họ tên: {item.item.hoten}</Text>
                        <Text style={styles.textStyle}>Địa chỉ: {item.item.diachi}</Text>
                        <Text style={styles.textStyle}>SDT: {item.item.sdt}</Text>
                        <Text style={styles.textStyle}>"{item.item.tinhtrang}"</Text>
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.textStyle}>{item.item.ngaydat}</Text>
                        <Text style={styles.textStyle}>Thành tiền: {item.item.tong.text}đ</Text>
                        <TouchableOpacity onPress={() => this.gotoDetail(item.item.cthd)}>
                            <Text style={{color:'red'}}>Chi tiết</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        );
    }
    render(){
        return(
            <View style={{flex:1, padding: 10, marginBottom:5}}>
                <FlatList
                data={this.state.fbItem}
                extraData={this.props}
                keyExtractor = {(item,index) => item.hoten}
                renderItem = {(item) => this._renderItem(item)}
                />
            </View>
        );
    }
}

const styles=StyleSheet.create({
    textStyle:{
        color: 'black'
    },
    billStyle:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        margin:10,
        padding: 10,
        backgroundColor:'white',
        borderRadius: 5
    }
});