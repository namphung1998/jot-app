import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Header } from 'react-native-elements';

class CircleScreen extends Component {
  render() {
    return (
      <View>
        <Header
          centerComponent={{ text: 'My Circles ', style: { color: '#fff', fontSize: 36 }}}
          backgroundColor='#7dc99f'
        />
      </View>
    );
  }
}

export default CircleScreen;
