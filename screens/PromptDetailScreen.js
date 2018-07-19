import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';
import BackButton from "../components/BackButton";
import MyHeader from '../components/MyHeader';

@withMappedNavigationProps()
class PromptDetailScreen extends Component {
  onBackPress = () => {
    this.props.navigation.navigate('promptList');
  }

  onReviewPress = () => {
    this.props.navigation.navigate('submissionList', { prompt: this.props.prompt });
  }

  onSubmitPress = () => {
    this.props.navigation.navigate('submit', { prompt: this.props.prompt });
  }

  render() {
    return (
      <View>
        <MyHeader
          backgroundColor='#7dc99f'
          leftComponent={<BackButton text='Back to Prompts' onPress={this.onBackPress}/>}
        />
        <Card
          title={this.props.prompt.title}
        >
          <Text>{this.props.prompt.body}</Text>
          <View style={styles.buttonContainerStyle}>
            <Button
              title='Submit a Response'
              onPress={this.onSubmitPress}
            />
            <Button
              title='Give a Review'
              onPress={this.onReviewPress}
            />
          </View>

          <Text style={{ paddingTop: 16 }}>{`Number of responses: ${this.props.prompt.submissions.length}`}</Text>
        </Card>

      </View>
    );
  }
}

const styles = {
  buttonContainerStyle: {
    flexDirection: 'row',
    marginTop: 16,
    // backgroundColor: 'blue',
    justifyContent: 'center'
  },
}

export default PromptDetailScreen;
