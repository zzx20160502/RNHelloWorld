/**
 * Created by zhf on 16/12/21.
 */
import React,{Component} from 'react';
import {Navigator} from 'react-native';
import { connect } from 'react-redux';

import LoginScreen from './login/login';


export  default class APP extends Component{
    renderScene = {

    }

    initialRoute={
    }

    render(){
        return(
            <Navigator renderScene=""
              initialRoute={}/>
        );

    }


}
function select(store){
    return {
        isLoggedIn: store.userStore.isLoggedIn
    }
}


export default connect(select)(Root);