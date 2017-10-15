import React, {Component} from 'react';

import {
    StatusBar,
    ScrollView,
} from 'react-native';
import Category from './Category.js';

export default class Home extends Component {

    componentDidMount() {
        StatusBar.setHidden(true);
    }

    render(){
        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'rgb(221, 221, 221)' }} >
                <Category navigation={this.props.navigation} />
            </ScrollView>
        );
    }
}
