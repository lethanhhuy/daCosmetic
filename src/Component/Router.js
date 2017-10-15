import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { TextInput, TouchableOpacity, } from 'react-native';
//Use Icon//
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
//---------------//
import Home from './HOME/Home';
import Account from './ACCOUNT/Account';
import Search from './SEARCH/Search';
import Cart from './CART/Cart';
import List from './LIST/List';
import LogIn from './ACCOUNT/LOGIN/LogIn';

export const HomeStack = StackNavigator({
   Screen_Home: {
       screen: Home,
       navigationOptions : {
           title: 'Trang Chủ',
           headerRight: (
               <TouchableOpacity>
                   <EvilIcons name="search" size={28} color="#FBFFF5"
                   />
               </TouchableOpacity>
               ),
           headerTitleStyle :{ color:'white', fontFamily: 'serif ',},
           headerStyle: {backgroundColor:'#FF3364', paddingRight:15},
       },
   },
    MyList:{
       screen: List,
        navigationOptions: {
            title:  'ESTEE LAUDER',
            headerTintColor: 'white',
            headerTitleStyle :{ color:'white', fontFamily: 'serif ',},
            headerStyle: {backgroundColor:'#FF3364', paddingRight:10},
        }
    }


});

export const CartStack = StackNavigator({
    DisplayCart: {
        screen: Cart,
        navigationOptions: {
            title: 'Giỏ Hàng',
            headerTintColor: 'white',
            headerTitleStyle :{ color:'white', fontFamily: 'serif ',},
            headerStyle: {backgroundColor:'#FF3364', paddingRight:10},
        }
    }
});

export const AccStack = StackNavigator({
    Screen_Acc: {
        screen: Account,
        navigationOptions: {
            title: 'Tài Khoản',
            //headerRight:true,
            headerTitleStyle :{ color:'white', fontFamily: 'serif ',},
            headerStyle: {backgroundColor:'#FF3364'}
        }
    },
    MyLogIn: {
        screen: LogIn,
        navigationOptions: {
            title: 'Đăng Nhập',
            headerTintColor: 'white',
            headerTitleStyle :{ color:'white', fontFamily: 'serif ',},
            headerStyle: {backgroundColor:'#FF3364', paddingRight:10},
        }
    },
});

export const SearchStack = StackNavigator({
    Screen_Search: {
        screen: Search,
        navigationOptions: {
            title: 'Tìm kiếm',
            //header: true ,
            headerLeft: (
                <Octicons name="search" size={24} color="#FBFFF5"
                />),
            headerTitle: <TextInput
                placeholder="Tìm kiếm sản phẩm"
                underlineColorAndroid='#E6EAE1'
                placeholderTextColor= '#E6EAE1'
                style={{
                    height: 50,
                    width: 300,
                    borderColor: 'white',
                    fontSize: 16
                }} />,
            headerTitleStyle :{ color:'white', fontFamily: 'serif ',},
            headerStyle: {backgroundColor:'#FF3364', paddingLeft:16}

        }
    }
});

export const Tabs = TabNavigator({
    TabHome:{
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({tintColor}) => (
                <Foundation name="home" size={24} style={{ color: tintColor }} />
            )
        },

    },
        TabCart:{
            screen: CartStack,
            navigationOptions: {
                tabBarLabel: 'Giỏ Hàng',
                tabBarIcon: ({tintColor}) => (
                    <MaterialCommunityIcons name="shopping" size={20} style={{ color: tintColor }}
                    />
                )
            }
        },
    TabSearch:{
        screen: SearchStack,
        navigationOptions: {
            tabBarLabel: 'Tìm kiếm',
            tabBarIcon: ({tintColor}) => (
                <Ionicons name="ios-search" size={24} style={{ color: tintColor }} />
            )
        }
    },
    TabAcc:{
        screen: AccStack,
        navigationOptions: {
            tabBarLabel: 'Tài khoản',
            tabBarIcon: ({tintColor}) => (
                <MaterialCommunityIcons name="account" size={24} style={{ color: tintColor }} />
            )
        }
    },
},
{
    tabBarPosition: 'bottom',
    animationEnabled: false,
    lazyLoad: true,
    swipeEnabled: false,
    //pressColor:'#1ABC9C',
    tabBarOptions: {
        upperCaseLabel:false,
        showIcon:true,
        showLabel: false,
        iconStyle: {

        },
        labelStyle: {
          fontSize: 11
        },
        style: {
            backgroundColor: '#fefffb',
        },
        pressColor: '#e91e63',
        activeTintColor: '#FF3364',
        inactiveTintColor: '#000000',
    },
});
