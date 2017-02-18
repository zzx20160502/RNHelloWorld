import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image
} from 'react-native';
// import HomeView from './HomeView';
import HomeViewIndex from  './homePage/HomePageIndex';
import Shopping from './shop/Shopping';
import MallMain from './mall/MallMainView'
import {Main} from '../components/main-tabs-view';

import Actions from '../actions';

class MainTabsView extends Component {
  renderTab = (idx)=>{
    const { navigator } = this.props;
    switch (idx){
      case 0:
        return <HomeViewIndex navigator={navigator}/>;
      case 1:
        return <Shopping navigator={navigator}/>;
      case 2:
        return <MallMain navigator={navigator}/>;
      default:
        return null;
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Main {...this.props} renderTab={this.renderTab}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

function mapStateToProps(state) {
  return {
    tab: state.navigation.index
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainTabsView);
