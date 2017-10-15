import React, {Component} from 'react';
import {Tabs} from './Component/Router';
import Main from './Component/Main';
export default class App extends Component {
    render(){
        return (
            <Main>
                <Tabs/>
            </Main>
        );
    }
}