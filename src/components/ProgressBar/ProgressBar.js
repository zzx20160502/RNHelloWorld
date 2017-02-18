/**
 * Created by zhf on 17/1/5.
 */

import React,{Component} from 'react';
import {ProgressBarAndroid, ProgressViewIOS,StyleSheet, Platform} from 'react-native';

class ProgressBar extends Component{
    render(){
        return(
            <View>

            </View>
        );
    }
    _progressBar(){
        if(Platform.OS ==='android'){
            <ProgressBar style={styles.progressView} styleAttr="Inverse" />
        }else if(Platform.OS ==='ios'){
            <ProgressViewIOS style={styles.progressView} progress={this.getProgress(0)}/>
        }
    }

}
const styles = StyleSheet.create({
    progressView: {
        marginTop: 20,
    },

});

export  default ProgressBar;

