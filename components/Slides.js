import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Swiper from 'react-native-swiper';

class Slides extends Component {
  constructor(props) {
    super(props);
    this.state = { last: false };
  }

  renderSlides() {
    return this.props.data.map((item, i) => {
      return (
        <View style={[styles.slideStyle, { backgroundColor: item.color }]}>
          <Text style={styles.textStyle}>{item.text}</Text>
          {this.renderButton(index)}
        </View>
      );
    });
  }

  onIndexChanged = (index) => {
    if (index === this.props.data.length - 1) {
      this.setState({ last: true });
    }
  }

  render() {
    return (
      <View>
        <Swiper
          showsButtons={!this.state.last}
          onIndexChanged={this.onIndexChanged}
        >
          {this.renderSlides()}
        </Swiper>
      </View>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    aignItems: 'center'
  },
  textStyle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 15
  },
}

export default Slides;
