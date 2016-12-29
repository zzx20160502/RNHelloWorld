/**
 * Created by zhf on 16/12/23.
 */
'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    ListView,
    Platform,
    PixelRatio,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import {connect} from 'react-redux';
import Header from'../../components/Header-title';
import Swiper from'../../components/swiper/SwiperView';

const font = require('../../styles/fontStyle');
var Modify = require('./FetchData');

var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

var A = ScreenWidth / 12;
var a = ScreenHeight / 60;

var homePageSource = [];
let dic = [];


class HomePageIndex extends Component {

    constructor(props) {
        super(props)
        this.state = {
            homePageSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
        }
        let modify = new Modify();
        dic = modify.get();
        this._renderRow = this._renderRow.bind(this);
    }


    componentDidMount() {
        var Arr = [],
            sectionIDs = [],//所有区ID的数组
            rowIDs = [];//行ID数组
        let tempId = ['0', '1', '2', '3'];
        for (var i = 0; i < tempId.length; i++) {

            rowIDs[i] = [];
            var tempArr = [];
            for (var j = 0; j < dic.list.length; j++) {
                if (tempId[i] == dic.list[j].prdType) {
                    sectionIDs.push(i);
                    rowIDs[i].push(dic.list[j].prdTypeExplain);
                    tempArr.push(dic.list[j]);
                }

            }
            if (tempArr.length !== 0) {
                Arr.push(tempArr);
            }
        }
        this.setState({
                homePageSource: this.state.homePageSource.cloneWithRows(Arr)
            }
        )
    }

    _adverOnclck() {
        alert('查看广告');
    }


    render() {
        // alert(this.state.homePageSource.getRowCount());
        return (
            <View style={{flex:1,flexDirection:'column',backgroundColor: '#f9f9f9'}}>
                <Header style={styles.homepagetitle} title="消息中心"/>
                <ScrollView style={{width: ScreenWidth,height: ScreenHeight}}>

                    <View style={{flex:1,flexDirection: 'column'}}>


                        {/*<TouchableOpacity onPress={this._adverOnclck.bind(this)}>*/}
                        <Swiper/>
                        {/*</TouchableOpacity>*/}

                        {this._checkData()}
                    </View>
                </ScrollView>
            </View >
        );

    }

    _checkData() {
        if (this.state.homePageSource.getRowCount() == 0 && this.state.homePageSource) {
            let tips = '暂无信息';
            return (
                <View >
                    <Text style={{fontSize: 16,color: '#878787',marginTop: 30}}>{tips}</Text>
                </View>
            );
        } else {
            return (
                <ListView
                    dataSource={this.state.homePageSource}
                    renderRow={(rowData, sectionID, rowID)=>this._renderRow(rowData, sectionID, rowID)}
                ></ListView>
            );
        }
    }

    _itemOnclick() {
        alert('暂不能跳转');
    }

    _renderRow(list, sectionID, rowID) {


        let prdTypeExplain = list[0].prdTypeExplain;
        let prdTips = list[0].prdTips;

        return (
            <View style={styles.cellViewStyle}>

                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={styles.markStyle}/>
                    <Text
                        style={{justifyContent:'center',alignItems:'center',fontSize: 24,marginLeft:1*a}}>{prdTypeExplain}</Text>
                    <Text
                        style={{justifyContent:'center',alignItems:'center',fontSize: 17,marginLeft:1*a}}>{prdTips}</Text>
                </View>
                {this._renderItemView(list, sectionID, rowID)}
            </View>
        );
    }


    _renderItemView(list, sectionID, rowID) {
        if (list.length == 0) {
            return;
        }
        let tempDataLength = 0;
        let myList = [];

        let tempData = Array.from(list);
        tempDataLength = tempData.length;
        for (let i = 0; i < tempDataLength; i++) {
            let data = list[i];
            var arr = data.prdTips.split(',');

            myList.push(
                <TouchableOpacity onPress={this._itemOnclick.bind(this)}>
                    <View style={styles.listviewItemStyle}>
                        <View style={{flexDirection: 'column',marginTop:20}}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.yieIdStyle}>{data.yield  }</Text>
                                <Text
                                    style={{color: '#f13a28',marginTop: 2 * a,marginRight: 2 * a,fontSize: 20}}>{data.yieldUnit }</Text>
                            </View>
                            <Text
                                style={{marginLeft:2*a,marginBottom:1*a,color:'#666666',}}>{data.yieldName}</Text>
                        </View>
                        <View style={{flexDirection: 'column',height: 8*a,marginTop:3*a}}>
                            <Text style={{fontSize: 18,color:'rgb(51,51,51)',fontWeight: 'bold' }}>{data.prdName}</Text>
                            <Text
                                style={{fontSize: 16,color:'#333333'}}>{data.timeLimit + data.timelimitUnit + '|' + data.pfirstAmt + data.pfirstAmtUnit}</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.btnDefaultStyle}>{arr[0]}</Text>
                                <Text style={styles.btnDefaultStyle2}>{arr[1]}</Text>
                            </View>
                        </View>
                        <Image
                            style={{marginTop: 5*a,width:50,height: 50,marginRight:1*a,marginLeft:2*a}}
                            source={require('./image/icon_4.png')}/>
                    </View>
                </TouchableOpacity>
            )
        }
        return myList;
    }
}

const styles = StyleSheet.create({
        imageStyle1: {
            width: ScreenWidth,
            height: ScreenHeight * 0.3,
        },
        btnDefaultStyle: {
            width: 6 * a,
            height: 2 * a,
            marginTop: 1 * a,
            color: '#ffffff',
            fontSize: font.T2,
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgb(58,158,252)',
            borderColor: 'rgb(58,158,252)',
            borderRadius: 5,
            borderWidth: (Platform.OS === 'ios' ? 1.0 : 1.5) / PixelRatio.get(),
        },
        btnDefaultStyle2: {
            width: 6 * a,
            height: 2 * a,
            marginTop: 1 * a,
            color: '#ffffff',
            fontSize: font.T2,
            marginLeft: 1 * a,
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgb(58,158,252)',
            borderColor: 'rgb(58,158,252)',
            borderRadius: 5,
            borderWidth: (Platform.OS === 'ios' ? 1.0 : 1.5) / PixelRatio.get(),
        },

        yieStyle: {
            color: 'red',
            fontSize: font.D2,
        },
        yieIdStyle: {
            marginLeft: 2 * a,
            marginTop: 2 * a,
            fontSize: 35,
            color: '#f13a28',
        },

        markStyle: {
            width: 3,
            height: 5 * a,
            backgroundColor: '#f13a28',
        },
        cellViewStyle: {
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderBottomColor: '#f9f9f9',
            borderTopColor: '#f9f9f9',
            backgroundColor: 'white',
            flexDirection: 'column',
            marginTop: 36,
        },
        listviewItemStyle: {
            width: ScreenWidth,
            flexDirection: 'row',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderBottomColor: '#f9f9f9',
            borderTopColor: '#f9f9f9',
            backgroundColor: 'white',
        },
        homepagetitle: {
            width: ScreenWidth,
            height: 64,
        },
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
)(HomePageIndex);
