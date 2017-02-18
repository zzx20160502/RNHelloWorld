/**
 * Created by yuanguozheng on 16/3/10.
 */
'use strict';
import React,{Component} from 'react';
import {
    View,
    WebView,
    Platform
} from 'react-native';
import ProgressBar from './components/ProgressBar/ProgressBar'

class JdWebView extends Component {

    constructor(props) {
        super(props);
    }
    renderLoading(){

    }

    render() {
        return (
            <View style={{flex:1,paddingTop:Platform.os==='ios'?20:0}}>
                <WebView
                    automaticallyAdjustContentInsets={false}
                    source={{uri: this.props.url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                />
            </View>
        )
    }
}
export default JdWebView;