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
    ListView,
    Platform,
    PixelRatio,
    TouchableOpacity,
    Dimensions
} from 'react-native';
class HomPageDetails extends Component{

    render(){
        <View>
            <ScrollView>

            </ScrollView>
        </View>

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
            fontSize: 39,
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
        }
    }
);
function mapStateToProps(state) {
    return {
    };
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}
export default connect(
    mapStateToProps
)(HomPageDetails);
