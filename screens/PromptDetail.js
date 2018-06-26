import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button, Card } from 'react-native-elements';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';
import BackButton from "../components/BackButton";

@withMappedNavigationProps()
class PromptDetail extends Component {
  onBackPress = () => {
    this.props.navigation.navigate('promptList');
  }

  render() {
    return (
      <View>
        <Header
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
            />
            <Button
              title='Give a Review'
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
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingTop: 16
  },
}

export default PromptDetail;