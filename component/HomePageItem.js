/**
 * Created by zhf on 16/12/6.
 */

"use static"
import React, { Component } from 'react';
import {
    StyleSheet,
    Navigator,
    Text,
    Image,
    View,
} from 'react-native';
class HomePageItem extends  Component{
    constructor(props){
        super(props);


    }

    render(){
        return(
            <View style={styles.ViewStyle}>
                <View style={styles.viewStyle} >
                    <Image  source={require('../icon/ic_launcher.png')}/>
                    <Text>测试下</Text>
                </View>
                <view></view>

            </View>
        );
    }

}
const styles= StyleSheet.create({
    ViewStyle:{
        flex:1,
        alignItems:'center',
        flexDirection:'column',
        backgroundColor:'#0000ff'
    }

});