import React, {Component} from 'react';

import {
    StatusBar,
    ScrollView,
    View
} from 'react-native';
import Category from './Category';
import HomeView from './HomeView';
export default class Home extends Component {

    componentDidMount() {
        StatusBar.setHidden(true);
    }

    render(){
        return (
                <ScrollView style={{ flex: 1, backgroundColor: 'rgb(221, 221, 221)' }} >
                    <Category navigation={this.props.navigation} />
                    <HomeView/>
                </ScrollView>

        );
    }
}
