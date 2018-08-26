import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import axios from 'axios';
import MyHeader from '../components/MyHeader';
import Spinner from '../components/Spinner';
import * as actions from '../actions';

class CircleListScreen extends Component {
  componentWillMount() {
    this.props.fetchCircles();
    this.data = this.props.circles;
  }

  componentWillReceiveProps(nextProps) {
    this.data = nextProps.circles;
  }

  componentDidMount() {
    const willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      () => {
        this.props.fetchCircles();
        this.data = this.props.circles;
      }
    );
  }

  renderList() {
    if (this.props.loading) {
      return (
        <Spinner/>
      );
    }

    return (
      <FlatList
        data={this.data}
        renderItem={this.renderItem}
        keyExtractor={(item, i) => String(i)}
      />
    );
  }

  renderItem = ({ item }) => {
    return (
      <ListItem
        title={item.title}
        bottomDivider
      />
    );
  };

  render() {
    return (
      <View>
        <MyHeader text='My Circles' backgroundColor='#7dc99f'/>
        {this.renderList()}
      </View>
    );
  }
}


function mapStateToProps(state) {
  const { circles, loading } = state.circle;

  return {
    circles,
    token: state.auth.token,
    loading
  };
}

export default connect(mapStateToProps, actions)(CircleListScreen);
