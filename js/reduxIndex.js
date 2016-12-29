/**
 * Created by zhf on 16/12/21.
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';

export  default  class App extends Component{
    constructor(){
        super();
        this.state = {
            isLoading: true,
            // store: configureStore(()=>{this.setState({isLoading: false})})
        }
    }
    render(){
        return(
            <Provider>

            </Provider>
        );

    }


}

