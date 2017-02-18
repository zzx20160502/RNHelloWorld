/**
 * Created by zhf on 16/12/29.
 */
'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    TouchableWithoutFeedback,
    ViewPager,
    ListView,
    Platform,
    PixelRatio,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import {connect} from 'react-redux';
import Header from'../../components/Header-title';
// import ViewPager from 'react-native-viewpager';

const font = require('../../styles/fontStyle');
var Modify = require('./../homePage/FetchData');
import MenuButton from '../../components/Header-MenuButton/MenuButton';

var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var A = ScreenWidth / 12;
var a = ScreenHeight / 60;
const len = 160;

const BANNER_IMGS = [
    require('./image/1.jpg'),
    require('./image/2.jpg'),
    require('./image/3.jpg'),
    require('./image/4.jpg')
];
class Shopping extends Component {
    constructor(props) {
        super(props)

        // 用于构建DataSource对象
        // var dataSource = new ViewPager.DataSource({
        //     pageHasChanged: (p1, p2) => p1 !== p2,
        // });
        this._onMenuClick = this._onMenuClick.bind(this);
        this._onRecommendClick = this._onRecommendClick.bind(this);
        this._renderRow = this._renderRow.bind(this);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // 实际的DataSources存放在state中
        this.state = {
            // dataSource: dataSource.cloneWithPages(BANNER_IMGS),
            listData: ds
        }

    }

    componentWillMount() {
        fetch('http://m.jd.com/index/recommend.action?_format_=json&page=1')
            .then((res) => res.json())
            .then((str) => {
                let arr = JSON.parse(str.recommend).wareInfoList;
                var rows = [];
                for (let i = 0; i < arr.length; i += 2) {
                    var item = {id: i, left: null, right: null};
                    item.left = (arr[i]);
                    if (i < arr.length - 1) {
                        item.right = (arr[i + 1]);
                    }
                    rows.push(item);
                }
                var ds = this.state.listData.cloneWithRows(rows);
                this.setState({listData: ds});
            });
    }

    _renderPage(data, pageID) {
        return (
            <Image
                source={data}
                style={styles.page}/>
        );
    }

    _onMenuClick(title, tag) {
        alert('提示你点击了:' + title + " Tag:" + tag);
    }

    _onRecommendClick(wareId) {
        let url = 'http://item.m.jd.com/product/' + wareId + '.html';
        alert(url);
        this.props.navigator.push({
            name: 'WebView',
            url: url
        });
    }

    _renderRow(rowData) {
        return (
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={{flex:1,alignItems:'center'}}
                                  onPress={()=>{this._onRecommendClick(rowData.left.wareId)}}>
                    <View style={{flex:1,alignItems:'center'}}>
                        <Image resizeMode={'stretch'} source={{uri:rowData.left.imageurl}}
                               style={{width:len,height:len}}/>
                        <Text numberOfLines={2} style={styles.recommendTitle}>{rowData.left.wname}</Text>
                        <View style={{width:len,borderWidth:0.5,borderColor:'#d7d7d7'}}/>
                        <View
                            style={{flexDirection:'row',width:len, marginTop: 6, marginBottom: 22,alignItems:'flex-start'}}>
                            <Text style={styles.priceText}>￥{rowData.left.jdPrice}</Text>
                            <TouchableOpacity>
                                <View style={{width:50,height:18,borderWidth:1,borderColor:'#999999',borderRadius:3,justifyContent: 'center',
alignItems: 'center'}}>
                                    <Text
                                        style={{color:'#999999',fontSize:12,textAlign:'center'}}>看相似</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1,alignItems:'center'}}
                                  onPress={()=>{this._onRecommendClick(rowData.right.wareId)}}>
                    <View style={{flex:1,alignItems:'center'}}>
                        <Image resizeMode={'stretch'} source={{uri:rowData.right.imageurl}}
                               style={{width:len,height:len}}/>
                        <Text numberOfLines={2} style={styles.recommendTitle}>{rowData.right.wname}</Text>
                        <View style={{width:len,borderWidth:0.5,borderColor:'#d7d7d7'}}/>
                        <View
                            style={{flexDirection:'row',width:len, marginTop: 6, marginBottom: 22,alignItems:'flex-start'}}>
                            <Text style={styles.priceText}>￥{rowData.right.jdPrice}</Text>
                            <TouchableOpacity>
                                <View style={{width:50,height:18,borderWidth:1,borderColor:'#999999',borderRadius:3,justifyContent: 'center',
alignItems: 'center'}}>
                                    <Text
                                        style={{color:'#999999',fontSize:12,textAlign:'center'}}>看相似</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <ListView
                style={{flex:1,backgroundColor:'white'}}
                dataSource={this.state.listData}
                renderRow={this._renderRow}
                renderHeader={()=>{return(
                <View>
                    {/*<ViewPager*/}
                        {/*style={{height:130}}*/}
                        {/*dataSource={this.state.dataSource}*/}
                        {/*renderPage={this._renderPage}*/}
                        {/*isLoop={true}*/}
                        {/*autoPlay={true}/>*/}
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
                    <View style={{marginTop:15,borderWidth:0.5,borderColor:'#ccc'}}/>
                    <Text style={{color:'#7f7f7f',fontSize:12,padding:10}}>猜你喜欢</Text>
                </View>)}}>
            </ListView>
        );
    }

}
const styles = StyleSheet.create({
        menuStyle: {
            width: 50,
            flex: 1,

        },
        page: {
            flex: 1,
            height: 130,
            resizeMode: 'stretch'
        },
        menuView: {
            flexDirection: 'row',
            marginTop: 10
        },
        recommendTitle: {
            width: len,
            flexWrap: 'wrap',
            fontSize: 12,
            color: 'black',
            flex: 1,
            marginTop: 8,
            marginBottom: 8,
            height: 30
        },
        priceText: {
            flex: 1,
            alignSelf: 'flex-start',
            textAlign: 'left',
            fontSize: 13,
            color: '#f15353'
        }
    }
);
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
)(Shopping);
