/**
 * Created by zhf on 16/12/28.
 */
'use strict'
import React, {Component} from  'react';
import {View, Image, Text, StyleSheet, Dimensions,TouchableOpacity} from 'react-native';

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;
class Header extends Component {
    constructor(props) {
        super(props)
    }

    _onBackgroud() {
    // this.props.navigator.pop();
    }


    render() {
        let title=this.props.title;
        return (

            <View style={styles.bg}>

                <TouchableOpacity style={{flex:1}}onPress={this._onBackgroud.bind(this)}>
                    <Image style={styles.left} source={require('./image/back.png')}/>
                </TouchableOpacity>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity onPress={this._onBackgroud.bind(this)}>
                    <Text style={styles.rigth}></Text>
                </TouchableOpacity>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    bg: {
        flex: 1,
        width: screenWidth,
        height: 64,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgb(1,94,156)',
    },
    left: {
        flexDirection: 'column',
        alignItems: 'center',
        width: 30,
        height: 30,
        justifyContent: 'flex-start',
        margin: 2,
        resizeMode: 'contain',
    },
    title: {
        alignItems: 'center',
        color: 'white',
        fontSize: 20,
        justifyContent: 'center',
        flex: 1,
    },
    rigth: {
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        fontSize: 20,
        margin: 20,
        flex: 1,
    },
});
export default Header;
