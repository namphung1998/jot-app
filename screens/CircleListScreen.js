import React, { Component } from 'react';
import { Text, View, FlatList, Platform } from 'react-native';
import { Header, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../actions';

const ROOT_URL = 'https://shrouded-tundra-41496.herokuapp.com';

class CircleListScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: false
    }
  }

  componentDidMount() {
    const willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      () => {
        this.props.fetchCircles();
      }
    )
  }

  componentWillMount() {
    this.props.fetchCircles();
    // this.fetchData(this.props);
    const result = this.props.circles.map(async (item) => {
      try {
        let { data } = await axios({
          url: `${ROOT_URL}/circles/${item.circle_id}`,
          method: 'get',
          headers: { Authorization: this.props.token }
        });

        return data;
      } catch (err) {
        console.log(err);
      }
    });

    Promise.all(result).then(completed => {
      console.log(completed);
      this.data = completed;
      console.log(this.data);
    });
    console.log(this.data);
  }

  componentWillReceiveProps(nextProps) {
    // this.fetchData(nextProps);
    const result = nextProps.circles.map(async (item) => {
      try {
        let { data } = await axios({
          url: `${ROOT_URL}/circles/${item.circle_id}`,
          method: 'get',
          headers: { Authorization: this.props.token }
        });

        return data;
      } catch (err) {
        console.log(err);
      }
    });

    Promise.all(result).then(completed => {
      console.log(completed);
      this.data = completed;
      console.log(this.data);
    });
  }

  fetchData(props) {
    const result = props.circles.map(async (item) => {
      try {
        let { data } = await axios({
          url: `${ROOT_URL}/circles/${item.circle_id}`,
          method: 'get',
          headers: { Authorization: props.token }
        });

        return data;
      } catch (err) {
        console.log(err);
      }
    });

    Promise.all(result).then(completed => {
      console.log(completed);
      this.data = completed;
      console.log(this.data);
    });
    // console.log(this.data);
  }

  renderItem({ item }) {
    console.log(item)
    return <ListItem title={item.name}/>
  }

  render() {
    console.log(this.data);
    return (
      <View>
        <Header
          centerComponent={{ text: 'My Circles ', style: { color: '#fff', fontSize: 36 }}}
          backgroundColor='#7dc99f'
        />
        <FlatList
          data={this.data}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={(item, i) => String(i)}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { circles } = state.circle;
  const { token } = state.auth;

  return { circles, token };
}

export default connect(mapStateToProps, actions)(CircleListScreen);
