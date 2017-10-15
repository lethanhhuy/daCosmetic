
import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';

const { width, height } = Dimensions.get('window');
const DEVICE_WIDTH = Dimensions.get('window').width;
export default class Category extends Component {
        constructor(props){
            super(props);
            this.state = {
                visibleSwiper: false
            }
        }
        componentDidMount() {
            setTimeout(()=> {
                this.setState({
                    visibleSwiper:true
                });
            },100 );
        }
    render() {
            let swiper = null;
            if(this.state.visibleSwiper) {
                swiper =
                    <Swiper autoplay={true} autoplayTimeout = {2.5} loop = { true } autoplayDirection showsPagination width={imageWidth} height={imageHeight}  >
                        <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}  onPress={() => this.props.navigation.navigate('MyList')} >
                            <Image source={{ uri: 'https://i.imgur.com/BpEZWQG.jpg' }} style={styles.banner} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}   onPress={() => this.props.navigation.navigate('MyList')} >
                            <Image source={{ uri: 'https://i.imgur.com/uG4oNfD.jpg' }} style={styles.banner} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}   onPress={() => this.props.navigation.navigate('MyList')} >
                            <Image source={{ uri: 'https://i.imgur.com/NLZX4Kc.jpg' }} style={styles.banner} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}   onPress={() => this.props.navigation.navigate('MyList')} >
                            <Image source={{ uri: 'https://i.imgur.com/wU78EpW.png' }} style={styles.banner} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}   onPress={() => this.props.navigation.navigate('MyList')} >
                            <Image source={{ uri: 'https://i.imgur.com/220WZ3i.jpg' }} style={styles.banner} />
                        </TouchableOpacity>
                    </Swiper>;
            } else {
                swiper = <View></View>
            }
        return (
            <View style={styles.bst} >
                <View style={{ flex: 1 }}>
                    <Text style={styles.bannertext}>DANH MỤC NHÃN HÀNG </Text>
                </View>
                <View style={{ flex: 6 }} >
                    {swiper}
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
        width: DEVICE_WIDTH / 1.8,
        height: DEVICE_WIDTH / 4.2,
        alignItems:'center',
        justifyContent:'center'
    },
    bannertext: {
        fontSize: 15,
        fontWeight: '300',
        color: '#050f2c'
    },
});