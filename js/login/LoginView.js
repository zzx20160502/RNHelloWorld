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
    PermissionsAndroid,
    TouchableHighlight,
} from 'react-native';
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
import mainView from '../HomePageView.js'
export default class LoginView extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            permission: PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            // hasPermission: 'Not Checked',
        };
    }
    _loginOnclick(){
        const {navigator} = this.props;
        navigator.push({
            name : 'mainView' ,
            component : mainView
        });
    }
    //
    _checkPermission = async () => {

        let result = await PermissionsAndroid.checkPermission(this.state.permission);
        // let temps=result ? '授权成功' : '授权失败';
        alert(temps);
        this.setState({
            hasPermission: (result ? '授权成功' : '授权失败') + ' for ' +
            this.state.permission,

        });
    }

    _requestPermission = async () => {
        let result = await PermissionsAndroid.requestPermission(
            this.state.permission,
            {
                title: '权限请求',
                message:
                '该应用需要如下权限 ' + this.state.permission +
                ' 请授权!',
            },
            
        );
    }

    render(){
        return(
            < View style={{flex: 1,flexDirection:'column'}} >
                <View  style={{flexDirection:'column'}}>
                    <TextInput style={styles.TextInputImageStyle}
                        keyboardType ='numeric'>
                    </TextInput>
                    
                </View>
                <View style={{flex: 1, flexDirection:'row'}}>
                    <TouchableHighlight style={{flex: 1}} onPress={()=>this._loginOnclick()}>
                        <Text >
                            登录
                        </Text>
                        
                    </TouchableHighlight>
                    <TouchableHighlight style={{flex: 1}}>

                        <Text >
                            注册
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style={{flex: 1, flexDirection:'row'}}>
                    <TouchableHighlight style={{flex: 1}} onPress={()=>this._checkPermission()}>
                        <Text >
                            检查权限
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={{flex: 1}} onPress={()=>this._requestPermission()}>
                        <Text>
                            获取权限
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
        width: ScreenWidth,
        height:50,
        borderWidth:1,
        borderColor:'red',
        alignItems: 'center',     
        flexDirection:'column',
    },
    TextInputStyle:{
        flex:1,
        borderWidth:1,
        borderColor:'red',
        height:40
    },//登录按钮View样式
    textLoginViewStyle: {
        width: ScreenWidth - 30,
        height: 45,
        borderRadius: 20,
        marginLeft: 20,
        marginTop: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
});