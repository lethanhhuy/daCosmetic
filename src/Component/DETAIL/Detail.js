import React, {Component} from 'react';
import Firebase from 'daCosmetic/src/API/Firebase';
import * as firebase from 'firebase';
import {
    View,
    ListView,
    Dimensions,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
var database;
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default  class Detail extends Component {
    constructor(props){
        super(props);
        _items=[];
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged:(row1, row2) => row1 !== row2}),
            visible: true
        };
        database = firebase.database();
    }
    componentWillMount(){
        database.ref('Brand/'+this.props.navigation.state.params.props.brandname+'/Products/'+this.props.navigation.state.params.props.makey).on('value',(snap)=>{
            _items=[];
            snap.forEach((data)=>{
                _items.push({
                    makey: data.key,
                    name:data.val().Name,
                    price:data.val().Price,
                    image:data.val().Image,
                    image2:data.val().Image2,
                    image3:data.val().Image3,
                    description: data.val().Description,
                    info: data.val().Info
                });
            });
            this.setState({dataSource:this.state.dataSource.cloneWithRows(_items)});
        })
    }
    addtoCart(makey, name, image, image2, image3, price, description, info){
        this.props.navigation.navigate('MyDetail',
            {props:{makey:makey, name: name, image: image, image2:image2, image3:image3,  price: price, description: description, info: info}}
        )
    }
    render(){
        const {wrapper, imageContainer, cardStyle, productImageStyle, footer
        , textMain, textBlack, textHighlight, textSmoke, titleContainer, descContainer, descStyle,
        txtMaterial} = styles;
        return(
            <View style={wrapper}>
                <ScrollView style={cardStyle}>
                    <View style={{flexDirection:'row',justifyContent:'flex-end',margin:10 }}>
                        <TouchableOpacity onPress={() => {this.addtoCart(data.makey, data.name, data.image, data.image2, data.image3, data.price, data.description, data.info)}} >
                            <MaterialCommunityIcons name="cart" size={26} color='black'/>
                        </TouchableOpacity>
                    </View>
                    <View style={imageContainer}>
                        <ScrollView style={{ flexDirection: 'row', padding: 10, height: swiperHeight }} horizontal >
                            <Image source={{uri: this.props.navigation.state.params.props.image}} style={productImageStyle}/>
                            <Image source={{uri: this.props.navigation.state.params.props.image2}} style={productImageStyle}/>
                            <Image source={{uri: this.props.navigation.state.params.props.image3}} style={productImageStyle}/>
                        </ScrollView>
                    </View>
                    <View style={footer}>
                        <View style={titleContainer}>
                            <Text style={textMain}>
                                <Text style={textBlack}>{this.props.navigation.state.params.props.name.toUpperCase()}</Text>
                                <Text style={textHighlight}> / </Text>
                                <Text style={textSmoke}>{this.props.navigation.state.params.props.price} đ </Text>
                            </Text>
                        </View>
                        <View style={descContainer}>
                            <Text style={descStyle}> {this.props.navigation.state.params.props.description}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15 }}>
                                <Text style={txtMaterial}>{this.props.navigation.state.params.props.info}</Text>
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