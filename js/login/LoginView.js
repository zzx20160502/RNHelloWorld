/**
 * Created by zhf on 16/12/6.
 */
"use static"

"use static"
import React, { Component } from 'react';
import {
    StyleSheet,
    ListView,
    Text,
    View,
    Button,
    Image,
    Dimensions,
    TextInput,
    TouchableHighlight,
} from 'react-native';
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
import mainView from '../HomePageView.js'
export default class LoginView extends Component{
    _loginOnclick(){
        const {navigator} = this.props;
        navigator.push({
            name : 'mainView' ,
            component : mainView
        });
    }

    render(){
        return(
            < View style={{flex: 1,flexDirection:'column'}} >
                <View style={styles.TextInputImageStyle} >
                    <TextInput
                        keyboardType ='numeric'>
                    </TextInput>



                </View>
                <View style={{flex: 1, flexDirection:'row'}}>
                    <TouchableHighlight style={{flex: 1}} onPress={()=>this._loginOnclick()}>
                        <Text>
                            登录
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={{flex: 1}}>

                        <Text>
                            注册
                        </Text>
                    </TouchableHighlight>
                </View>
                </View>
        );
    }
}
const styles=StyleSheet.create({
    TextInputImageStyle:{
    flex:1,
        width:ScreenWidth,
        height:50,
        flexDirection:'column'
    },
    TextInputStyle:{
        flex:1,
        borderWidth:1,
        borderColor:'red',
        height:40

    }
});