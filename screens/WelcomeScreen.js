import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to Jot!', color: '#9DD6EB' },
  { text: 'This will help you become a better writer', color: '#97CAE5' },
  { text: 'Sign in and start writing!', color: '#92BBD9' }
];

class WelcomeScreen extends Component {
  onComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    return (
      <Slides
        data={SLIDE_DATA}
        onComplete={this.onComplete}
      />
    );
  }
}

export default WelcomeScreen;
