/**
 * Created by zhf on 16/12/23.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    Navigator
} from 'react-native';

import MainTabsView from './MainTabsView';
import Shopping from './shop/Shopping';
import ShoppingDetailsView from './mall/ShoppingDetailsView'
import WebView from '../WebView'

const ROUTES = {MainTabsView, Shopping,WebView,ShoppingDetailsView};

class App extends Component {
    constructor(props) {
        super(props);
        this.renderScene = this.renderScene.bind(this);
        this.configureScene = this.configureScene.bind(this);
    }

    renderScene = (route, navigator) => {
        let Scene = ROUTES[route.name];
        return <Scene {...route} navigator={navigator}/>;
    }
    configureScene = (route, routeStack) => {
        return Navigator.SceneConfigs.PushFromRight;
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <Navigator
                    initialRoute={{name: 'MainTabsView'}}
                    renderScene={this.renderScene}
                    configureScene={this.configureScene}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default App;


