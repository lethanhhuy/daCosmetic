
import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import Firebase from 'daCosmetic/src/API/Firebase';
import * as firebase from 'firebase';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    ListView,
    ScrollView
} from 'react-native';

const { width, height } = Dimensions.get('window');
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT= Dimensions.get('window').height;
var database;

export default class Category extends Component {
        constructor(props){
            super(props);
            _items=[];
            this.state = {
                dataSource: new ListView.DataSource({rowHasChanged:(row1, row2) => row1 !== row2}),
                visibleSwiper: false
            }
            database = firebase.database();
        }
        gotoList(makey){
            this.props.navigation.navigate('MyList',
                {props:{makey: makey}}
            )
        }

        componentDidMount() {
            setTimeout(()=> {
                this.setState({
                    visibleSwiper:true
                });
            },1000 );
        }
        componentWillMount(){
            database.ref('Brand').on('value',(snap)=>{
                _items=[];
                snap.forEach((data)=>{
                    _items.push({
                        makey: data.key,
                        imagelogo:data.val().imgLogo,
                    });
                });
                this.setState({dataSource:this.state.dataSource.cloneWithRows(_items)});
            })
        }
        renderRow(data) {
           return(
               <TouchableOpacity onPress={() => this.gotoList(data.makey)}>
                   <View>
                       <Image source={{uri: data.imagelogo}} style={styles.banner}/>
                   </View>
               </TouchableOpacity>
           )
       }
   render() {
           const {bst, bannertext} = styles;
           /*let swiper = null;
           if(this.state.visibleSwiper) {
               swiper =
                   <Swiper autoplay={true} autoplayTimeout = {2.5} loop = { true } autoplayDirection removeClippedSubviews={false}  showsPagination width={imageWidth} height={imageHeight}  >

                   </Swiper>;
           } else {
               swiper =
                   <View>
                   </View>
           }*/
        return (
            <View style={bst} >
                <View style={{ flex: 1 }}>
                    <Text style={bannertext}> DANH MỤC NHÃN HÀNG </Text>
                </View>
                <View style={{ flex: 6 }} >
                    <ListView
                        automaticallyAdjustContentInsets={true}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.body}
                        enableEmptySections
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow.bind(this)}
                    />
                </View>
            </View>
        );
    };
}
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;
const styles = StyleSheet.create({
    bst: {
        height: height * 0.3,
        backgroundColor: '#fff',
        margin: 8,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 13
    },
    banner: {
        width: DEVICE_WIDTH / 1.3,
        height: DEVICE_HEIGHT / 5,
        alignItems:'center',
        justifyContent:'center',
        margin: 20
    },
    bannertext: {
        fontSize: 15,
        fontWeight: '300',
        color: '#050f2c'
    },
    body: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 15,
        alignItems: 'center',
        justifyContent:'center'
    },
});