import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import BackButton from "../components/BackButton";
import { withMappedNavigationProps } from 'react-navigation-props-mapper';

@withMappedNavigationProps()
class SubmissionScreen extends Component {
  onBackPress = () => {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View>
        <Header
          backgroundColor='#7dc99f'
          leftComponent={<BackButton text='Back' onPress={this.onBackPress}/>}
          centerComponent={{ text: this.props.prompt.title }}
        />

      </View>
    );
  }
}

export default SubmissionScreen;