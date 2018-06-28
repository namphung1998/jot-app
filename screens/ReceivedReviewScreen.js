import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Header, ListItem, Card } from 'react-native-elements';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';
import BackButton from "../components/BackButton";

@withMappedNavigationProps()
class ReceivedReviewScreen extends Component {
  onBackPress = () => {
    this.props.navigation.goBack();
  }

  renderItem = ({ item }) => {
    return (
      <ListItem
        title={item.body}
      />
    )
  }

  render() {
    return (
      <View>
        <Header
          backgroundColor='#7dc99f'
          leftComponent={<BackButton text='Back' onPress={this.onBackPress}/>}
        />
        <Card title='Reviews'>
          <FlatList
            data={this.props.submission.reviews}
            renderItem={this.renderItem}
            keyExtractor={(item, i) => String(i)}
          />
        </Card>
      </View>
    );
  }
}

export default ReceivedReviewScreen;