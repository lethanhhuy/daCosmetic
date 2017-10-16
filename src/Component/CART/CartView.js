import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';
export default class CartView extends Component {
  render(){
    return(
      <ScrollView>
      <View style={{marginTop:10}}></View>
      <View>

      <View style={styles.cart_view}>
        <Image style={styles.cart_image}
            source={{uri: 'data:image/png'}}
         />

        <View>
            <Text style={styles.cart_text}>Tên: Son Mac siêu dưỡng môi</Text>
            <Text style={styles.cart_text}>Giá: 150.000 VNĐ</Text>
            <Text style={styles.cart_text}>1</Text>
        </View>
        <Image style={styles.delete_image}
           source={require('daCosmetic/src/Image/delete-button.png')}
         />
      </View>

      </View>
      </ScrollView>
    );
  }
}

const styles=StyleSheet.create({
  cart_view:{
    borderWidth:0.5,
    borderRadius:4,
    borderColor:'gray',
    flexDirection:'row',
    alignItems:'center',
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
    width: 50,
    height: 50,
    marginLeft:5,
  },
  delete_image:{
    width: 25,
    height: 25,
    marginLeft:50
  }
});
