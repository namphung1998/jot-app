import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import axios from 'axios';
import MyHeader from '../components/MyHeader';
import * as actions from '../actions';

const async = require('async');

class CircleListScreen extends Component {
  // data = [
  //   { id: 1, name: 'ENGL150-03', desc: 'This is the online circle for Intro to Creative Writing'}
  // ];

  componentWillMount() {
    this.props.fetchCircles();
    this.data = this.props.circles;
  }

  componentDidMount() {
    const willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      () => {
        console.log('list mounted');
        this.fetchData();
      }
    );
  }

  fetchData() {
    this.props.fetchCircles();

    let _data = []

    async.each(this.props.circles, async (item) => {
      try {
        let { data } = await axios({
          url: `${ROOT_URL}/circles/${item.circle_id}`,
          method: 'get',
          headers: { Authorization: token }
        });

        _data.push(data);
      } catch (err) {
        console.log(err);
      }
    });

    console.log(_data);

    this.data = _data;
  }

  renderItem = ({ item }) => {
    return (
      <ListItem
        title={item.name}
        bottomDivider
      />
    )
  }

  render() {
    return (
      <View>
        <MyHeader text='My Circles' backgroundColor='#7dc99f'/>
        <FlatList
          data={this.data}
          renderItem={this.renderItem}
          keyExtractor={(item, i) => String(i)}
        />
      </View>
    );
  }
}


function mapStateToProps(state) {
  return {
    circles: state.circle.circles,
    token: state.auth.token
  };
}

export default connect(mapStateToProps, actions)(CircleListScreen);
