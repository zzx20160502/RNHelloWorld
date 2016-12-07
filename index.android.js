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

import MainScreen from './js/login/LoginView.js';
 class RNHelloWorld extends Component {
    constructor(props) {
        super(props);
    }
    renderScene(route, navigator) {
        return <route.component navigator={navigator}  {...route.passProps} />;
    }
    configureScene(route, routeStack) {
        if (route.type == 'Bottom') {
            return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
        }
        return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
    }

    render() {
        return (
            <Navigator
                initialRoute={{component: MainScreen}}
                configureScene={this.configureScene}
                renderScene={this.renderScene}
            />
      );
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
