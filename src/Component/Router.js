import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
//Use Icon//
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//---------------//
import Home from './HOME/Home';
import Account from './ACCOUNT/Account';
import Search from './SEARCH/Search';

export const HomeStack = StackNavigator({
   Screen_Home: {
       screen: Home,
       navigationOptions: {
           title: 'Trang chủ',
           //headerRight:true,
           headerTitleStyle :{ color:'white', fontFamily: 'serif ',},
           headerStyle: {backgroundColor:'#FF3364'},
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
    }
});

export const SearchStack = StackNavigator({
    Screen_Search: {
        screen: Search,
        navigationOptions: {
            title: '',
            //headerTitle: ,
            headerTitleStyle :{ color:'white', fontFamily: 'serif ',},
            headerStyle: {backgroundColor:'#FF3364'}

        }
    }
});

export const Tabs = TabNavigator({
    TabHome:{
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({tintColor}) => (
                <Foundation name="home" size={24} tintColor={{ tintColor }} />
            )
        },

    },
    TabSearch:{
        screen: SearchStack,
        navigationOptions: {
            tabBarLabel: 'Tìm kiếm',
            tabBarIcon: ({tintColor}) => (
                <Ionicons name="ios-search" size={24} tintColor={{ tintColor }} />
            )
        }
    },
    TabAcc:{
        screen: AccStack,
        navigationOptions: {
            tabBarLabel: 'Tài khoản',
            tabBarIcon: (tintColor) => (
                <MaterialCommunityIcons name="account" size={24} tintColor={{ tintColor }} />
            )
        }
    },
},
{
    tabBarPosition: 'bottom',
    animationEnabled: false,
    lazyLoad: true,
    swipeEnabled: false,
    pressColor:'#1ABC9C',
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
        activeTintColor: '#e91e63',
        inactiveTintColor: '#000000',
    },
});


