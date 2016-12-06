/**
 * Created by zhf on 16/12/5.
 */
"usr static"
import React, { Component } from 'react';
import  {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    Navigator,
    TouchableHighlight,
}from 'react-native';
import MainScreen from './listviewTest';
export default class HomePageView extends Component{
    constructor(props) {
        super(props);

    }

    _OnClick(){
        const {navigator} = this.props;
            navigator.push({
                name : 'MainScreen' ,
                component : MainScreen

            });

        // this.props.navigator.push({
        //     screen: require('./listviewTest.js'),
        //     props: {
        //         bigTitle:'测试一下',
        //         title:'测试',
        //     }
        // });
    }
    render(){
        return(


            <TouchableHighlight onPress={()=>this._OnClick()}>
             <Image style={styles.imageStyle} source={require('../icon/ssdk_oks_classic_wechat.png')}  >
             </Image>
            </TouchableHighlight>

        );
    }
}

const styles=StyleSheet.create({
     imageStyle:{
         flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
     },

});
