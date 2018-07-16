import React, { Component } from 'react';
import { View, FlatList, Platform } from 'react-native';
import { Header } from 'react-native-elements';

class CircleScreen extends Component {
  render() {
    return (
      <View style={{ paddingTop: Platform.OS === 'android' ? 24 : null }}>
        <Header
          centerComponent={{ text: 'My Circles ', style: { color: '#fff', fontSize: 36 }}}
          backgroundColor='#7dc99f'
        />
      </View>
    );
  }
}

export default CircleScreen;
