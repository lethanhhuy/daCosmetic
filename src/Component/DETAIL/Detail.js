import React, {Component} from 'react';
import Firebase from 'daCosmetic/src/API/Firebase';
import saveCart from 'daCosmetic/src/API/saveCart';
import {addToCart} from '../../REDUX/ACTION/CartAction';
import {connect} from 'react-redux';
import * as firebase from 'firebase';
import {
    View,
    ListView,
    Dimensions,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    AsyncStorage
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class Detail extends Component {
    constructor(props){
        super(props);
        _items=[];
        product = this.props.navigation.state.params;
    }


    AddToCart(product) {
        this.props.addToCart(product);
    }
    render(){
        const {wrapper, imageContainer, cardStyle, productImageStyle, footer
        , textMain, textBlack, textHighlight, textSmoke, titleContainer, descContainer, descStyle,
        txtMaterial} = styles;
        return(
            <View style={wrapper}>
                <ScrollView style={cardStyle}>
                    <View style={{flexDirection:'row',justifyContent:'flex-end',margin:10 }}>
                        <TouchableOpacity onPress={() => this.AddToCart(product)} >
                            <MaterialCommunityIcons name="cart" size={26} color='black'/>
                        </TouchableOpacity>
                    </View>
                    <View style={imageContainer}>
                        <ScrollView style={{ flexDirection: 'row', padding: 10, height: swiperHeight }} horizontal >
                            <Image source={{uri: product.image}} style={productImageStyle}/>
                            <Image source={{uri: product.image2}} style={productImageStyle}/>
                            <Image source={{uri: product.image3}} style={productImageStyle}/>
                        </ScrollView>
                    </View>
                    <View style={footer}>
                        <View style={titleContainer}>
                            <Text style={textMain}>
                                <Text style={textBlack}>{product.name}</Text>
                                <Text style={textHighlight}> / </Text>
                                <Text style={textSmoke}>{product.price.text} đ </Text>
                            </Text>
                        </View>
                        <View style={descContainer}>
                            <Text style={descStyle}> {product.description}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15 }}>
                                <Text style={txtMaterial}>{product.info}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>

        );
    }
}

const { width } = Dimensions.get('window');
const swiperWidth = (width / 1.8) - 30;
const swiperHeight = (swiperWidth * 200) / 200;
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#D6D6D6',
    },
    imageContainer: {
        flex: 6,
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10
    },
    cardStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 10
    },
    productImageStyle: {
        width: swiperWidth,
        height: swiperHeight,
        marginHorizontal: 5
    },
    footer: {
        flex: 6
    },
    titleContainer: {
        borderBottomWidth: 1,
        borderColor: '#F6F6F6',
        marginHorizontal: 20,
        paddingBottom: 3
    },
    textMain: {
        paddingLeft: 20,
        marginVertical: 10
    },
    textBlack: {
        fontFamily: 'Avenir',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3F3F46'
    },
    textSmoke: {
        fontFamily: 'Avenir',
        fontSize: 16,
        color: '#f09b55'
    },
    textHighlight: {
        fontFamily: 'Avenir',
        fontSize: 17,
        color: '#7D59C8'
    },
    descContainer: {
        margin: 10,
        paddingTop: 10,
        paddingHorizontal: 10
    },
    descStyle: {
        color: '#616161',
        fontSize: 13,
    },
    txtMaterial: {
        color: '#C21C70',
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Avenir'
    }
});
const mapSTP = (state) => ({
    listCart : state.listCart
});
export default connect(mapSTP, { addToCart })(Detail)