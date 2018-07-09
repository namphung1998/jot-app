import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Swiper from 'react-native-swiper';

const SLIDE_DATA = [
  { text: 'Welcome to Jot!', color: '#03a9f4' },
  { text: 'This will help you become a better writer', color: '#009688' },
  { text: 'Sign in and start writing!', color: '#03a9f4' }
];

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { last: false };
  }

  render() {
    return (
      <Swiper style={styles.wrapper}
        showsButtons={!this.state.last}
        onIndexChanged={index => {
          if (index === 2) {
            this.setState({ last: true });
          } else {
            this.setState({ last: false });
          }
        }}
      >
        <View style={styles.slide1}>
          <Text style={styles.text}>Welcome to Jot!</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>This Will Make You a Better Writer.</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>Sign in and Start Writing!</Text>
          <Button
            title="Let's begin!"
            buttonStyle={styles.buttonStyle}
            raised
            onPress={() => this.props.navigation.navigate('auth')}
          />
        </View>
      </Swiper>
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
