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

const styles = {
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 15
  },
  buttonStyle: {
    backgroundColor: '#0288d1',
    marginTop: 15
  }
};

export default WelcomeScreen;
