import React, {Component} from 'react';
import SplashScreen from './SPLSCREEN/SplashScreen';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            visiblesplash: false
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                visiblesplash: true
            })
        },100)
    }
    render(){
        if(this.state.visiblesplash === false) {
            return <SplashScreen/>
        }
        return this.props.children;
    }
}