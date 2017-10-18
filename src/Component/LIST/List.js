import React, {Component} from 'react';

import {
    StatusBar,
    ScrollView,
    View
} from 'react-native';
import ListView from './ListView';
export default class Home extends Component {
    componentDidMount() {
        StatusBar.setHidden(true);
    }

    render(){
        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'rgb(221, 221, 221)' }} >
                <ListView navigation={this.props.navigation} />
            </ScrollView>

        );
    }
}
