import React, {Component} from 'react';
import Firebase from 'daCosmetic/src/API/Firebase';
import * as firebase from 'firebase';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    ListView,
    Image,
    TouchableOpacity,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

var database;

export default class List extends Component {
    constructor(props){
        super(props);
        _items=[];
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged:(row1, row2) => row1 !== row2}),
            visible: true
        };
        database = firebase.database();
    }
    static navigationOptions = {
        title:'Nhan Hang',
    }
    gotoDetail(name, image, price, description, info, makey){
        this.props.navigation.navigate('MyDetail',
            {props:{name: name, image: image,  price: price, description: description, info: info, makey: makey}}
        )
    }
    componentWillMount(){
        database.ref('Brand/'+this.props.navigation.state.params.props.makey+'/Products').on('value',(snap)=>{
            _items=[];
            snap.forEach((data)=>{
                _items.push({
                    makey: data.key,
                    name:data.val().Name,
                    price:data.val().Price,
                    image:data.val().Image,
                    description: data.val().Description,
                    info: data.val().Info
                });
            });
            this.setState({dataSource:this.state.dataSource.cloneWithRows(_items)});
        })
    }
    renderRow(data) {
        return(
            <TouchableOpacity onPress={() => this.gotoDetail(data.name, data.image, data.price, data.description, data.info)}>
                <View >
                    <Image source={{uri: data.image}} style={styles.banner}/>
                    <Text style={styles.productname} >{data.name}</Text>
                    <Text style={styles.productgia}>{data.price}đ</Text>
                </View>
            </TouchableOpacity>
        )
    }
    render(){
        const {bst, body} = styles;
        return (
            <View style={bst}>
                <ListView
                    removeClippedSubviews={false}
                    contentContainerStyle={body}
                    enableEmptySections
                    showsVerticalScrollIndicator={false}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    renderSeparator={(sectionId, rowId) => {
                        if (rowId % 2 === 1) return <View style={{ width, height: 10 }} key={`${sectionId}-${rowId}`} />;
                        return null;
                    }}
                />
            </View>
        );
    }
}

const imageWidth = width - 40;
const imageHeight = imageWidth / 2;
const styles = StyleSheet.create({
    bst: {
        height: DEVICE_HEIGHT * 1,
        backgroundColor: '#fff',
        margin: 8,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 13,

    },
    banner: {
        width: DEVICE_WIDTH / 2.5,
        height: DEVICE_WIDTH / 2.5,
        alignItems:'center',
        justifyContent:'center'
    },
    body: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
        borderTopColor: '#f0f0f0',
        borderBottomColor: '#fff',
        borderLeftColor: '#fff',
        borderRightColor: '#fff',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent:'center'
    },
    bannertext: {
        fontSize: 15,
        fontWeight: '300',
        color: '#050f2c'
    },
    productname: {
        marginVertical: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#050f2c',
        fontWeight: '300',
        fontSize: 12.5,
    },
    productgia: {
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#ff0000',
        fontSize: 13,
    },
});