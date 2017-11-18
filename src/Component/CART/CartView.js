import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    FlatList,
    Dimensions
} from 'react-native';
import {removeCart, increaseItem,decreaseItem} from "../../REDUX/ACTION/CartAction";

const { width, height } = Dimensions.get('window');
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
class CartView extends Component {

    componentDidMount() {

    }
    AddItem(product){
        this.props.increaseItem(product)
    }
    ExceptItem(product){
        this.props.decreaseItem(product)
    }
    _renderItem(item) {
        return(
            <View style={{flex:1, flexDirection:'row', justifyContent:'space-between',paddingBottom:10}}>
                <View style={{flexDirection:'row'}}>
                    <Image source={{uri: item.item.image}} style={styles.cart_image}/>
                    <View style={{ flexDirection:'column'}}>
                        <Text style={{margin: 5,color:'orange', fontWeight: '600'}} >{item.item.name}</Text>
                        <View style={{ margin: 5,flexDirection:'row', }}>
                            <Text style={{color: 'black'}}>Giá tiền:</Text>
                            <Text style={{color: 'red', marginLeft : 5}}>{item.item.price.text}đ</Text>
                        </View>
                        <View style={{flexDirection:'row', marginLeft:5,justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity onPress={() => this.AddItem(item.item)}  >
                                    <Text style={{ fontSize: 14,color:'black' }}>+</Text>
                                </TouchableOpacity>
                                <Text style={{ fontSize: 14, marginLeft: 10,color:'black' }}>{item.item.qty}</Text>
                                <TouchableOpacity onPress={() => this.ExceptItem(item.item)} >
                                    <Text style={{ fontSize: 14,marginLeft: 10 ,color:'black'}}>-</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('MyDetail',item.item)}>
                                <Text style={{color:'black'}}>Thông tin</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{justifyContent:'flex-start', margin: 10}}>
                    <TouchableOpacity onPress={() => this.props.removeCart(item.item)} >
                        <Text>X</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
  render(){
      const {TotalTitle, TotalButton, wrapper } = styles;

    return(
        <View style={[wrapper]}>
            <View style={{flex:9}}>
                <FlatList
                    data={this.props.listCart.data}
                    extraData={this.props}
                    keyExtractor = {(item,index) => item.name}
                    renderItem={(item) => this._renderItem(item)}
                />
            </View>
            <View style={{ flex:1}}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('MyOrder',this.props.listCart)}>
                    <View style={TotalButton}>
                        <Text style={TotalTitle}> Thành tiền: {this.props.listCart.totalPrice.text} VND </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;
const styles=StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 10
    },
    bst: {
        height: DEVICE_HEIGHT * 1,
        backgroundColor: '#fff',
        margin: 8,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 13,

    },
  cart_view:{
      borderBottomColor:'gray',
      borderBottomWidth:0.5,
    flexDirection:'column',
    //alignItems:'center',
    marginBottom:5,
    paddingTop:2,
    paddingBottom:2,
  },
  cart_text:{
    color: '#1a1a1a',
    fontSize: 14,
//    fontWeight: 'bold',
    fontFamily: 'Avenir',
    paddingLeft: 20
  },
  cart_image:{
    width: 100,
    height: 100,
    marginLeft:5,
      borderRadius: 5
  },
  delete_image:{
    width: 25,
    height: 25,
    marginLeft:50
  },
    TotalButton: {
        height: 50,
        margin: 20,
        marginTop: 0,
        paddingLeft:30,
        backgroundColor: '#e6ffff',
        borderRadius: 15,
        //alignItems: 'center',
        justifyContent: 'center',

    },
    TotalTitle: {
        color: '#1a1a1a',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    },
});
const mapStateToProps = (state) => ({
    listCart : state.listCart
});
export default connect(mapStateToProps, {removeCart, increaseItem,decreaseItem})(CartView)
