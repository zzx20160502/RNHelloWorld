/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
    Navigator,
  ToastAndroid,
  Text,
    Image,
    TouchableHighlight,
  View, TouchableOpacity, TextInput,
    ListView
} from 'react-native';

import MainScreen from './listviewTest';
class RNHelloWorld extends Component {
    constructor(props) {
        super(props);
    }

  // render() {
  //   return (
  //       <View style={{flex: 1, flexDirection: 'column'}}>
  //         <View style={{padding:10}}>
  //
  //         <TextInput style={{height:40}}
  //                    please="hello wrold"
  //                    returnKeyType='next'
  //                    placeholder="请输入搜索的内容"
  //
  //                    onChangeText={(text)=>this.setState({text})}
  //         />
  //       </View>
  //
  //
  //
  //
  //       <View style={{flex: 1, flexDirection: 'row',justifyContent:'center' } }>
  //         <View style={{width: 50, height: 50, backgroundColor: 'powderblue',flex:1}} />
  //         <View style={{width: 50, height: 50, backgroundColor: 'skyblue',flex:2}} />
  //         <View style={{width: 50, height: 50, backgroundColor: 'steelblue',flex:3}} />
  //       </View>
  //
  //
  //       <View style={{flex: 1, flexDirection: 'row',justifyContent:'center' } }>
  //       <TouchableOpacity >
  //         <Image
  //             style={styles.instructions}
  //             source={require('./icon/ic_launcher.png')}
  //         />
  //      </TouchableOpacity>
  //         <TouchableHighlight onPress={this._onPressButton}
  //                             activeOpacity="0">
  //           <Image
  //               style={styles.instructions}
  //               source={require('./icon/ic_launcher.png')}
  //           />
  //         </TouchableHighlight>
  //       </View>
  //       </View>
  //   );
  // }
    renderScene(route, navigator) {
        return <route.component navigator={navigator}  {...route.passProps} />;
    }
    render() {
        return (
            // <Navigator
            //    style={{flex:1}}
            //    initialRoute={{component: listviewTest}}
            //    renderScene={this.renderScene}/>
            <Navigator
                initialRoute={{name: 'main', index: 0, id:'main'}}
                renderScene={(route, navigator) => RNHelloWorld._renderPage(route,navigator)}
            />
      );

    }
    static _renderPage(route, nav) {
        switch (route.id) {
            case 'main':
                return (<MainScreen nav={nav}/>);
                break;
        }
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNHelloWorld', () => RNHelloWorld);
