/**
 * Created by zhf on 17/1/10.
 */

import React, {Component} from 'react';
import {View, Text, Image, StyleSheet,TouchableOpacity,TextInput, ScrollView,Dimensions,} from 'react-native';
import {connect} from 'react-redux';

import Header from'../../components/Header-title';
import * as URL from '../../constants/URL';
let product_id = '';
let MallDetails = require('../../statics/data/MallDetailsJson.json');

// 屏幕宽度
var screenWidth = Dimensions.get('window').width;

class ShoppingDetailsView extends Component {
    componentWillMount() {

    }

    render() {
        let banner_img = URL.IMAGE_URL + MallDetails.product.photo;
        return (
            <View style={{flexDirection:'column'}}>
                <Header title='商品详情'/>
                <ScrollView>
                    <Image style={{width:screenWidth,height:150}} source={{uri:banner_img}}></Image>
                    <View style={styles.normsStyle}>
                        <Text >请选择规格</Text>
                        <Image style={{justifyContent:'flex-end'}} source={require('./image/arr_right.png')}></Image>
                    </View>
                    <Text>{MallDetails.product.name}</Text>
                    <Text>￥ + {MallDetails.product.price}</Text>
                    <Text style={{color: '#'}}>已出售 +{ MallDetails.product.sell_count}</Text>
                    <Text style={styles.normsStyle}>商品介绍</Text>
                    <Text style={styles.normsStyle}>评论</Text>

                    <Text style={styles.normsStyle}></Text>
                </ScrollView>
                {this._bottomView()}

            </View>
        );
    }

    _bottomView() {
        return (
            <View style={{width:screenWidth,height:80,backgroundColor: 'white',flexDirection: 'row'}}>
                <Text style={{fontSize: 18}}>数量</Text>
                <TouchableOpacity>
                    <Image source={require('./image/jiangoods.png')}></Image>
                </TouchableOpacity>
                <TextInput >1</TextInput>
                <TouchableOpacity>
                    <Image source={require('./image/jiagoods.png')}></Image>
                </TouchableOpacity>

                <View style={{justifyContent: 'flex-end',flexDirection:'row',marginRight: 10}}>
                    <TouchableOpacity>
                        <Text >加入购物车</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>购买</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    _net() {

    }

}
const styles = StyleSheet.create({
    normsStyle: {
        width: screenWidth,
        backgroundColor: '#C4C4C4',
        height: 30,
        paddingLeft: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },

});


function select(store) {
    return {
        product_id: store.mall.product_id,
    }
}

export default connect(
    select
)(ShoppingDetailsView);
