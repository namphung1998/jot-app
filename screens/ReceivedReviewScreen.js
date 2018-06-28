import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';
import BackButton from "../components/BackButton";

@withMappedNavigationProps()
class ReceivedReviewScreen extends Component {


  onBackPress = () => {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View>
        <Header
          backgroundColor='#7dc99f'
          leftComponent={<BackButton text='Back' onPress={this.onBackPress}/>}
        />
        <Text>Received Review</Text>
        <Text>Received Review</Text>
        <Text>Received Review</Text>
        <Text>Received Review</Text>
        <Text>Received Review</Text>
        <Text>Received Review</Text>
      </View>
    );
  }
}

export default ReceivedReviewScreen;