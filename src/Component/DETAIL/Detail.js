import React, {Component} from 'react';
import Firebase from 'daCosmetic/src/API/Firebase';
import * as firebase from 'firebase';
import {
    View,
    ListView
} from 'react-native';
var database,user ;
export default  class Detail extends Component {
    constructor(props){
        super(props);
        _items=[];
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged:(row1, row2) => row1 !== row2}),
            visible: true
        };
        database = firebase.database();
    }
    /*componentWillMount(){
        database.ref('Brand/'+'/Products').on('value',(snap)=>{
            _items=[];
            snap.forEach((data)=>{
                _items.push({
                    name: data.key,
                    price:data.val().Price,
                    image:data.val().Image,
                    description: data.val().Description,
                    info: data.val().Info
                });
            });
            this.setState({dataSource:this.state.dataSource.cloneWithRows(_items)});
        })
    }*/
    render(){
        return(
            <View>

            </View>

        );
    }
}