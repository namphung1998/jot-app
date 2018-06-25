import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';

@withMappedNavigationProps()
class PromptDetail extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.prompt.body}</Text>
      </View>
    );
  }
}

export default PromptDetail;