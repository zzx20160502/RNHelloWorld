/**
 * Created by zhf on 16/12/1.
 */
"use static"
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
export default class ListViewDetails extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
                <View style={styles.viewStyle}>
                     <View style={styles.viewStyle} >
                         <Image  source={require('../icon/ic_launcher.png')}/>
                         <Text>测试下</Text>
                     </View>
                </View>
        );
    }


}
const styles=StyleSheet.create({
    viewStyle:{
        flex:1,
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor:'white'
    },

})