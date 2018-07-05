import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderSlides() {
    return this.props.data.map((item, index) => {
      return (
        <View style={[styles.slideStyle, { backgroundColor: item.color }]} key={index}>
          <Text style={styles.slideTextStyle}>{item.text}</Text>
          {this.renderButton(index)}
        </View>
      );
    });
  }

  renderButton(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          title="Let's begin!"
          buttonStyle={styles.buttonStyle}
          raised
          onPress={this.props.onComplete}
        />
      );
    }
  }

  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        style={{ flex: 1 }}
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slideTextStyle: {
    fontSize: 36,
    color: 'white',
    textAlign: 'center',
    margin: 15
  },
  buttonStyle: {
    backgroundColor: '#0288d1',
    marginTop: 15
  }
};

export default Slides;
