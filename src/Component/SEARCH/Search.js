import React, {Component} from 'react';
import * as firebase from 'firebase';
import {
    View,
    TextInput,
    FlatList
} from 'react-native';
var database;
export default class Search extends Component {

    constructor(props){
        super(props);
        items=[];
        this.state={
            search: ''
        };
        database = firebase.database();
    }

    componentDidMount(){
        this.searchItem();
    }
    searchItem(){
        var ref = firebase.database().ref("Brand");
        ref.orderByKey().on("child_added", function(snapshot) {
            console.log(snapshot.key + snapshot.val()+ `Co ten la: ${snapshot.val()}`);
        });
    }
    render(){
        return (
            <View>
                <TextInput
                    placeholder="Nhập tìm kiếm"
                    onChangeText={(value) => this.setState({ search: value })}
                    value={this.state.search}
                />
                {/*<FlatList*/}
                {/*data={this.state.search}*/}
                {/*renderItem = {(item) => this._renderItem(item)}*/}
                {/*/>*/}
            </View>
        );
    }
}