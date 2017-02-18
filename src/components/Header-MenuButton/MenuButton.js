/**
 * Created by yuanguozheng on 16/1/22.
 */
'use strict';
import React, {Component} from  'react';

import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native';

export default class MenuButton extends Component {


    constructor(props) {
        super(props);
        // renderIcon: this.props.isRequired;  // 图片,加入.isRequired即为比填项
        // showText: this.props.showText.string;  // 显示标题\文字
        // tag: this.props.tag.string;  // Tag
        this._onClick = this._onClick.bind(this);  // 需要在回调函数中使用this,必须使用bind(this)来绑定
    }

    _onClick() {
        if (this.props.onClick) {   // 在设置了回调函数的情况下
            this.props.onClick(this.props.showText, this.props.tag);  // 回调Title和Tag
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this._onClick}>
                <View style={{alignItems:'center',flex:1}}>
                    <Image style={styles.iconImg} source={this.props.renderIcon}/>
                    <Text style={styles.showText}>{this.props.showText}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    iconImg: {
        width: 38,
        height: 38,
        marginBottom: 2
    },
    showText: {
        fontSize: 12
    }
});