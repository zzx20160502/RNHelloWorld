/**
 * Created by zhf on 17/1/5.
 */
'use strict';
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    ListView,
    Console,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import {RNFetchBlob} from 'react-native-fetch-blob';
let MallMainValue = require('../../statics/data/MallHomePage.json');
import FocusImage from '../../components/Banners/Banners-viewpage';
import Header from'../../components/Header-title';
import MenuButton from '../../components/Header-MenuButton/MenuButton';
import {connect} from 'react-redux';
import * as URL from '../../constants/URL';
import mallDetails from '../../actions/mallActions'


let dataSource = [];

// 屏幕宽度
var screenWidth = Dimensions.get('window').width;

class MallMain extends Component {
    constructor(props) {
        super(props)
        this.itemOnclick=this.itemOnclick.bind(this);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            listData: ds,
        }
    }

    componentWillMount() {
        let banners = MallMainValue.banners;
        this._setData();

    }

    _setData() {
        var rows = [];
        for (let i = 0; i < MallMainValue.products.length; i += 2) {
            var item = {id: i, left: null, right: null};
            item.left = (MallMainValue.products[i]);
            if (i < MallMainValue.products.length - 1) {
                item.right = (MallMainValue.products[i + 1]);
            }
            rows.push(item);
        }
        var ds = this.state.listData.cloneWithRows(rows);
        this.setState({listData: ds});
    }

    itemOnclick(product_id){
        // this.state.dispatch(mallDetails(product_id));
        this.props.navigator.push({name: 'ShoppingDetailsView'});
        // alert(id);
    }




    _renderRow(rowData) {
        let leftPhone = URL.IMAGE_URL + rowData.left.photo;
        let leftPrice = '价格' + rowData.left.price;

        let rightPhone = URL.IMAGE_URL + rowData.right.photo;
        let rightPrice = '价格' + rowData.right.price;
        return (
            <View style={{flex: 1,flexDirection: 'row',marginTop: 10,}}>
                <TouchableOpacity onPress={()=>{this.itemOnclick(rowData.left.product_id)}}
                    style={{backgroundColor:'while',flex: 1,flexDirection:'column',alignItems:'center',justifyContent: 'center'}}>
                    <Image style={styles.itemStyle} source={{uri:leftPhone}}></Image>
                    <Text style={{marginTop: 5,fontSize: 16}}>{rowData.left.name}</Text>
                    <Text style={{marginTop: 3,fontSize: 14}}>{leftPrice}</Text>
                </TouchableOpacity>
                <Image style={{flex: 1,backgroundColor: 'black',width: 2,height: screenWidth}}></Image>
                <TouchableOpacity onPress={()=>{this.itemOnclick(rowData.right.product_id)}} style={{flex: 1,flexDirection:'column',alignItems:'center',justifyContent: 'center'}}>
                    <Image style={styles.itemStyle} source={{uri:rightPhone}}></Image>
                    <Text style={{marginTop: 5,fontSize: 16}}>{rowData.right.name}</Text>
                    <Text style={{marginTop: 3,fontSize: 14}}>{rightPrice}</Text>
                </TouchableOpacity>
            </View>);
    }


    render() {
        let bannerImage=URL.IMAGE_URL +MallMainValue.banners.picture;
        return (
            <View style={{backgroundColor: 'while'}}>
                <Header title='首页'/>
                <ScrollView>
                    <Image style={{width:screenWidth,height:150}} source={{uri:bannerImage}}></Image>
                    <View style={styles.menuView}>
                        <MenuButton Button renderIcon={require('./image/wdgz.png')}
                                    showText={'我的关注'} tag={'wdgz'}
                                    onClick={this._onMenuClick}/>
                        <MenuButton renderIcon={require('./image/wlcx.png')}
                                    showText={'物流查询'} tag={'wlcx'}
                                    onClick={this._onMenuClick}/>
                        <MenuButton renderIcon={require('./image/cz.png')}
                                    showText={'充值'} tag={'cz'}
                                    onClick={this._onMenuClick}/>
                        <MenuButton renderIcon={require('./image/dyp.png')}
                                    showText={'电影票'} tag={'dyp'}
                                    onClick={this._onMenuClick}/>
                    </View>
                    <View style={styles.menuView}>
                        <MenuButton renderIcon={require('./image/yxcz.png')}
                                    showText={'游戏充值'} tag={'yxcz'}
                                    onClick={this._onMenuClick}/>
                        <MenuButton renderIcon={require('./image/xjk.png')}
                                    showText={'小金库'} tag={'xjk'}
                                    onClick={this._onMenuClick}/>
                        <MenuButton renderIcon={require('./image/ljd.png')}
                                    showText={'领京豆'} tag={'ljd'}
                                    onClick={this._onMenuClick}/>
                        <MenuButton renderIcon={require('./image/gd.png')}
                                    showText={'更多'} tag={'gd'}
                                    onClick={this._onMenuClick}/>
                    </View>
                    <ListView
                        style={styles.listViewStyle}
                        renderRow={this._renderRow.bind(this)}
                        dataSource={this.state.listData}
                    >
                    </ListView>
                </ScrollView>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    menuView: {
        flexDirection: 'row',
        marginTop: 10
    },
    itemStyle: {
        width: 120,
        height: 120,
    },
    listViewStyle:{
        backgroundColor: '#f9f9f9',
        borderTopWidth: 10,
        borderBottomWidth: 10,
        borderBottomColor: '#f9f9f9',
        borderTopColor: '#f9f9f9',

    }
});
function mapStateToProps(state) {
    return {};
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}
export default connect(
    mapStateToProps
)(MallMain);

