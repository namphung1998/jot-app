import React, { Component } from 'react';
import { Text, View, FlatList, Platform } from 'react-native';
import { Header, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CircleListScreen extends Component {

  componentDidMount() {
    const willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      () => {
        this.props.fetchCircles();
        this.data = this.props.circles;
      }
    )
  }

  componentWillReceiveProps(nextProps) {
    this.data = nextProps.circles;
  }

  renderItem = ({ item }) => {
    return (
      <ListItem
        title={item.name}
      />
    );
  }


  render() {
    return (
      <View style={{ paddingTop: Platform.OS === 'android' ? 24 : null }}>
        <Header
          centerComponent={{ text: 'My Circles ', style: { color: '#fff', fontSize: 36 }}}
          backgroundColor='#7dc99f'
        />
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
  const { circles } = state.circle.circles;

  return { circles };
}

export default connect(mapStateToProps, actions)(CircleListScreen);
