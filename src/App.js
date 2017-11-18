import React, {Component} from 'react';
import {Tabs} from './Component/Router';
import Main from './Component/Main';
import store from './REDUX/Store';
import {Provider} from 'react-redux';
export default class App extends Component {
    render(){
        return (
            <Provider store={store}>
                <Main>
                    <Tabs/>
                </Main>
            </Provider>

        );
    }
}