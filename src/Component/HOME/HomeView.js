import React, {Component} from 'react';
import Firebase from 'daCosmetic/src/API/Firebase';
import * as firebase from 'firebase';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    ListView,
    Image
} from 'react-native';
const { width, height } = Dimensions.get('window');
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
var database,user ;
export default class HomeView extends Component{
    constructor(props){
        super(props);
        _items=[];
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged:(row1, row2) => row1 !== row2}),
            visible: true
        };
        database = firebase.database();
        user = database.ref('TopProduct');
    }
    componentWillMount(){
        database.ref('TopProduct').on('value',(snap)=>{
            _items=[];
            snap.forEach((data)=>{
                _items.push({
                   key:data.key,
                    name: data.val().Name,
                    price:data.val().Price,
                    image:data.val().Image,
                });
            });
            this.setState({dataSource:this.state.dataSource.cloneWithRows(_items)});
        })
    }
    renderRow(data) {
        return(
            <View>
                <Image source={{uri: data.image}} style={styles.banner}/>
                <Text style={styles.productname} >{data.name}</Text>
                <Text style={styles.productgia}>{data.price}đ</Text>
            </View>
        )
    }
    render(){
        const {bst, body, bannertext, } = styles;
        console.ignoredYellowBox = ['Setting a timer'];
        return(
            <View style={bst}>
                <View>
                    <Text style={bannertext}>
                        SẢN PHẨM BÁN CHẠY
                    </Text>
                </View>
                <ListView
                    contentContainerStyle={body}
                    enableEmptySections
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
        height: DEVICE_HEIGHT * 1.5,
        backgroundColor: '#fff',
        margin: 8,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 13,

    },
    banner: {
        width: DEVICE_WIDTH / 2.45,
        height: DEVICE_WIDTH / 2.45,
        alignItems:'center',
        justifyContent:'center'
    },
    body: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 10,
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
        fontSize: 13,
    },
    productgia: {
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#ff0000',
        fontSize: 14,
    },
});