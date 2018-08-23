import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import Swiper from 'react-native-swiper';

class Slides extends Component {
  state = { last: false };

  renderSlides() {
    return this.props.data.map((item, i) => {
      return (
        <View key={i} style={[styles.slideStyle, { backgroundColor: item.color }]}>
          <Text style={styles.slideTextStyle}>{item.text}</Text>
          {i === this.props.data.length - 1 && this.renderButton()}
        </View>
      );
    })
  }

  renderButton() {
    return (
      <Button
        buttonStyle={styles.buttonStyle}
        raised
        title="Let's begin!"
        onPress={this.props.onComplete}
      />
    );
  }

  onIndexChanged = (i) => {
    if (i === this.props.data.length - 1) {
      this.setState({ last: true });
    } else {
      this.setState({ last: false });
    }
  }

  render() {
    return (
      <Swiper
        showsButtons={!this.state.last}
        onIndexChanged={this.onIndexChanged}
      >
        {this.renderSlides()}
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideTextStyle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 15
  },
  buttonStyle: {
    backgroundColor: '#0288d1',
    marginTop: Platform.OS === 'ios' ? 15 : 0
  }
});

export default Slides;
